import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoHomme from '../components/Declaration/LogoHomme';
import LogoFemme from '../components/Declaration/LogoFemme';

class EcranDeclaration extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: 90 }}>
                    <Text>Je souhaite declarer mon amour à: </Text>
                </View>
                <View style={styles.logo}>
                    <View style={styles.cadreLogo}>
                        <LogoHomme />
                    </View> 
                    <View style={styles.cadreLogo}>
                        <LogoFemme />
                    </View>          
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },
    logo: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        flexDirection: 'row'
    },
    cadreLogo: {
        backgroundColor: 'transparent',
        borderColor: '#ce5e4b',
        borderWidth: 1,
        height: '50%',
        width: 110,
        justifyContent: 'center',
        borderRadius: 2
    }
});

export default EcranDeclaration;
