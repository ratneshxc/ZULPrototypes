import React, { Component } from "react";
import { TouchableOpacity, ScrollView, Platform,Image } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Footer,
    Right,
    FooterTab,
    Body,
    Icon,
    Accordion,
    Text,
    View,
    Thumbnail,
    Picker,
    Item,
    Form,
    Input,
    Label,
    CheckBox
} from "native-base";

export default class Booking extends Component {

    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: "#F8F8FF",paddingHorizontal:3 }}>
                    <View style={{ flexDirection: 'column', padding: 10, backgroundColor: '#FFFFFF',borderBottomWidth:1,borderColor:"#ddd" }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Thumbnail medium round source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                                <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                                    <Text style={{ flex: 1 }}>Samira Reddy</Text>
                                    <Image style={{ width: 20, height: 20 }} source={require('../../assests/images/dashboard/physical.png')} />
                                </View>
                                {/* <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialist</Text> */}
                                <View style={{ flexDirection: 'row',position:'absolute', top:10,left:2 }}>
                                    <Picker

                                        iosHeader="Select Your Sim"
                                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                                        mode="dialog"
                                       
                                        textStyle={{ fontWeight: 'bold' }}
                                    >
                                        <Picker.Item label="Video conference" value="key0" />
                                        <Picker.Item label="Text chat" value="key1" />


                                        <Picker.Item label="Appointment" value="key2" />
                                    </Picker>

                                </View>
                             </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 10, marginVertical: 0, backgroundColor: '#FFFFFF' ,}}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          
                            <View style={{ flex: 1, paddingHorizontal: 5, paddingRight: 2 }}>
                            <Text style={{  color: '#505050' }}>Date and time</Text>
                                <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                                    <Text style={{ flex: 1 }}>Tomorrow, 8:20PM</Text>
                                    <Icon name="pencil" type="FontAwesome" style={{fontSize:16,marginRight:5}} />
                                </View>
                               
                      
                             </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column',  padding: 15, marginVertical: 10, backgroundColor: '#FFFFFF'   }}>

                        <View style={{flex:1,flexDirection:'row',paddingBottom:15}}>
                            <Icon name="user" type="FontAwesome" style={{position:'absolute',top:18,color:"#505050"}} />
                            <Input value="John Doe" style={{flex:1,borderBottomColor:'#111111',borderBottomWidth:1,marginLeft:40}} />

                        </View>
                        <View style={{flex:1,flexDirection:'row',paddingBottom:15}}>
                            <Icon name="envelope" type="FontAwesome" style={{position:'absolute',top:15,color:"#505050"}} />
                            <Input value="johndoe@gmail.com" style={{flex:1,borderBottomColor:'#111111',borderBottomWidth:1,marginLeft:40}} />

                        </View>
                        <View style={{flex:1,flexDirection:'row',paddingBottom:15}}>
                            <Icon name="phone" type="FontAwesome" style={{position:'absolute',top:15,color:"#505050"}} />
                            <Input value="9249567734" style={{flex:1,borderBottomColor:'#111111',borderBottomWidth:1,marginLeft:40}} />

                        </View>
                        {/* <View style={{ flex: 1, flexDirection: 'column', }}>
                            <Text style={{ fontSize: 16, marginTop: 5 }}>Want to share vital information with Expert?  <Icon style={{ fontSize: 10 }} name='info-circle' type="FontAwesome" /></Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <CheckBox
                                        color="black"
                                        checked={true}
                                    />
                                    <Text style={{ marginLeft: 10 }}> Yes </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <CheckBox
                                        color="black"
                                        checked={false}
                                    />
                                    <Text style={{ marginLeft: 10 }}> No </Text>
                                </View>
                            </View>
                        </View> */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ flex: 1 }}></Text>
                            <Text style={{ color: '#294787', textDecorationLine: 'underline' }}>Not you?</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 5,borderTopWidth:1,borderBottomWidth:1,borderColor:"#F5fdf1",backgroundColor:"#fff", padding: 15 }}>
                        <View style={{ flexDirection: 'column', flex: 1, marginTop: 1 }}>
                            <Text style={{ flex: 1 }}>Total: ₹150</Text>
                            <Text style={{ color: '#294787', textDecorationLine: 'underline' }}>Redeem zing cash</Text>
                        </View>

                    </View>

        {(Platform.OS === 'ios') ?
                    
                    <Button block onPress={() => this.props.navigation.navigate("AppointmentList")}>
                        <Text style={{ color: 'black', fontSize: 16, }}>Book</Text>
                    </Button>
           
            :
            
                    <Button style={{marginTop:10}}block  onPress={() => this.props.navigation.navigate("AppointmentList", { booked: true })}>
                        <Text style={{ color: 'white', fontSize: 16, }}>Book</Text>
                    </Button>
               
        }
                </Content>
        
            </Container>
        )
    }
}


