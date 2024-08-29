import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const ifItemPresent = state.items.find((item) => {
            return item.card.info.id === action.payload.card.info.id;
        });
        if(!ifItemPresent){
            const itemtobeAdded = { ...action.payload, quantity: 1 };
            state.items.push(itemtobeAdded);
        }else{
            ifItemPresent.quantity += 1;
        }        
      state.totalAmount += action.payload.card.info.price / 100;
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    removeItem: (state) => {
      state.items.pop(action.payload);
      state.totalAmount -= action.payload.card.info.price / 100;
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalAmount = 0;
      state.totalItems = 0;
    },
    increaseItemQuantity: (state, action) => {
      const item = state.items.find((item) => {
        return item.card.info.id === action.payload.card.info.id;
      });
      if (item) {
        item.quantity += 1;
      }
      state.totalAmount += action.payload.card.info.price / 100;
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    reduceItemQuantity: (state, action) => {
      const item = state.items.find((item) => {
        return item.card.info.id === action.payload.card.info.id;
      });
      if (item && item.quantity >1) {
        item.quantity -= 1;
        state.totalAmount -= action.payload.card.info.price / 100;
        state.totalItems = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }else if(item.quantity = 1){  
        state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
          state.totalAmount -= action.payload.card.info.price / 100;
          state.totalItems = state.items.reduce(
            (total, item) => total + item.quantity,
            0
          );
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseItemQuantity,
  reduceItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
