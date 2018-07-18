import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,Dimensions,ImageBackground} from 'react-native';
import t from 'tcomb-form-native';
import Button from 'react-native-button'
const Form = t.form.Form;

// Form model
const User = t.struct({
  username: t.String,
  password: t.String,
});

export default class login extends React.Component{
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.takeAssessment = this.takeAssessment.bind(this)
        this.forgotPassword = this.forgotPassword.bind(this)
        this.Register = this.Register.bind(this)
      }
    handleSubmit() {
        const value = this.loginform.getValue(); // use that ref to get the form value
        console.log('value: ', value);
        this.clearForm();
       
      }
      takeAssessment = () => {
        this.props.navigation.navigate('Assessment');
      }
      forgotPassword(){
          console.log('Forgot Password');
      }
      Register(){
          console.log('Register')
      }
      componentDidMount() {
        // give focus to the username textbox
        this.loginform.getComponent('username').refs.input.focus();
      }
    clearForm() {
        // clear content from all textbox
        this.setState({ value: null });
        this.loginform.getComponent('username').refs.input.focus();
      }
    render(){
        let screenWidth=Dimensions.get('window').width
        let screenHeight=Dimensions.get('window').height
        return(
            <View>
                <ImageBackground source={require('../images/Yoga2.jpg')}
                style={{width:screenWidth,height:screenHeight}}>
            <Image source={require('../images/zul.png')} style={{left:110,top:100,width:100,height:100}}>
            </Image>
      <View style={styles.container}>
        <Form ref={c => this.loginform = c} type={User} options={options}  />
        <Button
          style={{
              fontSize:20,
              color:'#fff',
              backgroundColor:'#009CDF',
              borderRadius:20,
              left:10,
              padding:12,width:300
          }}
          onPress={this.handleSubmit}
        >Login</Button>
        <View style={{height:5}}></View>
        <View style={{flexDirection:'row'}}>
        <Button
           style={{
            fontSize:16,
            color:'#009CDF',
            
            borderRadius:20,
            padding:12,right:12,width:180
        }}
          onPress={this.forgotPassword}
        >Forgot password</Button>
         <Button
           style={{
            fontSize:16,
            color:'#009CDF',
           
            borderRadius:20,
            left:10,
            padding:12,width:100
        }}
          onPress={this.Register}
        >Register</Button>
            </View>
          
      </View>
      <View style={{top:50}}><Text style={{padding:12,fontSize:16,color:'#000000',textAlign:'center'}}><Text style={{fontWeight:'bold'}}>20000</Text> people have already taken assessment.Would you try?</Text></View>
     <View style={{top:40,left:2}}>
      <Button
          style={{
              fontSize:20,
              color:'#fff',
              backgroundColor:'#009CDF',
              left:20,
              borderRadius:20,
              padding:12,width:300
          }}
          onPress={this.takeAssessment}
        >Take Assessment</Button>
        </View>
        </ImageBackground>
      </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        top:90,
      justifyContent: 'center',
      marginTop: 50,
      padding: 20
    },
    error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
  });
  const options = {
    auto: 'placeholders',
    fields: {
      username: {
        error: 'username is required'
      },
      password: {
        error: 'password is required',
        password: true,
      secureTextEntry: true
      },
      
    },
  };
  