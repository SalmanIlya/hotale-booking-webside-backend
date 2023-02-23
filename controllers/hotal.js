const Hotel = require("../models/Hotal")
module.exports = {
    createHotale: async (req, res) => {
        const hotal = new Hotel(req.body)
        try {
            const savehotale = await hotal.save()
            res.status(202).json(savehotale)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // update hotal 
    updateUser: async (req, res) => {
        try {
            const hotal = await Hotel.findById(req.params.id)
            if (hotal) {
                const updatehotal = await Hotel.findByIdAndUpdate(
                    req.params.id,
                    { $set: req.body },
                    { new: true }
                )
                res.status(200).json(updatehotal)
            } else {
                res.status(404).json("not found")
            }

        } catch (err) {
            res.status(500).json(err)

        }
    },
    deleteHotale: async (req, res) => {
        try {
            const hotal = await Hotel.findById(req.params.id)
            if (hotal) {
                hotal.remove()
                res.status(202).json("delete succesfully")

            } else {
                res.status(404).json("Not found")

            }
        } catch (err) {
            res.status(500).json(err)

        }
    },
    // get single hotal
    getSingle:async(req,res)=>{
        try{
            const hotal = await Hotel.findById(req.params.id)
            if(hotal){
                res.status(202).json(hotal)

            }else{
                res.status(404).json("Not found")

            }
        }catch (err) {
            res.status(500).json(err)

        }

    },
    // get All
    getAll:async(req,res)=>{
        try{
const hotal=await Hotel.find()
res.status(200).json(hotal)

        }catch (err) {
            res.status(500).json(err)

        }

    }

}