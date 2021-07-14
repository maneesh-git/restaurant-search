import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// createStackNavigator automatically shows different screens
// its also going to automatically show a header at the top of each screen


import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
    Search : SearchScreen,
    ResultsShow : ResultsShowScreen
}, {
    initialRouteName : 'Search',
    defaultNavigationOptions : {
      title: "Business Search  ",
    },
}
);


export default createAppContainer(navigator);

/* 
    initialRouteName : default route that we want to show anytime our app starts up.
    defaultNavigationOptions : some options that are used for every different screen.
    In general we can use this to customize the header 
    which is displayed at the top of each screen

    When our app first starts up, 
    anything we first export from App.js file is taken by react native
    and automatically shown on the screen of the device.

    So we always have to export a react component from the App.js file

    here we do not have a react component at all
    The createAppContainer function essestially creates a default react component,
    and displays whatever content the navigator is producing inside of that component.


*/