const users = [
    {username:"mike",password:"1234",phone_number:"3121234567"},
    {username:"tony",password:"1234",phone_number:"3121234567"},
    {username:"harry",password:"1234",phone_number:"3121234567"}
]

const spec = [
    {species_name:"garlic"},
    {species_name:"purple"},
    {species_name:"potato"}
]

const plants = [
    {nickname:"good",h2oFrequency:"1d",species_id:1,user_id:1},
    {nickname:"bad",h2oFrequency:"1d",species_id:1,user_id:1},
    {nickname:"ugly",h2oFrequency:"1d",species_id:2,user_id:2},
    {nickname:"lovely",h2oFrequency:"1d",species_id:1,user_id:2},
    {nickname:"cac",h2oFrequency:"1d",species_id:3,user_id:3},
    {nickname:"dag",h2oFrequency:"1d",species_id:3,user_id:1},
]

exports.seed = async function(knex){
    await knex('users').insert(users)
    await knex('species').insert(spec)
    await knex('plants').insert(plants)
}