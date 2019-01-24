import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
     ScrollView,TouchableOpacity, KeyboardAvoidingView, Picker } from 'react-native';
import Coeur from '../components/coeur';

class EcranDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            month: '',
            day: '',
            pickerSelection: '',
            calculJours: ''
        };
    }
    getDate = () => {
        const year = this.state.year;
        const month = this.state.month;
        const day = this.state.day;
        const dateActuelle = new Date();
        console.log(dateActuelle);
        const dateEntree = new Date(`${day},${month}, ${year}`);
        // nous devons diviser par 1000,par 60 pour trouver le nombre de minutes
        //ensuite par 60 pour trouver le nombre d'heures
        // et ensuite par 24 pour trouver le nombre de jour
        const calcul = 1000 * 60 * 60 * 24;
     const difference = dateActuelle - dateEntree;
     const response = Math.floor(difference / calcul);
     this.setState({ calculJours: response });
     console.log(' ça fait ' + Math.floor(difference / calcul) + ' jours que vous etes en couple');
    }
    render() {
        return (
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.heart}>
                    <Coeur />
                    <Text style={{ top: 15 }}> julie </Text>
                </View>
                <View style={styles.dates}>
                    <Text> en couple depuis {this.state.month} </Text>
                    <View style={styles.inputBox}>
                        <TextInput
                        style={styles.input}
                            placeholder='JJ'
                            value={this.state.day}
                            onChangeText={(day) => { this.setState({ day }); }}
                            underlineColorAndroid='transparent'
                            maxLength={2}
                            keyboardType='phone-pad'
                            selectionColor='#ce5e4b'
                        />
                            <Text style={styles.slashes}>/</Text>
                        <TextInput
                        style={styles.input}
                
                        
                            underlineColorAndroid='transparent'
                            maxLength={2}
                            keyboardType='phone-pad'
                            selectionColor='#ce5e4b'
                        />
                            <Text style={styles.slashes}>/</Text>
                        <TextInput
                            style={styles.lastInput}
                            maxLength={4}
                            value={this.state.year}
                            onChangeText={(year) => { this.setState({ year }); }}
                            keyboardType='phone-pad'
                            selectionColor='#ce5e4b'
                            placeholder='AAAA'
                            underlineColorAndroid='transparent'
                            
                        />
                        
                    </View>
                </View>
                        <TouchableOpacity
                         onPress={this.getDate} 
                         style={styles.enregistrer}
                        >
                            <Text style={styles.text}>enregistrer</Text>
                        </TouchableOpacity>                        
            </View>
            <View style={styles.lastInputMonth}>
                <Picker
                    selectedValue={this.state.month}
                    style={{ height: 50, width: 100, right: 6 }}
                    onValueChange={(itemValue, itemIndex) => 
                    this.setState({ key: itemIndex, month: itemValue })}
                >
                    <Picker.Item label="Janvier" value="january" />
                    <Picker.Item label="Fev" value="febuary" />
                    <Picker.Item label="Mars" value="march" />
                    <Picker.Item label="Avril" value="April" />
                    <Picker.Item label="Mai" value="May" />
                    <Picker.Item label="Juin" value="June" />
                    <Picker.Item label="Juillet" value="July" />
                    <Picker.Item label="Août" value="August" />
                    <Picker.Item label="Septembre" value="September" />
                    <Picker.Item label="Octobre" value="October" />
                    <Picker.Item label="Novembre" value="November" />
                    <Picker.Item label="Decembre" value="December" />
                </Picker>
            </View>
                <View>
                    <Text> ça fait {this.state.calculJours} jours vous etes en couple</Text>
                </View>
        </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heart: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
        flexDirection: 'column'
    },
    text: {
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        top: 10,
        fontSize: 20
    },
    input: {
        borderBottomColor: '#ce5e4b',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#ce5e4b',
        borderWidth: 2,
        paddingLeft: 5,
        borderRadius: 5,
        width: 50,
        top: 10,
        fontSize: 18
    },
    lastInput: {
        borderBottomColor: '#ce5e4b',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#ce5e4b',
        borderWidth: 2,
        paddingLeft: 5,
        borderRadius: 5,
        width: 55,
        top: 10,
        fontSize: 18
    },
    lastInputMonth: {
        flexWrap: 'wrap',
        borderBottomColor: '#ce5e4b',
        marginLeft: 2,
        marginRight: 2,
        height: 50,
        borderColor: '#ce5e4b',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 5,
        width: 50,
        top: 5,
        left: '42%',
    },
    dates: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 85
    },
    inputBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        top: 5
    },
    slashes: {
        top: 20
    },
    enregistrer: {
        backgroundColor: '#c0341d',
        width: 300,
        height: 45,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 3,
        top: '60%', 
         alignItems: 'center',
         
         
    },
});
export default EcranDate;
