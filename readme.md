# Titolo: Vue To Do List

## Traccia

**Rifare l'esercizio della to do list.**

Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

**MILESTONE 2**

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**

1. oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

2. cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

## Istruzioni

- Creo una lista statica in HTML

  - Creo una ul con un li

- Creo una base di dati dove inserisco un lista di cose da fare

  - creo un array di oggetti con :
    - Text = "Testo del lavora da fare es. Fare la spesa"
    - Done = una variabile true/false ver vedere se l'attivita è gia stata eseguita

- Creo un ciclo

  - per ogni oggetto nella lista nella base dati
    - creo un elemento dentro la lista in HTML
    - per ogni elemento nella lista inserisco il valore Text dell'oggetto corrispondente

- SE il valore done di un oggetto è vero

  - aggiungo una classe per sbarrare il testo contenuto

- Aggiungo una "X" alla destra per ogni elemento nella lista

  - al click elimino dalla lista l'elemento selezionato
    - Elimino dalla lista, l'elemento con il numero dell'indice della lista, uguale all'indice dell'elemento selezionato

- Creo un nuovo elemento nella lista al click del bottone aggiungi
  - Creo un oggetto _nuova Task_ con :
    - text = al testo inserito dall'utente
    - done = false
  - Copio _nuova Task_ e l'aggiungo alla lista nella base di dati
