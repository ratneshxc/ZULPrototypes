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
    Item,
    Form,
    Input,
    Label,
    CheckBox
} from "native-base";
import StarRating from 'react-native-star-rating';
const AppointmentDetails = [
    { title: "Booking Details", content: "Lorem ipsum dolor sit amet" },
];
const PerosnelDetails = [
    { title: "Next Actions", content: "Lorem ipsum dolor sit amet" },
]
export default class BookingConfirmation extends Component {

    _renderAppointmentHeader(dataArray, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#374252" }}
            >
                <Text style={{ flex: 1, color: 'white' }}>
                    {" "}{dataArray.title}
                </Text>

               
                {expanded
                    ? <Icon style={{ fontSize: 10 }} name='chevron-up' type="FontAwesome" style={{ color: 'white' }} />
                    : <Icon style={{ fontSize: 10 }} name='chevron-down' type="FontAwesome" style={{ color: 'white' }} />}
            </View>
        );
    }
    _renderAppointmentContent(dataArray) {
        return (
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
            
                <Item fixedLabel>
                    <Label style={{ color: 'black' }}>Expert</Label>
                    <Input value="Samira Reddy" disabled/>
                   
                </Item>
              <Item fixedLabel  >
                    <Label style={{ color: 'black' }}>Via</Label>
                    <Input value="Video call" disabled />
                </Item>
                <Item fixedLabel>
                    <Label style={{ color: 'black' }}>Date</Label>
                    <Input value="12th August 2018 10:00AM" disabled/>
                   
                </Item>
                <Item fixedLabel last>
                    <Label style={{ color: 'black' }}>Location</Label>
                    <Input value="ONLINE" disabled/>
                   
                </Item>
     
            </View>
        );
    }

    _renderPersonnelHeader(dataArray, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#374252" }}
            >
                <Text style={{ flex: 1, color: 'white' }}>
                    {" "}{dataArray.title}
                </Text>


                {expanded
                    ? <Icon style={{ fontSize: 10 }} name='chevron-up' type="FontAwesome" style={{ color: 'white' }} />
                    : <Icon style={{ fontSize: 10 }} name='chevron-down' type="FontAwesome" style={{ color: 'white' }} />}
            </View>
        );
    }

    _renderPersonnelContent(dataArray) {
        return (
            <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
            
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
                                color="green"
                                checked={true}
                            />
                            <Text style={{ marginLeft: 10 }}> Yes </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <CheckBox
                                color="red"
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
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Confirmation</Title>
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
                    <Accordion
                        dataArray={PerosnelDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderPersonnelHeader}
                        renderContent={this._renderPersonnelContent}
                        style={{ marginTop: 5 }}
                    />
                </Content>
            </Container>
        )
    }
}


