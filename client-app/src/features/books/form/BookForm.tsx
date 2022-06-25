import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function BookForm() {
const {bookStore}= useStore();
const {selectedBook,closeForm, createBook, updateBook,loading}=bookStore;

    const initialState = selectedBook ?? {
        id: '',
        titulli: '',
        kategoria: '',
        pershkrimi: '',
        cmimi: '',
        faqet: '',
        botuesi: '',
        disponueshmeria: ''
        
    }

    const [book, setBook] = useState(initialState);

    function handleSubmit() {
       book.id ? updateBook(book) : createBook(book);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setBook({...book, [name]: value})
    }

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
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
} )
