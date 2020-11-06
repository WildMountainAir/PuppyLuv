/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import Puppy from './Puppy';
import {v4 as uuid} from 'uuid';

const PuppyData = [
    {
        "id": 49707360,
        "organization_id": "CO511",
        "url": "https://www.petfinder.com/dog/maple-49707360/co/kiowa/low-riders-of-the-west-co511/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": "Shepherd",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Black",
            "secondary": "Yellow / Tan / Blond / Fawn",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Maple",
        "description": "This little girl is Maple, she is about 10 weeks old and weighs about 12 lbs.  Shelter has her as...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/1/?bust=1604612836&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/1/?bust=1604612836&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/1/?bust=1604612836&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/1/?bust=1604612836"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/2/?bust=1604612839&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/2/?bust=1604612839&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/2/?bust=1604612839&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/2/?bust=1604612839"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/4/?bust=1604612844&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/4/?bust=1604612844&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/4/?bust=1604612844&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/4/?bust=1604612844"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/5/?bust=1604612847&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/5/?bust=1604612847&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/5/?bust=1604612847&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/5/?bust=1604612847"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49707360/3/?bust=1604612841"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T21:47:45+0000",
        "published_at": "2020-11-05T21:47:45+0000",
        "distance": 62.4367,
        "contact": {
            "email": "lowridersofthewest@gmail.com",
            "phone": "(720) 456-2499",
            "address": {
                "address1": null,
                "address2": null,
                "city": "kiowa",
                "state": "CO",
                "postcode": "80117",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49707360"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co511"
            }
        }
    },
    {
        "id": 49705853,
        "organization_id": "CO472",
        "url": "https://www.petfinder.com/dog/mae-49705853/co/boulder/brighter-days-dog-rescue-co472/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Chihuahua",
            "secondary": "Terrier",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Brown / Chocolate",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Small",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Mae",
        "description": "Mae is a 9 week old Chihuahua mix weighing about 2lbs Mae's mom only weighs about 6lbs...",
        "organization_animal_id": "ps_18179240",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49705853/1/?bust=1604606357"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T19:47:40+0000",
        "published_at": "2020-11-05T19:47:40+0000",
        "distance": 5.1695,
        "contact": {
            "email": "brighterdaysdogrescue@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80305",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49705853"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co472"
            }
        }
    },
    {
        "id": 49704933,
        "organization_id": "CO511",
        "url": "https://www.petfinder.com/dog/acorn-49704933/co/kiowa/low-riders-of-the-west-co511/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": false,
            "unknown": false
        },
        "colors": {
            "primary": "Red / Chestnut / Orange",
            "secondary": "White / Cream",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Acorn",
        "description": "This little girl is Acorn, she is about 10 weeks old and weighs about 12 lbs.  Shelter has her as...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/2/?bust=1604602248&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/2/?bust=1604602248&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/2/?bust=1604602248&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/2/?bust=1604602248"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/3/?bust=1604602252&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/3/?bust=1604602252&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/3/?bust=1604602252&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/3/?bust=1604602252"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/4/?bust=1604602255&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/4/?bust=1604602255&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/4/?bust=1604602255&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/4/?bust=1604602255"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49704933/1/?bust=1604602246"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T18:52:02+0000",
        "published_at": "2020-11-05T18:52:02+0000",
        "distance": 62.4367,
        "contact": {
            "email": "lowridersofthewest@gmail.com",
            "phone": "(720) 456-2499",
            "address": {
                "address1": null,
                "address2": null,
                "city": "kiowa",
                "state": "CO",
                "postcode": "80117",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49704933"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co511"
            }
        }
    },
    {
        "id": 49701823,
        "organization_id": "CO329",
        "url": "https://www.petfinder.com/dog/shattuck-49701823/co/broomfield/mile-high-labrador-retriever-mission-co329/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Brown / Chocolate",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Large",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Shattuck",
        "description": "Please go to our website at www.milehighlabmission.com to find out more  about this pet and to submit an adoption application....",
        "organization_animal_id": "12911",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/?bust=1604580621&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/?bust=1604580621&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/?bust=1604580621&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/?bust=1604580621"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/crop/?bust=1604580621&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/crop/?bust=1604580621&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/crop/?bust=1604580621&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49701823/1/crop/?bust=1604580621"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T12:50:29+0000",
        "published_at": "2020-11-05T12:50:29+0000",
        "distance": 11.6187,
        "contact": {
            "email": "milehighlabmission@gmail.com",
            "phone": "   ",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Broomfield",
                "state": "CO",
                "postcode": "80020",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49701823"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co329"
            }
        }
    },
    {
        "id": 49700391,
        "organization_id": "CO202",
        "url": "https://www.petfinder.com/dog/quinlynn-49700391/co/aurora/animal-rescue-of-the-rockies-co202/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Collie",
            "secondary": "Labrador Retriever",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Quinlynn",
        "description": "You can fill out an adoption application online on our official website.\n\nHi, I&amp;#39;m Quinlynn. More information on me coming...",
        "organization_animal_id": "16209110",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/3/?bust=1604549339&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/3/?bust=1604549339&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/3/?bust=1604549339&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/3/?bust=1604549339"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/2/?bust=1604549339&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/2/?bust=1604549339&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/2/?bust=1604549339&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/2/?bust=1604549339"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700391/1/?bust=1604549339"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T03:58:53+0000",
        "published_at": "2020-11-05T03:58:53+0000",
        "distance": 31.4761,
        "contact": {
            "email": "ARRColorado@gmail.com",
            "phone": "(970) 389-8324",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Aurora",
                "state": "CO",
                "postcode": "80012",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49700391"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co202"
            }
        }
    },
    {
        "id": 49700319,
        "organization_id": "CO408",
        "url": "https://www.petfinder.com/dog/rio-49700319/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Cattle Dog",
            "secondary": "Dachshund",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Brown / Chocolate",
            "secondary": "White / Cream",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Rio",
        "description": "There&#039;s nothing quite like puppy energy and silliness...and then they lie quietly on your shoulder breathing their warm baby breath....",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/2/?bust=1604547153&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/2/?bust=1604547153&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/2/?bust=1604547153&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/2/?bust=1604547153"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700319/1/?bust=1604547142"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T03:32:49+0000",
        "published_at": "2020-11-05T03:32:49+0000",
        "distance": 4.8206,
        "contact": {
            "email": "farfelsrescue@gmail.com",
            "phone": "(303) 443-7711",
            "address": {
                "address1": "906 Pearl Street",
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80302",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49700319"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co408"
            }
        }
    },
    {
        "id": 49700145,
        "organization_id": "CO408",
        "url": "https://www.petfinder.com/dog/rylee-49700145/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Cattle Dog",
            "secondary": "Dachshund",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Red / Chestnut / Orange",
            "secondary": "White / Cream",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Rylee",
        "description": "There&#039;s nothing quite like puppy energy and silliness...and then they lie quietly on your shoulder breathing their warm baby breath....",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/2/?bust=1604544773&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/2/?bust=1604544773&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/2/?bust=1604544773&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/2/?bust=1604544773"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700145/1/?bust=1604544761"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T02:58:12+0000",
        "published_at": "2020-11-05T02:58:12+0000",
        "distance": 4.8206,
        "contact": {
            "email": "farfelsrescue@gmail.com",
            "phone": "(303) 443-7711",
            "address": {
                "address1": "906 Pearl Street",
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80302",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49700145"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co408"
            }
        }
    },
    {
        "id": 49700136,
        "organization_id": "CO408",
        "url": "https://www.petfinder.com/dog/roxie-49700136/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Cattle Dog",
            "secondary": "Dachshund",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Red / Chestnut / Orange",
            "secondary": "White / Cream",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Roxie",
        "description": "There&#039;s nothing quite like puppy energy and silliness...and then they lie quietly on your shoulder breathing their warm baby breath....",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/2/?bust=1604545990&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/2/?bust=1604545990&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/2/?bust=1604545990&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/2/?bust=1604545990"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49700136/1/?bust=1604545989"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T02:51:13+0000",
        "published_at": "2020-11-05T02:51:13+0000",
        "distance": 4.8206,
        "contact": {
            "email": "farfelsrescue@gmail.com",
            "phone": "(303) 443-7711",
            "address": {
                "address1": "906 Pearl Street",
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80302",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49700136"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co408"
            }
        }
    },
    {
        "id": 49699984,
        "organization_id": "CO408",
        "url": "https://www.petfinder.com/dog/rain-49699984/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Cattle Dog / Blue Heeler",
            "secondary": "Labrador Retriever",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Golden",
            "secondary": "Red / Chestnut / Orange",
            "tertiary": "White / Cream"
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Rain",
        "description": "Rain is an adorable 7 week old pup. Her mom is a Dachshund mix, and we are unaware of what...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/1/?bust=1604542656&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/1/?bust=1604542656&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/1/?bust=1604542656&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/1/?bust=1604542656"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699984/2/?bust=1604542656"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T02:19:58+0000",
        "published_at": "2020-11-05T02:19:58+0000",
        "distance": 4.8206,
        "contact": {
            "email": "farfelsrescue@gmail.com",
            "phone": "(303) 443-7711",
            "address": {
                "address1": "906 Pearl Street",
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80302",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699984"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co408"
            }
        }
    },
    {
        "id": 49699971,
        "organization_id": "CO408",
        "url": "https://www.petfinder.com/dog/rita-49699971/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Cattle Dog / Blue Heeler",
            "secondary": "Dachshund",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Red / Chestnut / Orange",
            "secondary": "White / Cream",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Medium",
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Rita",
        "description": "Rita is an adorable 7 week old pup. Her mom is a Dachshund mix, and we are unaware of what...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/2/?bust=1604542363&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/2/?bust=1604542363&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/2/?bust=1604542363&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/2/?bust=1604542363"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699971/1/?bust=1604542357"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T02:15:19+0000",
        "published_at": "2020-11-05T02:15:19+0000",
        "distance": 4.8206,
        "contact": {
            "email": "farfelsrescue@gmail.com",
            "phone": "(303) 443-7711",
            "address": {
                "address1": "906 Pearl Street",
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80302",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699971"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co408"
            }
        }
    },
    {
        "id": 49699894,
        "organization_id": "CO408",
        "url": "https://www.petfinder.com/dog/ricky-adoption-pending-49699894/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Cattle Dog / Blue Heeler",
            "secondary": "Dachshund",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Red / Chestnut / Orange",
            "secondary": "White / Cream",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": "Medium",
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Ricky -ADOPTION PENDING",
        "description": "*****RICKY’S ADOPTION IS PENDING!***** \n\nRicky is an adorable 7 week old pup. His mom is a Dachshund mix, and we...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699894/1/?bust=1604542180"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T02:11:19+0000",
        "published_at": "2020-11-05T02:11:19+0000",
        "distance": 4.8206,
        "contact": {
            "email": "farfelsrescue@gmail.com",
            "phone": "(303) 443-7711",
            "address": {
                "address1": "906 Pearl Street",
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80302",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699894"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co408"
            }
        }
    },
    {
        "id": 49699802,
        "organization_id": "CO408",
        "url": "https://www.petfinder.com/dog/riddle-49699802/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Cattle Dog / Blue Heeler",
            "secondary": "Dachshund",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Apricot / Beige",
            "secondary": "White / Cream",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Riddle",
        "description": "Riddle is an adorable 7 week old pup. His mom is a Dachshund mix, and we are unaware of what...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/2/?bust=1604541370&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/2/?bust=1604541370&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/2/?bust=1604541370&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/2/?bust=1604541370"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699802/1/?bust=1604541365"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T02:04:58+0000",
        "published_at": "2020-11-05T02:04:58+0000",
        "distance": 4.8206,
        "contact": {
            "email": "farfelsrescue@gmail.com",
            "phone": "(303) 443-7711",
            "address": {
                "address1": "906 Pearl Street",
                "address2": null,
                "city": "Boulder",
                "state": "CO",
                "postcode": "80302",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699802"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co408"
            }
        }
    },
    {
        "id": 49699761,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/fallon-49699761/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Bicolor",
            "secondary": "Golden",
            "tertiary": "White / Cream"
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Fallon",
        "description": "(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN BY APPOINTMENT ONLY!\nTo set up a meet...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699761/1/?bust=1604540817"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T01:47:31+0000",
        "published_at": "2020-11-05T01:47:31+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699761"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49699751,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/dana-49699751/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Bloodhound",
            "secondary": "Retriever",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Golden",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Dana",
        "description": "(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN BY APPOINTMENT ONLY!\nTo set up a meet...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699751/1/?bust=1604540709"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T01:45:32+0000",
        "published_at": "2020-11-05T01:45:32+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699751"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49699720,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/canon-49699720/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Shepherd",
            "secondary": "Retriever",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Bicolor",
            "secondary": "Black",
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Canon",
        "description": "(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN BY APPOINTMENT ONLY!\nTo set up a meet...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/1/?bust=1604540493&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/1/?bust=1604540493&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/1/?bust=1604540493&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/1/?bust=1604540493"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/2/?bust=1604540555&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/2/?bust=1604540555&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/2/?bust=1604540555&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/2/?bust=1604540555"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699720/3/?bust=1604540558"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T01:43:41+0000",
        "published_at": "2020-11-05T01:43:41+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699720"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49699554,
        "organization_id": "CO457",
        "url": "https://www.petfinder.com/dog/jack-49699554/co/lafayette/mother-gaia-animal-rescue-co457/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Black",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Large",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Jack",
        "description": "Hi my name is Jack. I am outgoing and your typical lab. I absolutely love water, and being outside. I&amp;#39;m...",
        "organization_animal_id": "ps_72514748",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/2/?bust=1604539523&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/2/?bust=1604539523&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/2/?bust=1604539523&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/2/?bust=1604539523"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699554/1/?bust=1604539583"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T01:11:56+0000",
        "published_at": "2020-11-05T01:11:56+0000",
        "distance": 7.1154,
        "contact": {
            "email": "Tiffany@mgarcolorado.org",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Lafayette",
                "state": "CO",
                "postcode": "80026",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699554"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co457"
            }
        }
    },
    {
        "id": 49699338,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/june-49699338/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "English Pointer",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Tricolor (Brown, Black, & White)",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Large",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "June",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_49605267",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699338/1/?bust=1604539265"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T01:03:39+0000",
        "published_at": "2020-11-05T01:03:39+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699338"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49699126,
        "organization_id": "CO91",
        "url": "https://www.petfinder.com/dog/izzy-49699126/co/golden/foothills-animal-shelter-co91/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Siberian Husky",
            "secondary": "Boxer",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Izzy",
        "description": "Hi! I&amp;#39;m new to CO. I came in from out of state because this is such a pet friendly state....",
        "organization_animal_id": "225485",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699126/1/?bust=1604537043"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T00:31:48+0000",
        "published_at": "2020-11-05T00:31:48+0000",
        "distance": 22.0222,
        "contact": {
            "email": "reception@fas4pets.org",
            "phone": "(303) 278-7575",
            "address": {
                "address1": "580 McIntyre St (new)",
                "address2": null,
                "city": "Golden",
                "state": "CO",
                "postcode": "80401",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699126"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co91"
            }
        }
    },
    {
        "id": 49699127,
        "organization_id": "CO91",
        "url": "https://www.petfinder.com/dog/glory-49699127/co/golden/foothills-animal-shelter-co91/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Pit Bull Terrier",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Glory",
        "description": "Hi! I'm new to CO. I came in from out of state because this is such a pet friendly state....",
        "organization_animal_id": "225478",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49699127/1/?bust=1604536913"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-05T00:31:48+0000",
        "published_at": "2020-11-05T00:31:48+0000",
        "distance": 22.0222,
        "contact": {
            "email": "reception@fas4pets.org",
            "phone": "(303) 278-7575",
            "address": {
                "address1": "580 McIntyre St (new)",
                "address2": null,
                "city": "Golden",
                "state": "CO",
                "postcode": "80401",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49699127"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co91"
            }
        }
    },
    {
        "id": 49689800,
        "organization_id": "CO220",
        "url": "https://www.petfinder.com/dog/cheerio-49689800/co/wheat-ridge/planet-pet-co220/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Chihuahua",
            "secondary": null,
            "mixed": false,
            "unknown": false
        },
        "colors": {
            "primary": "Brown / Chocolate",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Small",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [
            "shy",
            "playful"
        ],
        "name": "Cheerio",
        "description": "Cheerio is a 10 month old chihuahua that is lookin for a place to settle in with a family that...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/?bust=1604525165&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/?bust=1604525165&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/?bust=1604525165&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/?bust=1604525165"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/crop/?bust=1604525165&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/crop/?bust=1604525165&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/crop/?bust=1604525165&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689800/1/crop/?bust=1604525165"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T22:48:44+0000",
        "published_at": "2020-11-04T22:48:44+0000",
        "distance": 20.046,
        "contact": {
            "email": "planetpetdenver@gmail.com",
            "phone": "7209370633",
            "address": {
                "address1": "4595 HARLAN STREET",
                "address2": "4595 HARLAN STREET",
                "city": "WHEAT RIDGE",
                "state": "CO",
                "postcode": "80033",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49689800"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co220"
            }
        }
    },
    {
        "id": 49697662,
        "organization_id": "CO316",
        "url": "https://www.petfinder.com/dog/noble-49697662/co/denver/dumb-friends-league-co316/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Boxer",
            "secondary": "Mixed Breed",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Small",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Noble",
        "description": null,
        "organization_animal_id": "A0835845",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697662/1/?bust=1604539497&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697662/1/?bust=1604539497&width=300",
                "large": "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif",
                "full": "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697662/1/?bust=1604539497&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697662/1/?bust=1604539497&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697662/1/?bust=1604539497&width=600",
            "full": "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T22:07:00+0000",
        "published_at": "2020-11-04T22:07:00+0000",
        "distance": 31.279,
        "contact": {
            "email": "customercare@ddfl.org",
            "phone": "303-751-5772  ",
            "address": {
                "address1": "2080 S. Quebec St.",
                "address2": null,
                "city": "Denver",
                "state": "CO",
                "postcode": "80231",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49697662"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co316"
            }
        }
    },
    {
        "id": 49697434,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/brooklyn-49697434/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Chihuahua",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Black",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Small",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Brooklyn",
        "description": "(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN BY APPOINTMENT ONLY!\nTo set up a meet...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697434/1/?bust=1604527000"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T22:03:39+0000",
        "published_at": "2020-11-04T22:03:39+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49697434"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49697154,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/hazel-49697154/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Shepherd",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Golden",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Hazel",
        "description": "(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN BY APPOINTMENT ONLY!\nTo set up a meet...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697154/1/?bust=1604525108"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:36:34+0000",
        "published_at": "2020-11-04T21:36:34+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49697154"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49697086,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/harley-49697086/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Shepherd",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Golden",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Harley",
        "description": "(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN BY APPOINTMENT ONLY!\nTo set up a meet...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697086/1/?bust=1604524809"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:20:50+0000",
        "published_at": "2020-11-04T21:20:50+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49697086"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49697051,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/charlotte-nibbles-49697051/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Shepherd",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Golden",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Charlotte Nibbles",
        "description": "Charlotte  is from a litter of 7 puppies, The puppies  are Aussie mixes.\n\n(Applicant must be 24 years of age...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697051/1/?bust=1604524560"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:16:21+0000",
        "published_at": "2020-11-04T21:16:21+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49697051"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49697040,
        "organization_id": "CO342",
        "url": "https://www.petfinder.com/dog/suki-49697040/co/broomfield/rocky-mountain-puppy-rescue-co342/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "SUKI",
        "description": "Hi my name is Suki! My foster mama says I have the sweetest face, and I love kissing her chin...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697040/1/?bust=1604524419"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:15:04+0000",
        "published_at": "2020-11-04T21:15:04+0000",
        "distance": 11.6187,
        "contact": {
            "email": "rmprcontact@gmail.com",
            "phone": "(720) 443-3748",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Broomfield",
                "state": "CO",
                "postcode": "80020",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49697040"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co342"
            }
        }
    },
    {
        "id": 49697004,
        "organization_id": "CO342",
        "url": "https://www.petfinder.com/dog/sienna-49697004/co/broomfield/rocky-mountain-puppy-rescue-co342/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "SIENNA",
        "description": "Hi everyone! My name is Sienna. My foster mama says I&#039;m the perfect mix of sweet and sassy. I love...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49697004/1/?bust=1604524242"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:11:45+0000",
        "published_at": "2020-11-04T21:11:45+0000",
        "distance": 11.6187,
        "contact": {
            "email": "rmprcontact@gmail.com",
            "phone": "(720) 443-3748",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Broomfield",
                "state": "CO",
                "postcode": "80020",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49697004"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co342"
            }
        }
    },
    {
        "id": 49696760,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/polly-49696760/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Mountain Dog",
            "secondary": "Labrador Retriever",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Tricolor (Brown, Black, & White)",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Polly",
        "description": "Polly is  from a litter of  5 puppies. \n(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696760/1/?bust=1604596374"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:05:54+0000",
        "published_at": "2020-11-04T21:05:54+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49696760"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49689709,
        "organization_id": "CO220",
        "url": "https://www.petfinder.com/dog/marlan-49689709/co/wheat-ridge/planet-pet-co220/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Boxer",
            "secondary": "Pit Bull Terrier",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "White / Cream",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Marlan",
        "description": "This is Marlon he is an energetic young puppy that loves people kids other dogs and cats. At only 8...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/2/?bust=1604523810&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/2/?bust=1604523810&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/2/?bust=1604523810&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/2/?bust=1604523810"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689709/1/?bust=1604523779"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:04:14+0000",
        "published_at": "2020-11-04T21:04:14+0000",
        "distance": 20.046,
        "contact": {
            "email": "planetpetdenver@gmail.com",
            "phone": "7209370633",
            "address": {
                "address1": "4595 HARLAN STREET",
                "address2": "4595 HARLAN STREET",
                "city": "WHEAT RIDGE",
                "state": "CO",
                "postcode": "80033",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49689709"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co220"
            }
        }
    },
    {
        "id": 49689785,
        "organization_id": "CO220",
        "url": "https://www.petfinder.com/dog/damon-49689785/co/wheat-ridge/planet-pet-co220/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Boxer",
            "secondary": "Pit Bull Terrier",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "White / Cream",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Damon",
        "description": "This is Damon he is an energetic young puppy that loves people kids other dogs and cats. At only 8...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/?bust=1604523657&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/?bust=1604523657&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/?bust=1604523657&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/?bust=1604523657"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/1/?bust=1604523605&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/1/?bust=1604523605&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/1/?bust=1604523605&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/1/?bust=1604523605"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/crop/?bust=1604523657&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/crop/?bust=1604523657&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/crop/?bust=1604523657&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49689785/2/crop/?bust=1604523657"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T21:01:32+0000",
        "published_at": "2020-11-04T21:01:32+0000",
        "distance": 20.046,
        "contact": {
            "email": "planetpetdenver@gmail.com",
            "phone": "7209370633",
            "address": {
                "address1": "4595 HARLAN STREET",
                "address2": "4595 HARLAN STREET",
                "city": "WHEAT RIDGE",
                "state": "CO",
                "postcode": "80033",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49689785"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co220"
            }
        }
    },
    {
        "id": 49696726,
        "organization_id": "WY80",
        "url": "https://www.petfinder.com/dog/hans-49696726/wy/cheyenne/yola-and-boogy-fund-wy80/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Tricolor (Brown, Black, & White)",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Hans",
        "description": "(Applicant must be 24 years of age to adopt)\nYola&#039;s IS OPEN BY APPOINTMENT ONLY!\nTo set up a meet...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49696726/1/?bust=1604523477"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T20:58:44+0000",
        "published_at": "2020-11-04T20:58:44+0000",
        "distance": 81.6826,
        "contact": {
            "email": "Yolaandboogy@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Cheyenne",
                "state": "WY",
                "postcode": "82009",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49696726"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/wy80"
            }
        }
    },
    {
        "id": 49695789,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/cladus-49695789/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "German Shepherd Dog",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Cladus",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_895213-109199",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695789/1/?bust=1604519365"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:38:37+0000",
        "published_at": "2020-11-04T19:38:37+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695789"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49695793,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/hula-49695793/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Jack Russell Terrier",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Brown / Chocolate",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Small",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Hula",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_31714780",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695793/1/?bust=1604519372"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:38:37+0000",
        "published_at": "2020-11-04T19:38:37+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695793"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49695787,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/buttons-49695787/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Doberman Pinscher",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Tricolor (Brown, Black, & White)",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Buttons",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_14457310",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695787/1/?bust=1604519394"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:38:37+0000",
        "published_at": "2020-11-04T19:38:37+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695787"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49695794,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/babadoo-49695794/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "German Shepherd Dog",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Babadoo",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_895215-109199",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695794/1/?bust=1604519395"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:38:37+0000",
        "published_at": "2020-11-04T19:38:37+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695794"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49695792,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/hope-49695792/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Jack Russell Terrier",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Brown / Chocolate",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Small",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Hope",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_895238-109199",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695792/1/?bust=1604519391"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:38:37+0000",
        "published_at": "2020-11-04T19:38:37+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695792"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49695788,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/cici-49695788/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Black Mouth Cur",
            "secondary": "Boxer",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Cici",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_56289033",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695788/1/?bust=1604519462"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:38:37+0000",
        "published_at": "2020-11-04T19:38:37+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695788"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49695786,
        "organization_id": "CO403",
        "url": "https://www.petfinder.com/dog/katalena-49695786/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "German Shepherd Dog",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Katalena",
        "description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
        "organization_animal_id": "ps_14386665",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695786/1/?bust=1604519452"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:38:37+0000",
        "published_at": "2020-11-04T19:38:37+0000",
        "distance": 54.933,
        "contact": {
            "email": "adopt@4p4l.org",
            "phone": "(720) 443-2682",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Sedalia",
                "state": "CO",
                "postcode": "80135",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695786"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co403"
            }
        }
    },
    {
        "id": 49695730,
        "organization_id": "CO437",
        "url": "https://www.petfinder.com/dog/tailes-49695730/co/lafayette/rez-dawg-rescue-co437/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Australian Cattle Dog / Blue Heeler",
            "secondary": "Mixed Breed",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": true
        },
        "tags": [],
        "name": "Tailes",
        "description": "Hello! My name is Tailes. I'm a gorgeous 8 week old female pup. I came to Colorado from New Mexico...",
        "organization_animal_id": "ps_866028-119",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/2/?bust=1604570864&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/2/?bust=1604570864&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/2/?bust=1604570864&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/2/?bust=1604570864"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/5/?bust=1604570804&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/5/?bust=1604570804&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/5/?bust=1604570804&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/5/?bust=1604570804"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/4/?bust=1604570867&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/4/?bust=1604570867&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/4/?bust=1604570867&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/4/?bust=1604570867"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/3/?bust=1604570802&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/3/?bust=1604570802&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/3/?bust=1604570802&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/3/?bust=1604570802"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/6/?bust=1604570802&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/6/?bust=1604570802&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/6/?bust=1604570802&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/6/?bust=1604570802"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695730/1/?bust=1604570803"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:35:43+0000",
        "published_at": "2020-11-04T19:35:43+0000",
        "distance": 7.1154,
        "contact": {
            "email": "adopt@rezdawgrescue.org",
            "phone": "(720) 515-3679",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Lafayette",
                "state": "CO",
                "postcode": "80026",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695730"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co437"
            }
        }
    },
    {
        "id": 49695163,
        "organization_id": "CO214",
        "url": "https://www.petfinder.com/dog/daphni-49695163/co/fort-collins/animal-friends-alliance-co214/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": "Terrier",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Black",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Small",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Daphni",
        "description": "With big ears comes a big personality! Daphni loves to run around and play but loves taking naps even more....",
        "organization_animal_id": "CAFA-A-37702",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/2/?bust=1604517779&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/2/?bust=1604517779&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/2/?bust=1604517779&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/2/?bust=1604517779"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/3/?bust=1604517864&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/3/?bust=1604517864&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/3/?bust=1604517864&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/3/?bust=1604517864"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49695163/1/?bust=1604517761"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T19:10:10+0000",
        "published_at": "2020-11-04T19:10:10+0000",
        "distance": 38.5424,
        "contact": {
            "email": "adopt@savinganimalstoday.org",
            "phone": "(970) 484-8516",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80524",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49695163"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co214"
            }
        }
    },
    {
        "id": 49675735,
        "organization_id": "CO327",
        "url": "https://www.petfinder.com/dog/toodles-49675735/co/littleton/humane-society-of-the-south-platte-valley-co327/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Terrier",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Toodles",
        "description": "Hi there my name is Toodles! I am a sweet little lady looking for my new home. I am still...",
        "organization_animal_id": "39772",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675735/1/?bust=1604526115"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T22:02:14+0000",
        "published_at": "2020-11-02T21:16:04+0000",
        "distance": 32.9854,
        "contact": {
            "email": "info@hsspv.org",
            "phone": "303-703-2938",
            "address": {
                "address1": "2129 W. Chenango Ave., Unit A",
                "address2": null,
                "city": "Littleton",
                "state": "CO",
                "postcode": "80120",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675735"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co327"
            }
        }
    },
    {
        "id": 49675738,
        "organization_id": "CO327",
        "url": "https://www.petfinder.com/dog/fluffer-nutter-49675738/co/littleton/humane-society-of-the-south-platte-valley-co327/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Terrier",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Fluffer Nutter",
        "description": "Hi there my name is Fluffer Nutter! I am an adorable young man with a sweet demeanor. I am looking...",
        "organization_animal_id": "39774",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675738/1/?bust=1604526114"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T22:02:14+0000",
        "published_at": "2020-11-02T21:16:04+0000",
        "distance": 32.9854,
        "contact": {
            "email": "info@hsspv.org",
            "phone": "303-703-2938",
            "address": {
                "address1": "2129 W. Chenango Ave., Unit A",
                "address2": null,
                "city": "Littleton",
                "state": "CO",
                "postcode": "80120",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675738"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co327"
            }
        }
    },
    {
        "id": 49675739,
        "organization_id": "CO327",
        "url": "https://www.petfinder.com/dog/squiggle-49675739/co/littleton/humane-society-of-the-south-platte-valley-co327/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Terrier",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Squiggle",
        "description": "Hi there my name is Squiggle! I am an adorable young man with a fun personality. I am social, affectionate,...",
        "organization_animal_id": "39773",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675739/1/?bust=1604526115"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T22:02:14+0000",
        "published_at": "2020-11-02T21:16:04+0000",
        "distance": 32.9854,
        "contact": {
            "email": "info@hsspv.org",
            "phone": "303-703-2938",
            "address": {
                "address1": "2129 W. Chenango Ave., Unit A",
                "address2": null,
                "city": "Littleton",
                "state": "CO",
                "postcode": "80120",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675739"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co327"
            }
        }
    },
    {
        "id": 49675117,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/fresno-49675117/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Fresno",
        "description": "Fresno is an adorable 8 week old Shepherd mix. \n\nIf you are interested in adopting the first step is to...",
        "organization_animal_id": "20201104-15",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675117/1/?bust=1604349336"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675117"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49675115,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/tuscon-49675115/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Tuscon",
        "description": "Tuscon is an adorable 8 week old Shepherd mix. \n\nIf you are interested in adopting the first step is to...",
        "organization_animal_id": "20201104-12",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675115/1/?bust=1604349336"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675115"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49675119,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/bisbee-49675119/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Bisbee",
        "description": "Bisbee is an adorable 8 week old Shepherd mix. \n\nIf you are interested in adopting the first step is to...",
        "organization_animal_id": "20201104-13",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675119/1/?bust=1604349337"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675119"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49675118,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/hannah-49675118/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Hannah",
        "description": "Hannah is a loving 4 month old lab mix. \n\nPoor Hannah was found with major hairloss, and itchy skin. She...",
        "organization_animal_id": "20201104-09",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675118/1/?bust=1604349337"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675118"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49675108,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/helena-49675108/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Helena",
        "description": "Helena is an adorable 8 week old Shepherd mix. \n\nIf you are interested in adopting the first step is to...",
        "organization_animal_id": "20201104-10",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675108/1/?bust=1604349338"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675108"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49675106,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/omaha-49675106/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Omaha",
        "description": "Omaha is an adorable 8 week old Shepherd mix. \n\nIf you are interested in adopting the first step is to...",
        "organization_animal_id": "20201104-11",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675106/1/?bust=1604349338"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675106"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49675110,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/louise-49675110/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "American Bulldog",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Louise",
        "description": "Louise is a 8week old American Bulldog mix. \n\nSweet Louise was found along with her mom, Thelma. They were brought...",
        "organization_animal_id": "20201104-07",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675110/1/?bust=1604349339"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675110"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49675107,
        "organization_id": "CO324",
        "url": "https://www.petfinder.com/dog/denver-49675107/co/fort-collins/all-aboard-animal-rescue-co324/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": false
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Denver",
        "description": "Denver is an adorable 8 week old Shepherd mix. \n\nIf you are interested in adopting the first step is to...",
        "organization_animal_id": "20201104-14",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675107/1/?bust=1604349339"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T20:25:32+0000",
        "published_at": "2020-11-02T20:25:32+0000",
        "distance": 34.6255,
        "contact": {
            "email": "allaboardanimalrescue@gmail.com",
            "phone": "(970) 286-9902",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Collins",
                "state": "CO",
                "postcode": "80526",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49675107"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co324"
            }
        }
    },
    {
        "id": 49673723,
        "organization_id": "CO202",
        "url": "https://www.petfinder.com/dog/monica-49673723/co/aurora/animal-rescue-of-the-rockies-co202/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Border Collie",
            "secondary": "Labrador Retriever",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Medium",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Monica",
        "description": "You can fill out an adoption application online on our official website.\n\nHi, I'm\nMonica\n. More information on me...",
        "organization_animal_id": "16209166",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/2/?bust=1604548445&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/2/?bust=1604548445&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/2/?bust=1604548445&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/2/?bust=1604548445"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673723/1/?bust=1604548446"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T18:24:36+0000",
        "published_at": "2020-11-02T18:24:36+0000",
        "distance": 31.4761,
        "contact": {
            "email": "ARRColorado@gmail.com",
            "phone": "(970) 389-8324",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Aurora",
                "state": "CO",
                "postcode": "80012",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49673723"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co202"
            }
        }
    },
    {
        "id": 49672050,
        "organization_id": "CO329",
        "url": "https://www.petfinder.com/dog/silo-49672050/co/broomfield/mile-high-labrador-retriever-mission-co329/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Black",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Large",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Silo",
        "description": "Please go to our website at www.milehighlabmission.com to find out more  about this pet and to submit an adoption application....",
        "organization_animal_id": "12915",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/?bust=1604334786&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/?bust=1604334786&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/?bust=1604334786&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/?bust=1604334786"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/crop/?bust=1604334786&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/crop/?bust=1604334786&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/crop/?bust=1604334786&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49672050/1/crop/?bust=1604334786"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T16:33:33+0000",
        "published_at": "2020-11-02T16:33:33+0000",
        "distance": 11.6187,
        "contact": {
            "email": "milehighlabmission@gmail.com",
            "phone": "   ",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Broomfield",
                "state": "CO",
                "postcode": "80020",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49672050"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co329"
            }
        }
    },
    {
        "id": 49671626,
        "organization_id": "CO329",
        "url": "https://www.petfinder.com/dog/shidler-49671626/co/broomfield/mile-high-labrador-retriever-mission-co329/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": null,
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": "Yellow / Tan / Blond / Fawn",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Large",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Shidler",
        "description": "Please go to our website at www.milehighlabmission.com to find out more  about this pet and to submit an adoption application....",
        "organization_animal_id": "12913",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/?bust=1604332011&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/?bust=1604332011&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/?bust=1604332011&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/?bust=1604332011"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/crop/?bust=1604332011&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/crop/?bust=1604332011&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/crop/?bust=1604332011&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671626/1/crop/?bust=1604332011"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T15:47:12+0000",
        "published_at": "2020-11-02T15:47:12+0000",
        "distance": 11.6187,
        "contact": {
            "email": "milehighlabmission@gmail.com",
            "phone": "   ",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Broomfield",
                "state": "CO",
                "postcode": "80020",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49671626"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co329"
            }
        }
    },
    {
        "id": 49670761,
        "organization_id": "CO511",
        "url": "https://www.petfinder.com/dog/rose-49670761/co/kiowa/low-riders-of-the-west-co511/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Miniature Pinscher",
            "secondary": null,
            "mixed": false,
            "unknown": false
        },
        "colors": {
            "primary": "Tricolor (Brown, Black, & White)",
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Small",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Rose",
        "description": "Rose is the sweetest 3 month old, 7-10 lb Terrier/Lab Puppy.  She and her sister came up from Texas where...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/1/?bust=1604327530&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/1/?bust=1604327530&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/1/?bust=1604327530&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/1/?bust=1604327530"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/3/?bust=1604327524&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/3/?bust=1604327524&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/3/?bust=1604327524&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/3/?bust=1604327524"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670761/2/?bust=1604327523"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T14:33:06+0000",
        "published_at": "2020-11-02T14:33:06+0000",
        "distance": 62.4367,
        "contact": {
            "email": "lowridersofthewest@gmail.com",
            "phone": "(720) 456-2499",
            "address": {
                "address1": null,
                "address2": null,
                "city": "kiowa",
                "state": "CO",
                "postcode": "80117",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49670761"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co511"
            }
        }
    },
    {
        "id": 49670378,
        "organization_id": "CO132",
        "url": "https://www.petfinder.com/dog/prancer-49670378/co/evergreen/evergreen-animal-protective-league-eapl-co132/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": "Shepherd",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Large",
        "coat": null,
        "attributes": {
            "spayed_neutered": false,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Prancer",
        "description": "Meet Prancer, she is the last little girl in the litter! She had been placed but her family had an...",
        "organization_animal_id": "16159044-20-0804",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604599121&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604599121&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604599121&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604599121"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604599117&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604599117&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604599117&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604599117"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604599138"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T10:49:20+0000",
        "published_at": "2020-11-02T10:49:20+0000",
        "distance": 29.2586,
        "contact": {
            "email": "eaplevergreen@eapl.com",
            "phone": "(303) 674-6442",
            "address": {
                "address1": "P. O. Box 2517",
                "address2": null,
                "city": "Evergreen",
                "state": "CO",
                "postcode": "80437",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49670378"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co132"
            }
        }
    },
    {
        "id": 49670213,
        "organization_id": "CO447",
        "url": "https://www.petfinder.com/dog/cactus-49670213/co/fort-lupton/soul-dog-rescue-co447/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Mixed Breed",
            "secondary": null,
            "mixed": false,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Male",
        "size": "Large",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Cactus",
        "description": "Cactus is currently in foster but he will be available at our Fort Lupton Shelter on 11/7/20 at 10:00am. If...",
        "organization_animal_id": "A2020731",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604484800"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T10:02:20+0000",
        "published_at": "2020-11-02T10:02:20+0000",
        "distance": 22.4429,
        "contact": {
            "email": "adopt@souldog.org",
            "phone": "(303) 857-6789",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Lupton",
                "state": "CO",
                "postcode": "80621",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49670213"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co447"
            }
        }
    },
    {
        "id": 49670214,
        "organization_id": "CO447",
        "url": "https://www.petfinder.com/dog/prickle-49670214/co/fort-lupton/soul-dog-rescue-co447/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Mixed Breed",
            "secondary": null,
            "mixed": false,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Large",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Prickle",
        "description": "Prickle is currently in foster but he will be available at our Fort Lupton Shelter on 11/7/20 at 10:00am. If...",
        "organization_animal_id": "A2020730",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604484817"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T10:02:20+0000",
        "published_at": "2020-11-02T10:02:20+0000",
        "distance": 22.4429,
        "contact": {
            "email": "adopt@souldog.org",
            "phone": "(303) 857-6789",
            "address": {
                "address1": null,
                "address2": null,
                "city": "Fort Lupton",
                "state": "CO",
                "postcode": "80621",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49670214"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co447"
            }
        }
    },
    {
        "id": 49670107,
        "organization_id": "CO516",
        "url": "https://www.petfinder.com/dog/lola-49670107/co/colorado-springs/el-paso-county-canine-rescue-co516/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": "Black Mouth Cur",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Small",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": null,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Lola",
        "description": "If you are interested in adopting, please visit our website and complete an adoption application at www.elpasocountycanine.org/",
        "organization_animal_id": "ps_892885-664929",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604485160&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604485160&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604485160&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604485160"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604485072"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-02T09:07:01+0000",
        "published_at": "2020-11-02T09:07:01+0000",
        "distance": 79.7192,
        "contact": {
            "email": "elpasocountycanine@gmail.com",
            "phone": null,
            "address": {
                "address1": null,
                "address2": null,
                "city": "Colorado Springs",
                "state": "CO",
                "postcode": "80920",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49670107"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co516"
            }
        }
    },
    {
        "id": 49694729,
        "organization_id": "CO132",
        "url": "https://www.petfinder.com/dog/deja-49694729/co/evergreen/evergreen-animal-protective-league-eapl-co132/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Labrador Retriever",
            "secondary": "Hound",
            "mixed": true,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Baby",
        "gender": "Female",
        "size": "Large",
        "coat": null,
        "attributes": {
            "spayed_neutered": true,
            "house_trained": true,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": true,
            "dogs": true,
            "cats": null
        },
        "tags": [],
        "name": "Deja",
        "description": "Meet Deja, she is about 6mo old. She has a lot of energy. I think Deja will do well with...",
        "organization_animal_id": "16142244-20-0793",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/3/?bust=1604516405&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/3/?bust=1604516405&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/3/?bust=1604516405&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/3/?bust=1604516405"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/2/?bust=1604516411&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/2/?bust=1604516411&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/2/?bust=1604516411&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/2/?bust=1604516411"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49694729/1/?bust=1604516403"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-11-04T18:49:58+0000",
        "published_at": "2020-11-04T18:49:58+0000",
        "distance": 29.2586,
        "contact": {
            "email": "eaplevergreen@eapl.com",
            "phone": "(303) 674-6442",
            "address": {
                "address1": "P. O. Box 2517",
                "address2": null,
                "city": "Evergreen",
                "state": "CO",
                "postcode": "80437",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/49694729"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/co132"
            }
        }
    }
]
// if puppy is clicked display puppy info
// create new state to control conditional render
// or do an onclick event that displays a modal

const PuppyList = (props) => {
//   const [clicked, setClicked] = useState(false);
//   const [selectedPup, setSelectedPup] = useState([]);

  return (
      <div>
      {
        PuppyData.map((puppy) => (
            <Puppy 
                key={uuid()}
                puppy_img={puppy.photos[0] !== undefined ? puppy.photos[0].full : 'https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif'}
                puppy_name={puppy.name}
                puppy_location={puppy.contact.address.city}
                puppy_breeds={puppy.breeds.secondary ? puppy.breeds.primary + ' & ' + puppy.breeds.secondary : puppy.breeds.primary}
                puppy_gender={puppy.gender}
                puppy_size={puppy.size}
                puppy_url={puppy.url}
                puppy_child={puppy.environment.children}
                puppy_dogs={puppy.environment.dogs}
                puppy_cats={puppy.environment.cats}
                puppy_coat={puppy.coat}
                puppy_info={puppy.description}
                puppy_fixed={puppy.attributes.spayed_neutered}
                puppy_trained={puppy.attributes.house_trained}
                puppy_shots={puppy.attributes.shots_current}
            />
        )
      )}
    </div>
  );
};

export default PuppyList;
