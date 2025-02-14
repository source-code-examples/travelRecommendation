document.addEventListener("DOMContentLoaded", function () {
  // Set the background image
  const bgImg = document.getElementById("bg-img");
  bgImg.style.backgroundImage = "url('./images/blue-city-bg-img.jpg')";

  // Add click event listener to the search button
  document
    .getElementById("search-button")
    .addEventListener("click", function () {
      // Get the search input value and convert it to lowercase
      const searchInput = document
        .getElementById("search-input")
        .value.toLowerCase();

      // Fetch data from the travel recommendation API
      fetch("./travel_recommendation_api.json")
        .then((response) => response.json())
        .then((data) => {
          const results = [];

          // Iterate through countries in the API data
          data.countries.forEach((country) => {
            // Check if search input matches country name or contains keywords "country" or "countries"
            if (
              searchInput.includes(country.name.toLowerCase()) ||
              searchInput.includes("country") ||
              searchInput.includes("countries")
            ) {
              // Iterate through cities in the matched country
              country.cities.forEach((city) => {
                // Add city details to results array
                results.push({
                  name: city.name,
                  imageUrl: city.imageUrl,
                  description: city.description,
                });
              });
            }
          });

          // Check if search input contains keywords "temple" or "temples"
          if (
            searchInput.includes("temple") ||
            searchInput.includes("temples")
          ) {
            // Add temple details to results array
            data.temples.forEach((temple) => {
              results.push({
                name: temple.name,
                imageUrl: temple.imageUrl,
                description: temple.description,
              });
            });
          }

          // Check if search input contains keywords "beach" or "beaches"
          if (
            searchInput.includes("beach") ||
            searchInput.includes("beaches")
          ) {
            // Add beach details to results array
            data.beaches.forEach((beach) => {
              results.push({
                name: beach.name,
                imageUrl: beach.imageUrl,
                description: beach.description,
              });
            });
          }

          // Display search results
          displayResults(results);
        })
        .catch((error) => console.error("Error fetching data:", error));
    });
});

// Function to display search results
function displayResults(results) {
  const searchInput = document.getElementById("search-input");
  searchInput.value = "";

  const searchResultsDiv = document.getElementById("search-results-div");
  const teaserText = document.getElementById("teaser-text");
  const headerTitle = document.getElementById("header-title");
  const noResultsDiv = document.getElementById("no-results-div");

  searchResultsDiv.innerHTML = "";
  noResultsDiv.innerHTML = "";
  searchResultsDiv.style.display = "flex";

  // Check if no results were found
  if (results.length === 0) {
    searchResultsDiv.style.display = "none";
    noResultsDiv.innerHTML =
      '<p id="no-result-p" style="color: white; font-weight: bold; display: flex; padding: 30px; opacity: 0.7;  font-size: 28px; text-align: center;  align-items: center; background-color: #ff6347; border-radius: 20px; height: 12rem; width: 14rem; position: absolute; top: 30rem; right: 15rem;">No results found.</p>';

    teaserText.style.left = "20%";
    return;
  }

  // Iterate through results and create HTML elements to display them
  results.forEach((result) => {
    teaserText.style.left = "20%";
    teaserText.style.top = "60%";
    headerTitle.style.top = "40%";
    headerTitle.style.left = "25%";
    // searchResultsDiv.style.top = "18%";

    const resultsDivElement = document.createElement("div");
    resultsDivElement.classList.add("results-div");

    const resultsImgElement = document.createElement("img");
    resultsImgElement.src = result.imageUrl;
    resultsImgElement.alt = result.name;

    const resultsHeaderElement = document.createElement("h3");
    resultsHeaderElement.textContent = result.name;

    const resultsParagraphElement = document.createElement("p");
    resultsParagraphElement.textContent = result.description;

    const travelButton = document.createElement("button");
    travelButton.textContent = "Wanna travel?";
    travelButton.addEventListener("click", () => {
      window.location.href = "./pages/contact.html";
    });

    resultsDivElement.appendChild(resultsHeaderElement);
    resultsDivElement.appendChild(resultsImgElement);
    resultsDivElement.appendChild(resultsParagraphElement);
    resultsDivElement.appendChild(travelButton);

    searchResultsDiv.appendChild(resultsDivElement);
  });
}

// Add click event listener to the reset button to clear search results
document.getElementById("reset-button").addEventListener("click", function () {
  const searchResultsDiv = document.getElementById("search-results-div");
  const noResultsDiv = document.getElementById("no-results-div");
  searchResultsDiv.style.display = "none";
  noResultsDiv.innerHTML = "";
});
