console.log("Ciao Cianuro... Oggi l'esercizio è VUE EMAIL LIST ");
//---------------------------------------------------------------------------
// ||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
//---------------------------------------------------------------------------
const { createApp } = Vue;

createApp({
  data() {
    return {
      titolo: "lista email",
      eMail: [],
      visible: false,
    };
    //---------------------------------------------------------------------------
    //FINE VUE DATA//
  },
  // ---------------------------------------------------------------------------
  // INIZIO METODI

  methods: {
    recuperaMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((rispostaServer) => {
          console.log(rispostaServer);
          this.eMail.push(rispostaServer.data.response);
          console.log("ciao ", this.eMail);
        });
    },
    generaMail() {
      this.visible = true;
    },
    svuotaMail() {
      this.visible = false;
      this.eMail = [];
      for (let i = 0; i < 10; i++) {
        this.recuperaMail();
      }
    },
    //---------------------------------------------------------------------------
    // FINE METODI
  },
  //---------------------------------------------------------------------------
  //   HOOKS
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.recuperaMail();
    }
  },
  //---------------------------------------------------------------------------
  // |||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
}).mount("#app");
// ---------------------------------------------------------------------------
