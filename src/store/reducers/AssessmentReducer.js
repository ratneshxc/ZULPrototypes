
const initialState = {
    currentQuestion: {},
    questions: [],
    currentAssessment: "",
    currentAssessmentDetails: [],
    isNextQuestionLoading: false,
    dimensionReport: [{
        title: 'Physical',
        score: '95%',
        icon:require('../../assests/images/dashboard/physical.png'),
        emoji:require('../../assests/images/emoji/01.png'),
        progressColor:'#00b386'
    }, {
        title: 'Emotional',
        score: '75%',
        icon:require('../../assests/images/dashboard/emotional.png'),
        emoji:require('../../assests/images/emoji/02.png'),
        progressColor:'#00b386'
    }, {
        title: 'Spiritual',
        score: '45%',
        icon:require('../../assests/images/dashboard/spiritual.png'),
        emoji:require('../../assests/images/emoji/03.png'),
        progressColor:'rgb(254, 136, 55)'
    }, {
        title: 'Environmental',
        score: '25%',
        icon:require('../../assests/images/dashboard/environmental.png'),
        emoji:require('../../assests/images/emoji/04.png'),
        progressColor:'#dc3545'
    }, {
        title: 'Financial',
        score: '21%',
        icon:require('../../assests/images/dashboard/financial.png'),
        emoji:require('../../assests/images/emoji/04.png'),
        progressColor:'#dc3545'
    }, {
        title: 'Social',
        score: '54%',
        icon:require('../../assests/images/dashboard/social.png'),
        emoji:require('../../assests/images/emoji/03.png'),
        progressColor:'rgb(254, 136, 55)'
    }, {
        title: 'Intellectual',
        score: '92%',
        icon:require('../../assests/images/dashboard/intellectual.png'),
        emoji:require('../../assests/images/emoji/01.png'),
        progressColor:'#00b386'
    },{
        title: 'Occupational',
        score: '89%',
        icon:require('../../assests/images/dashboard/occupational.png'),
        emoji:require('../../assests/images/emoji/01.png'),
        progressColor:'#00b386'
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