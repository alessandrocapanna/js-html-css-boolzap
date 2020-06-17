// NOTE: per l'orario del messaggio
var data = new Date();
var Hh, Mm;
Hh = data.getHours() + ":";
Mm = data.getMinutes().toString();
if (Mm.toString().length < 2) {
  Mm = '0'+ Mm;
}
var ora = Hh + Mm

// NOTE: al click su input cambio icona per invio mex
var invioMessaggio = $('.bot-bar i:last-child');
$('.bot-bar input').click(
  function (){
    $('i.fa-microphone').hide();
    $('i.fa-paper-plane').show();
  }
);
// NOTE: al click su icona invio mex e lui risponde ok
$('i.fa-paper-plane').click(
  function(){
    var messaggioInviato = '<p class="messaggi-inviati">' + $('.bot-bar input').val() + '<span>' + ora + '</span>'+ '</p>';
    $('.messaggi ').append(messaggioInviato);
    $('.bot-bar input').val('');
    // NOTE: rimetto icona del microfono
    $('.bot-bar i.fa-paper-plane').hide();
    $('.bot-bar i.fa-microphone').show();

    // NOTE: dopo un secondo risponde ok
    countDown(1);
    function countDown(secondi){
      var secondiCount = setInterval(function(){
        if (secondi == 0) {
          clearInterval(secondiCount);
          var messaggioRicevuto = '<p class="messaggi-ricevuti">' + 'ok' + '<span>' + ora + '</span>'+ '</p>';
          $('.messaggi ').append(messaggioRicevuto);
        }else {
          secondi--;
        }
      }, 1000);
    }
  }
);


// NOTE: per il search
// var ricercaNome = $('.search input').val();
// var contatti = [];
// contatti.push()
// if ($('.search input').val().includes() ) {
//
// }
