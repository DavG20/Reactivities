import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    handleSubmit: (activity: Activity) => void;

    deleteActivity: (id: string) => void;



}

export default function ActivityDashboard({ activities, selectedActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, handleSubmit, deleteActivity }: Props) {

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities} selectActivity={selectActivity}
                deleteActivity = {deleteActivity} />

            </Grid.Column>
            <Grid.Column width="6">
                {selectedActivity && !editMode &&
                    <ActivityDetail activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />}
                {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} handleSubmit={handleSubmit} />}
            </Grid.Column>
        </Grid>
    )
} 