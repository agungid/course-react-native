import React, { Component } from 'react';
import { 
  Container, Header, Content, Body, Text, Title, Left, Button,
  Icon, List, ListItem, Right, CheckBox
} from 'native-base';

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
            { this.todos.map((todo) => (
              <ListItem key={todo.id} >
                <CheckBox value={ todo.id } />
                <Body>
                  <Text>{ todo.note }</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>

      </Container>
    )
  }
}
