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
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search Experts, Specialities etc.." />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
                <View style={{ backgroundColor: '#ddd' }}>
                    <SpecialityList />
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

