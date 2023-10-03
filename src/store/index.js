import { createStore } from 'vuex'

export default createStore ({
    state: {
        userData: {
            name: '',
            age: ''
        },
        childrenData: []
    },
    mutations: {
        addChild(state, newChild) {
            if (state.childrenData.length < 5) {
              newChild.id = state.childrenData.length;
              newChild.name = '';
              newChild.age = '';
              state.childrenData.push(newChild);
            } else {
              console.log('Достигнут максимальный лимит детей (5)');
            }
          },
          removeChild(state, childId) {
            const index = state.childrenData.findIndex(child => child.id === childId);
            if (index !== -1) {
              state.childrenData.splice(index, 1);
            }
          },
          updateName(state, value){
            state.userData.name = value
          },
          updateAge(state, value){
            state.userData.age = value
          },
          updateChildren(state, value){
            state.childrenData = value
          }
    },
    actions: {

    },
    getters:{
        capacity(state) {
            return state.childrenData.length === 5
        },
        children(state){
            return state.childrenData
        },
        user(state){
            return state.userData
        }
    }
})