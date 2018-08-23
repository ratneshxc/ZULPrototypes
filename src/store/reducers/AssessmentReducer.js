
const initialState = {
    currentQuestion: {},
    questions: [],
    currentAssessment: "",
    currentAssessmentDetails: [],
    isNextQuestionLoading: false,
    dimensionReport: [{
        title: 'Physical',
        score: '25%',
        icon:require('../../assests/images/dashboard/physical.svg'),
        emoji:require('../../assests/images/emoji/01.svg')
    }, {
        title: 'Emotional',
        score: '35%',
        icon:require('../../assests/images/dashboard/emotional.svg'),
        emoji:require('../../assests/images/emoji/02.svg')
    }, {
        title: 'Spiritual',
        score: '65%',
        icon:require('../../assests/images/dashboard/spiritual.svg'),
        emoji:require('../../assests/images/emoji/03.svg')
    }, {
        title: 'Environmental',
        score: '85%',
        icon:require('../../assests/images/dashboard/environmental.svg'),
        emoji:require('../../assests/images/emoji/04.svg')
    }, {
        title: 'Financial',
        score: '21%',
        icon:require('../../assests/images/dashboard/financial.svg'),
        emoji:require('../../assests/images/emoji/04.svg')
    }, {
        title: 'Social',
        score: '85%',
        icon:require('../../assests/images/dashboard/social.svg'),
        emoji:require('../../assests/images/emoji/03.svg')
    }, {
        title: 'Intellectual',
        score: '21%',
        icon:require('../../assests/images/dashboard/intellectual.svg'),
        emoji:require('../../assests/images/emoji/01.svg')
    }],
    assessmentReport: [{
        title: 'Strength & Energy',
        remainingTime: '2 days ago',
        compPercentage: '25%',
    }, {
        title: 'Biological Age',
        remainingTime: '5 days ago',
        compPercentage: '35%'
    }, {
        title: 'Diet Score',
        remainingTime: '65 days ago',
        compPercentage: '65%'
    }, {
        title: 'Relationship & Intimacy',
        remainingTime: '83 days ago',
        compPercentage: '85%'
    }, {
        title: 'Thought Control',
        remainingTime: '73 days ago',
        compPercentage: '21%'
    }, {
        title: 'Wholesomeness',
        remainingTime: '32 days ago',
        compPercentage: '30%'
    }, {
        title: 'Zest For Life',
        remainingTime: '25 days ago',
        compPercentage: '91%'
    }
    ]
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
        case 'AssessmentReducer_SelectAssessmentDetails': {
            state = { ...state, currentAssessmentDetails: action.payload }
            break;
        }
    }
    return state;
}

export default AssessmentReducer;