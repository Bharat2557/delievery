import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import RestaurantList from "../screens/RestaurantList";
import Search from "../screens/Search";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
      isUpdated: false
    };
  }

  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={
          this.state.light_theme
            ? styles.bottomTabStyleLight
            : styles.bottomTabStyle
        }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "RestaurantList") {
              iconName = focused ? "restaurant" : "restaurant-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search-circle" : "search-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen
          name="RestaurantList"
          component={RestaurantList}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    );
  }

}


const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    bottomTabStyleLight: {
      backgroundColor: "#eaeaea",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });