
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '2661963020d04efbb36a836ef482cba4'; // Replace with your NewsAPI key
    const newsContainer = document.getElementById('news-container');
    const apiUrl = `https://newsapi.org/v2/everything?q=DDoS%20attack OR ransomware%20attack OR phishing OR social%20engineering%20attack OR malware%20attack OR zero-day%20exploit OR SQL%20injection OR brute%20force%20attack OR data%20breach OR cryptojacking&language=en&sortBy=publishedAt&pageSize=3&apiKey=${apiKey}`;

    async function fetchNews() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
        }
    }

    function displayNews(articles) {
        newsContainer.innerHTML = ''; // Clear any existing content
        articles.forEach(article => {
            const newsItem = document.createElement('article');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    fetchNews();
});
function toggleLoginForm() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm.style.left === "0px") {
        loginForm.style.left = "-100%";
    } else {
        loginForm.style.left = "0px";
    }
}
function showSignUp() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signUpBox").style.display = "block";
}

function showLogin() {
    document.getElementById("signUpBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

