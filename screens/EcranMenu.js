import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { Header } from 'native-base';
import firebase from 'firebase';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import GrandCoeur from '../components/GrandCoeur';


class EcranMenu extends Component {
    static navigationOptions = {
            header: null,
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
                            name='reorder'
                            onPress={() => this.props.navigation.openDrawer()}
                            color='#ce5e4b'
                            size={25}
                        />
                   <View style={{ left: 100 }}>
                        <Text style={{ color: '#ce5e4b', fontSize: 25 }}> My Love </Text>
                    </View> 
                </Header>
        
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                   <GrandCoeur />
                    <Text style={{ top: 140, fontSize: 30, color: '#c9bfbf' }}> Julie </Text>
                </View>
              
                <Button 
                    onPress={() => this.props.navigation.navigate('Date')}
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
