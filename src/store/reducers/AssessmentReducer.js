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