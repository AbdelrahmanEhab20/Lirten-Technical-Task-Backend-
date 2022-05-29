const Profiles = require("../models/profileModel");

const findProfiles = (query) => Profiles.find(query);
const findoneProfile = (_id) => Profiles.findById(_id);
const createProfile = (query) => Profiles.create(query);
const removeProfile = (_id) => Profiles.findOneAndDelete({ _id });
const editProfile = (_id, body) => Profiles.findOneAndUpdate({ _id }, body);

module.exports = {
    findProfiles,
    findoneProfile,
    createProfile,
    removeProfile,
    editProfile,
};