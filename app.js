// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementsById("nav-bar").style.fontSize = "30px";
  } else {
    document.getElementsById("nav-bar").style.fontSize = "55px";
  }
}

$("#bootstrap").addClass("animated shake");