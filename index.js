var firebaseConfig = {
    apiKey: "AIzaSyC4Pj3xeUAexKxuUjS8pznSQCsYz8_b67U",
  authDomain: "kontehgraphics-659b3.firebaseapp.com",
  projectId: "kontehgraphics-659b3",
  storageBucket: "kontehgraphics-659b3.appspot.com",
  messagingSenderId: "528064282006",
  appId: "1:528064282006:web:d5afb44671086ddcbc71b7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
alert('Thank you for contacting me. You will be responded within 24hours')
  //   Get input Values
  
  let email = document.querySelector(".email").value;
  let comment = document.querySelector(".comment").value;
  let description = document.querySelector(".description").value;
  let date = document.querySelector(".date").value;
  console.log(email, comment, description, date);

  saveContactInfo(email, comment, description, date);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(email, comment, description, date) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    email: email,
    comment: comment,
    description: description,
    date: date
  });
}