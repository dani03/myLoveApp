import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class LogoHomme extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Image 
                        style={styles.image} 
                        source={require('../symboleHF/HOMME-rouge.png')}      
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
export default LogoHomme;
