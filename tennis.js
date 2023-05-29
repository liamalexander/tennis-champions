const players = [
  {
    id: 1,
    name: "Federer",
    slams: 20,
    nationality: "Swiss",
    photo:
      "https://pbs.twimg.com/profile_images/378800000606046005/3f05655ac9b76e73eb3e86f9d5d3b2cd.jpeg",
    dob: "08 / 08 / 81",
    firstSlam: "Wimbledon 2003",
    lastSlam: "Australian Open 2018",
    titles: 103,
    text: "Federer has won a men's record 20 Grand Slam singles titles.",
    aus: 6,
    fre: 1,
    wim: 8,
    uso: 5,
    modalPhoto:
      "https://images.indianexpress.com/2020/04/federer-wimbledon-1200.jpg",
  },
  {
    id: 2,
    name: "Nadal",
    slams: 20,
    nationality: "Spanish",
    photo:
      "https://static.wixstatic.com/media/58baea_bdd0df59261642a8858efd670143ea12~mv2.jpg/v1/fill/w_128,h_128,al_c,q_80,usm_0.66_1.00_0.01/Nadal%20Forehand%20Blog.webp",
    dob: "03 / 06 / 86",
    firstSlam: "French Open 2005",
    lastSlam: "French Open 2020",
    titles: 89,
    text: "Nadal has won 13 French Open titles, more than any player at any Grand Slam event.",
    aus: 1,
    fre: 13,
    wim: 2,
    uso: 4,
    modalPhoto:
      "https://www.tennisnow.com/images/2017/June/Nadaltrophy-6-11-17.aspx",
  },
  {
    id: 3,
    name: "Djokovic",
    slams: 20,
    nationality: "Serbian",
    photo:
      "https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/nole1_1602102173.jpg",
    dob: "22 / 05 / 87",
    firstSlam: "Australian Open 2008",
    lastSlam: "Wimbledon 2021",
    titles: 86,
    text: "Djokovic is the only male player to complete the non-calender year Grand Slam, winning all 4 Slams from Wimbledon 2015 - French Open 2016.",
    aus: 9,
    fre: 2,
    wim: 6,
    uso: 3,
    modalPhoto:
      "https://www.tennisworldusa.org/imgb/87151/why-has-novak-djokovic-been-more-successful-at-the-aus-open-than-at-the-us-open.jpg",
  },
  {
    id: 4,
    name: "Sampras",
    slams: 14,
    nationality: "American",
    photo:
      "https://static.wixstatic.com/media/58baea_6824fafaf67e49a28cf5de8645aeced6~mv2.jpg/v1/fill/w_128,h_128,al_c,q_80,usm_0.66_1.00_0.01/Sampras%20Volley.webp",
    dob: "12 / 08 / 71",
    firstSlam: "US Open 1990",
    lastSlam: "US Open 2002",
    titles: 64,
    text: "Sampras ended 6 consecutive years as the world number 1 player.",
    aus: 2,
    fre: 0,
    wim: 7,
    uso: 5,
    modalPhoto:
      "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/120810_sampras.jpg?ve=1&tl=1?ve=1&tl=1",
  },
  {
    id: 5,
    name: "Borg",
    slams: 11,
    nationality: "Swedish",
    photo:
      "https://images.prismic.io/fft-rg-commun-news/d246f93953c7c10fdfe3b5bd195c2eb780b22f0d_1974-1981-annees-bjorn-borg-roland-garros.jpg?auto=compress,format",
    dob: "06 / 06 / 56",
    firstSlam: "French Open 1974",
    lastSlam: "French Open 1981",
    titles: 66,
    text: "Borg won 5 consecutive Wimbledon titles (1976 - 1980) and did the French Open - Wimbledon double 3 times.",
    aus: 0,
    fre: 6,
    wim: 5,
    uso: 0,
    modalPhoto:
      "https://www.80scasualclassics.co.uk/blog/wp-content/uploads/2018/06/bjorn-borg-wimbledon-1980.jpeg",
  },
  {
    id: 6,
    name: "Connors",
    slams: 8,
    nationality: "American",
    photo:
      "https://pbs.twimg.com/profile_images/313878886/chris-_20jimmy_20connors250x238_reasonably_small.jpg",
    dob: "02 / 09 / 52",
    firstSlam: "Australian Open 1974",
    lastSlam: "US Open 1983",
    titles: 109,
    text: "Connors won 3 of the 4 Slams in 1974 and won more singles titles than any other man in open era history.",
    aus: 1,
    fre: 0,
    wim: 2,
    uso: 5,
    modalPhoto:
      "https://www.tennisworldusa.org/imgb/81419/flashback-us-open-jimmy-connors-destroys-ken-rosewall-for-first-us-open-crown.jpg",
  },
  {
    id: 7,
    name: "Lendl",
    slams: 8,
    nationality: "Czech / American",
    photo:
      "https://res.cloudinary.com/lptennis/image/upload/c_fill,h_96,q_auto,w_96/v1482781330/wkjjx0hd7jfqu5hz1epa.png",
    dob: "07 / 03 / 60",
    firstSlam: "French Open 1984",
    lastSlam: "Australian Open 1990",
    titles: 94,
    text: "Lendl reached 8 consecutive US Open finals in the 80's.",
    aus: 2,
    fre: 3,
    wim: 0,
    uso: 3,
    modalPhoto:
      "https://i.pinimg.com/originals/9a/3f/33/9a3f3321da189edc1576c3531e1392e5.jpg",
  },
  {
    id: 8,
    name: "Agassi",
    slams: 8,
    nationality: "American",
    photo:
      "https://laterradihayk.files.wordpress.com/2016/06/andre-agassi1.jpg?w=256&h=256&crop=1",
    dob: "29 / 04 / 70",
    firstSlam: "Wimbledon 1992",
    lastSlam: "Australian Open 2003",
    titles: 60,
    text: "Agassi was the first male player to win the Career Golden Slam, winning Olympic Gold in Atlanta 1996.",
    aus: 4,
    fre: 1,
    wim: 1,
    uso: 2,
    modalPhoto:
      "https://i.pinimg.com/originals/fb/9f/b9/fb9fb9ec722b6165ef10e20a56c67ff3.jpg",
  },
  {
    id: 9,
    name: "McEnroe",
    slams: 7,
    nationality: "American",
    photo:
      "https://media.gq.com/photos/5583173409f0bee564411591/master/pass/sports-2011-06-wimbeldon-rivalries-wimbeldon-bjorn-borg-john-mcenroe_96.jpg",
    dob: "16 / 02 / 59",
    firstSlam: "US Open 1979",
    lastSlam: "US Open 1984",
    titles: 77,
    text: "In 1984, McEnroe finished the year with a 82-3 season record, the highest win percentage for a man in 1 season in open era history.",
    aus: 0,
    fre: 0,
    wim: 3,
    uso: 4,
    modalPhoto:
      "https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/277eeabd62b59bc9/e25fbebb4048/v/0cd448ddde44/p_0300_10_B3_015_o2.jpg",
  },
  {
    id: 10,
    name: "Wilander",
    slams: 7,
    nationality: "Swedish",
    photo:
      "https://cdn.cnn.com/cnnnext/dam/assets/150428170726-mats-wilander-french-final-large-169.jpg",
    dob: "22 / 08 / 64",
    firstSlam: "French Open 1982",
    lastSlam: "US Open 1988",
    titles: 33,
    text: "Wilander won 3 of the 4 Slams in 1988, and is the only male player to win the Australian Open on grass and hard courts.",
    aus: 3,
    fre: 3,
    wim: 0,
    uso: 1,
    modalPhoto: "https://pbs.twimg.com/media/EGN6OBgWwAUqP9B.jpg",
  },
  {
    id: 11,
    name: "S Williams",
    slams: 23,
    nationality: "American",
    photo:
      "https://cdn.britannica.com/70/149370-050-F2F4BEE5/Serena-Williams-US-Open-2004.jpg",
    dob: "26 / 09 / 81",
    firstSlam: "US Open 1999",
    lastSlam: "Australian Open 2017",
    titles: 73,
    text: "Serena has won a record 7 Australian Open titles and has held all four grand slams consecutively twice in her career.",
    aus: 7,
    fre: 3,
    wim: 7,
    uso: 6,
    modalPhoto:
      "https://www.tennisworldusa.org/imgb/69013/serena-williams-it-s-cool-to-have-meaningful-trophies-in-your-house.jpg",
  },
  {
    id: 12,
    name: "Graf",
    slams: 22,
    nationality: "German",
    photo:
      "https://www.larousse.fr/encyclopedie/data/vignettes/1003786-Steffi_Graf.jpg",
    dob: "14 / 06 / 69",
    firstSlam: "French Open 1987",
    lastSlam: "French Open 1999",
    titles: 107,
    text: "In 1988, Graf became the only player in history to win all four grand slam titles and the Olympic Gold medal (Seoul) in a season.",
    aus: 4,
    fre: 6,
    wim: 7,
    uso: 5,
    modalPhoto:
      "https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2019/06/08124252/Steffi-Graf-with-French-Open-trophy-PA.jpg",
  },
  {
    id: 13,
    name: "Evert",
    slams: 18,
    nationality: "American",
    photo:
      "https://photoresources.wtatennis.com/photo-resources/2020/03/28/44d0dbdc-5568-4eb1-8c43-914630cfd4a2/gettyimages-667510641-594x594.jpg?width=1200&height=630",
    dob: "21 / 12 / 54",
    firstSlam: "French Open 1974",
    lastSlam: "French Open 1986",
    titles: 157,
    text: "Evert won a women's record 7 French Open titles and won a Slam in 13 consecutive years.  She has the highest career winning percentage in history (89.97%).",
    aus: 2,
    fre: 7,
    wim: 3,
    uso: 6,
    modalPhoto:
      "https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/e032833996e86f70/eedd85f5feb9/v/4ed66c5ce7fe/chris-evert-1981.jpg",
  },
  {
    id: 14,
    name: "Navratilova",
    slams: 18,
    nationality: "Czech / American",
    photo:
      "https://www.tennisworldusa.org/imgb/52642/martina-navratilova-i-am-who-i-am.jpg",
    dob: "18 / 10 / 56",
    firstSlam: "Wimbledon 1978",
    lastSlam: "Wimbledon 1990",
    titles: 167,
    text: "Navratilova won a record 9 Wimbledon titles and in 1983 completed an all time best 86-1 season win-loss record (98.9%).",
    aus: 3,
    fre: 2,
    wim: 9,
    uso: 4,
    modalPhoto: "https://www.abc.net.au/news/image/8680118-3x2-940x627.jpg",
  },
  {
    id: 15,
    name: "Court",
    slams: 11,
    nationality: "Australian",
    photo:
      "https://s31242.pcdn.co/wp-content/uploads/2019/06/GettyImages-3309293-1024x701.jpg",
    dob: "16 / 07 / 42",
    firstSlam: "Australian Open 1969",
    lastSlam: "US Open 1973",
    titles: 92,
    text: "In 1970, Court won the calender year Grand Slam by sweeping all four major tournaments.",
    aus: 4,
    fre: 3,
    wim: 1,
    uso: 3,
    modalPhoto:
      "https://i.guim.co.uk/img/media/716acaf670e2c60fcad156d1017b19fa32e285a7/0_0_2167_2077/master/2167.jpg?width=700&quality=85&auto=format&fit=max&s=4470716f5d9add5c070022e478f5908a",
  },
  {
    id: 16,
    name: "Seles",
    slams: 9,
    nationality: "Yugoslavian / American",
    photo:
      "https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2021/11/23175821/Monica-Seles-on-the-run.jpg",
    dob: "02 / 12 / 73",
    firstSlam: "French Open 1990",
    lastSlam: "Australian Open 1996",
    titles: 53,
    text: "Seles won 3 of the 4 Slams in both the 1991 and 1992 seasons.  She won a record 8 Grand Slams as a teeenager.",
    aus: 4,
    fre: 3,
    wim: 0,
    uso: 2,
    modalPhoto:
      "https://photo-assets.usopen.org/images/pics/large/f_Seles-1991_50th.jpg",
  },
  {
    id: 17,
    name: "King",
    slams: 8,
    nationality: "American",
    photo:
      "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_413,w_413,x_121,y_0/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1501718211/1378802776786.cached_yghpwm",
    dob: "22 / 11 / 43",
    firstSlam: "Wimbledon 1968",
    lastSlam: "Wimbledon 1975",
    titles: 67,
    text: "In 1972, King won 3 of the 4 Grand Slam titles.",
    aus: 0,
    fre: 1,
    wim: 4,
    uso: 3,
    modalPhoto:
      "https://cdn.cnn.com/cnnnext/dam/assets/131119120925-billie-jean-king-wimbledon-1967-horizontal-large-gallery.jpg",
  },
  {
    id: 18,
    name: "Goolagong",
    slams: 7,
    nationality: "Australian",
    photo:
      "https://cdn.cnn.com/cnnnext/dam/assets/150128093940-evonne-goolagong-wimbledon-playing-super-169.jpg",
    dob: "31 / 07 / 51",
    firstSlam: "French Open 1971",
    lastSlam: "Wimbledon 1980",
    titles: 86,
    text: "Goolagong won 3 consecutive Australian Open titles and reached 6 consecutive finals.",
    aus: 4,
    fre: 1,
    wim: 2,
    uso: 0,
    modalPhoto:
      "https://i.pinimg.com/originals/d8/00/8c/d8008c95f38911ff5d37c9ad89719917.jpg",
  },
  {
    id: 19,
    name: "V Williams",
    slams: 7,
    nationality: "American",
    photo:
      "https://static.ffx.io/images/$zoom_0.1309317630758573%2C$multiply_0.254%2C$ratio_1%2C$width_378%2C$x_57%2C$y_0/t_crop_custom/q_86%2Cf_auto/cb6f74032d6703dbe16bff5ef2a332ad57f1e232",
    dob: "17 / 06 / 80",
    firstSlam: "Wimbledon 2000",
    lastSlam: "Wimbledon 2008",
    titles: 49,
    text: "Between Wimbledon 2000 and the US Open 2001, Venus won 4 of the 6 Grand Slams played and an Olympic Gold Medal (Sydney, 2000).",
    aus: 0,
    fre: 0,
    wim: 5,
    uso: 2,
    modalPhoto:
      "https://s.abcnews.com/images/Entertainment/GTY__Venus_Williams_01_jrl_160624_16x9_992.jpg",
  },
  {
    id: 20,
    name: "Henin",
    slams: 7,
    nationality: "Belgian",
    photo:
      "https://i.guim.co.uk/img/static/sys-images/Sport/Pix/pictures/2006/01/24/Heninsm.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=3cb3aec94aa780b82bb146b613cecb26",
    dob: "01 / 06 / 82",
    firstSlam: "French Open 2003",
    lastSlam: "US Open 2007",
    titles: 43,
    text: "Henin won 3 consecutive French Open titles between 2005 - 2007.",
    aus: 1,
    fre: 4,
    wim: 0,
    uso: 2,
    modalPhoto:
      "https://images.prismic.io/fft-rg-commun-news/b64ebddeeef55aff8ec8f0750db3b652e60e508f_2003-2007-justine-henin-victoires-roland-garros.jpg?auto=compress,format",
  },
];

function createPlayer(player) {
  const playerWrapper = document.createElement("div");
  playerWrapper.classList.add("modalBtn");
  playerWrapper.id = player.id;

  playerWrapper.addEventListener("click",
    function (e) {
      const modal = document.getElementById("modal");
      const playerName = document.querySelector(".name");
      const playerDob = document.querySelector(".dob");
      const playerNation = document.querySelector(".nation");
      const playerTitles = document.querySelector(".titles");
      const playerSlams = document.querySelector(".slams");
      const playerFirst = document.querySelector(".first");
      const playerLast = document.querySelector(".last");
      const playerPic = document.querySelector(".modal-pic");
      const playerText = document.querySelector(".text");
      const ausWin = document.getElementById("aus1");
      const freWin = document.getElementById("fre1");
      const wimWin = document.getElementById("wim1");
      const usWin = document.getElementById("uso1");

      modal.style.display = "flex";
      playerName.textContent = player.name;
      playerDob.textContent = `Born: ${player.dob}`;
      playerNation.textContent = `Nationality: ${player.nationality}`;
      playerTitles.textContent = `Titles: ${player.titles}`;
      playerSlams.textContent = `Grand Slams: ${player.slams}`;
      playerFirst.textContent = `First Slam: ${player.firstSlam}`;
      playerLast.textContent = `Last Slam: ${player.lastSlam}`;
      playerPic.src = player.modalPhoto;
      playerText.textContent = player.text;
      ausWin.textContent = player.aus;
      freWin.textContent = player.fre;
      wimWin.textContent = player.wim;
      usWin.textContent = player.uso;
    });

  const closeModal = function (e) {
  modal.style.display = "none";
  };

  const modalCloseBtn = document.querySelector(".modal-close");
  modalCloseBtn.addEventListener("click", closeModal, false);

  const nameTag = document.createElement("h2");
  nameTag.innerHTML = player.name;

  const nationalityTag = document.createElement("h4");
  nationalityTag.innerHTML = player.nationality;

  const slamsTag = document.createElement("p");
  slamsTag.innerHTML = "Grand Slams: " + player.slams;

  const playerImage = document.createElement("img");
  playerImage.src = player.photo;

  playerWrapper.appendChild(nameTag);
  playerWrapper.appendChild(nationalityTag);
  playerWrapper.appendChild(slamsTag);
  playerWrapper.appendChild(playerImage);

  return playerWrapper;
}

function displayPlayersInit() {
  const playerList = document.getElementById("playerList");
  if (playerList) {
    for (const player of players) {
      const nameTag = createPlayer(player);
      playerList.appendChild(nameTag);
    }
  }
}

function filteredPlayers(e) {
  if (playerList) {
    playerList.innerHTML = "";

  const value = e.target.value.toLowerCase();
  if (value.length === 0) {
    displayPlayersInit();
  }

  if (value.length > 0) {
    for (const player of players) {
      const name = player.name.toLocaleLowerCase();
      const nation = player.nationality.toLocaleLowerCase();
      if (name.includes(value) || nation.includes(value)) {
        const nameTag = createPlayer(player);
        playerList.appendChild(nameTag);
      }
    }
  }
  }
}

function searchInputInit() {
  const searchInput = document.getElementById("searchBar");
  if (searchInput) {
    searchInput.addEventListener("keyup", filteredPlayers, false);
  }
};

// RESPONSIVE NAV

const responsiveNav = function () {
  const nav = document.querySelector(".topnav");
  nav.classList.add("responsive");
};

const navMenu = document.querySelector(".icon");
navMenu.addEventListener("click", responsiveNav);

// QUIZ

const quizQuestions = [
  {
    id : 1,
    question : "How many Wimbledon singles titles has Roger Federer won?",
    options : [
      "6",
      "7",
      "8"
    ],
    correctAnswer : "c",
    correctIndex : 2
  },
  {
    id : 2,
    question : "How many times has Rafael Nadal lost at the French Open?",
    options : [
      "2",
      "3",
      "4"
    ],
    correctAnswer : "b",
    correctIndex : 1 
  },
  {
    id : 3,
    question : "At which tournament did Martina Navratilova win 9 of her 18 Grand Slam singles titles?",
    options : [
      "US Open",
      "Wimbledon",
      "Australian Open"
    ],
    correctAnswer : "b",
    correctIndex : 1
  },
  {
    id : 4,
    question : "Chris Evert won a women's record singles titles at the French Open.  How many times did she win it?",
    options : [
      "7",
      "8",
      "9"
    ],
    correctAnswer : "a",
    correctIndex : 0
  },
  {
    id : 5,
    question : "Who is the only player to ever win all 4 Grand Slams and the Olympic Gold Medal in one season?",
    options : [
      "Roger Federer",
      "Rafael Nadal",
      "Steffi Graf"
    ],
    correctAnswer : "c",
    correctIndex : 2
  },
  {
    id : 6,
    question : "In which year was the Calender Year Golden Slam achieved?",
    options : [
      "1988",
      "1992",
      "1996"
    ],
    correctAnswer : "a",
    correctIndex : 0
  }
];

let questionNumber;
let score;
const question = document.querySelector(".question");
const options = Array.from(document.querySelectorAll(".options"));
const nextBtn = document.querySelector(".next-btn");
const playAgainBtn = document.querySelector(".again-btn");
const scoreDisplay = document.querySelector(".score");
const quizContainer = document.getElementById("quiz-questions");

const correct = function (e) {
  e.target.style.background = "green";
  score++;
};

const incorrect = function (e) {
  e.target.style.background = "crimson";
  options.forEach(btn => {
    if (btn.id == quizQuestions[questionNumber].correctAnswer) {
      btn.style.background = "green";
    }
  })
};

const checkAnswer = function (e) {
  disableBtns();
  if (e.target.id === quizQuestions[questionNumber].correctAnswer) {
    correct(e);
  } else {
    incorrect(e);
  }
  nextBtn.style.display = "flex";
  nextBtn.addEventListener("click", nextQuestion, false);
};

const disableBtns = function () {
  options.forEach(btn => {
    btn.disabled = true;
  })
};

const clearBtns = function () {
  options.forEach(btn => {
    btn.style.background = "#fff";
    btn.disabled = false;
  })
};

const nextQuestion = function () {
    if (quizContainer) {
    nextBtn.style.display = "none";
    questionNumber++;
    if (questionNumber < quizQuestions.length) {
      clearBtns();
      question.textContent = `${quizQuestions[questionNumber].id}) ${quizQuestions[questionNumber].question}`;

      for (let i = 0; i < quizQuestions[questionNumber].options.length; i++) {
        options[i].innerHTML = ` ${quizQuestions[questionNumber].options[i]}`;
      }
    } else {
      nextBtn.style.display = "none";
      playAgainBtn.style.display = "flex";
      scoreDisplay.style.display = "flex";
      scoreDisplay.textContent = `Your Score: ${score} / ${quizQuestions.length}`;
      playAgainBtn.addEventListener("click", displayQuizQuestions, false);
    }
  }
};

// nextBtn.addEventListener("click", nextQuestion, false);
//WONT WORK HERE AS IT DOESNT CALL THE OTHER HTML PAGES SO PUT THEM IN THE OTHER FUNCTIONS

options.forEach(function (btn) {
  btn.addEventListener("click", checkAnswer, false);
});

const displayQuizQuestions = function () {
  if (quizContainer) {
    questionNumber = 0;
    score = 0;
    clearBtns();
    scoreDisplay.style.display = "none";
    playAgainBtn.style.display = "none";
    question.textContent = `${quizQuestions[questionNumber].id}) ${quizQuestions[questionNumber].question}`;

    for (let i = 0; i < quizQuestions[questionNumber].options.length; i++) {
      options[i].textContent = ` ${quizQuestions[questionNumber].options[i]}`;
    }
  }
};

// playAgainBtn.addEventListener("click", displayQuizQuestions, false);

// RIVALRIES

const rivalriesData = [
  [{
    id : 1,
    name : "Federer",
    pic : "https://i.pinimg.com/474x/ab/fb/a4/abfba4b33d34f5523e1c894d94a8b9c4--face-books-god-bless-you.jpg",
    wins : 16,
    slamFinals : 3,
    slamWins : 4,
    hard : 11,
    clay : 2,
    grass : 3,
    carpet : 0
  },{
    id : 2,
    name : "Nadal",
    pic : "https://media.nu.nl/m/kwcxto5aocvw_sqr256.jpg/nadal-door-nieuwe-zege-zonder-setverlies-stap-dichter-bij-21e-grand-slam-titel.jpg",
    wins : 24,
    slamFinals : 6,
    slamWins : 10,
    hard : 9,
    clay : 14,
    grass : 1,
    carpet : 0
  }],
  [{
    id : 3,
    name : "Evert",
    pic : "https://static.ffx.io/images/$width_375%2C$height_211/t_crop_fill/q_86%2Cf_auto/7a9a75e493dc409bd771a18328fc692de7186028",
    wins : 37,
    slamFinals : 4,
    slamWins : 8,
    hard : 8,
    clay : 11,
    grass : 5,
    carpet : 13
  },{
    id : 4,
    name : "Navratilova",
    pic : "https://ausopen.com/sites/default/files/styles/facebook_share/public/navratilova_gc_h_h.jpg?itok=Zt4HYwAF",
    wins : 43,
    slamFinals : 10,
    slamWins : 14,
    hard : 8,
    clay : 3,
    grass : 10,
    carpet : 22
  }],
  [{
    id : 5,
    name : "Sampras",
    pic : "https://cdn.britannica.com/85/205585-050-94EFDBDB/Pete-Sampras-men-singles-championship-Wimbledon-sets-1998.jpg",
    wins : 20,
    slamFinals : 4,
    slamWins : 6,
    hard : 11,
    clay : 2,
    grass : 2,
    carpet : 5
  },{
    id : 6,
    name : "Agassi",
    pic : "https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2020/03/26131821/Andre-Agassi-backhand-752x428.jpg",
    wins : 14,
    slamFinals : 1,
    slamWins : 3,
    hard : 9,
    clay : 3,
    grass : 0,
    carpet : 2
  }],
  [{
    id : 7,
    name : "S Williams",
    pic : "https://i.guim.co.uk/img/media/7d6539ca3fb48b9d4854ae1972302328d43c512b/0_149_4455_2673/master/4455.jpg?width=300&quality=85&auto=format&fit=max&s=f3289836d6b4d7c14c14f89335e4460e",
    wins : 19,
    slamFinals : 7,
    slamWins : 11,
    hard : 12,
    clay : 2,
    grass : 4,
    carpet : 1
  },{
    id : 8,
    name : "V Williams",
    pic : "https://cdn.tennis.com/uploads/img/2018/10/11/1a94205b752a46149079307c1853e746.jpg",
    wins : 12,
    slamFinals : 2,
    slamWins : 5,
    hard : 9,
    clay : 1,
    grass : 2,
    carpet : 0
  }],
  [{
    id : 9,
    name : "McEnroe",
    pic : "https://fanfan.es/wp-content/uploads/2019/08/mcenroe-tennismash.jpg",
    wins : 20,
    slamFinals : 1,
    slamWins : 6,
    hard : 6,
    clay : 1,
    grass : 3,
    carpet : 10
  },{
    id : 10,
    name : "Connors",
    pic : "https://static01.nyt.com/images/2013/06/02/books/review/02connors/02connors-superJumbo.jpg",
    wins : 14,
    slamFinals : 1,
    slamWins : 3,
    hard : 3,
    clay : 3,
    grass : 4,
    carpet : 4
  }],
  [{
    id : 11,
    name : "Graf",
    pic : "https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/06/13/Pictures/steffi-graf-of-germany-plays-a-forehand_443cd2b6-ad5c-11ea-99c1-b8a846b2b30c.jpg",
    wins : 10,
    slamFinals : 3,
    slamWins : 6,
    hard : 3,
    clay : 3,
    grass : 2,
    carpet : 2
  },{
    id : 12,
    name : "Seles",
    pic : "https://photoresources.wtatennis.com/photo-resources/2020/03/23/a5220971-730c-44d0-9b16-f3af05c11319/GettyImages-640465599.jpg?width=1176&height=662",
    wins : 5,
    slamFinals : 3,
    slamWins : 4,
    hard : 2,
    clay : 3,
    grass : 0,
    carpet : 0
  }]
];

const accordContainer = document.getElementById("accordion-container");

const displayAccordion = function () {
  if (accordContainer) {
    let rows = rivalriesData.length;
    for (let i = 0; i < rows; i++) {
      let rival = rivalriesData[i].length;
      const rivalDivHeader = document.createElement("div");
      rivalDivHeader.classList.add("rival-header");

      const accordHeadLabel = document.createElement("div");
      accordHeadLabel.classList.add("accord-head-label");
      accordHeadLabel.innerHTML = "vs";

      const rivalDivBody = document.createElement("div");
      rivalDivBody.classList.add("rival-body");

      const accordDataLables = document.createElement("div");
      accordDataLables.classList.add("accord-labels");
      accordDataLables.innerHTML = `Total Wins<br>
                                    Slam Finals<br>
                                    Slam Wins<br>
                                    Hard Courts<br>
                                    Clay Courts<br>
                                    Grass Courts<br>
                                    Carpet Courts`

      accordContainer.appendChild(rivalDivHeader);
      accordContainer.appendChild(rivalDivBody);
      rivalDivBody.appendChild(accordDataLables);
      rivalDivHeader.appendChild(accordHeadLabel);

      rivalDivHeader.addEventListener("click", function (e) {
        if (rivalDivBody.style.display === "grid") {
          rivalDivBody.style.display = "none";
        } else {
          rivalDivBody.style.display = "grid";
        };
      });

      for (let n = 0; n < rival; n++) {
        const rivalName = document.createElement("div");
        rivalName.classList.add(`rival${rivalriesData[i][n].id}`);

        const nameR = document.createElement("h2");
        nameR.classList.add("rival-name");
        nameR.innerHTML = rivalriesData[i][n].name;
        const rivalPic = document.createElement("img");
        rivalPic.src = `${rivalriesData[i][n].pic}`;

        const rivalData = document.createElement("div");
        rivalData.classList.add(`rival${rivalriesData[i][n].id}`);
        rivalData.innerHTML =   `${rivalriesData[i][n].wins} <br>
                                ${rivalriesData[i][n].slamFinals} <br>
                                ${rivalriesData[i][n].slamWins} <br>
                                ${rivalriesData[i][n].hard} <br>
                                ${rivalriesData[i][n].clay} <br>
                                ${rivalriesData[i][n].grass} <br>
                                ${rivalriesData[i][n].carpet}`;

        rivalName.appendChild(nameR);
        rivalName.appendChild(rivalPic);
        rivalDivHeader.appendChild(rivalName);
        rivalDivBody.appendChild(rivalData);
      }
    }
  }
};

// RECORDS

const recordsData = [
  {
    id : 0,
    tournament : "Australian Open",
    tournPic : "https://img.resized.co/offtheball/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLnJhZGlvY21zLm5ldFxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDRcXFwvMjQxNTIyMDhcXFwvUEEtNDk5NDAxNjItMTAyNHg2NjQuanBnXCIsXCJ3aWR0aFwiOjk3MCxcImhlaWdodFwiOjQ4NSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3Lm9mZnRoZWJhbGwuY29tXFxcL2ltYWdlc1xcXC9uby1pbWFnZS5wbmc_dj0zXCJ9IiwiaGFzaCI6ImE5OGIwMzFhNWFhOGUxYTEyN2NmNzViZTllYmJlZmQ5MzEyOTc2YzcifQ==/australian-open-set-to-start-in-february-next-year-reports.jpg",
    info : "The Australian Open was first played in 1905.  It is currently the first grand slam of the year and since 1988 has been held on outdoor hardcourts at Melbourne Park (previously played on grass courts).",
    mostTitles : ["Djokovic", "Federer", "Agassi", "S Williams", "Seles", "Graf"],
    titleNumbers : [9, 6, 4, 7, 4, 4],
    mostWins : ["Federer", "Djokovic", "Nadal", "S Williams", "Court", "Sharapova"],
    winsNumbers : [102, 82, 76, 88, 60, 57],
    background : "rgba(99, 197, 218, 1)",
  },
  {
    id : 1,
    tournament : "French Open",
    tournPic : "https://image-cdn.essentiallysports.com/wp-content/uploads/20200707155616/Infosys-adds-French-Open-to-its-Grand-Slam-portfolio-1.jpg",
    info : "The French Open was first played in 1891.  The second major of the year has been held on clay courts at Stade Roland Garros since 1928 but was originally played on sand at various locations in France.",
    mostTitles : ["Nadal", "Borg", "Wilander / Lendl / Kuerten", "Evert", "Graf", "Henin"],
    titleNumbers : [13, 6, 3, 7, 6, 4],
    mostWins : ["Nadal", "Djokovic", "Federer", "Graf", "Evert", "Sanchez Vicario"],
    winsNumbers : [105, 81, 73, 84, 72, 72],
    background : "rgba(237, 113, 23, 1)",
  },
  {
    id : 2,
    tournament : "Wimbledon",
    tournPic : "https://www.tennisworldusa.org/imgb/102914/wimbledon-2021-entry-lists-roger-federer-and-serena-williams-present.jpg",
    info : "Wimbledon was first played in 1877.  It is the third major in the calender and the oldest tournament in tennis.  It is currently the only Grand Slam played on grass courts, at the All England Lawn Tennis and Croquet Club since 1922.",
    mostTitles : ["Federer", "Sampras", "Djokovic", "Navratilova", "S Williams", "Graf"],
    titleNumbers : [8, 7, 6, 9, 7, 7],
    mostWins : ["Federer", "Connors", "Djokovic", "Navratilova", "S Williams", "Evert"],
    winsNumbers : [105, 84, 79, 120, 98, 96],
    background : "rgb(51, 130, 60)",
  },
  {
    id : 3,
    tournament : "US Open",
    tournPic : "https://thecomeback.com/wp-content/uploads/2020/03/US-Open-2019.jpg",
    info : "The US Open was first played in 1881.  The final Slam of the year has been played at Flushing Meddows on outdoor hardcourts since 1978.  It was previously held on green clay (1975 - 1977) and grass courts (until 1974).",
    mostTitles : ["Federer", "Sampras", "Connors", "Evert", "S Williams", "Graf"],
    titleNumbers : [5, 5, 5, 6, 6, 5],
    mostWins : ["Connors", "Federer", "Djokovic", "S Williams", "Evert", "Navratilova"],
    winsNumbers : [98, 89, 81, 106, 101, 89],
    background : "rgba(122, 73, 136, 1)",
  },
];

const slides = document.querySelectorAll(".slide-pics");
const recName = document.querySelectorAll(".records-data");
const recNum = document.querySelectorAll(".records-number");
const recWins = document.querySelectorAll(".wins");
const recWinsNum = document.querySelectorAll(".num");
const slideText = document.querySelector(".slide-text");
const overlay = document.querySelector(".slide-overlay");
const recordsContainer = document.getElementById("records-container");

const getSlide = function (e) {
  slides.forEach(slide => {
    slide.style.background = "blueviolet";
  })
  for (let i = 0; i < recordsData.length; i++) {
  if (e.target.id == i) {
    document.slide.src = recordsData[i].tournPic;
    slides[i].style.background = recordsData[i].background;
  }
  }
  for (let n = 0; n < recordsData.length; n++) {
    if (e.target.id == recordsData[n].id) {
      slideText.textContent = recordsData[n].info;
      overlay.style.background = recordsData[n].background;
      for (let q = 0; q < recordsData[n].titleNumbers.length; q++) {
        recNum[q].textContent = recordsData[n].titleNumbers[q];
        recName[q].textContent = recordsData[n].mostTitles[q];
        recWins[q].textContent = recordsData[n].mostWins[q];
        recWinsNum[q].textContent = recordsData[n].winsNumbers[q];
      }
    }
  } 
};

slides.forEach(function (slide) {
  slide.addEventListener("click", getSlide, false);
})


const displaySlides = function () {
  if (recordsContainer) {
    document.slide.src = recordsData[0].tournPic;
    slideText.textContent = recordsData[0].info;
    overlay.style.background = recordsData[0].background;
    slides[0].style.background = recordsData[0].background;
    for (let q = 0; q < recordsData[0].titleNumbers.length; q++) {
      recNum[q].textContent = recordsData[0].titleNumbers[q];
      recName[q].textContent = recordsData[0].mostTitles[q];
      recWins[q].textContent = recordsData[0].mostWins[q];
      recWinsNum[q].textContent = recordsData[0].winsNumbers[q];
    }
  }
};

// VIDEOS

// const videoData = [
//   {
//     id : 0,
//     tourn : "Australian Open",
//     class : "aus",
//     videos : ["https://www.youtube.com/embed/-kaaXz4IgrA", "https://www.youtube.com/embed/WmKPJtEjJp0"]
//   },
//   {
//     id : 1,
//     tourn : "French Open",
//     class : "fre",
//     videos : ["https://www.youtube.com/embed/yGvW40l43e0", "https://www.youtube.com/embed/n09eRAzNcf0"]
//   },
//   {
//     id : 2,
//     tourn : "Wimbledon",
//     class : "wim",
//     videos : ["https://www.youtube.com/embed/Bk9GAE0QK5E", "https://www.youtube.com/embed/sJP-LOH1kLM"]
//   },
//   {
//     id : 3,
//     tourn : "US Open",
//     class : "uso",
//     videos : ["https://www.youtube.com/embed/mXIRtAkWI0Y", "https://www.youtube.com/embed/LsCt47r73CI"]
//   },
// ];

const vidLinks = document.querySelectorAll(".vids-dropdown");
const vidContainer = document.getElementById("video-container");
const videos = document.querySelectorAll(".vids");

// const showVideos = function (e) {
//   if (vidContainer) {
    // for (let i = 0; i < vidLinks.length; i++) {
      // console.log(e.target.id);
      // console.log(vidLinks[i].id);
      // console.log(vidLinks.length);
    // }
//   }
// }

// const showVideos = function (e) {
//   if (vidContainer) {
//     for (let i = 0; i < videoData.length; i++) {
//       if (e.target.id == videoData[i].id) {
//         const videoContent = document.createElement("div");
//         videoContent.classList.add("vids");
//         videoContent.textContent = "BOOM";
//         vidContainer.appendChild(videoContent);
      
//       for (let n = 0; n < videoData[i].videos.length; n++) {
//         console.log(videoData[i].videos[n]);
//         console.log(i);
//         console.log(e.target.id);

//           const eachVid = document.createElement("div");
//           eachVid.classList.add("video");
//           const vidSrc = document.createElement("iframe");
//           vidSrc.src = videoData[i].videos[n];
//           eachVid.textContent = "BOOM";
//           eachVid.appendChild(vidSrc);
//           videoContent.appendChild(eachVid);
//           vidLinks[i].appendChild(videoContent);
//       }
//       }
//     }
//   }
// }


vidLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    if (vidContainer) {
      for (let i = 0; i < videos.length; i++) {
        if (link.id == videos[i].id) {
          if (videos[i].style.display === "flex") {
            videos[i].style.display = "none";
          } else {
            videos[i].style.display = "flex";
          }
        }
      }
    }
  }, false)
});


function init() {
  displayPlayersInit();
  searchInputInit();
  displayQuizQuestions();
  displayAccordion();
  displaySlides();
};

window.onload = function () {
  init();
};

      //CHECKLIST FOR ALLY CAT
// check home page: -
//   modal opens and closes
//   search bar works for name and nationality
//   responsive on big and small 
//   footer

// quiz:-
//   all works and responsive big and small 
//   footer 

// videos:- 
//   ERROR MSG IN CONSOLE FOR PERMISSIONS??
//   works on click with correct videos
//   responsive 
//   footer 

// rivalries:- 
//   opens and closes with correct data for each rivalry on click 
//   responsive big and small 
//   footer

// records:-
//   tabs work and display correct data below and img 
//   responsive big and small 
//   footer 
