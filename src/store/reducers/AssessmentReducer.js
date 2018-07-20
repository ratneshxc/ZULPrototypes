const initialState = {
    currentQuestion: {
        no: 1,
        statement: "How often have you fallen ill in the past year?",
        imageURL: require('../../assests/images/illness-image.png'),
        options: [{
            label: 'More than 15 times', value: '1'
        }, {
            label: '10-15 times', value: '2'
        }, {
            label: '5-10 times', value: '3'
        }, {
            label: '1-2 times', value: '4'
        }],
        ansType: 'single',
        progressBar: 0.1,
        likes:25
    },
    questions: [],
    isNextQuestionLoading: false
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