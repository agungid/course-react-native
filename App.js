import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { 
  Container, Header, Content, Body, Text, Title, Left, Button,
  Icon, List, Right, Fab
} from 'native-base';

import TodoItem from "./components/TodoItem";

export default class App extends Component {

  state = {
    count: 0,
    todos: []
  }

  _keyExtractor = (item, index) => item.id.toString();

  handleIncTodo() {

    count = this.state.count+1;
    todos = this.state.todos;
    todos.push({
        id: count,
        note: 'Todo Item #'+count
    })

    this.setState({
      todos: todos,
      count: count
    })

    console.log(todos)
  }

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
            <Title>Not To Do Lists ({this.state.count})</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <List>
            <FlatList
              data={this.state.todos}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TodoItem todo={item} />}
            />
            {/* {this.state.todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)} */}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.handleIncTodo() }>
          <Icon name="add" />
        </Fab>

      </Container>
    )
  }
}
