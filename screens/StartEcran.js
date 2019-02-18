import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Coeur from '../components/coeur';
import Search from '../components/Search';

class startEcran extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
    }
    tooglePress = () => {
        this.setState({ status: true });
    }
    showInput = () => {
        if (this.state.status) {
            return (
                <View style={{ top: 5 }}>
                    <Search /> 
                </View>
            );
        } 
            return (
                <View style={styles.mainView}>  
                    <Coeur />
                        <TouchableOpacity onPress={this.tooglePress} style={styles.amour}>
                            <Text style={styles.text} > rechercher mon amour </Text>
                        </TouchableOpacity>
                </View>
            );
    }
  
    render() {
        return (
            <View style={styles.container}>  
            <Header 
            style={{
                backgroundColor: 'white',
                justifyContent: 'flex-start',
                alignItems: 'flex-end' 
          }}>
               
                    <View style={{ left: 100 }}>
                        <Text style={{ color: '#ce5e4b', fontSize: 25 }}> My Love </Text>
                    </View>
            </Header>
            {this.showInput()}
           
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    amour: {
        backgroundColor: '#c0341d',
        width: 300,
        height: 45,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 3,
        top: 30, 
        alignItems: 'center',
        
        
    },
    text: {
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        top: 10
    },
    mainView: {
        top: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default startEcran;
