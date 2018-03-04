export interface Stock {
    model: string;
    date: string;
    product: string;
    quantity: number;
    unitRate: number;
    total: number;
}


export interface SellInfo {
    address: Address;
    stocks: Array<Stock>;
}

export interface Address {
    name: string;
    address1: string;
    address2: string;
    landmark: string;
    pincode: number;
    state: string;
}

export interface State {
    code: string;
    name: string;
}
