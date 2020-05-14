import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
export default class Home extends Component {
    ActivityIndicatorLoadingView() {
        return (
            <ActivityIndicator
                color="#009688"
                size="large"
                style={styles.indicator}
            />
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    renderLoading={this.ActivityIndicatorLoadingView}
                    startInLoadingState={true}
                    source={{ uri: 'https://cloudbills.in' }}
                    textZoom={100}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        top: '50%',
        left: '45%',
    }
});
