import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccessibilityHelpButton = () => (
  <TouchableOpacity
    style={{ paddingTop: 5 }}
    onPress={() => Alert.alert(
      'Accessibility',
      ['Rating of 1 to 10, where 10 is an activity accessible to everyone ',
        'and 1 is an activity that lots of people might not be able to do.'].join(''),
    )}
  >
    <Ionicons
      name="help-circle-outline"
      size={20}
      color="#B1B6A6"
      style={{ height: 20, width: 20, textAlign: 'center' }}
    />
  </TouchableOpacity>
);

export default AccessibilityHelpButton;
