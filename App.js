import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import EcranInscription from './screens/EcranInscription';
import EcranDeDeclaration from './screens/EcranDeclaration';
import EcranConnexion from './screens/EcranConnexion';
import HomeScreen from './screens/HomeScreen';
import apiKeys from './keys/apiKeys';
import EcranDureeRelation from './screens/EcranDureeRelation';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    connexion: EcranConnexion,
    inscription: EcranInscription,
    declaration: EcranDeDeclaration,
    dureeRelation: EcranDureeRelation
    
    
  },
  {
    initialRouteName: 'declaration', //Home
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthentificationReady: false,
      isAuthenticated: false
    };
    //initialisation de firebase
    if (!firebase.apps.length) { firebase.initializeApp(apiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    firebase.auth().languageCode = 'fr';
    this.setState({ isAuthentificationReady: true });
    this.setState(({ isAuthenticated: !!user }));
  }
  render() {
    return (
        
      <MainNavigator>
        {(this.state.isAuthenticated) ? <EcranDeDeclaration /> : <EcranConnexion />}  
        
      </MainNavigator>
    
          );
  }
}
