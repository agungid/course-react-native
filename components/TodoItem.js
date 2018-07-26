import React,{ Component } from "react";
import { ListItem, CheckBox, Body, Right, Text } from "native-base";
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

  constructor() {
    super();
    this.state = {
      checked: false
    }
  }

  handleChecked(event, id) {
    alert(id)
    
    let checked = this.state.checked;
    
    if (checked){
      checked = false;
    } else {
      checked = true;
    }

    this.setState({
      checked
    })
  }

  render() {
    const {todo:{ id, note }} = this.props;
    const { checked } = this.state;

    return(
      <ListItem key={id}>
        <CheckBox 
          key={id}
          checked={checked}
          onPress={(event) => this.handleChecked(event, id)}
        />
        <Body>
          <Text>{note}</Text>
        </Body>
        <Right/>
      </ListItem>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}