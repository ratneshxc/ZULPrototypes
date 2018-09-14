import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge, Left, Body, Title, Right, Toast } from 'native-base';
import IconBadge from 'react-native-icon-badge';
import ExpertList from './ExpertList';


class ExportConnect extends React.Component {
    componentDidMount() {
        // Toast.show({
        //     text: "Use online and enjoy the services of experts through phone",
        //     buttonText: "Apply",
        //     type:'success',
        //     duration:10000
        //   });
    }
    render() {
        return (
            <Container>
                {/* Expert Header*/}
                <View style={{ flexDirection: 'column' }}>
                <Header>
                    <Left>
                        <Button transparent  onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Expert search</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
            <Header searchBar rounded>
                <Item  style={{ borderRadius: 30, padding: 5, height: 30, flexDirection: 'row', backgroundColor: 'white' }}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search experts" placeholderTextColor="#ddd" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>

                    <View style={{ flexDirection: 'row',backgroundColor:'#F7F7F7' }}>
                        <ScrollView horizontal={true} style={{ flexDirection: 'row', flex: 1 ,paddingVertical:8}}>
                            <Badge style={{ marginHorizontal: 5, backgroundColor: '#007bff' }}>
                                <Text>Online</Text>
                            </Badge>
                            <Badge style={{ marginHorizontal: 5, backgroundColor: '#007bff' }}>
                                <Text>Yoga experts</Text>
                            </Badge>
                            <Badge style={{ marginHorizontal: 5, backgroundColor: '#e8e8e8' }} >
                                <Text style={{ color: "#000000" }}>Family Specialist</Text>
                            </Badge>
                            <Badge style={{ marginHorizontal: 5, backgroundColor: '#e8e8e8' }}  >
                                <Text style={{ color: "#000000" }}>BTM Second Stage</Text>
                            </Badge>
                        </ScrollView>
                        <IconBadge
                            MainElement={
                                <View style={{ width: 40 }}>
                                    <Icon name="filter" type="FontAwesome" style={{ fontSize: 30, marginTop: 0, marginLeft: 2 }} />
                                </View>

                            }
                            BadgeElement={
                                <Text style={{ color: '#FFFFFF' }}>{3}</Text>
                            }
                            IconBadgeStyle={
                                {
                                    width: 20,
                                    height: 20,
                                    backgroundColor: '#007bff'
                                }
                            }

                        />
                    </View>
             
                </View>

                <Content >
                    <View style={{ backgroundColor: '#ddd' }}>
                        <ExpertList bookExperts={() => this.props.navigation.navigate("Booking")} viewExperts={() => this.props.navigation.navigate("ExpertProfile")} />
                    </View>
                </Content>
            </Container >
        )
    }
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
    headerLeft: {
        flex: 2,
        justifyContent: 'flex-start'
    },
    headerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    iconStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 3
    }
})
export default ExportConnect;

