const PUZZLES = {
  1: {
    id: 1, title: "Connections Puzzle 1",
    groups: [
      {words:["MARS","SATURN","JUPITER","NEPTUNE"], connection:"Planets"},
      {words:["CHEETAH","LEOPARD","LION","TIGER"], connection:"Animals"},
      {words:["FERRARI","MERCURY","TESLA","JAGUAR"], connection:"Cars"},
      {words:["EARTH","SUN","OIL","COAL"], connection:"Things We Get Energy From"}
    ]
  },

  2: {
    id: 2, title: "Connections Puzzle 2",
    groups: [
      {words:["CANOE","KAYAK","RAFT","GONDOLA"], connection:"Types of boats"},
      {words:["VELVET","DENIM","FLANNEL","CORDUROY"], connection:"Types of fabric"},
      {words:["COMPASS","BAROMETER","THERMOMETER","ALTIMETER"], connection:"Measuring instruments"},
      {words:["OAK","BIRCH","CEDAR","CYPRESS"], connection:"Types of trees"}
    ]
  },

  3: {
    id: 3, title: "Connections Puzzle 3",
    groups: [
      {words:["PIRATE","PILOT","CAPTAIN","CONDUCTOR"], connection:"People who operate or command vehicles"},
      {words:["MIRROR","ECHO","SHADOW","REFLECTION"], connection:"Things that can be copies of something"},
      {words:["SAPPHIRE","RUBY","TOPAZ","AMETHYST"], connection:"Gemstones"},
      {words:["WHISK","LADLE","TONGS","SPATULA"], connection:"Kitchen utensils"}
    ]
  },

  4: {
    id: 4, title: "Connections Puzzle 4",
    groups: [
      {words:["MOLAR","CANINE","INCISOR","PREMOLAR"], connection:"Types of teeth"},
      {words:["PARCHMENT","PAPYRUS","TABLET","BOARD"], connection:"Surfaces/materials used for writing"},
      {words:["QUARTZ","GRANITE","MARBLE","SLATE"], connection:"Types of stone"},
      {words:["WALTZ","TANGO","FOXTROT","SAMBA"], connection:"Types of dance"}
    ]
  },

  5: {
    id: 5, title: "Connections Puzzle 5",
    groups: [
      {words:["GREEN","PURPLE","RED","BROWN"], connection:"Colors"},
      {words:["APPLE","CHERRY","STRAWBERRY","RADISH"], connection:"Red Fruits and Vegetables"},
      {words:["GRAPES","PLUMS","CABBAGE","BEETS"], connection:"Purple Fruits and Vegetables"},
      {words:["LIMES","PEARS","KIWI","CUCUMBERS"], connection:"Green Fruits and Vegetables"}
    ]
  },

  6: {
    id: 6, title: "Connections Puzzle 6",
    groups: [
      {words:["VERTEX","ARM","RAY","DEGREES"], connection:"Parts of an Angle"},
      {words:["RIGHT","OBTUSE","ACUTE","REFLEX"], connection:"Types of Angles"},
      {words:["CIRCLE","TRIANGLE","SQUARE","RECTANGLE"], connection:"2D Shapes"},
      {words:["CUBE","SPHERE","PYRAMID","CONE"], connection:"3D Shapes"}
    ]
  },

  7: {
    id: 7, title: "Connections Puzzle 7",
    groups: [
      {words:["SCIENCE","HISTORY","MATH","GYM"], connection:"School Subjects"},
      {words:["DESK","PROJECTOR","STAPLER","SHARPENER"], connection:"Classroom Items"},
      {words:["BOOK","BINDER","COMPUTER","PENCIL"], connection:"Things Carried in a Backpack"},
      {words:["CAFETERIA","LIBRARY","OFFICE","CLASSROOM"], connection:"Places in a School"}
    ]
  },

  8: {
    id: 8, title: "Connections Puzzle 8",
    groups: [
      {words:["GRASS","BLACKTOP","MULCH","TURF"], connection:"Recess Surfaces"},
      {words:["SOCCER","FOOTBALL","KICKBALL","DODGEBALL"], connection:"Games that Involve a Ball"},
      {words:["RUN","SKIP","CLIMB","JUMP"], connection:"Physical Activities"},
      {words:["SLIDE","SWING","MONKEY BARS","JUMP ROPE"], connection:"Playground Equipment"}
    ]
  },

  9: {
    id: 9, title: "Connections Puzzle 9",
    groups: [
      {words:["BUCKS","DOUGH","CASH","MOOLA"], connection:"Other Words for Money"},
      {words:["MAP","COMPASS","KEY","X"], connection:"Tools for Finding Treasure"},
      {words:["CAVE","CHEST","ISLAND","SHIP"], connection:"Places Where Treasure is Hidden"},
      {words:["GOLD","DIAMOND","RUBY","PEARL"], connection:"Types of Treasure"}
    ]
  },

  10: {
    id: 10, title: "Connections Puzzle 10",
    groups: [
      {words:["SIGN","VETO","APPOINT","COMMAND"], connection:"Presidential Duties"},
      {words:["CABINET","SENATE","HOUSE","MILITARY"], connection:"Groups that the President Works With"},
      {words:["OVAL OFFICE","WHITE HOUSE","AIR FORCE ONE","MT. RUSHMORE"], connection:"Presidential Places"},
      {words:["WASHINGTON","LINCOLN","ROOSEVELT","JEFFERSON"], connection:"Presidents"}
    ]
  },

  11: {
    id: 11, title: "Connections Puzzle 11",
    groups: [
      {words:["2","4","6","9"], connection:"Single Digit Numbers"},
      {words:["15","25","75","105"], connection:"Numbers that have a 5 as a Digit"},
      {words:["24","60","96","144"], connection:"Numbers Divisible by 12"},
      {words:["11","17","31","73"], connection:"Prime Numbers"}
    ]
  },

  12: {
    id: 12, title: "Connections Puzzle 12",
    groups: [
      {words:["PEPPERS","FLORIDA","FIRE","VOLCANOES"], connection:"Hot Things"},
      {words:["DONUT","SWISS CHEESE","STRAW","PAPER"], connection:"Things With Holes"},
      {words:["TOMBS","FOSSILS","PIPES","BULBS"], connection:"Buried Things"},
      {words:["BLUE WHALE","MOUNT EVEREST","ALASKA","SEQUOIA"], connection:"The Largest Things"}
    ]
  },

  13: {
    id: 13, title: "Connections Puzzle 13",
    groups: [
      {words:["SWAMPS","BOGS","MARSHES","ESTUARIES"], connection:"Wetlands"},
      {words:["RAIN","SLEET","HAIL","DRIZZLE"], connection:"Precipitation"},
      {words:["ICEBERG","GLACIER","ICICLE","CUBES"], connection:"Frozen Water"},
      {words:["OCEAN","RIVER","LAKE","POND"], connection:"Bodies of Water"}
    ]
  },

  14: {
    id: 14, title: "Connections Puzzle 14",
    groups: [
      {words:["FIRE TRUCK","ROSE","TOMATOES","CARDINAL"], connection:"Red Things"},
      {words:["MONKEYS","LEMUR","WHALE","FOX"], connection:"Things with Tails"},
      {words:["FAIRY","TALL","MYTH","FABLE"], connection:"Types of Tales"},
      {words:["BOOK","ARTICLES","TEXT MESSAGES","POEMS"], connection:"Things that are Read"}
    ]
  },

  15: {
    id: 15, title: "Connections Puzzle 15",
    groups: [
      {words:["TOE","HEEL","SOCK","SHOE"], connection:"Things worn on the foot"},
      {words:["KNEE","ELBOW","WRIST","ANKLE"], connection:"Joints"},
      {words:["EYE","EAR","NOSE","MOUTH"], connection:"Parts of the face"},
      {words:["HAIR","FUR","FEATHERS","SCALES"], connection:"Animal coverings"}
    ]
  },

  16: {
    id: 16, title: "Connections Puzzle 16",
    groups: [
      {words:["CHEESE","HAM","TURKEY","BACON"], connection:"Sandwich fillings"},
      {words:["WATER","COFFEE","TEA","LEMONADE"], connection:"Drinks"},
      {words:["ICE CREAM","PUDDING","JELLO","SORBET"], connection:"Cold desserts"},
      {words:["KETCHUP","MUSTARD","MAYONNAISE","BBQ SAUCE"], connection:"Condiments"}
    ]
  },

  17: {
    id: 17, title: "Connections Puzzle 17",
    groups: [
      {words:["ORBIT","RING","HALO","AURA"], connection:"Things that can surround something"},
      {words:["CORK","NECK","CAP","LIP"], connection:"Containers or parts associated with bottles"},
      {words:["MINT","BASIL","SAGE","THYME"], connection:"Herbs"},
      {words:["ANCHOR","KEEL","MAST","RUDDER"], connection:"Parts of a ship"}
    ]
  }
};
