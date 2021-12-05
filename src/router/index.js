import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Home, ListActor, DetailFilm, DetailActor, Rate} from '../pages/index';
import {createStackNavigator} from 'react-navigation-stack';
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
