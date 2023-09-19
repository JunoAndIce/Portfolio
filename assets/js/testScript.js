var marginTopValues = ["20px", "20px", "20px", "20px", "20px"]; // Add more values as needed
var currentIndex = marginTopValues.length - 1; // Start at the end of the array

function loadMoreInfo(className) {
  var elements = $("." + className).sort(function(a, b) {
    return $(a).data('order') - $(b).data('order');
  });
  if(elements.length > 0) {
    console.log(currentIndex)
    var marginTop = marginTopValues[currentIndex]; // Get the marginTop value for this div
    $(elements[0]).css('opacity', 0).show().animate({
      opacity: 1,
      marginTop: marginTop
    }, 500, function() {
      $(this).removeClass(className); // Remove the class after the animation completes
    });
    currentIndex--; // Move to the next value in the array
  }
}

$(document).ready(function() {
  var words = ["Creative", "Innovator", "Designer", "Developer"]; // words to be typed
  var i = 0;
  var text = "";
  var wordIndex = 0;

  // function to type out words
  function type() {
    var word = words[wordIndex];
    if(i < word.length) {
      text += word[i];
      $("#animated-text").text("The " + text);
      $("#cursor").text('|'); // Add cursor
      i++;
    } else {
      // stop typing and start deleting after a word is typed
      clearInterval(typing);
      setTimeout(function() {
        deleting = setInterval(deleteWord, 100);
      }, 2000);
    }
  }
  
  // Remove cursor when finish typing and start deleting
  function deleteWord() {
    var word = words[wordIndex];
    if(i > 0) {
      text = text.slice(0, -1);
      $("#animated-text").text("The " + text);
      i--;
    } else {
      // stop deleting and start typing next word
      clearInterval(deleting);
      $("#cursor").text(''); // Remove cursor
      if(wordIndex < words.length - 1) {
        wordIndex++;
      } else {
        wordIndex = 0;
      }
      text = "";
      typing = setInterval(type, 50);
    }
  }

  // start typing
  var typing = setInterval(type, 50);
});

const getNextPage = () => {

}

const goToPage = (page) => {
  document.getElementById(page).scrollIntoView({behavior: 'smooth'});
}

const strategies = {
  'desktop': (wrapper) => {
    wrapper.addEventListener("wheel", event => {
      event.preventDefault();
      event.stopPropagation();
      uss.scrollXBy(event.deltaY, wrapper, null, false);
    }, { passive: false });
  },
  'mobile': (wrapper) => {
    wrapper.addEventListener('touchmove', (event) => {
      event.preventDefault();
      let moveX = startX - e.touches[0].clientX;
      uss.scrollXBy(moveX, wrapper, null, false);
    }, { passive: false });
  },
  'tablet': (wrapper) => {
    wrapper.addEventListener('touchmove', (event) => {
      event.preventDefault();
      let moveX = startX - e.touches[0].clientX;
      uss.scrollXBy(moveX, wrapper, null, false);
    }, { passive: false });
  }
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }
  return "desktop";
}

const init = () => {
  const wrapper = document.getElementsByClassName("outer-wrapper")[0];
  let whateverEaseFunctionYouWant = scrollDistance => { return scrollDistance / 15 + 1 };

  uss.hrefSetup();

  const deviceType = getDeviceType();

  strategies[deviceType](wrapper);

  uss.setXStepLengthCalculator(whateverEaseFunctionYouWant, wrapper);
}



const openMenu = (event) => {
  event.classList.toggle("change");
  const listItems = $(".navbar li");
  const total = listItems.length;
  const hasChangeClass = event.classList.contains("change");

  listItems.each(function (i) {
    const delay = hasChangeClass ? 50 * i : 50 * (total - i);
    const startOpacity = hasChangeClass ? 0 : 1;
    const endOpacity = hasChangeClass ? 1 : 0;
    const displayStyle = 'inline-block';

    $(this).delay(delay).css('opacity', startOpacity).show().css('display', displayStyle).animate({opacity: endOpacity}, 200, function() {
      if (!hasChangeClass) {
        $(this).hide();
      }
    });
  });
}