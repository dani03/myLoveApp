import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ShowData extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>numero ici</Text>
                <Text>nom ici</Text>
                <Text>button d'invitation la</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 7
    }
});

export default ShowData;
