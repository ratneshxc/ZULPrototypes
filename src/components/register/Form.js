import React, { Component } from 'react';
import {
    TextInput, View, StyleSheet,
    TouchableOpacity, AppRegistry, Text, Image
    
} from 'react-native';
import Button from 'react-native-button';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            passwrod: "",
            rePassword: "",
            dobText: 'DOB',
            dobDate: null,
        }
    }

    onRegister() {
        document.getElementById("register-form").reset();
        console.log('Register');
    }

    /**
   * DOB textbox click listener
   */
    onDOBPress = () => {
        let dobDate = this.state.dobDate;

        if (!dobDate || dobDate == null) {
            dobDate = new Date();
            this.setState({
                dobDate: dobDate
            });
        }

        //To open the dialog
        this.refs.dobDialog.open({
            date: dobDate,
            maxDate: new Date() //To restirct future date
        });

    }

    /**
     * Call back for dob date picked event
     *
     */
    onDOBDatePicked = (date) => {
        this.setState({
            dobDate: date,
            dobText: moment(date).format('DD-MMM-YYYY')
        });
    }



    render() {
        return (
            
            <View style={styles.container}>

                <View style={styles.formFields}>
                 <form id="register-form">
                    <View style={styles.logoContainer}>
                        <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Create a new account</Text>

                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Name"}
                        placeholderTextColor='white' keyboardAppearance="default"
                        style={styles.input}
                    />

                    {/* <TextInput underlineColorAndroid='transparent'
                        placeholder={"Enter Your DOB"}
                        placeholderTextColor='white'
                        style={styles.input} value={this.state.dobText}
                    /> */}

                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Email"}
                        placeholderTextColor='white' keyboardType={"email-address"}
                        style={styles.input}
                    />

                    <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
                        <View style={styles.datePickerBox}>
                            <Text style={styles.datePickerText}>{this.state.dobText}</Text>
                        </View>
                    </TouchableOpacity>

                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Phone Number"}
                        placeholderTextColor='white' keyboardType={"numeric"}
                        style={styles.input}
                    />

                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Password"}
                        placeholderTextColor='white'
                        style={styles.input}
                    />
                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Re-Password"}
                        placeholderTextColor='white'
                        style={styles.input}
                    />


                    <Button
                        style={styles.regBtn}
                        onPress={this.onRegister.bind(this)}
                    >Register</Button>
                    </form>
                </View>


                {/* Place the dialog component at end of your views and assign the references, event handlers to it.*/}
                <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} />

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 100,
    },
    loginLogo: {
        height: 150,
        width: 150
    },
    logoContainer: {
        alignItems: 'center'
    },
    formFields: {
        marginLeft: "10%",
        width: "80%",
        backgroundColor: '#00000066',
        padding: 20
    },
    input: {
        width: "100%",
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ABABAB',
        marginBottom: 10,
        borderRadius: 5
    },

    datePickerBox: {
        //marginTop: 9,
        borderColor: '#ABABAB',
        borderWidth: 1,
        padding: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: 38,
        justifyContent: 'center',
        marginBottom: 10
    },
    datePickerText: {
        fontSize: 14,
        marginLeft: 5,
        borderWidth: 0,
        color: 'white',
    },
    regBtn: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#00AC46',
        borderRadius: 10,
        padding: 10, width: "100%",
    }

});
AppRegistry.registerComponent('App', () => App);