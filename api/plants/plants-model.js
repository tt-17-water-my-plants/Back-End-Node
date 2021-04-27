const db = require('../data/db-config')

const getAllPlants = () => {
    return db('plants as p')
    .leftJoin('species as s','p.species_id','s.species_id')
    .leftJoin('users as u','u.id','p.user_id')
    .select('p.plant_id','p.nickname','p.frequency','s.species_name','u.username as owner')
    .orderBy('plant_id')
}

const getPlantById = (plant_id) => {
     return db('plants as p')
    .leftJoin('species as s','p.species_id','s.species_id')
    .leftJoin('users as u','u.id','p.user_id')
    .select('p.plant_id','p.nickname','p.frequency','s.species_name','u.username as owner')
    .where({plant_id})
    .first()
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

const getSpecies = (species_name) => {
    return db('species').where({species_name}).first()
}

const addSpecies = async(species_name) => {
    const [species_id] = await db('species').insert(species_name,'species_id')
    return db('species').where({species_id}).first()
}


module.exports = {
    getAllPlants,
    getPlantById,
    changePlant,
    deletePlant,
    getSpecies,
    addSpecies,
    addPlant
}