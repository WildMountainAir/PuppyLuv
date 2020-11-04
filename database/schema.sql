-- Decide settings in Postman for Data
-- What do I want the database to look like
-- server "could" get new data nightly

-- save data as a file,
-- write script to import into database
-- then query own database!

-- OPTIONS
-- Decide on exact schema, write one time use fn that is 
-- run to look at json animals array and convert obj into 
-- 1 depth obj, then save into csv with fs

-- puppies csv
-- Headers: id,organization_id,url,name,description,gender,size,coat,
--    primary_breed,secondary_breed,mixed,primary_color,secondary_color
--    tertiary_color,spayed_neutered,house_trained,special_needs,
--    shots_current,children,dogs,cats

-- puppies
--  id - int
--  organization_id - text
--  url - text
--  name - text
--  description: text
--  gender - text
--  size - text
--  coat - text
--  primary_breed - text
--  secondary_breed - text
--  mixed - boolean
--  primary_color - text
--  secondary_color - text
--  tertiary_color - text
--  spayed_neutered - boolean
--  house_trained - boolean
--  special_needs - boolean
--  shots_current - boolean
--  children - boolean
--  dogs - boolean
--  cats - boolean


const puppiesData = animalsObj.animals.map((pup) => (
  {
    id: pup.id,
    name: pup.name,
    description: pup.description,
    gender: pup.gender,
    size: pup.size,
    coat: pup.coat
    primary_breed: pup.breeds.primary,
    secondary_breed: pup.breeds.secondary,
    mixed: pup.breeds.mixed,
    primary_color: pup.colors.primary,
    secondary_color: pup.colors.secondary,
    tertiary_color: pup.colors.tertiary,
    spayed_neutered: pup.attributes.spayed_neutered,
    house_trained: pup.attributes.house_trained,
    special_needs: pup.attributes.special_needs,
    shots_current: pup.attributes.shots_current,
    children: pup.environment.children,
    dogs: pup.environment.dogs,
    cats: pup.environment.cats
    photo_medium0: pup.photos[0].medium || https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif,
    photo_full0: pup.photos[0].full || https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif,
    photo_medium1: pup.photos[1].medium || null,
    photo_full1: pup.photos[1].full || null,
    photo_medium2: pup.photos[2].medium || null,
    photo_full2: pup.photos[2].full || null,
    photo_medium3: pup.photos[3].medium || null,
    photo_full3: pup.photos[3].full || null,
    photo_medium4: pup.photos[4].medium || null,
    photo_full4: pup.photos[4].full || null,
    organization_url: pup.url,
    organization_id: pup.organization_id,
    organization_email: pup.contact.email,
    organization_phone: pup.contact.phone,
    organization_address1: pup.contact.address.address1,
    organization_address2: pup.contact.address.address2,
    organization_city: pup.contact.address.city,
    organization_state: pup.contact.address.state,
    organization_postcode: pup.contact.address.postcode,
    organization_country: pup.contact.address.country
  }
));
console.log(puppiesData);
-- animals: [array containing objects with below structure], "pagination":{"count_per_page":20,"total_count":169898,"current_page":1,"total_pages":8495,"_links":{"next":{"href":"\/v2\/animals?type=\u0026page=2"}}}
-- {
--   "id":49673143,
--   "organization_id":"NJ819",
--   "url":"https:\/\/www.petfinder.com\/dog\/bruno-49673143\/nj\/mount-holly\/diamond-dogs-rescue-nj819\/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
--   "type":"Dog",
--   "species":"Dog",
--   "breeds":{
--     "primary":"Shepherd",
--     "secondary":"Hound",
--     "mixed":true,
--     "unknown":false
--   },
--   "colors":{
--     "primary":"Black",
--     "secondary":"Yellow \/ Tan \/ Blond \/ Fawn",
--     "tertiary":null
--   },
--   "age":"Baby",
--   "gender":"Male",
--   "size":"Medium",
--   "coat":"Short",
--   "attributes":{
--     "spayed_neutered":true,
--     "house_trained":false,
--     "declawed":null,
--     "special_needs":false,
--     "shots_current":true
--   },
--   "environment":{
--     "children":true,
--     "dogs":true,
--     "cats":true
--   },
--   "tags":[],
--   "name":"Bruno",
--   "description":"There\u0026#039;s a shelter in NC where Diamond Dogs Rescue has pulled dogs now for over ten years.  In those ten...",
--   "organization_animal_id":null,
--   "photos":[
--     {
--       "small":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055\u0026width=100",
--       "medium":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055\u0026width=300",
--       "large":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055\u0026width=600",
--       "full":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055"
--     },
--     {
--       "small":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/1\/?bust=1604339034\u0026width=100",
--       "medium":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/1\/?bust=1604339034\u0026width=300",
--       "large":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/1\/?bust=1604339034\u0026width=600",
--       "full":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/1\/?bust=1604339034"
--     },
--     {
--       "small":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/2\/?bust=1604340034\u0026width=100",
--       "medium":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/2\/?bust=1604340034\u0026width=300",
--       "large":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/2\/?bust=1604340034\u0026width=600",
--       "full":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/2\/?bust=1604340034"
--     },
--     {
--       "small":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/4\/?bust=1604340071\u0026width=100",
--       "medium":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/4\/?bust=1604340071\u0026width=300",
--       "large":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/4\/?bust=1604340071\u0026width=600",
--       "full":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/4\/?bust=1604340071"
--     },
--     {
--       "small":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/5\/?bust=1604340103\u0026width=100",
--       "medium":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/5\/?bust=1604340103\u0026width=300",
--       "large":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/5\/?bust=1604340103\u0026width=600",
--       "full":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/5\/?bust=1604340103"
--     },
--     {
--       "small":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/6\/?bust=1604340120\u0026width=100",
--       "medium":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/6\/?bust=1604340120\u0026width=300",
--       "large":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/6\/?bust=1604340120\u0026width=600",
--       "full":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/6\/?bust=1604340120"
--     }
--   ],
--   "primary_photo_cropped":{
--     "small":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055\u0026width=300",
--     "medium":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055\u0026width=450",
--     "large":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055\u0026width=600",
--     "full":"https:\/\/dl5zpyw5k3jeb.cloudfront.net\/photos\/pets\/49673143\/3\/?bust=1604340055"
--   },
--   "videos":[],
--   "status":"adoptable",
--   "status_changed_at":"2020-11-02T18:09:35+0000",
--   "published_at":"2020-11-02T18:09:35+0000",
--   "distance":null,
--   "contact":{
--     "email":"TKDiamond@aol.com",
--     "phone":"(856) 498-8166",
--     "address":{
--       "address1":null,
--       "address2":null,
--       "city":"Mount Holly",
--       "state":"NJ",
--       "postcode":"08060",
--       "country":"US"
--     }
--   },
--   "_links":{
--     "self":{
--       "href":"\/v2\/animals\/49673143"
--     },
--     "type":{
--       "href":"\/v2\/types\/dog"
--     },
--     "organization":{
--       "href":"\/v2\/organizations\/nj819"
--     }
--   }
-- }