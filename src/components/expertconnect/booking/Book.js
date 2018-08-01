import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import Panel from 'react-native-panel';
import { TagSelect } from 'react-native-tag-select';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width + 20;
const screenheight = windowObj.height / 10;
const infowidth = windowObj.width * 9 / 10;

class Book extends React.Component {
    constructor(props) {
        super(props)
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        this.state = {
            date: date + '-' + month + '-' + year,
            startDate: date + '-' + month + '-' + year
        }
    }
    render() {
        const morningData = [
            { id: 1, label: '09:00-09:30AM' },
            { id: 2, label: '09:30-10:00AM' },
            { id: 3, label: '10:00-10:30AM' },
            { id: 4, label: '10:30-11:00AM' },
            { id: 5, label: '11:00-11:30AM' },
            { id: 6, label: '11:30-11:59AM' }
        ];
        const noonData = [
            { id: 1, label: '01:00-01:30PM' },
            { id: 2, label: '01:30-02:00PM' },
            { id: 3, label: '02:00-02:30PM' },
            { id: 4, label: '02:30-03:00PM' },
            { id: 5, label: '03:00-03:30PM' },
            { id: 6, label: '03:30-04:00PM' }
        ];
        const eveningData = [
            { id: 1, label: '05:00-05:30PM' },
            { id: 2, label: '05:30-06:00PM' },
            { id: 3, label: '06:00-06:30PM' },
            { id: 4, label: '06:00-07:00PM' },
            { id: 5, label: '07:00-07:30PM' },
            { id: 6, label: '07:30-08:00PM' }
        ];
        return (
            <View >
                <View style={styles.container1}>
                    <Text>Booking</Text>
                </View>
                <ImageBackground source={require('../../../assests/images/images2new.png')} style={{ right: 5, alignSelf: 'center', height: 200, width: screenwidth }} resizeMode="cover">
                    <View style={styles.detailsView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Kamini A. Rao    </Text>
                            <Text style={{ fontSize: 16, color: 'white' }}>(Dermitologist)</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, color: 'white' }}>MBBS,DOMS</Text>
                            <Text style={{ fontSize: 16, color: 'white' }}>   9 yrs exp</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, color: 'white' }}>BrookField Hospital</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Select date :</Text>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate={this.state.startDate}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
                <ScrollView>
                    <View>
                        <Panel
                            style={styles.firstHeaderContainer}
                            header="Morning"
                        >
                            <TagSelect
                                data={morningData}
                                max={1}
                                ref={(tag) => {
                                    this.state.value = null;
                                    this.tag = tag;
                                }}
                                onMaxError={() => {

                                }}
                            />
                        </Panel>
                        <Panel header="Afternoon" style={styles.firstHeaderContainer}>
                            <TagSelect
                                data={noonData}
                                max={1}
                                ref={(tag) => {
                                    this.state.value = null;
                                    this.tag = tag;
                                }}
                                onMaxError={() => {

                                }}
                            />
                        </Panel>
                        <Panel header="Evening" style={styles.firstHeaderContainer}>
                            <TagSelect
                                data={eveningData}
                                max={1}
                                ref={(tag) => {
                                    this.state.value = null;
                                    this.tag = tag;
                                }}
                                onMaxError={() => {

                                }}
                            />
                        </Panel>
                    </View>
                </ScrollView>


            </View>
        )
    }
}

export default Book;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5067ffd1',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerLeft: {
        flex: 1
    },
    headerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    detailsView: {
        margin: 60,
        backgroundColor: '#00000066',
        flex: 1,
        padding: 3,
        flexDirection: 'column',
        top: 60,
    },
    //--------------------------------------------------

    firstHeaderContainer: {
        backgroundColor: '#7B68EE'
    },
    firstHeader: {
        marginHorizontal: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 50,
    },
    thirdHeaderContainer: {
        margin: 15,
        backgroundColor: 'yellow',
    },
    myDescription: {
        padding: 10,
        paddingTop: 0,
    },
    customContent: {
        backgroundColor: '#bada55',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    square: {
        backgroundColor: 'yellow',
        width: 50,
        height: 50,
    },
    circle: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        borderRadius: 25,
    }

})