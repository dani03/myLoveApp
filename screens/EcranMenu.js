import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { Header, Icon } from 'native-base';
import { Button } from 'react-native-elements';
import GrandCoeur from '../components/GrandCoeur';

class EcranMenu extends Component {
    static navigationOptions = {
            Header: null,
        drawerIcon: (
            <Image 
            source={require('../components/img/logo/Mon-Profil.png')}
            style={{ height: 24, width: 24 }} 

            />
        )
    }
    render() {
        return (
            <View style={styles.container}>  
                <Header 
                style={{
                    backgroundColor: 'white',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end' 
              }}>
                   
                        <Icon 
                            name='menu'
                            onPress={() => this.props.navigation.openDrawer()}
                            Color='#ce5e4b'
                            
                        />
                    <View style={{ left: 100 }}>
                        <Text style={{ color: '#ce5e4b', fontSize: 20 }}> My Love </Text>
                    </View>
                </Header>
        
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                   <GrandCoeur />
                    <Text style={{ top: 140, fontSize: 30, color: '#c9bfbf' }}> Julie </Text>
                </View>
              
                <Button 
                  title='AJOUTER VOTRE DATE DE RENCONTRE'
                  buttonStyle={{
                    backgroundColor: '#ce5e4b',
                    width: 300,
                    height: 45,
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5,
                    top: '80%',
                    right: -10,   
                  }}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
});
export default EcranMenu;
