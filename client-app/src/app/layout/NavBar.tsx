import React from "react";
import { Button,Container, Menu } from "semantic-ui-react";
import { useStore } from '../stores/store';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
  
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.jpg" alt="logo" style={{marginRight: '10px'}}/>
                    Books
                </Menu.Item>
                <Menu.Item as={NavLink} to='/books'name='Books' />
                <Menu.Item as={NavLink} to='/errors'name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createBook' positive content='Create Book'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}