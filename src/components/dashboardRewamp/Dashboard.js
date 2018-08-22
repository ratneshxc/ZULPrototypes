import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Right, Body, Left, Button, Icon, Title, Content } from 'native-base';
import { connect } from 'react-redux';
import DateHeader from './DateHeader';
import Score from './Score';
import Goals from './Goals';

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
                        <Button onPress={this.props.screenProps.OpenDrawer} transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content style={styles.body}>
                    <DateHeader />
                    <Score />
                    <Goals />
                </Content>
            </Container>
        )
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ddd'
    }
})
