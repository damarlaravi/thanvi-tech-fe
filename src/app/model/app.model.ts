export interface Stock {
    id: string;
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
    addressType: string;
}

export interface State {
    code: string;
    name: string;
}

export enum AddressTypes {
    HomeType = 'Home',
    ShowroomType= 'Show Room',
    OfficeType = 'Office'
}
