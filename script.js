document.addEventListener("DOMContentLoaded", () => {
    const dogImageElement = document.getElementById("dog-image");
    const fetchDogButton = document.getElementById("fetch-dog-image");

    // Function to fetch a random dog image
    function fetchRandomDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the image source
                dogImageElement.src = data.message;
                dogImageElement.alt = "A random dog image";
            })
            .catch(error => {
                console.error('Error fetching dog image:', error);
                alert('Failed to fetch dog image. Please try again later.');
            });
    }

    // Initial fetch when page loads
    fetchRandomDogImage();

    // Event listener for the button to fetch a new image
    fetchDogButton.addEventListener("click", fetchRandomDogImage);
});
