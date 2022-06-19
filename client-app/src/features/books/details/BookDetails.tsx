import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';

interface Props {
    book: Book;
    cancelSelectBook: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ book, cancelSelectBook, openForm }: Props) {
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
                    <Button onClick={cancelSelectBook} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
} 