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
    stock: Stock;
}

export interface Address {
    address1: string;
    address2: string;
    landmark: string;
    pincode: number;
    state: string;
}
