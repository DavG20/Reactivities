import { makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../models/activity";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';


export default class ActivityStore {
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loadingMode = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
            Date.parse(a.date) - Date.parse(b.date));
    }


    loadActivities = async () => {
        try {
            const activities = await agent.Activities.list();

            activities.forEach(activity => {
                activity.date = activity.date.split("T")[0];
                this.activityRegistry.set(activity.id, activity);
            })
            this.setLoadingInitial(false);


        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);

        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    selectActivity = (id: string) => {
        this.selectedActivity = this.activityRegistry.get(id);
    }
    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    openForm = (id?: string) => {
        // this.selectedActivity = this.activities.find(x => x.id === id);
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }

    createActivity = async (activity: Activity) => {
        this.loadingMode = true;
        activity.id = uuid();
        // Convert user input date to backend format
        if (activity.date) activity.date = new Date(activity.date).toISOString();
        // console.log(activity);
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.loadingMode = false;
                this.editMode = false;
            })


        } catch (error) {
            runInAction(() => {
                this.loadingMode = false;
            })

        }
    }
    updateActivity = async (activity: Activity) => {
        this.loadingMode = true;
        // Convert user input date to backend format
        if (activity.date) activity.date = new Date(activity.date).toISOString();
        console.log(activity);
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.loadingMode = false;
                this.editMode = false;
            })

        } catch (error) {
            runInAction(() => {
                this.loadingMode = false;

            })
        }
    }

    deleteActivity = async (id: string) => {
        this.loadingMode = true;
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                // this.activities.find(this.activities, act)
                this.activityRegistry.delete(id);
                if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
                this.loadingMode = false;

            })
        } catch (error) {
            runInAction(() => {
                this.loadingMode = false;
            })

        }

    }
    // submitting = () => {return false; }

    // handleSubmit = () => { }



}

