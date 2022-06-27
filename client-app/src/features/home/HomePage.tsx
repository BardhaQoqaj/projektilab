import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <>
        <Container style={{ marginTop: '7em' }}>
            <h1>Home page</h1>
            <h3>Go to <Link to='/books'>Books</Link></h3>
        </Container><Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                    <Header as='h1' inverted>
                        <Image size='massive' src='/assets/logo.jpg' alt='logo' style={{ marginBottom: 12 }} />
                        BooksOnline
                    </Header>
                    <Header as='h2' inverted content='Welcome to Reactivities' />
                    <Button as={Link} to='/activities' size='huge' inverted>
                        Take me to the Activities!
                    </Button>
                </Container>
            </Segment></>
    )
} 