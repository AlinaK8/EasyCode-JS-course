import { Http } from "../core/http.service";
import { ENV } from "../config/env";


export class WinnersService {
    constructor(){}

    getWinners(part,limit) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/winners?part=${part}&limit=${limit}`)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    }
}