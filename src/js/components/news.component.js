import { NewsService } from "../services/news.service";

export class NewsComponent {
    constructor() {
        this._newsService = new NewsService();
        this._pieceOfNews;
    }

    async beforeRender() {
        this._pieceOfNews = await this._newsService.getNews();

        console.log(this._pieceOfNews);
    }

    render() {
        for (let i = 0; i < this._pieceOfNews.length; i++) {
            let pieceOfNewsTemplate = document.createElement('DIV');pieceOfNewsTemplate.innerHTML = 
            `<style>${this._style}</style>
            <div class="card-body">
                <img src="" alt="avatar" class="card-avatar">
                <span class=" card-name">Alina Karanda</span>
                <span class="card-country">Ukraine</span>
                <span class="card-updated-count">Uploaded 1 photos</span>
                <span class="card-upload-date">a 1 day ago</span>
                <button>Follow</button>
            </div> 
            <div class="card-img">
                <img src="${this._pieceOfNews[i].pictures[0].url}" alt="news-photo" class="card-img">
            </div>
            `
            return pieceOfNewsTemplate;
        }
    }

    _style() {
        return `
        .body {
            background-color: gray;
        }
        
        .card {
            max-width: 1140px;
            max-height: 455px;
            display: flex;
        }
        
        .card-body {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
            align-items: center;
            justify-content: space-around;
        
        }
        
        .card-avatar {
            max-height: 138px;
            max-width: 138px;
            border-radius: 50%;
        
        }
        
        .card-img {
            max-width: 830px;
            height: 375px;
        }`
    }

    afterRender() {
        
    }
}
