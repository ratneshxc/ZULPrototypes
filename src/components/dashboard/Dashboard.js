import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Right, Body, Left, Button, Icon, Title, Content, Text } from 'native-base';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => ({
    showWishModal: () => dispatch({
        type: 'ZulaReducer_Wish',
        payload: true
    })
})

class Dashboard extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.showWishModal();
        }, 4000)
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
                        <TouchableOpacity style={{ backgroundColor: '#fff', flexDirection: 'row', padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 20 }}>5</Text>
                            <Icon name="bell" style={{ fontSize: 15 }} type="FontAwesome" />
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
