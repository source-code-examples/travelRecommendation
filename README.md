# Travel Recommender by TravelCom

## Introduction

This is a travel recommender built as part of the IBM Back-end JavaScript Developer Professional program. This project aims to provide users with personalized travel recommendations based on their search inputs.

## Features

- **Background Image:** A visually appealing background image on the homepage.
- **Search Functionality:** Users can search for destinations, temples, or beaches and get recommendations based on their input.
- **Dynamic Display of Results:** The search results are dynamically displayed with images, names, and descriptions of the recommended places.
- **No Results Handling:** If no results are found, a message is shown to the user.
- **Responsive Design:** The application is designed to be responsive and works well on different screen sizes.
- **Reset Functionality:** Users can clear the search results with a reset button.

## Technologies Used

- **HTML:** For the structure of the web pages.
- **CSS:** For styling the web pages and creating a responsive design.
- **JavaScript:** For adding interactivity and dynamic content.
- **Font Awesome:** For icons used in the navigation bar and social media links.
- **JSON:** For fetching and displaying travel recommendation data.

## How It Works

1. **Background Image:** The background image is set when the DOM content is loaded.
2. **Search Functionality:** When the user enters a search term and clicks the search button, the application fetches data from a local JSON file (`travel_recommendation_api.json`).
3. **Data Filtering:** The application filters the data based on the search input and displays the matching results.
4. **Dynamic Results Display:** The search results are displayed dynamically, including images, names, and descriptions.
5. **No Results Handling:** If no results are found, a short message is displayed to the user.
6. **Reset Functionality:** The reset button clears the search results.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- A modern web browser (e.g., Google Chrome, Firefox, Safari)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/travel-recommender.git
   cd travel-recommender
   ```

2. **Open the Project:**
   Open the `travel_recommendation.html` file in your web browser.

### File Structure

- `travel-recommendation.html`: The main HTML file for the project.
- `travel-recommendation.css`: The CSS file for styling the project.
- `travel_recommendation.js`: The JavaScript file for adding interactivity.
- `travel_recommendation_api.json`: The JSON file containing travel recommendation data.
- `about.html`: The About-Us page containing a company introduction and a list of team members
- `about.css`: The CSS file for styling the about.html page
- `contact.html`: The Contact-Us page containing a contact form
- `contact.css`: The CSS file for styling the contact.html page

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Icons by [Font Awesome](https://fontawesome.com/).
