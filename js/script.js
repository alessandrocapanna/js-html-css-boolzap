// NOTE: per l'orario del messaggio
var data = new Date();
var Hh, Mm;
Hh = data.getHours() + ":";
Mm = data.getMinutes();
var ora = Hh + Mm

// NOTE: al click su input cambio icona per invio mex
var invioMessaggio = $('.bot-bar i:last-child');
$('.bot-bar input').click(
  function (){
    $(invioMessaggio).removeClass('fa-microphone');
    $(invioMessaggio).addClass('fa-paper-plane');
  }
);
// NOTE: al click su icona invio mex e lui risponde ok
$(invioMessaggio).click(
  function(){
    var messaggioInviato = '<p class="messaggi-inviati">' + $('.bot-bar input').val() + '<span>' + ora + '</span>'+ '</p>';
    $('.messaggi ').append(messaggioInviato);
    $('.bot-bar input').val('');

    // NOTE: dopo un secondo risponde ok
    countDown(1);
    function countDown(secondi){
      var secondiCount = setInterval(function(){
        console.log(secondi);
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
