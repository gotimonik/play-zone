export type GameCategory = "Action" | "Adventure" | "Arcade" | "Animal" | "Casino" | "Sports" | "Puzzle";
// | "Racing"
// | "Puzzle"
// | "Multiplayer"
// | "Strategy";

export type Game = {
  title: string;
  slug: string;
  sourcePath: string;
  description: string;
  thumbnail: string;
  category: GameCategory;
  iframe_url: string | null;
  tags: string[];
  rating: number;
  featured: boolean;
  trending: boolean;
};

type GameSeed = {
  title: string;
  path: string;
  thumbnail: string;
  iframe_url: string;
  description?: string;
  tags?: string[];
  rating?: number;
  featured?: boolean;
  trending?: boolean;
};

type CuratedGameDetails = Required<Pick<GameSeed, "description" | "tags" | "rating" | "featured" | "trending">>;

export const categoryPaths: Record<GameCategory, string> = {
  Action: "/ActionGames",
  Adventure: "/AdventureGames",
  Animal: "/AnimalGames",
  Arcade: "/ArcadeGames",
  Casino: "/CasinoGames",
  Sports: "/SportsGames",
  Puzzle: "/PuzzleGames",
  // Multiplayer: "/MultiplayerGames",
  // Strategy: "/StrategyGames",
};

export const gameSeeds: Record<GameCategory, GameSeed[]> = {
  Action: [
    {
      title: "Archer Battle",
      path: "/ArcherBattle",
      thumbnail: "/images/archer-battle.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/474299356/index.html",
    },
    {
      title: "Arrows",
      path: "/Arrows",
      thumbnail: "/images/arrows.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/458317523/index.html",
    },
    {
      title: "Chidimar",
      path: "/Chidimar",
      thumbnail: "/images/chidimar.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/495616575/index.html",
    },
    {
      title: "Crazy Cannons",
      path: "/CrazyCannons",
      thumbnail: "/images/crazy-cannons.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/483593235/index.html",
    },
    {
      title: "Deadshot",
      path: "/Deadshot",
      thumbnail: "/images/deadshot.png",
      iframe_url: "https://deadshot.io/",
    },
    {
      title: "Night Scary",
      path: "/NightScary",
      thumbnail: "/images/night-scary.png",
      iframe_url: "https://imaginative-tartufo-3ee4c2.netlify.app/",
    },
    {
      title: "Ninja Time",
      path: "/NinjaTime",
      thumbnail: "/images/ninja-time.png",
      iframe_url: "https://squared0.github.io/Ninja-Time/",
    },
    {
      title: "Rocket Defender",
      path: "/RocketDefender",
      thumbnail: "/images/rocket-defender.png",
      iframe_url: "http://www.sbmgames.com.br/jogos/Rocket_Defende/",
    },
    {
      title: "Space Jet",
      path: "/SpaceJet",
      thumbnail: "/images/space-jet.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/493156869/index.html",
    },
    {
      title: "Swift",
      path: "/Swift",
      thumbnail: "/images/swift.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/493804914/index.html",
    },
    {
      title: "Wizard Magic Fire",
      path: "/WizardMagicFire",
      thumbnail: "/images/wizard-magic-fire.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/488370646/index.html",
    },
    {
      title: "Wobbly Boxing",
      path: "/Boxing",
      thumbnail: "/images/wobbly-boxing.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/438341319/index.html",
    },
  ],
  Adventure: [
    {
      title: "Duo Nether",
      path: "/DuoNether",
      thumbnail: "/images/duo-nether.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/495372833/index.html",
    },
    {
      title: "Line On Hole",
      path: "/LineOnHole",
      thumbnail: "/images/line-on-hole.png",
      iframe_url: "https://squared0.github.io/LineOfHole/",
    },
    {
      title: "Maya Ruins",
      path: "/MayaRuins",
      thumbnail: "/images/maya-ruins.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/473062732/index.html",
    },
    {
      title: "Melody’s Adventure",
      path: "/MelodysAdventure",
      thumbnail: "/images/melodys-adventure.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/490378704/index.html",
    },
    {
      title: "Mystic Blocks",
      path: "/MysticBlocks",
      thumbnail: "/images/mystic-blocks.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/493212979/index.html",
    },
    {
      title: "NOEL Navigates",
      path: "/NoelNavigates",
      thumbnail: "/images/noel-navigates.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/478627992/index.html",
    },
    {
      title: "Snowland",
      path: "/Snowland",
      thumbnail: "/images/snowland.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/496303910/index.html",
    },
    {
      title: "Super Bitcoin Boy",
      path: "/SuperBitcoinBoy",
      thumbnail: "/images/super-bitcoin-boy.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/495237029/index.html",
    },
    {
      title: "Treasures Jungle",
      path: "/TreasuresJungle",
      thumbnail: "/images/treasures-jungle.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/471183880/index.html",
    },
    {
      title: "Two Sides",
      path: "/TwoSides",
      thumbnail: "/images/two-sides.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/493053322/index.html",
    },
  ],
  Animal: [
    {
      title: "Click Animals",
      path: "/ClickAnimals",
      thumbnail: "/images/click-animals.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/494829810/index.html",
    },
    {
      title: "Collect Animal",
      path: "/CollectAnimal",
      thumbnail: "/images/collect-animal.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/446357557/index.html",
    },
    {
      title: "Dino Click",
      path: "/DinoClick",
      thumbnail: "/images/dino-click.png",
      iframe_url: "https://squared0.github.io/Dino-Click/",
    },
    {
      title: "Doge Blocks",
      path: "/DogeBlocks",
      thumbnail: "/images/doge-blocks.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/452874886/index.html",
    },
    {
      title: "Dogs Puzzle",
      path: "/DogsPuzzle",
      thumbnail: "/images/dogs-puzzle.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/447863966/index.html",
    },
    {
      title: "Find My",
      path: "/FindMyDog",
      thumbnail: "/images/find-my-dog.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/449148902/index.html",
    },
    {
      title: "Fishes",
      path: "/Fishes",
      thumbnail: "/images/fishes.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/460118711/index.html",
    },
    {
      title: "Happy Snake",
      path: "/HappySnake",
      thumbnail: "/images/happy-snake.png",
      iframe_url: "https://pricklegames.cloud/Games/BigGames/HappySnake2HTML5/index.html",
    },
    {
      title: "Kitty Run",
      path: "/KittyRun",
      thumbnail: "/images/kitty-run.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/495003891/index.html",
    },
    {
      title: "Moles",
      path: "/Moles",
      thumbnail: "/images/moles.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/460570956/index.html",
    },
  ],
  Arcade: [
    {
      title: "Ball Blast",
      path: "/BallBlast",
      thumbnail: "/images/ball-blast.png",
      iframe_url: "https://thezgame.com/Games/BallBlast/index.html",
    },
    {
      title: "Candy Dash",
      path: "/CandyDash",
      thumbnail: "/images/candy-dash.png",
      iframe_url: "https://candydash.netlify.app/",
    },
    {
      title: "Crazy Journey",
      path: "/CrazyJourney",
      thumbnail: "/images/crazy-journey.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/494914770/index.html",
    },
    {
      title: "Crazy Monkey",
      path: "/CrazyMonkey",
      thumbnail: "/images/crazy-monkey.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/348452483/index.html",
    },
    {
      title: "Creepy Flappy",
      path: "/CreepyFlappy",
      thumbnail: "/images/creepy-flappy.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/348147403/index.html",
    },
    {
      title: "Gap",
      path: "/Gap",
      thumbnail: "/images/gap.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/494563789/index.html",
    },
    {
      title: "Pet Crush",
      path: "/PetCrush",
      thumbnail: "/images/pet-crush.png",
      iframe_url: "https://pet-crush.netlify.app/",
    },
    {
      title: "Power Off",
      path: "/PowerOff",
      thumbnail: "/images/power-off.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/497636212/index.html",
    },
    {
      title: "Save Ball",
      path: "/SaveBall",
      thumbnail: "/images/save-ball.png",
      iframe_url: "https://thezgame.com/Games/Saveball/index.html",
    },
    {
      title: "Slot Astro",
      path: "/SlotAstro",
      thumbnail: "/images/slot-astro.png",
      iframe_url: "https://showcase.tegagame.com/games/slot-astro/",
    },
    {
      title: "Slot Cowboys",
      path: "/SlotCowboys",
      thumbnail: "/images/slot-cowboys.png",
      iframe_url: "https://showcase.tegagame.com/games/slot-cowboys/",
    },
    {
      title: "Slot Fruits",
      path: "/SlotFruits",
      thumbnail: "/images/slot-fruits.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/495285848/index.html",
    },
    {
      title: "Speed Neon",
      path: "/SpeedNeon",
      thumbnail: "/images/speed-neon.png",
      iframe_url: "http://www.sbmgames.com.br/jogos/speedneon/",
    },
    {
      title: "Spinning Ball",
      path: "/SpinningBall",
      thumbnail: "/images/spinning-ball.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/482688865/index.html",
    },
    {
      title: "StickBoys Xmas",
      path: "/StickBoysXmas",
      thumbnail: "/images/stickboys-xmas.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/497944931/index.html",
    },
  ],
  Casino: [
    {
      title: "Cashify",
      path: "/Cashify",
      thumbnail: "/images/cashify.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/450373694/index.html",
    },
    {
      title: "Four Colors",
      path: "/FourColors",
      thumbnail: "/images/four-colors.png",
      iframe_url: "https://demonisblack.com/code/2024/fourcolors/game/",
    },
    {
      title: "Slot Astro",
      path: "/SlotAstro",
      thumbnail: "/images/slot-astro.png",
      iframe_url: "https://showcase.tegagame.com/games/slot-astro/",
    },
    {
      title: "Slot Cowboys",
      path: "/SlotCowboys",
      thumbnail: "/images/slot-cowboys.png",
      iframe_url: "https://showcase.tegagame.com/games/slot-cowboys/",
    },
    {
      title: "Slot Fruits",
      path: "/SlotFruits",
      thumbnail: "/images/slot-fruits.png",
      iframe_url: "https://previews.customer.envatousercontent.com/files/495285848/index.html",
    },
    {
      title: "Slot Kingdom",
      path: "/SlotKingdom",
      thumbnail: "/images/slot-kingdom.png",
      iframe_url: "https://showcase.tegagame.com/games/slot-kingdom-elf/",
    },
    {
      title: "Slot Kites",
      path: "/SlotKites",
      thumbnail: "/images/slot-kites.png",
      iframe_url: "https://showcase.tegagame.com/games/slot-kites/",
    },
    {
      title: "Slot Shadow Forest",
      path: "/SlotShadowForest",
      thumbnail: "/images/slot-shadow-forest.png",
      iframe_url: "https://showcase.tegagame.com/games/shadow-forest/",
    },
  ],
  Sports: [
    {
      title: "Cricket Score Counter",
      path: "/CricketScoreCounter",
      thumbnail: "/images/cricket-score-counter.png",
      iframe_url: "https://cricket-score-counter.com",
    },
  ],
  Puzzle: [
    {
      title: "Arrow Puzzle: Tap Puzzle Games",
      path: "/ArrowPuzzleTapPuzzleGames",
      thumbnail: "/images/arrow-puzzle-tap-puzzle-games.svg",
      iframe_url: "/local-games/arrow-puzzle-tap-puzzle-games",
      description:
        "Clear the board by tapping arrows only when their path to the edge is open. Every move matters as blocked arrows add pressure and later levels expand the grid.",
      tags: ["puzzle", "arrows", "tap", "logic", "brain"],
      rating: 4.8,
      featured: true,
      trending: true,
    },
    {
      title: "Mind Games",
      path: "/MindGames",
      thumbnail: "/images/mind-games.svg",
      iframe_url: "/local-games/mind-games",
      description:
        "Train your memory by watching a random color pattern, then repeating it back in the same order. Each cleared round adds a new random step to the sequence.",
      tags: ["puzzle", "memory", "pattern", "focus", "brain"],
      rating: 4.9,
      featured: true,
      trending: true,
    },
    {
      title: "Interested Games",
      path: "/InterestedGames",
      thumbnail: "/images/interested-games.svg",
      iframe_url: "/local-games/interested-games",
      description:
        "Match the correct tiles to the current interest prompt and build your score. Wrong picks cost points, so scan the choices before you tap.",
      tags: ["puzzle", "matching", "quiz", "focus", "score"],
      rating: 4.7,
      featured: false,
      trending: true,
    },
  ],
  // Racing: [
  //   // { title: "Asphalt Legend", path: "/AsphaltLegend" },
  //   // { title: "ATV Quad Bike Traffic Rider", path: "/ATVQuadBikeTrafficRider" },
  //   // { title: "Bicycle Stunts Racing 2023", path: "/BicycleStuntsRacing2023" },
  //   // { title: "Bike Stunt Racing Legend", path: "/BikeStuntRacingLegend" },
  //   // { title: "Car Stunt Chipi Chipi Chapa Chapa Cat", path: "/CarStuntChipiChipiChapaChapaCat" },
  //   // { title: "Crazy Cone Sweeper", path: "/CrazyConeSweeper" },
  //   // { title: "Crazy Motorcycle", path: "/CrazyMotorcycle" },
  //   // { title: "Dirt Bike Rally", path: "/DirtBikeRally" },
  //   // { title: "Drift Donut", path: "/DriftDonut" },
  //   // { title: "Drive Mad 2", path: "/DriveMad2" },
  //   // { title: "Drive Zone", path: "/DriveZone" },
  //   // { title: "Extreme Car City Driving", path: "/ExtremeCarCityDriving" },
  //   // { title: "Furious Drift", path: "/FuriousDrift" },
  //   // { title: "GT Formula Championship", path: "/GTFormulaChampionship" },
  //   // { title: "Moto SkyRace Mayhem", path: "/MotoSkyRaceMayhem" },
  //   // { title: "Motor Tour", path: "/MotorTour" },
  //   // { title: "Obby Driver", path: "/ObbyDriver" },
  //   // { title: "Offroad Jeep Hills Driving", path: "/OffroadJeepHillsDriving" },
  //   // { title: "Pixel Racer", path: "/PixelRacer" },
  //   // { title: "Ramp Bus Stunt Simulator", path: "/RampBusStuntSimulator" },
  //   // { title: "Real Drift Racing", path: "/RealDriftRacing" },
  //   // { title: "Real GT Racing Simulator", path: "/RealGTRacingSimulator" },
  //   // { title: "School Bus Driver", path: "/SchoolBusDriver" },
  //   // { title: "Snow Race 3D Fun Racing", path: "/SnowRace3DFunRacing" },
  //   // { title: "Speedy Race Math", path: "/SpeedyRaceMath" },
  //   // { title: "Sports Car Drift", path: "/SportsCarDrift" },
  //   // { title: "Stunt Rider", path: "/StuntRider" },
  //   // { title: "Super Race 3D Running", path: "/SuperRace3DRunning" },
  //   // { title: "Tank Arena Steel Battle", path: "/TankArenaSteelBattle" },
  //   // { title: "Traffic Parking", path: "/TrafficParking" },
  //   // { title: "Truck Simulator Arcade Championship", path: "/TruckSimulatorArcadeChampionship" },
  //   // { title: "Zombie Driver", path: "/ZombieDriver" },
  // ],
  // Puzzle: [
  //   // { title: "100 Doors Escape Mysteries", path: "/100DoorsEscapeMysteries" },
  //   // { title: "2048 Cube Run", path: "/2048CubeRun" },
  //   // { title: "Amazing Digital Circus Puzzles", path: "/AmazingDigitalCircusPuzzles" },
  //   // { title: "Balloon Ascending", path: "/BalloonAscending" },
  //   // { title: "Blocks Stack Rush", path: "/BlocksStackRush" },
  //   // { title: "Brain IQ Test Minecraft Quiz", path: "/BrainIQTestMinecraftQuiz" },
  //   // { title: "Bricklayer", path: "/Bricklayer" },
  //   // { title: "Color Fill 3D Bottle", path: "/ColorFill3DBottle" },
  //   // { title: "Color Match", path: "/ColorMatch" },
  //   // { title: "Connect Image Puzzle", path: "/ConnectImagePuzzle" },
  //   // { title: "Draw and Pass", path: "/DrawandPass" },
  //   // { title: "Draw Logic Puzzle", path: "/DrawLogicPuzzle" },
  //   // { title: "Draw To Smash", path: "/DrawToSmash" },
  //   // { title: "Drop Bricks Breaker", path: "/DropBricksBreaker" },
  //   // { title: "Fill Glass", path: "/FillGlass" },
  //   // { title: "Fruit Party Clicker", path: "/FruitPartyClicker" },
  //   // { title: "Hexa Puzzle Master", path: "/HexaPuzzleMaster" },
  //   // { title: "Home Pin 1", path: "/HomePin1" },
  //   // { title: "Hoop Stack Brain Puzzle Game", path: "/HoopStackBrainPuzzleGame" },
  //   // { title: "Human Vehicle", path: "/HumanVehicle" },
  //   // { title: "Isometric Puzzle", path: "/IsometricPuzzle" },
  //   // { title: "Kids House Cleanup", path: "/KidsHouseCleanup" },
  //   // { title: "Merge Fruits 3D", path: "/MergeFruits3D" },
  //   // { title: "Minecraft Blockman Go", path: "/MinecraftBlockmanGo" },
  //   // { title: "Number Domination", path: "/NumberDomination" },
  //   // { title: "Nuts and Bolts Puzzle", path: "/NutsandBoltsPuzzle" },
  //   // { title: "One Dot Target", path: "/OneDotTarget" },
  //   // { title: "Pipe Match", path: "/PipeMatch" },
  //   // { title: "Pixel Slide Puzzle", path: "/PixelSlidePuzzle" },
  //   // { title: "Pomni Coloring Book", path: "/PomniColoringBook" },
  //   // { title: "Save My Pet Party", path: "/SaveMyPetParty" },
  //   // { title: "Screw Jam Puzzle", path: "/ScrewJamPuzzle" },
  //   // { title: "Shape Whiz", path: "/ShapeWhiz" },
  //   // { title: "Skibidi Elastic Head", path: "/SkibidiElasticHead" },
  //   // { title: "Sort Resort", path: "/SortResort" },
  //   // { title: "Stickman Troll Thief Puzzle", path: "/StickmanTrollThiefPuzzle" },
  //   // { title: "Sudoku Master", path: "/SudokuMaster" },
  //   // { title: "Super Doctor Body Examination", path: "/SuperDoctorBodyExamination" },
  //   // { title: "Swipe Runner Quest", path: "/SwipeRunnerQuest" },
  //   // { title: "Tangram Puzzle 2.0", path: "/TangramPuzzle20" },
  //   // { title: "The Grid", path: "/TheGrid" },
  //   // { title: "Tic Tac Toe", path: "/TicTacToe" },
  //   // { title: "Tower Dance Off", path: "/TowerDanceOff" },
  //   // { title: "Traffic Jam Hop On", path: "/TrafficJamHopOn" },
  //   // { title: "Tricky Arrow 2", path: "/TrickyArrow2" },
  //   // { title: "TrollHead to Face", path: "/TrollHeadtoFace" },
  //   // { title: "Water Sort", path: "/WaterSort" },
  // ],
  // Multiplayer: [
  //   // { title: "2 Player Mini Challenge", path: "/2PlayerMiniChallenge" },
  //   // { title: "4 Colors Multiplayer", path: "/4ColorsMultiplayer" },
  //   // { title: "Basketball Stars", path: "/BasketballStars" },
  //   // { title: "Billiard Blitz Challenge", path: "/BilliardBlitzChallenge" },
  //   // { title: "Chess Duel", path: "/ChessDuel" },
  //   // { title: "Fight Bros", path: "/FightBros" },
  //   // { title: "Fish Eat Getting Big", path: "/FishEatGettingBig" },
  //   // { title: "Geometry Vibes 3D", path: "/GeometryVibes3D" },
  //   // { title: "Ludo King Dice Club", path: "/LudoKingDiceClub" },
  //   // { title: "Mini Duels Battle", path: "/MiniDuelsBattle" },
  //   // { title: "Noob vs Pro Super Hero", path: "/NoobvsProSuperHero" },
  //   // { title: "Obby Prison Craft Escape", path: "/ObbyPrisonCraftEscape" },
  //   // { title: "Ragdoll Football 2 Players", path: "/RagdollFootball2Players" },
  //   // { title: "Red and Blue Hugli Wugli", path: "/RedandBlueHugliWugli" },
  //   // { title: "Sprunki Challenge", path: "/SprunkiChallenge" },
  //   // { title: "Squid Game Sprunki Hide", path: "/SquidGameSprunkiHide" },
  //   // { title: "Stickman Battle Fighting", path: "/StickmanBattleFighting" },
  //   // { title: "Supermarket Master", path: "/SupermarketMaster" },
  //   // { title: "Table Tennis Open", path: "/TableTennisOpen" },
  //   // { title: "Tic Tac Toe Multiplayer", path: "/TicTacToeMultiplayer" },
  //   // { title: "Volleyball Challenge", path: "/VolleyballChallenge" },
  //   // { title: "World Cricket Champ", path: "/WorldCricketChamp" },
  // ],
  // Strategy: [
  //   // { title: "Age of War", path: "/AgeofWar" },
  //   // { title: "Castle Keeper", path: "/CastleKeeper" },
  //   // { title: "Clash Of Vikings", path: "/ClashOfVikings" },
  //   // { title: "Idle Mining Empire", path: "/IdleMiningEmpire" },
  //   // { title: "Kingdom Defense Chaos Time", path: "/KingdomDefenseChaosTime" },
  //   // { title: "Merge Master Army Clash", path: "/MergeMasterArmyClash" },
  //   // { title: "Stickman Team Return", path: "/StickmanTeamReturn" },
  //   // { title: "Tower Defense", path: "/TowerDefense" },
  //   // { title: "Zombie Siege Outbreak", path: "/ZombieSiegeOutbreak" },
  // ],
};

const categoryTheme: Record<
  GameCategory,
  { from: string; via: string; to: string; accent: string }
> = {
  Action: { from: "#1d1238", via: "#6d1a45", to: "#ef4444", accent: "#67e8f9" },
  Adventure: { from: "#052e2b", via: "#0f766e", to: "#84cc16", accent: "#fde68a" },
  Animal: { from: "#1a1a1a", via: "#4d4d4d", to: "#b3b3b3", accent: "#ffcc00" },
  Arcade: { from: "#111827", via: "#7c3aed", to: "#ec4899", accent: "#7dd3fc" },
  Casino: { from: "#000000", via: "#1a1a1a", to: "#333333", accent: "#ffcc00" },
  Sports: { from: "#0f172a", via: "#1e293b", to: "#334155", accent: "#ffcc00" },
  Puzzle: { from: "#12312f", via: "#365314", to: "#f59e0b", accent: "#67e8f9" },
  // Racing: { from: "#0f172a", via: "#334155", to: "#f97316", accent: "#fef08a" },
  // Racing: { from: "#0f172a", via: "#334155", to: "#f97316", accent: "#fef08a" },
  // Multiplayer: { from: "#312e81", via: "#4f46e5", to: "#06b6d4", accent: "#bef264" },
  // Strategy: { from: "#1f2937", via: "#57534e", to: "#d97706", accent: "#c4b5fd" },
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function descriptionFor(title: string, category: GameCategory) {
  return `Play ${title} online in the ${category.toLowerCase()} collection with an instant thumbnail preview, fast iframe loading, and related ${category.toLowerCase()} games on the same page.`;
}

function tagsFor(title: string, category: GameCategory) {
  return Array.from(new Set([
    slugify(category),
    ...title
      .split(/\s+/)
      .map((word) => slugify(word))
      .filter((word) => word.length > 2)
      .slice(0, 3),
  ]));
}

const curatedGameDetails: Record<string, CuratedGameDetails> = {
  "Archer Battle": {
    description:
      "Step into a quick archery duel where timing, aim, and clean shots decide each round. Line up your bow, read the angle, and land hits before your rival takes control.",
    tags: ["action", "archery", "duel", "aim", "battle"],
    rating: 4.8,
    featured: true,
    trending: true,
  },
  Arrows: {
    description:
      "Guide your reflexes through a fast arrow challenge built around timing and direction changes. Stay sharp, react quickly, and keep the run alive as the pace climbs.",
    tags: ["action", "arrows", "reflex", "timing", "skill"],
    rating: 4.7,
    featured: true,
    trending: true,
  },
  Chidimar: {
    description:
      "Jump into a snappy action game with simple controls and rapid scoring moments. Track your target, move with intent, and chase a cleaner run each attempt.",
    tags: ["action", "arcade", "target", "quick", "score"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  "Crazy Cannons": {
    description:
      "Fire heavy cannon shots, judge the arc, and break through each challenge with careful aim. Every blast rewards better timing and a sharper sense of distance.",
    tags: ["action", "cannons", "shooting", "physics", "aim"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  Deadshot: {
    description:
      "Play a tense shooter focused on precision, movement, and fast reactions. Keep your crosshair steady, control each encounter, and survive the pressure.",
    tags: ["action", "shooter", "precision", "fps", "combat"],
    rating: 4.8,
    featured: false,
    trending: true,
  },
  "Night Scary": {
    description:
      "Enter a dark action experience with eerie atmosphere and sudden threats. Move carefully, react fast, and push through the night without losing your nerve.",
    tags: ["action", "scary", "night", "survival", "horror"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Ninja Time": {
    description:
      "Dash through a ninja platform challenge where timing is everything. Leap, dodge, and strike with rhythm as each stage asks for sharper control.",
    tags: ["action", "ninja", "platform", "timing", "dash"],
    rating: 4.7,
    featured: false,
    trending: false,
  },
  "Rocket Defender": {
    description:
      "Defend your zone from incoming danger with quick launches and smart positioning. Prioritize threats, fire at the right moment, and protect the base.",
    tags: ["action", "rocket", "defense", "shooting", "survival"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "Space Jet": {
    description:
      "Pilot a jet through space hazards and high-speed action. Keep control in tight lanes, dodge incoming threats, and chase a longer flight.",
    tags: ["action", "space", "jet", "flight", "dodge"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  Swift: {
    description:
      "Take on a speed-first action challenge that rewards clean reactions and confident movement. Stay light, avoid mistakes, and keep the momentum rolling.",
    tags: ["action", "speed", "reflex", "runner", "skill"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Wizard Magic Fire": {
    description:
      "Cast fire magic through a fantasy action challenge packed with quick attacks and glowing effects. Time each spell and clear threats before they close in.",
    tags: ["action", "wizard", "magic", "fire", "fantasy"],
    rating: 4.7,
    featured: false,
    trending: false,
  },
  "Wobbly Boxing": {
    description:
      "Trade wobbly punches in a playful boxing match where movement is half the fight. Step in, swing well, and use timing to outlast your opponent.",
    tags: ["action", "boxing", "sports", "duel", "physics"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "Duo Nether": {
    description:
      "Adventure through a nether-style world built for coordinated movement and careful jumps. Navigate hazards, collect progress, and keep both heroes moving.",
    tags: ["adventure", "duo", "platform", "nether", "coop"],
    rating: 4.8,
    featured: true,
    trending: true,
  },
  "Line On Hole": {
    description:
      "Solve a clean adventure puzzle by guiding the line toward the right path. Read the route, avoid wrong turns, and finish each board with precision.",
    tags: ["adventure", "line", "puzzle", "path", "logic"],
    rating: 4.7,
    featured: true,
    trending: true,
  },
  "Maya Ruins": {
    description:
      "Explore ancient ruins filled with traps, platforms, and hidden routes. Move carefully through each chamber and uncover the path forward.",
    tags: ["adventure", "maya", "ruins", "platform", "explore"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  "Melody’s Adventure": {
    description:
      "Join Melody on a bright platform adventure with collectibles, jumps, and cheerful stage flow. Keep moving, avoid hazards, and reach the finish cleanly.",
    tags: ["adventure", "melody", "platform", "collect", "journey"],
    rating: 4.7,
    featured: false,
    trending: true,
  },
  "Mystic Blocks": {
    description:
      "Enter a mystical block challenge where placement and timing shape the route ahead. Think through each move and use the board to your advantage.",
    tags: ["adventure", "blocks", "mystic", "logic", "puzzle"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "NOEL Navigates": {
    description:
      "Guide Noel through a festive adventure of platforms, timing, and route choices. Keep your jumps tidy and steer through each wintery obstacle.",
    tags: ["adventure", "noel", "winter", "platform", "navigate"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  Snowland: {
    description:
      "Travel across a snowy platform world where slippery timing and careful jumps matter. Navigate icy paths and keep the adventure moving forward.",
    tags: ["adventure", "snow", "platform", "winter", "journey"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "Super Bitcoin Boy": {
    description:
      "Run through a coin-chasing platform adventure with retro energy and crypto-themed pickups. Jump cleanly, collect rewards, and avoid stage hazards.",
    tags: ["adventure", "bitcoin", "platform", "coins", "retro"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Treasures Jungle": {
    description:
      "Search the jungle for treasure while crossing obstacles and hidden paths. Time your moves, collect what you can, and push deeper into the wild.",
    tags: ["adventure", "jungle", "treasure", "explore", "platform"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "Two Sides": {
    description:
      "Switch your thinking between two sides of a clever adventure layout. Watch both spaces, time each move, and solve the stage with balance.",
    tags: ["adventure", "two-sides", "puzzle", "switch", "timing"],
    rating: 4.7,
    featured: false,
    trending: false,
  },
  "Click Animals": {
    description:
      "Tap the right animals quickly in a light, friendly challenge for all ages. Build your score by staying focused and reacting to each target.",
    tags: ["animal", "click", "tap", "family", "score"],
    rating: 4.8,
    featured: true,
    trending: true,
  },
  "Collect Animal": {
    description:
      "Gather animals across a simple collection challenge with bright feedback and easy controls. Move smartly, collect more, and improve each run.",
    tags: ["animal", "collect", "arcade", "family", "score"],
    rating: 4.7,
    featured: true,
    trending: true,
  },
  "Dino Click": {
    description:
      "Click with your dino companion and build progress through quick taps. It is simple, fast, and made for short score-chasing sessions.",
    tags: ["animal", "dino", "clicker", "tap", "casual"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  "Doge Blocks": {
    description:
      "Solve a cute doge block puzzle by arranging pieces and clearing space. Think ahead, place carefully, and keep the board open.",
    tags: ["animal", "doge", "blocks", "puzzle", "logic"],
    rating: 4.7,
    featured: false,
    trending: true,
  },
  "Dogs Puzzle": {
    description:
      "Enjoy a dog-themed puzzle with friendly visuals and satisfying problem solving. Match, move, or arrange the pieces to complete each challenge.",
    tags: ["animal", "dogs", "puzzle", "cute", "logic"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "Find My": {
    description:
      "Search carefully through a dog-themed scene and spot what is missing. Look for clues, compare details, and find the target before moving on.",
    tags: ["animal", "find", "dog", "hidden", "search"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  Fishes: {
    description:
      "Swim through a fish-filled challenge with simple controls and cheerful pacing. Avoid danger, collect what you need, and keep moving through the water.",
    tags: ["animal", "fish", "water", "arcade", "dodge"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Happy Snake": {
    description:
      "Guide a cheerful snake, collect food, and grow without crashing into yourself. Plan turns early and keep the board under control.",
    tags: ["animal", "snake", "classic", "arcade", "collect"],
    rating: 4.8,
    featured: false,
    trending: false,
  },
  "Kitty Run": {
    description:
      "Run with a quick kitty through obstacles and pickups. Jump at the right time, avoid hazards, and chase a smooth distance record.",
    tags: ["animal", "kitty", "run", "runner", "jump"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  Moles: {
    description:
      "React fast as moles pop up across the board. Tap the targets, avoid wasted moves, and keep your streak going.",
    tags: ["animal", "moles", "tap", "reflex", "score"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Ball Blast": {
    description:
      "Blast falling balls into smaller pieces while dodging the chaos. Upgrade your rhythm, aim upward, and survive longer each run.",
    tags: ["arcade", "ball", "blast", "shooter", "survival"],
    rating: 4.8,
    featured: true,
    trending: true,
  },
  "Candy Dash": {
    description:
      "Dash through a colorful candy challenge built for quick reactions and score chasing. Match the pace, avoid mistakes, and keep the sugar rush going.",
    tags: ["arcade", "candy", "dash", "casual", "score"],
    rating: 4.7,
    featured: true,
    trending: true,
  },
  "Crazy Journey": {
    description:
      "Take a lively arcade journey packed with movement, hazards, and quick decisions. Keep control through each stretch and push for a better run.",
    tags: ["arcade", "journey", "runner", "dodge", "score"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  "Crazy Monkey": {
    description:
      "Swing into a playful monkey arcade challenge with lively movement and fast scoring. Stay alert, time each action, and keep the fun rolling.",
    tags: ["arcade", "monkey", "jump", "casual", "score"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  "Creepy Flappy": {
    description:
      "Tap through a creepy flappy-style challenge where every gap tests your timing. Stay steady, avoid the edges, and chase a higher score.",
    tags: ["arcade", "flappy", "creepy", "tap", "timing"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  Gap: {
    description:
      "Slip through moving gaps in a clean reflex challenge. Read the spacing, time your move, and stay alive as the pattern tightens.",
    tags: ["arcade", "gap", "reflex", "timing", "dodge"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Pet Crush": {
    description:
      "Match colorful pet tiles in a cheerful crush-style puzzle arcade game. Chain smart moves, clear objectives, and keep the board lively.",
    tags: ["arcade", "pet", "match", "puzzle", "casual"],
    rating: 4.7,
    featured: false,
    trending: false,
  },
  "Power Off": {
    description:
      "Solve quick arcade challenges by switching power at the right moment. Watch the layout, choose the timing, and clear each stage cleanly.",
    tags: ["arcade", "power", "switch", "logic", "timing"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Save Ball": {
    description:
      "Protect the ball through obstacle-filled stages with careful movement and timing. Keep it safe, avoid traps, and finish the run.",
    tags: ["arcade", "ball", "save", "dodge", "skill"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "Slot Astro": {
    description:
      "Spin a space-themed slot machine with bright symbols and fast rounds. Watch the reels, line up matches, and enjoy a cosmic casino break.",
    tags: ["casino", "slot", "astro", "reels", "space"],
    rating: 4.7,
    featured: true,
    trending: true,
  },
  "Slot Cowboys": {
    description:
      "Try a western slot experience filled with cowboy symbols and classic reel action. Spin for matching lines and chase the next payout.",
    tags: ["casino", "slot", "cowboy", "western", "reels"],
    rating: 4.6,
    featured: true,
    trending: true,
  },
  "Slot Fruits": {
    description:
      "Play a fruit slot with familiar symbols, quick spins, and simple casino pacing. Line up fruit combinations and keep the reels moving.",
    tags: ["casino", "slot", "fruits", "reels", "classic"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  "Speed Neon": {
    description:
      "Race through a neon speed challenge where reaction time and clean steering matter. Avoid traffic, hold your line, and chase distance.",
    tags: ["arcade", "speed", "neon", "racing", "dodge"],
    rating: 4.7,
    featured: false,
    trending: false,
  },
  "Spinning Ball": {
    description:
      "Control a spinning ball through a compact arcade test of timing and balance. Keep it moving, avoid bad angles, and clear each challenge.",
    tags: ["arcade", "ball", "spin", "timing", "skill"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "StickBoys Xmas": {
    description:
      "Help the StickBoys through a festive Christmas adventure with platform timing and teamwork energy. Move carefully and reach the goal.",
    tags: ["arcade", "xmas", "stickboys", "platform", "winter"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  Cashify: {
    description:
      "Play a quick casino-style cash game with simple rounds and satisfying payout feedback. Make each spin count and watch the rewards stack.",
    tags: ["casino", "cash", "spin", "rewards", "casual"],
    rating: 4.6,
    featured: false,
    trending: true,
  },
  "Four Colors": {
    description:
      "Play a fast card game built around colors, matching, and smart hand management. Match the top card, use action cards wisely, and empty your hand first.",
    tags: ["casino", "cards", "colors", "strategy", "multiplayer"],
    rating: 4.8,
    featured: true,
    trending: true,
  },
  "Slot Kingdom": {
    description:
      "Spin through a fantasy kingdom slot with royal symbols and polished reel action. Chase combinations and enjoy a bright casino session.",
    tags: ["casino", "slot", "kingdom", "fantasy", "reels"],
    rating: 4.7,
    featured: false,
    trending: true,
  },
  "Slot Kites": {
    description:
      "Try a colorful kite-themed slot game with breezy visuals and quick spins. Line up symbols and keep the reels floating.",
    tags: ["casino", "slot", "kites", "reels", "casual"],
    rating: 4.5,
    featured: false,
    trending: false,
  },
  "Slot Shadow Forest": {
    description:
      "Enter a shadowy forest slot with moody symbols and atmospheric reel play. Spin for matching lines and unlock a darker casino vibe.",
    tags: ["casino", "slot", "forest", "shadow", "reels"],
    rating: 4.6,
    featured: false,
    trending: false,
  },
  "Cricket Score Counter": {
    description:
      "Track cricket runs, wickets, and match flow with a focused score counter. It is a handy sports tool for casual play, practice, and local games.",
    tags: ["sports", "cricket", "score", "counter", "match"],
    rating: 4.8,
    featured: true,
    trending: true,
  },
  "Arrow Puzzle: Tap Puzzle Games": {
    description:
      "Clear the board by tapping arrows only when their path to the edge is open. Every move matters as blocked arrows add pressure and later levels expand the grid.",
    tags: ["puzzle", "arrows", "tap", "logic", "brain"],
    rating: 4.8,
    featured: true,
    trending: true,
  },
  "Mind Games": {
    description:
      "Train your memory by watching a random color pattern, then repeating it back in the same order. Each cleared round adds a new random step to the sequence.",
    tags: ["puzzle", "memory", "pattern", "focus", "brain"],
    rating: 4.9,
    featured: true,
    trending: true,
  },
  "Interested Games": {
    description:
      "Match the correct tiles to the current interest prompt and build your score. Wrong picks cost points, so scan the choices before you tap.",
    tags: ["puzzle", "matching", "quiz", "focus", "score"],
    rating: 4.7,
    featured: false,
    trending: true,
  },
};

function thumbnailFor(title: string, category: GameCategory) {
  const theme = categoryTheme[category];
  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0]?.toUpperCase())
    .join("");
  const escapedTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${theme.from}"/>
<stop offset="0.52" stop-color="${theme.via}"/>
<stop offset="1" stop-color="${theme.to}"/>
</linearGradient>
<radialGradient id="glow" cx="72%" cy="28%" r="55%">
<stop offset="0" stop-color="${theme.accent}" stop-opacity="0.9"/>
<stop offset="1" stop-color="${theme.accent}" stop-opacity="0"/>
</radialGradient>
</defs>
<rect width="640" height="400" rx="28" fill="url(#bg)"/>
<rect width="640" height="400" fill="url(#glow)"/>
<path d="M0 292 C132 248 198 344 320 292 C450 236 506 304 640 250 L640 400 L0 400 Z" fill="#020617" opacity="0.42"/>
<g fill="none" stroke="${theme.accent}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
<path d="M218 177 h204 c36 0 65 29 65 65 s-29 65-65 65 c-28 0-43-20-62-36 h-80 c-19 16-34 36-62 36 c-36 0-65-29-65-65 s29-65 65-65Z"/>
<path d="M226 226 h54 M253 199 v54 M389 218 h2 M431 252 h2"/>
</g>
<circle cx="320" cy="114" r="66" fill="#ffffff" opacity="0.14"/>
<text x="320" y="136" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="900" fill="#fff">${initials}</text>
<text x="40" y="318" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" fill="${theme.accent}" letter-spacing="4">${category.toUpperCase()}</text>
<text x="40" y="356" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="900" fill="#fff">${escapedTitle}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const games: Game[] = Object.entries(gameSeeds).flatMap(([category, seeds], categoryIndex) =>
  seeds.map((seed, index) => {
    const details = curatedGameDetails[seed.title];

    return {
      title: seed.title,
      slug: slugify(seed.title),
      sourcePath: seed.path,
      description: seed.description || details?.description || descriptionFor(seed.title, category as GameCategory),
      thumbnail: seed.thumbnail || thumbnailFor(seed.title, category as GameCategory),
      category: category as GameCategory,
      iframe_url: seed.iframe_url || null,
      tags: seed.tags || details?.tags || tagsFor(seed.title, category as GameCategory),
      rating:
        seed.rating ?? details?.rating ?? Number((4.9 - ((index + categoryIndex) % 7) * 0.1).toFixed(1)),
      featured: seed.featured ?? details?.featured ?? index < 2,
      trending: seed.trending ?? details?.trending ?? index < 4,
    };
  }),
);

export const categories = Object.keys(gameSeeds) as GameCategory[];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug || slugify(game.sourcePath) === slug);
}

export function getGameBySourcePath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return games.find((game) => game.sourcePath.toLowerCase() === normalized.toLowerCase());
}

export function getCategoryBySourcePath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return categories.find(
    (category) => categoryPaths[category].toLowerCase() === normalized.toLowerCase(),
  );
}

export function getGamesByCategory(categorySlug: string) {
  return games.filter((game) => slugify(game.category) === categorySlug);
}

export function searchGames(query: string) {
  const term = query.trim().toLowerCase();
  if (!term) return games;
  return games.filter((game) =>
    [game.title, game.description, game.category, game.sourcePath, ...game.tags].some((value) =>
      value.toLowerCase().includes(term),
    ),
  );
}

export function getRelatedGames(game: Game, limit = 10) {
  return games
    .filter((candidate) => candidate.slug !== game.slug && candidate.category === game.category)
    .slice(0, limit);
}
