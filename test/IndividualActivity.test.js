import React from 'react';
import renderer from 'react-test-renderer';
import IndividualActivity from '../views/IndividualActivity';
import { useNavigation } from '@react-navigation/native';
import { doesActivityNameExist } from '../src/UserData';

jest.mock('@react-navigation/native');
useNavigation.mockImplementation(() => 'Navigation mocked');

jest.mock('../src/UserData');
doesActivityNameExist.mockImplementation();

describe('IndividualActivity', () => {
  const route = {
    params: {
      item: {
        name: 'test',
        size: 'test',
        description: 'test',
      }
    }
  }
  it('renders correctly', () => {
    const tree = renderer.create(<IndividualActivity route={route}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
