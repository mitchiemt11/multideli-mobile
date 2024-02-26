import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Order {
  name: string;
  id: number;
  image: string;
  displayImage: string;
  description: string;
  price: number;
  grams: number;
  calories: number;
  info: string;
}

export interface OrderState extends Array<Order> { }

const initialState: OrderState = [
  {
    id: 1,
    name: 'Beef Cheeseburger',
    price: 25,
    grams: 100,
    calories: 527,
    info: 'Non-vegan',
    image: require('../../assets/images/burger_small.png'),
    displayImage: require('../../assets/images/burger_small.png'),
    description: "A perfectly seasoned beef patty, covered with melted cheese and topped with pickles, onion, ketchup and mustard- all encased in a soft brioche bun. Who wants a cheeseburger that tastes better than your favourite takeaway version?! Perfect for family burger night- or any time."
  },
  {
    id: 2,
    name: 'Sandwich',
    price: 15,
    grams: 150,
    calories: 927,
    info: 'Vegan',
    image: require('../../assets/images/sandwich.png'),
    displayImage: require('../../assets/images/sandwich.png'),
    description: "Loaded on a delicious crusty bread, smothered in mayonnaise and topped with juicy slices of seasonal tomatoes, you won’t be able to have just one!"
  },
  {
    id: 3,
    name: 'Veg Salad',
    price: 30,
    grams: 456,
    calories: 127,
    info: 'Vegan',
    image: require('../../assets/images/salad.png'),
    displayImage: require('../../assets/images/salad.png'),
    description: "A delicious salad made with fresh tomatoes, onions, and cucumber. It’s a must-try"
  },
  {
    id: 4,
    name: 'BBQ Chicken Pizza',
    price: 90,
    grams: 450,
    calories: 467,
    info: 'Halal',
    image: require('../../assets/images/pizza.png'),
    displayImage: require('../../assets/images/pizza.png'),
    description: "A crispy, homemade pizza topped with fresh chicken, tomatoes, and onions. Has a sliced cheese on the side. Full of the heat!"
  },
  {
    id: 5,
    name: 'More',
    price: 25,
    grams: 100,
    calories: 527,
    info: 'Non-vegan',
    image: require('../../assets/images/more.png'),
    displayImage: require('../../assets/images/more.png'),
    description: "More"
  },
]

export const OrderSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    listOrder: (state, action: PayloadAction<Order>) => {
      state.push({
        name: action.payload.name,
        id: state.length + 1,
        image: action.payload.image,
        displayImage: action.payload.displayImage,
        description: action.payload.description,
        price: action.payload.price,
        grams: action.payload.grams,
        calories: action.payload.calories,
        info: action.payload.info,
      });
    },
  },
});

export const { listOrder } = OrderSlice.actions

export default OrderSlice.reducer