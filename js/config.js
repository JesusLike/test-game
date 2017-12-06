const mapWidth = 16;
const mapHeight = 9;
const tileSrcWidth = 64;
const tileSrcHeight = 64;
const displayWidth = Math.min(window.screen.width, mapWidth * tileSrcWidth);
const displayHeight = Math.min(window.screen.height, mapHeight * tileSrcHeight);
const tileWidth = displayWidth / mapWidth;
const tileHeight = displayHeight / mapHeight;

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
const DEL = 12;
const DEU = 13;
const DER = 14;
const DED = 15;

const impassable = [0];

const rotRight = 0;
const rotDown = Math.PI / 2;
const rotLeft = Math.PI;
const rotUp = - Math.PI / 2;