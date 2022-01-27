
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc': return {...state, count: state.count + 1}
        case 'dec': return {...state, count: state.count - 1}
        case 'reset': return {...state, count: 0}

        default: throw new Error('Error')
    }
}

export {reducer}