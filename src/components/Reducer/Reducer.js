
const reducer = (state, action) => {
    switch (action.type) {

        case 'cat':
            return {...state, cat: [...state.cat, action.payload]};
        case  'deleteCat':
            return {...state, cat: state.cat.filter(value => value.id !== action.payload) };


        case 'dog':
            return {...state, dog: [...state.dog, action.payload]};
        case 'deleteDog':
            return {...state, dog: state.dog.filter(value => value.id !== action.payload) };


        default:
            throw new Error("Error? WTF??? What is the problem??????");
    }
};

export {reducer};