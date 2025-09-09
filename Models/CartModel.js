const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema({

    itemName: {
        type: String
      },
      price: {
        type: Number
      },
      PurchasedDate: {
        type: Date,
      }
    })
    
    
    const CartSchema = new mongoose.Schema({
      productName: {
        type: String,
      },
      ProductPrice: {
        type: Number,
      },
     
    
      purchases: [PurchaseSchema]
    
    

})

module.exports = mongoose.model("carts",CartSchema)