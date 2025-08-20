const marginTopValues = ["20px", "20px", "20px", "20px", "20px", "20px", "20px", "20px"]; // Add more values as needed
var currentIndex = marginTopValues.length - 1; // Start at the end of the array
let lastClickedImagePath = '';
let lastClickedSmallImagePaths = ['', '', '', ''];
let lastClickedProject = '';

// Define project information in an array of objects
const projects = [
  {
    id: 'Chronoscape',
    largeImagePath: '/Chronoscape/chronoscape.webp',
    smallImagePaths: [
      '/Chronoscape/chronoscape_2.webp',
      '/Chronoscape/chronoscape_3.webp',
      '/Chronoscape/chronoscape_4.webp',
      '/Chronoscape/chronoscape_5.webp',
    ],
  },
  {
    id: 'Showdown',
    largeImagePath: '/Showdown/showdown.webp',
    smallImagePaths: [
      '/Showdown/showdown_2.webp',
      '/Showdown/showdown_3.webp',
      '/Showdown/showdown_4.webp',
      '/Showdown/showdown_5.webp',
    ],
  },
  {
    id: 'Noobz',
    largeImagePath: '/Noobz/noobz.webp',
    smallImagePaths: [
      '/Noobz/noobz_2.webp',
      '/Noobz/noobz_3.webp',
      '/Noobz/noobz_4.webp',
      '/Noobz/noobz_5.webp',
    ],
  },
  {
    id: 'HWY6',
    largeImagePath: '/hwy6/HWY6.webp',
    smallImagePaths: [
      '/hwy6/HWY6_1.webp',
      '/hwy6/HWY6_2.webp',
      '/hwy6/HWY6_3.webp',
      '/hwy6/HWY6_4.webp',
    ],
  },
  {
    id: 'SCG',
    largeImagePath: '/scg/SCG.webp',
    smallImagePaths: [
      '/scg/SCG_1.webp',
      '/scg/SCG_2.webp',
      '/scg/SCG_3.webp',
      '/scg/SCG_4.webp',
    ],
  },
  {
    id: 'DJAY',
    largeImagePath: '/djay/djay.webp',
    smallImagePaths: [
      '/djay/djay_1.webp',
      '/djay/djay_2.webp',
      '/djay/djay_3.webp',
      '/djay/djay_4.webp',
    ],
  },
  // Add more projects here
];

const projectTechShields = {
  'Chronoscape': [
    {
      src: 'https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black',
      href: 'https://handlebarsjs.com/'
    },
    {
      src: 'https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white',
      href: 'https://expressjs.com/'
    },
    {
      src: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white',
      href: 'https://sequelize.org/'
    },
    {
      src: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white',
      href: 'https://www.npmjs.com/'
    },
    {
      src: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white',
      href: 'https://www.mysql.com/'
    },
    {
      src: 'https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white',
      href: 'https://www.heroku.com/home'
    },
    {
      src: 'https://img.shields.io/badge/Github-5FED83?style=for-the-badge&logo=github&logoColor=black',
      href: 'https://github.com/jmcmillenmusic/chronoscape'
    }
  ],
  'Showdown': [
    {
      src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      href: 'https://reactjs.org/'
    },
    {
      src: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
      href: 'https://www.mongodb.com/'
    },
    {
      src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      src: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white',
      href: 'https://www.npmjs.com/'
    },
    {
      src: 'https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white',
      href: 'https://www.heroku.com/home'
    },
    {
      src: 'https://img.shields.io/badge/Github-5FED83?style=for-the-badge&logo=github&logoColor=black',
      href: 'https://github.com/DrProfDavis/shootem-up-showdown'
    }
  ],
  'Noobz': [
    {
      src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
      src: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      src: 'https://img.shields.io/badge/Github-5FED83?style=for-the-badge&logo=github&logoColor=black',
      href: 'https://github.com/JunoAndIce/Noobz'
    }
  ],
  'HWY6': [
    {
      src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
      src: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      src: 'https://img.shields.io/badge/Github-5FED83?style=for-the-badge&logo=github&logoColor=black',
      href: 'https://github.com/hwysixstudios/HWY6-STUDIOS'
    }
  ],
  'SCG': [
    {
      src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
      src: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      src: 'https://img.shields.io/badge/Github-5FED83?style=for-the-badge&logo=github&logoColor=black',
      href: 'https://github.com/TerryW0610/Spirit-Capital-Group'
    }
  ],
  'DJAY': [
    {
      src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      href: 'https://reactjs.org/'
    },
    {
      src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      src: 'https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white',
      href: 'https://www.npmjs.com/'
    },
    {
      src: 'https://img.shields.io/badge/Bulma-00D1B2?style=for-the-badge&logo=bulma&logoColor=white',
      href: 'https://www.npmjs.com/'
    },
    {
      src: 'https://img.shields.io/badge/Github-5FED83?style=for-the-badge&logo=github&logoColor=black',
      href: 'https://github.com/JunoAndIce/dj-ay'
    }
  ],
  // Add more projects as needed
};

const projectDescriptions = {
  'Chronoscape': 'Chronoscape is a Handlebars.js and Express.js choose your own adventure game built with Node.js, Express.js, MySQL, and Sequelize. The game features a short but interesting story and has the user travel through very familiar locations all written by me!<br><br>Chronoscape was the second project of my UTA Coding Bootcamp and challenged me and my fellow classmates to understand how to use handlebars.js and express.js to build a web application. We chose to build a choose your own adventure game because past students had failed to complete the project, and we took it upon ourselves to truly understand handlebars and implement it like never before.',

  'Showdown': 'Showdown is a React.js and MongoDB project. The game utilizes several npm packages to create a hex-grid shoot-em-out game. You will be timed on how fast you can complete 5 levels of the game and then the scores is saved to a Mongodb database.<br><br>Showdown was the third project of my UTA Coding Bootcamp and challenged my collaborators and I to use React and MongoDB to build a web application that functions seamlessly. We chose to make a React based aim trainer game for our project. ',

  'Noobz': 'Noobz is an HTML and CSS project. It functions as a search engine for all video games and brings the most relevant youtube and twitch searches for said video game. The site features a nice sleek design that utilizes the Bulma CSS Framework and uses the YouTube, Twitch, and RAWG Gaming API. <br><br>Noobz was the first project of my UTA Coding Bootcamp and challenged my collaborators and I to use HTML and CSS to build a website that utilizes outside APIs. We chose to make a gaming focused website that utilizes the most prominent gaming APIs in order to build a video game search engine. ',

  'HWY6': 'HWY 6 is my first attempt at a portfolio website for the HWY 6 Studio. It uses simple HTML, and CSS without any frameworks. The site features a simple design and a gallery to view specific projects. ',

  'SCG': 'Spirit Capital Group is another simple website I built for a client. It uses HTML, CSS and JavaScript, without frameworks. The site features 4 pages, and an updated About me section. The page was a test of my skills and allowed me to work in a cooperative environment with other developers. The site was built with a focus on simplicity and ease of use, allowing users to navigate through the content effortlessly.<br><br>Spirit Capital Group was a project that allowed me to showcase my skills in web development while working with a team. It was a great opportunity to learn how to collaborate effectively and deliver a polished product to the client.',
  'DJAY': 'DJ A.Y. is a React.js project that showcases the work of DJ A.Y. It features a sleek design and a gallery to view specific projects. The site was built with a focus on simplicity and ease of use, allowing users to easily see the relevant content and properly intereact with them. <br><br>DJ A.Y. was a fun site to work on, as it tested my knowledge on react.js and Vite.js. <br><br>https://junoandice.github.io/dj-ay',
  // Add more projects as needed
};

const animateElement = (element, className, index, callback) => {
  if (!$(element).is(':animated')) {
    const marginTop = marginTopValues[index]; // Get the marginTop value for this div
    $(element).css('opacity', 0).show().animate({
      opacity: 1,
      marginTop: marginTop
    }, {
      duration: 500,
      complete: function () {
        $(this).removeClass(className); // Remove the class after the animation completes
        callback();
      }
    });
  }
};

const loadMoreInfo = (className, buttonDivId) => {
  const deviceType = getDeviceType();
  console.log(deviceType);

  const elements = $("." + className).sort((a, b) => {
    return $(a).data('order') - $(b).data('order');
  });

  switch (deviceType) {
    case 'desktop':
      $("#" + buttonDivId).hide();


      if (elements.length > 0) {
        const animateNextElement = (index) => {
          if (index < elements.length) {
            animateElement(elements[index], className, index, () => {
              setTimeout(() => {
                animateNextElement(index + 1);
              }, 100); // Adjust the delay as needed for seamless animation
            });
          }
        };

        animateNextElement(0); // Start animation for the first element
      }
      break;
    case 'mobile':
      $("#" + buttonDivId).hide();
      // $('.about_me_sec-2').addClass('active');
      if (elements.length > 0) {
        const animateNextElement = (index) => {
          if (index < elements.length) {
            animateElement(elements[index], className, index, () => {
              setTimeout(() => {
                animateNextElement(index + 1);
              }, 100); // Adjust the delay as needed for seamless animation
            });
          }
        };

        animateNextElement(0); // Start animation for the first element
      }
      break;
  };
};


// Reusable function to change image source
function changeImageSource(selector, imagePath) {
  $(selector).attr('src', `assets/images/${imagePath}`);
}

// Reusable function to change project info
function changeProjectInfo(selector, projectName) {
  $(selector).text(projectName);
}

// Reusable function to change tech shields
function changeTechShields(projectId) {
  const techShields = projectTechShields[projectId];
  $('.project-tech span a').each(function (index, a) {
    const img = $(a).find('img');
    if (techShields && techShields[index]) {
      $(img).attr('src', techShields[index].src);
      $(a).attr('href', techShields[index].href);
    } else {
      $(img).attr('src', ''); // Set to empty string or a default image URL
      $(a).attr('href', '#'); // Set to '#' or a default URL
    }
  });
}

// Reusable function to change project description
function changeProjectDescription(selector, projectId) {
  $(`${selector} span`).html(projectDescriptions[projectId]);
}

// Function to set up click functionality for a project
function setupProject(project) {
  const { id, largeImagePath, smallImagePaths } = project;
  const selector = `#${id}`;

  const fadeInElements = (duration) => {
    $(
      '.large_img, .small_img1, .small_img2, .small_img3, .small_img4, ' +
      '.proj_name, .project_text, .project-tech span a, .desc_title'
    ).fadeIn(duration);
  };

  const updateUI = () => {
    changeImageSource('.large_img', largeImagePath);
    smallImagePaths.forEach((imgPath, i) => {
      changeImageSource(`.small_img${i + 1}`, imgPath);
    });
    changeProjectInfo('.proj_name', id);
    changeTechShields(id);
    changeProjectDescription('.project_text', id);
  };

  const selectProject = (duration = 500) => {
    $('.item').removeClass('clicked');
    $(selector).addClass('clicked');
    updateUI();
    fadeInElements(duration); 

    // persist last clicked state
    localStorage.setItem('id', id);
    lastClickedImagePath = largeImagePath;
    lastClickedSmallImagePaths = smallImagePaths;
    lastClickedProject = id;
  };

  // click handler
  $(selector).click(() => selectProject());

  // auto-select if this was the last clicked project
  const savedId = localStorage.getItem('id');
  if (savedId === id) {
    selectProject(0); // no fade delay on initial load
  }
}
$(document).ready(function () {
  // Set up hover and click functionality for each project
  projects.forEach((project) => {
    setupProject(project);
  });

  // Automatically click the first project
  const lasClickedProject = localStorage.getItem('id');
  $(`#${lasClickedProject}`).click();
});

$(document).ready(function () {
  $('.sI').on('click', function () {
    var smallImgSrc = $(this).attr('src');
    var largeImg = $('.large_img'); // Use id selector for the large image
    var largeImgSrc = largeImg.attr('src');

    // Swap the images
    $(this).attr('src', largeImgSrc);
    largeImg.attr('src', smallImgSrc);
  });
});


// $(document).ready(function() {
//   let container = $('.scroll_container');
//   let scrollAmount = 400; // Change this to the amount you want to scroll
//   let scrollSpeed = 800; // Change this to control the speed of the scroll

//   $('#up').mousedown(function() {
//       container.animate({
//           scrollTop: '-=' + scrollAmount
//       }, scrollSpeed);
//   });

//   $('#down').mousedown(function() {
//       container.animate({
//           scrollTop: '+=' + scrollAmount
//       }, scrollSpeed);
//   });

//   // Stop the animation when the mouseup event is triggered
//   $('#up, #down').mouseup(function() {
//       container.stop();
//   });
// });

$(function () {
  const deviceType = getDeviceType();

  // config per device
  const config = {
    desktop: {
      gallery: $('#gallery-container'),
      axis: 'top',
      offset: -100,
    },
    mobile: {
      gallery: $('#gallery ul'),
      axis: 'left',
      offset: -100,
    },
  };

  const { gallery, axis, offset } = config[deviceType];
  const items = gallery.find('li');
  const len = items.length;

  let current = 1;

  const first = items.first();
  const second = items.eq(1);
  const last = items.last();
  const secondLast = items.eq(items.length - 2);

  const triggers = $('button');

  /* 1. Clone first and last items for infinite effect */
  first.before(secondLast.clone(true));
  first.before(last.clone(true));
  last.after(second.clone(true));
  last.after(first.clone(true));

  /* 2. Button handlers */
  triggers.on('click', function () {
    if (gallery.is(':animated')) return;

    const delta = this.id === 'prev' ? -1 : 1;

    const animationProps = {};
    animationProps[axis] = '+=' + offset * delta;

    gallery.animate(animationProps, function () {
      current += delta;

      let cycle = current === 0 || current > len;

      if (cycle) {
        current = current === 0 ? len : 1;

        const resetProps = {};
        resetProps[axis] = offset * (current - (axis === 'top' ? 1 : -1));
        // Desktop expects (current-1), mobile had (current+1) offset
        resetProps[axis] = axis === 'top'
          ? offset * (current - 1)
          : offset * (current + 1);

        gallery.css(resetProps);
      }
    });
  });
});


$(document).ready(function () {
  const words = ["Creative", "Innovator", "Designer", "Developer"]; // words to be typed
  let i = 0;
  let text = "";
  let wordIndex = 0;

  // function to type out words
  const type = () => {
    var word = words[wordIndex];
    if (i < word.length) {
      text += word[i];
      $("#animated-text").text("The " + text);
      $("#cursor").text('|'); // Add cursor
      i++;
    } else {
      // stop typing and start deleting after a word is typed
      clearInterval(typing);
      setTimeout(function () {
        deleting = setInterval(deleteWord, 100);
      }, 2000);
    }
  }

  // Remove cursor when finish typing and start deleting
  const deleteWord = () => {
    var word = words[wordIndex];
    if (i > 0) {
      text = text.slice(0, -1);
      $("#animated-text").text("The " + text);
      i--;
    } else {
      // stop deleting and start typing next word
      clearInterval(deleting);
      $("#cursor").text(''); // Remove cursor
      if (wordIndex < words.length - 1) {
        wordIndex++;
      } else {
        wordIndex = 0;
      }
      text = "";
      typing = setInterval(type, 50);
    }
  }

  // start typing
  let typing = setInterval(type, 50);
});

$(document).ready(function () {
  const leftButton = $("#prev");
  const rightButton = $("#next");
  const deviceType = getDeviceType();

  switch (deviceType) {
    case 'desktop':
      leftButton[0].innerHTML = '&#9660';
      rightButton[0].innerHTML = '&#9650';
      break;
    case 'mobile':
      leftButton[0].innerHTML = '&#9664';
      rightButton[0].innerHTML = '&#9654';
      break;
  }
});

const goToPage = (page) => {
  $(".wrapper article").show();
  document.getElementById(page).scrollIntoView({ behavior: 'smooth' });

  const menuButton = document.querySelector('.container');
  if (menuButton.classList.contains('change')) {
    openMenu(menuButton);
  }
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
  const deviceType = getDeviceType();
  event.classList.toggle("change");
  const listItems = $(".navbar li");
  const hasChangeClass = event.classList.contains("change");
  const pointerEvents = hasChangeClass ? 'pointer' : 'none';
  const startOpacity = hasChangeClass ? 0 : 1;
  const endOpacity = hasChangeClass ? 1 : 0;

  listItems.each(function (i) {
    $(this).css('opacity', deviceType === "desktop" ? startOpacity : null)
      .css('display', deviceType === "mobile" ? (hasChangeClass ? 'block' : 'none') : null)
      .css('cursor', pointerEvents);

    if (deviceType === "desktop") {
      if (hasChangeClass) {
        $(this).stop().animate({ opacity: endOpacity }, 500);
      } else {
        $(this).css('opacity', endOpacity);
      }
    }
  });

  if (deviceType === "mobile") {
    const articles = $(".wrapper article");
    // Hide articles when menu is open and show when menu is closed
    if (hasChangeClass) {
      articles.hide(); // or articles.css('display', 'none');
    } else {
      articles.show(); // or articles.css('display', 'block');
    }
  }
}