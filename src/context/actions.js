

const ADD = 'ADD'
const REMOVE = 'REMOVE'
const UPDATE = 'UPDATE'
const TOGGLE = 'TOGGLE'

const add = (task) => {
    return {
        type: ADD,
        payload: task
    }
}
const remove = (id) => {
    return {
        type: REMOVE,
        payload: { id }
    }
}
const update = (task) => {
    return {
        type: UPDATE,
        payload: { task }
    }
}
const toggle = (id) => {
    return {
        type: TOGGLE,
        payload: id 
    }
}
export { ADD, REMOVE, UPDATE, TOGGLE, add, remove, update, toggle }