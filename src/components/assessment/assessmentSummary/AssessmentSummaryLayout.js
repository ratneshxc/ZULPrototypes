import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import AssessmentSummaryComponent from './AssessmentSummaryComponent';
import { connect } from 'react-redux';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const mapStateToProps = state => ({
    assessmentReport: state.Assessment.assessmentReport
})

const mapDispatchToProps = dispatch => ({

})

const chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}


class AssessmentSummaryLayout extends Component {
    goAssessmentInfo = () => {
        this.props.navigation.navigate('AssessmentInfo');
    }
    render() {
        let arrayGroup = chunkArray(this.props.assessmentReport, 3)
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Assessments</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ alignSelf: 'center' }}>Assessment overall Score</Text>
                    <AnimatedCircularProgress style={{ alignSelf: 'center' }}
                        top={2}
                        size={120}
                        width={5}
                        fill={80}
                        tintColor="#5067FF"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#ddd">
                        {
                            (fill) => (
                                <View>
                                    <Text style={styles.points}>
                                        8
                                </Text>
                                    <Text style={styles.caption}>
                                        Excellent
                                </Text>
                                </View>
                            )
                        }
                    </AnimatedCircularProgress>
                </View>

                <Content style={styles.container}>
                    <Text style={{ alignSelf: 'flex-start' }}>Assessment Inventory</Text>
                    {
                        arrayGroup.map((x, i) => (
                            <View key={i} style={{ flexDirection: 'row' }}>
                                {x.map((n, j) => (
                                    <View style={styles.blocks} key={j}>
                                        <AssessmentSummaryComponent goAssessmentInfo={this.goAssessmentInfo} assessObj={n} />
                                    </View>
                                ))}

                            </View>
                        ))
                    }
                </Content>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 5,
        marginTop: 3
    },
    blocks: {
        flex: 1,
        height: Dimensions.get('window').width / 3,
        padding: 3
    },
    points: {
        fontSize: 20,
        color: '#353535',
        textAlign: 'center'
    },
    caption: {
        fontSize: 15,
        textAlign: 'center',
        color: 'green'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentSummaryLayout);

