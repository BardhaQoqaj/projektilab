import React from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import BookDashboard from '../../features/books/dashboard/BookDashboard';
import { observer } from 'mobx-react-lite';
import { Navigate, Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import BookForm from '../../features/books/form/BookForm';
import BookDetails from '../../features/books/details/BookDetails';
import { useStore } from '../stores/store';

function App() {
  const location = useLocation();

  return (
    <>
      <Route path='/' element={HomePage}/>
            <Route
            path="*"
            element={<Navigate to ="/" />}
           />
           <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Route path='/books' element={BookDashboard} />
              <Route path='/books/:id' element={BookDetails} />
              <Route key={location.key} path ={['/createBook', '/manage/:id']} element={BookForm} />
            </Container>
            </>
        )}
     
  

  

export default observer (App);
