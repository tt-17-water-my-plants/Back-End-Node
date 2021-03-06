const db = require('../data/db-config')

const getAll = () => {
    return db('users').select('id','username')
}

const getById = id => {
    return db('users').where({id}).first().select('id','username','phone_number')
}

const getBy = filter => {
    return db('users').where(filter)
}

const add = async (user) => {
    const [id] = await db('users').insert(user,'id')
    return getById(id)
}

const update = async (id, user) => {
    await db('users').update(user)
    return getById(id)
}

const remove = async (id) => {
    const old = await getById(id)
    await db('users').where({id}).del()
    return old
}

const getPlants = (id) => {
    return db('users as u')
    .leftJoin('plants as p','u.id','p.user_id')
    .leftJoin('specs as s','s.specs_id','p.specs_id')
    .select('u.id','u.username','u.phone_number','p.plant_id','p.nickname','s.species','p.h2oFrequency','p.image_url')
    .where({id})
    .orderBy('p.plant_id')
}

module.exports = {
    getAll,
    getById,
    getBy,
    add,
    update,
    remove,
    getPlants
}