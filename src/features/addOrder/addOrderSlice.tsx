import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Order {
  id: number;
  name: string;
  timestamp: Date;
  price: number;
}


export interface OrderState extends Array<Order> {}

const initialState: OrderState = []

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<any>) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        timestamp: action.payload.timestamp,
        price: action.payload.price,
      })
    },
  },
})

export const { addOrder } = OrderSlice.actions

export default OrderSlice.reducer