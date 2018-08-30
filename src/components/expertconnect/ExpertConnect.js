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
                <View style={{ flexDirection: 'column', backgroundColor: "#294787" }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 8 }}>

                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                            <Text style={styles.header}>{' '}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-left' type="FontAwesome" style={{ fontSize: 18, color: 'white' }} />
                            </TouchableOpacity>
                            <Text style={styles.header}>{'   '}</Text>
                            <Text style={styles.header}> Parent's Coach <Icon name='chevron-down' type="FontAwesome" style={{ color: "white", fontSize: 15 }} /></Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.header}>Online <Icon name='chevron-down' type="FontAwesome" style={{ color: "white", fontSize: 15 }} /></Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, }}>
                        <ScrollView horizontal={true} style={{ flexDirection: 'row', flex: 1 }}>
                            <Badge style={{ marginHorizontal: 5, backgroundColor: '#007bff' }}>
                                <Text>Online</Text>
                            </Badge>
                            <Badge style={{ marginHorizontal: 5, backgroundColor: '#007bff' }} >
                                <Text>Family Specialist</Text>
                            </Badge>
                            <Badge style={{ marginHorizontal: 5, backgroundColor: '#e8e8e8' }}  >
                                <Text style={{ color: "#000000" }}>BTM Second Stage</Text>
                            </Badge>
                        </ScrollView>
                        <IconBadge
                            MainElement={
                                <View style={{ width: 40 }}>
                                    <Icon name="filter" type="FontAwesome" style={{ fontSize: 30, marginTop: 0, marginLeft: 2, color: 'white' }} />
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
                    {/* <View style={{  flexDirection: 'row', padding: 5, }}>
                        <Text style={{ color: 'white',flex:1 }}>Seen <Text style={{ color: '#00b386' }}>15</Text> out of 150 results</Text>
                        <TouchableOpacity>
                            <Icon name='arrow-up' type="FontAwesome" style={{ fontSize: 18, marginHorizontal: 5, color: 'white' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='arrow-down' type="FontAwesome" style={{ fontSize: 18, marginLeft: 5, marginRight: 2, color: 'white' }} />
                        </TouchableOpacity>
                    </View> */}
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

