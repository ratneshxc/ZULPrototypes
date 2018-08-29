import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Right, Body, Left, Button, Icon, Title, Content } from 'native-base';
import { connect } from 'react-redux';
import NotificationCount from '../common/header/NotificationCount';


const mapDispatchToProps = dispatch => ({
    showZula: () => dispatch({
        type: 'ZulaReducer_Access',
        payload: true
    })
})

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.showZula();
    }

    getAllNotifications = () => this.props.navigation.navigate("Notification");

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                    <Right>
                        <NotificationCount getAllNotifications={this.getAllNotifications} />
                    </Right>
                </Header>
                <Content style={styles.body}>

                </Content>
            </Container >
        )
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);


const styles = StyleSheet.create({
    body: {
    },
})
