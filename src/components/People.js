import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function People({ data }) {
    return (
        <>
            <h1>Characters</h1>
            <Card.Group>
                {data.map((people, i) => {
                    return (
                        <Grid.Column Key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Gender</strong>
                                        <p>{people.gender}</p>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Homeworld</strong>
                                        <p>{people.homeworld}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Card.Group>
        </>
    );
}
