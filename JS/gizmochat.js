let speech = new SpeechSynthesisUtterance();
speech.rate = 1.2;
speech.volume = 1;
speech.pitch = 1;

fineResponseArray = [];

speech.lang = "en";

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[1];
};
dontUnd = [
  "i dont understand what that means at the moment, i am still learning",
  "forgive me i dont know what that means",
  "this  i do not understand at the moment",
  "there are quit a lot i dont know at the moment",
];
noGet = ["i am unable to understand", "please repeat yourself"];

// fine = [
//   "i am fine",
//   "i am doing fine",
//   "doing good",
//   "doing fine thank you",
//   "i am alright",
// ];
myName = [
  "my name is gizmo",
  "my developers call me gizmo",
  "gizmo is the name",
  "i am gizmo",
];
replyToDoingGood = [
  "that is lovely to hear",
  "thats great !",
  "lovely",
  "i happy for that",
];
functions = [
  "i can do a few thing are the moment, but i am still under development, i can tell pretty funny jokes though",
  "not much for now, wanna hear some advice",
  "one or two things at the moment, thats not much i know",
  "For now, just few things, which include telling funny jokes",
  "For now, just few things, which include giving pretty good advice",
];
words = [
  "gizmo welcomes you",
  "hello i am gizmo, how may i help you",
  "Hi there, i am gizmo and you ?",
  "Hi there! Welcome to gizmos space",
  "Hello! my name is gizmo, how are you ",
  "Hello! Welcome to my space, and thanks for visiting. How can I help you today",
  "i am gizmo how may i be of assistance",
];
pain = [
  "ouch! that hurt a little",
  "stop that please",
  "easy there i am fragile or at least your screen is",
  "stop that!",
  "i dare you to touch me again, with a hammer this time",
  "hey! dont ruin my antenna",
  "thats not alright",
];
head = [
  "thats my head you know",
  "hey you too touchy",
  "you have a head too, you know",
  "are you always this touchy",
  "i just got my helmet waxed, dont ruin the shine",
];
eye = [
  "how would you like it if i poked you in the eye",
  "are you trying to blind me",
  "hey careful robotic eyes arent cheap you know",
];
mouth = [
  "thats my mouth",
  "do you also have a mouth ?",
  "i dont really eat with that, lol",
];
body = [
  "okay that feels nice",
  "one more please, do that again",
  "that tickles, ha ha ha",
];
// jokes = [
//   "Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.",
//   "Why did the teddy bear say no to dessert? Because she was stuffed.",
//   "What do kids play when their mom is using the phone? Bored games.",
//   " What do you call an ant who fights crime? A vigilANTe!",
//   "Why are snails slow? Because they’re carrying a house on their back.",
//   "What’s the smartest insect? A spelling bee!",
//   "What does a storm cloud wear under his raincoat? Thunderwear.",
//   "What is fast, loud and crunchy? A rocket chip",
//   "How does the ocean say hi? It waves!",
//   "What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
// ];
jokeTag = [
  "attitude",
  "life",
  "men",
  "women",
  "sport",
  "beauty",
  "sarcastic",
  "marriage",
  "people",
  "car",
  "animal",
  "dirty",
  "love",
  "IT",
  "stupid",
  "motivational",
  "money",
  "intelligence",
  "insults",
  "rude",
  "ugly",
  "time",
  "work",
  "communication",
  "hate",
  "Father's",
  "Day",
  "family",
  "political",
  "doctor",
  "food",
  "kids",
  "Christmas",
  "flirty",
  "mistake",
  "fighting",
  "age",
  "retirement",
  "success",
  "friendship",
  "happiness",
  "school",
  "health",
  "Halloween",
  "birthday",
  "travel",
  "Valentines",
  "fat",
  "graduation",
];

// API response for how is gizmo Feeling
async function getFineResponse() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "7DyvL8yxJ6R3",
      "X-RapidAPI-Key": "d35777d195msh091015c97955fb7p10631ejsn29943fabac0f",
      "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
    },
  };

  let res = await fetch(
    "https://random-stuff-api.p.rapidapi.com/ai?msg=Hi%20there%2C%20how%20are%20you%3F%20(REQUIRED)&bot_name=Gizmo&bot_gender=male&bot_master=PGamerX%20(OPTIONAL)&bot_age=19%20(OPTIONAL)&bot_company=PGamerX%20Studio%20(OPTIONAL)&bot_location=India%20(OPTIONAL)&bot_email=admin%40pgamerx.com%20(OPTIONAL)&bot_build=Public%20(OPTIONAL)&bot_birth_year=2002%20(OPTIONAL)&bot_birth_date=1st%20January%2C%202002%20(OPTIONAL)&bot_birth_place=India%20(OPTIONAL)&bot_favorite_color=Blue%20(OPTIONAL)&bot_favorite_book=Harry%20Potter%20(OPTIONAL)&bot_favorite_band=Imagine%20Dargons&bot_favorite_artist=Eminem&bot_favorite_actress=Zendaya%20Coleman&bot_favorite_actor=Jim%20Carrey%20(OPTIONAL)&id=For%20customised%20response%20for%20each%20user",
    options
  );

  res = await res.json();
  speech.text = await res.AIResponse;
  window.speechSynthesis.speak(speech);

  return;
}

// API for jokes
async function getJokeResponse() {
  const tag = jokeTag[Math.floor(Math.random() * jokeTag.length)];
  console.log(tag);
  const options = {
    method: "GET",
    headers: {
      Authorization: "7DyvL8yxJ6R3",
      "X-RapidAPI-Key": "d35777d195msh091015c97955fb7p10631ejsn29943fabac0f",
      "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
    },
  };

  fetch(
    `https://random-stuff-api.p.rapidapi.com/joke?tag=${tag}&blacklist=dirty%2Cmen%2Csex`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      speech.text = response.joke;
      window.speechSynthesis.speak(speech);
      console.log(response);
    })
    .catch((err) => console.error(err));
}

// API for advice
async function getAdviceResponse() {
  let responseObject = await fetch("https://api.adviceslip.com/advice");
  let response = await responseObject.json();
  speech.text = response.slip.advice;
  window.speechSynthesis.speak(speech);
}

document.querySelector(".start-talk").addEventListener("load", () => {
  speech.text = fine;
  window.speechSynthesis.speak(speech);
});
document.querySelector(".antenna").addEventListener("click", () => {
  speech.text = pain[Math.floor(Math.random() * pain.length)];
  window.speechSynthesis.speak(speech);
});

document.querySelector(".gizmo-head").addEventListener("click", () => {
  speech.text = head[Math.floor(Math.random() * head.length)];
  window.speechSynthesis.speak(speech);
});
document.querySelector(".gizmo-eye").addEventListener("click", () => {
  speech.text = eye[Math.floor(Math.random() * eye.length)];
  window.speechSynthesis.speak(speech);
});
document.querySelector(".gizmo-mouth").addEventListener("click", () => {
  speech.text = mouth[Math.floor(Math.random() * mouth.length)];
  window.speechSynthesis.speak(speech);
});
document.querySelector(".gizmo-torso").addEventListener("click", () => {
  speech.text = body[Math.floor(Math.random() * body.length)];
  window.speechSynthesis.speak(speech);
});

if ("webkitSpeechRecognition" in window) {
  let speechRecognition = new webkitSpeechRecognition();
  let final_transcript = "";
  // Set the properties for the Speech Recognition object
  speechRecognition.continuous = true;

  speechRecognition.onresult = (event) => {
    console.log(event);
    // Loop through the results from the speech recognition object.
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript = event.results[i][0].transcript;
      }
    }

    var reply = final_transcript;

    if (reply.includes("how are you") == true) {
      getFineResponse();
      return;
    } else if (
      reply.includes("how are you") ||
      reply.includes("hello") ||
      reply.includes("hi")
    ) {
      getFineResponse();
    } else if (
      reply.includes("an advice") ||
      reply.includes("another advice") ||
      reply.includes("more advice")
    ) {
      getAdviceResponse();
    } else if (reply.includes("what is your name") == true) {
      speech.text = myName[Math.floor(Math.random() * myName.length)];
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("what can you do") == true) {
      speech.text = functions[Math.floor(Math.random() * functions.length)];
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("Google") == true) {
      window.open("https://google.com");
    } 
    
    else if (reply.includes("close your eyes") == true) {
      document.querySelector(".left-eye").style.height = ".1rem";
      document.querySelector(".left-eye").style.animation = "none";
      document.querySelector(".right-eye").style.height = ".1rem";
      document.querySelector(".right-eye").style.animation = "none";
    } 

    else if (reply.includes("move up") == true) {
      document.querySelector(".gizmo-holder").style.marginTop  = "-230px";
    } 
    
    else if (reply.includes("move down") == true) {
      document.querySelector(".gizmo-holder").style.marginTop  = "230px";
    } 
    
    else if (reply.includes("reset") == true) {
      document.querySelector(".gizmo-holder").style.marginTop  = "0px";
      document.querySelector("body").style.opacity = "1";
    } 

 
    else if (reply.includes("fade away") == true) {
      document.querySelector("body").style.opacity = ".1";
    } 
    
    else if (reply.includes("dark") == true) {
      document.querySelector("body").style.background = "#222";
    } else if (reply.includes("light") == true) {
      document.querySelector("body").style.background = "#eee";
    } else if (
      reply.includes("tell me a joke") ||
      reply.includes("another joke") ||
      reply.includes("more joke")
    ) {
      getJokeResponse();
    } else if (reply.includes("time") == true) {
      const d = new Date();
      let currentDate = {
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear(),
        hours: d.getHours(),
        minutes: d.getMinutes(),
      };
      if (currentDate.hours > 12) {
        const hours = currentDate.hours - 12;
        speech.text =
          hours.toString() + ` ` + currentDate.minutes.toString() + ` ` + `pm`;
      } else if (currentDate.hours < 12) {
        speech.text =
          currentDate.hours.toString() +
          ` ` +
          currentDate.minutes.toString() +
          ` ` +
          `am`;
      } else {
        speech.text =
          currentDate.hours.toString() +
          ` ` +
          currentDate.minutes.toString() +
          ` ` +
          `pm`;
      }
      // speech.text = d.getDate() + d.getMonth() + 1 + d.getFullYear();
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("open your eyes") == true) {
      document.querySelector(".left-eye").style.height = ".8rem";
      document.querySelector(".left-eye").style.animation =
        "left-eye-blink 3s linear infinite alternate";
      document.querySelector(".right-eye").style.height = ".8rem";
      document.querySelector(".right-eye").style.animation =
        "right-eye-blink 3s linear infinite alternate";
    } else {
      speech.text = dontUnd[Math.floor(Math.random() * dontUnd.length)];
      window.speechSynthesis.speak(speech);
    }
    console.log(reply);
  };

  // Set the onClick property of the start button
  document.querySelector(".start-talk").onclick = () => {
    // Start the Speech Recognition

    speechRecognition.start();
  };
} else {
  console.log("Speech Recognition Not Available");
}
