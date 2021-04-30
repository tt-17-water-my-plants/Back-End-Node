const db = require('../data/db-config')

const getAllPlants = () => {
    return db('plants as p')
    .leftJoin('specs as s','p.specs_id','s.specs_id')
    .leftJoin('users as u','u.id','p.user_id')
    .select('p.plant_id','p.nickname','p.h2oFrequency','s.species','u.username as owner','p.image_url')
    .orderBy('plant_id')
}

const getPlantById = (plant_id) => {
     return db('plants as p')
    .leftJoin('specs as s','p.specs_id','s.specs_id')
    .leftJoin('users as u','u.id','p.user_id')
    .select('p.plant_id','p.nickname','p.h2oFrequency','s.species','u.username as owner','p.image_url')
    .where({plant_id})
    .first()
}

const getPlantByFilter = (filter) => {
    return db('plants').where(filter)
}

const addPlant = async (plant) => {
    const [plant_id] = await db('plants').insert(plant,'plant_id')
    return getPlantById(plant_id)
}

const changePlant = async(plant_id, plant) => {
    await db('plants').where({plant_id}).update(plant)
    return getPlantById(plant_id)
}
const deletePlant = async(plant_id) => {
    const old = await getPlantById(plant_id)
    await db('plants').where({plant_id}).del()
    return old
}

const getSpecs = (species) => {
    return db('specs').where({species}).first()
}

const addSpecs = async(species) => {
    const [specs_id] = await db('specs').insert(species,'specs_id')
    return db('specs').where({specs_id}).first()
}

module.exports = {
    getAllPlants,
    getPlantById,
    changePlant,
    deletePlant,
    getSpecs,
    addSpecs,
    addPlant,
    getPlantByFilter
}