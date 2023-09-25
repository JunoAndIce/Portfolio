const marginTopValues = ["20px", "20px", "20px", "20px", "20px", "20px", "20px", "20px"]; // Add more values as needed
var currentIndex = marginTopValues.length - 1; // Start at the end of the array
let lastClickedImagePath = '';
let lastClickedSmallImagePaths = ['','','',''];
let lastClickedProject = '';

// Define project information in an array of objects
const projects = [
  {
    id: 'Chronoscape',
    largeImagePath: '/Chronoscape/chronoscape.jpg',
    smallImagePaths: [
      '/Chronoscape/chronoscape_2.png',
      '/Chronoscape/chronoscape_3.png',
      '/Chronoscape/chronoscape_4.png',
      '/Chronoscape/chronoscape_5.png',
    ],
  },
  {
    id: 'Showdown',
    largeImagePath: '/Showdown/showdown.png',
    smallImagePaths: [
      '/Showdown/showdown_2.png',
      '/Showdown/showdown_3.png',
      '/Showdown/showdown_4.png',
      '/Showdown/showdown_5.png',
    ],
  },
  {
    id: 'Noobz',
    largeImagePath: '/Noobz/noobz.png',
    smallImagePaths: [
      '/Noobz/noobz_2.png',
      '/Noobz/noobz_3.png',
      '/Noobz/noobz_4.png',
      '/Noobz/noobz_5.png',
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
    }
  ],
  '': [
    '',
    '',
    ''
  ]
  // Add more projects as needed
};

const projectDescriptions = {
  'Chronoscape': 'Chronoscape is a Handlebars.js and Express.js choose your own adventure game built with Node.js, Express.js, MySQL, and Sequelize. The game features a short but interesting story and has the user travel through very familiar locations all written by me!<br><br>Chronoscape was the second project of my UTA Coding Bootcamp and challenged me and my fellow classmates to understand how to use handlebars.js and express.js to build a web application. We chose to build a choose your own adventure game because past students had failed to complete the project, and we took it upon ourselves to truly understand handlebars and implement it like never before.',

  'Showdown': 'Showdown is a React.js and MongoDB project. The game utilizes several npm packages to create a hex-grid shoot-em-out game. You will be timed on how fast you can complete 5 levels of the game and then the scores is saved to a Mongodb database.<br><br>Showdown was the third project of my UTA Coding Bootcamp and challenged my collaborators and I to use React and MongoDB to build a web application that functions seamlessly. We chose to make a React based aim trainer game for our project. ',
  
  'Noobz': 'Noobz is an HTML and CSS project. It functions as a search engine for all video games and brings the most relevant youtube and twitch searches for said video game. The site features a nice sleek design that utilizes the Bulma CSS Framework and uses the YouTube, Twitch, and RAWG Gaming API. <br><br>Noobz was the first project of my UTA Coding Bootcamp and challenged my collaborators and I to use HTML and CSS to build a website that utilizes outside APIs. We chose to make a gaming focused website that utilizes the most prominent gaming APIs in order to build a video game search engine. ',
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
      complete: function() {
        $(this).removeClass(className); // Remove the class after the animation completes
        callback();
      }
    });
  }
};

const loadMoreInfo = (className, buttonDivId) => {
  $("#" + buttonDivId).hide();
  const elements = $("." + className).sort((a, b) => {
    return $(a).data('order') - $(b).data('order');
  });

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

// Function to set up hover and click functionality for a project
function setupProject(project) {
  const { id, largeImagePath, smallImagePaths } = project;
  const selector = `#${id}`;

  const hideElements = () => {
    if (!$(selector).hasClass('clicked')) {
      $('.large_img, .small_img1, .small_img2, .small_img3, .small_img4, .proj_name, .project_text, .project-tech span a, .desc_title').hide();
    }
  };

  const fadeInElements = (duration) => {
    $('.large_img, .small_img1, .small_img2, .small_img3, .small_img4, .proj_name, .project_text, .project-tech span a, .desc_title').fadeIn(duration);
  };

  const updateUI = () => {
    changeImageSource('.large_img', largeImagePath);
    smallImagePaths.forEach((imgPath, i) => {
      changeImageSource(`.small_img${i + 1}`, imgPath);
      changeProjectInfo(`.proj_name`, id);
      changeTechShields(id);
      changeProjectDescription('.project_text', id);
    });
  };

  const handleMouseEnter = () => {
    hideElements();
    updateUI();
    fadeInElements(800);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!$(selector).hasClass('clicked')) {
        changeImageSource('.large_img', lastClickedImagePath);
        lastClickedSmallImagePaths.forEach((imgPath, i) => {
          changeImageSource(`.small_img${i + 1}`, imgPath);
          changeProjectInfo(`.proj_name`, lastClickedProject);
          changeTechShields(lastClickedProject);
          changeProjectDescription('.project_text', lastClickedProject);
        });
        fadeInElements(500);
      }
    }, 0);
  };

  const handleClick = () => {
    $('.item').removeClass('clicked');
    $(selector).addClass('clicked');
    updateUI();
    lastClickedImagePath = largeImagePath;
    lastClickedSmallImagePaths = smallImagePaths;
    lastClickedProject = id;
  };

  $(selector).hover(handleMouseEnter, handleMouseLeave);
  $(selector).click(handleClick);
}

$(document).ready(function () {
  // Set up hover and click functionality for each project
  projects.forEach((project) => {
    setupProject(project);
  });

  // Automatically click the first project
  $('#Chronoscape').click();
});

$(document).ready(function() {
  $('.sI').on('click', function() {
    var smallImgSrc = $(this).attr('src');
    var largeImg = $('.large_img'); // Use id selector for the large image
    var largeImgSrc = largeImg.attr('src');

    // Swap the images
    $(this).attr('src', largeImgSrc);
    largeImg.attr('src', smallImgSrc);
  });
});


$(document).ready(function() {
  let container = $('.scroll_container');
  let scrollAmount = 400; // Change this to the amount you want to scroll
  let scrollSpeed = 800; // Change this to control the speed of the scroll

  $('#up').mousedown(function() {
      container.animate({
          scrollTop: '-=' + scrollAmount
      }, scrollSpeed);
  });

  $('#down').mousedown(function() {
      container.animate({
          scrollTop: '+=' + scrollAmount
      }, scrollSpeed);
  });

  // Stop the animation when the mouseup event is triggered
  $('#up, #down').mouseup(function() {
      container.stop();
  });
});

$(document).ready(function() {
  const words = ["Creative", "Innovator", "Designer", "Developer"]; // words to be typed
  let i = 0;
  let text = "";
  let wordIndex = 0;

  // function to type out words
  const type = () => {
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
  const deleteWord = () => {
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
  let typing = setInterval(type, 50);
});



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
  const hasChangeClass = event.classList.contains("change");

  listItems.each(function (i) {
    const startOpacity = hasChangeClass ? 0 : 1;
    const endOpacity = hasChangeClass ? 1 : 0;
    const pointerEvents = hasChangeClass ? 'auto' : 'none';

    $(this).css('opacity', startOpacity)
      .css('pointer-events', pointerEvents)
      .animate({ opacity: endOpacity }, 500);
  });
};