import React from 'react';
import { View, StyleSheet, Image, Text, Alert, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import * as firebase from 'firebase';

class EcranConnexion extends React.Component {
    static navigationOptions = {
     
    }
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
        };
    }
    onPressconnexion = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            Alert.alert('vous etes connecté');
            this.props.navigation.navigate('dureeRelation');
        }, (error) => {
            Alert.alert(error.message);
        });
    }
  render() { 
      return (
      <KeyboardAvoidingView behavior='position' style={connexionStyle.connectContainer}>
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
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email }); }}
                   
                />
            <FormLabel>Mot de passe</FormLabel>
                <FormInput 
                    style={connexionStyle.inputBox}
                    placeholder='mot de passe'
                    secureTextEntry true
                    value={this.state.password}
                    onChangeText={(password) => { this.setState({ password }); }}
                />
            <Button 
            onPress={this.onPressconnexion}
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
        </KeyboardAvoidingView>
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
