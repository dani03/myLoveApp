import React, { Component } from 'react';
//import { StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Header, Container, Content, Body } from 'native-base';
import ecranPartageLapp from './EcranPartagerlApp';
import EcranRupture from './EcranRupture';
import EcranPulsation from './EcranPulsation';
import EcranMotDamour from './EcranMotDamour';
import Apropos from './Apropos';
import EcranMenu from './EcranMenu';
import EcranDeconnexion from './EcranDeconnexion';
import Coeur from '../components/coeur';

const CustommerdrawerComponent = (props) => (
    <Container>
        <Header style={{ height: 150, backgroundColor: 'white' }}>
            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Coeur />
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

export default EcranApp2;
