'use strict';
import React,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class UnsplashPhoto extends React.Component{
    render(){
      return(
          <View style={styles.movie} >
            <Image  source={{uri: this.props.photo.urls.thumb}} style={styles.thumbnail} />
            <View >
              <Text style={styles.title} numberOfLines={1}>
                  {this.props.photo.user.name}
              </Text>
            </View>
          </View>
      )
    }
}

const styles = StyleSheet.create({
  movie: {
    height: 150,
    width:160,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom:20
  },
  thumbnail: {
    width:160,
    height: 120,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },
});
