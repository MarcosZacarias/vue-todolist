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
      newTaskText: "",
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

    newTask() {
      // Controls input text
      if (this.newTaskText.length < 5) {
        this.alert.alertOn = true;
        this.alert.alertColor = "alert-warning";
        this.alert.alertText = "Inserisci al meno 5 caratteri";
        return;
      }

      if (this.newTaskText.length > 30) {
        this.alert.alertOn = true;
        this.alert.alertColor = "alert-warning";
        this.alert.alertText = "Inserisci al massimo 30 caratteri";
        return;
      }

      // Create new object
      let newTaskObject = {
        text: this.newTaskText,
        done: false,
      };

      // Add object in list
      this.toDoList.unshift(newTaskObject);

      // Print alert Succes
      this.alert.alertOn = true;
      this.alert.alertColor = "alert-success";
      this.alert.alertText =
        "L'attivita `" + newTaskObject.text + "` è stata aggiunta";

      // Reset input
      this.newTaskText = "";
    },
  },

  created() {
    console.log(this.toDoList);
  },
}).mount("#app");
