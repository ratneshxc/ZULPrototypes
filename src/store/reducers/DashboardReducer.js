const initialState = {
    
}


const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DashboardReducer_GetRiskIndicators': {
            state = { ...state, riskIndicators: action.payload }
            break;
        }
    }
    return state;
}

export default DashboardReducer;