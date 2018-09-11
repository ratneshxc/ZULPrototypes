import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge, Left, Body, Title, Right } from 'native-base';
import SpecialityList from './SpecialityList';
import NotificationCount from '../common/header/NotificationCount';


const Speciality = (props) => {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => { props.navigation.openDrawer() }}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Find experts</Title>
                </Body>
                <Right>
                    <NotificationCount getAllNotifications={() => props.navigation.navigate("NotificationExpert")} />
                </Right>
            </Header>
            <Header searchBar rounded>
                <Item style={{ borderRadius: 30, padding: 5, height: 30, flexDirection: 'row', backgroundColor: 'white' }}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search Experts, skills etc.." placeholderTextColor="#ddd" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
                <View style={{ backgroundColor: '#ddd' }}>
                    <SpecialityList goToExperts={() => props.navigation.navigate("ExpertList")} goToBooking={() => props.navigation.navigate("Booking")} />
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
export default Speciality;

