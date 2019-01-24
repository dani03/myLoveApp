import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import Header from '../components/header';
import { APP_COLORS } from '../styles/color';
import { style } from '../components/header/styles';

 class HomeScreen extends Component {
   static navigationOptions = {
     header: null
   }
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header content="My Love" />
      <View style={style.container}>
      
        <Image style={style.image} source={require('../components/img/coeur-my-love.png')} />
      
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
            onPress={() => this.props.navigation.navigate('inscription')}

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
    </View>
    );
  }
}

export default HomeScreen;
