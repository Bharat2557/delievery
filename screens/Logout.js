import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class Logout extends Component{
    render(){
return(
    <View 
    style={{
        flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
        <Text>This is Logout screen</Text>
    </View>
);
    }
}