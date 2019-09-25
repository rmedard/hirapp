import {Component, OnInit} from '@angular/core';
import {PouchDBService} from '../+services/pouch-db.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    constructor(private pouchDBService: PouchDBService) {
    }

    ngOnInit(): void {
        this.pouchDBService.remoteDb.info().then((info) => {
            console.log(info);
        });
    }
}
