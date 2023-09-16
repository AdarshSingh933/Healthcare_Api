const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Doctor = require("../models/doctor");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "blahsomething",
};

//the authentication using the Bearer token is handled here
passport.use(
  new JWTStrategy(opts,async function (jwtPayLoad, done) {
    try{
      let doctor = await Doctor.findById(jwtPayLoad._id);
      if (!doctor) {
        console.log("Error in finding doctor from JWT", err);
        return res.status(404).json({
          message: 'Doctor not found from jwt'
        });
      }

      if (doctor) {
        // console.log('Printing from passport jwt file',doctor);
        return done(null,doctor);
      } else {
        return done(null, false);
      }
    }catch(err){
      console.log("Error in passport jwt strategy",err);
      return res.status(500).json({
        message: 'Internal server error'
      })
    }
    
  })
);

module.exports = passport;