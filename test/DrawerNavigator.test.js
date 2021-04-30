import React from 'react';
import renderer from 'react-test-renderer'
import IndividualCourse from '../views/IndividualCourse';
import FetchActivities from '../src/FetchActivities';
import { useNavigation } from '@react-navigation/native';
import DrawerNavigator from '../routes/DrawerNavigator'
import { Platform } from '../routes/DrawerNavigator'

jest.mock('react-native');
Platform.mockImplementation(() => {OS: 'iOS'});

jest.mock('@react-navigation/native');
useNavigation.mockImplementation(() => 'Navigation mocked');

jest.mock('../src/FetchActivities');
FetchActivities.mockImplementation(() => 'Fetch request mocked');

jest.mock('../views/IndividualCourse');
IndividualCourse.mockImplementation(() => 'IndividualCourse mocked');

describe('DrawerNavigator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DrawerNavigator />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})
