import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Asset, Font } from 'expo';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Coeur from '../components/coeur';

class EcranEtape4 extends Component {
    static navigationOptions = {
        headerRight: <Text style={{ marginRight: 145, fontSize: 20, color: '#ce5e4b' }}>
                    My Love</Text>
    }
    constructor(props) {
        super(props);
        this.state = {
            SonNumero: '',
            VotreNumero: '',
            fontloaded: false
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
        }).then(() => {
            this.setState({ fontloaded: true });
        });
    }
    render() {
        return (
        <ScrollView>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <Coeur />
                    { this.state.fontloaded === true ? (
                    <Text style={{ fontFamily: 'Lato-Light', textAlign: 'center', marginTop: 10 }}>
                    Julie
                    </Text>
                    ) : <Text style={{ textAlign: 'center', marginTop: 10 }}>loading...</Text>
                    }
                </View>
                    <View style={{ marginTop: 27 }}>
                        <Text 
                            style={{ textAlign: 'center' }}
                        >
                        entrez le numéro de julie pour lui envoyer votre mot d'amour</Text>
                    </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ marginTop: 15, left: 10 }}>
                        <Text> son numéro</Text>
                            <TextInput 
                                style={styles.inputBox}
                                keyboardType='phone-pad'
                                    placeholder='+33 xx xx xx xx'
                                    underlineColorAndroid='transparent'
                                    value={this.state.SonNumero}
                                    onChangeText={(SonNumero) => { this.setState({ SonNumero }); }}
                            />
                    </View>
                    <View style={{ marginTop: 15, left: 10 }}>
                        <Text> Votre numéro</Text>
                        <TextInput 
                            style={styles.inputBox}
                            keyboardType='phone-pad'
                                placeholder='+33 xx xx xx xx'
                                underlineColorAndroid='transparent'
                                phonePad
                                value={this.state.VotreNumero}
                                onChangeText={(VotreNumero) => { this.setState({ VotreNumero }); }}
                        />
                    </View>
                    <Button
                        
                        title='envoyer'
                        buttonStyle={{
                            backgroundColor: '#ce5e4b',
                            width: 300,
                            height: 45,
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 5,
                            top: 37
                        }}
                    />
                 </View>
                    <View style={{ marginTop: 85 }}><Text> 4/4 </Text></View>
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
    headerStyle: {
        marginRight: 160,
        fontSize: 20,
        color: '#ce5e4b'
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
export default EcranEtape4;
