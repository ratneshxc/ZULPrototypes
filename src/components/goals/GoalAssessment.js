import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';

const styles = {
    container: {
        flex: 1
    },
    paneText: {
        color: '#000'
    }
};

export default class GoalAssessment extends Component {
    constructor(props) {
        super(props);
        this.state = { showAlert: false };
    }
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    componentDidMount() {
        this.setupSlidingPanes();
    }

    setupSlidingPanes() {
        this.pane1.warpCenter();
        this.pane2.warpRight();
        this.pane3.warpRight();
        this.pane4.warpRight();
        this.slidingPaneWrapper.childPanes = [this.pane1, this.pane2, this.pane3, this.pane4];
    }
    endAssessment = () => {
        this.setState({
            showAlert: true
        });
        setTimeout(() => {
            this.setState({
                showAlert: false
            });
            this.props.navigation.navigate("YourGoal");
        }, 5000)
    }

    render() {
        let goToNextQuestion = (index) => {
            this.slidingPaneWrapper.setActive(++index)
        }
        const { showAlert } = this.state;
        return (
            <View style={styles.container}>
                <SlidingPaneWrapper style={{}} ref={(slidingPaneWrapper) => { this.slidingPaneWrapper = slidingPaneWrapper }}>
                    <SlidingPane style={{ borderColor: '#ddd', borderWidth: 1 }}
                        ref={(pane1) => { this.pane1 = pane1 }}>
                        <QuestionPage
                            colors={['#1A2980', '#26D0CE']}
                            questionStatement="Do you have a gym nearby you?"
                            options={[
                                { text: 'Yes', value: 'Yes' },
                                { text: 'No', value: 'No' }
                            ]}
                            index={0}
                            goToNextQuestion={goToNextQuestion}
                        />
                    </SlidingPane>
                    <SlidingPane style={{ borderColor: '#ddd', borderWidth: 1 }}
                        ref={(pane2) => { this.pane2 = pane2 }}>
                        <QuestionPage
                            colors={['#1A2980', '#26D0CE']}
                            questionStatement="Do you have a swimming pool near you?"
                            options={[
                                { text: 'Yes', value: 'Yes' },
                                { text: 'No', value: 'No' },
                                { text: 'Yes but opened only on weekends', value: 'weekends' },
                            ]}
                            index={1}
                            goToNextQuestion={goToNextQuestion}
                        />
                    </SlidingPane>
                    <SlidingPane style={{ borderColor: '#ddd', borderWidth: 1 }}
                        ref={(pane3) => { this.pane3 = pane3 }}>
                        <QuestionPage
                            colors={['#1A2980', '#26D0CE']}
                            questionStatement="Would you like to go for a walk daily?"
                            options={[
                                { text: 'Yes', value: 'Yes' },
                                { text: 'No', value: 'No' },
                                { text: 'Twice or thrice a week', value: 'weekends' },
                            ]}
                            index={2}
                            goToNextQuestion={goToNextQuestion}
                        />
                    </SlidingPane>
                    <SlidingPane style={{ borderColor: '#ddd', borderWidth: 1 }}
                        ref={(pane4) => { this.pane4 = pane4 }}>
                        <QuestionPage colors={['#1A2980', '#26D0CE']}
                            questionStatement="Are you willing to avoid junk food?"
                            options={[
                                { text: 'Yes', value: 'Yes' },
                                { text: 'No', value: 'No' }
                            ]}
                            index={3}
                            goToNextQuestion={this.endAssessment}
                        />
                        <AwesomeAlert
                            show={showAlert}
                            showProgress={true}
                            title="We are preparing goal for you!"
                            message="Just a moment"
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showCancelButton={false}
                            showConfirmButton={false}
                            cancelText=""
                            confirmText=""
                            confirmButtonColor="#DD6B55"
                            onCancelPressed={() => {
                                this.hideAlert();
                            }}
                            onConfirmPressed={() => {
                                this.hideAlert();
                            }}
                        />
                    </SlidingPane>
                </SlidingPaneWrapper>
            </View>
        );
    }
}

const QuestionPage = ({ colors, questionStatement, options, goToNextQuestion, index }) => {
    return (
        <LinearGradient colors={colors} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#00000066', padding: 10, margin: 10 }}>
                <Text style={{ color: '#fff', fontSize: 25 }}>{questionStatement}</Text>
                <View style={{ marginTop: 25 }}>
                    {options.map((x, i) => (
                        <TouchableOpacity onPress={() => goToNextQuestion(index)} key={i} style={{ borderWidth: 1, borderColor: '#fff', padding: 5, marginVertical: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{x.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </LinearGradient>
    )
}