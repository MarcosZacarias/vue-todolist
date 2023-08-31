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
      alert: {
        alertOn: false,
        alertMode: "",
        alertColor: "",
        alertText: "",
      },
    };
  },

  methods: {
    eliminateTask(index) {
      this.alert.alertOn = true;
      this.alert.alertColor = "alert-danger";
      this.alert.alertText =
        "L'attivita `" + this.toDoList[index].text + "` è stata eliminata";
      this.toDoList.splice(index, 1);
    },

    closeAlert() {
      this.alert.alertOn = false;
      this.alert.alertColor = "";
      this.alert.alertText = "";
    },
  },

  created() {
    console.log(this.toDoList);
  },
}).mount("#app");
