import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';


class EcranInscription extends Component {
    static navigationOptions = {
        title: 'Mylove',
        

    }
   
    render() {
        return (
            <View style={styleInscription.container}>
                <View style={styleInscription.titre}>
                    <Text style={{ fontSize: 20 }}>inscription</Text>
                </View>
                <FormLabel>nom</FormLabel>
                <FormInput />
                <FormLabel>prenom</FormLabel>
                <FormInput />
                <FormLabel>mail</FormLabel>
                <FormInput />
                <FormLabel>mot de passe</FormLabel>
                <FormInput />
                <FormLabel> confirmer mot de passe</FormLabel>
                <FormInput />
                <Button 
                    onPress={this.handleSubmit}
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
            </View>
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
