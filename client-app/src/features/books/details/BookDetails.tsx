import React, { useEffect } from 'react';
import { Button, Card, Grid, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import BookDetailedHeader from './BookDetailedHeader';
import BookDetailedInfo from './BookDetailedInfo';
import BookDetailedChat from './BookDetailedChat';
import BookDetailedSidebar from './BookDetailedSidebar';

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
        <Grid>
        <Grid.Column width={10}>
            <BookDetailedHeader book={book} />
            <BookDetailedInfo book={book} />
            <BookDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
            <BookDetailedSidebar />
        </Grid.Column>
    </Grid>
    )
} )