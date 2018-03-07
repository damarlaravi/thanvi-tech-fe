export interface Stock {
    date: string;
    model: string;
    product: string;
}

export interface StockIn extends Stock {
    quantity: number;
    unitRate: number;
    stockLeft: number;
    total: number;
}

export interface StockOut extends Stock {
    stockInId: string;
    sellPrice: number;
    sellQuantity: number;
    stockAvailable: number;
    total: number;
}


export interface SellInfo {
    address: Address;
    stockOuts: Array<Stock>;
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
    ShowroomType = 'Show Room',
    OfficeType = 'Office'
}
