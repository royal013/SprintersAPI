const express = require("express");
const router = new express.Router();

const Sprinter = require("../models/model");
const { model } = require("mongoose");

router.get("/", (req, res) => {
    res.send("Hello");
})

router.post("/sprinters", async (req, res) => {
    try {
        const athlete = new Sprinter(req.body);
        // console.log(req.body);
        const createAthlete = await athlete.save();
        res.status(201).send(createAthlete);
    } catch (error) {
        res.status(404).send(error);

    }

})

router.get("/sprinters", async (req, res) => {
    try {
        const sprinterData = await Sprinter.find();
        res.status(201).send(sprinterData);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/sprinters/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const sprinterData=await Sprinter.findById(_id);
        if(!sprinterData){
            res.status(404).send();
        }
        else{
            res.send(sprinterData);
        }
    } catch (error) {
        res.status(500).send(err);
    }
})

module.exports = router;