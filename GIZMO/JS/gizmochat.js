let speech = new SpeechSynthesisUtterance();
speech.rate = 1;
speech.volume = 1;
speech.pitch = 1;

speech.lang = "en";


window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[2];
};

words = ['gizmo welcomes you', 'hello i am gizmo, how may i help you', 'Hi there, i am gizmo and you ?', 'Hi there! Welcome to gizmos space', 'Hello, my name is gizmo, how are you ', 'Hello! Welcome to my space, and thanks for visiting. How can I help you today', 'i am gizmo how may i be of assistance'];
pain = ['ouch! that hurt alittle', 'stop that please', 'easy there i am fragile or at least your screen is', 'stop that!', 'i dare you to touch me again, with a hammer this time', 'thats not alright']
head = ['thats my head you know', 'hey you too touchy', 'you have a head too, you know', 'are you aways this touchy', 'i just got my helmet waxed, dont ruin the shine']
eye = ['how would you like it if i poked you in the eye', 'are you trying to blind me', 'hey careful robotic eyes arent cheap you know']
mouth = ['thats my mouth', 'do you also have a mouth ?', 'i dont really eat with that, lol']
body = ['okay that feels nice', 'ooh yeeaahhh', 'one more please, do that again', 'hmmmmmmm']
jokes = ['Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.','Why did the teddy bear say no to dessert? Because she was stuffed.','What do kids play when their mom is using the phone? Bored games.', ' What do you call an ant who fights crime? A vigilANTe!', 'Why are snails slow? Because they’re carrying a house on their back.', 'What’s the smartest insect? A spelling bee!', 'What does a storm cloud wear under his raincoat? Thunderwear.', 'What is fast, loud and crunchy? A rocket chip', 'How does the ocean say hi? It waves!', 'What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.']
document.querySelector(".start-talk").addEventListener("click", () => {
  speech.text = words[Math.floor(Math.random() * words.length)];
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


// window.speechSynthesis.cancel();


// $(function() {
//   speech.text = words[Math.floor(Math.random() * words.length)];
//   window.speechSynthesis.speak(speech);
// });