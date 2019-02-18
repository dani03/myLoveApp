import { createStackNavigator } from 'react-navigation';

import EcranInscription from '../../screens/EcranInscription';
import EcranDeclaration from '../../screens/EcranDeclaration';
import EcranConnexion from '../../screens/EcranConnexion';
import HomeScreen from '../../screens/HomeScreen';
import EcranDureeRelation from '../../screens/EcranDureeRelation';
import EcranEtape2 from '../../screens/EcranEtape2';
import EcranEtape3 from '../../screens/EcranEtape3';
import EcranEtape4 from '../../screens/EcranEtape4';
import EcranDate from '../../screens/EcranDate';
import EcranMenu from '../../screens/EcranMenu';
import startEcran from '../../screens/StartEcran';
import ecranPartageLapp from '../../screens/EcranPartagerlApp';
import EcranRupture from '../../screens/EcranRupture';
import EcranPulsation from '../../screens/EcranPulsation';
import EcranMotDamour from '../../screens/EcranMotDamour';
import Apropos from '../../screens/Apropos';
import EcranDeconnexion from '../../screens/EcranDeconnexion';

const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        connexion: EcranConnexion,
        inscription: EcranInscription,
        declaration: EcranDeclaration,
        dureeRelation: EcranDureeRelation,
        Etape2: EcranEtape2,
        Etape3: EcranEtape3,
        Etape4: EcranEtape4,
        Date: EcranDate,
        accueil: EcranMenu,
        start: startEcran,
        'mon profil': EcranMenu,
        Partager: ecranPartageLapp,
        'Coeur Pulsation': EcranPulsation,
        'Mot D\'amour': EcranMotDamour,
        Rupture: EcranRupture,
        'A propos': Apropos,
        Deconnexion: EcranDeconnexion,
      },
      {
        initialRouteName: 'start'
      }
);
export default MainNavigator;
