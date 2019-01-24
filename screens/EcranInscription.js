import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert,
     KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import { FormLabel, Button } from 'react-native-elements';
import firebase from 'firebase';
import Spinner from '../components/Spinner';

class EcranInscription extends Component {
    static navigationOptions = {
        headerRight: <Text style={{ marginRight: 145, fontSize: 20, color: '#ce5e4b' }}>
                    My Love</Text>
    }
    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
          'Setting a timer'
        ];
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            nom: '',
            prenom: '',
            isLoading: false,
            
        };
    }
  
    onPressInscription = () => {
        this.setState({ isLoading: true });
        const nom = this.state.nom;
        const prenom = this.state.prenom;
        //avant on verifie si les mots de passes sont identiques
        if (this.state.password === this.state.confirmPassword) {
            this.setState({ isLoading: true });
            if (nom.length > 2) {
                if (prenom !== '') {
                    this.setState({ isLoading: true });
                    firebase.auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(() => { 
                        this.setState({ isLoading: false });         
                        Alert.alert('inscription reussie');
                        this.props.navigation.navigate('dureeRelation');
                    }, (error) => {
                        this.setState({ isLoading: false });
                        Alert.alert(error.message);
                    });
                    this.componentwillMount();
                    return;  
                }
                this.setState({ isLoading: false });
                Alert.alert('un prenom est requis');
                return;
            }
            this.setState({ isLoading: false });
                Alert.alert('votre nom doit etre superieure à 2 caractères');
                return;           
        }
        Alert.alert('les mots de passes sont differents...');
            this.setState({ isLoading: false });
            return;
    }
    componentwillMount() {
        //const { currentUser } = firebase.auth();         
        firebase.database().ref('users').push(
            {
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                numero: this.state.numero
                
            }
            ).then(() => {
                console.log('données enregistrees'); 
            })
            .catch((error) => {
            console.log(error);
            });       
    }
    renderButton = () => {
        if (this.state.isLoading) {
            return <Spinner />;
        } 
        return (
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
        );
    }
    render() {
        return (
        <ScrollView style={styleInscription.container}>
            <KeyboardAvoidingView behavior="padding" enabled style={{ height: 800 }}>
                <View style={styleInscription.titre}>
                    <Text style={{ fontSize: 20 }}>Inscription</Text>
                </View>
                <FormLabel>nom</FormLabel>
                <TextInput
                    autoCorrect={false}
                  style={styleInscription.inputBox}
                  value={this.state.nom}
                  onChangeText={(nom) => { this.setState({ nom }); }}
                  underlineColorAndroid='transparent'
                />
                <FormLabel>prenom</FormLabel>
                <TextInput
                    autoCorrect={false}
                    style={styleInscription.inputBox}
                    value={this.state.prenom}
                    onChangeText={(prenom) => { this.setState({ prenom }); }}
                    underlineColorAndroid='transparent'
                />
                <FormLabel>email</FormLabel>
                <TextInput
                    autoCorrect={false}
                    style={styleInscription.inputBox}
                    keyboardType='email-address' 
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email }); }}
                    underlineColorAndroid='transparent'
                />
                 <FormLabel>numéro</FormLabel>
                        <TextInput 
                          style={styleInscription.inputBox}
                            keyboardType='phone-pad'
                            placeholder='+33 xx xx xx xx'
                            underlineColorAndroid='transparent'
                            editable true
                            maxLength={12}
                            value={this.state.numero}
                            onChangeText={(numero) => { this.setState({ numero }); }}
                        />
                <FormLabel>mot de passe</FormLabel>
                <TextInput
                  autoCorrect={false}
                  style={styleInscription.inputBox}
                  value={this.state.password}
                  onChangeText={(password) => { this.setState({ password }); }}
                  underlineColorAndroid='transparent'
                />
                <FormLabel> confirmer mot de passe</FormLabel>
                <TextInput
                  autoCorrect={false}
                  style={styleInscription.inputBox} 
                  value={this.state.confirmPassword}
                  onChangeText={(confirmPassword) => { this.setState({ confirmPassword }); }}
                  underlineColorAndroid='transparent'
                    
                />
            <View>
                {this.renderButton()}
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
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
