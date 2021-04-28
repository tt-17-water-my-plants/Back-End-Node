exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments()
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('phone_number', 320).notNullable()
      users.timestamps(false, true)
    })
    .createTable('specs', tbl =>{
      tbl.increments('specs_id')
      tbl.string('species').unique().notNullable()
    })
    .createTable('plants', tbl => {
      tbl.increments('plant_id')
      tbl.string('nickname').unique().notNullable()
      tbl.string('h2oFrequency').notNullable()
      tbl.integer('specs_id')
        .unsigned()
        .notNullable()
        .references('specs_id')
        .inTable('specs')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('plants')
  .dropTableIfExists('specs')
  .dropTableIfExists('users')
}
