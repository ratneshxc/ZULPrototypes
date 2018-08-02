const initialState = {
    isWishVisible: false,
    wellnessStatusSummary: [
        {
            title:'Walk',
            value:'1.3 Km',
            target:'>5 Km'
        },
        {
            title:'Sleep',
            value:'8 Hrs',
            target:'<6 Hrs'
        },
        {
            title:'Calaries',
            value:'600 Cal',
            target:'>800 Cal'
        },
        {
            title:'Money Spent',
            value:'10,100 Rs',
            target:'<500 Rs'
        },
        {
            title:'Mobile Usage',
            value:'8 Hrs',
            target:'<4 Hrs'
        },
        {
            title:'Travel',
            value:'500 Km',
            target:'>50 Km'
        }
    ]
}


const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DashboardReducer_GetWellnessStatusDetails': {
            state = { ...state, wellnessStatusSummary: action.payload }
            break;
        }
    }
    return state;
}

export default DashboardReducer;