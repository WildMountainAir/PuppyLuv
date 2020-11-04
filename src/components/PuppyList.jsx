/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import Puppy from './Puppy';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Slider from "react-slick";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const PuppyData = [
  // {
  //   id: 1,
  //   name: "Karen",
  //   gender: "Female",
  //   size: "Small",
  //   primary_breed: "Chihuahua",
  //   secondary_breed: "Corgi",
  //   spayed_neutered: true,
  //   house_trained: true,
  //   special_needs: false,
  //   shots_current: true,
  //   children: false,
  //   dogs: true,
  //   cats: true,
  //   photo_medium0: "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif",
  //   photo_full0: "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif",
  //   organization_city: "Fort Collins"
  // },
// {
//   "id": 49676117,
//   "organization_id": "CO316",
//   "url": "https://www.petfinder.com/dog/chunk-49676117/co/denver/dumb-friends-league-co316/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
//   "type": "Dog",
//   "species": "Dog",
//   "breeds": {
//       "primary": "Labrador Retriever",
//       "secondary": "Mixed Breed",
//       "mixed": true,
//       "unknown": false
//   },
//   "colors": {
//       "primary": null,
//       "secondary": null,
//       "tertiary": null
//   },
//   "age": "Baby",
//   "gender": "Male",
//   "size": "Small",
//   "coat": null,
//   "attributes": {
//       "spayed_neutered": true,
//       "house_trained": false,
//       "declawed": null,
//       "special_needs": false,
//       "shots_current": false
//   },
//   "environment": {
//       "children": null,
//       "dogs": null,
//       "cats": null
//   },
//   "tags": [],
//   "name": "Chunk",
//   "description": null,
//   "organization_animal_id": "A0835380",
//   "photos": [
//       {
//           "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49676117/1/?bust=1604355146&width=100",
//           "medium": "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif",
//           "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49676117/1/?bust=1604355146&width=600",
//           "full": "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif"
//       }
//   ],
//   "primary_photo_cropped": {
//       "small": "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif",
//       "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49676117/1/?bust=1604355146&width=450",
//       "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49676117/1/?bust=1604355146&width=600",
//       "full": "https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif"
//   },
//   "videos": [],
//   "status": "adoptable",
//   "status_changed_at": "2020-11-02T22:02:10+0000",
//   "published_at": "2020-11-02T22:02:10+0000",
//   "distance": 31.279,
//   "contact": {
//       "email": "customercare@ddfl.org",
//       "phone": "303-751-5772  ",
//       "address": {
//           "address1": "2080 S. Quebec St.",
//           "address2": null,
//           "city": "Denver",
//           "state": "CO",
//           "postcode": "80231",
//           "country": "US"
//       }
//   },
//   "_links": {
//       "self": {
//           "href": "/v2/animals/49676117"
//       },
//       "type": {
//           "href": "/v2/types/dog"
//       },
//       "organization": {
//           "href": "/v2/organizations/co316"
//       }
//   }
// },
{
  "id": 49675806,
  "organization_id": "CO498",
  "url": "https://www.petfinder.com/dog/dakota-49675806/co/denver/red-fern-animal-rescue-co498/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Border Collie",
      "secondary": "Australian Cattle Dog / Blue Heeler",
      "mixed": true,
      "unknown": false
  },
  "colors": {
      "primary": "Black",
      "secondary": "White / Cream",
      "tertiary": null
  },
  "age": "Baby",
  "gender": "Male",
  "size": "Medium",
  "coat": "Short",
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
  "tags": [
      "Loving",
      "Sweet",
      "Playful"
  ],
  "name": "Dakota",
  "description": "Meet Dakota! This sweet guy is ready to find his new home! \n\nThis sweet guy is arriving this SATURDAY, November...",
  "organization_animal_id": null,
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/1/?bust=1604352751&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/1/?bust=1604352751&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/1/?bust=1604352751&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/1/?bust=1604352751"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49675806/2/?bust=1604352829"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T21:33:57+0000",
  "published_at": "2020-11-02T21:33:57+0000",
  "distance": 26.9257,
  "contact": {
      "email": "redfernanimalrescue@gmail.com",
      "phone": "(720) 470-3079",
      "address": {
          "address1": null,
          "address2": null,
          "city": "Denver",
          "state": "CO",
          "postcode": "80220",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49675806"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co498"
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
    "id": 49674465,
    "organization_id": "CO437",
    "url": "https://www.petfinder.com/dog/billie-49674465/co/lafayette/rez-dawg-rescue-co437/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
    "type": "Dog",
    "species": "Dog",
    "breeds": {
        "primary": "Australian Cattle Dog / Blue Heeler",
        "secondary": "Mixed Breed",
        "mixed": true,
        "unknown": false
    },
    "colors": {
        "primary": "White / Cream",
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
        "cats": null
    },
    "tags": [],
    "name": "Billie",
    "description": "Cold weather wont get you down with Billie around to warm your lap and your heart. This sweet puppy loves...",
    "organization_animal_id": "ps_867187-119",
    "photos": [
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605"
        },
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/4/?bust=1604346536&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/4/?bust=1604346536&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/4/?bust=1604346536&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/4/?bust=1604346536"
        },
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/3/?bust=1604346538&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/3/?bust=1604346538&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/3/?bust=1604346538&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/3/?bust=1604346538"
        },
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/2/?bust=1604346542&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/2/?bust=1604346542&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/2/?bust=1604346542&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/2/?bust=1604346542"
        },
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/5/?bust=1604346543&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/5/?bust=1604346543&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/5/?bust=1604346543&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/5/?bust=1604346543"
        },
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/6/?bust=1604346597&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/6/?bust=1604346597&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/6/?bust=1604346597&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/6/?bust=1604346597"
        }
    ],
    "primary_photo_cropped": {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605&width=300",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605&width=450",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49674465/1/?bust=1604346605"
    },
    "videos": [],
    "status": "adoptable",
    "status_changed_at": "2020-11-02T19:38:51+0000",
    "published_at": "2020-11-02T19:38:51+0000",
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
            "href": "/v2/animals/49674465"
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
    "id": 49673910,
    "organization_id": "CO498",
    "url": "https://www.petfinder.com/dog/willow-49673910/co/denver/red-fern-animal-rescue-co498/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
    "type": "Dog",
    "species": "Dog",
    "breeds": {
        "primary": "Shepherd",
        "secondary": null,
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
    "coat": "Medium",
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
    "tags": [
        "Sweet",
        "Playful",
        "Fun loving"
    ],
    "name": "Willow",
    "description": "Willow is a sweet pup who is looking for her new best friend! \n\nThis adorable pup is arriving this SATURDAY,...",
    "organization_animal_id": null,
    "photos": [
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455"
        },
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/1/?bust=1604343450&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/1/?bust=1604343450&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/1/?bust=1604343450&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/1/?bust=1604343450"
        }
    ],
    "primary_photo_cropped": {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455&width=300",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455&width=450",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49673910/2/?bust=1604343455"
    },
    "videos": [],
    "status": "adoptable",
    "status_changed_at": "2020-11-02T18:59:18+0000",
    "published_at": "2020-11-02T18:59:18+0000",
    "distance": 26.9257,
    "contact": {
        "email": "redfernanimalrescue@gmail.com",
        "phone": "(720) 470-3079",
        "address": {
            "address1": null,
            "address2": null,
            "city": "Denver",
            "state": "CO",
            "postcode": "80220",
            "country": "US"
        }
    },
    "_links": {
        "self": {
            "href": "/v2/animals/49673910"
        },
        "type": {
            "href": "/v2/types/dog"
        },
        "organization": {
            "href": "/v2/organizations/co498"
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
    "id": 49671588,
    "organization_id": "CO329",
    "url": "https://www.petfinder.com/dog/shawnee-49671588/co/broomfield/mile-high-labrador-retriever-mission-co329/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
        "secondary": "White / Cream",
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
    "name": "Shawnee",
    "description": "Please go to our website at www.milehighlabmission.com to find out more  about this pet and to submit an adoption application....",
    "organization_animal_id": "12912",
    "photos": [
        {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/?bust=1604331675&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/?bust=1604331675&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/?bust=1604331675&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/?bust=1604331675"
        }
    ],
    "primary_photo_cropped": {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/crop/?bust=1604331675&width=300",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/crop/?bust=1604331675&width=450",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/crop/?bust=1604331675&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49671588/1/crop/?bust=1604331675"
    },
    "videos": [],
    "status": "adoptable",
    "status_changed_at": "2020-11-02T15:41:23+0000",
    "published_at": "2020-11-02T15:41:23+0000",
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
            "href": "/v2/animals/49671588"
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
    "id": 49670767,
    "organization_id": "CO437",
    "url": "https://www.petfinder.com/dog/maple-syrup-49670767/co/lafayette/rez-dawg-rescue-co437/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
    "type": "Dog",
    "species": "Dog",
    "breeds": {
        "primary": "Australian Cattle Dog / Blue Heeler",
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
    "name": "Maple Syrup",
    "description": "My siblings and I came up from New Mexico. We are around 10 weeks old. We are current on our...",
    "organization_animal_id": "ps_865293-119",
    "photos": [],
    "primary_photo_cropped": null,
    "videos": [],
    "status": "adoptable",
    "status_changed_at": "2020-11-02T14:35:34+0000",
    "published_at": "2020-11-02T14:35:34+0000",
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
            "href": "/v2/animals/49670767"
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
  "id": 49670458,
  "organization_id": "CO405",
  "url": "https://www.petfinder.com/dog/blazer-49670458/co/westminster/evergreen-animal-protective-league-eapl-westiminster-location-co405/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Jack Russell Terrier",
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
  "size": "Small",
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
  "name": "Blazer",
  "description": "Meet Blazer, he is a\nneutered JRT mix (and can we just point out how double-flippin&amp;#39; cute he is!) Who...",
  "organization_animal_id": "16208526-20-0866",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/3/?bust=1604321130&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/3/?bust=1604321130&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/3/?bust=1604321130&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/3/?bust=1604321130"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/2/?bust=1604321194&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/2/?bust=1604321194&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/2/?bust=1604321194&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/2/?bust=1604321194"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670458/1/?bust=1604321129"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T12:35:15+0000",
  "published_at": "2020-11-02T12:35:15+0000",
  "distance": 13.3618,
  "contact": {
      "email": "eaplevergreen@eapl.com",
      "phone": "(303) 674-6442",
      "address": {
          "address1": "PO Box 2517",
          "address2": null,
          "city": "Westminster",
          "state": "CO",
          "postcode": "80021",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49670458"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co405"
      }
  }
},
{
  "id": 49670379,
  "organization_id": "CO405",
  "url": "https://www.petfinder.com/dog/prancer-49670379/co/westminster/evergreen-animal-protective-league-eapl-westiminster-location-co405/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
  "photos": [],
  "primary_photo_cropped": null,
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T10:49:23+0000",
  "published_at": "2020-11-02T10:49:23+0000",
  "distance": 13.3618,
  "contact": {
      "email": "eaplevergreen@eapl.com",
      "phone": "(303) 674-6442",
      "address": {
          "address1": "PO Box 2517",
          "address2": null,
          "city": "Westminster",
          "state": "CO",
          "postcode": "80021",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49670379"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co405"
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
  "name": "Lacie",
  "description": "Meet Lacie, she is the last little girl in the litter! She had been placed but her family had an...",
  "organization_animal_id": "16159044-20-0804",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604314765&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604314765&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604314765&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/3/?bust=1604314765"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604314765&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604314765&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604314765&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/2/?bust=1604314765"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670378/1/?bust=1604314826"
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
  "description": null,
  "organization_animal_id": "A2020730",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670214/1/?bust=1604311982"
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
  "description": null,
  "organization_animal_id": "A2020731",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670213/1/?bust=1604311963"
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
  "id": 49670106,
  "organization_id": "CO516",
  "url": "https://www.petfinder.com/dog/brownie-49670106/co/colorado-springs/el-paso-county-canine-rescue-co516/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
  "name": "Brownie",
  "description": "If you are interested in adopting, please visit our website and complete an adoption application at www.elpasocountycanine.org/available-dogs",
  "organization_animal_id": "ps_21410954",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/2/?bust=1604308631&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/2/?bust=1604308631&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/2/?bust=1604308631&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/2/?bust=1604308631"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670106/1/?bust=1604308693"
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
          "href": "/v2/animals/49670106"
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
  "id": 49670105,
  "organization_id": "CO516",
  "url": "https://www.petfinder.com/dog/beauty-49670105/co/colorado-springs/el-paso-county-canine-rescue-co516/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Labrador Retriever",
      "secondary": "Black Mouth Cur",
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
  "name": "Beauty",
  "description": "If you are interested in adopting, please visit our website and complete an adoption application at www.elpasocountycanine.org/available-dogs",
  "organization_animal_id": "ps_892897-664929",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670105/1/?bust=1604308631"
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
          "href": "/v2/animals/49670105"
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
  "description": "If you are interested in adopting, please visit our website and complete an adoption application at www.elpasocountycanine.org/available-dogs",
  "organization_animal_id": "ps_892885-664929",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604308630&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604308630&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604308630&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/2/?bust=1604308630"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670107/1/?bust=1604308632"
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
  "id": 49670104,
  "organization_id": "CO516",
  "url": "https://www.petfinder.com/dog/beast-49670104/co/colorado-springs/el-paso-county-canine-rescue-co516/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Labrador Retriever",
      "secondary": "Black Mouth Cur",
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
  "name": "Beast",
  "description": "If you are interested in adopting, please visit our website and complete an adoption application at www.elpasocountycanine.org/available-dogs",
  "organization_animal_id": "ps_85787961",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670104/1/?bust=1604308632"
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
          "href": "/v2/animals/49670104"
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
  "id": 49670053,
  "organization_id": "CO489",
  "url": "https://www.petfinder.com/dog/navi-49670053/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Rottweiler",
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
  "name": "Navi",
  "description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
  "organization_animal_id": "ps_25705977",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/2/?bust=1604308329&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/2/?bust=1604308329&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/2/?bust=1604308329&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/2/?bust=1604308329"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670053/1/?bust=1604308328"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T09:02:04+0000",
  "published_at": "2020-11-02T09:02:04+0000",
  "distance": 27.2915,
  "contact": {
      "email": "Info@mamcorescue.org",
      "phone": "(720) 532-1668",
      "address": {
          "address1": null,
          "address2": null,
          "city": "Lakewood",
          "state": "CO",
          "postcode": "80227",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49670053"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co489"
      }
  }
},
{
  "id": 49670037,
  "organization_id": "CO451",
  "url": "https://www.petfinder.com/dog/earthquake-49670037/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Mixed Breed",
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
      "cats": null
  },
  "tags": [],
  "name": "Earthquake",
  "description": "*Homeownership Required!\n\nAdoption fee includes the following:\n\n\n\tSpay/Neuter\n\tRabies Vaccination\n\tDistemper / Parvo Vaccines (includes series of 3 for puppies)...",
  "organization_animal_id": "ps_889524-80925",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670037/1/?bust=1604308093"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T08:58:02+0000",
  "published_at": "2020-11-02T08:58:02+0000",
  "distance": 36.6173,
  "contact": {
      "email": "info@2babrescue.org",
      "phone": null,
      "address": {
          "address1": null,
          "address2": null,
          "city": "Littleton",
          "state": "CO",
          "postcode": "80126",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49670037"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co451"
      }
  }
},
{
  "id": 49670036,
  "organization_id": "CO451",
  "url": "https://www.petfinder.com/dog/sidney-49670036/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Labrador Retriever",
      "secondary": null,
      "mixed": true,
      "unknown": false
  },
  "colors": {
      "primary": "Brindle",
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
      "cats": null
  },
  "tags": [],
  "name": "Sidney",
  "description": "*Homeownership Required!\n\nAdoption fee includes the following:\n\n\n\tSpay/Neuter\n\tRabies Vaccination\n\tDistemper / Parvo Vaccines (includes series of 3 for puppies)...",
  "organization_animal_id": "ps_839724-80925",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670036/1/?bust=1604308154"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T08:58:01+0000",
  "published_at": "2020-11-02T08:58:01+0000",
  "distance": 36.6173,
  "contact": {
      "email": "info@2babrescue.org",
      "phone": null,
      "address": {
          "address1": null,
          "address2": null,
          "city": "Littleton",
          "state": "CO",
          "postcode": "80126",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49670036"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co451"
      }
  }
},
{
  "id": 49670034,
  "organization_id": "CO451",
  "url": "https://www.petfinder.com/dog/sonia-49670034/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
  "name": "Sonia",
  "description": "*Homeownership Required!\n\nAdoption fee includes the following:\n\n\n\tSpay/Neuter\n\tRabies Vaccination\n\tDistemper / Parvo Vaccines (includes series of 3 for puppies)...",
  "organization_animal_id": "ps_839722-80925",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49670034/1/?bust=1604308095"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T08:58:01+0000",
  "published_at": "2020-11-02T08:58:01+0000",
  "distance": 36.6173,
  "contact": {
      "email": "info@2babrescue.org",
      "phone": null,
      "address": {
          "address1": null,
          "address2": null,
          "city": "Littleton",
          "state": "CO",
          "postcode": "80126",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49670034"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co451"
      }
  }
},
{
  "id": 49669421,
  "organization_id": "CO342",
  "url": "https://www.petfinder.com/dog/june-49669421/co/broomfield/rocky-mountain-puppy-rescue-co342/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
      "shots_current": false
  },
  "environment": {
      "children": null,
      "dogs": true,
      "cats": null
  },
  "tags": [],
  "name": "JUNE",
  "description": "June has such beautiful dark coloring that helps her to be differentiated from her sisters. June was the first puppy...",
  "organization_animal_id": null,
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669421/1/?bust=1604292693"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T04:51:56+0000",
  "published_at": "2020-11-02T04:51:56+0000",
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
          "href": "/v2/animals/49669421"
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
  "id": 49669420,
  "organization_id": "CO342",
  "url": "https://www.petfinder.com/dog/jinny-49669420/co/broomfield/rocky-mountain-puppy-rescue-co342/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
      "shots_current": false
  },
  "environment": {
      "children": null,
      "dogs": true,
      "cats": null
  },
  "tags": [],
  "name": "JINNY",
  "description": "Jinny has the most beautiful blue eyes and a sweet little wrinkled face. She is very adventurous and enjoys exploring...",
  "organization_animal_id": null,
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49669420/1/?bust=1604292550"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T04:49:42+0000",
  "published_at": "2020-11-02T04:49:42+0000",
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
          "href": "/v2/animals/49669420"
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
  "id": 49667790,
  "organization_id": "CO489",
  "url": "https://www.petfinder.com/dog/moana-litter-sina-49667790/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Anatolian Shepherd",
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
  "name": "Moana Litter - Sina",
  "description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
  "organization_animal_id": "ps_891765-192495",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/2/?bust=1604276424&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/2/?bust=1604276424&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/2/?bust=1604276424&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/2/?bust=1604276424"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667790/1/?bust=1604276424"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T00:10:11+0000",
  "published_at": "2020-11-02T00:10:11+0000",
  "distance": 27.2915,
  "contact": {
      "email": "Info@mamcorescue.org",
      "phone": "(720) 532-1668",
      "address": {
          "address1": null,
          "address2": null,
          "city": "Lakewood",
          "state": "CO",
          "postcode": "80227",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49667790"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co489"
      }
  }
},
{
  "id": 49667792,
  "organization_id": "CO489",
  "url": "https://www.petfinder.com/dog/ice-age-litter-steffie-49667792/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
  "type": "Dog",
  "species": "Dog",
  "breeds": {
      "primary": "Labrador Retriever",
      "secondary": "Boxer",
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
  "name": "Ice Age Litter - Steffie",
  "description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
  "organization_animal_id": "ps_89547514",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/2/?bust=1604276424&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/2/?bust=1604276424&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/2/?bust=1604276424&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/2/?bust=1604276424"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667792/1/?bust=1604276424"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T00:10:11+0000",
  "published_at": "2020-11-02T00:10:11+0000",
  "distance": 27.2915,
  "contact": {
      "email": "Info@mamcorescue.org",
      "phone": "(720) 532-1668",
      "address": {
          "address1": null,
          "address2": null,
          "city": "Lakewood",
          "state": "CO",
          "postcode": "80227",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49667792"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co489"
      }
  }
},
{
  "id": 49667791,
  "organization_id": "CO489",
  "url": "https://www.petfinder.com/dog/rosie-49667791/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
      "shots_current": true
  },
  "environment": {
      "children": true,
      "dogs": true,
      "cats": null
  },
  "tags": [],
  "name": "Rosie",
  "description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
  "organization_animal_id": "ps_67040726",
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/3/?bust=1604276424&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/3/?bust=1604276424&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/3/?bust=1604276424&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/3/?bust=1604276424"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/2/?bust=1604276424&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/2/?bust=1604276424&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/2/?bust=1604276424&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/2/?bust=1604276424"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667791/1/?bust=1604276424"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2020-11-02T00:10:11+0000",
  "published_at": "2020-11-02T00:10:11+0000",
  "distance": 27.2915,
  "contact": {
      "email": "Info@mamcorescue.org",
      "phone": "(720) 532-1668",
      "address": {
          "address1": null,
          "address2": null,
          "city": "Lakewood",
          "state": "CO",
          "postcode": "80227",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/49667791"
      },
      "type": {
          "href": "/v2/types/dog"
      },
      "organization": {
          "href": "/v2/organizations/co489"
      }
  }
},
{
"id": 49667785,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/ice-age-litter-elle-49667785/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Labrador Retriever",
    "secondary": "Boxer",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "White / Cream",
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
    "cats": null
},
"tags": [],
"name": "Ice Age Litter - Elle",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_891757-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/2/?bust=1604276421&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/2/?bust=1604276421&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/2/?bust=1604276421&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/2/?bust=1604276421"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667785/1/?bust=1604276422"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667785"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667784,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/eeyore-49667784/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Portuguese Podengo",
    "secondary": "Chihuahua",
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
"name": "Eeyore",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_54069412",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/2/?bust=1604276423&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/2/?bust=1604276423&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/2/?bust=1604276423&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/2/?bust=1604276423"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667784/1/?bust=1604276422"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667784"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667773,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/darcie-49667773/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "American Bulldog",
    "secondary": "Greyhound",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "Gray / Blue / Silver",
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
    "cats": null
},
"tags": [],
"name": "Darcie",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_54647972",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/3/?bust=1604276434&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/3/?bust=1604276434&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/3/?bust=1604276434&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/3/?bust=1604276434"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/4/?bust=1604276435&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/4/?bust=1604276435&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/4/?bust=1604276435&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/4/?bust=1604276435"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/2/?bust=1604276435&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/2/?bust=1604276435&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/2/?bust=1604276435&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/2/?bust=1604276435"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667773/1/?bust=1604276496"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667773"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667774,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/the-shrek-litter-donkey-49667774/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Greater Swiss Mountain Dog",
    "secondary": "Plott Hound",
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
    "cats": null
},
"tags": [],
"name": "The Shrek Litter - Donkey",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_87145881",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/2/?bust=1604276434&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/2/?bust=1604276434&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/2/?bust=1604276434&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/2/?bust=1604276434"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/3/?bust=1604276435&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/3/?bust=1604276435&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/3/?bust=1604276435&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/3/?bust=1604276435"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667774/1/?bust=1604276434"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667774"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667772,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-cali-puppy-dolly-49667772/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Australian Cattle Dog / Blue Heeler",
    "secondary": "Golden Retriever",
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
"name": "Mama Cali Puppy - Dolly",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_887394-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/3/?bust=1604276433&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/3/?bust=1604276433&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/3/?bust=1604276433&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/3/?bust=1604276433"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/2/?bust=1604276433&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/2/?bust=1604276433&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/2/?bust=1604276433&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/2/?bust=1604276433"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667772/1/?bust=1604276434"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667772"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667769,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/moana-litter-chief-tui-49667769/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Anatolian Shepherd",
    "secondary": "Black Mouth Cur",
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
"name": "Moana Litter - Chief Tui",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_891767-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/2/?bust=1604276430&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/2/?bust=1604276430&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/2/?bust=1604276430&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/2/?bust=1604276430"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667769/1/?bust=1604276430"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667769"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667770,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/moana-litter-moana-49667770/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Anatolian Shepherd",
    "secondary": "Black Mouth Cur",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "White / Cream",
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
    "cats": null
},
"tags": [],
"name": "Moana Litter - Moana",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_891766-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/2/?bust=1604276430&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/2/?bust=1604276430&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/2/?bust=1604276430&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/2/?bust=1604276430"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667770/1/?bust=1604276430"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667770"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667761,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/big-hero-litter-baymax-49667761/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Dutch Shepherd",
    "secondary": "German Shepherd Dog",
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
    "cats": null
},
"tags": [],
"name": "Big Hero Litter - Baymax",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_56286898",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/3/?bust=1604276427&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/3/?bust=1604276427&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/3/?bust=1604276427&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/3/?bust=1604276427"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/2/?bust=1604276487&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/2/?bust=1604276487&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/2/?bust=1604276487&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/2/?bust=1604276487"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667761/1/?bust=1604276428"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667761"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667766,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/wonderful-wrinkles-winston-49667766/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "American Bulldog",
    "secondary": "Australian Cattle Dog / Blue Heeler",
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
    "cats": null
},
"tags": [],
"name": "Wonderful Wrinkles - Winston",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_891761-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/2/?bust=1604276429&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/2/?bust=1604276429&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/2/?bust=1604276429&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/2/?bust=1604276429"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667766/1/?bust=1604276490"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667766"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667768,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/big-hero-litter-gogo-49667768/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Dutch Shepherd",
    "secondary": "German Shepherd Dog",
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
    "cats": null
},
"tags": [],
"name": "Big Hero Litter - Gogo",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_891736-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/3/?bust=1604276429&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/3/?bust=1604276429&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/3/?bust=1604276429&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/3/?bust=1604276429"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/2/?bust=1604276429&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/2/?bust=1604276429&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/2/?bust=1604276429&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/2/?bust=1604276429"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667768/1/?bust=1604276491"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-02T00:10:10+0000",
"published_at": "2020-11-02T00:10:10+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49667768"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49667042,
"organization_id": "CO408",
"url": "https://www.petfinder.com/dog/joey-49667042/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Border Collie",
    "secondary": "Labrador Retriever",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "Apricot / Beige",
    "secondary": "Brown / Chocolate",
    "tertiary": "White / Cream"
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
"name": "Joey",
"description": "There&#039;s nothing quite like puppy energy and silliness...and then they lie quietly on your shoulder breathing their warm baby breath....",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/1/?bust=1604269660&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/1/?bust=1604269660&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/1/?bust=1604269660&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/1/?bust=1604269660"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49667042/2/?bust=1604269784"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T22:29:48+0000",
"published_at": "2020-11-01T22:29:48+0000",
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
        "href": "/v2/animals/49667042"
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
"id": 49665815,
"organization_id": "CO214",
"url": "https://www.petfinder.com/dog/junie-49665815/co/fort-collins/animal-friends-alliance-co214/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Pointer",
    "secondary": "American Bulldog",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "White / Cream",
    "secondary": "Yellow / Tan / Blond / Fawn",
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
    "shots_current": true
},
"environment": {
    "children": null,
    "dogs": null,
    "cats": null
},
"tags": [],
"name": "Junie",
"description": "Junie is a friendly, active puppy who gets along with everyone he meets! He is making great progress on housetraining...",
"organization_animal_id": "CAFA-A-37777",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/3/?bust=1604269287&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/3/?bust=1604269287&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/3/?bust=1604269287&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/3/?bust=1604269287"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/4/?bust=1604269408&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/4/?bust=1604269408&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/4/?bust=1604269408&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/4/?bust=1604269408"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/2/?bust=1604269290&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/2/?bust=1604269290&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/2/?bust=1604269290&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/2/?bust=1604269290"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49665815/1/?bust=1604262178"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T20:10:21+0000",
"published_at": "2020-11-01T20:10:21+0000",
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
        "href": "/v2/animals/49665815"
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
"id": 49663635,
"organization_id": "CO408",
"url": "https://www.petfinder.com/dog/frisbee-49663635/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Border Collie",
    "secondary": "Shetland Sheepdog / Sheltie",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "Black",
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
"name": "Frisbee",
"description": "We all know how we get that awww feeling when we see a cute as can be young puppy. They&#039;re...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/2/?bust=1604245992&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/2/?bust=1604245992&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/2/?bust=1604245992&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/2/?bust=1604245992"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663635/1/?bust=1604245973"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T15:53:36+0000",
"published_at": "2020-11-01T15:53:36+0000",
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
        "href": "/v2/animals/49663635"
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
"id": 49663348,
"organization_id": "CO408",
"url": "https://www.petfinder.com/dog/kiska-49663348/co/boulder/farfels-farm-and-rescue-co408/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Great Pyrenees",
    "secondary": "Labrador Retriever",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "Black",
    "secondary": "White / Cream",
    "tertiary": null
},
"age": "Baby",
"gender": "Female",
"size": "Large",
"coat": "Medium",
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
"name": "Kiska",
"description": "There&#039;s nothing quite like puppy energy and silliness...and then they lie quietly on your shoulder breathing their warm baby breath....",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49663348/1/?bust=1604242928"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T15:03:31+0000",
"published_at": "2020-11-01T15:03:31+0000",
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
        "href": "/v2/animals/49663348"
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
"id": 49662826,
"organization_id": "CO132",
"url": "https://www.petfinder.com/dog/trigger-49662826/co/evergreen/evergreen-animal-protective-league-eapl-co132/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Labrador Retriever",
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
"gender": "Male",
"size": "Medium",
"coat": null,
"attributes": {
    "spayed_neutered": false,
    "house_trained": true,
    "declawed": null,
    "special_needs": false,
    "shots_current": true
},
"environment": {
    "children": true,
    "dogs": null,
    "cats": null
},
"tags": [],
"name": "Trigger",
"description": "Meet Trigger, he is just about 12 weeks old now and ready to find his forever home! This just in...",
"organization_animal_id": "16142068-20-0792",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/3/?bust=1604356733&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/3/?bust=1604356733&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/3/?bust=1604356733&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/3/?bust=1604356733"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/2/?bust=1604356733&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/2/?bust=1604356733&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/2/?bust=1604356733&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/2/?bust=1604356733"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662826/1/?bust=1604356733"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T12:30:12+0000",
"published_at": "2020-11-01T12:30:12+0000",
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
        "href": "/v2/animals/49662826"
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
"id": 49662806,
"organization_id": "CO132",
"url": "https://www.petfinder.com/dog/rosebud-49662806/co/evergreen/evergreen-animal-protective-league-eapl-co132/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Shepherd",
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
"size": "Large",
"coat": null,
"attributes": {
    "spayed_neutered": false,
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
"name": "Rosebud",
"description": "Rosebud born in CO when her mom surprised us all by smuggling in 5 puppies. Rosebud is the last one...",
"organization_animal_id": "16095770-20-0772",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662806/1/?bust=1604233561"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T12:15:51+0000",
"published_at": "2020-11-01T12:15:51+0000",
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
        "href": "/v2/animals/49662806"
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
"id": 49662789,
"organization_id": "CO405",
"url": "https://www.petfinder.com/dog/spirit-49662789/co/westminster/evergreen-animal-protective-league-eapl-westiminster-location-co405/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Labrador Retriever",
    "secondary": "Pit Bull Terrier",
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
    "cats": null
},
"tags": [],
"name": "Spirit",
"description": "Meet Spirit, she is just about 12 weeks old now and ready to find her forever home! This just in...",
"organization_animal_id": "16142056-20-0791",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662789/1/?bust=1604234419"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T12:00:13+0000",
"published_at": "2020-11-01T12:00:13+0000",
"distance": 13.3618,
"contact": {
    "email": "eaplevergreen@eapl.com",
    "phone": "(303) 674-6442",
    "address": {
        "address1": "PO Box 2517",
        "address2": null,
        "city": "Westminster",
        "state": "CO",
        "postcode": "80021",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49662789"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co405"
    }
}
},
{
"id": 49662573,
"organization_id": "CO447",
"url": "https://www.petfinder.com/dog/treazure-49662573/co/fort-lupton/soul-dog-rescue-co447/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
"name": "Treazure",
"description": null,
"organization_animal_id": "A2020874",
"photos": [],
"primary_photo_cropped": null,
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T10:02:23+0000",
"published_at": "2020-11-01T10:02:23+0000",
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
        "href": "/v2/animals/49662573"
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
"id": 49662576,
"organization_id": "CO447",
"url": "https://www.petfinder.com/dog/mullett-49662576/co/fort-lupton/soul-dog-rescue-co447/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Chihuahua",
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
"name": "Mullett",
"description": null,
"organization_animal_id": "A2020793",
"photos": [],
"primary_photo_cropped": null,
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T10:02:23+0000",
"published_at": "2020-11-01T10:02:23+0000",
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
        "href": "/v2/animals/49662576"
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
"id": 49662571,
"organization_id": "CO447",
"url": "https://www.petfinder.com/dog/nugget-49662571/co/fort-lupton/soul-dog-rescue-co447/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Cattle Dog",
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
"name": "Nugget",
"description": null,
"organization_animal_id": "D2020652",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662571/1/?bust=1604225588"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T10:02:23+0000",
"published_at": "2020-11-01T10:02:23+0000",
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
        "href": "/v2/animals/49662571"
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
"id": 49662570,
"organization_id": "CO447",
"url": "https://www.petfinder.com/dog/pongo-49662570/co/fort-lupton/soul-dog-rescue-co447/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Cattle Dog",
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
"name": "Pongo",
"description": null,
"organization_animal_id": "A2020867",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662570/1/?bust=1604311968"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T10:02:23+0000",
"published_at": "2020-11-01T10:02:23+0000",
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
        "href": "/v2/animals/49662570"
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
"id": 49662372,
"organization_id": "CO437",
"url": "https://www.petfinder.com/dog/pumpkin-49662372/co/lafayette/rez-dawg-rescue-co437/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Shepherd",
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
"name": "Pumpkin",
"description": "Pumpkin is a lover!! She&amp;#39;s still a bit shy and timid and is getting used to being loved.. friendly with...",
"organization_animal_id": "ps_94445810",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/2/?bust=1604221677&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/2/?bust=1604221677&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/2/?bust=1604221677&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/2/?bust=1604221677"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/4/?bust=1604221678&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/4/?bust=1604221678&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/4/?bust=1604221678&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/4/?bust=1604221678"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/3/?bust=1604221680&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/3/?bust=1604221680&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/3/?bust=1604221680&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/3/?bust=1604221680"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662372/1/?bust=1604221679"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T08:57:49+0000",
"published_at": "2020-11-01T08:57:49+0000",
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
        "href": "/v2/animals/49662372"
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
"id": 49662078,
"organization_id": "CO397",
"url": "https://www.petfinder.com/dog/lila-49662078/co/carr/my-second-home-rescue-co397/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Dachshund",
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
    "children": true,
    "dogs": true,
    "cats": true
},
"tags": [],
"name": "Lila",
"description": "Lila and her five siblings arrived in rescue with their mom after being dumped at a high intake shelter in...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/2/?bust=1604208215&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/2/?bust=1604208215&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/2/?bust=1604208215&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/2/?bust=1604208215"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/3/?bust=1604208222&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/3/?bust=1604208222&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/3/?bust=1604208222&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/3/?bust=1604208222"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662078/1/?bust=1604208210"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T05:25:29+0000",
"published_at": "2020-11-01T05:25:29+0000",
"distance": 57.2812,
"contact": {
    "email": null,
    "phone": "(303) 775-2081",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Carr",
        "state": "CO",
        "postcode": "80612",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49662078"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co397"
    }
}
},
{
"id": 49662073,
"organization_id": "CO397",
"url": "https://www.petfinder.com/dog/link-49662073/co/carr/my-second-home-rescue-co397/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Dachshund",
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
"tags": [],
"name": "Link",
"description": "Link and his five siblings arrived in rescue with their mom after being dumped at a high intake shelter in...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/2/?bust=1604207955&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/2/?bust=1604207955&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/2/?bust=1604207955&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/2/?bust=1604207955"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/3/?bust=1604207961&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/3/?bust=1604207961&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/3/?bust=1604207961&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/3/?bust=1604207961"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662073/1/?bust=1604207952"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T05:21:27+0000",
"published_at": "2020-11-01T05:21:27+0000",
"distance": 57.2812,
"contact": {
    "email": null,
    "phone": "(303) 775-2081",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Carr",
        "state": "CO",
        "postcode": "80612",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49662073"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co397"
    }
}
},
{
"id": 49662049,
"organization_id": "CO397",
"url": "https://www.petfinder.com/dog/leif-49662049/co/carr/my-second-home-rescue-co397/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Dachshund",
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
"tags": [],
"name": "Leif",
"description": "Leif and his five siblings arrived in rescue with their mom after being dumped at a high intake shelter in...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/2/?bust=1604207792&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/2/?bust=1604207792&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/2/?bust=1604207792&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/2/?bust=1604207792"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/3/?bust=1604207798&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/3/?bust=1604207798&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/3/?bust=1604207798&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/3/?bust=1604207798"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662049/1/?bust=1604207788"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T05:18:02+0000",
"published_at": "2020-11-01T05:18:02+0000",
"distance": 57.2812,
"contact": {
    "email": null,
    "phone": "(303) 775-2081",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Carr",
        "state": "CO",
        "postcode": "80612",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49662049"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co397"
    }
}
},
{
"id": 49662046,
"organization_id": "CO397",
"url": "https://www.petfinder.com/dog/leon-49662046/co/carr/my-second-home-rescue-co397/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Dachshund",
    "secondary": null,
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "Gray / Blue / Silver",
    "secondary": "White / Cream",
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
"tags": [],
"name": "Leon",
"description": "Leon and his five siblings arrived in rescue with their mom after being dumped at a high intake shelter in...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/2/?bust=1604207484&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/2/?bust=1604207484&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/2/?bust=1604207484&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/2/?bust=1604207484"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/3/?bust=1604207491&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/3/?bust=1604207491&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/3/?bust=1604207491&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/3/?bust=1604207491"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49662046/1/?bust=1604207480"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T05:14:27+0000",
"published_at": "2020-11-01T05:14:27+0000",
"distance": 57.2812,
"contact": {
    "email": null,
    "phone": "(303) 775-2081",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Carr",
        "state": "CO",
        "postcode": "80612",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49662046"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co397"
    }
}
},
{
"id": 49661792,
"organization_id": "CO397",
"url": "https://www.petfinder.com/dog/levi-49661792/co/carr/my-second-home-rescue-co397/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Dachshund",
    "secondary": "Chiweenie",
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "Black",
    "secondary": "Yellow / Tan / Blond / Fawn",
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
"tags": [],
"name": "Levi",
"description": "Levi and his five siblings arrived in rescue with their mom after being dumped at a high intake shelter in...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/2/?bust=1604207153&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/2/?bust=1604207153&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/2/?bust=1604207153&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/2/?bust=1604207153"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/3/?bust=1604207201&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/3/?bust=1604207201&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/3/?bust=1604207201&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/3/?bust=1604207201"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/4/?bust=1604207209&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/4/?bust=1604207209&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/4/?bust=1604207209&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/4/?bust=1604207209"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661792/1/?bust=1604206436"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T05:07:25+0000",
"published_at": "2020-11-01T05:07:25+0000",
"distance": 57.2812,
"contact": {
    "email": null,
    "phone": "(303) 775-2081",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Carr",
        "state": "CO",
        "postcode": "80612",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49661792"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co397"
    }
}
},
{
"id": 49661777,
"organization_id": "CO397",
"url": "https://www.petfinder.com/dog/kintsy-49661777/co/carr/my-second-home-rescue-co397/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Boxer",
    "secondary": null,
    "mixed": true,
    "unknown": false
},
"colors": {
    "primary": "Black",
    "secondary": "Brindle",
    "tertiary": null
},
"age": "Baby",
"gender": "Female",
"size": "Medium",
"coat": "Short",
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
    "cats": true
},
"tags": [],
"name": "Kintsy",
"description": "Kintsy is a 9 month old 35 pound puppy (maybe boxer or mastiff or ...mix ) that LOVES life! She...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/2/?bust=1604205614&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/2/?bust=1604205614&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/2/?bust=1604205614&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/2/?bust=1604205614"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/3/?bust=1604205620&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/3/?bust=1604205620&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/3/?bust=1604205620&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/3/?bust=1604205620"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661777/1/?bust=1604205564"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T04:48:27+0000",
"published_at": "2020-11-01T04:48:27+0000",
"distance": 57.2812,
"contact": {
    "email": null,
    "phone": "(303) 775-2081",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Carr",
        "state": "CO",
        "postcode": "80612",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49661777"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co397"
    }
}
},
{
"id": 49661686,
"organization_id": "CO529",
"url": "https://www.petfinder.com/dog/amber-49661686/co/aurora/pawsitive-restorations-animal-rescue-co529/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Catahoula Leopard Dog",
    "secondary": null,
    "mixed": false,
    "unknown": false
},
"colors": {
    "primary": "Bicolor",
    "secondary": null,
    "tertiary": null
},
"age": "Baby",
"gender": "Female",
"size": "Medium",
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
"tags": [
    "shy",
    "smart",
    "loving",
    "energetic"
],
"name": "Amber",
"description": "AMBER – 4 Month old Female Catahoula mix – AVAILABLE NOW\nMinimum Requirements For Adoption: Fully fenced, secure yard\n\n#AdoptableAmber...",
"organization_animal_id": null,
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/2/?bust=1604201845&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/2/?bust=1604201845&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/2/?bust=1604201845&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/2/?bust=1604201845"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/3/?bust=1604201850&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/3/?bust=1604201850&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/3/?bust=1604201850&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/3/?bust=1604201850"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/4/?bust=1604201853&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/4/?bust=1604201853&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/4/?bust=1604201853&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/4/?bust=1604201853"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49661686/1/?bust=1604201840"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T03:38:45+0000",
"published_at": "2020-11-01T03:38:45+0000",
"distance": 39.7282,
"contact": {
    "email": "pawsitiverestorations@gmail.com",
    "phone": "(720) 207-4186",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Aurora",
        "state": "CO",
        "postcode": "80016",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49661686"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co529"
    }
}
},
{
"id": 49660896,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/halloweentown-litter-aggie-49660896/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
    "cats": null
},
"tags": [],
"name": "Halloweentown Litter - Aggie",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884666-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/2/?bust=1604189862&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/2/?bust=1604189862&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/2/?bust=1604189862&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/2/?bust=1604189862"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660896/1/?bust=1604189878"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49660896"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49660893,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-daisy-puppy-chocolate-milkshake-49660893/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "English Pointer",
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
"name": "Mama Daisy Puppy - Chocolate Milkshake",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_887461-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/2/?bust=1604189868&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/2/?bust=1604189868&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/2/?bust=1604189868&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/2/?bust=1604189868"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660893/1/?bust=1604189863"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49660893"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49660890,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/halloweentown-litter-kal-49660890/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
"name": "Halloweentown Litter - Kal",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884660-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/2/?bust=1604189843&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/2/?bust=1604189843&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/2/?bust=1604189843&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/2/?bust=1604189843"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660890/1/?bust=1604189865"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49660890"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49660903,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-daisy-puppy-trinity-49660903/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "English Pointer",
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
"name": "Mama Daisy Puppy - Trinity",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_887462-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/2/?bust=1604189871&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/2/?bust=1604189871&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/2/?bust=1604189871&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/2/?bust=1604189871"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660903/1/?bust=1604189865"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49660903"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49660899,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/halloweentown-litter-luke-49660899/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
    "shots_current": true
},
"environment": {
    "children": true,
    "dogs": true,
    "cats": null
},
"tags": [],
"name": "Halloweentown Litter - Luke",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884665-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/2/?bust=1604189872&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/2/?bust=1604189872&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/2/?bust=1604189872&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/2/?bust=1604189872"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660899/1/?bust=1604189853"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49660899"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49660900,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/halloweentown-litter-wolfie-49660900/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
"name": "Halloweentown Litter - Wolfie",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884661-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/2/?bust=1604189887&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/2/?bust=1604189887&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/2/?bust=1604189887&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/2/?bust=1604189887"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660900/1/?bust=1604189880"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49660900"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49660895,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-athena-and-number-39s-pup-zeus-49660895/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
    "primary": "Border Collie",
    "secondary": "Australian Cattle Dog / Blue Heeler",
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
    "cats": null
},
"tags": [],
"name": "Mama Athena&#39;s Pup - Zeus",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_885643-192495",
"photos": [
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883"
    },
    {
        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888&width=100",
        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888&width=300",
        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888&width=600",
        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888"
    }
],
"primary_photo_cropped": {
    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=300",
    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=450",
    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=600",
    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
    "email": "Info@mamcorescue.org",
    "phone": "(720) 532-1668",
    "address": {
        "address1": null,
        "address2": null,
        "city": "Lakewood",
        "state": "CO",
        "postcode": "80227",
        "country": "US"
    }
},
"_links": {
    "self": {
        "href": "/v2/animals/49660895"
    },
    "type": {
        "href": "/v2/types/dog"
    },
    "organization": {
        "href": "/v2/organizations/co489"
    }
}
},
{
"id": 49660895,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-athena-and-number-39s-pup-zeus-49660895/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Border Collie",
  "secondary": "Australian Cattle Dog / Blue Heeler",
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
  "cats": null
},
"tags": [],
"name": "Mama Athena&#39;s Pup - Zeus",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_885643-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/2/?bust=1604189888"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660895/1/?bust=1604189883"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660895"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660894,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-daisy-puppy-pugsly-49660894/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "English Pointer",
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
"name": "Mama Daisy Puppy - Pugsly",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_887481-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/2/?bust=1604189879&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/2/?bust=1604189879&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/2/?bust=1604189879&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/2/?bust=1604189879"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660894/1/?bust=1604189861"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660894"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660897,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/beetlejuice-litter-barbara-49660897/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Italian Greyhound",
  "secondary": "American Bulldog",
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
  "cats": null
},
"tags": [],
"name": "Beetlejuice Litter - Barbara",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884679-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/3/?bust=1604189844&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/3/?bust=1604189844&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/3/?bust=1604189844&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/3/?bust=1604189844"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/2/?bust=1604189853&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/2/?bust=1604189853&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/2/?bust=1604189853&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/2/?bust=1604189853"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660897/1/?bust=1604189900"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660897"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660901,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-athena-and-number-39s-pup-poseidon-49660901/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Border Collie",
  "secondary": "Australian Cattle Dog / Blue Heeler",
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
  "cats": null
},
"tags": [],
"name": "Mama Athena&#39;s Pup - Poseidon",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_885644-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/2/?bust=1604189900&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/2/?bust=1604189900&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/2/?bust=1604189900&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/2/?bust=1604189900"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660901/1/?bust=1604189900"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660901"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660883,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-athena-and-number-39s-pup-aphrodite-49660883/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Border Collie",
  "secondary": "Australian Cattle Dog / Blue Heeler",
  "mixed": true,
  "unknown": false
},
"colors": {
  "primary": "White / Cream",
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
  "cats": null
},
"tags": [],
"name": "Mama Athena&#39;s Pup - Aphrodite",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_885646-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/2/?bust=1604189879&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/2/?bust=1604189879&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/2/?bust=1604189879&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/2/?bust=1604189879"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660883/1/?bust=1604189904"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660883"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660891,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-athena-and-number-39s-pup-apollo-49660891/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Border Collie",
  "secondary": "Australian Cattle Dog / Blue Heeler",
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
"name": "Mama Athena&#39;s Pup - Apollo",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_885642-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/2/?bust=1604189863&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/2/?bust=1604189863&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/2/?bust=1604189863&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/2/?bust=1604189863"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/3/?bust=1604189867&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/3/?bust=1604189867&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/3/?bust=1604189867&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/3/?bust=1604189867"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660891/1/?bust=1604189902"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660891"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660888,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/halloweentown-litter-dylan-49660888/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
  "shots_current": true
},
"environment": {
  "children": true,
  "dogs": true,
  "cats": null
},
"tags": [],
"name": "Halloweentown Litter - Dylan",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884663-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/2/?bust=1604189908&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/2/?bust=1604189908&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/2/?bust=1604189908&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/2/?bust=1604189908"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660888/1/?bust=1604189854"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660888"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660892,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-athena-and-number-39s-pup-hercules-49660892/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Border Collie",
  "secondary": "Australian Cattle Dog / Blue Heeler",
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
"name": "Mama Athena&#39;s Pup - Hercules",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_92854036",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/2/?bust=1604189869&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/2/?bust=1604189869&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/2/?bust=1604189869&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/2/?bust=1604189869"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660892/1/?bust=1604189925"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660892"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660889,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-daisy-puppy-wednesday-49660889/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "English Pointer",
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
"name": "Mama Daisy Puppy - Wednesday",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_887463-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/3/?bust=1604189835&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/3/?bust=1604189835&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/3/?bust=1604189835&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/3/?bust=1604189835"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/2/?bust=1604189921&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/2/?bust=1604189921&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/2/?bust=1604189921&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/2/?bust=1604189921"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660889/1/?bust=1604189860"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660889"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660884,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/beetlejuice-litter-maxie-49660884/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Italian Greyhound",
  "secondary": "American Bulldog",
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
"name": "Beetlejuice Litter - Maxie",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884676-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/2/?bust=1604189888&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/2/?bust=1604189888&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/2/?bust=1604189888&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/2/?bust=1604189888"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/3/?bust=1604189905&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/3/?bust=1604189905&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/3/?bust=1604189905&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/3/?bust=1604189905"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660884/1/?bust=1604189911"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660884"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660904,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/beetlejuice-litter-ernie-49660904/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Italian Greyhound",
  "secondary": "American Bulldog",
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
"name": "Beetlejuice Litter - Ernie",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884680-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/2/?bust=1604189885&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/2/?bust=1604189885&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/2/?bust=1604189885&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/2/?bust=1604189885"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/3/?bust=1604189918&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/3/?bust=1604189918&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/3/?bust=1604189918&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/3/?bust=1604189918"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660904/1/?bust=1604189892"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660904"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660885,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/beetlejuice-litter-old-bill-49660885/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Italian Greyhound",
  "secondary": "American Bulldog",
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
  "cats": null
},
"tags": [],
"name": "Beetlejuice Litter - Old Bill",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884678-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/3/?bust=1604189915&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/3/?bust=1604189915&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/3/?bust=1604189915&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/3/?bust=1604189915"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/4/?bust=1604189916&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/4/?bust=1604189916&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/4/?bust=1604189916&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/4/?bust=1604189916"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/2/?bust=1604189918&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/2/?bust=1604189918&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/2/?bust=1604189918&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/2/?bust=1604189918"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660885/1/?bust=1604189895"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660885"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660886,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/beetlejuice-litter-otho-49660886/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Italian Greyhound",
  "secondary": "American Bulldog",
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
  "cats": null
},
"tags": [],
"name": "Beetlejuice Litter - Otho",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_884674-192495",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/3/?bust=1604189892&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/3/?bust=1604189892&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/3/?bust=1604189892&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/3/?bust=1604189892"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/2/?bust=1604189908&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/2/?bust=1604189908&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/2/?bust=1604189908&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/2/?bust=1604189908"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660886/1/?bust=1604189915"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660886"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660887,
"organization_id": "CO489",
"url": "https://www.petfinder.com/dog/mama-daisy-puppy-ruthie-49660887/co/lakewood/moms-and-mutts-colorado-rescue-for-pregnant-and-nursing-dogs-co489/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "English Pointer",
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
"name": "Mama Daisy Puppy - Ruthie",
"description": "*Due to concerns surrounding COVID-19, we have reformatted the way that we do adoptions in order to follow social distancing...",
"organization_animal_id": "ps_48516889",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/2/?bust=1604189977&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/2/?bust=1604189977&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/2/?bust=1604189977&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/2/?bust=1604189977"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660887/1/?bust=1604189919"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:05:50+0000",
"published_at": "2020-11-01T00:05:50+0000",
"distance": 27.2915,
"contact": {
  "email": "Info@mamcorescue.org",
  "phone": "(720) 532-1668",
  "address": {
      "address1": null,
      "address2": null,
      "city": "Lakewood",
      "state": "CO",
      "postcode": "80227",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660887"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co489"
  }
}
},
{
"id": 49660861,
"organization_id": "CO403",
"url": "https://www.petfinder.com/dog/stanley-49660861/co/sedalia/4-paws-4-life-rescue-co403/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Dachshund",
  "secondary": "Chihuahua",
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
  "children": null,
  "dogs": true,
  "cats": null
},
"tags": [],
"name": "Stanley",
"description": "We have no back story or update for this dog at this time. When we do, it will be updated...",
"organization_animal_id": "ps_885589-109199",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/5/?bust=1604189636&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/5/?bust=1604189636&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/5/?bust=1604189636&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/5/?bust=1604189636"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/3/?bust=1604189638&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/3/?bust=1604189638&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/3/?bust=1604189638&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/3/?bust=1604189638"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/2/?bust=1604189709&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/2/?bust=1604189709&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/2/?bust=1604189709&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/2/?bust=1604189709"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/4/?bust=1604189713&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/4/?bust=1604189713&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/4/?bust=1604189713&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/4/?bust=1604189713"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660861/1/?bust=1604189645"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:03:46+0000",
"published_at": "2020-11-01T00:03:46+0000",
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
      "href": "/v2/animals/49660861"
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
"id": 49660859,
"organization_id": "CO451",
"url": "https://www.petfinder.com/dog/indigo-49660859/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
"name": "Indigo",
"description": "He is so sweet and loves to chill on your lap or romp around with the big dogs. Even though...",
"organization_animal_id": "ps_889500-80925",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/2/?bust=1604221781&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/2/?bust=1604221781&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/2/?bust=1604221781&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/2/?bust=1604221781"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/3/?bust=1604221785&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/3/?bust=1604221785&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/3/?bust=1604221785&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/3/?bust=1604221785"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660859/1/?bust=1604189729"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:03:29+0000",
"published_at": "2020-11-01T00:03:29+0000",
"distance": 36.6173,
"contact": {
  "email": "info@2babrescue.org",
  "phone": null,
  "address": {
      "address1": null,
      "address2": null,
      "city": "Littleton",
      "state": "CO",
      "postcode": "80126",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660859"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co451"
  }
}
},
{
"id": 49660858,
"organization_id": "CO451",
"url": "https://www.petfinder.com/dog/azul-49660858/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
"name": "Azul",
"description": "Hi Im Hector, a sweet and playful 14 week old mixed breed puppy. I had a rough start to life...",
"organization_animal_id": "ps_889493-80925",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/2/?bust=1604221785&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/2/?bust=1604221785&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/2/?bust=1604221785&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/2/?bust=1604221785"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/5/?bust=1604221788&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/5/?bust=1604221788&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/5/?bust=1604221788&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/5/?bust=1604221788"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/3/?bust=1604221796&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/3/?bust=1604221796&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/3/?bust=1604221796&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/3/?bust=1604221796"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/6/?bust=1604221862&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/6/?bust=1604221862&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/6/?bust=1604221862&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/6/?bust=1604221862"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/4/?bust=1604221802&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/4/?bust=1604221802&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/4/?bust=1604221802&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/4/?bust=1604221802"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660858/1/?bust=1604189651"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:03:29+0000",
"published_at": "2020-11-01T00:03:29+0000",
"distance": 36.6173,
"contact": {
  "email": "info@2babrescue.org",
  "phone": null,
  "address": {
      "address1": null,
      "address2": null,
      "city": "Littleton",
      "state": "CO",
      "postcode": "80126",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660858"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co451"
  }
}
},
{
"id": 49660851,
"organization_id": "CO451",
"url": "https://www.petfinder.com/dog/haven-49660851/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Dalmatian",
  "secondary": "Cattle Dog",
  "mixed": true,
  "unknown": false
},
"colors": {
  "primary": "White / Cream",
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
  "cats": null
},
"tags": [],
"name": "Haven",
"description": "*Homeownership Required! BSL Restrictions will apply.\n\nAdoption fee includes the following:\n\n\n\tSpay/Neuter\n\tRabies Vaccination\n\tDistemper / Parvo Vaccines (includes series...",
"organization_animal_id": "ps_889582-80925",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660851/1/?bust=1604189664"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:03:28+0000",
"published_at": "2020-11-01T00:03:28+0000",
"distance": 36.6173,
"contact": {
  "email": "info@2babrescue.org",
  "phone": null,
  "address": {
      "address1": null,
      "address2": null,
      "city": "Littleton",
      "state": "CO",
      "postcode": "80126",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660851"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co451"
  }
}
},
{
"id": 49660857,
"organization_id": "CO451",
"url": "https://www.petfinder.com/dog/cyclone-49660857/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
"type": "Dog",
"species": "Dog",
"breeds": {
  "primary": "Mixed Breed",
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
  "cats": null
},
"tags": [],
"name": "Cyclone",
"description": "Look out world, a Cyclone is coming! Hunker down and snuggle your days away with this playful, loving, gentle baby...",
"organization_animal_id": "ps_70775862",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660857/1/?bust=1604189666"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:03:28+0000",
"published_at": "2020-11-01T00:03:28+0000",
"distance": 36.6173,
"contact": {
  "email": "info@2babrescue.org",
  "phone": null,
  "address": {
      "address1": null,
      "address2": null,
      "city": "Littleton",
      "state": "CO",
      "postcode": "80126",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660857"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co451"
  }
}
},
{
"id": 49660854,
"organization_id": "CO451",
"url": "https://www.petfinder.com/dog/shayla-49660854/co/littleton/2-blondes-all-breed-rescue-co451/?referrer_id=45feae4c-7190-4deb-ae68-81a36fb94d59",
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
  "cats": null
},
"tags": [],
"name": "Shayla",
"description": "Shayla is one of the sweetest puppies we have ever met. If you love puppy cuddles, kisses, and even puppy...",
"organization_animal_id": "ps_889595-80925",
"photos": [
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/4/?bust=1604189623&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/4/?bust=1604189623&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/4/?bust=1604189623&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/4/?bust=1604189623"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/2/?bust=1604189623&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/2/?bust=1604189623&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/2/?bust=1604189623&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/2/?bust=1604189623"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/3/?bust=1604189645&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/3/?bust=1604189645&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/3/?bust=1604189645&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/3/?bust=1604189645"
  },
  {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/5/?bust=1604189657&width=100",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/5/?bust=1604189657&width=300",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/5/?bust=1604189657&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/5/?bust=1604189657"
  }
],
"primary_photo_cropped": {
  "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621&width=300",
  "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621&width=450",
  "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621&width=600",
  "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49660854/1/?bust=1604189621"
},
"videos": [],
"status": "adoptable",
"status_changed_at": "2020-11-01T00:03:28+0000",
"published_at": "2020-11-01T00:03:28+0000",
"distance": 36.6173,
"contact": {
  "email": "info@2babrescue.org",
  "phone": null,
  "address": {
      "address1": null,
      "address2": null,
      "city": "Littleton",
      "state": "CO",
      "postcode": "80126",
      "country": "US"
  }
},
"_links": {
  "self": {
      "href": "/v2/animals/49660854"
  },
  "type": {
      "href": "/v2/types/dog"
  },
  "organization": {
      "href": "/v2/organizations/co451"
  }
}
}
]
// if puppy is clicked display puppy info
// create new state to control conditional render
// or do an onclick event that displays a modal

const PuppyList = (props) => {
  return (
    <div>
      {PuppyData.map((puppy) => (
        <Puppy 
          puppy_url={puppy.url}
          puppy_img={puppy.photos[0] !== undefined ? puppy.photos[0].full : 'https://puppyluv.s3.us-east-2.amazonaws.com/PuppyLuv_ComingSoonGif.gif'}
          puppy_name={puppy.name}
          puppy_location={puppy.contact.address.city}
          puppy_breeds={puppy.breeds.secondary ? puppy.breeds.primary + ' & ' + puppy.breeds.secondary : puppy.breeds.primary}
          puppy_gender={puppy.gender}
          puppy_size={puppy.size}
        />
      ))}
    </div>
  );
};

export default PuppyList;
