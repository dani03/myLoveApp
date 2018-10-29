import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Coeur from '../components/coeur';
import MyButton from '../components/MyButton/MyButton';
//import EcranEtape2 from './EcranEtape2';

class EcranEtape3 extends Component {
    render() {
        return (
        <ScrollView>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <Coeur />
                    <Text style={{ textAlign: 'center', top: 10 }}>julie</Text>
                </View>
                    <View style={{ marginTop: 20 }}>
                        <Text>décrivez ce que vous ressentez pour julie</Text>
                    </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                    placeholder='entrez votre message'
                    multiline true
                    underlineColorAndroid="transparent"
                        style={{
                            height: 120,
                            borderColor: '#ce5e4b',
                            borderRadius: 5,
                            borderWidth: 1,
                            width: 300,
                            paddingLeft: 5,
                            left: 5,
                            marginLeft: 7,
                            paddingTop: 0

                        }}
                    />
                    <View style={{ marginTop: 50, left: 10 }}>
                        <Text style={{ textAlign: 'center' }}> signez votre message </Text>
                        <TextInput
                        style={styles.inputBox}
                            placeholder='par votre nom...'
                            underlineColorAndroid='transparent'
                        />
                    </View> 
                    <MyButton />
                 </View>
                    <View style={{ marginTop: 85 }}><Text> 3/4 </Text></View>
            </KeyboardAvoidingView>
        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    inputBox: {
        borderBottomColor: '#ce5e4b',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#ce5e4b',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 5,
        width: 300,
        margin: 10,
        padding: 10,
        
    }
});
export default EcranEtape3;
