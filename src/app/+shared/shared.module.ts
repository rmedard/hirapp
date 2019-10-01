import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesSlideComponent} from './categories-slide/categories-slide.component';
import {IonicModule} from '@ionic/angular';
import {AdvertsGridComponent} from './adverts-grid/adverts-grid.component';


@NgModule({
    declarations: [CategoriesSlideComponent, AdvertsGridComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [CategoriesSlideComponent, AdvertsGridComponent]
})
export class SharedModule {
}
