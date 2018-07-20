/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from '../ZULPrototypes/src/components/dashboard/Home'
import Main from '../ZULPrototypes/src/components/Report/Main'

AppRegistry.registerComponent(appName, () => Main);
