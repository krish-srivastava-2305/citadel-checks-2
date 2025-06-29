const userData = [
  {
    "id": "user-1",
    "demographics": {
      "age": 18,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Specialist",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹1200+",
      "languages": [
        "Urdu",
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "sports",
      "startups",
      "travel"
    ],
    "behavioral_data": {
      "previous_ratings": 77,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-2",
    "demographics": {
      "age": 21,
      "gender": "male",
      "city": "Kolkata",
      "university": "IEM Kolkata",
      "degree": "Engineer",
      "year": 2026
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Hindi",
        "Urdu"
      ],
      "alcohol": "no",
      "relationship_status": "single"
    },
    "interests": [
      "reading",
      "movies",
      "startups",
      "music"
    ],
    "behavioral_data": {
      "previous_ratings": 112,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-3",
    "demographics": {
      "age": 27,
      "gender": "male",
      "city": "Lucknow",
      "university": "Amity Lucknow",
      "degree": "Associate",
      "year": 2025
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹1200+",
      "languages": [
        "Urdu",
        "Bengali"
      ],
      "alcohol": "yes",
      "relationship_status": "single"
    },
    "interests": [
      "startups",
      "movies",
      "cooking"
    ],
    "behavioral_data": {
      "previous_ratings": 81,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-4",
    "demographics": {
      "age": 22,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Technician",
      "year": 2024
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "cooking",
      "startups",
      "yoga",
      "design"
    ],
    "behavioral_data": {
      "previous_ratings": 14,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-5",
    "demographics": {
      "age": 23,
      "gender": "male",
      "city": "Kolkata",
      "university": "Jadavpur University",
      "degree": "Manager",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹800-1200",
      "languages": [
        "English"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "yoga",
      "movies",
      "hiking",
      "gaming"
    ],
    "behavioral_data": {
      "previous_ratings": 50,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-6",
    "demographics": {
      "age": 27,
      "gender": "male",
      "city": "Kolkata",
      "university": "IEM Kolkata",
      "degree": "Orchestrator",
      "year": 2025
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹1200+",
      "languages": [
        "Bengali",
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "single"
    },
    "interests": [
      "yoga",
      "gaming",
      "hiking"
    ],
    "behavioral_data": {
      "previous_ratings": 60,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-7",
    "demographics": {
      "age": 18,
      "gender": "female",
      "city": "Delhi",
      "university": "NSIT",
      "degree": "Representative",
      "year": 2025
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹1200+",
      "languages": [
        "English"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "sports",
      "reading",
      "startups",
      "design"
    ],
    "behavioral_data": {
      "previous_ratings": 102,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-8",
    "demographics": {
      "age": 26,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Assistant",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹500-800",
      "languages": [
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "yoga",
      "travel",
      "cooking",
      "reading",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 77,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-9",
    "demographics": {
      "age": 18,
      "gender": "male",
      "city": "Kolkata",
      "university": "Jadavpur University",
      "degree": "Consultant",
      "year": 2026
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹1200+",
      "languages": [
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "hiking",
      "finance",
      "yoga"
    ],
    "behavioral_data": {
      "previous_ratings": 62,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-10",
    "demographics": {
      "age": 22,
      "gender": "female",
      "city": "Lucknow",
      "university": "Lucknow University",
      "degree": "Associate",
      "year": 2025
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹800-1200",
      "languages": [
        "Hindi",
        "English"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "startups",
      "hiking",
      "design",
      "cooking",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 32,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-11",
    "demographics": {
      "age": 28,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Representative",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "hiking",
      "cooking",
      "reading",
      "finance",
      "yoga"
    ],
    "behavioral_data": {
      "previous_ratings": 88,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-12",
    "demographics": {
      "age": 22,
      "gender": "female",
      "city": "Lucknow",
      "university": "Amity Lucknow",
      "degree": "Supervisor",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹500-800",
      "languages": [
        "English"
      ],
      "alcohol": "yes",
      "relationship_status": "single"
    },
    "interests": [
      "design",
      "cooking",
      "yoga",
      "music"
    ],
    "behavioral_data": {
      "previous_ratings": 182,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-13",
    "demographics": {
      "age": 26,
      "gender": "female",
      "city": "Kolkata",
      "university": "Jadavpur University",
      "degree": "Director",
      "year": 2024
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹500-800",
      "languages": [
        "Urdu"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "music",
      "design",
      "sports",
      "finance"
    ],
    "behavioral_data": {
      "previous_ratings": 87,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-14",
    "demographics": {
      "age": 23,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Coordinator",
      "year": 2027
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Urdu",
        "Bengali",
        "English"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "gaming",
      "cooking",
      "travel",
      "yoga"
    ],
    "behavioral_data": {
      "previous_ratings": 190,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-15",
    "demographics": {
      "age": 25,
      "gender": "female",
      "city": "Lucknow",
      "university": "Lucknow University",
      "degree": "Designer",
      "year": 2024
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Urdu",
        "Bengali",
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "yoga",
      "hiking",
      "travel",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 173,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-16",
    "demographics": {
      "age": 27,
      "gender": "female",
      "city": "Lucknow",
      "university": "IIT Lucknow",
      "degree": "Facilitator",
      "year": 2025
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹800-1200",
      "languages": [
        "English",
        "Bengali"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "reading",
      "music",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 120,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-17",
    "demographics": {
      "age": 24,
      "gender": "male",
      "city": "Lucknow",
      "university": "IIT Lucknow",
      "degree": "Manager",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹500-800",
      "languages": [
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "single"
    },
    "interests": [
      "gaming",
      "reading",
      "sports",
      "yoga"
    ],
    "behavioral_data": {
      "previous_ratings": 178,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-18",
    "demographics": {
      "age": 26,
      "gender": "male",
      "city": "Lucknow",
      "university": "IIT Lucknow",
      "degree": "Liaison",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹500-800",
      "languages": [
        "English"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "music",
      "startups",
      "design"
    ],
    "behavioral_data": {
      "previous_ratings": 129,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-19",
    "demographics": {
      "age": 18,
      "gender": "female",
      "city": "Lucknow",
      "university": "Amity Lucknow",
      "degree": "Specialist",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "Urdu",
        "English"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "music",
      "yoga",
      "travel",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 121,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-20",
    "demographics": {
      "age": 19,
      "gender": "male",
      "city": "Kolkata",
      "university": "Jadavpur University",
      "degree": "Technician",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "English"
      ],
      "alcohol": "no",
      "relationship_status": "single"
    },
    "interests": [
      "travel",
      "hiking",
      "sports",
      "yoga",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 86,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-21",
    "demographics": {
      "age": 19,
      "gender": "male",
      "city": "Kolkata",
      "university": "IEM Kolkata",
      "degree": "Architect",
      "year": 2027
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹500-800",
      "languages": [
        "Urdu",
        "Bengali",
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "startups",
      "design",
      "travel"
    ],
    "behavioral_data": {
      "previous_ratings": 21,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-22",
    "demographics": {
      "age": 27,
      "gender": "male",
      "city": "Lucknow",
      "university": "Lucknow University",
      "degree": "Designer",
      "year": 2027
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "music",
      "startups",
      "hiking",
      "travel"
    ],
    "behavioral_data": {
      "previous_ratings": 156,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-23",
    "demographics": {
      "age": 26,
      "gender": "female",
      "city": "Kolkata",
      "university": "Calcutta University",
      "degree": "Manager",
      "year": 2025
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "Bengali",
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "cooking",
      "music",
      "yoga",
      "gaming"
    ],
    "behavioral_data": {
      "previous_ratings": 96,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-24",
    "demographics": {
      "age": 19,
      "gender": "female",
      "city": "Kolkata",
      "university": "IEM Kolkata",
      "degree": "Associate",
      "year": 2024
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹800-1200",
      "languages": [
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "startups",
      "music",
      "gaming"
    ],
    "behavioral_data": {
      "previous_ratings": 124,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-25",
    "demographics": {
      "age": 28,
      "gender": "female",
      "city": "Lucknow",
      "university": "IIT Lucknow",
      "degree": "Producer",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹800-1200",
      "languages": [
        "Bengali",
        "English"
      ],
      "alcohol": "yes",
      "relationship_status": "single"
    },
    "interests": [
      "music",
      "hiking",
      "sports",
      "finance",
      "design"
    ],
    "behavioral_data": {
      "previous_ratings": 26,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-26",
    "demographics": {
      "age": 20,
      "gender": "female",
      "city": "Delhi",
      "university": "DU",
      "degree": "Supervisor",
      "year": 2027
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹500-800",
      "languages": [
        "English",
        "Hindi",
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "startups",
      "reading",
      "cooking",
      "movies",
      "travel"
    ],
    "behavioral_data": {
      "previous_ratings": 111,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-27",
    "demographics": {
      "age": 19,
      "gender": "male",
      "city": "Kolkata",
      "university": "Jadavpur University",
      "degree": "Developer",
      "year": 2024
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Urdu",
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "startups",
      "gaming",
      "travel",
      "finance"
    ],
    "behavioral_data": {
      "previous_ratings": 171,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-28",
    "demographics": {
      "age": 24,
      "gender": "female",
      "city": "Lucknow",
      "university": "IIT Lucknow",
      "degree": "Coordinator",
      "year": 2025
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹1200+",
      "languages": [
        "Urdu",
        "Bengali"
      ],
      "alcohol": "yes",
      "relationship_status": "single"
    },
    "interests": [
      "music",
      "movies",
      "startups",
      "design",
      "hiking"
    ],
    "behavioral_data": {
      "previous_ratings": 115,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-29",
    "demographics": {
      "age": 22,
      "gender": "female",
      "city": "Lucknow",
      "university": "Amity Lucknow",
      "degree": "Consultant",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "single"
    },
    "interests": [
      "finance",
      "startups",
      "travel"
    ],
    "behavioral_data": {
      "previous_ratings": 51,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-30",
    "demographics": {
      "age": 19,
      "gender": "female",
      "city": "Kolkata",
      "university": "Jadavpur University",
      "degree": "Executive",
      "year": 2024
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "Urdu",
        "Bengali",
        "Hindi"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "travel",
      "cooking",
      "reading",
      "movies",
      "gaming"
    ],
    "behavioral_data": {
      "previous_ratings": 164,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-31",
    "demographics": {
      "age": 25,
      "gender": "male",
      "city": "Kolkata",
      "university": "Calcutta University",
      "degree": "Supervisor",
      "year": 2026
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹1200+",
      "languages": [
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "music",
      "hiking",
      "yoga",
      "travel",
      "finance"
    ],
    "behavioral_data": {
      "previous_ratings": 26,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-32",
    "demographics": {
      "age": 18,
      "gender": "male",
      "city": "Delhi",
      "university": "NSIT",
      "degree": "Technician",
      "year": 2027
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹500-800",
      "languages": [
        "English",
        "Hindi",
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "sports",
      "travel",
      "design",
      "yoga",
      "reading"
    ],
    "behavioral_data": {
      "previous_ratings": 41,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-33",
    "demographics": {
      "age": 27,
      "gender": "male",
      "city": "Kolkata",
      "university": "IEM Kolkata",
      "degree": "Producer",
      "year": 2024
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹1200+",
      "languages": [
        "Urdu"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "travel",
      "cooking",
      "sports",
      "startups",
      "hiking"
    ],
    "behavioral_data": {
      "previous_ratings": 185,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-34",
    "demographics": {
      "age": 27,
      "gender": "female",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Coordinator",
      "year": 2027
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹1200+",
      "languages": [
        "Urdu",
        "English",
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "finance",
      "music",
      "startups"
    ],
    "behavioral_data": {
      "previous_ratings": 11,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-35",
    "demographics": {
      "age": 22,
      "gender": "female",
      "city": "Delhi",
      "university": "DU",
      "degree": "Coordinator",
      "year": 2024
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹800-1200",
      "languages": [
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "yoga",
      "gaming",
      "hiking",
      "finance"
    ],
    "behavioral_data": {
      "previous_ratings": 60,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-36",
    "demographics": {
      "age": 24,
      "gender": "male",
      "city": "Delhi",
      "university": "Jamia Millia",
      "degree": "Planner",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "Bengali",
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "music",
      "startups",
      "movies",
      "design",
      "cooking"
    ],
    "behavioral_data": {
      "previous_ratings": 61,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-37",
    "demographics": {
      "age": 26,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Manager",
      "year": 2025
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹500-800",
      "languages": [
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "music",
      "cooking",
      "hiking"
    ],
    "behavioral_data": {
      "previous_ratings": 140,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-38",
    "demographics": {
      "age": 20,
      "gender": "male",
      "city": "Kolkata",
      "university": "IEM Kolkata",
      "degree": "Strategist",
      "year": 2025
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹800-1200",
      "languages": [
        "Urdu",
        "English",
        "Hindi"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "startups",
      "design",
      "reading",
      "finance",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 11,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-39",
    "demographics": {
      "age": 23,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Planner",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹800-1200",
      "languages": [
        "English"
      ],
      "alcohol": "no",
      "relationship_status": "single"
    },
    "interests": [
      "startups",
      "music",
      "cooking"
    ],
    "behavioral_data": {
      "previous_ratings": 22,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-40",
    "demographics": {
      "age": 24,
      "gender": "female",
      "city": "Delhi",
      "university": "NSIT",
      "degree": "Strategist",
      "year": 2026
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹1200+",
      "languages": [
        "English",
        "Hindi",
        "Urdu"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "movies",
      "reading",
      "yoga",
      "finance"
    ],
    "behavioral_data": {
      "previous_ratings": 124,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-41",
    "demographics": {
      "age": 23,
      "gender": "female",
      "city": "Lucknow",
      "university": "Lucknow University",
      "degree": "Executive",
      "year": 2027
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Urdu",
        "Bengali",
        "Hindi"
      ],
      "alcohol": "yes",
      "relationship_status": "single"
    },
    "interests": [
      "movies",
      "music",
      "startups"
    ],
    "behavioral_data": {
      "previous_ratings": 83,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-42",
    "demographics": {
      "age": 26,
      "gender": "female",
      "city": "Kolkata",
      "university": "IEM Kolkata",
      "degree": "Consultant",
      "year": 2024
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "English",
        "Hindi",
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "travel",
      "yoga",
      "finance"
    ],
    "behavioral_data": {
      "previous_ratings": 21,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-43",
    "demographics": {
      "age": 23,
      "gender": "male",
      "city": "Lucknow",
      "university": "IIT Lucknow",
      "degree": "Technician",
      "year": 2025
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹500-800",
      "languages": [
        "English",
        "Hindi"
      ],
      "alcohol": "yes",
      "relationship_status": "single"
    },
    "interests": [
      "reading",
      "design",
      "yoga"
    ],
    "behavioral_data": {
      "previous_ratings": 34,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-44",
    "demographics": {
      "age": 25,
      "gender": "female",
      "city": "Delhi",
      "university": "NSIT",
      "degree": "Supervisor",
      "year": 2026
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹500-800",
      "languages": [
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "startups",
      "reading",
      "cooking",
      "yoga"
    ],
    "behavioral_data": {
      "previous_ratings": 171,
      "response_patterns": "slow"
    }
  },
  {
    "id": "user-45",
    "demographics": {
      "age": 19,
      "gender": "male",
      "city": "Lucknow",
      "university": "Lucknow University",
      "degree": "Producer",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegetarian",
      "budget": "₹500-800",
      "languages": [
        "English",
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "cooking",
      "yoga",
      "sports"
    ],
    "behavioral_data": {
      "previous_ratings": 154,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-46",
    "demographics": {
      "age": 25,
      "gender": "male",
      "city": "Delhi",
      "university": "NSIT",
      "degree": "Developer",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹800-1200",
      "languages": [
        "English",
        "Bengali",
        "Hindi"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "music",
      "startups",
      "sports",
      "cooking"
    ],
    "behavioral_data": {
      "previous_ratings": 197,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-47",
    "demographics": {
      "age": 20,
      "gender": "male",
      "city": "Kolkata",
      "university": "Calcutta University",
      "degree": "Planner",
      "year": 2025
    },
    "preferences": {
      "dietary": "no restrictions",
      "budget": "₹800-1200",
      "languages": [
        "Urdu",
        "Bengali"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "sports",
      "cooking",
      "movies"
    ],
    "behavioral_data": {
      "previous_ratings": 104,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-48",
    "demographics": {
      "age": 28,
      "gender": "male",
      "city": "Delhi",
      "university": "IIT Delhi",
      "degree": "Orchestrator",
      "year": 2027
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹500-800",
      "languages": [
        "English",
        "Urdu"
      ],
      "alcohol": "yes",
      "relationship_status": "not looking"
    },
    "interests": [
      "yoga",
      "finance",
      "startups"
    ],
    "behavioral_data": {
      "previous_ratings": 156,
      "response_patterns": "average"
    }
  },
  {
    "id": "user-49",
    "demographics": {
      "age": 18,
      "gender": "female",
      "city": "Lucknow",
      "university": "IIT Lucknow",
      "degree": "Developer",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹1200+",
      "languages": [
        "Bengali",
        "Urdu",
        "Hindi"
      ],
      "alcohol": "no",
      "relationship_status": "not looking"
    },
    "interests": [
      "yoga",
      "cooking",
      "movies",
      "design",
      "hiking"
    ],
    "behavioral_data": {
      "previous_ratings": 33,
      "response_patterns": "fast"
    }
  },
  {
    "id": "user-50",
    "demographics": {
      "age": 21,
      "gender": "male",
      "city": "Delhi",
      "university": "DU",
      "degree": "Developer",
      "year": 2026
    },
    "preferences": {
      "dietary": "vegan",
      "budget": "₹500-800",
      "languages": [
        "Urdu",
        "Bengali",
        "Hindi"
      ],
      "alcohol": "yes",
      "relationship_status": "in a relationship"
    },
    "interests": [
      "yoga",
      "movies",
      "cooking",
      "reading",
      "gaming"
    ],
    "behavioral_data": {
      "previous_ratings": 138,
      "response_patterns": "average"
    }
  }
];

export default userData;