import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge,Left,Body,Title,Right } from 'native-base';
import SpecialityList from './SpecialityList';


const Speciality = (props) => {
    return (
        <Container>
               <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Find Experts</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
            <Header searchBar rounded>
                <Item  style={{ borderRadius: 30, padding: 5, height: 30, flexDirection: 'row', backgroundColor: 'white' }}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search Experts, Specialities etc.." placeholderTextColor="#ddd" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
                <View style={{ backgroundColor: '#ddd' }}>
                    <SpecialityList goToExperts={()=>props.navigation.navigate("ExpertList")}/>
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

