const initialState = {
    assessmentReport: {
        title: 'Report of Zest for life',
        score: {
            value: 70,
            caption: 'Average'
        },
        observations: [{
            text: 'Poor appetite',
            type: 'danger'
        }, {
            text: 'Poor posture',
            type: 'danger'
        }, {
            text: 'Poor diet',
            type: 'danger'
        }, {
            text: 'Lack of physical and mental growth',
            type: 'danger'
        }, {
            text: 'Poor sleep',
            type: 'danger'
        }, {
            text: 'Low BMI',
            type: 'danger'
        }, {
            text: 'Lower risk of inheriting diseases',
            type: 'success'
        }, {
            text: 'Good Physical Activity ',
            type: 'success'
        }],
        actionPlan: [
            {
                Goal: 'Balanced diet',
                icon: require('../../assests/images/goals/diet.jpg'),
                description: 'Include some protein, omega-3 fatty acid rich food, grain'
            },
            {
                Goal: 'Sleepathon',
                icon: require('../../assests/images/goals/sleep.jpg'),
                description: 'Self manage your stress level'
            }, {
                Goal: 'Sweat it out',
                icon: require('../../assests/images/goals/sweat.jpg'),
                description: 'Running,Intense workout,Games'
            },
            {
                Goal: 'Improve immunity',
                icon: require('../../assests/images/goals/immunity.jpg'),
                description: 'Snack on fruit,nuts or healthy snacks instead of packaged food'
            }, {
                Goal: 'Improve posture',
                icon: require('../../assests/images/goals/poster.jpg'),
                description: 'Yoga poses- bow pose, cobra pose, garuda pose'
            }
        ],
        expertList: [
            {
                name: 'Shalini Verma',
                profileImage: require('../../assests/images/profilepic/beautiful-girl.jpg'),
                speciality: 'Yoga Teacher',
                score: 4.5
            },
            {
                name: 'Katrina',
                profileImage: require('../../assests/images/profilepic/girl.jpg'),
                speciality: 'Psychologiest',
                score: 3
            },
            {
                name: 'Soni Sharma',
                profileImage: require('../../assests/images/profilepic/stylish-girl.jpg'),
                speciality: 'Diet & Nutrition expert',
                score: 2
            },
            {
                name: 'Minakshi Bandre',
                profileImage: require('../../assests/images/profilepic/cute.jpg'),
                speciality: 'Financial Expert',
                score: 2.5
            },
            {
                name: 'Roomi Mandela',
                profileImage: require('../../assests/images/profilepic/cute1.jpg'),
                speciality: 'Investment Expert',
                score: 2
            }
        ],
        next: [
            {
                title: 'Check Biological Age',
                icon: require('../../assests/images/assessment/A1/A10022.jpg')
            },
            {
                title: 'Zest for life',
                icon: require('../../assests/images/assessment/A1/A10026.jpg')
            },
            {
                title: 'Wholesomeness',
                icon: require('../../assests/images/assessment/A1/A10033.jpg')
            }
        ]

    }
}


const ReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ReportReducer_GetReport': {
            state = { ...state, assessmentReport: action.payload }
            break;
        }
    }
    return state;
}

export default ReportReducer;