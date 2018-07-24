const initialState = {
    zulaMessageText: '',
    isZulaMessageContainerVisible: false
}


const ZulaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ZulaReducer_Text': {
            state = { ...state, zulaMessageText: action.payload, isZulaMessageContainerVisible: true }
            break;
        }
        case 'ZulaReducer_Sleep': {
            state = { ...state, zulaMessageText: '', isZulaMessageContainerVisible: false }
            break;
        }
    }
    return state;
}

export default ZulaReducer;