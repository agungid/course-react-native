import React, { Component } from 'react';
import { 
  Container, Header, Content, Body, Text, Title, Left, Button,
  Icon, List, Right
} from 'native-base';

import TodoItem from "./components/TodoItem";

export default class App extends Component {

  todos = [
    {
      id: 1,
      note: 'First Item'
    },
    {
      id: 2,
      note: 'Second Item '
    },
    {
      id: 3,
      note: 'Third Item'
    }
  ];

  render() {
    return(
      <Container>

        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Not To Do Lists</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <List>
            {this.todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
          </List>
        </Content>

      </Container>
    )
  }
}
