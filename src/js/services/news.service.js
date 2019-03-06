import { Http } from "../core/http.service";
import { ENV } from "../config/env";
import { AuthService } from './auth.service';

export class NewsService {
    constructor() {
        this._authService = new AuthService();
    }

    getNews() {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/news`,this._authService.token)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    }
}
