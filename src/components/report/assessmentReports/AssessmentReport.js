import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import OverallScore from './OverallScore';
import Observations from './Observations';
import ActionPlan from './ActionPlan';
import ExpertSuggestions from './ExpertSuggestions';
import NavigationSection from './NavigationSection';

const mapStateToProps = state => ({
    report: state.Report.assessmentReport
})
class AssessmentReport extends React.Component {

    goToDashboard = () => {
        this.props.navigation.navigate('Home');
    }
    goToAssesment = () => {
        this.props.navigation.navigate('AssessmentLayout');
    }
    render() {
        let report = this.props.report;
        return (
            <Container style={styles.container}>
                <Content style={{ backgroundColor: '#F5FCFF' }}>
                    <OverallScore />
                    <Observations />
                    <ActionPlan />
                    <ExpertSuggestions />
                    <NavigationSection />
                    <View style={{ padding: 10 }}>
                        <Button block onPress={() => this.props.navigation.navigate('AssessmentLayout')}>
                            <Text>Home</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default connect(mapStateToProps, null)(AssessmentReport)