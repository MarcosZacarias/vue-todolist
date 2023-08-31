const { createApp } = Vue;

// | To Do List
const toDoList = [
  {
    text: "Fare una lista",
    done: false,
  },
  {
    text: "Aggiungere una nuova attività",
    done: false,
  },
  {
    text: "Eliminare una attività",
    done: false,
  },
];

createApp({
  data() {
    return {
      toDoList,
    };
  },

  methods: {},

  created() {
    console.log(this.toDoList);
  },
}).mount("#app");
