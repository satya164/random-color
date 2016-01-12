let React = require("react-native"),
    Random = require("./app/random");

let { AppRegistry, NavigatorIOS, StyleSheet } = React;

let styles = StyleSheet.create({
    nav: { flex: 1 }
});

let random = React.createClass({
    render() {
        return (
            <NavigatorIOS
                style={styles.nav}
                initialRoute={{
                    title: "Tap for color",
                    component: Random
                }}
            />
        );
    }
});

AppRegistry.registerComponent("random", () => random);
