import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import AppRoute from '../../../config/Route';
import { Root } from 'native-base';
import { connect } from 'react-redux';
import Zula from '../../Zula/Zula';
import Reward from '../../reward/Reward';
import Comment from '../../comment/Comment';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const mapStateToProps = state => ({
    isCongratulationVisible: state.Reward.isCongratulationVisible,
    isZulaAccessible: state.Zula.isZulaAccessible
})

class ZingUpLifeApp extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Root>
                    <AppRoute />
                </Root>
                {this.props.isZulaAccessible && <Zula />}
                <Reward />
                <Comment />
                {this.props.isCongratulationVisible && <Image style={{ position: 'absolute', top: 0, left: 0, width: deviceWidth, height: deviceHeight }} source={require('../../../assests/images/congratulation-anim.gif')} />}
            </View>
        );
    }
}

export default connect(mapStateToProps)(ZingUpLifeApp);


