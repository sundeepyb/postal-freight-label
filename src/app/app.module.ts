import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouter } from './app.route';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker.component';
import { ShippingLabelComponent } from './features/shipping-label/shipping-label.component';
import { SharedModule } from './shared/shared.module';
import { MessageService } from './shared/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ShippingLabelMakerComponent,
    ShippingLabelComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouter
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
