const { createApp } = Vue;

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
      message: "Hello World",
      toDoList,
    };
  },

  created() {
    console.log(this.toDoList);
  },
}).mount("#app");
