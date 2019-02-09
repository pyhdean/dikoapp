import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Row extends React.Component {
  renderShortBody() {

  }

  renderBody() {

  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[this.props.titleStyle]}>{this.props.title.trim()}</Text>
        <Text style={[this.props.bodyStyle]}>{this.props.body.trim()}</Text>
      </View>
    )
  }
}

// body 12
//  교회소식 15
// HOME: 20
// 10 for tabs

//007762
//77777

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12
  },
});