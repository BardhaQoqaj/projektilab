import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import BookList from "./BookList";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from "../../../app/layout/LoadingComponent";


export default observer(function BookDashboard(){

    const {bookStore} = useStore();
    const{loadBooks, bookRegistry} = bookStore;

useEffect(()=>{
 if(bookRegistry.size <= 1) loadBooks();
}, [bookRegistry.size, loadBooks])

if(bookStore.loadingInitial) return <LoadingComponent content='Loading Books...'/>
    return(
        <Grid>
            <Grid.Column width='10'>
          <BookList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2> Book filters</h2>
            </Grid.Column>
        </Grid>
    )
 })

