const initialState = {
    isConfigurableDashboard: false,
    riskIndicators: [{
        title: 'Walk',
        value: 1,
        unit: 'Km',
        target: 5,
        ideal: '>'

    }, {
        title: 'Sleep',
        value: 4,
        unit: 'Hrs',
        target: 8,
        ideal: '>'
    }, {
        title: 'Calories Burnt',
        value: 100,
        unit: 'Cal',
        target: 300,
        ideal: '>'
    }],
    lowRiskIndicators: [{
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
        value: 9,
        unit: 'Hrs',
        target: 8,
        ideal: '>'
    }],
    indicators: [{
        dimensionName: 'Physical',
        dimensionIcon: require('../../assests/images/dashboard/physical.png'),
        indicators: [
            {
                title: 'Walk',
                value: 1,
                unit: 'Km',
                target: 8,
                ideal: '>'
            }, {
                title: 'Sleep',
                value: 2,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Run',
                value: 4,
                unit: 'Km',
                target: 8,
                ideal: '>'
            }, {
                title: 'Heart Beat',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Cycling',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }
        ]
    }, {
        dimensionName: 'Emotional',
        dimensionIcon: require('../../assests/images/dashboard/emotional.png'),
        indicators: [
            {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }
        ]
    }, {
        dimensionName: 'Intellectual',
        dimensionIcon: require('../../assests/images/dashboard/intellectual.png'),
        indicators: [
            {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }
        ]
    }, {
        dimensionName: 'Environmental',
        dimensionIcon: require('../../assests/images/dashboard/environmental.png'),
        indicators: [
            {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }, {
                title: 'Office Time',
                value: 9,
                unit: 'Hrs',
                target: 8,
                ideal: '>'
            }
        ]
    }]
}


const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DashboardReducer_GetRiskIndicators': {
            state = { ...state, riskIndicators: action.payload }
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