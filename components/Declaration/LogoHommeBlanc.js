import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class LogoHommeBlanc extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Image 
                        style={styles.image} 
                        source={require('../symboleHF/HOMME-blanc.png')}      
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100
    },
    cadreLogo: {
        backgroundColor: '#ce5e4b',
        borderColor: 'transparent',
        borderWidth: 1,
        height: '50%',
        width: 110,
        justifyContent: 'center',
        borderRadius: 2,
        //marginRight: 30
    }
});
export default LogoHommeBlanc;
