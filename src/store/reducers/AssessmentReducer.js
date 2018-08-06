import QuestionData from '../../data/strengthAndEnergyData';

const initialState = {
    currentQuestion: {},
    questions: [],
    currentAssessment:"",
    isNextQuestionLoading: false,
    assessmentReport: {
        physical: {
            title: 'Strength & Energy',
            remainingTime: '2 days ago',
            compPercentage: '25%',
            notification: '',
            icon: require('../../assests/images/dashboard/physical.svg')
        },
        emotional: {
            title: 'BIOLOGICAL AGE',
            remainingTime: '5 days ago',
            compPercentage: '35%',
            notification: '',
            icon: require('../../assests/images/dashboard/emotional.svg')
        },
        social: {
            title: 'Diet Score',
            remainingTime: '65 days ago',
            compPercentage: '65%',
            notification: '',
            icon: require('../../assests/images/dashboard/social.svg')
        },
        occupational: {
            title: 'Relationship & Intimacy',
            remainingTime: '83 days ago',
            compPercentage: '85%',
            notification: '',
            icon: require('../../assests/images/dashboard/occupational.svg')
        },
        spiritual: {
            title: 'Thought Control',
            remainingTime: '73 days ago',
            compPercentage: '21%',
            notification: '',
            icon: require('../../assests/images/dashboard/spiritual.svg')
        },
        intellectual: {
            title: 'Wholesomeness',
            remainingTime: '32 days ago',
            compPercentage: '30%',
            notification: '',
            icon: require('../../assests/images/dashboard/intellectual.svg')
        },
        financial: {
            title: 'Zest For Life',
            remainingTime: '25 days ago',
            compPercentage: '91%',
            notification: '',
            icon: require('../../assests/images/dashboard/financial.svg')
        }
        // ,
        // environmental: {
        //     title: 'Environmental',
        //     remainingTime: '20 days ago',
        //     compPercentage: '65%',
        //     notification: '',
        //     icon: require('../../assests/images/dashboard/environmental.svg')
        // }
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
        case 'AssessmentReducer_SelectAssessmentType': {
            state = { ...state, currentAssessment: action.payload }
            break;
        }
    }
    return state;
}

export default AssessmentReducer;