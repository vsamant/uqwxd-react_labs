const increment = (val) => {
    return {
        type : 'INCREMENT',
        inc : val
    }
}
// TODO - need to figure how to define multiple actions
// probably  folder should be actions instead of action
// and need to create multiple js files and import/export here
const reset1 = () => {
    return {
        type : 'RESET',
        inc : 0
    }
}

export default ( increment, reset1);