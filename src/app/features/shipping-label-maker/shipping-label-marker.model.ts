export class Address {
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
}

export class ShippingInfo {
    public from: Address;
    public to: Address;
    public weight: number;
    public shippingOption: number;
}