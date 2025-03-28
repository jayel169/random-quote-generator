// Array of quotes
let quotes = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "Don’t let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. - Unknown",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "Don’t wait. The time will never be just right. - Napoleon Hill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The best revenge is massive success. - Frank Sinatra",
    "It is never too late to be what you might have been. - George Eliot",
    "Your limitation—it's only your imagination. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown",
    "Great things never come from comfort zones. - Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "The key to success is to focus on goals, not obstacles. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. - Unknown",
    "Wake up with determination. Go to bed with satisfaction. - Unknown",
    "Little things make big days. - Unknown",
    "It’s going to be hard, but hard does not mean impossible. - Unknown",
    "Don’t wait for opportunity. Create it. - Unknown",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. - Unknown",
    "The key to success is to start before you are ready. - Marie Forleo",
    "Dream it. Believe it. Build it. - Unknown",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "If you can dream it, you can do it. - Walt Disney",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder you work, the luckier you get. - Gary Player",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. - Marie Forleo",
    "Hard work beats talent when talent doesn’t work hard. - Tim Notke",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you’re going through hell, keep going. - Winston Churchill",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "We may encounter many defeats, but we must not be defeated. - Maya Angelou",
    "To be the best, you must be able to handle the worst. - Wilson Kanadi",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward. - Martin Luther King Jr.",
    "You just can’t beat the person who never gives up. - Babe Ruth",
    "A goal is not always meant to be reached, it often serves simply as something to aim at. - Bruce Lee",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Opportunities are usually disguised as hard work, so most people don’t recognize them. - Ann Landers",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Everything you can imagine is real. - Pablo Picasso",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "There are no limits to what you can accomplish, except the limits you place on your own thinking. - Brian Tracy",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Opportunities don’t happen, you create them. - Chris Grosser",
    "Doubt kills more dreams than failure ever will. - Suzy Kassem",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "You are braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "It’s not the years in your life that count, it’s the life in your years. - Abraham Lincoln",
    "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do. - Unknown",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Action is the foundational key to all success. - Pablo Picasso",
    "Success is how high you bounce when you hit bottom. - George S. Patton",
    "The best revenge is massive success. - Frank Sinatra",
    "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "All our dreams can come true if we have the courage to pursue them. - Walt Disney",
    "You are capable of more than you know. - Glinda the Good Witch",
    "Success is not about being the best, it’s about always getting better. - Behdad Sami",
    "To live a creative life, we must lose our fear of being wrong. - Joseph Chilton Pearce",
    "Success is the result of preparation, hard work, and learning from failure. - Colin Powell",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The most common way people give up their power is by thinking they don’t have any. - Alice Walker",
    "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "If you want to go fast, go alone. If you want to go far, go together. - African Proverb",
    "Success is a journey, not a destination. - Ben Sweetland",
    "Success is the progressive realization of a worthy goal or ideal. - Earl Nightingale",
    "If you don’t build your dream, someone else will hire you to help them build theirs. - Dhirubhai Ambani",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer"
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
