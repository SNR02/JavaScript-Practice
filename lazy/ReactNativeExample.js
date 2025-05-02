import React, { Suspense, ComponentType } from 'react';
import { ActivityIndicator, View } from 'react-native';

export const withSuspend = <P extends object>(Component: ComponentType<P>): ComponentType<P> => {
  return (props: P) => (
    <Suspense
      fallback={
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

// navigation/routes.ts
import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type Route = {
  name: string;
  component: () => Promise<{ default: React.ComponentType<any> }>;
  options?: NativeStackNavigationOptions;
};

export const routes: Route[] = [
  {
    name: 'Home',
    component: () => import('../screens/HomeScreen'),
    options: { title: 'Home' },
  },
  {
    name: 'About',
    component: () => import('../screens/AboutScreen'),
    options: { title: 'About' },
  },
];



// navigation/MainNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, type Route } from './routes.ts';
import { withSuspend } from '../hoc';

const Stack = createNativeStackNavigator();

const createRoutes = (_routes: Route[]) => {
  return _routes.map((route) => (
    <Stack.Screen
      key={route.name}
      name={route.name}
      component={withSuspend(React.lazy(route.component))}
      options={route.options || {}}
    />
  ));
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {createRoutes(routes)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;