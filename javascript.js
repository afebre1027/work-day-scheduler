var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));

var textArea = $("textarea");

var currentHour = moment().hour();
//console.log(currentHour);

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


$("button").on("click", function () {
  console.log($(this).siblings("textarea").val());
  console.log($(this).siblings("textarea").attr('id'))

  var id = $(this).siblings("textarea").attr('id')

  var saveText = $(this).siblings("textarea").val()
  localStorage.setItem(id, saveText);
});

var nine = localStorage.getItem("9");
console.log(nine);
for (var i=0; i< textArea.length; i ++){
   var id = $(textArea[i]).attr("id");
   var value = localStorage.getItem(id);
   $(textArea[i]).val(value);
}




// var text = $("textarea").text();

// var saveTasks = function () {
//    $("textarea").val();
//   localStorage.setItem("text", text);
// };
// var loadTasks = function () {
//   localStorage.getItem("text");
//   $("textarea").val();
// };

// $("button").on("click", function () {
//   console.log($(textArea).text());
// });
