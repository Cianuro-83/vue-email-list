console.log("Ciao Cianuro... Oggi l'esercizio è VUE EMAILO LIST ");
//---------------------------------------------------------------------------
// ||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
//---------------------------------------------------------------------------
const { createApp } = Vue;

createApp({
  data() {
    return {
      titolo: "lista email",
      eMail: [],
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
          this.email.push(rispostaServer.data);
          console.log(this.eMail);
          let result = rispostaServer.data.response;
          console.log(result);
        });
    },
    //---------------------------------------------------------------------------
    // FINE METODI
  },
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  // |||||||||||||||||||||||||||| VUE ||||||||||||||||||||||||||||
}).mount("#app");
// ---------------------------------------------------------------------------
