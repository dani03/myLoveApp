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
               choice: false,
               toggle: true
            };
    }
    onpressLogoH = () => {
        console.log('homme');
        const newToggle = !this.state.toggle;
        this.setState({ toggle: newToggle });
        this.props.navigation.navigate('Etape2');
    }
    onpressLogoF = () => {
        console.log('femme');
        const newState = !this.state.choice;
        this.setState({ choice: newState });
        this.props.navigation.navigate('Etape2');
    }
    render() {
      const { choice } = this.state;
      const { toggle } = this.state;
        const IconFemme = choice ? <LogoFemmeBlanc /> : <LogoFemme />;
        const bground = choice ? '#ce5e4b' : 'white';
        const IconHomme = toggle ? <LogoHomme /> : <LogoHommeBlanc />;
        const background = toggle ? 'white' : '#ce5e4b';
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
                    onPress={this.onpressLogoH}
                    
                       style={{ backgroundColor: background,
                                borderColor: '#ce5e4b',
                                borderWidth: 1,
                                height: '50%',
                                width: 110,
                                justifyContent: 'center',
                                borderRadius: 2
                            }}
                    >
                        {IconHomme}
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        onPress={this.onpressLogoF}
                        style={{ backgroundColor: bground,
                                borderColor: '#ce5e4b',
                                borderWidth: 1,
                                height: '50%',
                                width: 110,
                                justifyContent: 'center',
                                borderRadius: 2
                            }}
                    >
                        {IconFemme}
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
        
        top: 30,
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
