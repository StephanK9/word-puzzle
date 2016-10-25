$(document).ready(function() {
  $("#blanks form").submit(function(event) {
event.preventDefault();
    var vowels = ('aeiou');
    var sentence = $('input#person1').val();

    for (var i = 0; i < sentence.length; i++) {
    	if (vowels.indexOf(sentence[i]) > -1) {
      	sentence = sentence.replace(sentence[i], "-");
      }
    }
     $("input#person1").hide();
     $(".story").text(sentence);
    console.log(sentence);

});
});
