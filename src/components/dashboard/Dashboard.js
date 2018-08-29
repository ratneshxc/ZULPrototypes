import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Right, Body, Left, Button, Icon, Title, Content, Text } from 'native-base';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => ({
    showWishModal: () => dispatch({
        type: 'ZulaReducer_Wish',
        payload: true
    }),
    showZula: () => dispatch({
        type: 'ZulaReducer_Access',
        payload: true
    })
})

class Dashboard extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.showWishModal();
        }, 4000)
        this.props.showZula();
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")} style={{ backgroundColor: '#26386b', flexDirection: 'row', padding: 5, borderRadius: 10 }}>
                            <Icon name="bell" style={{ fontSize: 20, color: '#fff' }} type="FontAwesome" />
                            <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>10</Text>

                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content style={styles.body}>

                </Content>
            </Container>
        )
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);


const styles = StyleSheet.create({
    body: {
    }
})
