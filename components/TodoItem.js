import React,{ Component } from "react";
import { ListItem, CheckBox, Body, Right, Text } from "native-base";
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

  render() {
    let {todo:{ id, note }} = this.props
    return(
      <ListItem key={id}>
        <CheckBox value={id} />
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