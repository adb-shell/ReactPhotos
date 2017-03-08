'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UnsplashPhotoList from './react-components/UnsplashComponent/UnsplashPhotoList';

class ComicComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UnsplashPhotoList />
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('ComicComponent', () => ComicComponent);
