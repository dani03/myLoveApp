import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class LogoFemmeBlanc extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Image 
                        style={styles.image} 
                        source={require('../symboleHF/FEMME-Blanc.png')}      
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
        borderColor: '#FFF',
        borderWidth: 1,
        height: '50%',
        width: 110,
        justifyContent: 'center',
        borderRadius: 2
    }
});
export default LogoFemmeBlanc;
