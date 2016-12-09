import {combineReducers} from "redux";

import page from "./page";
import categories from "./categories";
import products from "./products";
import categoryFilter from "./categoryFilter";
import selectedCategory from "./selectedCategory";
import productFilter from "./productFilter";
import productOrder from "./productOrder";
import selectedProduct from "./selectedProduct";

export default combineReducers({
	page,
	categories,
	products,
	categoryFilter,
	selectedCategory,
	productFilter,
	productOrder,
	selectedProduct,
	logger: (state = null, action) => {console.debug(action); return state;}
});