var data = [{"Name" : "Voyager 1","Mission type":"Voyager","Operator" : "NASA / Jet Propulsion Laboratory","Mission duration":"41 years and 26 days","Launch date":"September 5, 1977, 12:56:00 UTC"},
{"Name" : "Voyager 2","Mission type":"Voyager","Operator" : "NASA / Jet Propulsion Laboratory","Mission duration":"41 years, 1 month and 11 days","Launch date":"August 20, 1977, 14:29:00 UTC, 12:56:00 UTC"},
{"Name":"Curiosity (rover)","Mission type":"Mars rover","Operator":"NASA","duration":"Primary: 668","Launch date":"November 26, 2011, 15:02:00 UTC[3][4][5]"}
];

$(function(){
  fillData();
  addCover();
  blogbody();
  blogTitle();
  BlogImage();
  blogP();
  quote();
  DropBox();
  Author();
  // $("blog").hide();
});

function addCover(){
  $("cover").each(function(i,obj){
    var d1 = $("<div></div>");
    var d2 = $("<div></div>");
    var c = $("<center></center>");
    var i = $("<img>");
    d1.addClass("cover_block");
    d2.addClass("cover_bg");
    d2.css("background-image", 'url("https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg")');
    i.attr("src",$(this).attr("src"));
    i.addClass("img-thumbnail w-50 ml-2");
    c.append(i);
    d1.append(d2,c);
    $(this).append(d1);
  });
}

function blogbody(){
  // $("blog")
  var dr = $("<div></div>");
  var dc1 = $("<div></div>");
  var dc2 = $("<div></div>");
  dr.addClass("row");
  dc1.addClass("col-xl-2 col-md-2 bd-sidebar m-4 pt-4 border-right");
  dc1.append($("sidebar:first"));
  dc2.addClass("col-xl-8 col-md-6");
  dc2.html($("blog").html());
  $("blog").html("");
  dr.append(dc1,dc2);
  $("blog").append(dr);
}

function blogTitle(){
    $("titl").each(function(i,obj){
      var d1 = $("<div></div>");
      var h1 = $("<h3></h3>");
      var p1 = $("<p></p>");
      h1.text($(this).text());
      p1.text($("subt:eq("+i+")").text());
      p1.addClass("ttl-summary");
      d1.addClass("ttl");
      d1.append(h1,p1);
      $(this).text("");
      $("subt:eq("+i+")").text("");
      $(this).append(d1);
    });
}

function BlogImage(){
  $("blogImg").each(function(i,obj){
    i = $("<img/>");
    i.attr("src",$(this).attr("src"));
    i.addClass("img-thumbnail ml-2 mb-2");
    $(this).append(i);
  });
}

function blogP(){
  $("blogp").each(function(){
    p = $("<p></p>");
    p.addClass("blg pl-4");
    p.html($(this).html());
    $(this).html("");
    $(this).append(p,$("<hr>"));
  });
}

function quote(){
  $("quote").each(function(i,obj){
    bq = $("<blockquote></blockquote>");
    // bq.addClass("blockquote");
    p = $("<p></p>");
    p.addClass("mb-0");
    f = $("<footer></footer>");
    p.text($(this).text());
    f.addClass("blockquote-footer");
    console.log($("qsource:eq("+i+")").text());
    f.text($("qsource:eq("+i+")").text());
    $("qsource:eq("+i+")").text("");
    $(this).html("");
    bq.append(p,f);
    $(this).append(bq);
  });
}

function DropBox(){
  $("drop").each(function(i,obj){
    dt = $(this).find("dropTitle");
    db = $(this).find("dropBody");
    $(this).addClass("accordion");
    $(this).attr("id","accordionExample");
    d1 = $("<div></div>");
    d2 = $("<div></div>");
    d3 = $("<div></div>");
    d4 = $("<div></div>");
    b = $("<button></button>");
    h1 = $("<h5></h5>");
    d1.addClass("card");
    d2.addClass("card-header");
    d2.attr("id","header"+i);
    h1.addClass("mb-0");
    b.text(dt.text());
    b.addClass("btn btn-link collapsed");
    b.attr({"type":"button", "data-toggle":"collapse","data-target":"#collapse"+i,"aria-expanded":"false","aria-controls":"collapse"+i});
    d2.append(b);
    d3.attr({"id":"collapse"+i, "aria-labelledby":"heading"+i, "data-parent":"#accordionExample"});
    d3.addClass("collapse");
    d4.addClass("card-body");
    d4.html(db.html());
    d3.append(d4);
    d1.append(d2,d3);
    dt.remove();
    db.remove();
    $(this).append(d1);
  });
}

function Author(){
  $("author").each(function(i,obj){
    d1 = $("<div></div>");
    d2 = $("<div></div>");
    d3 = $("<div></div>");
    h = $("<h3></h3>");
    p = $("<p></p>");
    i = $("<img/>");
    d1.addClass("row Author");
    d2.addClass('col-3');
    d3.addClass('col-9');
    i.attr("src",$(this).find('authorImg').attr("src"));
    i.addClass("img-thumbnail rounded-circle");
    d3.addClass("pt-4");
    h.text($(this).find('authorName').html());
    p.text($(this).find('authorDetails').html());
    d2.append(i);
    d3.append(h);
    d3.append(p);
    d1.append(d2,d3);
    $(this).text("");
    $(this).append($('<hr/>'));
    $(this).append(d1);
  });
}

related_list = ["other posts","other posts","other posts","other posts","other posts"];
next_list = [];

function SideBar(){
  $(".bd-sidebar").each(function(i,obj){
    var d1 = $("<div></div>");
    var d2 = $("<div></div>");
    for(i=0;i<related_list.lenght;i++){
      var t = $("<div></div>");
      var a = $("<a></a>");
      a.text(related_list[i]);
      t.append(a);
      d1.append(t);
    }
    $(this).append(d1);
  });
}
countries = [];
function Countries(){
  for(i=0;i<countries.size();i++){

  }
}

$(document).ready(function () {
   var outputSpan = $('#spanOutput');
   var sliderDiv = $('#slider');

   sliderDiv.slider({
       range: true,
       min: 18,
       max: 100,
       values: [20, 30],
       slide: function (event, ui) {
           outputSpan.html(ui.values[0] + ' - ' + ui.values[1] + ' Years');
       },
       stop: function (event, ui) {
           $('#txtMinAge').val(ui.values[0]);
           $('#txtMaxAge').val(ui.values[1]);
       }
   });

   outputSpan.html(sliderDiv.slider('values', 0) + ' - '
       + sliderDiv.slider('values', 1) + ' Years');
   $('#txtMinAge').val(sliderDiv.slider('values', 0));
   $('#txtMaxAge').val(sliderDiv.slider('values', 1));
});


var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Cycle",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"];
$("#selector").autocomplete({
    source: availableTags,
    messages: {noResults: '',results: function() {}}
});

$( function() {
  var date = new Date();
  var mn = 1955;
  var mx = date.getFullYear();
    $( "#slider-range" ).slider({
    range: true,
    min: mn,
    max: mx,
    values: [ mn, mx ],
    slide: function( event, ui ) {
      $( "#years" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    }
  });
  $( "#years" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );
} );


function fillData(){
  var r = $("results");
  var h = $("#hiden");
  console.log(data.length);
  for(i=0;i<data.length;i++){
    var bp = $("<blogp></blogp>");
    // var bd = $("<div></div>");
    // bp.attr({"data-toggle":"modal", "data-target":"#blogp"+i});
    // bd.attr("id","#blogp"+i);
    // bd.addClass("modal fade");
    // bd.attr({"role":"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"});
    // var j = 2;
    for (var key in data[i]){
      // if(j>0){
        var d = $("<div></div>");
        d.text(key + " : " + data[i][key]);
        bp.append(d);
      // }
      // j-=1;
      // var d2 = $("<div></div>");
      // var d3 = $("<div></div>");
      // var d4 = $("<div></div>");
      // d2.addClass("row");
      // d3.addClass("col-4");
      // d4.addClass("col-6");
      // d3.text(key);
      // d4.text(data[i][key]);
      // d2.append(d3);
      // d2.append(d4);
      // bd.append(d2);
    }
    r.append(bp);
    // h.append(bd);
  }
}
