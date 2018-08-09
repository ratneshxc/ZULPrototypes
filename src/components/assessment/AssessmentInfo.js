
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Header, Footer, FooterTab, Left, Right, Body, Button, Container, Content } from 'native-base';
import { connect } from 'react-redux';
import assessmentDetailsData from '../../data/assessmentDetailsData';

const mapStateToProps = state => ({
    currentAssessmentDetails: state.Assessment.currentAssessmentDetails
})

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width + 10;
const screenheight = windowObj.height / 3;

class AssessmentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { updatedList: [] };
    }
    filterobject = (reqItem) => {
        for (let item of assessmentDetailsData) {
            if (item.Category.toUpperCase() === reqItem.toUpperCase()) {
                this.setState({
                    updatedList: item
                });
            }
        }
    }
    goAssessment = () => {
        this.props.navigation.navigate('Assessment');
    }

    componentWillMount() {
        this.filterobject(this.props.currentAssessmentDetails);
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Text style={{color:'white', fontSize:18, fontWeight: 'bold',alignSelf: 'center'}}>Assessment Details</Text>
                    </Body>
                </Header>
                <Content>
                    <ImageBackground source={this.state.updatedList.imageURL} style={styles.imageURL} resizeMode="cover">
                        <View style={styles.questionView}>
                            <Text style={styles.title}>{this.state.updatedList.Category}</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text style={styles.textStyle}>{this.state.updatedList.statement}</Text>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button  onPress={this.goAssessment} full>
                            <Text style={{color:'white', fontSize:18, fontWeight: 'bold'}}>Take Assessment</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
export default connect(mapStateToProps, null)(AssessmentInfo)

const styles = StyleSheet.create({
    questionView: {
        margin: 30,
        backgroundColor: '#00000066',
        flex: 1,
        padding: 3,
        flexDirection: 'column',
        height: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 5,
        color: 'white',
        alignSelf: 'center'
    },
    imageURL: {
        right: 5,
        width: screenwidth,
        height: screenheight
    },
    buttonStyle: {
        padding: 5,
        height: 30
    },
    textStyle: {
        fontSize: 21,
        padding: 16
    }
})

