import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge,Left,Body,Title,Right } from 'native-base';
import ApppointmentList from './Appointment';


const Appointment = (props) => {
    return (
        <Container>
               <Header>
                    <Left>
                        <Button transparent  onPress={() => { props.navigation.openDrawer() }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Appointments</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
            <Header searchBar rounded>
                <Item style={{ borderRadius: 30, padding: 5, height: 30, flexDirection: 'row', backgroundColor: 'white' }}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search appointments" placeholderTextColor="#ddd" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
                <View style={{ backgroundColor: '#ddd' }}>
                    <ApppointmentList goToBooking={()=>props.navigation.navigate("Booking")} goToReport={()=>props.navigation.navigate("AssessmentReport")}  goToSearch={()=>props.navigation.navigate("SpecialitiyConnect")}/>
                </View>
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1
    },
    header: {
        // fontWeight: 'bold',
        color: '#ffffff',
        //fontSize: 17
    },
})
export default Appointment;

