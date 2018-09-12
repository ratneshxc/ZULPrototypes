import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, Image } from 'react-native';
import { Card, Text } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
//import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

});


const Page = ({ vitals }) => {
    return (
        <View style={styles.container}>
            {vitals.map((n, i) => (
                <View key={i} style={{ flexDirection: 'row', marginVertical: 5, paddingVertical: 10, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: '#495057', paddingHorizontal: 10 }}>{n.title.toUpperCase()}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 15 }}>
                            <Image source={n.icon} style={{ width: 50, height: 50 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ paddingHorizontal: 10 }}>
                            {n.risk.toUpperCase() === "HIGH" ?
                                <Text style={{ fontSize: 35, color: '#dc3545' }}>{n.value}<Text style={{ fontSize: 15, color: '#dc3545' }}>{n.unit}</Text></Text> :
                                <Text style={{ fontSize: 35, color: '#3a3a3a' }}>{n.value}<Text style={{ fontSize: 15, color: '#3a3a3a' }}>{n.unit}</Text></Text>}
                            {n.idealValue !== null && <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, color: '#3a3a3a' }}>{'Ideal '.toUpperCase()}</Text>
                                <Text style={{ color: '#3a3a3a', fontSize: 12 }}>{`${n.idealValue}${n.unit}`}</Text>
                            </View>}
                            {n.risk.toUpperCase() === "HIGH" && <TouchableOpacity style={{ paddingVertical: 5 }}><Text style={{ fontSize: 13,textDecorationLine:'underline' }}>Need expert help?</Text></TouchableOpacity>}
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
};


const Tab = ({ tab, page, isTabActive, onPressHandler, onTabLayout, styles }) => {
    const { label, icon } = tab;
    const style = {
        marginHorizontal: 20,
        paddingVertical: 10,
    };
    const containerStyle = {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor,
        opacity: styles.opacity,
        transform: [{ scale: styles.opacity }],
    };
    const textStyle = {
        color: styles.textColor,
        fontWeight: '600',
    };

    return (
        <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
            <Animated.View style={containerStyle}>
                <Animated.Text style={textStyle}>{label}</Animated.Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

export default class Vitals extends Component {
    _scrollX = new Animated.Value(0);
    // 6 is a quantity of tabs
    interpolators = Array.from({ length: 8 }, (_, i) => i).map(idx => ({
        scale: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [1, 1.2, 1],
            extrapolate: 'clamp',
        }),
        opacity: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
        }),
        textColor: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: ['#3f51b5', '#fff', '#3f51b5'],
        }),
        backgroundColor: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: ['#fff', '#3f51b5', '#fff'],
            extrapolate: 'clamp',
        }),
    }));
    render() {
        return (
            <View style={[styles.container]}>
                <ScrollableTabView
                    renderTabBar={() => (
                        <TabBar
                            underlineColor="#3f51b5"
                            tabBarStyle={{ backgroundColor: "#fff", borderTopColor: '#d2d2d2', borderTopWidth: 1 }}
                            renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
                                <Tab
                                    key={page}
                                    tab={tab}
                                    page={page}
                                    isTabActive={isTabActive}
                                    onPressHandler={onPressHandler}
                                    onTabLayout={onTabLayout}
                                    styles={this.interpolators[page]}
                                />
                            )}
                        />
                    )}
                    onScroll={(x) => this._scrollX.setValue(x)}>

                    <Page tabLabel={{ label: "Physical" }}
                        vitals={[
                            { title: 'BMI', value: 18.6, unit: '', icon: require('../../../assests/icons/vitals/BMI.png'), color: ['#1A2980', '#26D0CE'], idealValue: 18.5, risk: 'low' },
                            { title: 'Heart Rate', value: 72, unit: 'bpm', icon: require('../../../assests/icons/vitals/heart.png'), color: ['#43cea2', '#185a9d'], idealValue: 75, risk: 'low' },
                            { title: 'Sleep', value: 2, unit: 'hrs', icon: require('../../../assests/icons/vitals/sleep.png'), color: ['#348F50', '#56B4D3'], idealValue: 8, risk: 'high' },
                            { title: 'Work out', value: '2', unit: 'hrs', icon: require('../../../assests/icons/vitals/activity.png'), color: ['#20BDFF', '#A5FECB'], idealValue: 1, risk: 'low' },
                            { title: 'Walk', value: '4.7', unit: 'km', icon: require('../../../assests/icons/vitals/walk.png'), color: ['#4CB8C4', '#3CD3AD'], idealValue: 8, risk: 'low' }
                        ]} />
                    <Page tabLabel={{ label: "Emotional" }} vitals={[
                        { title: 'Mood', value: 'Happy', unit: null, icon: require('../../../assests/icons/vitals/mood.png'), color: ['#1A2980', '#26D0CE'], idealValue: null, risk: 'low' },
                        { title: 'Stress', value: 2, unit: 'hrs', icon: require('../../../assests/icons/vitals/stress.png'), color: ['#02AAB0', '#00CDAC'], idealValue: 1, risk: 'low' }
                    ]} />
                    <Page tabLabel={{ label: "Environmental" }} vitals={[
                        { title: 'Temperature', value: 28, unit: '°C', icon: require('../../../assests/icons/vitals/Temperature.png'), color: ['#1A2980', '#26D0CE'], idealValue: null, risk: 'low' },
                        { title: 'UV Index', value: 7, unit: null, icon: require('../../../assests/icons/vitals/UV.png'), color: ['#43cea2', '#185a9d'], idealValue: null, risk: 'low' },
                        { title: 'Humidity', value: 50, unit: '%', icon: require('../../../assests/icons/vitals/humidity.png'), color: ['#4CB8C4', '#3CD3AD'], idealValue: null, risk: 'low' }
                    ]} />
                    <Page tabLabel={{ label: "Financial" }} vitals={[
                        { title: 'Net Worth', value: '12.8K', unit: 'Rs', icon: require('../../../assests/icons/vitals/income.png'), color: ['#1A2980', '#26D0CE'], idealValue: null, risk: 'low' },
                        { title: 'Liquid Cash', value: '22K', unit: 'Rs', icon: require('../../../assests/icons/vitals/liquid-cash.png'), color: ['#348F50', '#56B4D3'], idealValue: null, risk: 'low' },
                        { title: 'Total Debit', value: '45K', unit: 'Rs', icon: require('../../../assests/icons/vitals/debit.png'), color: ['#02AAB0', '#00CDAC'], idealValue: null, risk: 'low' }
                    ]} />
                    <Page tabLabel={{ label: "Social" }} vitals={[
                        { title: "Manoj's b'day", value: '2', unit: 'days to go', icon: require('../../../assests/icons/vitals/cake.png'), color: ['#1A2980', '#26D0CE'], idealValue: null, risk: 'low' }
                    ]} />
                    <Page tabLabel={{ label: "Spiritual" }} vitals={[]} />
                    <Page tabLabel={{ label: "Intellectual" }} vitals={[]} />
                    <Page tabLabel={{ label: "Occupational" }} vitals={[]} />
                </ScrollableTabView>
            </View>
        );
    }
}