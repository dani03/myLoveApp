import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import firebase from 'firebase';


class EcranDeconnexion extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Image 
            source={require('../components/img/logo/DeÌconnexion.png')}
            style={{ height: 24, width: 24 }} 

            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>se deconnecter ?</Text>
            <Button 
                title='oui'
                onPress={() => firebase.auth().signOut()} 
                buttonStyle={{
                    backgroundColor: '#ce5e4b',
                    width: 300,
                    height: 50,
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5,
                    color: '#000'
                      
                }}
            />

        </View>
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

});
export default EcranDeconnexion;
