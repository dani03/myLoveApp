import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Header, Container, Content, Body } from 'native-base';
import ecranPartageLapp from './EcranPartagerlApp';
import EcranRupture from './EcranRupture';
import EcranPulsation from './EcranPulsation';
import EcranMotDamour from './EcranMotDamour';
import Apropos from './Apropos';
import EcranMenu from './EcranMenu';
import EcranDeconnexion from './EcranDeconnexion';


const CustommerdrawerComponent = (props) => (
    <Container>
        <Header style={{ height: 120, backgroundColor: 'white' }}>
            <Body
            onPress={() => this.props.navigation.toggleDrawer()}
             style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                 
                 style={styles.image} source={require('../components/img/logo/Croix.png')}
                />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
);

const AppDrawernavigator = createDrawerNavigator({
    'Mon Profil': {
        screen: EcranMenu
    },
    Partager: { screen: ecranPartageLapp },
    'Coeur Pulsation': { screen: EcranPulsation },
    'Mot D\'amour': { screen: EcranMotDamour },
    Rupture: { screen: EcranRupture },
    'A propos': { screen: Apropos },
    Deconnexion: { screen: EcranDeconnexion },
  }, 
  {
      initialRouteName: 'Mon Profil',
      contentComponent: CustommerdrawerComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'drawerClose',
      drawerToggleRoute: 'drawerToggle'
  });
class EcranApp2 extends Component {
    static navigationOptions = {
        header: () => {
               
       }
      }
    render() {
        return (
            
            <AppDrawernavigator />
                
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
