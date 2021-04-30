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
    {nickname:"usr1",h2oFrequency:"1d",specs_id:1,user_id:1,image_url:"https://media.architecturaldigest.com/photos/5efb7da66d18ec1650bd30a7/master/w_1000,h_1250,c_limit/Corn-Plant-LArge-2.jpg"},
    {nickname:"usr21",h2oFrequency:"2d",specs_id:2,user_id:2,image_url:"https://sugarandcharm.com/wp-content/uploads/2020/02/house-plant-Dracaena-.jpg"},
    {nickname:"usr3",h2oFrequency:"3d",specs_id:3,user_id:3,image_url:"https://www.gardeningknowhow.com/wp-content/uploads/2012/07/dracaena-1.jpg"},
    {nickname:"usr11",h2oFrequency:"1d",specs_id:4,user_id:1,image_url:"https://m.media-amazon.com/images/I/7118sBeGt0L._AC_SS450_.jpg"},
    {nickname:"usr2",h2oFrequency:"2d",specs_id:8,user_id:2,image_url:"https://images.thdstatic.com/productImages/302c8d7a-b3ef-4c5c-9a79-38e69730d064/svn/house-plants-ancdrlemowsa06-64_400.jpg"},
    {nickname:"usr33",h2oFrequency:"3d",specs_id:6,user_id:3,image_url:"http://cdn.shopify.com/s/files/1/1702/7305/products/chamaedorea-catara-potted-plant__0149813_PE307957_S4_grande.jpg?v=1594708880"},
    {nickname:"monitor",h2oFrequency:"1hr",specs_id:1,user_id:1,image_url:"https://images.thdstatic.com/productImages/62463ad9-de1a-4bac-9a6f-47c45dbb944a/svn/united-nursery-house-plants-74622-64_400.jpg"},
    {nickname:"headphones",h2oFrequency:"7d",specs_id:7,user_id:2,image_url:"https://cdn.shopify.com/s/files/1/0068/4215/5090/products/LivelyRoot-271_b725b70b-97a9-4528-861c-ecc387a7252b_400x.jpg?v=1614043981"},
    {nickname:"towel",h2oFrequency:"2.5d",specs_id:3,user_id:3,image_url:"https://m.media-amazon.com/images/I/71FHTIuD1xL._AC_UL320_.jpg"},
    {nickname:"cow",h2oFrequency:"1d",specs_id:9,user_id:1,image_url:"https://www.joyusgarden.com/wp-content/uploads/2017/05/snake-plant-care.jpg"},
    {nickname:"camel",h2oFrequency:"2d",specs_id:5,user_id:2,image_url:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603654500-bf16406f-8cbf-40f8-be82-7b212c0945ad.a94deb245dcfae1355350a737e9fa3c4.jpg"},
    {nickname:"case",h2oFrequency:"3d",specs_id:6,user_id:3,image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2019%2F05%2F19012519%2Fhouse-plant-shop-gold-0519_0.jpg"},
]

exports.seed = async function(knex){
    await knex('users').insert(users)
    await knex('specs').insert(spec)
    await knex('plants').insert(plants)
}