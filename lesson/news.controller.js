const newsService = new NewsService();
const uiService = new NewsUI();
const alert = new Alert();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const inputSearch = form['search'];

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}

function onInputChange(event){
    const phrase = inputSearch.value;

    if (phrase.length < 3 || typeof phrase != 'string') return console.error('Please enter value that is a text phrase and more than 3');

    newsService.getNewsByPhrase(phrase, (response) => {
        if (!response.length) {
            alert.showAlert();
        } else {
            const { totalResults, articles } = response;

            uiService.clearContainer();
            articles.forEach((article) => uiService.addArticle(article));
        }    
    });
}

countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
inputSearch.addEventListener('keyup',onInputChange);

