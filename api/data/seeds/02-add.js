const users = [
    {username:"Mike",password:"$2a$08$fCF0nYPBzSNiVp1TNuq9dOTQYfFMOh1tH6gX0y8PF6VEU9Y0LUZNO",phone_number:"9172828221"},
    {username:"Admin",password:"$2a$08$g59SC5rZujtPot8yXfiN7u32NGkpwU9hwrN48tdML4yDefCVdUdAC",phone_number:"1234567891"},
    {username:"Gary",password:"$2a$08$QEBuJw0BUp.flMm2YqX5BuPOJkgu4n.eoKlvXIjWLAJVF8Yy2FDEy",phone_number:"9171234567"}
]

const spec = [
    {species_name:"garlic"},
    {species_name:"tomato"},
    {species_name:"potato"},
    {species_name:"banana"},
    {species_name:"celery"},
    {species_name:"egg"},
    {species_name:"ice_cream"},
    {species_name:"coke"},
    {species_name:"headphones"},
]

const plants = [
    {nickname:"usr1",frequency:"1d",species_id:1,user_id:1},
    {nickname:"usr21",frequency:"2d",species_id:2,user_id:2},
    {nickname:"usr3",frequency:"3d",species_id:3,user_id:3},
    {nickname:"usr11",frequency:"1d",species_id:4,user_id:1},
    {nickname:"usr2",frequency:"2d",species_id:8,user_id:2},
    {nickname:"usr33",frequency:"3d",species_id:6,user_id:3},
    {nickname:"monitor",frequency:"1hr",species_id:1,user_id:1},
    {nickname:"headphones",frequency:"7d",species_id:7,user_id:2},
    {nickname:"towel",frequency:"2.5d",species_id:3,user_id:3},
    {nickname:"cow",frequency:"1d",species_id:9,user_id:1},
    {nickname:"camel",frequency:"2d",species_id:5,user_id:2},
    {nickname:"case",frequency:"3d",species_id:6,user_id:3},
]

exports.seed = async function(knex){
    await knex('users').insert(users)
    await knex('species').insert(spec)
    await knex('plants').insert(plants)
}