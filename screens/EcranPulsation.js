import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Coeur from '../components/coeur';
import CoeurBubble from '../components/CoeurBubble';
import CoeurBubble2 from '../components/CoeurBubble2';
import CoeurBubble3 from '../components/CoeurBubble3';
import CoeurBubble4 from '../components/CoeurBubble4';
import CoeurBubble5 from '../components/CoeurBubble5';

class EcranPulsation extends Component {
    
    static navigationOptions = {
        drawerIcon: (
            <Image 
            source={require('../components/img/logo/coeur-pulsation.png')}
            style={{ height: 24, width: 24 }} 

            />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            claps: []
        };
    }
    clap = () => {
         const count = this.state.count;
         const claps = this.state.claps;
         claps.push(count);
         this.setState({ count });
    }
    
    animatedComplete = (countNum) => {
        claps = this.state.claps;
        claps.splice(claps.indexOf(countNum), 1);
        this.setState({ claps });
    }
    renderclaps = () => {
        return this.state.claps.map(countNum =>
             <CoeurBubble
              key={countNum} count={countNum} animatedComplete={this.animatedComplete}
             />
             );
     }
     renderclaps2 = () => {
        return this.state.claps.map(countNum =>
             <CoeurBubble2 
              key={countNum} count={countNum} animatedComplete={this.animatedComplete}
             />
             );
     }
     renderclaps3 = () => {
        return this.state.claps.map(countNum =>
             <CoeurBubble3
             
              key={countNum} count={countNum} animatedComplete={this.animatedComplete}
             />
             );
     }
     renderclaps4 = () => {
        return this.state.claps.map(countNum =>
             <CoeurBubble4
             
              key={countNum} count={countNum} animatedComplete={this.animatedComplete}
             />
             );
     }
     renderclaps5 = () => {
        return this.state.claps.map(countNum =>
             <CoeurBubble5
             
              key={countNum} count={countNum} animatedComplete={this.animatedComplete}
             />
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
               
                    <Icon 
                        name='reorder'
                        onPress={() => this.props.navigation.openDrawer()}
                        color='#ce5e4b'
                        size={25}
                    />
            </Header>
            <View style={styles.heart}>
                <TouchableOpacity onPress={this.clap}>
                    <Coeur />
                </TouchableOpacity>
               
                {this.renderclaps()}
                {this.renderclaps2()}
                {this.renderclaps3()}
                {this.renderclaps4()}
                {this.renderclaps5()}
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
    heart: {
        justifyContent: 'center', 
        alignItems: 'center',
        top: '40%',
        position: 'relative',
    },
    clap: {
        alignItems: 'center',
        top: -80,
        position: 'relative',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center', 
        
    },
    clapSMS: {
        color: 'black',
        fontSize: 10,
        left: 20
    }
});

export default EcranPulsation;
