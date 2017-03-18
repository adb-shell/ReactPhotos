'use strict';
import React,{ Component } from 'react';
import {
  StyleSheet,
  ListView,
  ActivityIndicator,
  View
} from 'react-native';

import fetchPixaBay from './FlexAPIManager';
import ListRow from './ListRow';

var self;
export default class PixaBay extends React.Component{

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      loading:true,
      dataSource:ds.cloneWithRows([]),
    };
    self = this;
    this.fetchPixaBayPhoto();
  }

  fetchPixaBayPhoto(){
    fetchPixaBay(function(error,response){
      if(error){
        console.log("ERROR:"+error);
        return;
      }

      self.setState({
        loading:false,
        dataSource:self.state.dataSource.cloneWithRows(response.hits),
      });
    });
  }

  render(){
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
      <ListView contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListRow row={rowData}/> }
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
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
