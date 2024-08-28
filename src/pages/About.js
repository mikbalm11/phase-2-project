import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

function About() {
    return (
        <Container text style={{ marginTop: '2em' }}>
            <Header as='h2' icon textAlign='center'>
                <Icon name='info circle' circular />
                <Header.Content>About MovieDB</Header.Content>
            </Header>
            <p>
                Welcome to MovieDB! This application is a demonstration of React's capabilities,
                showcasing features like routing, dynamic data fetching, and user-friendly interfaces.
            </p>
            <p>
                Whether you're a movie enthusiast or just exploring, MovieDB allows you to browse, search,
                and discover information about your favorite movies. Our platform is designed with simplicity
                in mind, ensuring a seamless experience as you navigate through the app.
            </p>
            <p>
                Feel free to explore the movies we have on display, use the search function to find specific titles,
                or add your own movies to our database. We hope you enjoy your time here!
            </p>
        </Container>
    );
}

export default About;
