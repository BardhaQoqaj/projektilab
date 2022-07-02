import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, Navigate, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';
import {useNavigate } from 'react-router-dom';
import { Formik , Form } from 'formik';
import { values } from 'mobx';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MySelectInput from '../../../app/common/form/MySelectInput';


export default observer(function BookForm() {
const navigate = useNavigate();
const {bookStore}= useStore();
const {createBook, updateBook,loading,loadBook,loadingInitial}=bookStore;
const {id} = useParams<{id: string}>();

const [book, setBook] = useState<Book>({
    id: '',
    titulli: '',
    kategoria: '',
    pershkrimi: '',
    cmimi: '',
    faqet: '',
    botuesi: '',
    disponueshmeria: ''

});

const validationSchema = Yup.object({
    titulli: Yup.string().required('The book title is required'),
    pershkrimi: Yup.string().required('The book description is required'),
    kategoria: Yup.string().required(),
    faqet: Yup.string().required(),
    cmimi: Yup.string().required(),
    botuesi: Yup.string().required(),
    disponueshmeria: Yup.string().required(),
})

useEffect(() => {
    if (id) loadBook(id).then(book => setBook(book!))
}, [id, loadBook]);


     function handleFormSubmit(book : Book) {
        if (book.id.length === 0) {
         let newBook = {
             ...book,
             id: uuid()
         };
         createBook(newBook).then(() => navigate(`/books/${newBook.id}`))
     } else {
         updateBook(book).then(() => navigate(`/books/${book.id}`))
     }
 }


    if (loadingInitial) return <LoadingComponent content='Loading book...' />
       
    return (
        <Segment clearing>
            <Header content='Book Details' sub color='teal'/>
            <Formik  
            validationSchema={validationSchema}
            enableReinitialize 
            initialValues={book} 
            onSubmit={values => handleFormSubmit(values)}>
            {({ handleSubmit, isValid , isSubmitting, dirty}) => (
        <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                 
            <MyTextInput placeholder='Titulli' name='titulli'  />
            <MyTextArea rows={3} placeholder='Pershkrimi'  name='pershkrimi'  />
            <MySelectInput options={categoryOptions} placeholder='Kategoria'  name='kategoria'  />
            <MyTextInput placeholder='Faqet'  name='faqet'  />
            <MyTextInput placeholder='Cmimi'  name='cmimi' />
            <MyTextInput placeholder='Botuesi' name='botuesi' />
            <MyTextInput placeholder='Disponueshmeria' name='disponueshmeria' />
            <Button
             disabled={isSubmitting || !dirty || !isValid} 
             loading={loading} floated='right' 
             positive type='submit' content='Submit' />
            <Button as={Link} to='/books' floated='right' type='button' content='Cancel' />
       </Form>
            )}

      </Formik>
           
      </Segment>
    )
} )
