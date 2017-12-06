const tileWidth = 64;
const tileHeight = 64;
const tileSpace = 10;
const mapWidth = 16;
const mapHeight = 9;
const displayWidth = mapWidth * tileWidth;
const displayHeight = mapHeight * tileHeight;

const pathTilesheet = "./assets/tilesheet.png";
const pathSpritesheet = "./assets/spritesheet.png";
const ground = [6, 7];
const leftWall = [5, 3];
const rightWall = [5, 4];
const upWall = [4, 3];
const downWall = [4, 4];
const cornerLU = [4, 0];
const cornerRU = [4, 1];
const cornerLD = [5, 0];
const cornerRD = [5, 1];
const quoridorV = [5, 2]; //10
const quoridorH = [4, 2]; //11
const tiles = [null, ground, leftWall, rightWall, upWall, downWall, cornerLU, cornerRU, cornerLD, cornerRD, quoridorV, quoridorH];


const EMP = 0;
const GRD = 1;
const LWL = 2;
const RWL = 3;
const UWL = 4;
const DWL = 5;
const CLU = 6;
const CRU = 7;
const CLD = 8;
const CRD = 9;
const QRV = 10;
const QRH = 11;
