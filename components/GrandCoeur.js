import React from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

class GrandCoeur extends React.Component {
//
        render() {
            return (
           // <Animated.View style={this.position.getLayout()}>
                <View> 
                    <Image style={styles.image} source={require('./img/coeur-my-love.png')} />
                </View>
           // </Animated.View>       
            );
        }
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 170,
        top: 105,    
    }
});
export default GrandCoeur;
