import QuestionData from '../../data/strengthAndEnergyData';

const initialState = {
    currentQuestion: {},
    questions: [],
    currentAssessment:"",
    currentAssessmentDetails:[],
    isNextQuestionLoading: false,
    assessmentReport: [ {
            title: 'Strength & Energy',
            remainingTime: '2 days ago',
            compPercentage: '25%',
        },{
            title: 'Biological Age',
            remainingTime: '5 days ago',
            compPercentage: '35%'
        },{
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