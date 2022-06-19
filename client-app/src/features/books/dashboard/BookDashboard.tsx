import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import BookList from "./BookList";
import BookDetails from '../details/BookDetails';
import BoookForm from '../form/BookForm';

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
}

export default function BookDashboard({books, selectedBook, deleteBook,
    selectBook, cancelSelectBook, editMode, openForm, closeForm, createOrEdit}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
          <BookList books={books} 
          selectBook={selectBook} 
                    deleteBook={deleteBook}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedBook && !editMode &&
                <BookDetails 
                    book={selectedBook} 
                    cancelSelectBook={cancelSelectBook}
                    openForm={openForm} 
                />}
                {editMode &&
                <BookForm closeForm={closeForm} book={selectedBook} createOrEdit={createOrEdit} />}
            </Grid.Column>
        </Grid>
    )
}