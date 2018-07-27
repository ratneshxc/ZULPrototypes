import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import AppRoute from './src/config/Route'
import { Root } from 'native-base';
import { connect } from 'react-redux';
import Zula from './src/components/Zula/Zula';
import Reward from './src/components/reward/Reward';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const mapStateToProps = state => ({
    isCongratulationVisible: state.Reward.isCongratulationVisible
})

class ZingUpLifeApp extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Root>
                    <AppRoute />
                </Root>
                <Zula />
                <Reward />
                {this.props.isCongratulationVisible && <Image style={{ position: 'absolute', top: 0, left: 0, width: deviceWidth, height: deviceHeight }} source={require('./src/assests/images/congratulation-anim.gif')} />}
            </View>
        );
    }
}

export default connect(mapStateToProps)(ZingUpLifeApp);


