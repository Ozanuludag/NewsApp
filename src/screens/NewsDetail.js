import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const NewsDetail = ({route}) => {

  const {item} = route.params;
  
  return (
    <View style={{flex: 1}}>
      <WebView
        scalesPageToFit={false}
        source={{uri: item.url}}
        originWhitelist={['*']}
        style={{flex: 1, margin: 10}}
      />
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({});
