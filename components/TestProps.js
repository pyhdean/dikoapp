import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class TestProps extends React.Component {

  render() {
    return (
      <View>
        <Button title="H" onPress={()=>{this.props.clickH('Hyerim')}}/>
        <Button title="B" onPress={()=>{this.props.clickH('Bubble')}}/>
        <Button title="J" onPress={()=>{this.props.clickH('Jihyun')}}/>
        <Button title="Y" onPress={()=>{this.props.clickH('Yong')}}/>
        <Button title="L" onPress={()=>{this.props.clickH('Luna')}}/>
        <Button title="AB" onPress={()=>{this.props.switchG()}}/>
      </View>
    )
  }
}