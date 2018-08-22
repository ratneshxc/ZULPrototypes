import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import IndicatorCategory from './IndicatorCategory';

const mapStateToProps = state => ({
    indicators: state.Dashboard.indicators
})

const mapDispatchToProps = dispatch => ({

})

class ConfigurableStatusLayout extends React.Component {

    goToIndicatorsDetails = () => {
        this.props.navigation.navigate('IndicatorDetails');
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    {this.props.indicators.map((x) => (
                        <IndicatorCategory goToIndicatorsDetails={this.goToIndicatorsDetails} indicatorCategory={x} />
                    ))}
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(ConfigurableStatusLayout);