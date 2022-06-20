import React from "react";
import { Button,Container, Menu } from "semantic-ui-react";


interface Props {
    openForm: () => void;
}
export default function NavBar({openForm}: Props){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.jpg" alt="logo" style={{marginRight: '10px'}}/>
                    Books
                </Menu.Item>
                <Menu.Item name='Books' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Book'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}