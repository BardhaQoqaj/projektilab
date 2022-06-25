import React,{useEffect} from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import BookDashboard from '../../features/books/dashboard/BookDashboard';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';


function App() {
const {bookStore}=useStore();

useEffect(()=>{
  bookStore.loadBooks();
}, [bookStore])

if(bookStore.loadingInitial) return <LoadingComponent content='Loading App'/>
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}> 
            <BookDashboard   />
      </Container>

      </>
      );
      }

  

export default observer (App);
