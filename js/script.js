$(document).ready(
  function(){
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
    $('.bot-bar input').keypress(
      function (event){
        $('i.fa-microphone').hide();
        $('i.fa-paper-plane').show();
        var messaggioVal = $('.bot-bar input').val();
        if ((event.which == 13) && (messaggioVal != '') ){
          invioMessaggioConRisposta();
        }
      }
    );
    // NOTE: per rimettere il microfono
    $('.bot-bar input').blur(
      function (){
        $('i.fa-microphone').show();
        $('i.fa-paper-plane').hide();
      }
    );


    // NOTE: per il search dei contatti
    $('.search input').keyup(
      function() {
        var value = $(this).val().toLowerCase();

        $('.contatti p').each(
          function() {
            if ( $(this).text().toLowerCase().includes(value)) {
              $(this).parents('li').show();
            } else {
              $(this).parents('li').hide();
            }
          });
      }
    );

    // NOTE: per cancellare messaggio
    $(document).on('mouseenter', '.messaggi .messaggi-inviati,.messaggi .messaggi-ricevuti', function() {
      // NOTE: mostro icona
      $(this).find('i').removeClass('hidden');
    });
    // al click sull'icona faccio vedere la drop x eliminare
    $(document).on('click', '.messaggi .messaggi-inviati i,.messaggi .messaggi-ricevuti i',
      function(){
        $('.messaggi i').not(this).parents('span').siblings('.drop').removeClass('active');
        $(this).parents('span').siblings('.drop').toggleClass('active');

        // NOTE:funzione per eliminare messaggio
        $('span.drop').click(
          function(){
            $(this).parents('p').remove();
          }
        );
      }
    );
    // mouseleave al messaggio levo icona
    $(document).on('mouseleave', '.messaggi .messaggi-inviati,.messaggi .messaggi-ricevuti',
      function(){
        $(this).find('i').addClass('hidden');
      }
    );


    // NOTE: per cambiare chat al click del contatto
    $('.contatti li').click(
      function(){
        // NOTE: prendo immagine e nome del contatto
        var imgClone = $(this).find('img').attr('src');
        var nomeClone = $(this).find('p.titolo').text();

        // NOTE: e li cambio a secoda del contatto cliccato
        var imgAvatar = $('.col-dx .utente').find('img').attr('src', imgClone);
        var nomeAvatar = $('.col-dx .utente').find('p.titolo').text(nomeClone).append('<br>' + '<span class="sottotitolo">'+'ultimo accesso: mai'+ '</span>');

        var dataContact = $(this).attr('data-contact');

        // NOTE: metto hidden a tutte
        $('.messaggi').addClass('hidden');
        $('.messaggi').removeClass('active');

        // NOTE: levo hidden per cambiare chat
        var selettore ='.messaggi[data-chat="' + dataContact + '"]'
        $(selettore).removeClass('hidden').addClass('active');

      }
    );


    // NOTE: funzione per invio del messaggio con la funziona della risposta
    function invioMessaggioConRisposta(){
      // NOTE: invio del mex
      var messaggioInviato = '<p class="messaggi-inviati">' + $('.bot-bar input').val() + '<span>' +   '<i class="fas fa-chevron-down hidden">'+'</i>' + ora + '</i>' + '</span>' + '<span class="drop">' + 'Elimina messaggio' + '</span>' + '</p>';
      $('.messaggi.active').append(messaggioInviato);
      $('.bot-bar input').val('');
      // NOTE: rimetto icona del microfono
      $('.bot-bar i.fa-paper-plane').hide();
      $('.bot-bar i.fa-microphone').show();

      rispostaCount(1);

      // NOTE: per scolltop
      $('.messaggi.active').scrollTop($('.messaggi.active').prop('scrollHeight'));
    }


    // NOTE: funzione per risposta
    function rispostaCount(secondi){
      var secondiCount = setInterval(function(){
        if (secondi == 0) {
          clearInterval(secondiCount);
          var messaggioRicevuto = '<p class="messaggi-ricevuti">' + 'ok' + '<span>'  + '<i class="fas fa-chevron-down hidden">'+'</i>'+ ora + '</span>' + '<span class="drop">' + 'Elimina messaggio' + '</span>' + '</p>';
          $('.messaggi.active ').append(messaggioRicevuto);
          $('.messaggi.active').scrollTop($('.messaggi.active').prop('scrollHeight'));
        }else{
          secondi--;
        }
      },1000);
    }

  }
);
