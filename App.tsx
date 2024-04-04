/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomMenu from './src/component/BottomMenu';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {

  return (
    <View style={_styles.sectionContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Dashboard'
            component={BottomMenu}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const _styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
