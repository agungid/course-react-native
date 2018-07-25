import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { 
  Container, Header, Content, Body, Text, Title, Left, Button,
  Icon, List, Right, Fab
} from 'native-base';

import TodoItem from "./components/TodoItem";

export default class App extends Component {

  // ################ Lifesycle ###############
  //Constructor akan dijalankan saat instance class
  constructor(){
    super();
    console.log('Construct');

    this.state = {
      count: 0,
      todos: [{
        id: 1,
        note: 'Todo Item #1'
      }],
      update: true,
    }
  }

  //Method/Event yang akan dieksekusi saat komponent dibuat dan sebelum methode render dibuat
  componentWillMount(){
    console.log('componentWillMount');
    count = this.state.todos.length;

    this.setState({
      count
    })
  }

  //Method/Event yang akan di eksekusi saat komponent dibuat, namun dijalankan setelah methode render
  componentDidMount(){
    console.log('componentDidMount');
  }

  //Method Akan dijalankan saat ada update perbahan pada props
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps')
  }

  // Akan dijalankan saat sebelum component update
  // Method ini merupakan penentu apakah sebuah komponen akan di-render ulang atau tidak.
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate running!!!");
    
    //cek update component
    if(newState.update) {
      return true;
      console.log('Component update');
    } else {     
      return false;
      console.log('Dont update component!!');
    }
  }

  //############ Method ################

  _keyExtractor = (item, index) => item.id.toString();

  handleIncTodo() {

    count = this.state.count+1;
    todos = this.state.todos;
    todos.push({
        id: count,
        note: 'Todo Item #'+count
    })

    this.setState({
      todos,
      count
    })

  }

  handleNotUpdateComponent() {
    update = this.state.update;

    if(this.state.update){
      update = false
    } else {
      update = true
    }

    this.setState({
      update
    })

    alert("ShouldComponentUpdate: return "+update);
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
        <Fab
          style={{ backgroundColor: 'red' }}
          position="bottomLeft"
          onPress={() => this.handleNotUpdateComponent()}>
          <Icon name="add" />
        </Fab>

      </Container>
    )
  }
}
