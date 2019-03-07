import { WinnersService } from "../services/winners.service";

export class WinnersComponent {
    constructor() {
        this._winnersService = new WinnersService();
        this._winners;
    }

    async beforeRender() {
        this._winners = await this._winnersService.getWinners(1,15);
        console.log(this._winners);


    }

    render() {
        for (let i = 0; i < this._winners.length; i++) {
           return  `<div class="card" style="width: 18rem;">
            <img src="${this._winners[i].winners.member_id.user_id.avatar}" class="card-img-top" alt="...">
            <div class="card-body">
                <p> ${this._winners[i].winners.member_id.user_id.full_name}</p>
            </div>
        </div>`
        }
    }

    afterRender() {

    }
}