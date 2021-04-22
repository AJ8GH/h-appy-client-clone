import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import IndividualActivity from '../views/IndividualActivity';
import SearchResults from '../views/SearchResults';
import DrawerNavigator from './DrawerNavigator';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = ({ state }) => (
  <Navigator headerMode="none">
    <Screen name="Drawer" children={() => <DrawerNavigator state={state} />} />
    <Screen name="IndividualActivity" component={IndividualActivity} />
    <Screen name="SearchResults" component={SearchResults} />
  </Navigator>
);

const AppNavigator = ({ state }) => (
  <NavigationContainer>
    <HomeNavigator state={state} />
  </NavigationContainer>
);

export default AppNavigator;
