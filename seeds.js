var mongoose = require("mongoose");
var Item = require("./models/item");
var data = [
    {
        name: " 4R Gift Card", 
        image: "",
	description: "To purchase a custom gift card amount, please call 1-844-4RIVERS.",
		price:"$10",
		type:"retail"
    },
	{
		 name: "4R SMOKEHOUSE COW TEE", 
                 image: "",
		description: "Everyone loves BBQ",
		price:"$15",
		type:"retail"	
	},
	{
		 name: "All Purpose rub", 
        image: "",
		description: "4 RIVERS SIGNATURE TASTE – Like all of our rubs, the founder, John Rivers, personally blended the 4R All Purpose Rub to bring together the favorite flavors of the South. His multi-regional recipe gives a creative blend of sweet and salty with a savory touch perfect for pork and poultry. No matter your method – roasting, slow-cooking, or grilling – 4R All Purpose Rub is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "4 RIVERS BBQ SAUCE VARIETY PACK", 
        image: "",
		description: "The 4 Rivers BBQ Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!",
		price:"$28.95",
		type:"food&sauces"	
	},
	{
		 name: "BOURBON BLENDED VANILLA EXTRACT", 
        image: "",
		description: "Slip into cakes, cookies, or anything that needs a daring hint of barrel aged bourbon and vanilla!",
		price:"$20.00",
		type:"food&sauces"	
	},
	{
		 name: "Brisket rub", 
        image: "",
		description: "John Rivers personally blended the 4R Brisket Rub to bring together the favorite flavors of the South. His multi-regional recipe has just the right seasoning to enhance your brisket and other beef products. No matter your method – roasting, slow-cooking, or grilling – 4R Brisket Rub is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "Coffee rub", 
       image: "",
		description: "Like all of our rubs, our founder, John Rivers, personally blended the 4R Coffee Rub to bring together the favorite flavors of the South. His multi-regional recipe gives beef on the open flame a kick of flavor. No matter your method – roasting, slow-cooking, or grilling – 4R Coffee Rub is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "HOT BARBECUE SAUCE", 
        image: "",
		description: "Our founder, John Rivers, personally blended the 4 Rivers Smokehouse Hot BBQ Sauce to bring together the favorite flavors of the South. Similar to the 4 Rivers Signature BBQ Sauce with an extra layer of heat, his multi-regional recipe provides an ideal combination of sweet and savory with a smoky, spicy finish that complements pork, chicken, and beef. No matter your cooking method, 4R Hot BBQ Sauce is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "4R 10 YEAR ANNIVERSARY TEE", 
       image: "",
		description: "To purchase a ANNIVERSARY TEE, please call 1-844-4RIVERS.",
		price:"$15.00",
		type:"retail"	
	},
	{
		 name: "4R HOT BRISKET NOW TEE", 
       image: "",
		description: "To purchase a custom gift card amount, please call 1-844-4RIVERS.",
		price:"$15.00",
		type:"retail"	
	},
	{
		 name: "BRISKET CANDLE", 
        image: "",
		description: "A unique scented candle that brings the allure of the 4 Rivers Smokehouse to your home! Each candle is handcrafted in small batches with great attention to detail to create the perfect blend of smoked brisket and aged hickory. The allure of the Brisket Candle is so authentic you’ll be tempted to grab a fork and take a biteurns approx. 17 hoursComes with brisket candle in glass votive, along with decorative box and wrap",
		price:"$16.95",
		type:"retail"	
	},
	{
		 name: "COOP GIFT CARDS", 
        image: "",
		description: "To purchase a custom coop gift card amount, please call 1-844-4RIVERS.",
		price:"$10",
		type:"retail"	
	}
	
]

function seedDB(){
	 Item.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Items!");
         //add a few campgrounds
        data.forEach(function(seed){
            Item.create(seed, function(err, item){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a item");
					item.save();
                    //create a comme
                }
            });
		});
	 });
}

module.exports = seedDB;
