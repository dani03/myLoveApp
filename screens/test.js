import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Header from './components/header';
import { APP_COLORS } from './styles/color';
import { style } from './components/header/styles';
import EcranConnexion from './screens/EcranConnexion';
import EcranInscription from './screens/EcranInscription';

const MainNavigator = createStackNavigator({
  connexion: { screen: EcranConnexion },
  inscription: { screen: EcranInscription }
});
export default class App extends React.Component {

  render() {
    return (
      <View>
        <Header content="My Love" />
      <View style={style.container}>
      <View>
        <Image style={style.image} source={require('./components/img/coeur-my-love.png')} />
      </View>
      
        <Button
            title="CONNEXION"
            onPress={() => this.props.navigation.navigate('connexion')}
            buttonStyle={{
              backgroundColor: APP_COLORS.logoColor,
              width: 300,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5
              
            }}
            containerStyle={{ marginTop: 20 }}
        />

          <Button
            title="INSCRIPTION"
            loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: APP_COLORS.logoColor,
              width: 300,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5,
              top: 10
            }}
            containerStyle={{ marginTop: 20 }}
          />
      </View>
       <MainNavigator />
      </View>
    );
  }
}

