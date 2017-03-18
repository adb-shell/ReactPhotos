'use strict';
import React,{ Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as constants from '../Constants';
import fetchUnsplash from './UnsplashAPIManager';
import UnsplashPhoto from './UnsplashPhoto';
import GridView from 'react-native-grid-view'

var self;
export default class UnsplashPhotoList extends React.Component{

  constructor(){
    super();
    this.state = {
        loading:true,
        dataSource:null,
    };
    self = this;
    this.fetchUnsplashPhoto();
  }


  fetchUnsplashPhoto(){
      fetchUnsplash(function(error,responseData){
        console.log(responseData);
        if(error){
          console.log('Error:'+error);
          return;
        }
        self.setState({
          loading:false,
          dataSource:responseData,
        });
      });
  }

  renderItem(item) {
      return <UnsplashPhoto key={item.id} photo={item} />
  }

  render() {
    if(this.state.loading){
      return(
          <ActivityIndicator
            animating={this.state.loading}
            style={[styles.centering, {height: 80}]}
            size="large"
            />
      );
    }
    return(
      <GridView
        items={this.state.dataSource}
        itemsPerRow={constants.MOVIES_PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});
