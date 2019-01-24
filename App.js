import React from 'react';
import * as firebase from 'firebase';
import HomeScreen from './screens/HomeScreen';

import EcranDureeRelation from './screens/EcranDureeRelation';
import Spinner from './components/Spinner';

import MainNavigator from './components/navigation/StackNavigation';
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
