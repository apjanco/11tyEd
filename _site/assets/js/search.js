// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

// Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

// Add to this index the proper metadata from the Jekyll content

index.addDoc({
  title: "Black radicalism and the Soviet Union",
  author: "Group 3 ",
  layout: "narrative",
  content: undefined,
  id: 0
});
index.addDoc({
  title: "Indigenous populations & language revitalization",
  author: "Group 1",
  layout: "narrative",
  content: undefined,
  id: 1
});
index.addDoc({
  title: " public health + inequality in Russia",
  author: "Group 5",
  layout: "narrative",
  content: undefined,
  id: 2
});
index.addDoc({
  title: "Queer rights and activism in Slovenia, Croatia, and Poland from 1945 to the present",
  author: "Group 2",
  layout: "narrative",
  content: undefined,
  id: 3
});
index.addDoc({
  title: "Organized crime and politics in Central Asia",
  author: "Group 8",
  layout: "narrative",
  content: undefined,
  id: 4
});
index.addDoc({
  title: "Soviet and Russian foreign policy",
  author: "Group 6",
  layout: "narrative",
  content: undefined,
  id: 5
});
index.addDoc({
  title: "Underground music in Soviet Union, Eastern Europe, and Russia",
  author: "Group 8",
  layout: "narrative",
  content: undefined,
  id: 6
});
index.addDoc({
  title: "This one has a timeline ",
  author: "Andy",
  layout: "timeline",
  content: undefined,
  id: 7
});
index.addDoc({
  title: "Representations of race and the other in Soviet science fiction and science",
  author: "Group 4",
  layout: "narrative",
  content: undefined,
  id: 8
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)
var store = [{
  "title": "Black radicalism and the Soviet Union",
  "author": "Group 3 ",
  "layout": "narrative",
  "link": "/texts/black-radicalism-and-the-soviet-union.html",
}
,{
  "title": "Indigenous populations & language revitalization",
  "author": "Group 1",
  "layout": "narrative",
  "link": "/texts/indigenous-populations-and-language-revitalization.html",
}
,{
  "title": " public health + inequality in Russia",
  "author": "Group 5",
  "layout": "narrative",
  "link": "/texts/public-health-+-inequality-in-russia.html",
}
,{
  "title": "Queer rights and activism in Slovenia, Croatia, and Poland from 1945 to the present",
  "author": "Group 2",
  "layout": "narrative",
  "link": "/texts/queer-rights-and-activism-in-slovenia-croatia-and-poland-from-1945-to-the-present.html",
}
,{
  "title": "Organized crime and politics in Central Asia",
  "author": "Group 8",
  "layout": "narrative",
  "link": "/texts/organized-crime-and-politics-in-central-asia.html",
}
,{
  "title": "Soviet and Russian foreign policy",
  "author": "Group 6",
  "layout": "narrative",
  "link": "/texts/soviet-and-russian-foreign-policy.html",
}
,{
  "title": "Underground music in Soviet Union, Eastern Europe, and Russia",
  "author": "Group 8",
  "layout": "narrative",
  "link": "/texts/underground-music-in-soviet-union-eastern-europe-and-russia.html",
}
,{
  "title": "This one has a timeline ",
  "author": "Andy",
  "layout": "timeline",
  "link": "/texts/this-one-has-a-timeline.html",
}
,{
  "title": "Representations of race and the other in Soviet science fiction and science",
  "author": "Group 4",
  "layout": "narrative",
  "link": "/texts/representations-of-race-and-the-other-in-soviet-science-fiction-and-science.html",
}
]

// Query
var qd = {}; // Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  // The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
