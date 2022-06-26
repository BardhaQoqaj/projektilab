import React, { useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export default observer( function BookDetails( ) {
    const {bookStore} = useStore();
    const {selectedBook: book, loadBook, loadingInitial } = bookStore;
    const {id} = useParams<{id: string}>();

    
    useEffect(() => {
        if (id) loadBook(id);
    }, [id, loadBook]);

    if (loadingInitial || !book) return <LoadingComponent />;

    if (!book) return <LoadingComponent />;
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${book.kategoria}.jpg`} />
            <Card.Content>
                <Card.Header>{book.titulli}</Card.Header>
                <Card.Meta>
                    <span>{book.cmimi}</span>
                </Card.Meta>
                <Card.Description>
                    {book.pershkrimi}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/manage/${book.id}`} basic color='blue' content='Edit' />
                    <Button as={Link} to='/books' basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
} )