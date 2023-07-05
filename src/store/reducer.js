 const reducer = (state, action) => {
    switch (action.type) {
        case "SET_POST":
            return { ...state, post: action.payload };
        case "SET_QUERY":
            return { ...state, query: action.payload };
        case "SET_FILTERED_CONTACTS":
            return { ...state, filteredContacts: action.payload };
        default:
            return state;
    }
};


export default reducer;