import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Icon } from 'native-base';


class EcranMotDamour extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Image 
            source={require('../components/img/logo/mot-damour.png')}
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
                alignItems: 'flex-end',
                 
          }}>
               
                    <Icon 
                        name='menu'
                        onPress={() => this.props.navigation.openDrawer()}
                        
                        
                    />
                
            </Header>
            <Text>ecran de mot d'amour </Text>
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

export default EcranMotDamour;
