const items = (state=[], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    have: false
                }
            ]
        case 'TOGGLE_ITEM':
            return state.map(item =>
                item.id === action.id ? { ...item, have : !item.have } : item )
            default:
                return state
        // case 'REMOVE_ITEM':
        //     return state.map(item => 
        //         item.id === action.id ? { ...item, have: !item.have} : item)
    }
}

export default items