import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert,
     KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import { FormLabel, Button } from 'react-native-elements';
import * as firebase from 'firebase';

class EcranInscription extends Component {
    static navigationOptions = {
        title: 'Mylove',
        

    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nom: '',
            prenom: '',
            confirmPassword: ''
        };
    }
    
    onPressInscription = () => {
        //avant on verifie si les mots de passes sont identiques
        if (this.state.password !== this.state.confirmPassword) {
            Alert.alert('les mots de passes ne correspondent pas...');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {          
            Alert.alert('inscription reussie');
            this.props.navigation.push('declaration');
        }, (error) => {
            firebase.auth().languageCode = 'fr';
            Alert.alert(error.message);
        });
    }
   
    render() {
        return (
        //<ScrollView>
            <KeyboardAvoidingView behavior="padding" style={styleInscription.container}>
                <View style={styleInscription.titre}>
                    <Text style={{ fontSize: 20 }}>Inscription</Text>
                </View>
            
                <FormLabel>nom</FormLabel>
                <TextInput
                  style={styleInscription.inputBox}
                  value={this.state.nom}
                  onChangeText={(nom) => { this.setState({ nom }); }}
                  underlineColorAndroid='transparent'
                />
                <FormLabel>prenom</FormLabel>
                <TextInput
                    style={styleInscription.inputBox}
                    value={this.state.prenom}
                    onChangeText={(prenom) => { this.setState({ prenom }); }}
                    underlineColorAndroid='transparent'
                />
                <FormLabel>email</FormLabel>
                <TextInput
                    style={styleInscription.inputBox}
                    keyboardType='email-address' 
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email }); }}
                    underlineColorAndroid='transparent'
                />
                <FormLabel>mot de passe</FormLabel>
                <TextInput
                  style={styleInscription.inputBox}
                  value={this.state.password}
                  onChangeText={(password) => { this.setState({ password }); }}
                  underlineColorAndroid='transparent'
                />
                <FormLabel> confirmer mot de passe</FormLabel>
                <TextInput
                  style={styleInscription.inputBox} 
                  value={this.state.confirmPassword}
                  onChangeText={(confirmPassword) => { this.setState({ confirmPassword }); }}
                  underlineColorAndroid='transparent'
                />
                <Button 
                    onPress={this.onPressInscription}
                    title='valider'
                    buttonStyle={{
                        backgroundColor: '#ce5e4b',
                        width: 300,
                        height: 45,
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 5,
                        top: 37,
                      }}
                />
       
            </KeyboardAvoidingView>
        //</ScrollView>
        );
    }
}

export default EcranInscription;

const styleInscription = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            borderColor: '#ce5e4b',
            borderWidth: 1,
              borderRadius: 5,
              padding: 2,
              margin: 4,
                   
        },
        titre: {            
            justifyContent: 'center',
            alignItems: 'center'
        },
        inputBox: {
            borderBottomColor: '#ce5e4b',
            marginLeft: 5,
            marginRight: 5,
            height: 50,
            borderColor: '#ce5e4b',
            borderWidth: 1,
            paddingLeft: 5,
            borderRadius: 5,
            
        }
});
