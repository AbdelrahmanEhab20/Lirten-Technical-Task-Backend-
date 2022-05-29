const express = require("express");
const router = express.Router();

const {
    findProfiles,
    findoneProfile,
    createProfile,
    removeProfile,
    editProfile,
} = require('../controllers/profile-controller');

// Get All Profiles
router.get("/", async (req, res, next) => {
    findProfiles({})
        .then((doc) => res.json(doc))
        .catch((err) => console.log(err));
});

//get one profile  By ID
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const profile = await findoneProfile(id);
    //console.log(profile);
    res.json(profile);
});
// Create new Profile
router.post("/createprofile", async (req, res, next) => {
    const profile = req.body;
    await createProfile(profile)
        .then((doc) => res.json(doc))
        .catch((err) => next(err));
});

//patch (Update) profile
router.patch("/update/:id", async (req, res, next) => {
    const id = req.params.id;
    const profile = req.body;
    await editProfile(id, profile)
        .then((doc) => res.json(doc))
        .catch((err) => next(err));
});

//Delete profile
router.delete("/delete/:id", (req, res, next) => {
    const id = req.params.id;
    removeProfile(id)
        .then((doc) => res.json(doc))
        .catch((err) => next(err));
});

module.exports = router;