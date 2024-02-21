//CRUD For Factions
const express = require('express');
const router = express.Router();
const Faction = require('../models/faction');
const Log = require('../models/LogSchema');
const { render } = require('pug');
const ObjectId = require('mongodb').ObjectID;

router.post('/faction', async (req, res) => {
    try{
        const newFaction = new Faction(req.body);
        await newFaction.save()
        .then((faction) => {
            console.log(faction);
            res.status(201).json({msg: "New faction created"});
        }).catch((error) => {
            console.log(error);
            res.status(500).json({msg: "Failed to create new faction"});
        });
    }catch(error){
        console.log(error);
        res.status(500).json({msg: "Failed to create new faction"});
    }
});
router.get('/faction', async (req, res) => {
    try{
        const factions = await Faction.find();
        res.status(200).json(factions);
    }catch(error){
        console.log(error);
        res.status(500).json({msg: "Failed to retrieve factions"});
    }
});
router.get('/faction/create', (req, res) => {
    res.render('newFaction', { title: 'Create Faction', message: 'Create a new faction' });
});
router.post('/faction/create', async (req, res) => {
    console.log(req.body);
    try {
        const newFaction = new Faction(
            {
                factionName: req.body.factionName,
                factionLeader: req.body.factionLeader,
                factionPower: req.body.factionPower,
                factionDescription: req.body.factionDescription
            }
        );
        await newFaction.save()
        .then((faction) => {
            res.status(201).json({msg: "New faction created"}).end();
        }).catch((error) => {
            res.status(500).json({msg: "Failed to create new faction"});
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to create new faction"});
    }
});
// URL to delete faction - http://localhost:3003/api/faction/:id
router.delete("/faction/:id",async (req, res) => {
    try {
        await Faction.findByIdAndDelete(req.params.id)
        .then((deleteResult) => {
            if(deleteResult.deletedCount == 0){
                res.status(404).json({msg: "Faction not found"});
            }else{
                res.status(200).json({msg: "Faction deleted"});
            }
        }).catch((error) => {
            res.status(500).json({msg: "Failed to delete faction"});
        }).end();
        res.redirect('/factions');
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: `Failed to delete faction : {error.message}`});
    }
});
// router.get('/factions', async (req, res) => {
//     try {
//         const data = await Faction.find({}).then((factions) => {
//             console.log(factions)
//             res.render('factions', {data});
//         }).catch((error) => {
//             console.log(error);
//             res.status(500).json({msg: "Failed to retrieve factions"});
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: "Failed to retrieve factions"});
//     }
// });
router.get('/factions', async (req, res) => {
    try {
        const data = await Faction.find({});
        res.render('factions', {data});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to retrieve factions"});
    }
});

module.exports = router;