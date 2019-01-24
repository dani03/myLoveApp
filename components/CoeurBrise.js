import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

class CoeurBrise extends React.Component {

        render() {
            return (
                <View>
                    <Image style={styles.drawerImage} source={require('./img/logo/CoeurBrise.png')} />
                </View>
            );
        }
}

const styles = StyleSheet.create({
    drawerImage: {   
            height: 90,
            width: 100,     
        }
});
export default CoeurBrise;
