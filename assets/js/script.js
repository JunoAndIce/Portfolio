var colors = ['blue','green','red','purple','lightblue'];

$(".commission_btn").mouseenter(function() {
  var rand = colors[Math.floor(Math.random() * colors.length)];
  $(this).css('background-color', rand);
});

$(".commission_btn").mouseleave(function() {
  $(this).css("background-color", "");
});

function openMenu(event) {
  event.classList.toggle("change");
  if (event.classList.contains("change")) {
    $(".navbar").removeClass("hidden")
    // $("main").addClass("hidden");
  } else {
    $(".navbar").addClass("hidden")
    $("main").removeClass("hidden");
  }

}

const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  console.log(event)
    scrollContainer.scrollLeft += event.deltaY;
});