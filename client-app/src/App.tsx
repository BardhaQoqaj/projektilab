import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {
const[books, setBooks]=useState([]);

useEffect(()=>{
  axios.get('http://localhost:5000/api/books').then(response => {
   console.log(response);
  setBooks(response.data);

  })
},[])
  return (
    <div>
      <Header as='h2' icon='users' content='labcourse' >

      <List>
        {books.map((book : any) => (
          <List.Item key={book.id}>
            {book.Titulli}
          </List.Item>
        ))}
        </List>
        </Header>
      </div>
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
