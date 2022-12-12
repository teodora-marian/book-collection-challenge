# Getting Started with RIA Book Collection App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

## Project Structure

The project is structured in src > components. Here you can find reusable components: BookCollection, Header, Footer, Modal.

I started with creating a basic React JS app structure: The first feature I implemented was the book list. I called the API you provided and I displayed the list of available books with the info I got: book cover, title, authors, categories.

The next features I implemented were the header and footer. Inside the header I placed an `<h1>` with the title of the app and a button for changing the theme.

Then I worked on the the theme selector. Here I decided to save a "theme" variable in local storage, that has 2 values: dark-theme, light-theme. The default value is 'dark-theme'. When clicking on the button, you can toggle between these 2 preset values.

For the different grid-list view functionality, I display two buttons that can switch from one to another. I have 1 common class in css `.book-collection` and 2 specialised classes `.book-collection-grid` and `.book-collection-list` that help me render the content as desired. I added a new state called "view" in `BookCollection` component that helps changing the view accordingly.

Lastly, I worked on the modal by setting the state to determine if the modal is open or closed. The displayed data is the one retrieved via API call. I added a "View Details" button, which opens the modal and displays the data as requested: image, title, authors and short description.

For the buttons I used some elements from react material ui.
Also, for the Modal, I imported the CloseIcon from material ui icons.

If I had more time, I would have implemented the search functionality. For this, I would filter the books list by the input text. I would use the title of the books as a search criteria.

Also, I would improve the UI and architecture, for a better overall user-experience.
