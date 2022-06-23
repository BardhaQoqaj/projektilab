import React,{useEffect, useState} from 'react';
import { Container} from 'semantic-ui-react';
import { Book } from '../models/book';
import NavBar from './NavBar';
import BookDashboard from '../../features/books/dashboard/BookDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
const[books, setBooks]=useState<Book[]>([]);
const [selectedBook, setSelectedBook] = useState<Book| undefined>(undefined);
const [editMode, setEditMode] = useState(false);
const[loading,setLoading]=useState(true);
const [submitting, setSubmitting] = useState(false);

useEffect(()=>{
  agent.Books.list().then(response => {
    let books: Book[]=[];
    response.forEach(book => {
     //book.cmimi = book.cmimi.split('T')[0];
     books.push(book);
    })

  setBooks(books);
  setLoading(false);

  })
}, [])

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
  setBooks([...books.filter(x => x.id !== id)])
  setSubmitting(true);
  agent.Books.delete(id).then(() => {
    setBooks([...books.filter(x => x.id !== id)]);
    setSubmitting(false);
  })

}
if(loading) return <LoadingComponent content='Loading App'/>
  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{marginTop: '7em'}}> 
            <BookDashboard  
          books={books} 
          selectedBook={selectedBook}
          selectBook={handleSelectBook}
          cancelSelectBook={handleCancelSelectBook}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditBook}
          deleteBook={handleDeleteBook}
          submitting={submitting}
        />
      </Container>

      </>
      );
      }

      /*
      </List>
      <header>
      <ul>
      {books.map((book : any) => (
          <li key={book.id}>
            {book.titulli}
            </li>
            ))}
      </ul>
      </header>
    </div>
  );
}
*/

export default App;
