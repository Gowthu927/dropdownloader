export default (state=[],action)=>{
    switch (action.type) {
        case "ADD_TO_LIST":
            return [...state,action.payload];
        default:
            return state;
    }
}