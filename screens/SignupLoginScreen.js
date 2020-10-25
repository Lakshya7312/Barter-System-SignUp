import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import * as firebase from "firebase";
import { auth } from "../config";
import db from "../config";

export default class SignupLoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
    }

    login = async (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                return Alert.alert("Signed in Successfully");
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage);
            })
    }

    signUp = async (email, password) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((response) => {
                return Alert.alert("User Registered Successfully!");
                    })
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    return Alert.alert(errorMessage);
                })
        }
    }

   render() {
       return (
                <Text style={{ fontWeight: "700", fontSize: 25, alignSelf: "center", marginTop: 30 }}>BARTER SYSTEM</Text>
                <Image source={require("../assets/Welcome.png")} style={{ marginTop: 10, height: 250, width: 300, alignSelf: "center" }} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" keyboardType="email-address" onChangeText={(text) => { this.setState({ email: text }) }} />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} onChangeText={(text) => { this.setState({ password: text }) }} />
                <TouchableOpacity style={styles.button} onPress={() => { this.login(this.state.email, this.state.password) }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.signUp(this.state.email, this.state.password) }}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Image source={require("../assets/Sign-up.png")} style={{ height: 270, width: 350, alignSelf: "center" }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff9a76",
        width: '100%',
    },

    input: {
        borderWidth: 1.3,
        borderColor: "#ffeadb",
        marginTop: 30,
        paddingLeft: 9,
        alignSelf: "center",
        width: 180,
        height: 27,
        color: "#fff"
    },

    button: {
        marginTop: 20,
        alignSelf: "center",
        backgroundColor: "#f7c5a8",
        width: 100,
        height: 25,
        borderRadius: 10,
    },

    buttonText: {
        color: "#1c2b2d",
        alignSelf: "center",
        textAlign: "center",
        marginTop: 1.5,
        fontWeight: "400",
        textAlignVertical: "center"
    },
})
