import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Category, Dashboard, Library, Profile} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          //   tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          //   tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icons name="category" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          //   tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="library" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          //   tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icons name="more-horiz" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
