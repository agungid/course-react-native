import React, { Component } from 'react';
import { 
  Container, Header, Content, Body, Text, Title, Left, Button,
  Icon, List, ListItem, Right, CheckBox
} from 'native-base';

export default class App extends Component {

  todos = [ 'First Item', 'Second Item', 'Third Item' ];

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
            { this.todos.map((todo, i) => (
              <ListItem key={i} >
                <CheckBox />
                <Body>
                  <Text>{ todo }</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>

      </Container>
    )
  }
}
