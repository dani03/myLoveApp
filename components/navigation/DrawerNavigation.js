
import React from 'react';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Header, Container, Content, Body } from 'native-base';
import { StyleSheet, Image, } from 'react-native';
import ecranPartageLapp from '../../screens/EcranPartagerlApp';
import EcranRupture from '../../screens/EcranRupture';
import EcranPulsation from '../../screens/EcranPulsation';
import EcranMotDamour from '../../screens/EcranMotDamour';
import Apropos from '../../screens/Apropos';
import EcranMenu from '../../screens/EcranMenu';
import EcranDeconnexion from '../../screens/EcranDeconnexion';
import startEcran from '../../screens/StartEcran';
import EcranDate from '../../screens/EcranDate';

const CustommerdrawerComponent = (props) => (
    <Container>
        <Header style={{ height: 120, backgroundColor: 'white' }}>
            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                 onPress={() => this.props.navigation.toggleDrawer()}
                 style={styles.image} source={require('../img/logo/Croix.png')}
                />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
);

const acceuil = createStackNavigator(
    {
        
        accueil: EcranMenu
      },
);

const EcranDat = createStackNavigator(
    {
        EcranDat: EcranDate,
        
      },
);
const AppDrawernavigator = createDrawerNavigator({
    'Mon Profil': {
        screen: acceuil
    },
     start: { screen: startEcran },
    Partager: { screen: ecranPartageLapp },
    'Coeur Pulsation': { screen: EcranPulsation },
    'Mot D\'amour': { screen: EcranMotDamour },
    Rupture: { screen: EcranRupture },
    'A propos': { screen: Apropos },
    Deconnexion: { screen: EcranDeconnexion },
    date: { screen: EcranDat }
  }, 
  {
      initialRouteName: 'Mon',
      contentComponent: CustommerdrawerComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'drawerClose',
      drawerToggleRoute: 'drawerToggle'
  });

  const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
    }
});

export default AppDrawernavigator;
