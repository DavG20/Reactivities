import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";


export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;


    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />

            </Grid.Column>
            <Grid.Column width="6">
                {selectedActivity && !editMode && <ActivityDetail />}
                {editMode && <ActivityForm />}
            </Grid.Column>
        </Grid>
    )
})