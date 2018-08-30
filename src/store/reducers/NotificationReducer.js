const initialState = {
    newNotifications: [
        {
            imageURL: require('../../assests/images/profilepic/beautiful-girl.jpg'),
            name: 'Roshni Shrivastav',
            task: 'has completed 100 Km marathon today',
            time: '1 hrs',
            read: false
        }, {
            imageURL: require('../../assests/images/profilepic/girl.jpg'),
            name: 'Roomi Mandela',
            task: 'has invited you to attend Wellness Event',
            time: '2 hrs',
            read: false
        }, {
            imageURL: require('../../assests/images/profilepic/stylish-girl.jpg'),
            name: 'Sweety Singh',
            task: 'has shared workout video with you',
            time: '3 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/suresh.png'),
            name: 'Nobita Suzuki',
            task: 'has challenged you for Reduce weight goal',
            time: '4 hrs',
            read: true
        }
    ],
    oldNotifications: [
        {
            imageURL: require('../../assests/images/profilepic/cute.jpg'),
            name: 'Shalini Verma',
            task: 'has shared being life video',
            time: '2 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/profilepic/cute1.jpg'),
            name: 'Katrina',
            task: 'has liked the video you have shared',
            time: '2 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/profilepic/cute3.jpg'),
            name: 'Soni Sharma',
            task: 'has set goal of Saving 50lacks this year',
            time: '2 hrs',
            read: true
        }, {
            imageURL: require('../../assests/images/profilepic/nice-girl.jpg'),
            name: 'Minakshi Bandre',
            task: 'has invited for wellness event which is happening on 02/08/2018',
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