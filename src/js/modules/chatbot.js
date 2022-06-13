export default function chatbot() {
  $(function () {
    const phrases = [
      "Наш менеджер перезвонит Вам в ближайшее время!",
      "Уточнить детали можно по телефону 123456789",
      "Оставайтесь на связи!",
      "Сегодня прекрасная погода!",
      "С Вами очень приятно общаться!",
    ];
    const hello = "Привет, я бот Пятница!";
    const goodbye = "До свидания!";
    const bye = "Пока!";

    function rPhrases() {
      return phrases[Math.floor(Math.random() * phrases.length)];
    }

    //$("h1").css("color", "red");
    $("#answers").append(`<div class="bot_answ">${hello}</div>`);
    document.getElementById("chatbot").addEventListener("click", function () {
      $("#chatbot").toggleClass("show");
    });
    document.getElementById("answers").addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    document.getElementById("question").addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    document.getElementById("ok").addEventListener("click", (e) => {
      let q = $("#question").val();
      $("#question").val("");
      //alert(q);
      if (q.trim() != "") {
        $("#answers").append(`<div class="human_answ">${q.trim()}</div>`);
        //q = q.toLowerCase();
        let byeLowerCase = bye.substring(0, bye.length - 1).toLowerCase();
        let goodbyeLowerCase = goodbye
          .substring(0, goodbye.length - 1)
          .toLowerCase();

        setTimeout(function () {
          if (q.toLowerCase().search(byeLowerCase) != -1) {
            $("#answers").append(`<div class="bot_answ">${bye}</div>`);
          } else if (q.toLowerCase().search(goodbyeLowerCase) != -1) {
            $("#answers").append(`<div class="bot_answ">${goodbye}</div>`);
          } else if (
            q.toLowerCase().search("привет") != -1 ||
            q.toLowerCase().search("здравствуйте") != -1
          ) {
            $("#answers").append(`<div class="bot_answ" ">${hello}</div>`);
          } else {
            $("#answers").append(`<div class="bot_answ">${rPhrases()}</div>`);
          }
          let chatbot = document.getElementById("chatbot");
          $("#chatbot").animate(
            {
              scrollTop: chatbot.scrollHeight - chatbot.clientHeight,
            },
            500
          );
        }, 1000);
      }

      e.stopPropagation();
      e.preventDefault();
    });
    document
      .getElementById("question")
      .addEventListener("keypress", "keyup", function (e) {
        if (e.keyCode == 13) {
          document.getElementById("ok").addEventListener("click", () => {
            return false;
          });
        }
      });
  });
}
