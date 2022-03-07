import { readonly, ref } from 'vue'

export const useState = (initialState) => {
  const state = ref(initialState);
  const setState = (newState) => {
    state.value = newState;
  }

  return [readonly(state), setState]
}

export const useReducer = (reducer, initialArg, init) => {
  const state = ref(init ? init(initialArg) : initialArg)
  const dispatch = (action) => {
    state.value = reducer(state.value, action)
  }

  return [readonly(state), dispatch]
}
