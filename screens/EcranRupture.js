import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { Header } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Coeur from '../components/coeur';

class Ecranrupture extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Image 
            source={require('../components/img/logo/Rupture.png')}
            style={{ height: 24, width: 24 }} 

            />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false
        };
    }
    toggleModal = () => {
        this.setState({ displayModal: !this.state.displayModal });
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
               
                <Icon 
                    name='reorder'
                    onPress={() => this.props.navigation.openDrawer()}
                    color='#ce5e4b'
                    size={25}
                />
                 <View style={{ left: 100 }}>
                        <Text style={{ color: '#ce5e4b', fontSize: 20 }}> My Love </Text>
                </View>
            </Header>
           
            <View 
             style={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
                <View style={styles.heart}>
                    <Coeur />
                    <Text style={{ top: 15 }}>
                        julie
                    </Text>
                    <Text style={{ flexWrap: 'wrap', margin: 5, textAlign: 'center', top: 50 }}>
                    Des moments compliqués... Sachez que cette action sera irréversible.
                    </Text>
                </View>   
                <View style={{ alignItems: 'center', top: 200 }}>
                    <TouchableOpacity
                    style={styles.rompre}
                    onPress={() => this.toggleModal()}
                    >
                        <Text style={styles.text}>Rupture</Text>
                    </TouchableOpacity>
                </View>  
            </View>
            <Modal
                style={{ height: 30, width: 40 }} 
               animationType={'slide'}
                onRequestClose={() => console.log('close it modal')}
               visible={this.state.displayModal}
                animationIn={'zoomInDown'}
                animationOut={'zoomOutUp'}
                animationInTiming={1000}
                animationOutTiming={1000}
                backDropTransitionInTiming={1000}
                backDropTransitionOutTiming={1000}
                transparent
            >
                <View style={styles.modal}>
                        <View>
                            <Text> vous êtes sur de vouloir rompre votre relation ?</Text>
                        </View>
                        <View style={styles.button}>
                            <Button
                            buttonStyle={{ backgroundColor: 'red', color: 'red' }}
                                title='oui'
                                onPress={() => this.toggleModal()}
                            />
                            <Button
                                title='non'
                                onPress={() => this.toggleModal()}
                            />
                        </View>
                </View>
            </Modal>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    heart: {
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 50,
        flexDirection: 'column'
    },
    rompre: {
        backgroundColor: '#c0341d',
        width: 300,
        height: 45,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 3,
         alignItems: 'center',
         
         
    },
    text: {
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        top: 5,
        fontSize: 20
    },
    button: {
        width: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 20
    },
    modal: {
        backgroundColor: '#efefef',
        height: 120,
        margin: 20,
         padding: 20,
         position: 'absolute',
         top: '65%'
            
    }
});

export default Ecranrupture;
