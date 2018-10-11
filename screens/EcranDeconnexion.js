import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Icon } from 'native-base';


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
                
            </Header>
            <Text>ecran deconnexion </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});
export default EcranDeconnexion;
