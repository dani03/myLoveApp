import React from 'react';
import { Text, View } from 'react-native';
import { style } from './styles';

const Header = ({ content }) => (
    <View>
        <View style={style.subHeader} />
        <View style={style.profilHeader}>
            <Text style={style.text}>{content}</Text>
        </View> 
        
    </View>
);

export default Header;
