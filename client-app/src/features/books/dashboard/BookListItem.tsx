import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';

interface Props {
    book: Book
}

export default function BookListItem({ book }: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/logo.jpg' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/books/${book.id}`}>
                                {book.titulli}
                            </Item.Header>
                            <Item.Description>Hosted by stduents</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='book' /> {book.kategoria}
                    <Icon name='address card' /> {book.botuesi}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{book.pershkrimi}</span>
                <Button 
                    as={Link}
                    to={`/books/${book.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
} 