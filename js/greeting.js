// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Haldun';

// Here you can change your greetings
const gree1 = 'Uyku vakti!  ';
const gree2 = 'Günaydın!  ';
const gree3 = 'İyi günler,  ';
const gree4 = 'İyi akşamlar,  ';
const gree5 = 'İyi geceler,  ';
const gree6 = 'İyi akşamlar,  ';

// Define the hours of the greetings
if (hour >= 1 && hour < 6) {
  document.getElementById('greetings').innerText = gree1;
} else if (hour >= 6 && hour < 10) {
  document.getElementById('greetings').innerText = gree2;
} else if (hour >= 10 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else if (hour >= 17 && hour < 22) {
  document.getElementById('greetings').innerText = gree4 + name;
} else {
  document.getElementById('greetings').innerText = gree5 + name;
}
