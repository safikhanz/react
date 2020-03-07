import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planets({data}) {
    return (
        <>
            <h1>Planets</h1>
            <Card.Group >
                {data.map((planets, i) => {
                    return (
                        <Grid.Column Key={i} >
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planets.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Climate</strong>
                                        <p>{planets.climate}</p>
                                        <strong>Terrain</strong>
                                        <p>{planets.terrain}</p>
                                        <strong>Population</strong>
                                        <p>{planets.population}</p>
                                        <strong>Flims</strong>
                                        <p>{planets.films}</p>
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
