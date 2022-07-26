let speech = new SpeechSynthesisUtterance();
speech.rate = .6;
speech.volume = 1;
speech.pitch = 1;

speech.lang = "en";

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[2];
};

timePrefix = ['your current time is ', 'your local time is ', 'local time ', 'current time is ']
dontund = ['i dont understand what that means at the moment, i am still learning', 'forgive me i dont know what that means', 'this  i do not understand at the moment', 'theres quit alot i dont know at the moment']
noGet = ['i am unable to understand', 'please repeat youeself']
fine = ['i am fine', 'i am doing fine', 'doing good', 'doing fine thank you', 'i am alright']
myname = ['my name is gizmo', 'my developers call me gizmo', 'gizmo is the name', 'i am gizmo']
replytodoingood = ['that is lovely to hear', 'thats great !', 'lovely', 'i happy for that']
functions = ['i can do a few thing are the moment, but i am still under developement', 'not much for now', 'one or two things at the moment, thats not much i know']
words = ['gizmo welcomes you', 'hello i am gizmo, how may i help you', 'Hi there, i am gizmo and you ?', 'Hi there! Welcome to gizmos space', 'Hello, my name is gizmo, how are you ', 'Hello! Welcome to my space, and thanks for visiting. How can I help you today', 'i am gizmo how may i be of assistance'];
pain = ['ouch! that hurt alittle', 'stop that please', 'easy there i am fragile or at least your screen is', 'stop that!', 'i dare you to touch me again, with a hammer this time', 'thats not alright']
head = ['thats my head you know', 'hey you too touchy', 'you have a head too, you know', 'are you aways this touchy', 'i just got my helmet waxed, dont ruin the shine']
eye = ['how would you like it if i poked you in the eye', 'are you trying to blind me', 'hey careful robotic eyes arent cheap you know']
mouth = ['thats my mouth', 'do you also have a mouth ?', 'i dont really eat with that, lol']
body = ['okay that feels nice', 'one more please, do that again', ]
jokes = ['Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.', 'Why did the teddy bear say no to dessert? Because she was stuffed.', 'What do kids play when their mom is using the phone? Bored games.', ' What do you call an ant who fights crime? A vigilANTe!', 'Why are snails slow? Because they’re carrying a house on their back.', 'What’s the smartest insect? A spelling bee!', 'What does a storm cloud wear under his raincoat? Thunderwear.', 'What is fast, loud and crunchy? A rocket chip', 'How does the ocean say hi? It waves!', 'What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.']








if ("webkitSpeechRecognition" in window) {

  let speechRecognition = new webkitSpeechRecognition();
  let final_transcript = "";
  // Set the properties for the Speech Recognition object
  speechRecognition.continuous = true;


  speechRecognition.onresult = (event) => {
    // Loop through the results from the speech recognition object.
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript = event.results[i][0].transcript;
      }
    }

    var reply = final_transcript;
    if (reply.includes("how are you") == true) {
      speech.text = fine[Math.floor(Math.random() * fine.length)];
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("hey hello gizmo") == true) {
      speech.text = words[Math.floor(Math.random() * words.length)];
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("what is your name") == true) {
      speech.text = myname[Math.floor(Math.random() * myname.length)];
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("what can you do") == true) {
      speech.text = functions[Math.floor(Math.random() * functions.length)];
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("close your eyes") == true) {
      document.querySelector(".left-eye").style.height = ".1rem";
      document.querySelector(".left-eye").style.animation = "none";
      document.querySelector(".right-eye").style.height = ".1rem";
      document.querySelector(".right-eye").style.animation = "none";
    } else if (reply.includes("dark") == true) {
      document.querySelector("body").style.background = "#222";
    } else if (reply.includes("light") == true) {
      document.querySelector("body").style.background = "#eee";
    } else if (reply.includes("joke") == true) {

      speech.text = 'you wanna hear a joke ?';
      window.speechSynthesis.speak(speech);

      if (true) {
        if (reply.includes("none") == true) {
          {
            speech.text = 'no jokes then';
            window.speechSynthesis.speak(speech);
          }
        } else {

          speech.text = jokes[Math.floor(Math.random() * jokes.length)];
          window.speechSynthesis.speak(speech);
        }
      }
    } else if (reply.includes("time") == true) {
      speech.text = timePrefix[Math.floor(Math.random() * timePrefix.length)] + new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("date") == true) {
      var date = new Date()
      const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];



      speech.text = DAYS[date.getDay()] + MONTHS[date.getMonth()] + date.getDate() + date.getFullYear()
      window.speechSynthesis.speak(speech);
    } else if (reply.includes("open your eyes") == true) {
      document.querySelector(".left-eye").style.height = ".8rem";
      document.querySelector(".left-eye").style.animation = "left-eye-blink 3s linear infinite alternate";
      document.querySelector(".right-eye").style.height = ".8rem";
      document.querySelector(".right-eye").style.animation = "right-eye-blink 3s linear infinite alternate";
    } else {
      speech.text = "you just said  " + " " + reply + " " + dontund[Math.floor(Math.random() * dontund.length)];
      window.speechSynthesis.speak(speech);
    }
    console.log(reply)
  };

  // Set the onClick property of the start button
  document.querySelector(".start-talk").onclick = () => {
    // Start the Speech Recognition
    speechRecognition.start();
  };



} else {
  console.log("Speech Recognition Not Available");
}


// // movie api//

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4e91d6c608msh007f91f31050790p1549e6jsn881692d438c2',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=movies', options)
    .then(response => response.json())
   .then(data =>{
    const list = data.d;
    list.map((item)=> {
      const name = item.l;
      const poster = item.i.imageUrl;
      const rank = item.rank;
      const type = item.q;
      const movieCard = `
      <div class="movie-card">
                    <div class="movies-image">
                        <img src="${poster}" alt="">
                    </div>
                    <div class="movie-details">
                        <h4 class="movie-title">${name}</h4>
                        <div class="two-info">
                            <p class="rating">${rank}</p>

                            <p class="type-tv-movie">${type}</p>
                        </div>
                    </div>
                </div>`


    document.querySelector(".movie-card-holder").innerHTML += movieCard; 
    console.log(item)
    })
   })
    .catch(err => {console.error(err)});


    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
    .then(response => response.json())
   .then(data =>{
    const list = data.d;
    list.map((itemTwo)=> {
      const nameTwo = itemTwo.l;
      const posterTwo = itemTwo.i.imageUrl
      const ranktwo = itemTwo.rank;
      const typetwo = itemTwo.q;
      const movieCard = `
      <div class="movie-card">
                    <div class="movies-image">
                        <img src="${posterTwo}" alt="">
                    </div>
                    <div class="movie-details">
                        <h4 class="movie-title">${nameTwo}</h4>
                        <div class="two-info">
                            <p class="rating">${ranktwo}</p>

                            <p class="type-tv-movie">${typetwo}</p>
                        </div>
                    </div>
                </div>`


    document.querySelector(".movie-card-holder").innerHTML += movieCard; 
    console.log(itemTwo)
    })
   })
    .catch(err => {console.error(err)});


    
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=dracular', options)
    .then(response => response.json())
   .then(data =>{
    const list = data.d;
    list.map((itemThree)=> {
      const nameThree = itemThree.l;
      const posterThree = itemThree.i.imageUrl
      const rankThree = itemThree.rank;
      const typeThree = itemThree.q;
      const movieCard = `
      <div class="movie-card">
                    <div class="movies-image">
                        <img src="${posterThree}" alt="">
                    </div>
                    <div class="movie-details">
                        <h4 class="movie-title">${nameThree}</h4>
                        <div class="two-info">
                            <p class="rating">${rankThree}</p>

                            <p class="type-tv-movie">${typeThree}</p>
                        </div>
                    </div>
                </div>`


    document.querySelector(".movie-card-holder").innerHTML += movieCard; 
    console.log(itemThree)
    })
   })
    .catch(err => {console.error(err)});


    
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=red', options)
    .then(response => response.json())
   .then(data =>{
    const list = data.d;
    list.map((itemfour)=> {
      const namefour = itemfour.l;
      const posterfour = itemfour.i.imageUrl
      const rankFour = itemfour.rank;
      const typefour = itemfour.q;
      const movieCard = `
      <div class="movie-card">
                    <div class="movies-image">
                        <img src="${posterfour}" alt="">
                    </div>
                    <div class="movie-details">
                        <h4 class="movie-title">${namefour}</h4>
                        <div class="two-info">
                            <p class="rating">${rankFour}</p>

                            <p class="type-tv-movie">${typefour}</p>
                        </div>
                    </div>
                </div>`


    document.querySelector(".movie-card-holder").innerHTML += movieCard; 
    console.log(itemfour)
    })
   })
    .catch(err => {console.error(err)});

