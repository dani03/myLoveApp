import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import { Header, Container, Content, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ecranPartageLapp from './EcranPartagerlApp';
import EcranRupture from './EcranRupture';
import EcranPulsation from './EcranPulsation';
import EcranMotDamour from './EcranMotDamour';
import Apropos from './Apropos';
import EcranMenu from './EcranMenu';
import EcranDeconnexion from './EcranDeconnexion';
import StartEcran from './StartEcran';
import EcranDate from './EcranDate';

const CustommerdrawerComponent = (props) => (
    <Container>
        <Header style={{ height: 120, backgroundColor: 'white' }}>
            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                 onPress={() => this.props.navigation.closeDrawer()}
                 style={styles.image} source={require('../components/img/logo/Croix.png')}
                />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
);
const menuStackNavigator = createStackNavigator({
    'mon profil': { screen: EcranMenu,
        navigationOptions: {
            header: null,
            drawerIcon: (
                <Image 
                source={require('../components/img/logo/Mon-Profil.png')}
                style={{ height: 24, width: 24 }} 
                />
            )
        } },
    
});


const profilStack = createStackNavigator({
    profil: {
        screen: menuStackNavigator,
        navigationOptions: {
            header: null
           /** headerLeft: (
                <Icon 
                    name='reorder'
                    onPress={() => this.props.navigation.navigate('openDrawer')}
                    color='#ce5e4b'
                    size={25}
                    style={{ paddingLeft: 10 }}
                />
            ),
            headerTitle: (
            <Text style={{ left: 72, color: '#ce5e4b', fontSize: 25 }}> My Love </Text>) **/
        } 
    },
    Date: {
        screen: EcranDate
    }
});

const AppDrawernavigator = createDrawerNavigator({
    'mon profil': { screen: profilStack,
        navigationOptions: {

            drawerIcon: (
                <Image 
                source={require('../components/img/logo/Mon-Profil.png')}
                style={{ height: 24, width: 24 }} 
                />
            )
        } },
    Partager: { screen: ecranPartageLapp },
    'Coeur Pulsation': { screen: EcranPulsation },
    'Mot D\'amour': { screen: EcranMotDamour },
    Rupture: { screen: EcranRupture },
    'A propos': { screen: Apropos },
    Deconnexion: { screen: EcranDeconnexion },
  }, 
  {
     initialRouteName: 'mon profil',
      contentComponent: CustommerdrawerComponent,
});

class EcranApp2 extends Component {
    static navigationOptions = {
        header: null
      }
    render() {
        return (
            
            <AppDrawernavigator>
                <StartEcran />
            </AppDrawernavigator>
                
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
    }
});
export default EcranApp2;
