import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge } from 'native-base';
import ExpertList from './ExpertList';


const ExportConnect = (props) => {
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search Experts" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
                <ScrollView horizontal={true} style={{ padding: 5, flexDirection: 'row' }}>
                    <Badge style={{ marginHorizontal: 5 }} primary>
                        <Text>Available</Text>
                    </Badge>
                    <Badge style={{ marginHorizontal: 5 }} primary>
                        <Text>Bengaluru</Text>
                    </Badge>
                    <Badge style={{ marginHorizontal: 5 }} primary>
                        <Text>Online booking</Text>
                    </Badge>
                    <Badge style={{ marginHorizontal: 3, flexDirection: 'row', borderRadius: 5 }} primary>
                        <Icon name="filter" type="FontAwesome" style={{ color: "#FFFFFF", fontSize: 15, marginTop: 4, marginLeft: 2 }} />
                        <Text>ALL FILTERS</Text>
                    </Badge>
                </ScrollView>
                <View style={{ backgroundColor: '#ddd' }}>
                    <ExpertList />
                </View>
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default ExportConnect;

