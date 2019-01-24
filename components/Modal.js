import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from 'react-native-elements';
import Modal from 'react-native-modal';


const MyModal = () => (
       
            <Modal 
            isVisble
            animationIn={'zoomInDown'}
            animationOut={'zoomOutUp'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backDropTransitionInTiming={1000}
            backDropTransitionOutTiming={1000}
            >
                <View style={styles.modal}>
                    <Text> vous êtes sur de vouloir rompre votre relation ?</Text>
                </View>
                <View>
                    <Button
                        title='oui'
                        onPress={() => console.log('oui')}
                    />
                    <Button
                        title='non'
                        onPress={() => console.log('non')}
                    />

                </View>
            </Modal>
);

const styles = StyleSheet.create({
        buttonChange: {
            backgroundColor: 'blue'
        },
        buttonNon: {
            backgroundColor: '#c0341d'
        },
        modal: {
            backgroundColor: '#efefef',
            height: 200
        }
});
export default MyModal;
