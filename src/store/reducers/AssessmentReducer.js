const initialState = {
    currentQuestion: {
        no: 1,
        statement: "How often have you fallen ill in the past year?",
        imageURL: require('../../assests/images/illness-image.png'),
        options: [{
            label: 'More than 15 times', value: '1', isSelected: false
        }, {
            label: '10 to 15 times', value: '2', isSelected: false
        }, {
            label: '5 to 10 times', value: '3', isSelected: false
        }, {
            label: '1 to 2 times', value: '4', isSelected: false
        }],
        ansType: 'single',
        progressBar: 0,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    questions: [],
    isNextQuestionLoading: false,
    assessmentReport: {
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


const AssessmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AssessmentReducer_GetAllQuestions': {
            state = { ...state, questions: action.payload }
            break;
        }
        case 'AssessmentReducer_GetQuestion': {
            state = { ...state, currentQuestion: action.payload }
            break;
        }
        case 'AssessmentReducer_IsNextQuestionLoading': {
            state = { ...state, isNextQuestionLoading: action.payload }
            break;
        }
    }
    return state;
}

export default AssessmentReducer;