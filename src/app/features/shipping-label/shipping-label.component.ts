import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../shared/message.service'

@Component({
    selector: 'app-shipping-label',
    templateUrl: './shipping-label.component.html',
    styleUrls: ['./shipping-label.component.css']
})
export class ShippingLabelComponent implements OnInit {

    shippingInfo: any;
    constructor(private ms: MessageService) { }

    ngOnInit() {
        this.shippingInfo = this.ms.shippingInfo;
    }

    ngOnDestroy() {
    }

}
