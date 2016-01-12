/* @flow */

import React from 'react-native';
import Appbar from './Appbar';
import Color from 'pigment/full';

const {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} = React;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 36,
        margin: 10
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    key: {
        fontSize: 12,
        margin: 8
    }
});

export default class Random extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: Color.random()
        };
    }

    _getItems = () => {
        const c = this.state.color;

        return [
            { key: 'RGB', value: c.torgb() },
            { key: 'HSL', value: c.tohsl() },
            { key: 'HSV', value: c.tohsv() },
            { key: 'HWB', value: c.tohwb() },
            { key: 'CMYK', value: c.tocmyk() },
            { key: 'Luminance', value: parseFloat(c.luminance()).toFixed(2) },
            { key: 'Darkness', value: parseFloat(c.darkness()).toFixed(2) }
        ];
    };

    _handlePress = () => {
        this.setState({
            color: Color.random()
        });
    };

    render() {
        const c = this.state.color;
        const hex = c.tohex();
        const darkness = c.darkness();

        return (
            <View style={[ styles.wrapper, { backgroundColor: hex } ]} onPress={this._handlePress}>
                <Appbar title='Tap for color' />
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={this._handlePress}
                    underlayColor='rgba(0, 0, 0, .2)'
                >
                    <View style={styles.container}>
                        <Text style={[ styles.header, { color: darkness > 0.5 ? 'rgba(255,255,255,.7)' : 'rgba(0,0,0,.7)' } ]}>{hex.toUpperCase()}</Text>

                        {this._getItems().map(item =>
                            <View key={item.key} style={styles.info}>
                                <Text style={[ styles.key, { color: darkness > 0.5 ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)' } ]}>
                                    {item.key}
                                </Text>
                                <Text style={{ color: darkness > 0.5 ? '#fff' : '#000' }}>{item.value}</Text>
                            </View>
                        )}
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
