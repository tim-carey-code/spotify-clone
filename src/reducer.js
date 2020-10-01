export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove token after finished dev..
    //  token: "BQCZX5CK_bRP6Tb1nGfzXmVuIH0WRmlRkFRIT6A77_ySrAnXRg1nEhz3U1Mn8mxsQ40uUO6PmdpzBElfCDrrqwOK3mJAp1gHkvslHIe7pG2w2rlWxeb39ihhAE-FIlgEJ1rZiKJlgVF0KbWLUEXIGa0ZzR2uh6iasVjl33bKEJlxJ2akWbqj",
};

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };


        default:
            return state;
    }
};


export default reducer;