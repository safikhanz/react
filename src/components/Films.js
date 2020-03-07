import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Films( { data } ) {
    return (
        <>
            <h1>Movies</h1>
            <Card.Group>
                {data.map((films, i) => {
                    return (
                        <Grid.Column Key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{films.title}</Card.Header>
                                    <Card.Description>
                                        <strong>Episode</strong>
                                        <p>{films.episode_id}</p>
                                        <strong>Director</strong>
                                        <p>{films.director}</p>
                                        <strong>Release</strong>
                                        <p>{films.release_date}</p>
                                        <strong>Opening_Crawl</strong>
                                        <p>{films.opening_crawl}</p>
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
