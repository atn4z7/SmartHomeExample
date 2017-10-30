import { StackNavigator } from 'react-navigation';
import Home from '../container/Home';
import Device from '../container/Device';
import About from '../container/About';
import History from '../container/History';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home'
    },
    Device: {
      screen: Device,
      path: 'device/:device_name'
    },
    History: {
      screen: History,
      path: 'device/:device_name/history'
    },
    About: {
      screen: About,
      path: 'about-us'
    }
  },
  {
    headerMode: 'none'
  }
);

export default RootNavigator;
