let testLevelTiles = [	[CLU, CRU, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
				   		[CLD, RWL, EMP, EMP, EMP, EMP, EMP, EMP, EMP, CLU, QRH, QRH, QRH, QRH, QRH, CRU],
						[EMP, QRV, EMP, EMP, EMP, EMP, EMP, EMP, EMP, QRV, EMP, EMP, EMP, EMP, EMP, QRV],
						[EMP, CLD, UWL, UWL, CRU, EMP, EMP, EMP, EMP, QRV, EMP, EMP, EMP, EMP, EMP, QRV],
						[EMP, EMP, LWL, GRD, RWL, EMP, EMP, EMP, CLU, GRD, QRH, QRH, CRU, EMP, EMP, QRV],
						[EMP, EMP, LWL, DWL, RWL, EMP, EMP, EMP, LWL, RWL, EMP, EMP, QRV, EMP, EMP, QRV],
						[EMP, EMP, QRV, EMP, CLD, QRH, QRH, QRH, GRD, GRD, QRH, QRH, RWL, EMP, EMP, QRV],
						[CLU, CRU, QRV, EMP, EMP, EMP, EMP, EMP, LWL, RWL, EMP, EMP, LWL, QRH, QRH, CRD],
						[CLD, DWL, CRD, EMP, EMP, EMP, EMP, EMP, CLD, DWL, QRH, QRH, CRD, EMP, EMP, EMP]];
let testLevelTilesheet = "./assets/tilesheet.png";

let testLevel = new Map(testLevelTiles, testLevelTilesheet, []);
