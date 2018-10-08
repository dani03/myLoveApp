import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
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
            this.props.navigation.navigate('declaration');
        }, (error) => {
            Alert.alert(error.message);
        });
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='position' style={styleInscription.container}>
                <View style={styleInscription.titre}>
                    <Text style={{ fontSize: 20 }}>inscription</Text>
                </View>
                <FormLabel>nom</FormLabel>
                <FormInput
                  value={this.state.nom}
                  onChangeText={(nom) => { this.setState({ nom }); }}
                />
                <FormLabel>prenom</FormLabel>
                <FormInput
                    value={this.state.prenom}
                    onChangeText={(prenom) => { this.setState({ prenom }); }}
                />
                <FormLabel>email</FormLabel>
                <FormInput 
                    keyboardType='email-address' 
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email }); }}
                />
                <FormLabel>mot de passe</FormLabel>
                <FormInput 
                  value={this.state.password}
                  onChangeText={(password) => { this.setState({ password }); }}
                />
                <FormLabel> confirmer mot de passe</FormLabel>
                <FormInput 
                  value={this.state.confirmPassword}
                  onChangeText={(confirmPassword) => { this.setState({ confirmPassword }); }}
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
                        top: 37
                        
                      }}
                />
            </KeyboardAvoidingView>
        );
    }
}

export default EcranInscription;

const styleInscription = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            borderColor: '#ce5e4b',
            borderWidth: 2,
              borderRadius: 5,
              padding: 2,
              margin: 4,
              flex: 1,
              
        },
        titre: {
            
            justifyContent: 'center',
            alignItems: 'center'
        }
});
