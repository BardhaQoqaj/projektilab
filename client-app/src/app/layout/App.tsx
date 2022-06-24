import React,{useEffect, useState} from 'react';
import { Container} from 'semantic-ui-react';
import { Book } from '../models/book';
import NavBar from './NavBar';
import BookDashboard from '../../features/books/dashboard/BookDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';


function App() {
const {bookStore}=useStore();
const[books, setBooks]=useState<Book[]>([]);
const [selectedBook, setSelectedBook] = useState<Book| undefined>(undefined);
const [editMode, setEditMode] = useState(false);
const [submitting, setSubmitting] = useState(false);

useEffect(()=>{
  bookStore.loadBooks();
}, [bookStore])

function handleSelectBook(id: string) {
  setSelectedBook(books.find(x => x.id === id));
}
function handleCancelSelectBook() {
  setSelectedBook(undefined);
}

function handleFormOpen(id?: string) {
  id ? handleSelectBook(id) : handleCancelSelectBook();
  setEditMode(true);
}

function handleFormClose() {
  setEditMode(false);
}
function handleCreateOrEditBook(book: Book) {
  book.id  
  ? setBooks([...books.filter(x => x.id !== book.id), book])
  : setBooks([...books, {...book, id: uuid()}]);
setEditMode(false);
setSelectedBook(book);
setSubmitting(true);
    
if (book.id) {
  agent.Books.update(book).then(() => {
    setBooks([...books.filter(x => x.id !== book.id),book])
    setSelectedBook(book);
    setEditMode(false);
    setSubmitting(false);
  })
} else {
 book.id = uuid();
  agent.Books.create(book).then(() => {
    setBooks([...books, book])
    setSelectedBook(book);
    setEditMode(false);
    setSubmitting(false);
})
}
}


function handleDeleteBook(id: string) {
  setSubmitting(true);
  agent.Books.delete(id).then(() => {
    setBooks([...books.filter(x => x.id !== id)]);
    setSubmitting(false);
  })

}
if(bookStore.loadingInitial) return <LoadingComponent content='Loading App'/>
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}> 
            <BookDashboard  
          books={bookStore.books} 
          createOrEdit={handleCreateOrEditBook}
          deleteBook={handleDeleteBook}
          submitting={submitting}
        />
      </Container>

      </>
      );
      }

  

export default observer (App);
