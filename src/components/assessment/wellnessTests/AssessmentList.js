import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, Image, ScrollView } from 'react-native';
import { List, Text, ListItem, Left, Body, Thumbnail, Right, Icon } from 'native-base';
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

const mapDispatchToProps = dispatch => ({
    setAssessmentType: (data) => dispatch({
        type: 'AssessmentReducer_SelectAssessmentType',
        payload: data
    })
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },

});


const Page = ({ assessments, selectReport, selectAssessment }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: '#ffffff' }}>
                <List>
                    {assessments.map((x, i) => (
                        x.isGiven ?
                            <ListItem noIndent thumbnail key={i} onPress={() => selectReport(x.title)}>
                                <Left>
                                    {/* <Thumbnail source={x.icon} /> */}
                                    <View style={{ borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 10 }}>
                                        <Image source={x.icon} style={{ width: 40, height: 40 }} />
                                    </View>
                                </Left>
                                <Body>
                                    <Text style={{ color: '#3a3a3a' }}>{x.title}</Text>
                                    <Text note>{x.note}</Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={() => selectReport(x.title)}>
                                        <Icon name="arrow-forward" />
                                    </TouchableOpacity>
                                </Right>
                            </ListItem> :
                            <ListItem noIndent thumbnail key={i} onPress={() => selectAssessment(x.title)} style={{ backgroundColor: '#73a4f53b' }}>
                                <Left>
                                    <View style={{ borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 10, backgroundColor: '#fff' }}>
                                        <Image source={x.icon} style={{ width: 40, height: 40 }} />
                                    </View>
                                </Left>
                                <Body>
                                    <Text style={{ color: '#3a3a3a' }}>{x.title}</Text>
                                    <Text style={{ color: 'red' }} note>{x.note}</Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={() => selectAssessment(x.title)}>
                                        <Icon name="arrow-forward" />
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                    ))}
                </List>
            </View>
        </ScrollView>
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

class AssessmentList extends Component {
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

    selectAssessment = (data) => {
        this.props.setAssessmentType(data);
        this.props.navigation.navigate("AssessmentInfo", { title: data });
    }

    selectReport = (data) => {
        this.props.navigation.navigate("AssessmentReportStack", { title: data });
    }

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

                    <Page tabLabel={{ label: "Physical" }} selectAssessment={this.selectAssessment} selectReport={this.selectReport} assessments={[
                        { title: 'Biological Age', isGiven: false, note: '10 days overdue', icon: require('../../../assests/images/assessment/intro/biological-age.png') },
                        { title: 'Strength & Energy', isGiven: false, note: '5 days overdue', icon: require('../../../assests/images/assessment/intro/strength-energy.png') },
                        { title: 'Diet Score', isGiven: false, note: '5 days overdue', icon: require('../../../assests/images/assessment/intro/diet.png') },
                        { title: 'Relationship & Intimacy', isGiven: false, note: '5 days overdue', icon: require('../../../assests/images/assessment/intro/relationship.png') },
                        { title: 'Thought Control', isGiven: true, note: '5 days ago', icon: require('../../../assests/images/assessment/intro/thought-control.png') },
                        { title: 'Wholesomeness', isGiven: true, note: '3 days ago', icon: require('../../../assests/images/assessment/intro/wholesomeness.png') },
                        { title: 'Zest for life', isGiven: true, note: '2 days ago', icon: require('../../../assests/images/assessment/intro/zest-for-life.png') }]} />
                    <Page tabLabel={{ label: "Emotional" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Spiritual" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Environmental" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Financial" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Social" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Intellectual" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Occupational" }} pressHandler={this.selectAssessment} assessments={[]} />
                </ScrollableTabView>
            </View>
        );
    }
}

export default connect(null, mapDispatchToProps)(AssessmentList)