export type MenuItems = {
    id: number;
    name: string;
    price: number;
}

export type OrderItems = MenuItems & {
    quantity : number;
}