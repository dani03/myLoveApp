import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LogoHomme from '../components/Declaration/LogoHomme';
import LogoFemme from '../components/Declaration/LogoFemme';
import LogoFemmeBlanc from '../components/Declaration/LogoFemmeBlanc';
import LogoHommeBlanc from '../components/Declaration/LogoHommeBlanc';

class EcranDeclaration extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
            this.state = { 
               toggle: false,
            };
    }
    onpressLogo = () => {
        console.log('pressed');
        const newState = !this.state.toggle;
        this.setState({ toggle: newState });
        this.props.navigation.navigate('Etape2');
    }
    render() {
        //const { toggle } = this.state;
        //const IconFemme = toggle ? <LogoFemmeBlanc /> : <LogoFemme />;
        //const bground = toggle ? '#ce5e4b' : 'white';
        //const IconHomme = toggle ? <LogoHomme /> : <LogoHommeBlanc />;
        //const background = toggle ? 'white' : '#ce5e4b';
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#ce5e4b', fontSize: 30 }}> My Love </Text>
                </View>
                <View style={{ top: 40 }}>
                    <Text>Je souhaite declarer mon amour à: </Text>
                </View>
                <View style={styles.logo}>
                    <TouchableOpacity 
                    onPress={this.onpressLogo}
                    
                       style={{ backgroundColor: 'transparent',
                                borderColor: '#ce5e4b',
                                borderWidth: 1,
                                height: '50%',
                                width: 110,
                                justifyContent: 'center',
                                borderRadius: 2
                            }}
                    >
                        <LogoHomme />
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        onPress={this.onpressLogo}
                        style={{ backgroundColor: 'transparent',
                                borderColor: '#ce5e4b',
                                borderWidth: 1,
                                height: '50%',
                                width: 110,
                                justifyContent: 'center',
                                borderRadius: 2
                            }}
                    >
                        <LogoFemme />
                    </TouchableOpacity>
                    <View style={styles.logo}>
                        <Text>homme</Text>
                        <Text>femme</Text>
                    </View>
                    
                </View>
                <View><Text>1/4</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        alignItems: 'center'   
    },
    logo: {
        top: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',  
    },
    cadreLogo: {
        backgroundColor: 'transparent',
        borderColor: '#ce5e4b',
        borderWidth: 1,
        height: '50%',
        width: 110,
        justifyContent: 'center',
        borderRadius: 2
    },
    text: {
        top: 20,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
    
});

export default EcranDeclaration;
