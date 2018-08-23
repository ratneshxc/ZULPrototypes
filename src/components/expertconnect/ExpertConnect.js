import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Badge, Left, Body, Title, Right,Toast } from 'native-base';
import IconBadge from 'react-native-icon-badge';
import ExpertList from './ExpertList';


class ExportConnect extends React.Component {
    componentDidMount(){
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
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-left' type="FontAwesome" style={{ fontSize: 15 }} />
                        </Button>
                    </Left>
                    <Body style={{ flexDirection: 'row' }}>
                        <Text style={styles.header}>Parent's Coach <Icon name='chevron-down' type="FontAwesome" style={{ color: "white", fontSize: 15 }} /></Text>

                    </Body>
                    <Right style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.header}>Location</Text>
                            <Text style={styles.header}>Online <Icon name='chevron-down' type="FontAwesome" style={{ color: "white", fontSize: 15 }} /></Text>
                        </View>
                    </Right>


                </Header >
                {/* Filters Tags*/}
                <View style={{ padding: 5, flexDirection: 'row' }} >
                    <ScrollView horizontal={true} style={{ padding: 5, flexDirection: 'row', flex: 1 }}>
                        <Badge style={{ marginHorizontal: 5, backgroundColor: '#007bff' }}>
                            <Text>Online</Text>
                        </Badge>
                        <Badge style={{ marginHorizontal: 5, backgroundColor: '#007bff' }} >
                            <Text>Family Specialist</Text>
                        </Badge>
                        <Badge style={{ marginHorizontal: 5, backgroundColor: '#e8e8e8' }}  >
                            <Text style={{color:"#000000"}}>BTM Second Stage</Text>
                        </Badge>
                    </ScrollView>
                    <IconBadge
                        MainElement={
                            <View style={{ width: 40 }}>
                                <Icon name="filter" type="FontAwesome" style={{ fontSize: 30, marginTop: 4, marginLeft: 2 }} />
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
                {/*  Results column */}
                <View style={{ padding: 5, flexDirection: 'row' }} >
                    <Text style={{ flex: 1 }}>Seen <Text style={{ color: '#00b386' }}>15</Text> out of 150 results</Text>
                    <TouchableOpacity>
                        <Icon name='arrow-up' type="FontAwesome" style={{ fontSize: 20, marginHorizontal: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='arrow-down' type="FontAwesome" style={{ fontSize: 20, marginHorizontal: 5 }} />
                    </TouchableOpacity>
                </View>
                {/*  Results column */}
                <Content >
                    <View style={{ backgroundColor: '#ddd' }}>
                        <ExpertList />
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
        fontSize: 17
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

