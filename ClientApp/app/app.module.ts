import { AppErrorHandler } from './components/app/app.error-handler';
import { VehicleService } from './services/vehicle.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
//added
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { ToastyModule } from 'ng2-toasty';
import * as Raven from 'raven-js';


//added
Raven.config('https://119104ece598427b9a72a81cc8b2719d@sentry.io/235207')
.install();
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        //added
        VehicleFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        //added
        ToastyModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //added
            { path: 'vehicles/new', component: VehicleFormComponent },
            { path: 'vehicles/:id', component: VehicleFormComponent },
            
            //
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }


        ])
    ],
    //added
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler},
        VehicleService,
    ]
})


export class AppModuleShared {
}
