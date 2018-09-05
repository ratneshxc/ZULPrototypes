import React, { Component } from "react";
import { TouchableOpacity, ScrollView, Platform } from 'react-native';
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
import StarRating from 'react-native-star-rating';
const AppointmentDetails = [
    { title: "Appointment Details", content: "Lorem ipsum dolor sit amet" },
];
const PerosnelDetails = [
    { title: "Personnel Details", content: "Lorem ipsum dolor sit amet" },
]
export default class Booking extends Component {

    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: "#F0F0F0",padding:3 }}>
                    <View style={{ flexDirection: 'column', padding: 5, marginVertical: 5, backgroundColor: '#FFFFFF' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Thumbnail medium round source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                                <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                                    <Text style={{ flex: 1 }}>Samira Reddy</Text>
                                    <Icon name='dumbbell' type="MaterialCommunityIcons" style={{ fontSize: 18, marginRight: 5, }} />
                                </View>
                                <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialist</Text>
                                <View style={{ flexDirection: 'row',position:'absolute', top:25,left:1 }}>
                                    <Picker

                                        iosHeader="Select Your Sim"
                                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                                        mode="dialog"
                                        style={{ width: 200, flex: 1}}
                                        textStyle={{ fontWeight: 'bold' }}
                                    >
                                        <Picker.Item label="Video Conference" value="key0" />
                                        <Picker.Item label="Text Chat" value="key1" />


                                        <Picker.Item label="Appointment" value="key2" />
                                    </Picker>

                                </View>
                             </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 5, marginVertical: 5, backgroundColor: '#FFFFFF' }}>
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
                    <View style={{ flexDirection: 'column', padding: 5, marginVertical: 5, backgroundColor: '#FFFFFF', borderTopColor: '#ddd', borderTopWidth: 1, marginTop: 1 }}>

                        <Item fixedLabel>
                            <Icon name="user" type="FontAwesome" />
                            <Input value="Shakti Singh Chouhan" style={{marginLeft:10}} />

                        </Item>
                        <Item fixedLabel last >
                            <Icon name="envelope" type="FontAwesome" />
                            <Input value="svpsctg11@yahoo.com"  style={{marginLeft:4}}/>
                        </Item>
                        <View style={{ flex: 1, flexDirection: 'column', }}>
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
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ flex: 1 }}></Text>
                            <Text style={{ color: '#007bff', textDecorationLine: 'underline' }}>Not you?</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 5, borderTopWidth: 1, borderTopColor: '#ddd',backgroundColor:"#fff",padding:5 }}>
                        <View style={{ flexDirection: 'column', flex: 1, marginTop: 1 }}>
                            <Text style={{ flex: 1 }}>Total: ₹150</Text>
                            <Text style={{ color: '#28a745', textDecorationLine: 'underline' }}>Apply coupon</Text>
                        </View>

                    </View>


                </Content>
                {(Platform.OS === 'ios') ?
                    <Footer>
                        <FooterTab>
                            <Button block onPress={() => this.props.navigation.navigate("AppointmentList")}>
                                <Text style={{ color: 'black', fontSize: 16, }}>Book</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    :
                    <Footer>
                        <FooterTab>
                            <Button block onPress={() => this.props.navigation.navigate("AppointmentList")}>
                                <Text style={{ color: 'white', fontSize: 16, }}>Book</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                }
            </Container>
        )
    }
}


