import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
     KeyboardAvoidingView, Alert } from 'react-native';
     import { Button } from 'react-native-elements';

class EcranEtape2 extends Component {
    static navigationOptions = {
        title: 'Retour',
        Right: 'My Love'
    }
    constructor(props) {
        super(props);
        this.state = {
            Partenaire: '',
        };
    }
   
        validatePrenom = () => {
            console.log('validation');
            if (this.state.prenom === '') {
                Alert.alert('un prenom est requis');
                return;
            }
            //si c'est bon alors on dit a firebase de rajouter dans la base de donnée
            this.props.navigation.navigate('Etape3');
        }
    render() {
        return (
            
                <KeyboardAvoidingView behavior='position' style={styles.container}> 
                    <Text 
                    style={{ marginBottom: 70, textAlign: 'center' }}
                    >
                    Entre le prénom de votre amoureux(se)</Text>
                    <View>
                        <TextInput
                            style={styles.inputBox}
                            placeholder='son prenom...'
                            underlineColorAndroid='transparent'
                            value={this.state.Partenaire}
                            onChangeText={(Partenaire) => { this.setState({ Partenaire }); }}
                            //
                        /> 
                        <Button
                        onPress={this.validatePrenom}
                        title='Valider'
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
                    <View><Text style={{ top: 150, textAlign: 'center' }}>2/4</Text></View>
                </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        
        
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
    },
    main: {
       
    }
});
export default EcranEtape2;
