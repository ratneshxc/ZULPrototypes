import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { Card, Text } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import Image from 'react-native-remote-svg';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

});


const Page = ({ vitals }) => {
    return (
        <View style={styles.container}>
            {vitals.map((n, i) => (
                <View key={i} style={{ flexDirection: 'row', marginVertical: 10, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>{n.title.toUpperCase()}</Text>
                    </View>
                    <LinearGradient colors={n.color} style={{ padding: 15, borderRadius: 50 }}>
                        <Image source={n.icon} style={{ width: 50, height: 50 }} />
                    </LinearGradient>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 35 }}>{n.value}<Text style={{ fontSize: 15 }}>{n.unit}</Text></Text>
                            {n.idealValue !== null && <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, color: '#676767' }}>{'Ideal '.toUpperCase()}</Text>
                                <Text style={{ color: '#676767', fontSize: 12 }}>{`${n.idealValue}${n.unit}`}</Text>
                            </View>}
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
                            { title: 'BMI', value: 24.6, unit: '', icon: require('../../../assests/icons/vitals/BMI.svg'), color: ['#1A2980', '#26D0CE'], idealValue: 25 },
                            { title: 'Heart Rate', value: 72, unit: 'bps', icon: require('../../../assests/icons/vitals/heart.svg'), color: ['#43cea2', '#185a9d'], idealValue: 68 },
                            { title: 'Sleep', value: 8, unit: 'hrs', icon: require('../../../assests/icons/vitals/sleep.svg'), color: ['#348F50', '#56B4D3'], idealValue: 8 },                            
                            { title: 'Activity', value: '2', unit: 'hrs', icon: require('../../../assests/icons/vitals/activity.svg'), color: ['#20BDFF', '#A5FECB'], idealValue: 10 },
                            { title: 'Walk', value: '4.7', unit: 'km', icon: require('../../../assests/icons/vitals/walk.svg'), color: ['#4CB8C4', '#3CD3AD'], idealValue: 5.5 }
                        ]} />
                    <Page tabLabel={{ label: "Emotional" }} vitals={[
                        { title: 'Mood', value: 'Happy', unit: null, icon: require('../../../assests/icons/vitals/mood.svg'), color: ['#1A2980', '#26D0CE'], idealValue: null },
                        { title: 'Stress', value: 2, unit: 'hrs', icon: require('../../../assests/icons/vitals/stress.svg'), color: ['#02AAB0', '#00CDAC'], idealValue: 1 }
                    ]} />
                    <Page tabLabel={{ label: "Environmental" }} vitals={[
                        { title: 'Temperature', value: 28, unit: '°C', icon: require('../../../assests/icons/vitals/Temperature.svg'), color: ['#1A2980', '#26D0CE'], idealValue: null },
                        { title: 'UV Index', value: 9, unit: null, icon: require('../../../assests/icons/vitals/UV.svg'), color: ['#43cea2', '#185a9d'], idealValue: null },
                        { title: 'Humidity', value: 48, unit: '%', icon: require('../../../assests/icons/vitals/humidity.svg'), color: ['#4CB8C4', '#3CD3AD'], idealValue: null }
                    ]} />
                    <Page tabLabel={{ label: "Financial" }} vitals={[
                        { title: 'Net Worth', value: '12.8K', unit: 'Rs', icon: require('../../../assests/icons/vitals/income.svg'), color: ['#1A2980', '#26D0CE'], idealValue: null },                        
                        { title: 'Liquid Cash', value: '22K', unit: 'Rs', icon: require('../../../assests/icons/vitals/liquid-cash.svg'), color: ['#348F50', '#56B4D3'], idealValue: null },
                        { title: 'Total Debit', value: '45K', unit: 'Rs', icon: require('../../../assests/icons/vitals/debit.svg'), color: ['#02AAB0', '#00CDAC'], idealValue: null }
                    ]} />
                    <Page tabLabel={{ label: "Social" }} vitals={[
                        { title: "Manoj's b'day", value: '2', unit: 'days to go', icon: require('../../../assests/icons/vitals/cake.svg'), color: ['#1A2980', '#26D0CE'], idealValue: null }
                    ]} />
                    <Page tabLabel={{ label: "Spiritual" }} vitals={[]} />
                    <Page tabLabel={{ label: "Intellectual" }} vitals={[]} />
                    <Page tabLabel={{ label: "Occupational" }} vitals={[]} />
                </ScrollableTabView>
            </View>
        );
    }
}