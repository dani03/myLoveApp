import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class EcranConnexion extends React.Component {
    static navigationOptions = {
     
    }
  render() { 
      return (
      <View style={connexionStyle.connectContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }}>
            <Image 
                style={{ height: 70, width: 80 }} 
                source={require('../components/img/coeur-my-love.png')} 
            />
            <Text style={connexionStyle.titre}>My Love</Text>
        </View>
         <View style={connexionStyle.formulaire}>
            <FormLabel>Email</FormLabel>
                <FormInput 
                    style={connexionStyle.inputBox}
                    placeholder='exemple@gmail.com'
                    keyboardType='email-address'
                    selectionColor='#ce5e4b'
                   
                />
            <FormLabel>Mot de passe</FormLabel>
                <FormInput 
                    style={connexionStyle.inputBox}
                    placeholder='mot de passe'
                    secureTextEntry true 
                />
            <Button 
                title='connexion'
                buttonStyle={{
                    backgroundColor: '#ce5e4b',
                    width: 300,
                    height: 45,
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5,
                    top: 37
                    
                  }}
            />
        </View>
        </View>
    );
  }
}

const connexionStyle = StyleSheet.create({
    connectContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    titre: {
        color: '#ce5e4b',
        top: 25,
        fontSize: 30
    },
    formulaire: {
        top: 90
    },
    inputBox: {
        borderBottomColor: '#ce5e4b',

    }

});
export default EcranConnexion;
