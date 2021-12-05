import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Home, ListActor, DetailFilm, DetailActor, Rate} from '../pages/index';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Navigation from './Navigation';

const DetailFilmStack = createStackNavigator(
  {
    DetailFilm,
    Rate,
  },
  {
    headerMode: 'none',
    initialRouteName: 'DetailFilm',
  },
);
const DetailActorStack = createStackNavigator(
  {
    DetailActor,
  },
  {
    headerMode: 'none',
    initialRouteName: 'DetailActor',
  },
);

const AppStack = createStackNavigator(
  {
    App: Navigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'App',
  },
);

const Router = createStackNavigator(
  {
    App: AppStack,
    Film: DetailFilmStack,
    Actor: DetailActorStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'App',
  },
);

export default createAppContainer(Router);

// const HomeStack = createStackNavigator(
//   {
//     // Home,
//     DetailFilm,
//     Rate,
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Home',
//   },
// );

// const ActorStack = createStackNavigator(
//   {
//     // ListActor,
//     DetailActor,
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'ListActor',
//   },
// );

// const AppTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeStack,
//       navigationOptions: {
//         tabBarIcon: ({tintColor}) => (
//           <MaterialCommunityIcons
//             name="movie-open"
//             color={tintColor}
//             size={27}
//           />
//         ),
//         header: null,
//       },
//     },
//     Actor: {
//       screen: ActorStack,
//       navigationOptions: {
//         tabBarIcon: ({tintColor}) => (
//           <Icon name="persons" color={tintColor} size={23} />
//         ),
//         header: null,
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       activeTintColor: '#e91e63',
//       inactiveTintColor: '#b2b2b2',
//       activeBackgroundColor: '#161616',
//       showLabel: true,
//       elevation: 10,
//       inactiveBackgroundColor: '#161616',
//     },
//   },
// );

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       App: AppTabNavigator,
//       Home: HomeStack,
//       Actor: ActorStack,
//       // Detail: DetailStack,
//     },
//     {
//       // headerMode: 'none',
//       initialRouteName: 'App',
//     },
//   ),
// );

// --------------------------------------------------------

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//         headerShown: false,
//         // tabBarShowLabel: false,
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'List Film',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="movie-open" color={color} size={30} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Actor"
//         component={Actor}
//         options={{
//           tabBarLabel: 'List Actor',
//           tabBarIcon: ({color, size}) => (
//             <Icon name="persons" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// const Navigation = createSwitchNavigator(
//   {
//     App: MyTabs,
//     // Film: FilmStack,
//     // Actor: ActorStack,
//   },
//   {
//     initialRouteName: 'App',
//   },
// );

// export default createAppContainer(Navigation);
// --------------------------------------------------------
