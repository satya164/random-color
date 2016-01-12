/* @flow */

import React from 'react-native';
import RandomColor from './app/RandomColor';

const {
    AppRegistry
} = React;

export default class Random extends React.Component {
    render() {
        return <RandomColor />;
    }
}

AppRegistry.registerComponent('random', () => Random);
