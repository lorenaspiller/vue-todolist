/*
Descrizione:
Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/

var app = new Vue({
  el: '#to-do-list',
  data: {
    list: ["comprare zucchero", "comprare mascarpone", "comprare savoiardi", "comprare caffè", "comprare uova"],
    newItem: ""
  },
  methods: {
    deleteItem: function (itemIndex) {
      // console.log(itemIndex);
      this.list.splice(itemIndex, 1);
    },
    addItem: function () {
      if (this.newItem !== "") {
        this.list.push(this.newItem);
        this.newItem = "";
      }
    }
  }

})
