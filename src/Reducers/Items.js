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
        case 'REMOVE_ITEM':
            return state.filter((data, i) => i!== action.id);
        default:
            return state
        
    }
}

export default items