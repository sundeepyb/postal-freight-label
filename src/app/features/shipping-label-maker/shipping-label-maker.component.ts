import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShippingInfo } from './shipping-label-marker.model';
import { MessageService } from '../../shared/message.service';

@Component({
    selector: 'app-shipping-label-maker',
    templateUrl: './shipping-label-maker.component.html',
    styleUrls: ['./shipping-label-maker.component.css']
})
export class ShippingLabelMakerComponent implements OnInit {

    shippingInfo: ShippingInfo;
    constructor(private ms: MessageService,
        private route: Router) {
        this.shippingInfo = new ShippingInfo();
    }

    ngOnInit() {
    }

    public onComplete(shippingInfo: Object):void  {
        this.ms.shippingInfo = shippingInfo;
        this.route.navigate(['/label']);
    }

}
