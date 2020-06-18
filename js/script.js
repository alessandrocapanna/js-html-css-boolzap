// $(document).ready(
//   function(){
//     // NOTE: per l'orario del messaggio
//     var data = new Date();
//     var Hh, Mm;
//     Hh = data.getHours() + ":";
//     Mm = data.getMinutes().toString();
//     if (Mm.toString().length < 2) {
//       Mm = '0'+ Mm;
//     }
//     var ora = Hh + Mm
//
//     // NOTE: al click su input cambio icona per invio mex
//     var invioMessaggio = $('.bot-bar i:last-child');
//     $('.bot-bar input').click(
//       function (){
//         $('i.fa-microphone').hide();
//         $('i.fa-paper-plane').show();
//       }
//     );
//     // NOTE: al click su icona invio il mex e lui risponde ok
//     $('i.fa-paper-plane').click(
//       function(){
//         // NOTE: invio del mex
//         var messaggioInviato = '<p class="messaggi-inviati">' + $('.bot-bar input').val() + '<span>' +   '<i class="fas fa-chevron-down hidden">'+'</i>' + ora + '</i>' + '</span>' + '<span class="drop hidden">' + 'Elimina messaggio' + '</span>' + '</p>';
//         $('.messaggi ').append(messaggioInviato);
//         $('.bot-bar input').val('');
//         // NOTE: rimetto icona del microfono
//         $('.bot-bar i.fa-paper-plane').hide();
//         $('.bot-bar i.fa-microphone').show();
//
//         // NOTE: dopo un secondo risponde ok
//         rispostaCountAndDownEliminaMessaggio(1);
//         function rispostaCountAndDownEliminaMessaggio(secondi){
//           var secondiCount = setInterval(function(){
//             if (secondi == 0) {
//               clearInterval(secondiCount);
//               var messaggioRicevuto = '<p class="messaggi-ricevuti">' + 'ok' + '<span>'  + '<i class="fas fa-chevron-down hidden">'+'</i>'+ ora + '</span>' + '<span class="drop hidden">' + 'Elimina messaggio' + '</span>' + '</p>';
//               $('.messaggi ').append(messaggioRicevuto);
//             }else {
//               secondi--;
//             }
//
//             // NOTE:per cancellare il messaggio
//             // mouseenter al messaggio mostro icona
//             $('.messaggi .messaggi-inviati,.messaggi .messaggi-ricevuti').mouseenter(
//               function(){
//                 $(this).find('i').removeClass('hidden');
//
//                 //al click sull'icona faccio vedere il cosetto x eliminare
//                 $('.messaggi .messaggi-inviati i,.messaggi .messaggi-ricevuti i').click(
//                   function(){
//                     $('.drop').addClass('hidden');
//                     $(this).parents('span').siblings('.drop').removeClass('hidden');
//
//                     // NOTE:funzione per eliminare messaggio
//                     $('span.drop').click(
//                       function(){
//                         $(this).parents('p').hide();
//                       }
//                     );
//                   }
//                 );
//               }
//             );
//             // mouseleave al messaggio levo icona
//             $('.messaggi .messaggi-inviati,.messaggi .messaggi-ricevuti').mouseleave(
//               function(){
//                 $(this).find('i').addClass('hidden');
//               }
//             );
//
//           }, 1000);
//         }
//       }
//     );
//
//
//     // NOTE: per il search dei contatti
//     $('.search input').keyup(
//       function() {
//         var value = $(this).val().toLowerCase();
//         $('.contatti p').each(
//           function() {
//             // NOTE: copiata e incollata da w3sc
//             // $(this).parents('.singolo-contatto').toggle($(this).text().toLowerCase().indexOf(value) > -1);
//
//             // prova mia che funziona  :D
//             if ( $(this).text().toLowerCase().includes(value)) {
//               $(this).parents('li').show();
//             } else {
//               $(this).parents('li').hide();
//             }
//           });
//       }
//     );
//
//     // NOTE: per cambiare chat al click del contatto
//     $('.contatti li').click(
//       function(){
//         var dataContact = $(this).attr('data-contact');
//
//
//         // NOTE: metto hidden a tutte
//         $('.singola-chat').addClass('hidden');
//
//         // NOTE: levo hidden per cambiare chat
//         var selettore ='.singola-chat[data-chat="' + dataContact + '"]'
//         $(selettore).removeClass('hidden');
//
//
//         // NOTE: per cambiare nome e img al contatto con cui chatto
//         // var fotoNome = $(this).children('img,p.titolo').clone();
//         // $('.col-dx utente .singolo-contatto').append(fotoNome);
//       }
//     );
//
//   }
// );
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
    $('.bot-bar input').click(
      function (){
        $('i.fa-microphone').hide();
        $('i.fa-paper-plane').show();
      }
    );



    $('.messaggi .messaggi-inviati,.messaggi .messaggi-ricevuti').mouseenter(
      function(){
        $(this).children('i').removeClass('hidden');

        //al click sull'icona faccio vedere il cosetto x eliminare
        $('.messaggi .messaggi-inviati i,.messaggi .messaggi-ricevuti i').click(
          function(){
            $('.drop').addClass('hidden');
            $(this).parents('span').siblings('.drop').removeClass('hidden');

            // NOTE:funzione per eliminare messaggio
            $('span.drop').click(
              function(){
                $(this).parents('p').hide();
              }
            );
          }
        );
      }
    );

    // NOTE: per cambiare chat al click del contatto
    $('.contatti li').click(
      function(){
        var dataContact = $(this).attr('data-contact');


        // NOTE: metto hidden a tutte
        $('.messaggi').addClass('hidden');

        // NOTE: levo hidden per cambiare chat
        var selettore ='.messaggi[data-chat="' + dataContact + '"]'
        $(selettore).removeClass('hidden');
        invioMessaggioConRisposta();


        // NOTE: per cambiare nome e img al contatto con cui chatto
        // var fotoNome = $(this).children('img,p.titolo').clone();
        // $('.col-dx utente .singolo-contatto').append(fotoNome);

      }
    );


    // NOTE:per cancellare il messaggio
    // mouseenter al messaggio mostro icona
    // $('.col-dx .messaggi p').mouseenter(
    //   function(){
    //
    //     alert('ciao');
        // $(this).children('span>i').removeClass('hidden');


        //al click sull'icona faccio vedere il cosetto x eliminare
        // $('.messaggi-inviati i,.messaggi-ricevuti i').click(
        //   function(){
        //     $('.drop').addClass('hidden');
        //     $(this).parents('span').siblings('.drop').removeClass('hidden');
        //
        //     // NOTE:funzione per eliminare messaggio
        //     $('span.drop').click(
        //       function(){
        //         $(this).parents('p').hide();
        //       }
        //     );
        //   }
        // );
    //   }
    // );
    // mouseleave al messaggio levo icona
    // $('.messaggi .messaggi-inviati,.messaggi .messaggi-ricevuti').mouseleave(
    //   function(){
    //     $(this).find('i').addClass('hidden');
    //   }
    // );

    // $('p.messaggi-ricevuti').mouseenter(
    //   function(){
    //     console.log(this);
    //     $(this).find('i.hidden').removeClass('hidden');
    //   }
    // );


    // NOTE: al click su icona invio
    function invioMessaggioConRisposta(){
      $('i.fa-paper-plane').click(
        function(){
          // NOTE: invio del mex
          var messaggioInviato = '<p class="messaggi-inviati">' + $('.bot-bar input').val() + '<span>' +   '<i class="fas fa-chevron-down hidden">'+'</i>' + ora + '</i>' + '</span>' + '<span class="drop hidden">' + 'Elimina messaggio' + '</span>' + '</p>';
          $('.messaggi ').append(messaggioInviato);
          $('.bot-bar input').val('');
          // NOTE: rimetto icona del microfono
          $('.bot-bar i.fa-paper-plane').hide();
          $('.bot-bar i.fa-microphone').show();

          rispostaCount(1);

        }
      );
    }

    // NOTE: funzione per risposta
    function rispostaCount(secondi){
      var secondiCount = setInterval(function(){
        if (secondi == 0) {
          clearInterval(secondiCount);
          var messaggioRicevuto = '<p class="messaggi-ricevuti">' + 'ok' + '<span>'  + '<i class="fas fa-chevron-down hidden">'+'</i>'+ ora + '</span>' + '<span class="drop hidden">' + 'Elimina messaggio' + '</span>' + '</p>';
          $('.messaggi ').append(messaggioRicevuto);
        }else{
          secondi--;
        }
      },1000);
    }


  }
);
