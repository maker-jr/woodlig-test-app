import * as React from "react"
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native"

const ITEM_AREA = Dimensions.get("window").width * .3

export default class GridPage extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Animated.ScrollView onScroll={ this.props.onScroll } scrollEventThrottle={16} style={{paddingTop: this.props.heightOffset}}>
                    <View style={styles.form}>
                        <Text style={styles.title}>Woodlig Grid Example</Text>
                        <Text style={styles.subtitle}>A 3x3 layout grid items as requested by the instruction :D</Text>
                        <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        <View style={styles.gridItem}/>
                        </View>
                        <Text style={styles.footer}>&copy; 2019 maker.jr</Text>
                        <View style={{height: 600}}/>
                    </View>
                </Animated.ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gridItem: {
        width: ITEM_AREA,
        height: ITEM_AREA,
        backgroundColor: "#dddddd",
        marginBottom: 8
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        margin: 16
    },
    subtitle: {
        fontSize: 16,
        color: "#BBBBBB",
        marginBottom: 16,
        marginStart: 16,
        marginEnd: 16
    }, 
    footer: {
        fontSize: 14,
        color: "#000000",
        marginBottom: 16,
        textAlign: "center",
        marginTop: 30
    },
})