var mainDiv = document.getElementById('download-form');
var langs = mainDiv.children[4].getElementsByTagName("li");
[].forEach.call(langs, function(lang) {
  var type = lang.querySelector("input[type=checkbox]");
  if(type.checked)
    type.checked = false;
  else
    type.checked = true;
});