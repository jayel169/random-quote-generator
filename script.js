// Array of quotes
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "It is not how old you are, but how you are old.", author: "Jules Renard" },
    { quote: "To be great is to be misunderstood.", author: "Ralph Waldo Emerson" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { quote: "An unexamined life is not worth living.", author: "Socrates" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
    { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
    { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    { quote: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
    { quote: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
    { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "Everything has beauty, but not everyone can see it.", author: "Confucius" },
    { quote: "You can never plan the future by the past.", author: "Edmund Burke" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "The harder you fall, the higher you bounce.", author: "Unknown" },
    { quote: "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain.", author: "Unknown" },
    { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { quote: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
    { quote: "It’s not the years in your life that count, it’s the life in your years.", author: "Abraham Lincoln" },
    { quote: "Live the life you have imagined.", author: "Henry David Thoreau" },
    { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" }
];


// Get elements
let quoteText = document.getElementById('quote');
let newQuoteBtn = document.getElementById('new-quote');
let copyQuoteBtn = document.getElementById('copy-quote');

// Function to get a random quote
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    quoteText.innerText = randomQuote;
}

// Function to copy the quote to clipboard
function copyQuote() {
    let quote = quoteText.innerText; // Get the displayed quote
    navigator.clipboard.writeText(quote) // Copy to clipboard
        .then(function() {
            alert("Quote copied to clipboard!");
        })
        .catch(function(error) {
            console.error("Error copying text: ", error);
        });
}

// Add event listeners
newQuoteBtn.addEventListener('click', getRandomQuote);
copyQuoteBtn.addEventListener('click', copyQuote);

// Display a random quote when the page loads
getRandomQuote();
