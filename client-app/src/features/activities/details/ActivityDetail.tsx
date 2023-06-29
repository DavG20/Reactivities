import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";



export default observer(function ActivityDetail() {
    const { activityStore } = useStore();
    const { openForm, cancelSelectedActivity, selectedActivity: activity } = activityStore;
    if (!activity) return (<LoadingComponent />);
    return (
        <Card>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2" >
                    <Button onClick={() => openForm(activity.id)} basic content="Edit" color="blue" />
                    <Button onClick={() => cancelSelectedActivity()} basic content="Cancel" color="grey" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})