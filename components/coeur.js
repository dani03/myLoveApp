import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

class Coeur extends React.Component {

        render() {
            return (
                <View>
                    <Image style={styles.drawerImage} source={require('./img/coeur-my-love.png')} />
                </View>

                
            );
        }
}

const styles = StyleSheet.create({
    drawerImage: {   
            height: 70,
            width: 80,     
        }
});
export default Coeur;
