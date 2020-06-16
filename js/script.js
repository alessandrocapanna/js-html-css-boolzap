var invioMessaggio = $('.bot-bar i:last-child');
$('.bot-bar input').click(
  function (){
    $(invioMessaggio).removeClass('fa-microphone');
    $(invioMessaggio).addClass('fa-paper-plane');
  }
);
$(invioMessaggio).click(
  function(){
    var messaggio = '<li class="messaggi-inviati">' + $('.bot-bar input').val() + '</li>';
    $('.messaggi ul').append(messaggio);
  }
);
