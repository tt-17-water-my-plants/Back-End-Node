const db = require('../data/db-config')

const getAll = () => {
    return db('users')
}

const getById = id => {
    return db('users').where({id}).first()
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

module.exports = {
    getAll,
    getById,
    getBy,
    add,
    update,
    remove
}