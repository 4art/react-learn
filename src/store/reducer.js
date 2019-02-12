const initialState = {
    name: "Gast",
    email: ""
}

const reducer = (state = initialState, action) => {
    if (action.type === "registration") {
        console.log(action.val)
        return action.val
    }
}

export default reducer;