import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class LogoFemme extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Image 
                        style={styles.image} 
                        source={require('../symboleHF/FEMME-Rouge.png')}      
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
    }
});
export default LogoFemme;
