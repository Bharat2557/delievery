import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class RestaurantList extends Component{
    render(){
return(
    <View 
    style={{
        flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
        <Text>This is Restaurant list screen</Text>
    </View>
);
    }
}