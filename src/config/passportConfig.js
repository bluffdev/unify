const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
require('dotenv').config()

module.exports = (passport) =>
    passport.use(
        new JWTStrategy(
            {
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
                secretOrKey: process.env.JWT_SECRET
            },
            function (jwtPayload, cb) {
                console.log(jwtPayload)
                return cb(null, jwtPayload.id)
            }
        )
    )
