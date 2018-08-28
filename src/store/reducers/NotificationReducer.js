const initialState = {
    newNotifications: [
        {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: false
        }, {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: false
        }, {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: true
        }
    ],
    oldNotifications: [
        {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Suresh Ramesh',
            task: 'has completed 10 Km marathon',
            time: '2 hrs',
            read: true
        }
    ]
}


const NotificationReducer = (state = initialState, action) => {
    switch (action.type) {

    }
    return state;
}

export default NotificationReducer;