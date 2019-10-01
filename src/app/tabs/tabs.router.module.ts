import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../categories/categories.module').then(m => m.CategoriesPageModule)
                    }
                ]
            },
            {
                path: 'advertisers',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../advertisers/advertisers.module').then(m => m.AdvertisersPageModule)
                    }
                ]
            },
            {
                path: 'saved',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../saved/saved.module').then(m => m.SavedPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
