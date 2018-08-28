import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge,Left,Body,Title,Right } from 'native-base';
import ApppointmentList from './Appointment';


const Appointment = (props) => {
    return (
        <Container>
               <Header>
                    <Left>
                        <Button transparent>
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
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search Appointments" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
                <View style={{ backgroundColor: '#ddd' }}>
                    <ApppointmentList goToExperts={()=>props.navigation.navigate("ExpertList")}/>
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

