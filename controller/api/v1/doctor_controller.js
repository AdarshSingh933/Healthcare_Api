const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken')


// handling new doctor registration
module.exports.create = async function(req,res){
    try{
        if(req.body.password != req.body.confirm_password){
            return res.status(200).json({
                message: 'Passwords do not match'
            })
        }else{
            let doctor = await Doctor.findOne({email: req.body.email});
            if(doctor){
                return res.status(200).json({
                    message: 'You are already registered.Please signin'
                })
            }else{
                await Doctor.create(req.body);
                return res.status(200).json({
                    message: 'You have successfully signed up'
                })
            }
        }
    }catch(err){
        console.log("Error in doctor create controller",err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


//handling doctor signin
module.exports.createSession = async function(req,res){
    try{
        let doctor = await Doctor.findOne({email: req.body.email});

        if(!doctor || doctor.password != req.body.password){
            return res.status(422).json({
                message: "Invalid username/password"
            });
        }

        return res.status(200).json({
            message: 'Sign in successful.Here is your token',
            data: {
                //this will generate the jwt token and send in response
                token: jwt.sign(doctor.toJSON(),'verysecret',{expiresIn: '1h'})
            }
        }) 
    }catch(err){
        console.log('Error in doctor create session controller', err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}