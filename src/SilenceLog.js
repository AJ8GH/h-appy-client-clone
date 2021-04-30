import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

export default function SilenceLog() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
}
