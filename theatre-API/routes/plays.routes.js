const router = require("express").Router()
const Play = require("../models/Play.model.js")



// Get plays

router.get("/", async(req, res, next)=>{
    try {
        const plays = await Play.find()
        return res.status(200).json(plays)
    } catch (error) {
        next(error)
    }
})

router.get("/:_id", async(req, res, next)=>{
    try {
        const {_id} = req.params
        const play = await Play.findById(_id)
        return res.status(200).json(play)
    } catch (error) {
        next(error)
    }
})

// Create Play

router.post("/", async(req,res,next)=>{
    try {
        if (req.body.title){
            const newPlay = await Play.create(req.body)
            return res.status(201).json(newPlay)
        }
        return res.status(400).json({ message: "Bad request, the play title is needed" })
    } catch (error) {
        next(error)
    }
})

// Delete a play

router.delete("/:_id", async(req,res,next)=>{
    try {
        const {_id} = req.params
        await Play.findByIdAndDelete(_id)
        return res.status(200).json({ message: `The play with ID: ${_id}has been deleted` });
    } catch (error) {
        next(error);
    }
})

// Edit a play

router.put("/:_id", async(req,res,next)=>{
    try {
        const { _id } = req.params;
        const editedPlay = await Play.findByIdAndUpdate(_id, req.body, { new: true });
        return res.status(200).json(editedPlay);
    } catch (error) {
        next(error);
    }
})
module.exports = router