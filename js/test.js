(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  $(document).ready(function () {
    // mobile_menu
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $(".slider_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="flaticon-left-arrow"></i>',
        '<i class="flaticon-right-arrow"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
          nav: false,
        },
        1600: {
          items: 1,
          nav: true,
        },
      },
    });

    // for filter
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      },
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter
    $(".counter").counterUp({
      delay: 10,
      time: 10000,
    });

    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup img view */
    $(".img-pop-up").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
      type: "iframe",
    });

    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: "linear", // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: "active", // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: 0, // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "4500", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // blog-page

    //brand-active
    $(".brand-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 7,
        },
      },
    });

    // blog-dtails-page

    //project-active
    $(".project-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="Flaticon flaticon-left-arrow"></i>',
        '<i class="Flaticon flaticon-right-arrow"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 2,
          nav: false,
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        },
      },
    });

    if (document.getElementById("default-select")) {
      $("select").niceSelect();
    }

    //about-pro-active
    $(".details_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
        },
      },
    });
  });

  // resitration_Form
  $(document).ready(function () {
    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: false,
      focus: "#name",

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = "#name";
          }
        },
      },
    });
  });

  //------- Mailchimp js --------//
  function mailChimp() {
    $("#mc_embed_signup").find("form").ajaxChimp();
  }
  mailChimp();

  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
})(jQuery);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".option");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
        setTimeout(() => {
          button.style.display = "none";
        }, 500);
      }
    });
  });
});

// Get the modal
document.getElementById("openTestBtn").onclick = function () {
  document.getElementById("testModal").style.display = "flex";
};

document.querySelector(".close_test").onclick = function () {
  document.getElementById("testModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("testModal")) {
    document.getElementById("testModal").style.display = "none";
  }
  if (event.target == document.getElementById("resultModal")) {
    document.getElementById("resultModal").style.display = "none";
  }
};

document.getElementById("closeResult").onclick = function () {
  document.getElementById("resultModal").style.display = "none";
};

function submitTest() {
  const correctAnswers = {
    q1: "c",
    q2: "c",
    q3: "d",
    q4: "a",
    q5: "a",
    q6: "c",
    q7: "b",
    q8: "c",
    q9: "b",
    q10: "d",
    q11: "a",
    q12: "c",
    q13: "d",
    q14: "b",
    q15: "c",
    q16: "c",
  };

  let score = 0;
  let totalQuestions = 16;
  const form = document.getElementById("softSkillsTest");
  const resultDiv = document.getElementById("result");

  for (let question in correctAnswers) {
    const userAnswer = form.elements[question].value;
    if (userAnswer === correctAnswers[question]) {
      score++;
    }
  }

  let percentage = (score / totalQuestions) * 100;
  let feedback = "";

  if (percentage >= 80) {
    feedback = "Excellent!";
  } else if (percentage >= 50) {
    feedback = "Good job!";
  } else {
    feedback = "Needs improvement.";
  }

  resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions} (${percentage}%). ${feedback}`;
  document.getElementById("resultModal").style.display = "flex";
}

// Array of people (26 individuals)
const people = Array.from({ length: 26 }, (_, index) => `Person ${index + 1}`);

// Groups
const groups = {
  "Humanitarian job": [],
  "Technical job": [],
  "Creative job": [],
  "Office job": [],
  "Social job": [],
};

// Function to assign groups randomly
function assignGroups() {
  // Shuffle people array randomly
  shuffleArray(people);

  // Assign people to groups
  let groupKeys = Object.keys(groups);
  people.forEach((person, index) => {
    let groupIndex = index % groupKeys.length;
    let groupName = groupKeys[groupIndex];
    groups[groupName].push(person);
  });

  // Display groups
  displayGroups();
}

// Function to shuffle array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display groups
function displayGroups() {
  const groupsContainer = document.getElementById("groups");
  groupsContainer.innerHTML = "";

  for (let groupName in groups) {
    let groupMembers = groups[groupName];
    let groupDiv = document.createElement("div");
    groupDiv.innerHTML = `<h2>${groupName}</h2><ul>${groupMembers
      .map((member) => `<li>${member}</li>`)
      .join("")}</ul>`;
    groupsContainer.appendChild(groupDiv);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const textEditor = document.getElementById("textEditor");
  const saveBtn = document.getElementById("saveBtn");
  const loadBtn = document.getElementById("loadBtn");

  saveBtn.addEventListener("click", function () {
    const textContent = textEditor.innerHTML;
    localStorage.setItem("textEditorContent", textContent);
    alert("Text saved!");
  });

  loadBtn.addEventListener("click", function () {
    const savedContent = localStorage.getItem("textEditorContent");
    if (savedContent) {
      textEditor.innerHTML = savedContent;
      alert("Text loaded!");
    } else {
      alert("No saved text found!");
    }
  });
});
