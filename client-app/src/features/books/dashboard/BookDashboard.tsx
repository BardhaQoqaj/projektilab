import React from "react";
import { Grid } from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import BookList from "./BookList";
import BookDetails from '../details/BookDetails';
import BookForm from '../form/BookForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

interface Props {
    books: Book[];
    selectedBook: Book | undefined;
    selectBook: (id: string) => void;
    cancelSelectBook: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (Book: Book) => void;
    deleteBook: (id: string) => void;
    submitting: boolean;
}   

export default observer(function BookDashboard({books, deleteBook,
    createOrEdit,submitting}: Props){

    const {bookStore} = useStore();
    const {selectedBook, editMode} = bookStore;
    return(
        <Grid>
            <Grid.Column width='10'>
          <BookList books={books} 
          deleteBook={deleteBook}
          submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedBook && !editMode &&
                <BookDetails  
                />}
                {editMode &&
                <BookForm
                 createOrEdit={createOrEdit} 
                 submitting={submitting} 
                />}
            </Grid.Column>
        </Grid>
    )
            
})