import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
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
        backgroundColor: '#F5FCFF',
    },

});


const Page = ({ assessments, selectReport, takeAssessment }) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#ffffff' }}>
                <List>
                    {assessments.map((x, i) => (
                        x.isGiven ?
                            <ListItem noIndent thumbnail key={i}>
                                <Left>
                                    <Thumbnail source={x.icon} />
                                </Left>
                                <Body>
                                    <Text>{x.title}</Text>
                                    <Text note>{x.note}</Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={() => selectReport(x.title)}>
                                        <Text style={{ fontSize: 12, padding: 10 }}>View Report</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem> :
                            <ListItem noIndent thumbnail key={i} style={{ backgroundColor: '#73a4f53b' }}>
                                <Left>
                                    <Thumbnail source={x.icon} />
                                </Left>
                                <Body>
                                    <Text>{x.title}</Text>
                                    <Text style={{ color: 'red' }} note>{x.note}</Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity style={{ padding: 10 }} onPress={() => takeAssessment(x.title)}>
                                        <Icon name="arrow-forward" />
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                    ))}
                </List>
            </View>
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

class AssessmentList extends Component {
    _scrollX = new Animated.Value(0);
    // 6 is a quantity of tabs
    interpolators = Array.from({ length: 7 }, (_, i) => i).map(idx => ({
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

                    <Page tabLabel={{ label: "Physical" }} takeAssessment={this.selectAssessment} selectReport={this.selectReport} assessments={[
                        { title: 'Biological Age', isGiven: false, note: '10 days overdue', icon: require('../../../assests/images/assessment/A1/A10022.jpg') },
                        { title: 'Strength & Energy', isGiven: false, note: '5 days overdue', icon: require('../../../assests/images/assessment/shutterstock_574800841-nw.jpg') },
                        { title: 'Diet Score', isGiven: false, note: '5 days overdue', icon: require('../../../assests/images/assessment/A1/A10020.jpg') },
                        { title: 'Relationship & Intimacy', isGiven: false, note: '5 days overdue', icon: require('../../../assests/images/assessment/A1/A10023.jpg') },
                        { title: 'Thought Control', isGiven: true, note: '5 days ago', icon: require('../../../assests/images/assessment/A1/A10019.jpg') },
                        { title: 'Wholesomeness', isGiven: true, note: '3 days ago', icon: require('../../../assests/images/assessment/A1/A10033.jpg') },
                        { title: 'Zest for life', isGiven: true, note: '2 days ago', icon: require('../../../assests/images/assessment/A1/A10026.jpg') }]} />
                    <Page tabLabel={{ label: "Emotional" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Spiritual" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Environmental" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Financial" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Social" }} pressHandler={this.selectAssessment} assessments={[]} />
                    <Page tabLabel={{ label: "Intellectual" }} pressHandler={this.selectAssessment} assessments={[]} />
                </ScrollableTabView>
            </View>
        );
    }
}

export default connect(null, mapDispatchToProps)(AssessmentList)