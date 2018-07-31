const initialState = {
    isWishVisible: true,
    goals: [
        {
            imageURL: require('../../assests/images/goals/running.jpg'),
            title:'Running',
            description:'23 km completed in 10 days',
            completion:'60%',
            createDate:'20/01/2018',
            remaining:'2 hrs'
        },
        {
            imageURL: require('../../assests/images/goals/morning.jpg'),
            title:'Morning Habbits for your health',
            description:'Drink 3 bottles of fresh water everyday',
            completion:'80%',
            createDate:'20/01/2018',
            remaining:'2 hrs'
        },
        {
            imageURL: require('../../assests/images/goals/money.jpg'),
            title:'Save money for trip',
            description:'Save more that 5000 rs everyday by avoiding having junk food',
            completion:'20%',
            createDate:'20/01/2018',
            remaining:'2 hrs'
        },
        {
            imageURL: require('../../assests/images/goals/relationship.jpg'),
            title:'Connect with near and dear',
            description:'Call and ask the status of parent',
            completion:'90%',
            createDate:'20/01/2018',
            remaining:'2 hrs'
        }
    ],
    assessment: {
        physical: {
            title: 'Physical',
            remainingTime: '2 days ago',
            compPercentage: '25%',
            notification: '',
            icon: require('../../assests/images/dashboard/physical.svg')
        },
        emotional: {
            title: 'Emotional',
            remainingTime: '5 days ago',
            compPercentage: '35%',
            notification: '',
            icon: require('../../assests/images/dashboard/emotional.svg')
        },
        social: {
            title: 'Social',
            remainingTime: '65 days ago',
            compPercentage: '65%',
            notification: '',
            icon: require('../../assests/images/dashboard/social.svg')
        },
        occupational: {
            title: 'Occupational',
            remainingTime: '83 days ago',
            compPercentage: '85%',
            notification: '',
            icon: require('../../assests/images/dashboard/occupational.svg')
        },
        spiritual: {
            title: 'Spiritual',
            remainingTime: '73 days ago',
            compPercentage: '21%',
            notification: '',
            icon: require('../../assests/images/dashboard/spiritual.svg')
        },
        intellectual: {
            title: 'Intellectual',
            remainingTime: '32 days ago',
            compPercentage: '30%',
            notification: '',
            icon: require('../../assests/images/dashboard/intellectual.svg')
        },
        financial: {
            title: 'Financial',
            remainingTime: '25 days ago',
            compPercentage: '91%',
            notification: '',
            icon: require('../../assests/images/dashboard/financial.svg')
        },
        environmental: {
            title: 'Environmental',
            remainingTime: '20 days ago',
            compPercentage: '65%',
            notification: '',
            icon: require('../../assests/images/dashboard/environmental.svg')
        }
    }
}


const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DashboardReducer_GetAssessmentDetails': {
            state = { ...state, assessment: action.payload }
            break;
        }
        case 'DashboardReducer_PhysicalNotification': {
            state = { ...state, assessment: { ...state.assessment, physical: { ...state.assessment.physical, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_EmotionalNotification': {
            state = { ...state, assessment: { ...state.assessment, emotional: { ...state.assessment.emotional, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_SocialNotification': {
            state = { ...state, assessment: { ...state.assessment, social: { ...state.assessment.social, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_OccupationalNotification': {
            state = { ...state, assessment: { ...state.assessment, occupational: { ...state.assessment.occupational, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_SpiritualNotification': {
            state = { ...state, assessment: { ...state.assessment, spiritual: { ...state.assessment.spiritual, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_IntellectualNotification': {
            state = { ...state, assessment: { ...state.assessment, intellectual: { ...state.assessment.intellectual, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_FinancialNotification': {
            state = { ...state, assessment: { ...state.assessment, financial: { ...state.assessment.financial, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_EnvironmentalNotification': {
            state = { ...state, assessment: { ...state.assessment, environmental: { ...state.assessment.environmental, notification: action.payload } } }
            break;
        }
        case 'DashboardReducer_WishModalVisible': {
            state = { ...state, isWishVisible: action.payload }
            break;
        }
    }
    return state;
}

export default DashboardReducer;