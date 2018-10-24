import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class MyButton extends React.Component {
    render() {
        return (
            <View> 
                <Button
                onPress={this.validatePrenom}
                    title='Valider'
                    buttonStyle={{
                        backgroundColor: '#ce5e4b',
                        width: 300,
                        height: 45,
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 5,
                        top: 37
                    }}
                />
            </View>
        );
    }
}

export default MyButton;
