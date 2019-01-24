import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import EcranInscription from './screens/EcranInscription';
import EcranDeclaration from './screens/EcranDeclaration';
import EcranConnexion from './screens/EcranConnexion';
import HomeScreen from './screens/HomeScreen';
//import apiKeys from './keys/apiKeys';
import EcranDureeRelation from './screens/EcranDureeRelation';
import EcranEtape2 from './screens/EcranEtape2';
import EcranEtape3 from './screens/EcranEtape3';
import EcranEtape4 from './screens/EcranEtape4';
import Spinner from './components/Spinner';
import EcranDate from './screens/EcranDate';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    connexion: EcranConnexion,
    inscription: EcranInscription,
    declaration: EcranDeclaration,
    dureeRelation: EcranDureeRelation,
    Etape2: EcranEtape2,
    Etape3: EcranEtape3,
    Etape4: EcranEtape4,
    EcranDat: EcranDate,
  },
  {
    initialRouteName: 'Home'
  }
);
   //initialisation de firebase
   const firebaseConfig = {
    apiKey: 'AIzaSyDbnrz0dWT2ZaBSA2Su8cnNvsSdpBhsz5w',
    authDomain: 'myloveapp-5a592.firebaseapp.com',
    databaseURL: 'https://myloveapp-5a592.firebaseio.com',
    projectId: 'myloveapp-5a592',
    storageBucket: 'myloveapp-5a592.appspot.com',
    messagingSenderId: '465474367381'
};
firebase.initializeApp(firebaseConfig);
 class App extends React.Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
   
    //pour selectionner dans la base de données
    //firebase.database().ref('users').on('value', (data) => {
     // console.log(data.toJSON());
    //});
  }
    
  renderContent() {
   switch (this.state.loggedIn) {
     case true:
        return <EcranDureeRelation />;
     case false:
          return <HomeScreen />;
     default:
     return <Spinner size="large" />;
   }
  }
  render() {
    return (
        
      <MainNavigator>
        {this.renderContent()}   
      </MainNavigator>
    
          );
  }
}

export default App;




import { createStackNavigator } from 'react-navigation';

import EcranInscription from '../../screens/EcranInscription';
import EcranDeclaration from '../../screens/EcranDeclaration';
import EcranConnexion from '../../screens/EcranConnexion';
import HomeScreen from '../../screens/HomeScreen';
import EcranDureeRelation from '../../screens/EcranDureeRelation';
import EcranEtape2 from '../../screens/EcranEtape2';
import EcranEtape3 from '../../screens/EcranEtape3';
import EcranEtape4 from '../../screens/EcranEtape4';
import EcranDate from '../../screens/EcranDate';
import EcranMenu from '../../screens/EcranMenu';
import startEcran from '../../screens/StartEcran';

const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        connexion: EcranConnexion,
        inscription: EcranInscription,
        declaration: EcranDeclaration,
        dureeRelation: EcranDureeRelation,
        Etape2: EcranEtape2,
        Etape3: EcranEtape3,
        Etape4: EcranEtape4,
        Date: EcranDate,
        accueil: EcranMenu,
        start: startEcran,
      },
      {
        initialRouteName: 'Home'
      }
);
export default MainNavigator;