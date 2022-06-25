import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';

export default function BookDetails( ) {
    const {bookStore} = useStore();
    const {selectedBook: book, openForm, cancelSelectedBook} = bookStore;
    if (!book) return <LoadingComponent />;
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${book.kategoria}.jpg`} />
            <Card.Content>
                <Card.Header>{book.titulli}</Card.Header>
                <Card.Meta>
                    <span>{book.cmimi}</span>
                </Card.Meta>
                <Card.Description>
                    {book.pershkrimi}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(book.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedBook} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
} 