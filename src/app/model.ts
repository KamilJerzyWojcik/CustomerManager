export interface ICustomer {
    name: string;
    photoUrl: string;
    description: string;
    age: number;
    address: IAddress;
    type: CustomerType;
    categories: string[];
}

export interface IAddress {
    street: string;
    houseNumber: number;
    city: string;
}

export enum CustomerType {
    Standard,
    Premium,
    VIP
}