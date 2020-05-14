import React, { Component } from 'react'
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { StackActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(
                StackActions.replace('Home')
            );
        }, 3000);
    }
    render() {
        const { container } = Styles
        return (
            <View style={container}>
                <Animatable.View animation="zoomIn">
                    <Image source={require('../assets/Logo.png')} />
                </Animatable.View>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#479fe2'
    }
});

export default Splash
