const users = [
    {username:"Mike",password:"$2a$08$fCF0nYPBzSNiVp1TNuq9dOTQYfFMOh1tH6gX0y8PF6VEU9Y0LUZNO",phone_number:"9172828221"},
    {username:"Admin",password:"$2a$08$g59SC5rZujtPot8yXfiN7u32NGkpwU9hwrN48tdML4yDefCVdUdAC",phone_number:"1234567891"},
    {username:"Gary",password:"$2a$08$QEBuJw0BUp.flMm2YqX5BuPOJkgu4n.eoKlvXIjWLAJVF8Yy2FDEy",phone_number:"9171234567"}
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