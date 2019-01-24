import React from 'react';
import firebase from 'firebase';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Spinner from './Spinner';

 class Search extends React.Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
          'Setting a timer'
        ];
    }
     state = {
        searchNumber: '',
        prenomLove: '',
        nomlove: '',
        numberLength: '',
        numInconnu: '',
        loading: false
     }
     
     showData = () => {
            this.setState({ loading: true });
            const number = this.state.searchNumber;
            if (number.length >= 12) {
                const rootRef = firebase.database().ref('users');
            rootRef.orderByChild('numero').equalTo(number)
            .once('value', snap => {
                console.log(snap);
                if (snap === null) {
                   this.setState({ loading: false });
                    this.setState({ numInconnu: 'non enregistré' });
                } else {
                    snap.forEach(childSnap => {
                        const value = childSnap.val();   
                            if (value.numero !== '') {
                                this.setState({ loading: false });
                                this.setState({ prenomLove: value.prenom });
                                this.setState({ nomLove: value.nom });
                            } 
                    });
                }
                    });
            } else {
                this.setState({ loading: false });
                this.setState({ numberLength: '12 chiffres sont requis' });
            } 
       }
       renderResponse = () => {
           if (this.state.loading) {
               return <Spinner />;
           }
               return (
                <View style={styles.user}>
                    <Text>{this.state.prenomLove}{this.state.numberLength}</Text>
                    <Text>{this.state.nomLove}{this.state.numInconnu}</Text>
                    <Text>button d'invitation la</Text>
                </View>
               );
       }
    render() {
        return (
            <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <TextInput
                selectionColor='#ce5e4b'
                keyboardType='phone-pad'
                underlineColorAndroid='transparent'
                value={this.state.searchNumber}
                onChangeText={(searchNumber) => { this.setState({ searchNumber }); }}
                    style={styles.search} placeholder='+33 xx xx xx xx'
                    
                    maxLength={12}
                />
                
                <TouchableOpacity onPress={this.showData}>
                    <Image 
                   
                        source={require('../components/img/Fleche-Recherche.png')}
                        style={{ height: 45, width: 50, top: 4 }}     
                    />
                </TouchableOpacity>
            </View>
            {this.renderResponse()}
            
        </View>
        );
    }
 }
 const styles = StyleSheet.create({
    search: {
        marginLeft: 5,
        marginRight: 5,
        height: 45,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        width: 200,
        fontSize: 20
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 7
    }
 });
 export default Search;
