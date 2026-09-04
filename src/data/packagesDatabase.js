import package1 from "../assets/package1.jpg";
import package2 from "../assets/package2.jpg";
import package3 from "../assets/package3.jpg";
import package4 from "../assets/package4.jpg";
import package5 from "../assets/package5.jpg";
import package6 from "../assets/package6.jpg";

const packagesDatabase = [
  {
    id: "hunza",
    title: "Hunza Valley Tour",
    image: package1,
    duration: "5 Days / 4 Nights",
    price: "Starting from PKR 45,000",

    overview:
      "Explore the breathtaking beauty of Hunza Valley, surrounded by majestic mountains, beautiful lakes, and historic forts. This tour offers a perfect combination of nature, culture, and adventure.",

    itinerary: [
      "Day 1: Arrival in Hunza and visit Karimabad",
      "Day 2: Explore Baltit Fort, Altit Fort, and Eagle's Nest",
      "Day 3: Visit Attabad Lake, Passu Cones, and Khunjerab Pass",
      "Day 4: Explore local markets and enjoy Hunza culture",
      "Day 5: Return journey back to Islamabad"
    ],

    included: [
      "Hotel accommodation",
      "Transport",
      "Tour guide",
      "Breakfast and dinner",
      "Sightseeing tickets"
    ],

    excluded: [
      "Personal expenses",
      "Lunch",
      "Extra activities",
      "Travel insurance"
    ]
  },

  {
    id: "skardu",
    title: "Skardu Adventure",
    image: package2,
    duration: "6 Days / 5 Nights",
    price: "Starting from PKR 52,000",

    overview:
      "Discover the magical landscapes of Skardu including beautiful lakes, deserts, and mountains. Experience the adventure of northern Pakistan with unforgettable memories.",

    itinerary: [
      "Day 1: Arrival in Skardu and city exploration",
      "Day 2: Visit Shangrila Resort and Upper Kachura Lake",
      "Day 3: Explore Deosai National Park and Sheosar Lake",
      "Day 4: Visit Mansehra Valley and local attractions",
      "Day 5: Explore Skardu market and surrounding areas",
      "Day 6: Departure from Skardu"
    ],

    included: [
      "Hotel accommodation",
      "Transportation",
      "Tour guide",
      "Breakfast",
      "Jeep charges"
    ],

    excluded: [
      "Personal shopping",
      "Lunch and snacks",
      "Adventure activities",
      "Insurance"
    ]
  },

  {
    id: "fairy-meadows",
    title: "Fairy Meadows Escape",
    image: package3,
    duration: "4 Days / 3 Nights",
    price: "Starting from PKR 40,000",

    overview:
      "Enjoy the spectacular beauty of Fairy Meadows with amazing views of Nanga Parbat. Experience peaceful camping, hiking trails, and breathtaking mountain scenery.",

    itinerary: [
      "Day 1: Travel to Raikot Bridge and move towards Fairy Meadows",
      "Day 2: Explore Fairy Meadows and enjoy Nanga Parbat views",
      "Day 3: Hiking towards Nanga Parbat Base Camp",
      "Day 4: Return journey back to Islamabad"
    ],

    included: [
      "Hotel/camping accommodation",
      "Transport",
      "Jeep ride",
      "Tour guide",
      "Breakfast and dinner"
    ],

    excluded: [
      "Personal expenses",
      "Lunch",
      "Extra activities",
      "Travel insurance"
    ]
  },

  {
    id: "swat",
    title: "Swat Valley Tour",
    image: package4,
    duration: "4 Days / 3 Nights",
    price: "Starting from PKR 35,000",

    overview:
      "Visit the Switzerland of Pakistan and explore beautiful valleys, waterfalls, rivers, and historical places while enjoying the peaceful atmosphere of Swat.",

    itinerary: [
      "Day 1: Arrival in Swat and visit Mingora",
      "Day 2: Explore Malam Jabba and nearby attractions",
      "Day 3: Visit Kalam Valley, waterfalls, and lakes",
      "Day 4: Return journey to Islamabad"
    ],

    included: [
      "Hotel accommodation",
      "Transport",
      "Guide service",
      "Breakfast",
      "Sightseeing"
    ],

    excluded: [
      "Personal expenses",
      "Lunch",
      "Cable car tickets",
      "Insurance"
    ]
  },

  {
    id: "neelum",
    title: "Neelum Valley Tour",
    image: package5,
    duration: "5 Days / 4 Nights",
    price: "Starting from PKR 42,000",

    overview:
      "Explore the natural beauty of Neelum Valley with lush green forests, crystal-clear rivers, beautiful villages, and amazing mountain views.",

    itinerary: [
      "Day 1: Arrival in Muzaffarabad and travel to Neelum Valley",
      "Day 2: Visit Keran and Sharda Valley",
      "Day 3: Explore Kel and Arang Kel",
      "Day 4: Enjoy local sightseeing",
      "Day 5: Return journey"
    ],

    included: [
      "Hotel stay",
      "Transportation",
      "Tour guide",
      "Breakfast and dinner",
      "Sightseeing"
    ],

    excluded: [
      "Personal expenses",
      "Lunch",
      "Shopping",
      "Insurance"
    ]
  },

  {
    id: "naran-kaghan",
    title: "Naran Kaghan Tour",
    image: package6,
    duration: "5 Days / 4 Nights",
    price: "Starting from PKR 38,000",

    overview:
      "Discover the beauty of Naran Kaghan Valley including Saif-ul-Malook Lake, Babusar Top, rivers, and stunning mountain landscapes.",

    itinerary: [
      "Day 1: Arrival in Naran and explore surroundings",
      "Day 2: Visit Saif-ul-Malook Lake",
      "Day 3: Explore Babusar Top and scenic points",
      "Day 4: Visit Kaghan Valley attractions",
      "Day 5: Return journey to Islamabad"
    ],

    included: [
      "Hotel accommodation",
      "Transport",
      "Tour guide",
      "Breakfast and dinner",
      "Sightseeing"
    ],

    excluded: [
      "Personal expenses",
      "Lunch",
      "Extra activities",
      "Insurance"
    ]
  }
];

export default packagesDatabase;