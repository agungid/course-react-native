import React,{ Component } from 'react';
import { Container, Content, Text, Form, Item, Label, Input, Button } from 'native-base';

export default class TodosCreate extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    },
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    note = this.state.text;

    if (note.length >= 1) {
      this.props.navigation.navigate('Todos', {
        note
      });
    } else {
      alert('Not todo can\'t empty..!!');
    }
  }

  render() {
    return(
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Not Todo</Label>
            <Input onChangeText={(val) => this.setState({ text: val }) } />
          </Item>
          <Button full primary onPress={() => this.handleSubmit()}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Container>
    )
  }
}