// An array of diaries entries with each diary is an object
// Each diary object contains id, title, tag, image, note, and an array of question objects
// Each question object contains question, an array of options, and a correct answer
const diaries = [
  {
    id: "japan-trip-1",
    title: "Sushi Trip",
    tag: "Travel",
    image: "/images/japan/Oishi-Park.jpeg",
    note: "Had a great time visiting Oishi Park in Japan. Although the weather was a bit cloudy, the view of Mount Fuji was breathtaking!",
    questions: [
      {
        question: "What is the location of this place?",
        options: ["Japan", "China", "South Korea"],
        answer: "Japan" 
      },
      {
        question: "Who are you traveling with?",
        options: ["Family", "Friends", "Alone"],
        answer: "Friends"
      },
      {
        question: "What year did you go?",
        options: ["2020", "2022", "2025"],
        answer: "2025"
      }
    ]
  },
  {
    id: "emma-birthday",
    title: "Childhood's friends",
    tag: "Family",
    image: "/images/birthday/emma-birthday.jpeg",
    note: "Emma finally had her first birthday celebration with her friends in first grade. The kids had so much fun, and Emma was so happy opening the presents.",
    questions: [
      {
        question: "Who birthday is this?",
        options: ["John", "Peter", "Emma"],
        answer: "Emma" 
      },
      {
        question: "Where is Emma in the picture?",
        options: ["Left", "Middle", "Right"],
        answer: "Left" 
      },
      {
        question: "What is she wearing?",
        options: ["Blue jacket with short", "White shirt and pink skirt", "Pink cargo shirt and jeans"],
        answer: "Pink cargo shirt and jeans" 
      }
    ]
  },
  {
    id: "graduation",
    title: "Welcome to adulthood",
    tag: "Event",
    image: "/images/graduation/graduation.jpeg",
    note: "Celebrated my daughter's graduation from college.",
    questions: [
      {
        question: "What is this event?",
        options: ["Birthday", "Wedding", "Graduation"],
        answer: "Graduation"
      },
      {
        question: "Who is graduating?",
        options: ["My Niece", "Youngest Daughter", "Son"],
        answer: "Youngest Daughter"
      },
      {
        question: "What year did this event take place?",
        options: ["2017", "2020", "2025"],
        answer: "2020"
      },
    ]
  },
  {
    id: "son-family",
    title: "Family Bonding",
    tag: "Family",
    image: "/images/family/son-family.webp",
    note: "Spent quality time with my son and his family. It was a heartwarming experience filled with love and laughter.",
    questions: [
      {
        question: "Who is in this photo?",
        options: ["My Son and his Family", "My Daughter and her Family", "My Grandson"],
        answer: "My Son and his Family"
      },
      {
        question: "What  are their names?",
        options: ["John, Mary, Alice, and Tom", "David, Sarah, Hector ,and Emily", "Michael, Lisa, David,and Jack"],
        answer: "Michael, Lisa, David,and Jack"
      },
      {
        question: "How old was my grandson and granddaughter in this photo?",
        options: ["3 years old and 5 years old", "7 years old and 2 years old", "5 years old and 1 year old"],
        answer: "7 years old and 2 years old"
      }
    ]
  },
  {
    id: "tet",
    title: "Red Envelopes",
    tag: "Event",
    image: "/images/vietnam/Tet-holiday.jpg",
    note: "Celebrated Lunar New Year, the Vietnamese New Year, with my family in Vietnam. The kids had a lot of fun and excitement to receive red envelopes.",
    questions: [
      {
        question: "What is this event?",
        options: ["Christmas", "Lunar New Year", "Small gathering"],
        answer: "Lunar New Year"
      },
      {
        question: "What year did this event take place?",
        options: ["2020", "2022", "2023"],
        answer: "2020"
      },
      {
        question: "Who was there?",
        options: ["Family", "Friends", "Colleagues"],
        answer: "Family"
      }
    ]
  },
  {
    id: "atlanta",
    title: "Baseball's Soul",
    tag: "Travel",
    image: "/images/atlanta/ATL-Braves.jpeg",
    note: "I visited the battery and it was so much fun. I place is most crowded on the weekends with all the bars open.",
    questions: [
      {
        question: "What is the location of this place?",
        options: ["New York", "Atlanta", "California"],
        answer: "Atlanta" 
      },
      {
        question: "Who are you traveling with?",
        options: ["Family", "Friends", "Alone"],
        answer: "Friends"
      },
      {
        question: "What year did you go?",
        options: ["2020", "2022", "2025"],
        answer: "2025"
      }
    ]
  },
  {
    id: "newYork-trip-1",
    title: "Tallest Lady",
    tag: "Travel",
    image: "/images/new-york/Liberty.jpeg",
    note: "Visited the Statue of Liberty in New York.",
    questions: [
      {
        question: "What is the location of this place?",
        options: ["New York", "Los Angeles", "Chicago"],
        answer: "New York"
      },
      {
        question: "Who are you traveling with?",
        options: ["Family", "Friends", "Alone"],
        answer: "Friends"
      },
      {
        question: "What year did you go?",
        options: ["2021", "2023", "2024"],
        answer: "2023"
      }
    ]
  },
  {
    id: "first-born",
    title: "Look who's here",
    tag: "Family",
    image: "/images/family/first-born.jpeg",
    note: "Our first child was born and we couldn't be more excited. The joy and love we feel is indescribable.",
    questions: [
      {
        question: "What is this photo of?",
        options: ["A newborn baby", "A toddler", "A teenager"],
        answer: "A newborn baby"
      },
      {
        question: "How old is the baby?",
        options: ["0 months old", "6 months old", "1 year old"],
        answer: "0 months old"
      },
      {
        question: "What is the baby's name?",
        options: ["Emma", "Liam", "Olivia"],
        answer: "Emma"
      }
    ]
  },
  {
    id: "canada-trip-1",
    title: "The North",
    tag: "Travel",
    image: "/images/canada/CN-tower.jpg",
    note: "Visited the CN Tower in Toronto, Canada.",
    questions: [
      {
        question: "What is the location of this place?",
        options: ["Canada", "United States", "Mexico"],
        answer: "Canada"
      },
      {
        question: "Who are you traveling with?",
        options: ["Family", "Friends", "Alone"],
        answer: "Family"
      },
      {
        question: "What year did you go?",
        options: ["2020", "2023", "2026"],
        answer: "2026"
      }
    ]
  },
  {
    id: "destin-trip-1",
    title: "Salty Taste",
    tag: "Travel",
    image: "/images/destin/Rosemary-Beach1.jpeg",
    note: "Enjoyed the beautiful beaches of Destin, Florida.",
    questions: [
      {
        question: "What is the location of this place?",
        options: ["Florida", "California", "Hawaii"],
        answer: "Florida"
      },
      {
        question: "Who are you traveling with?",
        options: ["Family", "Friends", "Alone"],
        answer: "Family"
      },
      {
        question: "What year did you go?",
        options: ["2022", "2024", "2025"],
        answer: "2024"
      }
    ]
  },
  {
    id: "wedding",
    title: "White Day",
    tag: "Event",
    image: "/images/wedding/download.jpg",
    note: "My oldest daughter's wedding day. She is a beautiful woman and I am so proud of her. It was a beautiful ceremony filled with love and joy.",
    questions: [
      {
        question: "What is this event?",
        options: ["Birthday", "Wedding", "Graduation"],
        answer: "Wedding"
      },
      {
        question: "Who wedding is this?",
        options: ["Oldest Daughter", "Youngest Daughter", "Son"],
        answer: "Oldest Daughter"
      },
      {
        question: "What year did this event take place?",
        options: ["2017", "2020", "2025"],
        answer: "2017"
      },
    ]
  },
  {
    id: "birthday",
    title: "Another Year Older",
    tag: "Event",
    image: "/images/birthday/birthday.jpg",
    note: "Celebrated my birthday with family and friends. It was a wonderful day filled with love and laughter.",
    questions: [
      {
        question: "What is this event?",
        options: ["Birthday", "Wedding", "Graduation"],
        answer: "Birthday"
      },
      {
        question: "Who birthday is this?",
        options: ["My Son", "My Nephew", "My My Grandson"],
        answer: "My Grandson"
      },
      {
        question: "Who old is he?",
        options: ["2 years old", "1 year old", "3 years old"],
        answer: "1 year old"
      }
    ]
  },
  {
    id: "puppy",
    title: "Little Ones",
    tag: "Family",
    image: "/images/family/puppy.jpeg",
    note: "Buddy gets to go outside to hang out with our family and his friends. He is a playful and adorable puppy who brings joy to our lives.",
    questions: [
      {
        question: "What is this photo of?",
        options: ["A puppy", "A kitten", "A bird"],
        answer: "A puppy"
      },
      {
        question: "How old is the puppy?",
        options: ["2 months old", "6 months old", "1 year old"],
        answer: "1 year old"
      },
      {
        question: "What is the puppy's name?",
        options: ["Buddy", "Max", "Charlie"],
        answer: "Buddy"
      }
    ]
  },
  {
    id: "location1",
    title: "Buzz Buzz",
    tag: "Travel",
    image: "/images/atlanta/GT.jpg",
    note: "I the most wonderful time during my collefe years at Georgia Tech. I made lifelong friends and had unforgettable experiences.",
    questions: [
      {
        question: "What is this location?",
        options: ["Georgia Tech", "University of Georgia", "Emory University"],
        answer: "Georgia Tech"
      },
      {
        question: "What city is this located in?",
        options: ["Atlanta", "Savannah", "Augusta"],
        answer: "Atlanta"
      },
      {
        question: "Who was studying here?",
        options: ["Me", "My Daughter", "My Son", "All of us"],
        answer: "All of us"
      }
    ]
  },
  {
    id: "grandpa-birthday",
    title: "About to enter Relax Era",
    tag: "Family",
    image: "/images/birthday/grandpa-birthday.jpeg",
    note: "Grandpa's 67th birthday!!! The family get to be together for the weekend and we had so much fun. We are happy that he's still healthy and full of energy.",
    questions: [
      {
        question: "What is this event?",
        options: ["Birthday", "New Year", "Thanksgiving"],
        answer: "Birthday"
      },
      {
        question: "What year did this event take place?",
        options: ["2060", "2050", "2053"],
        answer: "2050"
      },
      {
        question: "Who was there?",
        options: ["Family", "Friends", "Colleagues"],
        answer: "Family"
      }
    ]
  },
  {
    id: "retirement",
    title: "Retirement Celebration",
    tag: "Event",
    image: "/images/career/retirement.jpg",
    note: "My husband retirement party with his colleagues. It was a joyous occasion filled with memories and gratitude.",
    questions: [
      {
        question: "What is this event?",
        options: ["Birthday", "Retirement", "Graduation"],
        answer: "Retirement"
      },
      {
        question: "What year did this event take place?",
        options: ["2020", "2025", "2030"],
        answer: "2030"
      },
      {
        question: "Who was there?",
        options: ["Family", "Friends", "Colleagues"],
        answer: "Colleagues"
      }
    ]
  },
  {
    id: "wedding1",
    title: "Garden Wedding",
    tag: "Event",
    image: "/images/wedding/wedding1.jpeg",
    note: "Attended a beautiful garden wedding of my grandson. The setting was picturesque and the atmosphere was filled with love and happiness.",
    questions: [
      {
        question: "What is this event?",
        options: ["Birthday", "Wedding", "Graduation"],
        answer: "Wedding"
      },
      {
        question: "Who wedding is this?",
        options: ["My Grandson", "My Niece", "My Nephew"],
        answer: "My Grandson"
      },
      {
        question: "What year did this event take place?",
        options: ["2040", "2042", "2045"],
        answer: "2045"
      },
    ]
  },
  {
    id: "mountain",
    title: "Loss in Nature",
    tag: "Travel",
    image: "/images/atlanta/Blairsville.jpeg",
    note: "Went on a trip with my friends and we found this place as a random spot in Blairsville, Georgia. It was a peaceful and reflective time surrounded by nature.",
    questions: [
      {
        question: "Where is this location?",
        options: ["Blairsville, Georgia", "Asheville, North Carolina", "Chattanooga, Tennessee"],
        answer: "Blairsville, Georgia"
      },
      {
        question: "Who were you with?",
        options: ["Family", "Friends", "Alone"],
        answer: "Friends"
      },
      {
        question: "What year did you go?",
        options: ["2020", "2023", "2025"],
        answer: "2023"
      }
    ]
  },
  {
    id: "christmas",
    title: "Holiday Cheer",
    tag: "Event",
    image: "/images/christmas/christmas.jpg",
    note: "Celebrated Christmas with family. It was a magical day filled with joy and togetherness.",
    questions: [
      {
        question: "What is this event?",
        options: ["Christmas", "New Year", "Thanksgiving"],
        answer: "Christmas"
      },
      {
        question: "What year did this event take place?",
        options: ["2020", "2022", "2023"],
        answer: "2020"
      },
      {
        question: "Who was there?",
        options: ["Family", "Friends", "Colleagues"],
        answer: "Family"
      }
    ]
  },
  {
    id: "paris",
    title: "City of Love",
    tag: "Travel",
    image: "/images/paris/paris.webp",
    note: "Visited Paris, the city of love, with my partner. We had a romantic and unforgettable experience exploring the city's iconic landmarks and charming streets.",
    questions: [
      {
        question: "What is this location?",
        options: ["London, England", "Rome, Italy", "Paris, France"],
        answer: "Paris, France"
      },
      {
        question: "Who were you with?",
        options: ["Family", "Friends", "Partner"],
        answer: "Partner"
      },
      {
        question: "What year did you go?",
        options: ["2020", "2030", "2045"],
        answer: "2030"
      }
    ]
  }, 
  {
    id: "honeymoon",
    title: "Honeymoon Bliss",
    tag: "Travel",
    image: "/images/maldives/honeymoon.webp",
    note: "Had a blissful honeymoon in the Maldives. The crystal-clear waters and luxurious resorts made it a truly unforgettable experience.",
    questions: [
      {
        question: "What is this location?",
        options: ["Bali, Indonesia", "Maldives", "Santorini, Greece"],
        answer: "Maldives"
      },
      {
        question: "Who were you with?",
        options: ["Family", "Friends", "Partner"],
        answer: "Partner"
      },
      {
        question: "What year did you go?",
        options: ["2020", "2025", "2030"],
        answer: "2030"
      }
    ] 
  },
];

// get saved note in diary from localStorage allow new edit note to be store
diaries.forEach((diary) => {
  const savedNote = localStorage.getItem(`memory-note-${diary.id}`);
  if (savedNote !== null) {
    diary.note = savedNote;
  }
})

// create a diary card for each diary entry with title and tag for home page
function createDiaryCard(title, tag, id) {
  const card = document.createElement("div");
  card.className = "diary-card";
  card.dataset.id = id;

  let tagClass = "";

  if (tag === "Travel") {
    tagClass = "travel-tag";
  } else if (tag === "Event") {
    tagClass = "event-tag";
  } else if (tag === "Family") {
    tagClass = "family-tag";
  }

  card.innerHTML = `
    <div class="card-content">
      <h3 class="diary-card-title">${title}</h3>
      <span class="diary-card-tag ${tagClass}">${tag}</span>
    </div>  
  `;

  card.addEventListener("click", () => {
    // Handle card click to show diary details
    openDiaryDetail(id);
  });
  return card;
}

const diaryContainer = document.getElementById("diary-container");
const filterButtons = document.querySelectorAll("[data-filter]");

// Render the list of current diary cards in the diary container
function renderDiaryList(diaryList){
  diaryContainer.innerHTML = "";
  
  diaryList.forEach(diaryData => {
    const card = createDiaryCard(diaryData.title, diaryData.tag, diaryData.id);
    diaryContainer.appendChild(card);
  });
}

// filter the diary list based on the selected tag
function filterDiaries(tag) {
  if (tag === "All") {
    return diaries;
  }
  return diaries.filter(diary => diary.tag === tag);
}

// update the active filter button and render the card list when a filter is selected
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedTag = button.dataset.filter;
    const filteredDiaries = filterDiaries(selectedTag);
    renderDiaryList(filteredDiaries);
  });
});


const homeView = document.getElementById("home-view");
const detailView = document.getElementById("detail-view");
const memoryDetail = document.getElementById("memory-detail");

// open the detail view for a specific diary selected
function openDiaryDetail(diaryId) {
  const selectedDiary = diaries.find(d => d.id === diaryId);
  if (!selectedDiary) {
    return;
  }

  homeView.classList.add("hidden");
  detailView.classList.remove("hidden");
  renderDiaryDetail(selectedDiary);
}

// render the detail view for a specific diary entry with its title, tag, image, note, and quiz questions
function renderDiaryDetail(diary) {
  let headerClass = "";
  let tagClass = "";

  if (diary.tag === "Travel") {
    headerClass = "travel-header";
    tagClass = "travel-tag";
  } else if (diary.tag === "Event") {
    headerClass = "event-header";
    tagClass = "event-tag";
  } else if (diary.tag === "Family") {
    headerClass = "family-header";
    tagClass = "family-tag";
  }
  
  memoryDetail.innerHTML = `
    <div class="memory-detail-container">
      <div class="memory-detail-header ${headerClass}">
        <div>
          <h2 class="memory-detail-title">${diary.title}</h2>
          <span class="memory-detail-tag">${diary.tag}</span>
        </div>
        <button id="close-detail-button" class="close-button" type="button">X</button>
      </div>

      <div class="memory-title-image-container">
        <img src="${diary.image}" alt="${diary.title}" class="memory-detail-image"/>

        <div id="quiz-wrapper">
          <div class="unlock-message">
            <h3> 🔒 Unlock Your Memory </h3>
            <p> Answer these questions correctly to reveal your note.! </p>       
          </div>
          <div id="quiz-container"></div>
        </div> 
        
        <div id="note-container"></div>
      </div>
    </div>
  `;

  // close button to return to homepage
  document.getElementById("close-detail-button").addEventListener("click", () => {
    detailView.classList.add("hidden");
    homeView.classList.remove("hidden");
    memoryDetail.innerHTML = "";
  });

  // call quiz questions for that specific card
  startQuiz(diary);
}

// render the quiz for a specific diary entry with its questions and options, and show feedback for correct or wrong answers
function startQuiz(diary) {
  const quizContainer = document.getElementById("quiz-container");
  const questions = diary.questions;

  let currentQuestionIndex = 0;
  let answeredCorrectly = 0;
  let showFeedback = false;
  let selectedOption = null;
  let isCorrect = false;

  // render the current question and its options in the quiz container
  function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex]

    quizContainer.innerHTML = `
      <div class="quiz-box">
        <p>Question ${currentQuestionIndex + 1} of ${questions.length}</p>
        <h3>${currentQuestion.question}</h3>

        <div class="quiz-options">
          ${currentQuestion.options.map((option, index) => `
            <button class="quiz-option" data-index="${index}">${option}</button>
          `).join("")}
        </div>

        <div id="quiz-feedback"></div>
      </div>
    `;
    
    // add click event listeners to the option buttons to handle answer selection
    const optionButtons = quizContainer.querySelectorAll(".quiz-option");
    optionButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        handleAnswerClick(index);
      });
    });
  }

  // handle the click event when an option is selected, show feedback, and move to the next question after a delay
  function handleAnswerClick(selectedIndex) {
    if (showFeedback) {
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const chosenOption = currentQuestion.options[selectedIndex];

    selectedOption = selectedIndex;
    isCorrect = chosenOption === currentQuestion.answer;
    // keep track the total of correct answer
    if (isCorrect) {
      answeredCorrectly++;
    }

    const optionButtons = quizContainer.querySelectorAll(".quiz-option");
    const feedback = document.getElementById("quiz-feedback");

    // disable all option buttons and show correct/wrong feedback based on the selected answer
    optionButtons.forEach((button, index) => {
      button.disabled = true;

      // compare if the selected answer is correct or not to render feedback
      if (button.textContent === currentQuestion.answer) {
        button.classList.add("correct");
      } else if (index === selectedIndex && !isCorrect) {
        button.classList.add("wrong");
      }
    });

    feedback.className = `quiz-feedback ${isCorrect ? "correct" : "wrong"}`;
    feedback.innerHTML = isCorrect ? "<p>Correct!</p>" : ` <p>Wrong! The correct answer is: ${currentQuestion.answer}</p>`;

    // move to the next question after a delay of 2 seconds
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showFeedback = false;
        selectedOption = null;
        renderQuestion();
      } else {
        renderQuizResult(answeredCorrectly, questions.length);
      }
    }, 2000);
  }

  // render the quiz result after all questions have been answered, showing the total score
  function renderQuizResult(score, total) {
    quizContainer.innerHTML = `
      <div class="quiz-box">
        <h3>Quiz Completed!</h3>
        <p>You answered ${score} out of ${total} questions correctly.</p>
      </div>
    `;

    // unlock note if all questions are answers correctly
    if (score === total) {
      renderUnlockedNote(diary);
    }
  }

  renderQuestion();
}

// Render unlock note and allow user to toggle between reading and editing
function renderUnlockedNote(diary) {
  const noteContainer = document.getElementById("note-container");
  let isEditing = false;

  // Re-render note card each time user switch between save and edit mode
  function renderNote(){
    noteContainer.innerHTML = `
      <div class="note-card">
        <div class="note-card-header">
          <h3 class="note-card-title">Your Memory Note </h3>
          <button 
            id="toggle-note-button" 
            class="note-toggle-button ${isEditing ? "save-mode" : "edit-mode"}"
            type="button"
          >
            ${isEditing ? "Save" : "Edit"}
          </button>
        </div>

        ${isEditing 
          ? `<textarea id="note-input" class="note-input">${diary.note || ""}</textarea>`  
          : `<p class="note-text">${diary.note || "No notes yet. Click Edit to add your memories!"}</p>`
        }
      </div>
    `;

    const toggleButton = document.getElementById("toggle-note-button");

    // mofify data - save note changes for each diary
    toggleButton.addEventListener("click", () => {
      if (isEditing) {
        const noteInput = document.getElementById("note-input");
        diary.note = noteInput.value;
        localStorage.setItem(`memory-note-${diary.id}`, diary.note);
      }

      isEditing = !isEditing;
      renderNote();

    });
  }
  renderNote();
}

// initial page load shows all the diary cards in homepage
renderDiaryList(diaries);