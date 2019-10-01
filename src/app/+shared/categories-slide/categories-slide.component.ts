import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-categories-slide',
    templateUrl: './categories-slide.component.html',
    styleUrls: ['./categories-slide.component.scss'],
})
export class CategoriesSlideComponent implements OnInit {

    slideOpts: any = {
        speed: 400,
        slidesPerView: 4,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
        }
    };

    constructor() {
    }

    ngOnInit() {
    }

}
