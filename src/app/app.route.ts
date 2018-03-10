import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker.component';
import { ShippingLabelComponent } from './features/shipping-label/shipping-label.component';

const routes : Routes = [
    { path:'', redirectTo:'/shipping', pathMatch:'full'},
    { path:'shipping', component:ShippingLabelMakerComponent},
    { path:'label', component:ShippingLabelComponent}
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }