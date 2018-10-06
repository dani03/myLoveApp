import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import EcranInscription from './screens/EcranInscription';
import EcranConnexion from './screens/EcranConnexion';
import HomeScreen from './screens/HomeScreen';
import apiKeys from './keys/apiKeys';


const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    connexion: EcranConnexion,
    inscription: EcranInscription,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    //initialisation de firebase
    if (!firebase.apps.length) { firebase.initializeApp(apiKeys.FirebaseConfig); }
  }
  render() {
    return (
    <MainNavigator>
        <EcranConnexion />
    </MainNavigator>
          );
  }
}
