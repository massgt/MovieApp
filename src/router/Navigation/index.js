import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Home, ListActor} from '../../pages/index';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator(
  {
    Home,
    // DetailFilm,
    // Rate,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const ActorStack = createStackNavigator(
  {
    ListActor,
    // DetailActor,
  },
  {
    headerMode: 'none',
    initialRouteName: 'ListActor',
  },
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons
            name="movie-open"
            color={tintColor}
            size={27}
          />
        ),
        header: null,
      },
    },
    Actor: {
      screen: ActorStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="persons" color={tintColor} size={23} />
        ),
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#b2b2b2',
      activeBackgroundColor: '#161616',
      showLabel: true,
      elevation: 10,
      inactiveBackgroundColor: '#161616',
    },
  },
);

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       App: AppTabNavigator,
//     //   Home: HomeStack,
//     //   Actor: ActorStack,
//       // Detail: DetailStack,
//     },
//     {
//       // headerMode: 'none',
//       initialRouteName: 'App',
//     },
//   ),
// );

const Navigation = createSwitchNavigator(
  {
    App: AppTabNavigator,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(Navigation);
