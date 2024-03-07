import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Order {
  id: number;
  date: Date;
  name: string;
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
    date: new Date(),
    name: 'Beef Cheeseburger',
    price: 25,
    grams: 100,
    calories: 527,
    info: 'Non-vegan',
    image: require('../../assets/images/burger_small.png'),
    displayImage: require('../../assets/images/product_burger.png'),
    description: "A perfectly seasoned beef patty, covered with melted cheese and topped with pickles, onion, ketchup and mustard- all encased in a soft brioche bun. Who wants a cheeseburger that tastes better than your favourite takeaway version?! Perfect for family burger night- or any time."
  },
  {
    id: 2,
    date: new Date(),
    name: 'Veg Salad',
    price: 30,
    grams: 456,
    calories: 127,
    info: 'Vegan',
    image: require('../../assets/images/veg_salad.png'),
    displayImage: require('../../assets/images/product_salad.jpeg'),
    description: "A delicious salad made with fresh tomatoes, onions, and cucumber. It’s a must-try"
  },
  {
    id: 3,
    date: new Date(),
    name: 'Potato Salad',
    price: 90,
    grams: 450,
    calories: 467,
    info: 'Halal',
    image: require('../../assets/images/potato_salad.png'),
    displayImage: require('../../assets/images/product_potato.jpeg'),
    description: "It is typically made with boiled potatoes, mayonnaise, vinegar, celery, onion, and other seasonings. served as a side dish at barbecues, picnics, and potlucks!"
  },
  {
    id: 4,
    date: new Date(),
    name: 'Bread Sandwich',
    price: 15,
    grams: 150,
    calories: 927,
    info: 'Vegan',
    image: require('../../assets/images/sandwich.png'),
    displayImage: require('../../assets/images/product_sandwich.jpeg'),
    description: "Loaded on a delicious crusty bread, smothered in mayonnaise and topped with juicy slices of seasonal tomatoes, you won’t be able to have just one!"
  },
  
  
  {
    id: 5,
    date: new Date(),
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
        id: state.length + 1,
        date: new Date(),
        name: action.payload.name,
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