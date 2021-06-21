import { ActionContext, ActionTree } from "vuex";
import { RootState } from "~/types/state";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)


export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({
    commit,
    dispatch
  }: ActionContext<RootState, RootState>) {},

  async nuxtClientInit() {}
};


export const state = () => ({
  people: [{firstName: 'Jill', lastName: 'Smith'}, {firstName: 'Eve', lastName: 'Jackson'}]
});

export const mutations = {
//   addPersons(state: any) {
// state.people.push({firstName: 'dig', lastName: 'gur'})
//   }
SET_PEOPLE(state: any, people: any) {
state.people.push(people);
},
GET_PEOPLE(state: any, people: any) {
  let newPeople = state.people.filter((item: any)=> item.firstName !== people.firstName && item.lastName !== people.lastName);
  state.people = newPeople;
}
}