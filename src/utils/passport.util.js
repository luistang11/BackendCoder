import passport from "passport";
import passportLocal from "passport-local";
import passportGithub from 'passport-github2'
import { UsersModel } from "../dao/models/user.models.js";
import * as UserService from "../services/users.service.js";
import * as AuthService from '../services/auth.service.js'
import dotenv from "dotenv";

dotenv.config();
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function () {
  UsersModel.findById(_id, function (err,user){
    done(err, user)
  })
})

passport.use("sigup",new passportLocal.Strategy({passReqToCallback:true,usernameField:"email"},async function(req,username,password,done){
    try {
        const userExist = await UsersModel.findOne({ email: username });
      if (userExist) {
        return done("El usuario ya existe", false);
      } else {
        const user = await UserService.createUser(req.body);
        return done(null, user);
      }
    } catch (error) {
        throw new Error(error.message);
    }
}))

passport.use('github',new passportGithub.Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL:'http://localhost:3000/api/github/callback'
},async function(accessToken, refreshToken, profile, done){
  try {
    console.log(profile)
    const newUser = {
      first_name: profile.displayName,
      last_name: profile.displayName,
      age: 20,
      email:profile._json.email
    }
    const user = await UsersModel.create(newUser)
    done(null,user)
  } catch (error) {
    throw new Error(error.message)
  }
}));

passport.use("login",new passportLocal.Strategy({passReqToCallback:true,usernameField:"email"},async function(req,username,password,done){
    try {
        const login = await AuthService.login(username, password)
    if (login) {
      const user = await UsersModel.findOne({ email: username });
      return done(null,user)
    } else {
      return done(null,false)
    }
    } catch (error) {
        throw new Error(error.message);
    }

}))


export default passport;