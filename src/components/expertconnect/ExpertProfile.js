import React, { Component } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Thumbnail,Item, Input, Icon, Button, Text, Content, Badge, Left, Body, Title, Right ,Accordion} from 'native-base';
import StarRating from 'react-native-star-rating';
const ExpertDetails = [
    { title: "About Dr. Samira", content: "Dr. P. Sameera Reddy is a leading Paediatric Neonatologist with 23 years of clinical experience. " },
];
const VerficationDetails = [
    { title: "Verification", content: "MEDICAL LICENSE" },
];

const ConsultationDetails = [
    { title: "Consultation Available", content: "MEDICAL LICENSE" },
];
const ReviewDetails = [
    { title: "Reviews", content: "MEDICAL LICENSE" },
];
const AddressDetails = [
    { title: "Address Details", content: "MEDICAL LICENSE" },
];
export default class ExpertProfile extends Component {
    _renderHeader(dataArray, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", backgroundColor: "#ffffff" }}
            >
                <Text style={{ flex: 1,  }}>
                    {" "}{dataArray.title}
                </Text>


                {expanded
                    ? <Icon style={{ fontSize: 20 }} name='chevron-up' type="FontAwesome"  />
                    : <Icon style={{ fontSize: 20 }} name='chevron-down' type="FontAwesome" />}
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
                        <Title>Expert Profile</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content  style={{ backgroundColor: "#F0F0F0" }}>
                {/*Expert Card*/}
                <View style={{ flexDirection: 'column', padding: 0, marginVertical: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', padding: 1 }}>
                    <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{color:'#00b386'}}>4.2</Text>
                        <StarRating
                            disabled={false}
                            maxStars={1}
                            rating={1}
                            style={{ width: 50 }}
                            fullStarColor={'#00b386'}
                            starSize={18}
                        />
                    </View>
                    <Text style={{ fontSize: 12, color: '#00b386', textDecorationLine: 'underline' }}>350 Reviews</Text>
                    {/* <Text style={{ fontSize: 12, color: '#00b386', marginVertical: 5 }}>Available Today</Text> */}
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10,paddingRight:2 }}>
                    <View style={{ flexDirection:'row',padding:0 ,margin:0 }}>
                        <Text style={{ flex: 1 }}>Samira Reddy</Text>
                            <Icon name='heart' type="FontAwesome" style={{ fontSize:18, color:'red',marginRight:1 ,}} />
                         
                    </View>
                    <Text style={{ fontSize: 13, color: '#505050', margin:0}}>Dermatologiest, MBBS</Text>
                    <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialists</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12 }}>5 Yrs Exp</Text>
                    </View>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Services available:</Text>
                    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Skin therapy</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Laser treatment</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Hair Transplantation</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Fungal therapy</Text>
                        </Badge>
                    </ScrollView>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#ffffff', borderWidth: 1, margin: 10 ,borderColor:'#ddd'}} onPress={()=>this.props.navigation.navigate('Booking')}>
                        <Text style={{ textAlign: 'center' }}>Free <Icon name='wechat' type="FontAwesome" style={{ fontSize:18,marginLeft:5}} /></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 10,borderColor:'#ddd' }}  onPress={()=>this.props.navigation.navigate('Booking')}>
                        <Text style={{ textAlign: 'center' }}>₹100 <Icon name='play-circle' type="FontAwesome" style={{ fontSize:18,marginLeft:5}} /></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#ffffff', borderWidth: 1, margin: 10 ,borderColor:'#ddd'}} onPress={()=>this.props.navigation.navigate('Booking')}>
                        <Text style={{ textAlign: 'center'}}>₹300 <Icon name='calendar-plus-o' type="FontAwesome" style={{ fontSize:18,marginLeft:5}} /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        {/*About Accordian*/}
        <Accordion
                        dataArray={ExpertDetails}
                        animation={true}
                        renderHeader={this._renderHeader}
                        style={{marginTop:5}}
                        expanded={0}
                    />
                     <Accordion
                        dataArray={VerficationDetails}
                        animation={true}
                        expanded={0}
                        renderHeader={this._renderHeader}
                        style={{marginTop:1}}
                    />
                    <Accordion
                        dataArray={ConsultationDetails}
                        animation={true}
                        renderHeader={this._renderHeader}
                        style={{marginTop:1}}
                        
                    />
                    <Accordion
                        dataArray={ReviewDetails}
                        animation={true}
                        renderHeader={this._renderHeader}
                        style={{marginTop:1}}
                        
                    />
                    <Accordion
                        dataArray={AddressDetails}
                        animation={true}
                       
                        renderHeader={this._renderHeader}
                        style={{marginTop:1}}
                    />
                </Content>
            </Container>
        )
    }
}