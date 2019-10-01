import {Component, OnInit} from '@angular/core';
import {PouchDBService} from '../+services/pouch-db.service';
import {Advert} from '../+models/advert';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

    title = 'Apartments';

    constructor(private pouchDbService: PouchDBService) {
    }

    ngOnInit(): void {
        this.pouchDbService.createIndex().then(() => this.getData());
    }

    getData() {
        this.pouchDbService.localDb.find({
            selector: {
                _id: {$gt: null},
                type: {$elemMatch: {target_id: 'advert'}},
                field_advert_type: {$eq: 'rent'}
            }
        }).then(result => {
            const adverts = result as Advert[];
            console.log(adverts);
        }).catch(error => console.log(error));
    }

    showFilters() {

    }
}
