import React from "react";
import { Grid } from "semantic-ui-react";
import BookList from "./BookList";
import BookDetails from '../details/BookDetails';
import BookForm from '../form/BookForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function BookDashboard(){

    const {bookStore} = useStore();
    const {selectedBook, editMode} = bookStore;
    return(
        <Grid>
            <Grid.Column width='10'>
          <BookList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedBook && !editMode &&
                <BookDetails  
                />}
                {editMode &&
                <BookForm/>}
            </Grid.Column>
        </Grid>
    )
 })

