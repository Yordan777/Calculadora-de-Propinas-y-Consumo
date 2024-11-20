import { menuItems } from "../data/db";
import { MenuItems, OrderItems } from "../types";

export type OrderAction =
  | { type: "add-items"; payload: { item: MenuItems } }
  | { type: "remove-item"; payload: { id: MenuItems["id"] } }
  | {type : "place-order";}
  | {type : "add-tip"; payload: {value : number}};

export type OrderState = {
  data: MenuItems[];
  order: OrderItems[];
  tip: number
};

export const initialState: OrderState = {
  data: menuItems,
  order: [],
  tip: 0
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderAction
) => {
  if (action.type === "add-items") {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );
    let updateOrder: OrderItems[] = [];
    if (itemExist) {
      updateOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem = { ...action.payload.item, quantity: 1 };
      updateOrder = [...state.order, newItem];
    }
    return {
      ...state,
      order: updateOrder,
    };
  }

  if (action.type === 'remove-item') {
    const updateOrder = state.order.filter((item) => item.id !== action.payload.id)

    return{
        ...state,
        order : updateOrder
    }
  }

  if (action.type === 'add-tip') {
    const tip = action.payload.value
    return{
      ...state,
      tip
    }
  }

  if (action.type === 'place-order') {
    return{
      ...state,
      order: [],
      tip : 0
    }
  }
  return state;
};
