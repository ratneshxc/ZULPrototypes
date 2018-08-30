import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { Card, Text } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

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

const Page = ({ vitals }) => {
    let arrayGroup = chunkArray(vitals, 2)
    return (
        <View style={styles.container}>
            <View>
                {arrayGroup.map((x, i) => (
                    <View key={i} style={{ flexDirection: 'row' }}>
                        {x.map((y, j) => (
                            <Card style={{ flex: 1, padding: 10 }} key={j}>
                                <Text style={{ fontSize: 20 }}>
                                    {y.title}
                                </Text>
                                <Text style={{ fontSize: 40 ,textAlign:'center',marginTop:10}}>
                                    {y.value}
                                </Text>
                                <Text style={{ fontSize: 15,textAlign:'center' }}>
                                    {y.unit}
                                </Text>
                            </Card>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
};
// const iconsSet = {
//     hot: require('../../../assests/images/suresh.png'),
//     trending: require('../../../assests/images/suresh.png'),
//     fresh: require('../../../assests/images/suresh.png'),
//     funny: require('../../../assests/images/suresh.png'),
//     movieAndTv: require('../../../assests/images/suresh.png'),
//     sport: require('../../../assests/images/suresh.png'),
// };

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
    // const iconStyle = {
    //     tintColor: styles.textColor,
    //     resizeMode: 'contain',
    //     width: 22,
    //     height: 22,
    //     marginLeft: 10,
    // };
    return (
        <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
            <Animated.View style={containerStyle}>
                <Animated.Text style={textStyle}>{label}</Animated.Text>
                {/* <Animated.Image style={iconStyle} source={icon} /> */}
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

                    <Page tabLabel={{ label: "Physical" }} vitals={[{ title: 'Body Temperature', value: 36, unit: '°C' }, { title: 'Pulse', value: 60, unit: 'bhp' }, { title: 'Blood Pressure', value: '132/88', unit: 'mmHg' }]} />
                    <Page tabLabel={{ label: "Emotional" }} vitals={[]} />
                    <Page tabLabel={{ label: "Spiritual" }} vitals={[]} />
                    <Page tabLabel={{ label: "Environmental" }} vitals={[]} />
                    <Page tabLabel={{ label: "Financial" }} vitals={[]} />
                    <Page tabLabel={{ label: "Social" }} vitals={[]} />
                    <Page tabLabel={{ label: "Intellectual" }} vitals={[]} />
                    <Page tabLabel={{ label: "Occupational" }} vitals={[]} />
                </ScrollableTabView>
            </View>
        );
    }
}