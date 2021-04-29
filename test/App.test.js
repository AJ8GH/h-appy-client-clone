import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import DrawerNavigator from '../routes/DrawerNavigator'
import { Platform } from 'react-native';
import AppNavigator from '../routes/AppNavigator';
import SearchResults from '../views/SearchResults'

jest.mock('../views/SearchResults');
SearchResults.mockImplementation(() => 'SearchResults mocked');

jest.mock('../routes/AppNavigator');
AppNavigator.mockImplementation(() => 'AppNavigator mocked');

jest.mock('react-native');
Platform.mockImplementation(() => {OS: 'iOS'});

jest.mock('../routes/DrawerNavigator');
DrawerNavigator.mockImplementation(() => 'DrawerNavigator mocked');

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
