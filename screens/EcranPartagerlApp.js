import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Icon } from 'native-base';


class EcranPartagerlApp extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Image 
            source={require('../components/img/logo/Partager.png')}
            style={{ height: 24, width: 24 }} 

            />
        )
    }
    render() {
        return (
            <View style={styles.container}>  
            <Header 
            style={{
                backgroundColor: 'white',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                
          }}>
               
                    <Icon 
                        name='menu'
                        color='red'
                        
                        onPress={() => this.props.navigation.openDrawer()} 
                    />
                <View style={{ left: 100 }}>
                        <Text style={{ color: '#ce5e4b', fontSize: 20 }}> My Love </Text>
                </View>
            </Header>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                    style={{ height: 70, width: 80, top: 55 }}
                     source={require('../components/img/coeur-my-love.png')}
                />
                    <Text style={{ top: 70, fontSize: 30 }}> Julie </Text>
            </View>
            <View style={styles.boxReseaux}>
                 <Text> je partage mon amour par </Text>
                 <View style={styles.logo}>
                 <View style={styles.blockLogo}>
                     <Image 
                        style={styles.images} 
                        source={require('../components/LogoSociaux/facebook-770688_960_720.png')} 
                     />
                     <Text>FaceBook</Text>
                 </View>
                 <View style={styles.blockLogo}>
                     <Image 
                        style={styles.images} 
                        source={require('../components/LogoSociaux/messenger.jpg')} 
                     />
                     <Text>Messenger</Text>
                 </View>
                 <View style={styles.blockLogo}>
                     <Image 
                        style={styles.images} 
                        source={require('../components/LogoSociaux/whatsapp.png')} 
                     />
                     <Text>WhatsApp</Text>
                 </View>
                    <View style={styles.blockLogo}>
                     <Image 
                        style={styles.images} 
                        source={require('../components/LogoSociaux/twitter.jpg')} 
                     />
                     <Text>Twitter</Text>
                    </View>
                    <View style={styles.blockLogo}>
                     <Image 
                        style={styles.images} 
                        source={require('../components/LogoSociaux/gsmarena_001.jpg')} 
                     />
                     <Text>Messages</Text>
                    </View>
                    <View style={styles.blockLogo}>
                     <Image 
                        style={styles.images} 
                        source={require('../components/LogoSociaux/snapchat-logo.jpg')} 
                     />
                     <Text>SnapChat</Text>
                    </View>
                 </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    boxReseaux: {
        justifyContent: 'center',
        alignItems: 'center',
        top: '20%'
    },
    images: {
        height: 70,
         width: 70,
         marginTop: 15,
         borderRadius: 3    
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        top: 30
           
    },
    blockLogo: {
            height: 90,
            width: 95,
            justifyContent: 'center',
            alignItems: 'center',
        
                
    }
});
export default EcranPartagerlApp;
