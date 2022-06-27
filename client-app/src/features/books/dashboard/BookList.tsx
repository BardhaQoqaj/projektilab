import React from 'react';
import { Item, Segment} from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import BookListItem from './BookListItem';

export default observer(function BookList() {
   
    const {bookStore} = useStore();
    //const{deleteBook, books ,loading }=bookStore;
        
    return(
        <Segment>
            <Item.Group devided>
                {
                    <BookListItem key={book.id} book={book} />
                }
            </Item.Group>
        </Segment>
    )
              } )            