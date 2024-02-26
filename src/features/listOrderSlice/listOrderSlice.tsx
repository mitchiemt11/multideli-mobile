import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Order {
  name: string;
  id: number;
  image: string;
}

export interface OrderState extends Array<Order> {}

const initialState: OrderState = [
  {
    id: 1,
    name: 'Burger',
    image: require('../../assets/images/burger_small.png')
  },
  {
    id: 2,
    name: 'Sandwich',
    image: require('../../assets/images/sandwich.png'),

  },
  {
    id: 3,
    name: 'Salad',
    image: require('../../assets/images/salad.png')
  },
  {
    id: 4,
    name: 'Pizza',
    image: require('../../assets/images/pizza.png')
  },
  {
    id: 5,
    name: 'More',
    image: require('../../assets/images/more.png')
  },
]

export const OrderSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    listOrder: (state, action: PayloadAction<any>) => {
      state.push({
        name: action.payload,
        id: state.length +  1,
        image: action.payload
      })
    },
  },
})

export const { listOrder } = OrderSlice.actions

export default OrderSlice.reducer