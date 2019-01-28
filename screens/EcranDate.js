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
                            
                            onChangeText={(year) => { this.setState({ year }); }}
                            keyboardType='phone-pad'
                            selectionColor='#ce5e4b'
                            
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
            <View style={styles.dayBox}>
                <Picker 
                style={{ textAlign: 'center', top: 20 }}
                    selectedValue={this.state.day}
                    style={{ height: 50, width: 100, right: 6 }}
                    onValueChange={(itemValue, itemIndex) => 
                    this.setState({ key: itemIndex, day: itemValue })}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="11" value="11" />
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="13" value="13" />
                    <Picker.Item label="14" value="14" />
                    <Picker.Item label="15" value="15" />
                    <Picker.Item label="16" value="16" />
                    <Picker.Item label="17" value="17" />
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="19" value="19" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="21" value="21" />
                    <Picker.Item label="22" value="22" />
                    <Picker.Item label="23" value="23" />
                    <Picker.Item label="24" value="24" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="26" value="26" />
                    <Picker.Item label="27" value="27" />
                    <Picker.Item label="28" value="28" />
                    <Picker.Item label="29" value="29" />
                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="31" value="31" />
                </Picker>
            </View>

            <View style={styles.lastInputB}>
                <Picker 
                style={{ textAlign: 'center', top: 20, fontSize: 18 }}
                    selectedValue={this.state.year}
                    style={{ height: 50, width: 100, right: 6 }}
                    onValueChange={(itemValue, itemIndex) => 
                    this.setState({ key: itemIndex, year: itemValue })}
                >   
                    <Picker.Item label="2019" value="2019" />
                    <Picker.Item label="2018" value="2018" />
                    <Picker.Item label="2017" value="2017" />
                    <Picker.Item label="2016" value="2016" />
                    <Picker.Item label="2015" value="2015" />
                    <Picker.Item label="2014" value="2014" />
                    <Picker.Item label="2013" value="2013" />
                    <Picker.Item label="2012" value="2012" />
                    <Picker.Item label="2011" value="2011" />
                    <Picker.Item label="2010" value="2010" />
                    <Picker.Item label="2009" value="2009" />
                    <Picker.Item label="2008" value="2008" />
                    <Picker.Item label="2007" value="2007" />
                    <Picker.Item label="2006" value="2006" />
                    <Picker.Item label="2005" value="2005" />
                    <Picker.Item label="2004" value="2004" />
                    <Picker.Item label="2003" value="2003" />
                    <Picker.Item label="2002" value="2002" />
                    <Picker.Item label="2001" value="2001" />
                    <Picker.Item label="2000" value="2000" />
                    <Picker.Item label="1999" value="1999" />
                    <Picker.Item label="1998" value="1998" />
                    <Picker.Item label="1997" value="1997" />
                    <Picker.Item label="1996" value="1996" />
                    <Picker.Item label="1995" value="1995" />
                    <Picker.Item label="1994" value="1994" />
                    <Picker.Item label="1993" value="1993" />
                    <Picker.Item label="1992" value="1992" />
                    <Picker.Item label="1991" value="1991" />
                    <Picker.Item label="1990" value="1990" />
                    <Picker.Item label="1989" value="1989" />
                    <Picker.Item label="1988" value="1988" />
                    <Picker.Item label="1987" value="1987" />
                    <Picker.Item label="1986" value="1986" />
                    <Picker.Item label="1985" value="1985" />
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
        
    },
    lastInputB: {
        borderBottomColor: '#ce5e4b',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        left: 220,
        width: 55,
        top: -95,
        
    },
    dayBox: {
        borderBottomColor: '#ce5e4b',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
       left: 100,
        width: 55,
        top: -45,
        
        
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
