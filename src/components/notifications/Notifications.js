import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, List, Content, ListItem, Text } from 'native-base';
import { connect } from 'react-redux';
import NotificationComponent from '../notifications/NotificationComponent';

const mapStateToProps = state => ({
    newNotifications: state.Notification.newNotifications,
    oldNotifications: state.Notification.oldNotifications
})

const Notifications = (props) => {
    return (
        <Container>
            <Content style={styles.container}>
                <List>
                    <ListItem itemDivider>
                        <Text style={{
                            color: '#495057',
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>{'Latest'.toUpperCase()}</Text>
                    </ListItem>
                    {props.newNotifications.map((x, i) => (
                        <NotificationComponent key={i} noti={x} />
                    ))}
                    <ListItem itemDivider>
                        <Text style={{
                            color: '#495057',
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>{'Earlier'.toUpperCase()}</Text>
                    </ListItem>
                    {props.oldNotifications.map((x, i) => (
                        <NotificationComponent key={i} noti={x} />
                    ))}
                </List>
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default connect(mapStateToProps)(Notifications);
