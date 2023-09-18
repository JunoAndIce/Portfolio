function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }
  return "desktop";
}

function init() {
  const wrapper = document.getElementsByClassName("outer-wrapper")[0];
  let whateverEaseFunctionYouWant = scrollDistance => { return scrollDistance / 15 + 1 };

  uss.hrefSetup();

  const deviceType = getDeviceType();

  if (deviceType === 'desktop') {
    wrapper.addEventListener("wheel", event => {
      event.preventDefault();
      event.stopPropagation();
      uss.scrollXBy(event.deltaY, wrapper, null, false);
    }, { passive: false });
  } else if (deviceType === 'mobile' || deviceType === 'tablet') {
    wrapper.addEventListener('touchmove', (event) => {
      event.preventDefault();
      let moveX = startX - e.touches[0].clientX;
      uss.scrollXBy(moveX, wrapper, null, false);
    }, { passive: false });
  }

  uss.setXStepLengthCalculator(whateverEaseFunctionYouWant, wrapper);

  let startX = 0;

  wrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, false);
}

function openMenu(event) {
  event.classList.toggle("change");
  if (event.classList.contains("change")) {

    console.log($(".navbar li"))
    const listItems = $(".navbar li");

    listItems.each(function (i) {
      $(this).delay(50 * i).css('opacity', 0).show().css('display', 'inline-block').animate({opacity: 1}, 200);
    });
  } else {
    const listItems = $(".navbar li");

    let total = listItems.length;

    listItems.each(function (i) {
      $(this).css('opacity', 1).show().css('display', 'inline-block').delay(50 * (total - i)).animate({opacity: 0}, 200, function() {
        $(this).hide();
      });
    });
  }
}