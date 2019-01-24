import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import { Header } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Coeur from '../components/coeur';

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
             <CoeurBubble key={countNum} count={countNum} animatedComplete={this.animatedComplete.bind(this)} />);
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
            </View>
        </View>
        );
    }
}
class CoeurBubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0)

        };
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(
                this.state.yPosition, {
                    toValue: -500,
                    duration: 1000
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 1000
                })

        ]).start(() => {
            setTimeout(() => {
                    this.props.animatedComplete(this.props.count);
            }, 100);
        });
    }
    render() {
        const animationStyle = {
            transform: [{ translateY: this.state.yPosition }],
            opacity: this.state.opacity
        };
        return (
            <Animated.View style={[animationStyle]}>
            <Coeur style={styles.clap} />
            <Text style={styles.clapSMS}>je t'aime </Text>
            </Animated.View>
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
        top: '44%',
        position: 'relative',
    },
    clap: {
        alignItems: 'center',
        top: -10,
        position: 'relative',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center', 
        
    },
    clapSMS: {
        color: 'black',
        fontSize: 10
    }
});

export default EcranPulsation;
