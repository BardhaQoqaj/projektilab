import React, { useEffect } from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import BookDashboard from '../../features/books/dashboard/BookDashboard';
import { observer } from 'mobx-react-lite';
import { Routes, Navigate, Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import BookForm from '../../features/books/form/BookForm';
import BookDetails from '../../features/books/details/BookDetails';
import { useStore } from '../stores/store';
import { ToastContainer } from 'react-toastify';
import TestErrors from '../../features/errors/TestError';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';


function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();
 
  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar />
       <ModalContainer />
      <Route path='/' element={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>

            {/* //element={<Navigate to ="/" />}
           ///> */}
           <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Routes>
              <Route path='/books' element={BookDashboard} />
              <Route path='/books/:id' element={BookDetails} />
              <Route key={location.key} path={['/createBook', '/manage/:id']} element={BookForm} />
              <Route path='/errors' element={TestErrors} />
              <Route path='/server-error' element={ServerError} />
              <Route element={NotFound}/>
              </Routes>
            </Container>
            </>
            )}
          />
        </>
      );
    }
     
  

  

export default observer (App);
