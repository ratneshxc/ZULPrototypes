import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import AppRoute from '../../../config/Route';
import { Root } from 'native-base';
import { connect } from 'react-redux';
import Zula from '../../Zula/Zula';
import Reward from '../../reward/Reward';
import Comment from '../../comment/Comment';
import Orientation from 'react-native-orientation';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const mapStateToProps = state => ({
    isCongratulationVisible: state.Reward.isCongratulationVisible,
    isZulaAccessible: state.Zula.isZulaAccessible
})

class ZingUpLifeApp extends Component {

    componentDidMount() {
        Orientation.lockToPortrait();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Root>
                    <AppRoute />
                </Root>
                <Reward />
                <Comment />
                {this.props.isCongratulationVisible && <Image style={{ position: 'absolute', top: 0, left: 0, width: deviceWidth, height: deviceHeight }} source={require('../../../assests/images/congratulation-anim.gif')} />}
                {this.props.isZulaAccessible && <Zula />}
            </View>
        );
    }
}

export default connect(mapStateToProps)(ZingUpLifeApp);


