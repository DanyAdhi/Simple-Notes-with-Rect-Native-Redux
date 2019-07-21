import React, {Component} from 'react';

import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

// Screen App
import CustomDrawerComponent from './src/public/components/CustomDrawer';
import Home     from './src/public/screen/Home';
import Create   from './src/public/screen/CreateNotes';
import Edit     from './src/public/screen/EditNotes';

// Redux
import { Provider } from 'react-redux';
import store from './src/public/redux/Store';


const HomeDrawer = createDrawerNavigator({
  Home:{
    screen:Home
  }
},{
  contentComponent: CustomDrawerComponent
});


const AppNavigator = createStackNavigator({
  Home:{
    screen:HomeDrawer
  },
  Create:{
    screen:Create
  },
  Edit:{
    screen:Edit
  }
},{
  headerMode: 'none', //hidden header react-navigation
  defaultNavigationOptions:{
    title: 'Note'
  }
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer/>
      </Provider>
    );
  }
}