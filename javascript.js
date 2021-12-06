var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));

var textArea = $("textarea");
console.log(textArea);

var currentHour = moment().hour();
console.log(currentHour);

for (var i = 0; i < textArea.length; i++) {
  // console.log($(textArea[i]).attr("id"))

  var blockHour = $(textArea[i]).attr("id");
  if (blockHour < currentHour) {
    $(textArea[i]).addClass("past");
  } else if (blockHour === currentHour) {
    $(textArea[i]).addClass("present");
  } else {
    $(textArea[i]).addClass("future");
  }
}
 var text = $(".saveBtn").text();

 localStorage.setItem("texarea", text);
 localStorage.getItem("textarea");

