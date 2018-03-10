import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingOption } from './wizard.model';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
    @ViewChild('stepper') stepper; 
    @Input('wizardContext') addressInfo;
    @Input('group')
    @Output() complete: EventEmitter<any> = new EventEmitter<any>();
    isLinear = true;
    public shippingOption = ShippingOption;
    stepOneFormGroup: FormGroup;
    stepTwoFormGroup: FormGroup;
    stepThreeFormGroup: FormGroup;
    stepFourFormGroup: FormGroup;
    states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM',
        'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
        'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
        'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW',
        'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
        'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];
    public sCost: any = [0, 0];
    barValue: number = 20;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.stepOneFormGroup = this.fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required]
        });
        this.stepTwoFormGroup = this.fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required]
        });
        this.stepThreeFormGroup = this.fb.group({
            weight: ['', Validators.required]
        });
        this.stepFourFormGroup = this.fb.group({
            shippingCtrl: ['', Validators.required]
        });
    }

    nextStep($event) {
        let stepNum = $event.selectedIndex;
        this.barValue = ((stepNum+1)/5)*100;
        switch(stepNum) {
            case 1:
                this.addressInfo.from = this.stepOneFormGroup.getRawValue();
                break;
            case 2:
                this.addressInfo.to = this.stepTwoFormGroup.getRawValue();
                break;
            case 3:
                this.getShippingCost();
                break;
            default:
                break;
        }
    }

    public onComplete(): void {
        this.complete.emit(this.addressInfo);
    }

    /*changeStep(index: number) {
        this.stepper.selectedIndex = index;
    }*/

    getShippingCost() {
        let _that = this;
        this.sCost = Object.keys(ShippingOption)
            .filter(key => !isNaN(Number(ShippingOption[key])))
            .map(function(k) {
                return _that.optionCost(_that.addressInfo.weight, ShippingOption[k]);
        });
    }

    optionCost(weight, shippingOption) {
        const shippingRate = 0.40;
        return (weight * shippingRate * (shippingOption === ShippingOption.Ground ? 1 : 1.5)).toFixed(2);
    }
}