const initialState = {
    isWishVisible: false,
    goals: [
        
    ],
    assessment: {
       
    }
}


const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DashboardReducer_GetAssessmentDetails': {
            state = { ...state, assessment: action.payload }
            break;
        }
    }
    return state;
}

export default DashboardReducer;