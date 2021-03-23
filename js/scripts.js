$(document).ready(function () {
  $("button#hello").click(function () {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function () {
      alert('Are you you want to delete?');
    });
    $("ul#webpage").children("li").first().click(function () {
      alert('hi');
    });
    $("ul#user").children("li").first().click(function () {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function () {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function () {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $('li').css('background-color', 'green');
  });

  $("button#stop").click(function () {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $('li').css('background-color', 'green');
  });
  /*$("#salad").click(function () {
    $("h2#salad").fadeToggle();
  });*/
  $("#blueBkg").click(function () {
    $("body").addClass("bkgBlue");
  })
  $("#btnblueTxt").click(function () {
    $("body").addClass("bodytxtBlue");
  });
  $("#salad").mouseup(function () {
    $("#salad").after("How are you today?");
  });

});