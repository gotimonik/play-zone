export type GameCategory =
  | "Action"
  | "Adventure"
  | "Arcade"
  | "Animal";
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
  thumbnail?: string;
};

export const categoryPaths: Record<GameCategory, string> = {
  Action: "/ActionGames",
  Adventure: "/AdventureGames",
  Animal: "/AnimalGames",
  Arcade: "/ArcadeGames",
  // Racing: "/RacingGames",
  // Puzzle: "/PuzzleGames",
  // Multiplayer: "/MultiplayerGames",
  // Strategy: "/StrategyGames",
};

const gameSeeds: Record<GameCategory, GameSeed[]> = {
  Action: [
    { title: "Archer Battle", path: "/ArcherBattle", thumbnail: "/images/archer-battle.png" },
    { title: "Arrows", path: "/Arrows", thumbnail: "/images/arrows.png" },
    { title: "Chidimar", path: "/Chidimar", thumbnail: "/images/chidimar.png" },
    { title: "Crazy Cannons", path: "/CrazyCannons", thumbnail: "/images/crazy-cannons.png" },
    { title: "Deadshot", path: "/Deadshot", thumbnail: "/images/deadshot.png" },
    { title: "Night Scary", path: "/NightScary", thumbnail: "/images/night-scary.png" },
    { title: "Ninja Time", path: "/NinjaTime", thumbnail: "/images/ninja-time.png" },
    { title: "Rocket Defender", path: "/RocketDefender", thumbnail: "/images/rocket-defender.png" },
    { title: "Space Jet", path: "/SpaceJet", thumbnail: "/images/space-jet.png" },
    { title: "Swift", path: "/Swift", thumbnail: "/images/swift.png" },
    {
      title: "Wizard Magic Fire",
      path: "/WizardMagicFire",
      thumbnail: "/images/wizard-magic-fire.png",
    },
    { title: "Wobbly Boxing", path: "/Boxing", thumbnail: "/images/wobbly-boxing.png" },
  ],
  Adventure: [
    { title: "Duo Nether", path: "/DuoNether", thumbnail: "/images/duo-nether.png" },
    { title: "Line On Hole", path: "/LineOnHole", thumbnail: "/images/line-on-hole.png" },
    { title: "Maya Ruins", path: "/MayaRuins", thumbnail: "/images/maya-ruins.png" },
    { title: "Melody’s Adventure", path: "/MelodysAdventure", thumbnail: "/images/melodys-adventure.png" },
    { title: "Mystic Blocks", path: "/MysticBlocks", thumbnail: "/images/mystic-blocks.png" },
    { title: "NOEL Navigates", path: "/NoelNavigates", thumbnail: "/images/noel-navigates.png" },
    { title: "Snowland", path: "/Snowland", thumbnail: "/images/snowland.png" },
    { title: "Super Bitcoin Boy", path: "/SuperBitcoinBoy", thumbnail: "/images/super-bitcoin-boy.png" },
    { title: "Treasures Jungle", path: "/TreasuresJungle", thumbnail: "/images/treasures-jungle.png" },
    { title: "Two Sides", path: "/TwoSides", thumbnail: "/images/two-sides.png" },
  ],
  Animal: [
    { title: "Click Animals", path: "/ClickAnimals", thumbnail: "/images/click-animals.png" },
    { title: "Collect Animal", path: "/CollectAnimal", thumbnail: "/images/collect-animal.png" },
    { title: "Dino Click", path: "/DinoClick", thumbnail: "/images/dino-click.png" },
    { title: "Doge Blocks", path: "/DogeBlocks", thumbnail: "/images/doge-blocks.png" },
    { title: "Dogs Puzzle", path: "/DogsPuzzle", thumbnail: "/images/dogs-puzzle.png" },
    { title: "Find My", path: "/FindMyDog", thumbnail: "/images/find-my-dog.png" },
    { title: "Fishes", path: "/Fishes", thumbnail: "/images/fishes.png" },
    { title: "Happy Snake", path: "/HappySnake", thumbnail: "/images/happy-snake.png" },
    { title: "Kitty Run", path: "/KittyRun", thumbnail: "/images/kitty-run.png" },
    { title: "Moles", path: "/Moles", thumbnail: "/images/moles.png" },
  ],
  Arcade: [
    { title: "Ball Blast", path: "/BallBlast", thumbnail: "/images/ball-blast.png" },
    { title: "Candy Dash", path: "/CandyDash", thumbnail: "/images/candy-dash.png" },
    { title: "Crazy Journey", path: "/CrazyJourney", thumbnail: "/images/crazy-journey.png" },
    { title: "Crazy Monkey", path: "/CrazyMonkey", thumbnail: "/images/crazy-monkey.png" },
    { title: "Creepy Flappy", path: "/CreepyFlappy", thumbnail: "/images/creepy-flappy.png" },
    { title: "Gap", path: "/Gap", thumbnail: "/images/gap.png" },
    { title: "Pet Crush", path: "/PetCrush", thumbnail: "/images/pet-crush.png" },
    { title: "Power Off", path: "/PowerOff", thumbnail: "/images/power-off.png" },
    { title: "Save Ball", path: "/SaveBall", thumbnail: "/images/save-ball.png" },
    { title: "Slot Astro", path: "/SlotAstro", thumbnail: "/images/slot-astro.png" },
    { title: "Slot Cowboys", path: "/SlotCowboys", thumbnail: "/images/slot-cowboys.png" },
    { title: "Slot Fruits", path: "/SlotFruits", thumbnail: "/images/slot-fruits.png" },
    { title: "Speed Neon", path: "/SpeedNeon", thumbnail: "/images/speed-neon.png" },
    { title: "Spinning Ball", path: "/SpinningBall", thumbnail: "/images/spinning-ball.png" },
    { title: "StickBoys Xmas", path: "/StickBoysXmas", thumbnail: "/images/stickboys-xmas.png" },
    { title: "Stoneman", path: "/Stoneman", thumbnail: "/images/stoneman.png" },
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

const extractedIframePaths: Record<string, string> = {
  "/ArcherBattle": "https://previews.customer.envatousercontent.com/files/474299356/index.html",
  "/Arrows": "https://previews.customer.envatousercontent.com/files/458317523/index.html",
  "/Chidimar": "https://previews.customer.envatousercontent.com/files/495616575/index.html",
  "/CrazyCannons": "https://previews.customer.envatousercontent.com/files/483593235/index.html",
  "/Deadshot": "https://deadshot.io/",
  "/NightScary": "https://imaginative-tartufo-3ee4c2.netlify.app/",
  "/NinjaTime": "https://squared0.github.io/Ninja-Time/",
  "/RocketDefender": "http://www.sbmgames.com.br/jogos/Rocket_Defende/",
  "/SpaceJet": "https://previews.customer.envatousercontent.com/files/493156869/index.html",
  "/Swift": "https://previews.customer.envatousercontent.com/files/493804914/index.html",
  "/WizardMagicFire": "https://previews.customer.envatousercontent.com/files/488370646/index.html",
  "/Boxing": "https://previews.customer.envatousercontent.com/files/438341319/index.html",
  "/DuoNether": "https://previews.customer.envatousercontent.com/files/495372833/index.html",
  "/LineOnHole": "https://squared0.github.io/LineOfHole/",
  "/MayaRuins": "https://previews.customer.envatousercontent.com/files/473062732/index.html",
  "/MelodysAdventure": "https://previews.customer.envatousercontent.com/files/490378704/index.html",
  "/MysticBlocks": "https://previews.customer.envatousercontent.com/files/493212979/index.html",
  "/NoelNavigates": "https://previews.customer.envatousercontent.com/files/478627992/index.html",
  "/Snowland": "https://previews.customer.envatousercontent.com/files/496303910/index.html",
  "/SuperBitcoinBoy": "https://previews.customer.envatousercontent.com/files/495237029/index.html",
  "/TreasuresJungle": "https://previews.customer.envatousercontent.com/files/471183880/index.html",
  "/TwoSides": "https://previews.customer.envatousercontent.com/files/493053322/index.html",
  "/ClickAnimals": "https://previews.customer.envatousercontent.com/files/494829810/index.html",
  "/CollectAnimal": "https://previews.customer.envatousercontent.com/files/446357557/index.html",
  "/DinoClick": "https://squared0.github.io/Dino-Click/",
  "/DogeBlocks": "https://previews.customer.envatousercontent.com/files/452874886/index.html",
  "/DogsPuzzle": "https://previews.customer.envatousercontent.com/files/447863966/index.html",
  "/FindMyDog": "https://previews.customer.envatousercontent.com/files/449148902/index.html",
  "/Fishes": "https://previews.customer.envatousercontent.com/files/460118711/index.html",
  "/HappySnake": "https://pricklegames.cloud/Games/BigGames/HappySnake2HTML5/index.html",
  "/KittyRun": "https://previews.customer.envatousercontent.com/files/495003891/index.html",
  "/Moles": "https://previews.customer.envatousercontent.com/files/460570956/index.html",
  "/BallBlast": "https://thezgame.com/Games/BallBlast/index.html",
  "/CandyDash": "https://candydash.netlify.app/",
  "/CrazyJourney": "https://previews.customer.envatousercontent.com/files/494914770/index.html",
  "/CrazyMonkey": "https://previews.customer.envatousercontent.com/files/348452483/index.html",
  "/CreepyFlappy": "https://previews.customer.envatousercontent.com/files/348147403/index.html",
  "/Gap": "https://previews.customer.envatousercontent.com/files/494563789/index.html",
  "/PetCrush": "https://pet-crush.netlify.app/",
  "/PowerOff": "https://previews.customer.envatousercontent.com/files/497636212/index.html",
  "/SaveBall": "https://thezgame.com/Games/Saveball/index.html",
  "/SlotAstro": "https://showcase.tegagame.com/games/slot-astro/",
  "/SlotCowboys": "https://showcase.tegagame.com/games/slot-cowboys/",
  "/SlotFruits": "https://previews.customer.envatousercontent.com/files/495285848/index.html",
  "/SpeedNeon": "http://www.sbmgames.com.br/jogos/speedneon/",
  "/SpinningBall": "https://previews.customer.envatousercontent.com/files/482688865/index.html",
  "/StickBoysXmas": "https://previews.customer.envatousercontent.com/files/497944931/index.html",
};

const iframeUrl = (path: string) => {
  const iframePath = extractedIframePaths[path];
  return iframePath ? iframePath : null;
};
const categoryTheme: Record<
  GameCategory,
  { from: string; via: string; to: string; accent: string }
> = {
  Action: { from: "#1d1238", via: "#6d1a45", to: "#ef4444", accent: "#67e8f9" },
  Adventure: { from: "#052e2b", via: "#0f766e", to: "#84cc16", accent: "#fde68a" },
  Animal: { from: "#1a1a1a", via: "#4d4d4d", to: "#b3b3b3", accent: "#ffcc00" },
  Arcade: { from: "#111827", via: "#7c3aed", to: "#ec4899", accent: "#7dd3fc" },
  // Racing: { from: "#0f172a", via: "#334155", to: "#f97316", accent: "#fef08a" },
  // Puzzle: { from: "#172554", via: "#2563eb", to: "#14b8a6", accent: "#f9a8d4" },
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
  return [
    slugify(category),
    ...title
      .split(/\s+/)
      .map((word) => slugify(word))
      .filter((word) => word.length > 2)
      .slice(0, 3),
  ];
}

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
  seeds.map((seed, index) => ({
    title: seed.title,
    slug: slugify(seed.title),
    sourcePath: seed.path,
    description: descriptionFor(seed.title, category as GameCategory),
    thumbnail: seed.thumbnail || thumbnailFor(seed.title, category as GameCategory),
    category: category as GameCategory,
    iframe_url: iframeUrl(seed.path),
    tags: tagsFor(seed.title, category as GameCategory),
    rating: Number((4.9 - ((index + categoryIndex) % 7) * 0.1).toFixed(1)),
    featured: index < 2,
    trending: index < 4,
  })),
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
