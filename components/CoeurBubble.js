import React, { Component } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import Coeur from '../components/coeur';

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
                    duration: 2000
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
            opacity: this.state.opacity,
            right: 80
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
        fontSize: 10,
        left: 20
    }
});
    export default CoeurBubble;
