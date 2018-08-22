import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Body, Left, Button, Icon,Right, Title, Content } from 'native-base';
const Calendar = (props) => {
    return (
        <Container>
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='calendar' />
                </Button>
            </Left>
            <Body>
                <Title>Calendar</Title>
            </Body>
            <Right>
            </Right>
        </Header>
        <Content style={styles.container}>

        </Content>
    </Container>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default Calendar;