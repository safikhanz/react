import React from 'react';
import { Card, Grid, CardContent, Modal, Header, Button } from 'semantic-ui-react';

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
                                <Card.Content extra>
                                    <Modal trigger={<Button>Show Modal</Button>}>
                                        <Modal.Header>Select a Photo</Modal.Header>
                                        <Modal.Content>
                                        <Modal.Description>
                                            <Header>Default Profile Image</Header>
                                            <p>
                                                {planets.name}
                                            </p>
                                        </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Card.Group>
        </>
    );
}
