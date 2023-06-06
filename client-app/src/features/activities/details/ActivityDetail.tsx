import React from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Card, Image } from "semantic-ui-react";


interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}


export default function ActivityDetail({ activity, cancelSelectActivity, openForm }: Props) {
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
                    <Button onClick={cancelSelectActivity} basic content="Cancel" color="grey" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}