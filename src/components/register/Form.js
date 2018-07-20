import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, AppRegistry, Text } from 'react-native';
import Button from 'react-native-button';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: null,
            weight: null,
            //heightText: '',
            //weightText: '',
            bmi: '',
            dobText: 'DOB',
            dobDate: null,
        }
    }

    onRegister() {
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

    /**
     * Height Field On change
     */
    onChangeHeight = (inputVal) => {
        this.setState({ height: inputVal })
    }


    /**
     * Weight Field On change
     */
    onChangeWeight = (inputVal) => {
        this.setState({ weight: inputVal })
    }
    // /**
    //  * BMI Field On change
    //  */ 
    // onChangeHeight = () =>{
    //     this.setState({
    //         height : "CM"
    //     })
    // }

    onChangeWeight

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.formFields}>
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

                    <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
                        <View style={styles.datePickerBox}>
                            <Text style={styles.datePickerText}>{this.state.dobText}</Text>
                        </View>
                    </TouchableOpacity>

                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Height"}
                        placeholderTextColor='white' keyboardType={"numeric"}
                        style={styles.input}
                        value={this.state.height}
                        onChange={this.onChangeHeight}
                    />
                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Weight"}
                        placeholderTextColor='white' keyboardType={"numeric"}
                        style={styles.input} value={this.state.weight}
                        onChange={this.onChangeWeight}
                    />
                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"BMI"}
                        placeholderTextColor='white' keyboardType={"numeric"}
                        style={styles.input} value={this.state.bmi}
                        onChange={this.onChangeBmi}
                    />
                    <TextInput underlineColorAndroid='transparent'
                        placeholder={"Phone Number"}
                        placeholderTextColor='white' keyboardType={"numeric"}
                        style={styles.input}
                    />


                    <Button
                        style={{
                            fontSize: 16,
                            color: '#fff',
                            backgroundColor: '#27ae60',
                            borderRadius: 20,
                            padding: 12, width: "100%",
                            borderWidth: 1,
                            borderColor: '#ABABAB',

                        }}
                        onPress={this.onRegister.bind(this)}
                    >Register</Button>
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
    formFields: {
        marginLeft: "10%",
        width: "80%",
        backgroundColor: '#00000066',
        padding:20
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

});
AppRegistry.registerComponent('App', () => App);