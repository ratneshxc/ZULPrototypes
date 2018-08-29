import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ZulaPopUp from './ZulaPopUp';
import ZulaWelcomeMessage from './ZulaWelcomeMessage';
import VitalWarning from './VitalWarning';

const mapStateToProps = state => ({
    isZulaWishContainerVisible: state.Zula.isZulaWishContainerVisible,
    isZulaVitalContainerVisible: state.Zula.isZulaVitalContainerVisible
})

const ZulaPopUpCollection = (props) => {
    return (
        <View style={styles.container}>
            {props.isZulaWishContainerVisible && <ZulaPopUp content={<ZulaWelcomeMessage />} />}
            {props.isZulaVitalContainerVisible && <ZulaPopUp content={<VitalWarning />} />}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default connect(mapStateToProps)(ZulaPopUpCollection);