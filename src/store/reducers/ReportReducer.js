const initialState = {
    assessmentReport: {
        title: 'Zest for life',
        score: {
            value: 35,
            caption: 'Average'
        },
        observations: [{
            text: 'Low happiness score',
            type: 'danger'
        }, {
            text: 'Low weight',
            type: 'danger'
        }, {
            text: 'Low BMI',
            type: 'danger'
        }, {
            text: 'High stress',
            type: 'danger'
        }, {
            text: 'Low pulse',
            type: 'danger'
        }, {
            text: 'Low BMI',
            type: 'danger'
        }, {
            text: 'Good height',
            type: 'success'
        }, {
            text: 'Low risk of hearth attack',
            type: 'success'
        }],
        actionPlan: [
            {
                Goal: 'Reduce Weight',
                icon: require('../../assests/images/suresh.png')
            },
            {
                Goal: 'Manage Sleep',
                icon: require('../../assests/images/suresh.png')
            }
        ],
        expertList: [
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist',
                score:5
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist'
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist'
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist'
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist'
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