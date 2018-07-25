import React,{ Component } from "react";
import { ListItem, CheckBox, Body, Right, Text } from "native-base";
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

  //Akan dijalankan saat ada update perbahan pada props
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps from TodoItem Component");
  }

  // akan dieksekusi jika method shouldComponenUpdate mengembalikan nilai true
  componentWillUpdate(nextProps, netxState) {
    console.log("componentWillUpdate is running!!");
  }

  // Even ini akan di eksekusi saat method render update selesai dijalankan. 
  // Event ini mirip dengan componentDidMount
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update!!!!!");
  }

  //Method ini akan dieksekusi sebelum komponen dihapus atau dihilangkan dari DOM
  componentWillUnmount() {
    console.log("ComponentWillUnmount running..!!")
  }

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