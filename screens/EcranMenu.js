import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Icon } from 'native-base';

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
                    
                </Header>
                <Text>ecran de ecranMenu </Text>
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
    }
});
export default EcranMenu;
