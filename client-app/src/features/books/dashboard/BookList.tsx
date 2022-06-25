import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Book } from "../../../app/models/book";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function BookList() {
   
    const {bookStore} = useStore();
    const{deleteBook, books ,loading }=bookStore;

    const [target, setTarget] = useState('');

        function handleBookDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
            setTarget(e.currentTarget.name);
            deleteBook(id);
        }

        

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
                                <Button onClick={() =>bookStore.selectBook(book.id)} floated='right' content='View' color='blue' />
                               {/* <Button loading={submitting} onClick={() => deleteBook(book.id)} floated='right' content='Delete' color='red' /> */}
                                <Button 
                                    name={book.id}
                                    loading={loading && target === book.id} 
                                    onClick={(e) => handleBookDelete(e, book.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' 
                                /> 
                                <Label basic content={book.kategoria} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
              } )            