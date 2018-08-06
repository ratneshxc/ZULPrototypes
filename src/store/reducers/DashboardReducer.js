const initialState = {
    isWishVisible: false,
    isConfigurableDashboard: false,
    wellnessStatusSummary: [
        {
            title: 'Walk',
            value: 6,
            unit: 'Km',
            target: 5,
            ideal: '>'

        }, {
            title: 'Sleep',
            value: 6,
            unit: 'Hrs',
            target: 8,
            ideal: '>'
        }, {
            title: 'Calories',
            value: 600,
            unit: 'Cal',
            target: 300,
            ideal: '>'
        }, {
            title: 'Mobile Usage',
            value: 3,
            unit: 'Hrs',
            target: 5,
            ideal: '<'
        },
        {
            title: 'Travel',
            value: 18,
            unit: 'Km',
            target: 20,
            ideal: '<'
        }, {
            title: 'Office Time',
            value: 4,
            unit: 'Hrs',
            target: 8,
            ideal: '>'
        }, {
            title: 'Home Time',
            value: 18,
            unit: 'Hrs',
            target: 20,
            ideal: '>'
        },
        {
            title: 'Credit Card Usage',
            value: 500,
            unit: 'Rs',
            target: 300,
            ideal: '<'
        },{
            title: 'Debit Card Usage',
            value: 500,
            unit: 'Rs',
            target: 300,
            ideal: '<'
        }
    ]
}


const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DashboardReducer_GetWellnessStatusDetails': {
            state = { ...state, wellnessStatusSummary: action.payload }
            break;
        }
        case 'DashboardReducer_ShowConfirationModal': {
            state = { ...state, isConfigurableDashboard: action.payload }
            break;
        }
    }
    return state;
}

export default DashboardReducer;