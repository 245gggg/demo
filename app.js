var express        = require("express"),
    app            = express(),
	bodyParser     = require("body-parser"),
	mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    User           = require("./models/user"),
	Email          = require("./models/email"),
	ContactInfo    = require("./models/contactInfo"),
	seedDB         = require("./seeds"),
	Item           = require("./models/item"),
    middleware     = require("./middleware");
var url = process.env.DATABASEURL || 
	"mongodb+srv://MounikaM:mouni01234@mounika-gepc7.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
seedDB();
// PASSPORT CONFIGURATION

app.use(require('express-session')({
  secret: 'very secret words',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});
//root route
app.get("/", function(req, res){
    res.render("mainpage.ejs");
});
app.get("/catering", function(req, res){
    res.render("catering.ejs");
});
app.get("/locations", function(req, res){
    res.render("locations.ejs");
});
app.get("/loyalty", function(req, res){
    res.render("loyalty.ejs");
});
//handle sign up logic
app.post('/register', function(req, res){
  var newUser = new User({username: req.body.username});
  console.log(newUser);
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log('error registering user');
       req.flash("error", "Error in registering!");
      res.redirect('/register');
    }
	  console.log('registering user');
	    
    passport.authenticate("local")(req, res, function(){
		console.log('registering user');
		 req.flash("success", "Sucessfully  Registered");
      res.redirect('/shop');
    });
  }); 
});
app.post('/subscribe', function(req, res){
  var newEmail = new Email({email: req.body.email});
  console.log(newEmail);
  Email.create(newEmail, function(err, item){
                if(err){
                    console.log(err)
                } else {
					 req.flash("success", "Thank U for subscribing!");
                    console.log("added a item");
					item.save();
                    res.redirect('/')
                }
            });
 
});
app.post('/contacting', function(req, res){
  var newInfo = new ContactInfo({name: req.body.name,phone:req.body.phone,email:req.body.email,reason:req.body.optradio});
  console.log(newInfo);
    ContactInfo.create(newInfo, function(err, item){
                if(err){
                    console.log(err)
                } else {
					 req.flash("success", "Thank U for contacting--"+item.name);
                    console.log("added a item");
					item.save();
                    res.redirect('/')
                }
            });
 
});


//show login form
app.get("/login", function(req, res){
   res.render("login.ejs"); 
});

//handling login logic
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/shop",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout route
app.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Logged you out!");
   res.redirect("/");
});
app.get("/shop", function(req, res){
    Item.find({"type":"food&sauces"}, function(err, allItems){
       if(err){
           console.log(err);
       } else {
		  var fooditems=allItems;
		          Item.find({"type":"retail"}, function(err, allRItems){
                    if(err){
                       console.log(err);
                     } else {
                     res.render("shop.ejs",{fooditems:fooditems,retailitems:allRItems});
		             }
		          });
               }
    });
});
app.get("/menu", function(req, res){
    Item.find({}, function(err, allItems){
       if(err){
           console.log(err);
       } else {
		 
                     res.render("menu.ejs",{items:allItems});
		             
               }
    });
});
app.get("/store/:id", function(req, res){
    //find the campground with provided ID
    Item.findById(req.params.id).exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground)
            //render show template with that campground
            res.render("store/detail.ejs", {item: foundCampground});
        }
    });
});
app.delete("/store/cart/:id", middleware.isLoggedIn, function(req, res){
    //findByIdAndRemove
   req.user.cartItems = req.user.cartItems.filter(function(value, index, arr){ return value !=req.params.id});
	       req.user.save();
           
          res.render("store/cart.ejs",{items:req.user.cartItems});
   
});

app.get("/location/:id", function(req, res){
    //find the campground with provided ID
   
           
            //render show template with that campground
            res.render("store/locationDetail.ejs", {place:req.params.id});

});
app.get("/store/cart/:id",middleware.isLoggedIn, function(req, res){
    //find the campground with provided ID
    Item.findById(req.params.id).exec(function(err, foundCampground){
        if(err){
            console.log(err);
			res.render("store/cart.ejs",{items:req.user.cartItems});
        } else {
               if(!(req.user.cartItems.includes(foundCampground.name))){
				 req.user.cartItems.push(foundCampground.name);
			      req.user.save();  
			   }		  
			res.render("store/cart.ejs",{items:req.user.cartItems});
        }
					
	});
});
app.get("/store/order/id",middleware.isLoggedIn, function(req, res){
   res.render("store/Order.ejs", {User:User});       
});

// show register form
app.get("/register", function(req, res){
   res.render("register.ejs"); 
});
app.post("/shop", function(req, res){
   res.render("shop.ejs"); 
});



app.get("/contactUs", function(req, res){
    res.render("contactUs.ejs");
});
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});