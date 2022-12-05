const express = require ("express");
const User = require ('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


router.post('/createuser',[
    body('email', 'enter a valid email').isEmail(),
    body('name','enter a valid name').isLength({ min: 3 }),
    body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),
] , async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });}
    let user = await User.findOne({ email:req.body.email})
    if (user) {
        return res.status(400).json({error:"Sorry a user with this email already exists" })
    }
      user = await  User.create({
       name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })
    //   .then(user => res.json(user))
    //    .catch(err=> {console.log(err)
    //   res.json({err:"please enter a unique email"})})
  res.json(user)
})
module.exports = router;