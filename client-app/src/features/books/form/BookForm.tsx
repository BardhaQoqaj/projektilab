import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, Navigate, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';
import {useNavigate } from 'react-router-dom';


export default observer(function BookForm() {
const navigate = useNavigate();
const {bookStore}= useStore();
const {createBook, updateBook,loading,loadBook,loadingInitial}=bookStore;
const {id} = useParams<{id: string}>();

const [book, setBook] = useState({
    id: '',
    titulli: '',
    kategoria: '',
    pershkrimi: '',
    cmimi: '',
    faqet: '',
    botuesi: '',
    disponueshmeria: ''

});

useEffect(() => {
    if (id) loadBook(id).then(book => setBook(book!))
}, [id, loadBook]);


    function handleSubmit() {
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

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setBook({...book, [name]: value})
    }

    if (loadingInitial) return <LoadingComponent content='Loading book...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Titulli' value={book.titulli} name='titulli' onChange={handleInputChange} />
                <Form.TextArea placeholder='Pershkrimi' value={book.pershkrimi} name='pershkrimi' onChange={handleInputChange} />
                <Form.Input placeholder='Kategoria' value={book.kategoria} name='kategoria' onChange={handleInputChange} />
                <Form.Input placeholder='Faqet' value={book.faqet} name='faqet' onChange={handleInputChange} />
                <Form.Input placeholder='Cmimi' value={book.cmimi} name='cmimi' onChange={handleInputChange}/>
                <Form.Input placeholder='Botuesi' value={book.botuesi} name='botuesi' onChange={handleInputChange}/>
                <Form.Input placeholder='Disponueshmeria' value={book.disponueshmeria} name='disponueshmeria' onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button as={Link} to='/books' floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
} )
