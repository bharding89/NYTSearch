
$("#buttons").on("click", function() {
	alert("I am in the click section");
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var searchValue = $("term");
	var recordsNum = $("recordsNumber");
	var startYr = $("startYear");
	var endYr = $("endYear");

	url += '?' + $.param({
	  'api-key': "517f1bb596664f9c86a57d581d652447",
	  'q': searchValue ,
	  'begin_date': startYr,
	  'end_date': endYr,
	  'page': recordsNum,		  
	  'sort': "newest"
	 }); 
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(results) {
	 alert(result);
	  console.log(result);
	  $("inputResults").append(results.doc[0].source);
	}).fail(function(err) {
	  throw err;
	});
});