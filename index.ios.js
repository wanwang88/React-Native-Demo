/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';

//导入json数据
var BadgeData = require('./BadgeData.json');

var Dimensions = require('Dimensions');
//定义全局的一些变量
var {width} = Dimensions.get('window');
var cols = 3;
var boxW = 100;
var vMargin = (width-cols*boxW)/(cols+1);
var hMargin = 25;
class AImageDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*返回六个包*/}
        {this.renderAllBadge()}
      </View>
    );
  }

  //返回所有的包

  renderAllBadge(){
      //定义数组所有的子组件
    var allBadge = [];
    //遍历json数据
    for(var i=0 ;i<BadgeData.data.length;i++){
      var model = BadgeData.data[i];
      //直接装入数组
      allBadge.push(
        <View key={i} style={styles.autoViewStyle}>
          <Image style={styles.imagesStyle} source={{uri:model.icon}}/>
          <Text style={styles.textsStyle}>{model.title}</Text>
        </View>
      );
    }
    //返回
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    //横向
    flexDirection:'row',
    //换行显示
    flexWrap:'wrap'

  },

  autoViewStyle:{
    backgroundColor:'gray',
    //设置侧抽对齐
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:hMargin
  },

  imagesStyle:{
    width:80,
    height:80

  },
  textsStyle:{


  }
});

AppRegistry.registerComponent('AImageDemo', () => AImageDemo);
