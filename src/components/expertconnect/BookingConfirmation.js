import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
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
    List,
    ListItem,
    Item,
    Input,
    Label,
    Card
} from "native-base";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});
const chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }
    return tempArray;
}

const Page = ({ vitals }) => {
    let arrayGroup = chunkArray(vitals, 2)
    return (
        <View style={styles.container}>
            <View>
                {arrayGroup.map((x, i) => (
                    <View key={i} style={{ flexDirection: 'row' }}>
                        {x.map((y, j) => (
                            <Card style={{ flex: 1, padding: 10 }} key={j}>
                                <Text style={{ fontSize: 20 }}>
                                    {y.title}
                                </Text>
                                <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 10 }}>
                                    <Icon style={{ fontSize: 40 }} name={y.value} type="FontAwesome" />
                                </Text>
                            </Card>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
};


export default class BookingConfirmation extends Component {
    fillAssesment = () => {
        this.props.navigation.navigate('AssessmentList');
    }
    fixAppointment = () => {
        this.props.navigation.navigate('AppointmentList');
    }
    componentWillMount() {
        AppointmentDetails = [
            { title: "Booking Details", content: "Lorem ipsum dolor sit amet" },
        ];
        PerosnelDetails = [
            { title: "Next Actions", content: "Lorem ipsum dolor sit amet", fillAssesment: this.fillAssesment,fixAppointment:this.fixAppointment },
        ];
    }
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
                    <Input value="Samira Reddy" disabled />

                </Item>
                <Item fixedLabel  >
                    <Label style={{ color: 'black' }}>Via</Label>
                    <Input value="Video call" disabled />
                </Item>
                <Item fixedLabel>
                    <Label style={{ color: 'black' }}>Date</Label>
                    <Input value="12th August 2018 10:00AM" disabled />

                </Item>
                <Item fixedLabel last>
                    <Label style={{ color: 'black' }}>Location</Label>
                    <Input value="ONLINE" disabled />

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
                    <View style={{ flexDirection: 'row' }}>
                    <Page tabLabel={{ label: "Physical" }} vitals={[{ title: 'Experience Meetup', value: 'usb', }]} />
                    <TouchableOpacity onPress={dataArray.fillAssesment} style={{flex: 1}}>
                    <Page tabLabel={{ label: "Physical" }} vitals={[{ title: 'Fill S & E assesment', value: 'book' }]} />
                    </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Page tabLabel={{ label: "Physical" }} vitals={[{ title: 'Upload Documents', value: 'plus', }]} />
                        <TouchableOpacity onPress={dataArray.fixAppointment} style={{flex: 1}}>
                        <Page tabLabel={{ label: "Physical" }} vitals={[ { title: 'Go To Appointments', value: 'calendar-plus-o', }]} />
                        </TouchableOpacity>

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


