import React from 'react';
import firebase from 'firebase';
import { View, StyleSheet, TextInput,
    Share, Text, TouchableOpacity, Image, Button } from 'react-native';
import Spinner from './Spinner';

 class Search extends React.Component {
     
    constructor(props) {
        super(props);
        this.navigate = props.navigation;
        console.ignoredYellowBox = [
          'Setting a timer',
          
        ];
        this.state = {
            searchNumber: '',
            prenomLove: '',
            nomLove: '',
            numberLength: '',
            numInconnu: '',
            loading: false
         };
    }
    

     showData = () => {
            this.setState({ loading: true });
            this.setState({ numberLength: '' });
            this.setState({ prenomLove: '' });
            this.setState({ nomLove: '' });
            const number = this.state.searchNumber;
            if (number.length >= 12) {
                console.log('12');
                const rootRef = firebase.database().ref('users');
                  const refence = rootRef.orderByChild('numero');
            if (refence !== undefined) {
                console.log('REF');
                refence.equalTo(number)
                .once('value', snap => {
                    console.log(snap);
                        snap.forEach(childSnap => {
                            const value = childSnap.val();   
                                if (value.numero !== '') {
                                    console.log('red2');
                                    this.setState({ loading: false });
                                    this.setState({ prenomLove: value.prenom });
                                    this.setState({ nomLove: value.nom });
                                } else {
                                    this.setState({ numInconnu: 'non enregistré invité ->' });
                                } 
                        });
                        });
            } else {
                this.setState({ numInconnu: 'non enregistré invité ->' });
                } 
            } else {
                this.setState({ loading: false });
                this.setState({ numberLength: '12 chiffres requis format du numero(+33)' });
            } 
       }
       invitation = () => {
        Share.share({
            title: 'My Love',
            url: 'www.youtube.com',
            message: 'je t\'invite à être en couple avec moi sur my love telecharge la ici', 
        }, {
            //android
            dialogTitle: 'inviter via',
            //ios
            excludedActivityTypes: ['com.apple.UIkit.activity.postToTwitter']
        });
        this.navigation.navigate('Dureerelation');
    }
       renderResponse = () => {
           if (this.state.loading) {
               return <Spinner />;
           }
               return (
                <View style={styles.user}>
                    <Text>{this.state.prenomLove}</Text>
                    <Text style={{ color: 'red' }}>{this.state.numberLength}</Text>
                    <Text>{this.state.nomLove}{this.state.numInconnu}</Text>
                    <Button 
                        title='inviter'
                        onPress={() => this.props.navigation.navigate('dureeRelation')}
                    />
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
        marginTop: 7,
        marginRight: 5,
        marginLeft: 5
    }
 });
 export default Search;
