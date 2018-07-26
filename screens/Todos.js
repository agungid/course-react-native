import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Icon, List, Fab, Text } from 'native-base';

import TodoItem from "../components/TodoItem";

export default class Todos extends Component {

  constructor() {
    super();

    this.state = {
      count: 0,
      todos: [{
        id: 1,
        note: 'Todo item'
      }],
    }
  }

  componentWillMount() {
    let count = this.state.todos.length;

    this.setState({
      count
    })
  }

  componentWillReceiveProps(props) {
    const { navigation } = props;
    const note = navigation.getParam('note', '');
    const id  = this.state.todos.length+1;

    let todos = this.state.todos;
    todos.push({
      id, note
    });
    
    this.setState({
      todos
    })
  }

  _keyExtractor = (item, index) => item.id.toString();

  render() {

    return (
      <Container>
        
        <List>
          <FlatList
            data={this.state.todos}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => <TodoItem todo={item} />}
          />
        </List>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('TodosCreate')}>
          <Icon name="add" />
        </Fab>

      </Container>
    )
  }
}
