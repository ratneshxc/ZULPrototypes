import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, ImageBackground, TouchableHighlight, ListView } from 'react-native';
import { Header, Button, Title, Container, Icon, Content, Footer, FooterTab, Card, CardItem, List, ListItem, Badge, Item, Input, Right, Left, Body } from 'native-base';

const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width - 20;

class AddActivity extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { title: 'Walk 2 km a day', content: 'b', points: '40 Points' },
                { title: 'Drink 3l water daily', content: 'b', points: '10 Points' },
                { title: 'Swim 2km a week', content: 'b', points: '50 Points' },
                { title: '10 min meditation', content: '', points: '30 Points' },
                { title: 'Log all your expenses', content: '', points: '20 Points' },
                { title: '', content: '', points: '40 Points' },
                { title: 'Pay off my student loan', content: '', points: '70 Points' },
                { title: 'Start saving for buying a home', content: '', points: '40 Points' },
                { title: 'Start my own business', content: '', points: '50 Points' },
                { title: 'Write and publish an e-book', content: '', points: '40 Points' },
                { title: '', content: '', points: '10 Points' },
                { title: '', content: '', points: '20 Points' }]),
        };
    }
    goToYourGoal = () => {
        this.props.navigation.navigate('YourGoal');
    }
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <ListView
                        style={styles.container}
                        dataSource={this.state.dataSource}
                        renderRow={(data) =>
                            <TouchableHighlight onPress={this.goToYourGoal}>
                                <Card style={{ flex: 1, padding: 10, flexDirection: 'row', width: screenwidth, alignSelf: 'center' }}>
                                    <Left style={{ flexDirection: 'column', }}>
                                        <Text style={{ width: 300 }}>{data.title}</Text>
                                        <Text style={{ top: 8, fontSize: 10, }}>{data.points}</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" style={{ alignSelf: 'flex-end' }} />
                                    </Right>
                                </Card>
                            </TouchableHighlight>
                        }
                    />
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    questionView: {

    }
});
export default AddActivity;