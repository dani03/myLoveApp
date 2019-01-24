import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import ecranPartageLapp from '../../screens/EcranPartagerlApp';
import EcranRupture from '../../screens/EcranRupture';
import EcranPulsation from '../../screens/EcranPulsation';
import EcranMotDamour from '../../screens/EcranMotDamour';
import Apropos from '../../screens/Apropos';
import EcranMenu from '../../screens/EcranMenu';
import EcranDeconnexion from '../../screens/EcranDeconnexion';
import EcranProfil from '../../screens/Profil';
import EcranDate from '../../screens/EcranDate';

export const Stack = createStackNavigator({
   
    Rupture: { screen: EcranRupture },
    
}, {
    initialRouteName: 'mon profil'
});
