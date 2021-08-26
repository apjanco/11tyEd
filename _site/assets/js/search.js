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
  title: "A Julia de Burgos",
  author: "Julia de Burgos",
  layout: "poem",
  content: undefined,
  id: 0
});
index.addDoc({
  title: "Delayed till she had ceased to know",
  author: "Emily Dickinson",
  layout: "poem",
  content: undefined,
  id: 1
});
index.addDoc({
  title: "Dreams",
  author: "Langston Hughes",
  layout: "poem",
  content: undefined,
  id: 2
});
index.addDoc({
  title: "My poem",
  author: "Alex Gil",
  layout: "poem",
  content: undefined,
  id: 3
});
index.addDoc({
  title: "O Captain! My Captain!",
  author: "Walt Whitman",
  layout: "poem",
  content: undefined,
  id: 4
});
index.addDoc({
  title: "The Fish in the Freckle",
  author: "A Door Mouse",
  layout: "poem",
  content: undefined,
  id: 5
});
index.addDoc({
  title: "Narrative of the Life of Frederick Douglass",
  author: "Frederick Douglass",
  layout: "narrative",
  content: undefined,
  id: 6
});
index.addDoc({
  title: "New Text",
  author: "Foo Bar",
  layout: "narrative",
  content: undefined,
  id: 7
});
index.addDoc({
  title: "A Raisin in the Sun",
  author: "Lorraine Hansberry",
  layout: "narrative",
  content: undefined,
  id: 8
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)
var store = [{
  "title": "A Julia de Burgos",
  "author": "Julia de Burgos",
  "layout": "poem",
  "link": "/texts/a-julia-de-burgos.html",
}
,{
  "title": "Delayed till she had ceased to know",
  "author": "Emily Dickinson",
  "layout": "poem",
  "link": "/texts/delayed-till-she-had-ceased-to-know.html",
}
,{
  "title": "Dreams",
  "author": "Langston Hughes",
  "layout": "poem",
  "link": "/texts/dreams.html",
}
,{
  "title": "My poem",
  "author": "Alex Gil",
  "layout": "poem",
  "link": "/texts/my-poem.html",
}
,{
  "title": "O Captain! My Captain!",
  "author": "Walt Whitman",
  "layout": "poem",
  "link": "/texts/o-captain!-my-captain!.html",
}
,{
  "title": "The Fish in the Freckle",
  "author": "A Door Mouse",
  "layout": "poem",
  "link": "/texts/the-fish-in-the-freckle.html",
}
,{
  "title": "Narrative of the Life of Frederick Douglass",
  "author": "Frederick Douglass",
  "layout": "narrative",
  "link": "/texts/narrative-of-the-life-of-frederick-douglass.html",
}
,{
  "title": "New Text",
  "author": "Foo Bar",
  "layout": "narrative",
  "link": "/texts/new-text.html",
}
,{
  "title": "A Raisin in the Sun",
  "author": "Lorraine Hansberry",
  "layout": "narrative",
  "link": "/texts/a-raisin-in-the-sun.html",
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
