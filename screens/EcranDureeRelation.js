import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import EcranMenu from './EcranMenu';
import ecranPartageLapp from './EcranPartagerlApp';

const AppDrawernavigator = createDrawerNavigator({
    menuEcran: EcranMenu,
    'mon profil': ecranPartageLapp,

  
  });
class EcranDureeRelation extends Component {
    render() {
        return (
            <AppDrawernavigator />
                
        );
    }
}

export default EcranDureeRelation;
