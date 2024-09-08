# Random Quote Generator

Welcome to the Random Quote Generator! This React application offers a dynamic and interactive way to explore and enjoy random quotes. Built with a focus on user experience and modern web technologies, it features a variety of functionalities to enhance the quote-fetching experience.

It has been inspired and learnt from various platforms.

## Features

- **Random Quote Generation:** Retrieves and displays a random quote from the Quotable API.
- **Theme Filtering:** Allows users to filter quotes based on themes like Inspirational, Wisdom, and Humor, providing a personalized quote experience.
- **Text-to-Speech:** Converts the displayed quote to speech using the Web Speech API, making it accessible for users who prefer auditory learning.
- **Copy to Clipboard:** Enables users to copy the quote to their clipboard with a single click.
- **Tweet Quote:** Facilitates sharing of quotes directly on Twitter with a preformatted tweet.

## Technology Stack

- **React.js:** Utilized for building a responsive and interactive user interface.
- **FontAwesome:** Provides a rich set of icons for enhanced user interaction.
- **CSS (including @import for Google Fonts):** Used for styling the application and creating an engaging user interface with animations.

## How It Works

1. **Component Structure:**
   - **`App.js`:** The root component that renders the `QuoteGenerator` component.
   - **`QuoteGenerator.js`:** Manages the core functionality of the application. It handles fetching quotes from the Quotable API, theme filtering, and user interactions such as text-to-speech, copying to clipboard, and tweeting.
   - **`index.css`:** Contains global styles and animations to enhance the visual appeal of the application.

2. **Fetching Quotes:**
   - The `fetchQuote` function in `QuoteGenerator.js` retrieves quotes from the Quotable API. It supports filtering by theme and handles API responses to update the displayed quote and author.

3. **User Interactions:**
   - **Text-to-Speech:** Uses the Web Speech API to read the quote aloud.
   - **Copy to Clipboard:** Employs the Clipboard API to copy the quote to the user's clipboard.
   - **Tweeting:** Constructs a tweet URL with the quote and opens it in a new tab.

4. **Styling and Animation:**
   - The application uses CSS animations to create a visually appealing gradient background that transitions smoothly, enhancing the overall user experience.


