// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'another have stand again or run  right good interest child another problem monkey might have gone wrong there we stand point not good than if your numbers can go find another one or add one cup tea humble got their first',
    'I thought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'Believe you can and you are halfway there.',
    'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    'Nothing clears up a case so much as stating it to another person.',
    'Climate change is a major issue facing our planet. It is caused by the burning of fossil fuels, deforestation, and other human activities. The effects of climate change include rising sea levels, more severe weather events, and the extinction of many plant and animal species. To combat climate change, we must reduce our greenhouse gas emissions and transition to renewable energy sources.',
    'The benefits of regular exercise are well-documented. Exercise can improve cardiovascular health, help with weight management, and even boost mood and cognitive function. Additionally, regular physical activity has been linked to a reduced risk of chronic diseases such as diabetes and certain types of cancer. Incorporating a variety of activities such as cardio, strength training and stretching is key to a well-rounded exercise routine.',
    'The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.',
    'or over feel you other  on go become late right they set well if when program does not give up start focus click not here if when program other then possible out any nation help such late end word not going right',
    'begin against men not great those leave right to time must another increase too end part no she year use hand might word life increase only more use now need little place great also other work ask but anything thing however another custom time words between well would system one develop help over early over before increase must show',
    'how world both could plan few free things focus here king invitaion changes over anything and go enter the test command dark color line words no use remains must be this time the truth gone have word one or on point good than number thought proves deductoins proves to be bearing some out fas transitions energy sources regular are well can improve mood boost been linkes to variety certain'
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // Put the quote into an array of words
    words = quote.split(' ');
    // reset the word index for tracking
    wordIndex = 0;
  
    // UI updates
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    // Clear any prior messages
    messageElement.innerText = '';
  
    // Setup the textbox
    // Clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event handler
  
    // Start the timer
    startTime = new Date().getTime();
  });

  // at the end of script.js
typedValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      // end of sentence
      // Display success
      const elapsedTime = new Date().getTime() - startTime;
      const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
      messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      // end of word
      // clear the typedValueElement for the new word
      typedValueElement.value = '';
      // move to the next word
      wordIndex++;
      // reset the class name for all elements in quote
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      // highlight the new word
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      // currently correct
      // highlight the next word
      typedValueElement.className = '';
    } else {
      // error state
      typedValueElement.className = 'error';
    }
  });