<template>
  <div>
    <div class="table-container">
      <table style="width:100%">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Action</th>
        </tr>
        <tr v-for="(person, index) in $store.state.people" :key="person.firstName + person.lastName + index">
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td><el-button @click="remove(person)">Remove</el-button></td>
        </tr>
      </table>
    </div>
    <div class="input-container">
      <input type="text" placeholder="Firstname" :v-model="firstNameInput" @input="handleFirstName" />
      <input type="text" placeholder="Lastname" :v-model="lastNameInput" @input="handleLastName" />
      <!-- <el-input placeholder="Firstname" :v-model="firstNameInput" @input="test"></el-input> -->
      <!-- {{ firstNameInput }} -->
      <!-- <el-input placeholder="Lastname" :v-model="lastNameInput" @input="test"></el-input> -->
      <el-button @click="add">Add</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'index',
})

export default class Index extends Vue {
  people: any = [];
  firstNameInput: any = null;
  lastNameInput: any = null;
  //lastNameInput: string = "sssss";

  // data() {
  //   return {
  //     users: [
  //       {id: 1, firstName: 'user1', lastName: 'last user1'}
  //     ],
  //     firstNameInput: "",
  //     howdy: "",
  //     // lastNameInput: ""
  //   }
  // }
  data() {
return { firstNameInput: ""}
  }
  handleNameChange() {
console.log("eeeeee", this.firstNameInput, "event", Event)
  }

  test(e: any) {
    console.log("in test", e)
    // this.firstNameInput = e.target.value
  }

  handleFirstName(e: any) {
    this.firstNameInput = e.target.value;
  }
  handleLastName(e: any) {
    this.lastNameInput = e.target.value;
  }

  add() {
    console.log("first name", this.firstNameInput)
    const person = {
      firstName: this.firstNameInput,
      lastName: this.lastNameInput
    }
    this.people = this.$store.commit('SET_PEOPLE', person)
  }

  remove(person: any) {
    this.people = this.$store.commit('GET_PEOPLE', person)
  }

}
</script>

<style scoped>
.table-container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-container {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.el-input {
  margin-right: 2rem;
}

table, th, td {
  border: 1px solid black;
  padding: 15px;
}
</style>
