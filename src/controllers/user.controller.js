const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.post("/register", async (req,res) => {

    try{
        const user = await User.create(req.body);
        return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});


router.post("/login", async (req,res) => {
    try{
        const user = await User.findById(req.params.Id).lean().exec();
        return res.status(200).send(user);
    }
    catch(err)
    {
        return res.status(500).send({message : err.message});
    }
})