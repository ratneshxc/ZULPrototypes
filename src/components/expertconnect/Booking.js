import React, { Component } from "react";
import { TouchableOpacity, ScrollView } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Accordion,
    Text,
    View,
    Thumbnail,
    Picker,
    Item
} from "native-base";
import StarRating from 'react-native-star-rating';
const AppointmentDetails = [
    { title: "Appointment Details", content: "Lorem ipsum dolor sit amet" },
];
const PerosnelDetails = [
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
]
export default class Booking extends Component {

    _renderAppointmentHeader(dataArray, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#374252" }}
            >
                <Text style={{ flex: 1, color: 'white' }}>
                    {" "}{dataArray.title}
                </Text>

                <Icon style={{ fontSize: 10 }} name='wechat' type="FontAwesome" style={{ marginHorizontal: 5, color: 'white' }} />
                <Text style={{ marginHorizontal: 5, color: 'white' }}>
                    ₹150
            </Text>
                {expanded
                    ? <Icon style={{ fontSize: 10 }} name='chevron-up' type="FontAwesome" style={{ color: 'white' }} />
                    : <Icon style={{ fontSize: 10 }} name='chevron-down' type="FontAwesome" style={{ color: 'white' }} />}
            </View>
        );
    }
    _renderAppointmentContent(dataArray) {
        return (
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' ,minHeight:120}}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{color:'#00b386'}}>4.2</Text>
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
                        <View style={{ flexDirection: 'row',marginTop:1 }}>
                            <Picker

                                iosHeader="Select Your Sim"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                mode="dialog"
                                style={{ width: 200, position: 'absolute',flex:1, top: -13, left: -8 }}
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
                                style={{ width: 90,flex:1, position: 'absolute', top: 14, left: -8 }}
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
                                style={{ width: 100,flex:1, position: 'absolute', top: 14, left: 90 }}
                                textStyle={{ fontWeight: 'bold' }}
                            >
                                <Picker.Item label="Aug" value="key1" />
                                <Picker.Item label="Sep" value="key0" />
                                <Picker.Item label="Oct" value="key01" />
                            </Picker>
                            <Text style={{ width: 50,flex:1, position: 'absolute', top: 28, right: -9 }}>2018</Text>


                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Picker

                                iosHeader="Select Your Sim"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                mode="dialog"
                                style={{ width: 200,flex:1, position: 'absolute', top: 40, left: -8 }}
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
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Booking</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content padder style={{ backgroundColor: "white" }}>
                    <Accordion
                        dataArray={AppointmentDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderAppointmentHeader}
                        renderContent={this._renderAppointmentContent}
                    />
                    {/* <Accordion
                        dataArray={PerosnelDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderAppointmentHeader}
                        renderContent={this._renderAppointmentContent}
                    /> */}
                </Content>
            </Container>
        )
    }
}


