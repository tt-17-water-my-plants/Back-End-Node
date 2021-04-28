const users = [
    {username:"Mike",password:"$2a$08$fCF0nYPBzSNiVp1TNuq9dOTQYfFMOh1tH6gX0y8PF6VEU9Y0LUZNO",phone_number:"9172828221"},
    {username:"Admin",password:"$2a$08$g59SC5rZujtPot8yXfiN7u32NGkpwU9hwrN48tdML4yDefCVdUdAC",phone_number:"1234567891"},
    {username:"Gary",password:"$2a$08$QEBuJw0BUp.flMm2YqX5BuPOJkgu4n.eoKlvXIjWLAJVF8Yy2FDEy",phone_number:"9171234567"}
]

const spec = [
    {species:"garlic"},
    {species:"tomato"},
    {species:"potato"},
    {species:"banana"},
    {species:"celery"},
    {species:"egg"},
    {species:"ice_cream"},
    {species:"coke"},
    {species:"headphones"},
]

const plants = [
    {nickname:"usr1",h2oFrequency:"1d",specs_id:1,user_id:1},
    {nickname:"usr21",h2oFrequency:"2d",specs_id:2,user_id:2},
    {nickname:"usr3",h2oFrequency:"3d",specs_id:3,user_id:3},
    {nickname:"usr11",h2oFrequency:"1d",specs_id:4,user_id:1},
    {nickname:"usr2",h2oFrequency:"2d",specs_id:8,user_id:2},
    {nickname:"usr33",h2oFrequency:"3d",specs_id:6,user_id:3},
    {nickname:"monitor",h2oFrequency:"1hr",specs_id:1,user_id:1},
    {nickname:"headphones",h2oFrequency:"7d",specs_id:7,user_id:2},
    {nickname:"towel",h2oFrequency:"2.5d",specs_id:3,user_id:3},
    {nickname:"cow",h2oFrequency:"1d",specs_id:9,user_id:1},
    {nickname:"camel",h2oFrequency:"2d",specs_id:5,user_id:2},
    {nickname:"case",h2oFrequency:"3d",specs_id:6,user_id:3},
]

exports.seed = async function(knex){
    await knex('users').insert(users)
    await knex('specs').insert(spec)
    await knex('plants').insert(plants)
}