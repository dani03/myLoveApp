import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';


class EcranDeconnexion extends Component {
    static navigationOptions = {
        headerTitle: 'Deconnexion',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>se deconnecter ?</Text>
            <TouchableOpacity 
            onPress={() => console.log('hello')}
            style={{ backgroundColor: '#ce5e4b',
             width: 70,
              height: 30,
              justifyContent: 'space-around',
              alignItems: 'center',
               }}
            >
                    <Text 
                    
                    style={{ fontSize: 15, color: 'white', opacity: 2 }}
                    > 
                        oui
                    </Text>
                </TouchableOpacity>

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
