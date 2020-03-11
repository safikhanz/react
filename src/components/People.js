import React from 'react';
import { Card, Grid, CardContent, Modal, Header, Button } from 'semantic-ui-react';

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
                                <Card.Content extra>
                                    <Modal trigger={<Button>Show Modal</Button>}>
                                        <Modal.Header>Select a Photo</Modal.Header>
                                        <Modal.Content>
                                        <Modal.Description>
                                            <Header>Default Profile Image</Header>
                                            <p>
                                                {people.films.join(',')}
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
