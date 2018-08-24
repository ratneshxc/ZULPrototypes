const initialState = {
    assessmentReport: {
        title: 'Report of Zest for life',
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
                icon: require('../../assests/images/suresh.png'),
                description:'Reduce 10 Kg weight'
            },
            {
                Goal: 'Manage Sleep',
                icon: require('../../assests/images/suresh.png'),
                description:'Reduce 10 Kg weight'
            },{
                Goal: 'Reduce Weight',
                icon: require('../../assests/images/suresh.png'),
                description:'Reduce 10 Kg weight'
            },
            {
                Goal: 'Manage Sleep',
                icon: require('../../assests/images/suresh.png'),
                description:'Reduce 10 Kg weight'
            },{
                Goal: 'Reduce Weight',
                icon: require('../../assests/images/suresh.png'),
                description:'Reduce 10 Kg weight'
            }
        ],
        expertList: [
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist',
                score: 4.5
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist',
                score: 3
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist',
                score: 2
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist',
                score: 2.5
            },
            {
                name: 'Pritam K',
                profileImage: require('../../assests/images/suresh.png'),
                speciality: 'Dermatologist',
                score: 2
            }
        ],
        next: [
            {
                title: 'Check Biological Age',
                icon: require('../../assests/images/suresh.png')
            },
            {
                title: 'Zest for life',
                icon: require('../../assests/images/suresh.png')
            },
            {
                title: 'Wholesomeness',
                icon: require('../../assests/images/suresh.png')
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