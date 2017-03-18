'use strict';
import React,{ Component } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View
} from 'react-native';

export default class ListRow extends React.Component{
  render(){
    return(
      <View style={styles.thumbnail}>
        <Image source={{uri: this.props.row.webformatURL}} style={styles.thumbnail} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    width:Dimensions.get('window').width/2,
    height:200,
  },
});
