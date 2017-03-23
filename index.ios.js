'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import UnsplashPhotoList from './react-components/UnsplashComponent/UnsplashPhotoList';
import PixaBay from './react-components/PixabayComponent/PixaBay';

class PhotoComponent extends React.Component {
  render() {
    if(this.props.type){
      return (
        <View style={styles.container}>
          <UnsplashPhotoList />
        </View>
      );
    }
    return (
      <View style={styles.container}>
          <PixaBay />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// Module name
AppRegistry.registerComponent('PhotoComponent', () => PhotoComponent);
