import React, { Component } from 'react';
import { 
  Container, Header, Content, Body, Text, Title, Left, Button,
  Icon, List, ListItem, Right, CheckBox
} from 'native-base';

export default class App extends Component {

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
            <ListItem>
              <CheckBox checked={ false } color="aqua" />
              <Body>
                <Text>Firts Item</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={true} color="red" />
              <Body>
                <Text>Second Item</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox color="green" />
              <Body>
                <Text>Third Item</Text>
              </Body>
            </ListItem>
          </List>
        </Content>

      </Container>
    )
  }
}
