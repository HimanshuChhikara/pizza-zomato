const User = require('../../models/users')
const bcrypt = require('bcrypt')
const passport = require('passport')

function authController(){
    return {
        login(req,res){
            res.render('auth/login')
            
        },
        postLogin(req,res,next){
            passport.authenticate('local',(err,user,info)=>{
                if(err){
                    req.flash('error',info.message)
                    return next(err)
                }
                if(!user){
                    req.flash('error',info.message)
                    return res.redirect('/login')
                }
                req.login(user, (err) => {
                    if(err){
                        req.flash('error',info.message)
                        return next(err)
                    }
                    return res.redirect('/')
                })(req,res,next)


            })
        },
        register(req,res){
            res.render('auth/register')
        },
        async postRegister(req,res){
            const { name , email, password } = req.body

            if(!name || !email || !password){
                req.flash('error','All Fields are required')
                req.flash('name',name),
                req.flash('email',email)
                return res.redirect('/register')                
            }
            // Check if email is allready there 
            User.exists({ email: email },(err,result)=>{
                if(result){
                    req.flash('error','Email allready exists')
                    req.flash('name',name),
                    req.flash('email',email)
                    return res.redirect('/register')
                }
            })

            // hash password
            const hashedPassword = await bcrypt.hash(password,10)


            //Create new used
            const user = new User({
                name,
                email,
                password : hashedPassword
            })

            user.save().then((user)=>{
                //login
                console.log("User is == " + user)
                return res.redirect('/')
            }).catch(err => {
                req.flash('error','Something went Wrong')
                return res.redirect('/register')  
            })


        }
    }
}

module.exports = authController