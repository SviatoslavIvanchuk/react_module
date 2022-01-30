
const reducer = (state, action) => {
    switch (action.type) {
        case 'cat':
            return {...state, cat: action.payload};
        case 'dog':
            return {...state, dog: action.payload};

        default:
            throw new Error("Error? WTF??? What is the problem??????");
    }
};

export {reducer};