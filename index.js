/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-url-polyfill/auto';

AppRegistry.registerComponent(appName, () => App);

// For some reasons RNE's Avatar keeps warnings despite it does support null uri
LogBox.ignoreLogs(['ReactImageView: Image source "null" doesn\'t exist']);
