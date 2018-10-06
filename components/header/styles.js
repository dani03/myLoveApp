import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color';


export const style = StyleSheet.create({
        profilHeader: {
            height: 120,
            justifyContent: 'center',
            alignItems: 'center'
            
        },
    text: {
        color: APP_COLORS.logoColor,
        fontSize: 30,
        //fontFamily: 'Caveat-Bold'
        
    },
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 100,
       

    },
    image: {

        height: 150,
        width: 170,
        top: -80
    }
});
