import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import IndividualActivity from '../views/IndividualActivity';
import DrawerNavigator from './DrawerNavigator';

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Drawer" component={DrawerNavigator} />
    <Screen name="IndividualActivity" component={IndividualActivity} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default AppNavigator;
