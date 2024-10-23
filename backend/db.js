// import mongoose from "mongoose";
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/orderBook`);

// storeDetails table contains information about each store. this will be individual store account
const storeDetailsSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	companyName: String,
	address: String,
	phone1: Number,
	phone2: Number,
	password: String,
	companyLogo: String,
});

// customer information - each customer belong to particular store only differtiated with storeUserID.
const customerSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	fullName: String,
	mobile: Number,
	alternateMobile: Number,
	companyName: String,
	gstNumber: String,
	addressLine1: String,
	addressLine2: String,
	city: String,
	postalCode: Number,
	storeUserID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
		required: true,
	},
});

// table contain products, laptop, AIO etc
const productSchema = new mongoose.Schema({
	storeUserID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
		required: true,
	},
	prodcutCode: String,
	description: String,
	price: Number,
	image: String,
});

// table contains information about sales person - which can be use to tack sales record
const salesPersonSchema = new mongoose.Schema({
	storeUserID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
		required: true,
	},
	fullName: String,
	mobile: Number,
});

// table contains order details placed by customer

const orderBookSchema = new mongoose.Schema({
	storeUserID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
		required: true,
	},
	orderNumber: String,
	date: Date,
	salesPerson: {
		type: mongoose.Schema.Types.ObjectId, // Reference to SalesPerson collection
		ref: "SalesPerson",
		required: true,
	},
	product: [
		{
			type: mongoose.Schema.Types.ObjectId, // Reference to Product collection
			ref: "Products",
			required: true,
		},
	],
	paymentMode: String,
	buyBackValue: Number,
	otherNotes: String,
	deliveryCommitedDate: Date,
});

const Store = mongoose.model("Store", storeDetailsSchema);
const Customer = mongoose.model("Customer", customerSchema);
const Products = mongoose.model("Product", productSchema);
const SalesPerson = mongoose.model("SalesPerson", salesPersonSchema);
const OrderBook = mongoose.model("orderBook", orderBookSchema);

export { Store, Customer, Products, SalesPerson, OrderBook };
