import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Book } from "../../../app/models/book";

interface Props{
    books: Book[];
    selectBook: (id: string) => void;
    deleteBook: (id: string) => void;
}
export default function BookList({books, selectBook, deleteBook } : Props) {
    return(
        <Segment>
            <Item.Group devided>
              {books.map(book => (
                <Item key={book.id}>
                    <Item.Content>
                        <Item.Header as='a'>{book.titulli}</Item.Header>
                        <Item.Meta>{book.cmimi}</Item.Meta>
                            <Item.Description>
                                <div>{book.pershkrimi}</div>
                                <div>{book.disponueshmeria}, {book.kategoria}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectBook(book.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteBook(book.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={book.kategoria} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )

}