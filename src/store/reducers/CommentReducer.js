const initialState = {
    isCommentModalVisible: false,
    comments:[]
}


const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CommentReducer_ShowComment': {
            state = { ...state, isCommentModalVisible: action.payload }
            break;
        }
        case 'CommentReducer_GetComments': {
            state = { ...state, comments: action.payload }
            break;
        }
    }
    return state;
}

export default CommentReducer;