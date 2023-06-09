import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

axios.defaults.baseURL = "http://localhost:5000/api";


const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),

    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),

    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),

}

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}
axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const Activities = {
    list: () => request.get<Activity[]>(`/Activities`),
    details: (id: string) => request.get<Activity>(`/Activities/${id}`),
    create: (activity: Activity) => request.post(`/Activities`, activity),
    update: (activity: Activity) => request.put(`/Activities/${activity.id}`, activity),
    delete: (id: string) => request.delete(`/Activities/${id}`)

}

const agent = {
    Activities
}

export default agent;