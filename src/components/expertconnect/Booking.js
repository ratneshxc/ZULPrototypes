import React, { Component } from "react";
import { TouchableOpacity, ScrollView ,Platform} from 'react-native';
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

    _renderAppointmentHeader(dataArray, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#F0F0F0" }}
            >
                <Text style={{ flex: 1 }}>
                    {" "}{dataArray.title}
                </Text>

              
                {expanded
                    ? <Icon style={{ fontSize: 20 }} name='chevron-up' type="FontAwesome"  />
                    : <Icon style={{ fontSize: 20 }} name='chevron-down' type="FontAwesome"  />}
            </View>
        );
    }
    _renderAppointmentContent(dataArray) {
        return (
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#FFFFFF', minHeight: 120 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ color: '#00b386' }}>4.2</Text>
                            <StarRating
                                disabled={false}
                                maxStars={1}
                                rating={1}
                                style={{ width: 50 }}
                                fullStarColor={'#00b386'}
                                starSize={18}
                            />
                        </View>
                        {/* <Text style={{ fontSize: 12, color: '#00b386', textDecorationLine: 'underline' }}>350 Reviews</Text> */}
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, paddingRight: 2 }}>
                        <View style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                            <Text style={{ flex: 1 }}>Samira Reddy</Text>
                            <Icon name='heart' type="FontAwesome" style={{ fontSize: 18, color: 'red', marginRight: 15, }} />
                        </View>
                        <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialist</Text>
                        <View style={{ flexDirection: 'row', marginTop: 1 }}>
                            <Picker

                                iosHeader="Select Your Sim"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                mode="dialog"
                                style={{ width: 200, position: 'absolute', flex: 1, top: -13, left: -8 }}
                                textStyle={{ fontWeight: 'bold' }}
                            >
                                <Picker.Item label="Text Chat" value="key1" />
                                <Picker.Item label="Video Conference" value="key0" />

                                <Picker.Item label="Appointment" value="key1" />
                            </Picker>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Picker

                                iosHeader="Select Your Sim"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                mode="dialog"
                                style={{ width: 90, flex: 1, position: 'absolute', top: 14, left: -8 }}
                                textStyle={{ fontWeight: 'bold' }}
                            >
                                <Picker.Item label="15" value="key1" />
                                <Picker.Item label="16" value="key0" />
                                <Picker.Item label="17" value="key02" />
                            </Picker>
                            <Picker

                                iosHeader="Select Your Sim"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                mode="dialog"
                                style={{ width: 100, flex: 1, position: 'absolute', top: 14, left: 90 }}
                                textStyle={{ fontWeight: 'bold' }}
                            >
                                <Picker.Item label="Aug" value="key1" />
                                <Picker.Item label="Sep" value="key0" />
                                <Picker.Item label="Oct" value="key01" />
                            </Picker>
                            <Text style={{ width: 50, flex: 1, position: 'absolute', top: 28, right: -9 }}>2018</Text>


                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Picker

                                iosHeader="Select Your Sim"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                mode="dialog"
                                style={{ width: 200, flex: 1, position: 'absolute', top: 40, left: -8 }}
                                textStyle={{ fontWeight: 'bold' }}
                            >
                                <Picker.Item label="Online Consultation" value="key1" />
                                <Picker.Item label="BTM 2nd Stage" value="key0" />
                            </Picker>

                        </View>
                    </View>
                </View>
            </View>
        );
    }

    _renderPersonnelHeader(dataArray, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#F0F0F0" }}
            >
                <Text style={{ flex: 1 }}>
                    {" "}{dataArray.title}
                </Text>


                {expanded
                    ? <Icon style={{ fontSize: 20 }} name='chevron-up' type="FontAwesome" />
                    : <Icon style={{ fontSize: 20 }} name='chevron-down' type="FontAwesome" />}
            </View>
        );
    }

    _renderPersonnelContent(dataArray) {
        return (
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#FFFFFF' }}>
            
                <Item fixedLabel>
                    <Label style={{ color: 'black' }}>Name</Label>
                    <Input value="Shakti Singh Chouhan" />
                   
                </Item>
                <Item fixedLabel last >
                    <Label style={{ color: 'black' }}>Email</Label>
                    <Input value="svpsctg11@yahoo.com" />
                </Item>
                <View style={{ flex: 1, flexDirection: 'column' }}>
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
                <Text style={{flex:1}}></Text>
                <Text style={{ color: '#007bff', textDecorationLine: 'underline' }}>Not you?</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <Container>
                <Content  style={{ backgroundColor: "white" }}>
                    <Accordion
                        dataArray={AppointmentDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderAppointmentHeader}
                        renderContent={this._renderAppointmentContent}
                    />
                    <Accordion
                        dataArray={PerosnelDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderPersonnelHeader}
                        renderContent={this._renderPersonnelContent}
                        style={{ marginTop: 5 }}
                    />
                    <View style={{ flex: 1, flexDirection: 'column',marginTop:5,borderTopWidth:1,borderTopColor:'#ddd' }}>
                        <View style={{ flexDirection: 'column',flex:1 ,marginTop:5}}>
                            <Text style={{ flex: 1 }}>Total: ₹150</Text>
                            <Text style={{ color: '#28a745', textDecorationLine: 'underline' }}>Apply coupon</Text>
                        </View>
                        
                    </View>

                        
                </Content>
                {(Platform.OS === 'ios') ?
                    <Footer>
                        <FooterTab>
                            <Button full  onPress={()=>this.props.navigation.navigate("AppointmentList")}>
                                <Text style={{ color: 'black', fontSize: 16, }}>Book</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    :
                    <Footer>
                        <FooterTab>
                            <Button block  onPress={()=>this.props.navigation.navigate("AppointmentList")}>
                                <Text style={{ color: 'white', fontSize: 16, }}>Book</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                }
            </Container>
        )
    }
}


