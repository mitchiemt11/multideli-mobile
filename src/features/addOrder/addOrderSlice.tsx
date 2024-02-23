import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Order structure
export interface Order {
  name: string;
  id: number;
}

export interface OrderState extends Array<Order> {}

const initialState: OrderState = []

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<any>) => {
      state.push({
        name: action.payload,
        id: state.length +  1,
      })
    },
  },
})

export const { addOrder } = OrderSlice.actions

export default OrderSlice.reducer