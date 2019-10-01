import {Component, Input, OnInit} from '@angular/core';
import {Advert} from '../../+models/advert';

@Component({
    selector: 'app-adverts-grid',
    templateUrl: './adverts-grid.component.html',
    styleUrls: ['./adverts-grid.component.scss'],
})
export class AdvertsGridComponent implements OnInit {

    @Input() title: string;
    adverts: Advert[];
    advertSavedClass = 'heart-empty';

    constructor() {
    }

    ngOnInit() {
    }

  toggleSave() {
    this.advertSavedClass = this.advertSavedClass === 'heart-empty' ? 'heart' : 'heart-empty';
  }
}
