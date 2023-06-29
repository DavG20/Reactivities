import { Form, Segment, Button } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";



export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { selectedActivity, closeForm, createActivity, updateActivity, loadingMode } = activityStore;
    const initialState = selectedActivity ?? {
        id: "",
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmitt() {
        // console.log(activity);
        // handleSubmit(activity);
        console.log(activity , "act");
        activity.id ? updateActivity(activity) : createActivity(activity);

    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;

        setActivity({ ...activity, [name]: value });

    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmitt} >
                <Form.Input placeholder="Title" value={activity.title} onChange={handleInputChange} name="title" />
                <Form.TextArea placeholder="Description" value={activity.description} onChange={handleInputChange} name="description" />

                <Form.Input type="date" placeholder="Date" value={activity.date} onChange={handleInputChange} name="date" />

                <Form.Input placeholder="Category" value={activity.category} onChange={handleInputChange} name="category" />

                <Form.Input placeholder="City" value={activity.city} onChange={handleInputChange} name="city" />

                <Form.Input placeholder="Venue" value={activity.venue} onChange={handleInputChange} name="venue" />

                <Button loading={loadingMode} floated="right" positive content="Submit" type="submit" />
                <Button onClick={closeForm} floated="right" content="Cancel" type="button" />

            </Form>

        </Segment>
    )

})