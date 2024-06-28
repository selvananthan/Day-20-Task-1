const apiKey = 'YOUR_API_KEY_HERE';
const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=10`;

async function fetchCats() {
    const response = await fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    });
    const data = await response.json();
    displayCats(data);
}

function displayCats(cats) {
    const gallery = document.getElementById('cat-gallery');
    cats.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'cat-card';
        const catImage = document.createElement('img');
        catImage.src = cat.url;
        catCard.appendChild(catImage);
        gallery.appendChild(catCard);
    });
}

fetchCats();
