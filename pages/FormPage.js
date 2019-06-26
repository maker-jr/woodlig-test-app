import * as React from "react"
import { View, Text, TextInput, Animated, TouchableOpacity, StyleSheet, Alert } from "react-native"


export default class FormPage extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Animated.ScrollView onScroll={ this.props.onScroll } scrollEventThrottle={16} style={{paddingTop: this.props.heightOffset}}>
                    <View style={styles.form}>
                        <Text style={styles.title}>Woodlig Sign Up</Text>
                        <Text style={styles.subtitle}>Please fill the form below to complete your registration</Text>
                    <TextInput style={styles.input} placeholder="First Name"></TextInput>
                        <TextInput style={styles.input} placeholder="Last Name"></TextInput>
                        <TextInput style={styles.input} placeholder="Middle Name" textContentType="middleName"></TextInput>
                        <TextInput style={styles.input} placeholder="Nationality"></TextInput>
                        <TextInput style={styles.input} placeholder="Current Address"></TextInput>
                        <TextInput style={styles.input} placeholder="Permanent Address"></TextInput>
                        <TextInput style={styles.input} placeholder="Origin"></TextInput>
                        <TouchableOpacity onPress={() => { Alert.alert("Form", "Thank you for signing up!\nBest regards.. Woodlig Team")}}>
                            <View style={styles.button}>
                                <Text style={{color: "white", textAlign: "center", fontWeight: "bold", fontSize: 18}}>Sign up</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.footer}>&copy; 2019 maker.jr</Text>
                        <View style={{height: 600}}/>
                    </View>
                </Animated.ScrollView>
            </View>
        )
    }
}

let styles = StyleSheet.create(
    {
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginBottom: 16
        },
        subtitle: {
            fontSize: 16,
            color: "#BBBBBB",
            marginBottom: 16
        }, 
        footer: {
            fontSize: 14,
            color: "#000000",
            marginBottom: 16,
            textAlign: "center",
            marginTop: 30
        },
        button: {
            borderRadius: 50,
            height: 50,
            backgroundColor: "steelblue",
            padding: 16,
            marginStart: 50,
            marginEnd: 50,
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
        },
        scrollView: {
            padding: 16
        },
        form: {
            padding: 16
        },
        input: {
            padding: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "black",
            marginBottom: 8,
        }
    }
)