import React from 'react';
import renderer from 'react-test-renderer';
import AddActivity from '../views/AddActivity';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { FetchCategories } from '../src/FetchActivities';
import AccessibilityHelpButton from '../components/AccessibilityHelpButton';
import CostHelpButton from '../components/CostHelpButton';

jest.mock('../components/CostHelpButton');
CostHelpButton.mockImplementation(() => 'Cost button');

jest.mock('../components/AccessibilityHelpButton');
AccessibilityHelpButton.mockImplementation(() => 'Accessibility button');

jest.mock('../src/FetchActivities');
FetchCategories.mockImplementation(() =>  ['category1', 'category2']);

jest.mock('@react-native-picker/picker');
Picker.mockImplementation(() => 'Picker mocked');

jest.mock('@react-navigation/native');
useNavigation.mockImplementation(() => 'Navigation mocked');

test('renders correctly', () => {
  const tree = renderer.create(<AddActivity />).toJSON();
  expect(tree).toMatchSnapshot();
});
