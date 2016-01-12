/* @flow */

import React from 'react-native';

const {
    StyleSheet,
    PixelRatio,
    View,
    Text
} = React;

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: 'rgba(255, 255, 255, .7)',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: 'rgba(0, 0, 0, .2)'
    },
    statusbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        marginTop: 20
    },
    title: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

const Appbar = ({ title }: { title: string; }) => (
    <View style={styles.appbar}>
        <View style={styles.statusbar}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
    </View>
);

export default Appbar;
