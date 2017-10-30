import { StackNavigator } from 'react-navigation';
import Home from '../container/Home';
import Device from '../container/Device';
import About from '../container/About';
import History from '../container/History';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home',
      navigationOptions: {
        headerTitle: 'Home'
      }
    },
    Device: {
      screen: Device,
      path: 'device/:device_name',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.device_name
      })
    },
    History: {
      screen: History,
      path: 'device/:device_name/history',
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.device_name}'s History`
      })
    },
    About: {
      screen: About,
      path: 'about-us',
      navigationOptions: {
        headerTitle: 'About Us'
      }
    }
  },
  {
    headerMode: 'none'
  }
);

export default RootNavigator;
