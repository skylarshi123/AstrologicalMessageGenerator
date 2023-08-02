const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];
  
  const astrologicalPredictions = [
    "Today, you will encounter unexpected opportunities. Embrace them with enthusiasm and confidence.",
    "Your hard work will pay off soon. Keep pushing forward and stay focused on your goals.",
    "You have the power to overcome any challenges that come your way. Trust your instincts and move ahead with courage.",
    "In matters of the heart, a new chapter is about to begin. Embrace the changes with an open heart.",
  ];
  
  const inspirationalThemes = [
    "Love", "Success", "Happiness", "Courage", "Growth", "Gratitude",
    "Positivity", "Confidence", "Creativity", "Hope", "Peace", "Patience",
  ];
  
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }


  function generateAstrologicalMessage() {
    const randomZodiacIndex = getRandomNumber(zodiacSigns.length);
    const randomPredictionIndex = getRandomNumber(astrologicalPredictions.length);
    const randomThemeIndex = getRandomNumber(inspirationalThemes.length);
  
    const zodiacSign = zodiacSigns[randomZodiacIndex];
    const prediction = astrologicalPredictions[randomPredictionIndex];
    const theme = inspirationalThemes[randomThemeIndex];
  
    const message = `Your Astrological Sign: ${zodiacSign}\nPrediction: ${prediction}\nTheme: ${theme}`;
  
    return message;
  }

  

function displayMessage() {
    const message = generateAstrologicalMessage();
    document.getElementById('message').innerText = message;
  }
  
  const generateButton = document.getElementById('button');
  generateButton.addEventListener('click', displayMessage);