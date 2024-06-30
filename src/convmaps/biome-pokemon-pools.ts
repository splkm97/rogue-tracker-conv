import {Biome} from "../enums/biome";
import {Species} from "../enums/species";
import {TimeOfDay} from "../enums/time-of-day";
import {forEach, get} from "lodash";

export enum BiomePoolTier {
    COMMON,
    UNCOMMON,
    RARE,
    SUPER_RARE,
    ULTRA_RARE,
    BOSS,
    BOSS_RARE,
    BOSS_SUPER_RARE,
    BOSS_ULTRA_RARE
}

export interface SpeciesTree {
    [key: number]: Species[]
}

export interface PokemonPools {
    [key: number]: (Species | SpeciesTree)[]
}

export interface BiomeTierPokemonPools {
    [key: number]: PokemonPools
}

export interface BiomePokemonPools {
    [key: number]: BiomeTierPokemonPools
}

// getBiomePokemonPoolList 함수는 Biome, BiomePoolTier, TimeOfDay를 인자로 받아
// 해당 조건에서 출현하는 포켓몬들의 코드 리스트를 배열형태로 리턴하는 함수이다.
export function getBiomePokemonPoolList(
    biome: Biome, poolTier: BiomePoolTier, timeOfDay: TimeOfDay
): Species[] {
    const curPokemonPools = get(get(get(biomePokemonPools, biome), poolTier), timeOfDay);
    const result: Species[] = [];

    forEach(curPokemonPools, (pokemon) => {
        if (get(pokemon, '1') === undefined) {
            result.push(pokemon as Species);
        }else {
            forEach(pokemon as SpeciesTree, (species) => {
                species.forEach((item) => {
                    result.push(item);
                });
            });
        }
    });

    return result;
}

export const biomePokemonPools: BiomePokemonPools = {
    [Biome.TOWN]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [
                { 1: [ Species.CATERPIE ], 7: [ Species.METAPOD ] },
                Species.SENTRET,
                Species.LEDYBA,
                Species.HOPPIP,
                Species.SUNKERN,
                Species.STARLY,
                Species.PIDOVE,
                Species.COTTONEE,
                { 1: [ Species.SCATTERBUG ], 9: [ Species.SPEWPA ] },
                Species.YUNGOOS,
                Species.SKWOVET
            ],
            [TimeOfDay.DAY]: [
                { 1: [ Species.CATERPIE ], 7: [ Species.METAPOD ] },
                Species.SENTRET,
                Species.HOPPIP,
                Species.SUNKERN,
                Species.SILCOON,
                Species.STARLY,
                Species.PIDOVE,
                Species.COTTONEE,
                { 1: [ Species.SCATTERBUG ], 9: [ Species.SPEWPA ] },
                Species.YUNGOOS,
                Species.SKWOVET
            ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.WEEDLE ], 7: [ Species.KAKUNA ] }, Species.POOCHYENA, Species.PATRAT, Species.PURRLOIN, Species.BLIPBUG ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.WEEDLE ], 7: [ Species.KAKUNA ] }, Species.HOOTHOOT, Species.SPINARAK, Species.POOCHYENA, Species.CASCOON, Species.PATRAT, Species.PURRLOIN, Species.BLIPBUG ],
            [TimeOfDay.ALL]: [ Species.PIDGEY, Species.RATTATA, Species.SPEAROW, Species.ZIGZAGOON, Species.WURMPLE, Species.TAILLOW, Species.BIDOOF, Species.LILLIPUP, Species.FLETCHLING, Species.WOOLOO, Species.LECHONK ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ Species.BELLSPROUT, Species.POOCHYENA, Species.LOTAD, Species.SKITTY, Species.COMBEE, Species.CHERUBI, Species.PATRAT, Species.MINCCINO, Species.PAWMI ],
            [TimeOfDay.DAY]: [ Species.NIDORAN_F, Species.NIDORAN_M, Species.BELLSPROUT, Species.POOCHYENA, Species.LOTAD, Species.SKITTY, Species.COMBEE, Species.CHERUBI, Species.PATRAT, Species.MINCCINO, Species.PAWMI ],
            [TimeOfDay.DUSK]: [ Species.EKANS, Species.ODDISH, Species.MEOWTH, Species.SPINARAK, Species.SEEDOT, Species.SHROOMISH, Species.KRICKETOT, Species.VENIPEDE ],
            [TimeOfDay.NIGHT]: [ Species.EKANS, Species.ODDISH, Species.PARAS, Species.VENONAT, Species.MEOWTH, Species.SEEDOT, Species.SHROOMISH, Species.KRICKETOT, Species.VENIPEDE ],
            [TimeOfDay.ALL]: [ Species.NINCADA, Species.WHISMUR, Species.FIDOUGH ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [ Species.TANDEMAUS ], [TimeOfDay.DAY]: [ Species.TANDEMAUS ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ABRA, Species.SURSKIT, Species.ROOKIDEE ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.EEVEE, Species.RALTS ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DITTO ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.PLAINS]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.SENTRET ], 15: [ Species.FURRET ] }, { 1: [ Species.YUNGOOS ], 30: [ Species.GUMSHOOS ] }, { 1: [ Species.SKWOVET ], 24: [ Species.GREEDENT ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.SENTRET ], 15: [ Species.FURRET ] }, { 1: [ Species.YUNGOOS ], 30: [ Species.GUMSHOOS ] }, { 1: [ Species.SKWOVET ], 24: [ Species.GREEDENT ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.MEOWTH ], 28: [ Species.PERSIAN ] }, { 1: [ Species.POOCHYENA ], 18: [ Species.MIGHTYENA ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.ZUBAT ], 22: [ Species.GOLBAT ] }, { 1: [ Species.MEOWTH ], 28: [ Species.PERSIAN ] }, { 1: [ Species.POOCHYENA ], 18: [ Species.MIGHTYENA ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.ZIGZAGOON ], 20: [ Species.LINOONE ] }, { 1: [ Species.BIDOOF ], 15: [ Species.BIBAREL ] }, { 1: [ Species.LECHONK ], 18: [ Species.OINKOLOGNE ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [
                { 1: [ Species.DODUO ], 31: [ Species.DODRIO ] },
                { 1: [ Species.POOCHYENA ], 18: [ Species.MIGHTYENA ] },
                { 1: [ Species.STARLY ], 14: [ Species.STARAVIA ], 34: [ Species.STARAPTOR ] },
                { 1: [ Species.PIDOVE ], 21: [ Species.TRANQUILL ], 32: [ Species.UNFEZANT ] },
                { 1: [ Species.PAWMI ], 18: [ Species.PAWMO ], 32: [ Species.PAWMOT ] }
            ],
            [TimeOfDay.DAY]: [
                { 1: [ Species.DODUO ], 31: [ Species.DODRIO ] },
                { 1: [ Species.POOCHYENA ], 18: [ Species.MIGHTYENA ] },
                { 1: [ Species.STARLY ], 14: [ Species.STARAVIA ], 34: [ Species.STARAPTOR ] },
                { 1: [ Species.PIDOVE ], 21: [ Species.TRANQUILL ], 32: [ Species.UNFEZANT ] },
                { 1: [ Species.ROCKRUFF ], 25: [ Species.LYCANROC ] },
                { 1: [ Species.PAWMI ], 18: [ Species.PAWMO ], 32: [ Species.PAWMOT ] }
            ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.MANKEY ], 28: [ Species.PRIMEAPE ], 75: [ Species.ANNIHILAPE ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.MANKEY ], 28: [ Species.PRIMEAPE ], 75: [ Species.ANNIHILAPE ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.PIDGEY ], 18: [ Species.PIDGEOTTO ], 36: [ Species.PIDGEOT ] },
                { 1: [ Species.SPEAROW ], 20: [ Species.FEAROW ] },
                Species.PIKACHU,
                { 1: [ Species.FLETCHLING ], 17: [ Species.FLETCHINDER ], 35: [ Species.TALONFLAME ] }
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [ Species.PALDEA_TAUROS ],
            [TimeOfDay.DAY]: [ Species.PALDEA_TAUROS ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.SHINX ], 15: [ Species.LUXIO ], 30: [ Species.LUXRAY ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.SHINX ], 15: [ Species.LUXIO ], 30: [ Species.LUXRAY ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.ABRA ], 16: [ Species.KADABRA ] }, { 1: [ Species.BUNEARY ], 20: [ Species.LOPUNNY ] }, { 1: [ Species.ROOKIDEE ], 18: [ Species.CORVISQUIRE ], 38: [ Species.CORVIKNIGHT ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.FARFETCHD, Species.LICKITUNG, Species.CHANSEY, Species.EEVEE, Species.SNORLAX, { 1: [ Species.DUNSPARCE ], 62: [ Species.DUDUNSPARCE ] } ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DITTO, Species.LATIAS, Species.LATIOS ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.DODRIO, Species.FURRET, Species.GUMSHOOS, Species.GREEDENT ],
            [TimeOfDay.DAY]: [ Species.DODRIO, Species.FURRET, Species.GUMSHOOS, Species.GREEDENT ],
            [TimeOfDay.DUSK]: [ Species.PERSIAN, Species.MIGHTYENA ],
            [TimeOfDay.NIGHT]: [ Species.PERSIAN, Species.MIGHTYENA ],
            [TimeOfDay.ALL]: [ Species.LINOONE, Species.BIBAREL, Species.LOPUNNY, Species.OINKOLOGNE ]
        },
        [BiomePoolTier.BOSS_RARE]: {
            [TimeOfDay.DAWN]: [ Species.PAWMOT, Species.PALDEA_TAUROS ],
            [TimeOfDay.DAY]: [ Species.LYCANROC, Species.PAWMOT, Species.PALDEA_TAUROS ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.FARFETCHD, Species.SNORLAX, Species.LICKILICKY, Species.DUDUNSPARCE ]
        },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.LATIAS, Species.LATIOS ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.GRASS]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.HOPPIP ], 18: [ Species.SKIPLOOM ] }, Species.SUNKERN, Species.COTTONEE, Species.PETILIL ],
            [TimeOfDay.DAY]: [ { 1: [ Species.HOPPIP ], 18: [ Species.SKIPLOOM ] }, Species.SUNKERN, Species.COTTONEE, Species.PETILIL ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.SEEDOT ], 14: [ Species.NUZLEAF ] }, { 1: [ Species.SHROOMISH ], 23: [ Species.BRELOOM ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.SEEDOT ], 14: [ Species.NUZLEAF ] }, { 1: [ Species.SHROOMISH ], 23: [ Species.BRELOOM ] } ],
            [TimeOfDay.ALL]: []
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.COMBEE ], 21: [ Species.VESPIQUEN ] }, { 1: [ Species.CHERUBI ], 25: [ Species.CHERRIM ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.COMBEE ], 21: [ Species.VESPIQUEN ] }, { 1: [ Species.CHERUBI ], 25: [ Species.CHERRIM ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.FOONGUS ], 39: [ Species.AMOONGUSS ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.FOONGUS ], 39: [ Species.AMOONGUSS ] } ],
            [TimeOfDay.ALL]: []
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.BULBASAUR ], 16: [ Species.IVYSAUR ], 32: [ Species.VENUSAUR ] }, Species.GROWLITHE, { 1: [ Species.TURTWIG ], 18: [ Species.GROTLE ], 32: [ Species.TORTERRA ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SUDOWOODO ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.VIRIZION ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [ Species.JUMPLUFF, Species.SUNFLORA, Species.WHIMSICOTT ], [TimeOfDay.DAY]: [ Species.JUMPLUFF, Species.SUNFLORA, Species.WHIMSICOTT ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.VENUSAUR, Species.SUDOWOODO, Species.TORTERRA ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.VIRIZION ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.TALL_GRASS]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.BOUNSWEET ], 18: [ Species.STEENEE ], 58: [ Species.TSAREENA ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.NIDORAN_F ], 16: [ Species.NIDORINA ] }, { 1: [ Species.NIDORAN_M ], 16: [ Species.NIDORINO ] }, { 1: [ Species.BOUNSWEET ], 18: [ Species.STEENEE ], 58: [ Species.TSAREENA ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.ODDISH ], 21: [ Species.GLOOM ] }, { 1: [ Species.KRICKETOT ], 10: [ Species.KRICKETUNE ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.ODDISH ], 21: [ Species.GLOOM ] }, { 1: [ Species.KRICKETOT ], 10: [ Species.KRICKETUNE ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.NINCADA ], 20: [ Species.NINJASK ] }, { 1: [ Species.FOMANTIS ], 44: [ Species.LURANTIS ] }, { 1: [ Species.NYMBLE ], 24: [ Species.LOKIX ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.PARAS ], 24: [ Species.PARASECT ] }, { 1: [ Species.VENONAT ], 31: [ Species.VENOMOTH ] }, { 1: [ Species.SPINARAK ], 22: [ Species.ARIADOS ] } ],
            [TimeOfDay.ALL]: [ Species.VULPIX ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.PINSIR, { 1: [ Species.CHIKORITA ], 16: [ Species.BAYLEEF ], 32: [ Species.MEGANIUM ] }, { 1: [ Species.GIRAFARIG ], 62: [ Species.FARIGIRAF ] }, Species.ZANGOOSE, Species.KECLEON, Species.TROPIUS ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SCYTHER, Species.SHEDINJA, Species.ROTOM ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.TSAREENA ],
            [TimeOfDay.DAY]: [ Species.NIDOQUEEN, Species.NIDOKING, Species.TSAREENA ],
            [TimeOfDay.DUSK]: [ Species.VILEPLUME, Species.KRICKETUNE ],
            [TimeOfDay.NIGHT]: [ Species.VILEPLUME, Species.KRICKETUNE ],
            [TimeOfDay.ALL]: [ Species.NINJASK, Species.ZANGOOSE, Species.KECLEON, Species.LURANTIS, Species.LOKIX ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [ Species.BELLOSSOM ], [TimeOfDay.DAY]: [ Species.BELLOSSOM ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.PINSIR, Species.MEGANIUM, Species.FARIGIRAF ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ROTOM ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.METROPOLIS]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.YAMPER ], 25: [ Species.BOLTUND ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.YAMPER ], 25: [ Species.BOLTUND ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.PATRAT ], 20: [ Species.WATCHOG ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.HOUNDOUR ], 24: [ Species.HOUNDOOM ] }, { 1: [ Species.PATRAT ], 20: [ Species.WATCHOG ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.RATTATA ], 20: [ Species.RATICATE ] }, { 1: [ Species.ZIGZAGOON ], 20: [ Species.LINOONE ] }, { 1: [ Species.LILLIPUP ], 16: [ Species.HERDIER ], 32: [ Species.STOUTLAND ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.PATRAT ], 20: [ Species.WATCHOG ] }, Species.INDEEDEE ],
            [TimeOfDay.DAY]: [ { 1: [ Species.PATRAT ], 20: [ Species.WATCHOG ] }, Species.INDEEDEE ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.ESPURR ], 25: [ Species.MEOWSTIC ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.ESPURR ], 25: [ Species.MEOWSTIC ] } ],
            [TimeOfDay.ALL]: [ Species.PIKACHU, { 1: [ Species.GLAMEOW ], 38: [ Species.PURUGLY ] }, Species.FURFROU, { 1: [ Species.FIDOUGH ], 26: [ Species.DACHSBUN ] }, Species.SQUAWKABILLY ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.TANDEMAUS ], 25: [ Species.MAUSHOLD ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.TANDEMAUS ], 25: [ Species.MAUSHOLD ] } ],
            [TimeOfDay.DUSK]: [ Species.MORPEKO ],
            [TimeOfDay.NIGHT]: [ Species.MORPEKO ],
            [TimeOfDay.ALL]: [ { 1: [ Species.VAROOM ], 40: [ Species.REVAVROOM ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DITTO, Species.EEVEE, Species.SMEARGLE ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CASTFORM ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [ Species.BOLTUND ], [TimeOfDay.DAY]: [ Species.BOLTUND ], [TimeOfDay.DUSK]: [ Species.MEOWSTIC ], [TimeOfDay.NIGHT]: [ Species.MEOWSTIC ], [TimeOfDay.ALL]: [ Species.STOUTLAND, Species.FURFROU, Species.DACHSBUN ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [ Species.MAUSHOLD ], [TimeOfDay.DAY]: [ Species.MAUSHOLD ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CASTFORM, Species.REVAVROOM ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.FOREST]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [
                Species.BUTTERFREE,
                { 1: [ Species.BELLSPROUT ], 21: [ Species.WEEPINBELL ] },
                { 1: [ Species.COMBEE ], 21: [ Species.VESPIQUEN ] },
                Species.PETILIL,
                { 1: [ Species.DEERLING ], 34: [ Species.SAWSBUCK ] },
                Species.VIVILLON
            ],
            [TimeOfDay.DAY]: [
                Species.BUTTERFREE,
                { 1: [ Species.BELLSPROUT ], 21: [ Species.WEEPINBELL ] },
                Species.BEAUTIFLY,
                { 1: [ Species.COMBEE ], 21: [ Species.VESPIQUEN ] },
                Species.PETILIL,
                { 1: [ Species.DEERLING ], 34: [ Species.SAWSBUCK ] },
                Species.VIVILLON
            ],
            [TimeOfDay.DUSK]: [
                Species.BEEDRILL,
                { 1: [ Species.PINECO ], 31: [ Species.FORRETRESS ] },
                { 1: [ Species.SEEDOT ], 14: [ Species.NUZLEAF ] },
                { 1: [ Species.SHROOMISH ], 23: [ Species.BRELOOM ] },
                { 1: [ Species.VENIPEDE ], 22: [ Species.WHIRLIPEDE ], 30: [ Species.SCOLIPEDE ] }
            ],
            [TimeOfDay.NIGHT]: [
                Species.BEEDRILL,
                { 1: [ Species.VENONAT ], 31: [ Species.VENOMOTH ] },
                { 1: [ Species.SPINARAK ], 22: [ Species.ARIADOS ] },
                { 1: [ Species.PINECO ], 31: [ Species.FORRETRESS ] },
                Species.DUSTOX,
                { 1: [ Species.SEEDOT ], 14: [ Species.NUZLEAF ] },
                { 1: [ Species.SHROOMISH ], 23: [ Species.BRELOOM ] },
                { 1: [ Species.VENIPEDE ], 22: [ Species.WHIRLIPEDE ], 30: [ Species.SCOLIPEDE ] }
            ],
            [TimeOfDay.ALL]: [ { 1: [ Species.TAROUNTULA ], 15: [ Species.SPIDOPS ] }, { 1: [ Species.NYMBLE ], 24: [ Species.LOKIX ] }, { 1: [ Species.SHROODLE ], 28: [ Species.GRAFAIAI ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ Species.ROSELIA, Species.MOTHIM, { 1: [ Species.SEWADDLE ], 20: [ Species.SWADLOON ], 30: [ Species.LEAVANNY ] } ],
            [TimeOfDay.DAY]: [ Species.ROSELIA, Species.MOTHIM, { 1: [ Species.SEWADDLE ], 20: [ Species.SWADLOON ], 30: [ Species.LEAVANNY ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.SPINARAK ], 22: [ Species.ARIADOS ] }, { 1: [ Species.DOTTLER ], 30: [ Species.ORBEETLE ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.HOOTHOOT ], 20: [ Species.NOCTOWL ] }, { 1: [ Species.ROCKRUFF ], 25: [ Species.LYCANROC ] }, { 1: [ Species.DOTTLER ], 30: [ Species.ORBEETLE ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.EKANS ], 22: [ Species.ARBOK ] },
                { 1: [ Species.TEDDIURSA ], 30: [ Species.URSARING ] },
                { 1: [ Species.BURMY ], 20: [ Species.WORMADAM ] },
                { 1: [ Species.PANSAGE ], 30: [ Species.SIMISAGE ] }
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [ Species.EXEGGCUTE, Species.STANTLER ],
            [TimeOfDay.DAY]: [ Species.EXEGGCUTE, Species.STANTLER ],
            [TimeOfDay.DUSK]: [ Species.SCYTHER ],
            [TimeOfDay.NIGHT]: [ Species.SCYTHER ],
            [TimeOfDay.ALL]: [
                Species.HERACROSS,
                { 1: [ Species.TREECKO ], 16: [ Species.GROVYLE ], 36: [ Species.SCEPTILE ] },
                Species.TROPIUS,
                Species.KARRABLAST,
                Species.SHELMET,
                { 1: [ Species.CHESPIN ], 16: [ Species.QUILLADIN ], 36: [ Species.CHESNAUGHT ] },
                { 1: [ Species.ROWLET ], 17: [ Species.DARTRIX ], 34: [ Species.DECIDUEYE ] },
                Species.SQUAWKABILLY,
                { 1: [ Species.TOEDSCOOL ], 30: [ Species.TOEDSCRUEL ] }
            ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [ Species.BLOODMOON_URSALUNA ], [TimeOfDay.ALL]: [ Species.DURANT ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KARTANA, Species.WO_CHIEN ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.VICTREEBEL, Species.MOTHIM, Species.VESPIQUEN, Species.LILLIGANT, Species.SAWSBUCK ],
            [TimeOfDay.DAY]: [ Species.VICTREEBEL, Species.BEAUTIFLY, Species.MOTHIM, Species.VESPIQUEN, Species.LILLIGANT, Species.SAWSBUCK ],
            [TimeOfDay.DUSK]: [ Species.ARIADOS, Species.FORRETRESS, Species.SHIFTRY, Species.BRELOOM, Species.SCOLIPEDE, Species.ORBEETLE ],
            [TimeOfDay.NIGHT]: [ Species.VENOMOTH, Species.NOCTOWL, Species.ARIADOS, Species.FORRETRESS, Species.DUSTOX, Species.SHIFTRY, Species.BRELOOM, Species.SCOLIPEDE, Species.ORBEETLE ],
            [TimeOfDay.ALL]: [ Species.WORMADAM, Species.SIMISAGE, Species.SPIDOPS, Species.LOKIX, Species.GRAFAIAI ]
        },
        [BiomePoolTier.BOSS_RARE]: {
            [TimeOfDay.DAWN]: [ Species.STANTLER ],
            [TimeOfDay.DAY]: [ Species.STANTLER ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [ Species.LYCANROC, Species.BLOODMOON_URSALUNA ],
            [TimeOfDay.ALL]: [ Species.HERACROSS, Species.SCEPTILE, Species.ESCAVALIER, Species.ACCELGOR, Species.DURANT, Species.CHESNAUGHT, Species.DECIDUEYE, Species.TOEDSCRUEL ]
        },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KARTANA, Species.WO_CHIEN ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CALYREX ] }
    },
    [Biome.SEA]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.SLOWPOKE ], 37: [ Species.SLOWBRO ] }, { 1: [ Species.WINGULL ], 25: [ Species.PELIPPER ] }, Species.CRAMORANT, { 1: [ Species.FINIZEN ], 38: [ Species.PALAFIN ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.SLOWPOKE ], 37: [ Species.SLOWBRO ] }, { 1: [ Species.WINGULL ], 25: [ Species.PELIPPER ] }, Species.CRAMORANT, { 1: [ Species.FINIZEN ], 38: [ Species.PALAFIN ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.INKAY ], 30: [ Species.MALAMAR ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.FINNEON ], 31: [ Species.LUMINEON ] }, { 1: [ Species.INKAY ], 30: [ Species.MALAMAR ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.TENTACOOL ], 30: [ Species.TENTACRUEL ] }, { 1: [ Species.MAGIKARP ], 20: [ Species.GYARADOS ] }, { 1: [ Species.BUIZEL ], 26: [ Species.FLOATZEL ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.STARYU ], 30: [ Species.STARMIE ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.STARYU ], 30: [ Species.STARMIE ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.SLOWPOKE ], 37: [ Species.SLOWBRO ] }, Species.SHELLDER, { 1: [ Species.CARVANHA ], 30: [ Species.SHARPEDO ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.SLOWPOKE ], 37: [ Species.SLOWBRO ] }, Species.SHELLDER, { 1: [ Species.CHINCHOU ], 27: [ Species.LANTURN ] }, { 1: [ Species.CARVANHA ], 30: [ Species.SHARPEDO ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.POLIWAG ], 25: [ Species.POLIWHIRL ] },
                { 1: [ Species.HORSEA ], 32: [ Species.SEADRA ] },
                { 1: [ Species.GOLDEEN ], 33: [ Species.SEAKING ] },
                { 1: [ Species.WAILMER ], 40: [ Species.WAILORD ] },
                { 1: [ Species.PANPOUR ], 30: [ Species.SIMIPOUR ] },
                { 1: [ Species.WATTREL ], 25: [ Species.KILOWATTREL ] }
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.LAPRAS, { 1: [ Species.PIPLUP ], 16: [ Species.PRINPLUP ], 36: [ Species.EMPOLEON ] }, { 1: [ Species.POPPLIO ], 17: [ Species.BRIONNE ], 34: [ Species.PRIMARINA ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KINGDRA, Species.ROTOM, { 1: [ Species.TIRTOUGA ], 37: [ Species.CARRACOSTA ] } ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.PELIPPER, Species.CRAMORANT, Species.PALAFIN ],
            [TimeOfDay.DAY]: [ Species.PELIPPER, Species.CRAMORANT, Species.PALAFIN ],
            [TimeOfDay.DUSK]: [ Species.SHARPEDO, Species.MALAMAR ],
            [TimeOfDay.NIGHT]: [ Species.SHARPEDO, Species.LUMINEON, Species.MALAMAR ],
            [TimeOfDay.ALL]: [ Species.TENTACRUEL, Species.FLOATZEL, Species.SIMIPOUR, Species.KILOWATTREL ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KINGDRA, Species.EMPOLEON, Species.PRIMARINA ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ROTOM ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.LUGIA ] }
    },
    [Biome.SWAMP]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.WOOPER ], 20: [ Species.QUAGSIRE ] }, { 1: [ Species.LOTAD ], 14: [ Species.LOMBRE ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.WOOPER ], 20: [ Species.QUAGSIRE ] }, { 1: [ Species.LOTAD ], 14: [ Species.LOMBRE ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.EKANS ], 22: [ Species.ARBOK ] }, { 1: [ Species.PALDEA_WOOPER ], 20: [ Species.CLODSIRE ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.EKANS ], 22: [ Species.ARBOK ] }, { 1: [ Species.PALDEA_WOOPER ], 20: [ Species.CLODSIRE ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.POLIWAG ], 25: [ Species.POLIWHIRL ] },
                { 1: [ Species.GULPIN ], 26: [ Species.SWALOT ] },
                { 1: [ Species.SHELLOS ], 30: [ Species.GASTRODON ] },
                { 1: [ Species.TYMPOLE ], 25: [ Species.PALPITOAD ], 36: [ Species.SEISMITOAD ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.EKANS ], 22: [ Species.ARBOK ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.EKANS ], 22: [ Species.ARBOK ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.CROAGUNK ], 37: [ Species.TOXICROAK ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.CROAGUNK ], 37: [ Species.TOXICROAK ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.PSYDUCK ], 33: [ Species.GOLDUCK ] },
                { 1: [ Species.BARBOACH ], 30: [ Species.WHISCASH ] },
                { 1: [ Species.SKORUPI ], 40: [ Species.DRAPION ] },
                Species.STUNFISK,
                { 1: [ Species.MAREANIE ], 38: [ Species.TOXAPEX ] }
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.TOTODILE ], 18: [ Species.CROCONAW ], 30: [ Species.FERALIGATR ] }, { 1: [ Species.MUDKIP ], 16: [ Species.MARSHTOMP ], 36: [ Species.SWAMPERT ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.GALAR_SLOWPOKE ], 40: [ Species.GALAR_SLOWBRO ] }, { 1: [ Species.HISUI_SLIGGOO ], 80: [ Species.HISUI_GOODRA ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.GALAR_SLOWPOKE ], 40: [ Species.GALAR_SLOWBRO ] }, { 1: [ Species.HISUI_SLIGGOO ], 80: [ Species.HISUI_GOODRA ] } ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.POLITOED, Species.GALAR_STUNFISK ]
        },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.AZELF, Species.POIPOLE ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.QUAGSIRE, Species.LUDICOLO ],
            [TimeOfDay.DAY]: [ Species.QUAGSIRE, Species.LUDICOLO ],
            [TimeOfDay.DUSK]: [ Species.ARBOK, Species.CLODSIRE ],
            [TimeOfDay.NIGHT]: [ Species.ARBOK, Species.CLODSIRE ],
            [TimeOfDay.ALL]: [ Species.POLIWRATH, Species.SWALOT, Species.WHISCASH, Species.GASTRODON, Species.SEISMITOAD, Species.STUNFISK, Species.TOXAPEX ]
        },
        [BiomePoolTier.BOSS_RARE]: {
            [TimeOfDay.DAWN]: [ Species.GALAR_SLOWBRO, Species.GALAR_SLOWKING, Species.HISUI_GOODRA ],
            [TimeOfDay.DAY]: [ Species.GALAR_SLOWBRO, Species.GALAR_SLOWKING, Species.HISUI_GOODRA ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.FERALIGATR, Species.POLITOED, Species.SWAMPERT, Species.GALAR_STUNFISK ]
        },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.AZELF, Species.NAGANADEL ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.BEACH]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.STARYU ], 30: [ Species.STARMIE ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.STARYU ], 30: [ Species.STARMIE ] } ],
            [TimeOfDay.DUSK]: [ Species.SHELLDER ],
            [TimeOfDay.NIGHT]: [ Species.SHELLDER ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.KRABBY ], 28: [ Species.KINGLER ] },
                { 1: [ Species.CORPHISH ], 30: [ Species.CRAWDAUNT ] },
                { 1: [ Species.DWEBBLE ], 34: [ Species.CRUSTLE ] },
                { 1: [ Species.BINACLE ], 39: [ Species.BARBARACLE ] },
                { 1: [ Species.MAREANIE ], 38: [ Species.TOXAPEX ] },
                { 1: [ Species.WIGLETT ], 26: [ Species.WUGTRIO ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.BURMY ], 20: [ Species.WORMADAM ] }, { 1: [ Species.CLAUNCHER ], 37: [ Species.CLAWITZER ] }, { 1: [ Species.SANDYGAST ], 42: [ Species.PALOSSAND ] } ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.QUAXLY ], 16: [ Species.QUAXWELL ], 36: [ Species.QUAQUAVAL ] }, Species.TATSUGIRI ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.TIRTOUGA ], 37: [ Species.CARRACOSTA ] } ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CRESSELIA, Species.KELDEO, Species.TAPU_FINI ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.STARMIE ],
            [TimeOfDay.DAY]: [ Species.STARMIE ],
            [TimeOfDay.DUSK]: [ Species.CLOYSTER ],
            [TimeOfDay.NIGHT]: [ Species.CLOYSTER ],
            [TimeOfDay.ALL]: [ Species.KINGLER, Species.CRAWDAUNT, Species.WORMADAM, Species.CRUSTLE, Species.BARBARACLE, Species.CLAWITZER, Species.TOXAPEX, Species.PALOSSAND ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CARRACOSTA, Species.QUAQUAVAL ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CRESSELIA, Species.KELDEO, Species.TAPU_FINI ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.LAKE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.LOTAD ], 14: [ Species.LOMBRE ] }, { 1: [ Species.DUCKLETT ], 35: [ Species.SWANNA ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.LOTAD ], 14: [ Species.LOMBRE ] }, { 1: [ Species.DUCKLETT ], 35: [ Species.SWANNA ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.MARILL ], 18: [ Species.AZUMARILL ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.MARILL ], 18: [ Species.AZUMARILL ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.PSYDUCK ], 33: [ Species.GOLDUCK ] },
                { 1: [ Species.GOLDEEN ], 33: [ Species.SEAKING ] },
                { 1: [ Species.MAGIKARP ], 20: [ Species.GYARADOS ] },
                { 1: [ Species.CHEWTLE ], 22: [ Species.DREDNAW ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.DEWPIDER ], 22: [ Species.ARAQUANID ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.DEWPIDER ], 22: [ Species.ARAQUANID ] } ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.SLOWPOKE ], 37: [ Species.SLOWBRO ] }, { 1: [ Species.WOOPER ], 20: [ Species.QUAGSIRE ] }, { 1: [ Species.SURSKIT ], 22: [ Species.MASQUERAIN ] }, Species.WISHIWASHI, Species.FLAMIGO ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.SQUIRTLE ], 16: [ Species.WARTORTLE ], 36: [ Species.BLASTOISE ] },
                { 1: [ Species.OSHAWOTT ], 17: [ Species.DEWOTT ], 36: [ Species.SAMUROTT ] },
                { 1: [ Species.FROAKIE ], 16: [ Species.FROGADIER ], 36: [ Species.GRENINJA ] },
                { 1: [ Species.SOBBLE ], 16: [ Species.DRIZZILE ], 35: [ Species.INTELEON ] }
            ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.VAPOREON, Species.SLOWKING ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SUICUNE, Species.MESPRIT ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.SWANNA, Species.ARAQUANID ],
            [TimeOfDay.DAY]: [ Species.SWANNA, Species.ARAQUANID ],
            [TimeOfDay.DUSK]: [ Species.AZUMARILL ],
            [TimeOfDay.NIGHT]: [ Species.AZUMARILL ],
            [TimeOfDay.ALL]: [ Species.GOLDUCK, Species.SLOWBRO, Species.SEAKING, Species.GYARADOS, Species.MASQUERAIN, Species.WISHIWASHI, Species.DREDNAW ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.BLASTOISE, Species.VAPOREON, Species.SLOWKING, Species.SAMUROTT, Species.GRENINJA, Species.INTELEON ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SUICUNE, Species.MESPRIT ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.SEABED]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.CHINCHOU ], 27: [ Species.LANTURN ] },
                Species.REMORAID,
                Species.CLAMPERL,
                Species.BASCULIN,
                { 1: [ Species.FRILLISH ], 40: [ Species.JELLICENT ] },
                { 1: [ Species.ARROKUDA ], 26: [ Species.BARRASKEWDA ] },
                Species.VELUZA
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.TENTACOOL ], 30: [ Species.TENTACRUEL ] },
                Species.SHELLDER,
                { 1: [ Species.WAILMER ], 40: [ Species.WAILORD ] },
                Species.LUVDISC,
                { 1: [ Species.SHELLOS ], 30: [ Species.GASTRODON ] },
                { 1: [ Species.SKRELP ], 48: [ Species.DRAGALGE ] },
                Species.PINCURCHIN,
                Species.DONDOZO
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.QWILFISH, Species.CORSOLA, Species.OCTILLERY, { 1: [ Species.MANTYKE ], 52: [ Species.MANTINE ] }, Species.ALOMOMOLA, { 1: [ Species.TYNAMO ], 39: [ Species.EELEKTRIK ] }, Species.DHELMISE ]
        },
        [BiomePoolTier.SUPER_RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.OMANYTE ], 40: [ Species.OMASTAR ] },
                { 1: [ Species.KABUTO ], 40: [ Species.KABUTOPS ] },
                Species.RELICANTH,
                Species.PYUKUMUKU,
                { 1: [ Species.GALAR_CORSOLA ], 38: [ Species.CURSOLA ] },
                Species.ARCTOVISH,
                Species.HISUI_QWILFISH
            ]
        },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.FEEBAS, Species.NIHILEGO ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.LANTURN, Species.QWILFISH, Species.CORSOLA, Species.OCTILLERY, Species.MANTINE, Species.WAILORD, Species.HUNTAIL, Species.GOREBYSS, Species.LUVDISC, Species.JELLICENT, Species.ALOMOMOLA, Species.DRAGALGE, Species.BARRASKEWDA, Species.DONDOZO ]
        },
        [BiomePoolTier.BOSS_RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.OMASTAR, Species.KABUTOPS, Species.RELICANTH, Species.EELEKTROSS, Species.PYUKUMUKU, Species.DHELMISE, Species.CURSOLA, Species.ARCTOVISH, Species.BASCULEGION, Species.OVERQWIL ]
        },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MILOTIC, Species.NIHILEGO ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KYOGRE ] }
    },
    [Biome.MOUNTAIN]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [
                { 1: [ Species.TAILLOW ], 22: [ Species.SWELLOW ] },
                { 1: [ Species.SWABLU ], 35: [ Species.ALTARIA ] },
                { 1: [ Species.STARLY ], 14: [ Species.STARAVIA ], 34: [ Species.STARAPTOR ] },
                { 1: [ Species.PIDOVE ], 21: [ Species.TRANQUILL ], 32: [ Species.UNFEZANT ] },
                { 1: [ Species.FLETCHLING ], 17: [ Species.FLETCHINDER ], 35: [ Species.TALONFLAME ] }
            ],
            [TimeOfDay.DAY]: [
                { 1: [ Species.TAILLOW ], 22: [ Species.SWELLOW ] },
                { 1: [ Species.SWABLU ], 35: [ Species.ALTARIA ] },
                { 1: [ Species.STARLY ], 14: [ Species.STARAVIA ], 34: [ Species.STARAPTOR ] },
                { 1: [ Species.PIDOVE ], 21: [ Species.TRANQUILL ], 32: [ Species.UNFEZANT ] },
                { 1: [ Species.FLETCHLING ], 17: [ Species.FLETCHINDER ], 35: [ Species.TALONFLAME ] }
            ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.RHYHORN ], 42: [ Species.RHYDON ] }, { 1: [ Species.ARON ], 32: [ Species.LAIRON ], 42: [ Species.AGGRON ] }, { 1: [ Species.ROGGENROLA ], 25: [ Species.BOLDORE ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.RHYHORN ], 42: [ Species.RHYDON ] }, { 1: [ Species.ARON ], 32: [ Species.LAIRON ], 42: [ Species.AGGRON ] }, { 1: [ Species.ROGGENROLA ], 25: [ Species.BOLDORE ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.PIDGEY ], 18: [ Species.PIDGEOTTO ], 36: [ Species.PIDGEOT ] }, { 1: [ Species.SPEAROW ], 20: [ Species.FEAROW ] }, { 1: [ Species.SKIDDO ], 32: [ Species.GOGOAT ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [
                { 1: [ Species.RHYHORN ], 42: [ Species.RHYDON ] },
                { 1: [ Species.ARON ], 32: [ Species.LAIRON ], 42: [ Species.AGGRON ] },
                { 1: [ Species.ROGGENROLA ], 25: [ Species.BOLDORE ] },
                { 1: [ Species.RUFFLET ], 54: [ Species.BRAVIARY ] },
                { 1: [ Species.ROOKIDEE ], 18: [ Species.CORVISQUIRE ], 38: [ Species.CORVIKNIGHT ] },
                { 1: [ Species.FLITTLE ], 35: [ Species.ESPATHRA ] },
                Species.BOMBIRDIER
            ],
            [TimeOfDay.DAY]: [
                { 1: [ Species.RHYHORN ], 42: [ Species.RHYDON ] },
                { 1: [ Species.ARON ], 32: [ Species.LAIRON ], 42: [ Species.AGGRON ] },
                { 1: [ Species.ROGGENROLA ], 25: [ Species.BOLDORE ] },
                { 1: [ Species.RUFFLET ], 54: [ Species.BRAVIARY ] },
                { 1: [ Species.ROOKIDEE ], 18: [ Species.CORVISQUIRE ], 38: [ Species.CORVIKNIGHT ] },
                { 1: [ Species.FLITTLE ], 35: [ Species.ESPATHRA ] },
                Species.BOMBIRDIER
            ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.VULLABY ], 54: [ Species.MANDIBUZZ ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.VULLABY ], 54: [ Species.MANDIBUZZ ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.MACHOP ], 28: [ Species.MACHOKE ] },
                { 1: [ Species.GEODUDE ], 25: [ Species.GRAVELER ] },
                { 1: [ Species.NATU ], 25: [ Species.XATU ] },
                { 1: [ Species.SLUGMA ], 38: [ Species.MAGCARGO ] },
                { 1: [ Species.NACLI ], 24: [ Species.NACLSTACK ], 38: [ Species.GARGANACL ] }
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [ Species.MURKROW ],
            [TimeOfDay.ALL]: [ Species.SKARMORY, { 1: [ Species.TORCHIC ], 16: [ Species.COMBUSKEN ], 36: [ Species.BLAZIKEN ] }, { 1: [ Species.SPOINK ], 32: [ Species.GRUMPIG ] }, Species.HAWLUCHA, Species.KLAWF ]
        },
        [BiomePoolTier.SUPER_RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.LARVITAR ], 30: [ Species.PUPITAR ] },
                { 1: [ Species.CRANIDOS ], 30: [ Species.RAMPARDOS ] },
                { 1: [ Species.SHIELDON ], 30: [ Species.BASTIODON ] },
                { 1: [ Species.GIBLE ], 24: [ Species.GABITE ], 48: [ Species.GARCHOMP ] },
                Species.ROTOM,
                Species.ARCHEOPS,
                { 1: [ Species.AXEW ], 38: [ Species.FRAXURE ] }
            ]
        },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.TORNADUS, Species.TING_LU, Species.OGERPON ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.SWELLOW, Species.ALTARIA, Species.STARAPTOR, Species.UNFEZANT, Species.BRAVIARY, Species.TALONFLAME, Species.CORVIKNIGHT, Species.ESPATHRA ],
            [TimeOfDay.DAY]: [ Species.SWELLOW, Species.ALTARIA, Species.STARAPTOR, Species.UNFEZANT, Species.BRAVIARY, Species.TALONFLAME, Species.CORVIKNIGHT, Species.ESPATHRA ],
            [TimeOfDay.DUSK]: [ Species.MANDIBUZZ ],
            [TimeOfDay.NIGHT]: [ Species.MANDIBUZZ ],
            [TimeOfDay.ALL]: [ Species.PIDGEOT, Species.FEAROW, Species.SKARMORY, Species.AGGRON, Species.GOGOAT, Species.GARGANACL ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [ Species.HISUI_BRAVIARY ], [TimeOfDay.DAY]: [ Species.HISUI_BRAVIARY ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.BLAZIKEN, Species.RAMPARDOS, Species.BASTIODON, Species.HAWLUCHA ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ROTOM, Species.TORNADUS, Species.TING_LU, Species.OGERPON ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.HO_OH ] }
    },
    [Biome.BADLANDS]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.PHANPY ], 25: [ Species.DONPHAN ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.PHANPY ], 25: [ Species.DONPHAN ] } ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.CUBONE ], 28: [ Species.MAROWAK ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.DIGLETT ], 26: [ Species.DUGTRIO ] },
                { 1: [ Species.GEODUDE ], 25: [ Species.GRAVELER ] },
                { 1: [ Species.RHYHORN ], 42: [ Species.RHYDON ] },
                { 1: [ Species.DRILBUR ], 31: [ Species.EXCADRILL ] },
                { 1: [ Species.MUDBRAY ], 30: [ Species.MUDSDALE ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.SIZZLIPEDE ], 28: [ Species.CENTISKORCH ] }, { 1: [ Species.CAPSAKID ], 30: [ Species.SCOVILLAIN ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.SIZZLIPEDE ], 28: [ Species.CENTISKORCH ] }, { 1: [ Species.CAPSAKID ], 30: [ Species.SCOVILLAIN ] } ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.SANDSHREW ], 22: [ Species.SANDSLASH ] },
                { 1: [ Species.NUMEL ], 33: [ Species.CAMERUPT ] },
                { 1: [ Species.ROGGENROLA ], 25: [ Species.BOLDORE ] },
                { 1: [ Species.CUFANT ], 34: [ Species.COPPERAJAH ] }
            ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ONIX, Species.GLIGAR, { 1: [ Species.POLTCHAGEIST ], 30: [ Species.SINISTCHA ] } ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.LANDORUS, Species.OKIDOGI ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.DONPHAN, Species.CENTISKORCH, Species.SCOVILLAIN ],
            [TimeOfDay.DAY]: [ Species.DONPHAN, Species.CENTISKORCH, Species.SCOVILLAIN ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [ Species.MAROWAK ],
            [TimeOfDay.ALL]: [ Species.DUGTRIO, Species.GOLEM, Species.RHYPERIOR, Species.GLISCOR, Species.EXCADRILL, Species.MUDSDALE, Species.COPPERAJAH ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.STEELIX, Species.SINISTCHA ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.LANDORUS, Species.OKIDOGI ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GROUDON ] }
    },
    [Biome.CAVE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.ZUBAT ], 22: [ Species.GOLBAT ] },
                { 1: [ Species.PARAS ], 24: [ Species.PARASECT ] },
                { 1: [ Species.TEDDIURSA ], 30: [ Species.URSARING ] },
                { 1: [ Species.WHISMUR ], 20: [ Species.LOUDRED ], 40: [ Species.EXPLOUD ] },
                { 1: [ Species.ROGGENROLA ], 25: [ Species.BOLDORE ] },
                { 1: [ Species.WOOBAT ], 20: [ Species.SWOOBAT ] },
                { 1: [ Species.BUNNELBY ], 20: [ Species.DIGGERSBY ] },
                { 1: [ Species.NACLI ], 24: [ Species.NACLSTACK ], 38: [ Species.GARGANACL ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ { 1: [ Species.ROCKRUFF ], 25: [ Species.LYCANROC ] } ],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.GEODUDE ], 25: [ Species.GRAVELER ] },
                { 1: [ Species.MAKUHITA ], 24: [ Species.HARIYAMA ] },
                Species.NOSEPASS,
                { 1: [ Species.NOIBAT ], 48: [ Species.NOIVERN ] },
                { 1: [ Species.WIMPOD ], 30: [ Species.GOLISOPOD ] }
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.ONIX, { 1: [ Species.FERROSEED ], 40: [ Species.FERROTHORN ] }, Species.CARBINK, { 1: [ Species.GLIMMET ], 35: [ Species.GLIMMORA ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SHUCKLE ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.UXIE ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.PARASECT, Species.ONIX, Species.CROBAT, Species.URSARING, Species.EXPLOUD, Species.PROBOPASS, Species.GIGALITH, Species.SWOOBAT, Species.DIGGERSBY, Species.NOIVERN, Species.GOLISOPOD, Species.GARGANACL ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [ Species.LYCANROC ], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SHUCKLE, Species.FERROTHORN, Species.GLIMMORA ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.UXIE ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.TERAPAGOS ] }
    },
    [Biome.DESERT]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ Species.TRAPINCH, { 1: [ Species.HIPPOPOTAS ], 34: [ Species.HIPPOWDON ] }, { 1: [ Species.RELLOR ], 29: [ Species.RABSCA ] } ],
            [TimeOfDay.DAY]: [ Species.TRAPINCH, { 1: [ Species.HIPPOPOTAS ], 34: [ Species.HIPPOWDON ] }, { 1: [ Species.RELLOR ], 29: [ Species.RABSCA ] } ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.CACNEA ], 32: [ Species.CACTURNE ] }, { 1: [ Species.SANDILE ], 29: [ Species.KROKOROK ], 40: [ Species.KROOKODILE ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.CACNEA ], 32: [ Species.CACTURNE ] }, { 1: [ Species.SANDILE ], 29: [ Species.KROKOROK ], 40: [ Species.KROOKODILE ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.SANDSHREW ], 22: [ Species.SANDSLASH ] }, { 1: [ Species.SKORUPI ], 40: [ Species.DRAPION ] }, { 1: [ Species.SILICOBRA ], 36: [ Species.SANDACONDA ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.SANDILE ], 29: [ Species.KROKOROK ], 40: [ Species.KROOKODILE ] }, Species.HELIOPTILE ],
            [TimeOfDay.DAY]: [ { 1: [ Species.SANDILE ], 29: [ Species.KROKOROK ], 40: [ Species.KROOKODILE ] }, Species.HELIOPTILE ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.MARACTUS, { 1: [ Species.BRAMBLIN ], 30: [ Species.BRAMBLEGHAST ] }, Species.ORTHWORM ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.VIBRAVA ], 45: [ Species.FLYGON ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.VIBRAVA ], 45: [ Species.FLYGON ] } ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.DARUMAKA ], 35: [ Species.DARMANITAN ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.LILEEP ], 40: [ Species.CRADILY ] }, { 1: [ Species.ANORITH ], 40: [ Species.ARMALDO ] } ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.REGIROCK, Species.TAPU_BULU, Species.PHEROMOSA ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.HIPPOWDON, Species.HELIOLISK, Species.RABSCA ],
            [TimeOfDay.DAY]: [ Species.HIPPOWDON, Species.HELIOLISK, Species.RABSCA ],
            [TimeOfDay.DUSK]: [ Species.CACTURNE, Species.KROOKODILE ],
            [TimeOfDay.NIGHT]: [ Species.CACTURNE, Species.KROOKODILE ],
            [TimeOfDay.ALL]: [ Species.SANDSLASH, Species.DRAPION, Species.DARMANITAN, Species.MARACTUS, Species.SANDACONDA, Species.BRAMBLEGHAST ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CRADILY, Species.ARMALDO ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.REGIROCK, Species.TAPU_BULU, Species.PHEROMOSA ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.ICE_CAVE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.SEEL ], 34: [ Species.DEWGONG ] },
                { 1: [ Species.SWINUB ], 33: [ Species.PILOSWINE ] },
                { 1: [ Species.SNOVER ], 40: [ Species.ABOMASNOW ] },
                { 1: [ Species.VANILLITE ], 35: [ Species.VANILLISH ], 47: [ Species.VANILLUXE ] },
                { 1: [ Species.CUBCHOO ], 37: [ Species.BEARTIC ] },
                { 1: [ Species.BERGMITE ], 37: [ Species.AVALUGG ] },
                Species.CRABRAWLER,
                { 1: [ Species.SNOM ], 20: [ Species.FROSMOTH ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                Species.SNEASEL,
                { 1: [ Species.SNORUNT ], 42: [ Species.GLALIE ] },
                { 1: [ Species.SPHEAL ], 32: [ Species.SEALEO ], 44: [ Species.WALREIN ] },
                Species.EISCUE,
                { 1: [ Species.CETODDLE ], 30: [ Species.CETITAN ] }
            ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.JYNX, Species.LAPRAS, Species.FROSLASS, Species.CRYOGONAL ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DELIBIRD, Species.ROTOM, { 1: [ Species.AMAURA ], 59: [ Species.AURORUS ] } ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ARTICUNO, Species.REGICE ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.DEWGONG, Species.GLALIE, Species.WALREIN, Species.WEAVILE, Species.MAMOSWINE, Species.FROSLASS, Species.VANILLUXE, Species.BEARTIC, Species.CRYOGONAL, Species.AVALUGG, Species.CRABOMINABLE, Species.CETITAN ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.JYNX, Species.LAPRAS, Species.GLACEON, Species.AURORUS ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ARTICUNO, Species.REGICE, Species.ROTOM ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KYUREM ] }
    },
    [Biome.MEADOW]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.LEDYBA ], 18: [ Species.LEDIAN ] }, Species.ROSELIA, Species.COTTONEE, Species.MINCCINO ],
            [TimeOfDay.DAY]: [ Species.ROSELIA, Species.COTTONEE, Species.MINCCINO ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.BLITZLE ], 27: [ Species.ZEBSTRIKA ] },
                { 1: [ Species.FLABEBE ], 19: [ Species.FLOETTE ] },
                { 1: [ Species.CUTIEFLY ], 25: [ Species.RIBOMBEE ] },
                { 1: [ Species.GOSSIFLEUR ], 20: [ Species.ELDEGOSS ] },
                { 1: [ Species.WOOLOO ], 24: [ Species.DUBWOOL ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [
                { 1: [ Species.PONYTA ], 40: [ Species.RAPIDASH ] },
                { 1: [ Species.SNUBBULL ], 23: [ Species.GRANBULL ] },
                { 1: [ Species.SKITTY ], 30: [ Species.DELCATTY ] },
                Species.BOUFFALANT,
                { 1: [ Species.SMOLIV ], 25: [ Species.DOLLIV ], 35: [ Species.ARBOLIVA ] }
            ],
            [TimeOfDay.DAY]: [
                { 1: [ Species.PONYTA ], 40: [ Species.RAPIDASH ] },
                { 1: [ Species.SNUBBULL ], 23: [ Species.GRANBULL ] },
                { 1: [ Species.SKITTY ], 30: [ Species.DELCATTY ] },
                Species.BOUFFALANT,
                { 1: [ Species.SMOLIV ], 25: [ Species.DOLLIV ], 35: [ Species.ARBOLIVA ] }
            ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.JIGGLYPUFF ], 30: [ Species.WIGGLYTUFF ] },
                { 1: [ Species.MAREEP ], 15: [ Species.FLAAFFY ], 30: [ Species.AMPHAROS ] },
                { 1: [ Species.RALTS ], 20: [ Species.KIRLIA ], 30: [ Species.GARDEVOIR ] },
                { 1: [ Species.GLAMEOW ], 38: [ Species.PURUGLY ] },
                Species.ORICORIO
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [ Species.VOLBEAT, Species.ILLUMISE ],
            [TimeOfDay.ALL]: [ Species.TAUROS, Species.EEVEE, Species.MILTANK, Species.SPINDA, { 1: [ Species.APPLIN ], 30: [ Species.DIPPLIN ] }, { 1: [ Species.SPRIGATITO ], 16: [ Species.FLORAGATO ], 36: [ Species.MEOWSCARADA ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CHANSEY, Species.SYLVEON ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MELOETTA ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.LEDIAN, Species.GRANBULL, Species.DELCATTY, Species.ROSERADE, Species.CINCCINO, Species.BOUFFALANT, Species.ARBOLIVA ],
            [TimeOfDay.DAY]: [ Species.GRANBULL, Species.DELCATTY, Species.ROSERADE, Species.CINCCINO, Species.BOUFFALANT, Species.ARBOLIVA ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.TAUROS, Species.MILTANK, Species.GARDEVOIR, Species.PURUGLY, Species.ZEBSTRIKA, Species.FLORGES, Species.RIBOMBEE, Species.DUBWOOL ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [ Species.HISUI_LILLIGANT ], [TimeOfDay.DAY]: [ Species.HISUI_LILLIGANT ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.BLISSEY, Species.SYLVEON, Species.FLAPPLE, Species.APPLETUN, Species.MEOWSCARADA, Species.HYDRAPPLE ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MELOETTA ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SHAYMIN ] }
    },
    [Biome.POWER_PLANT]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                Species.PIKACHU,
                { 1: [ Species.MAGNEMITE ], 30: [ Species.MAGNETON ] },
                { 1: [ Species.VOLTORB ], 30: [ Species.ELECTRODE ] },
                { 1: [ Species.ELECTRIKE ], 26: [ Species.MANECTRIC ] },
                { 1: [ Species.SHINX ], 15: [ Species.LUXIO ], 30: [ Species.LUXRAY ] },
                Species.DEDENNE,
                { 1: [ Species.GRUBBIN ], 20: [ Species.CHARJABUG ] },
                { 1: [ Species.PAWMI ], 18: [ Species.PAWMO ], 32: [ Species.PAWMOT ] },
                { 1: [ Species.TADBULB ], 30: [ Species.BELLIBOLT ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ELECTABUZZ, Species.PLUSLE, Species.MINUN, Species.PACHIRISU, Species.EMOLGA, Species.TOGEDEMARU ] },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.MAREEP ], 15: [ Species.FLAAFFY ] } ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.JOLTEON, Species.HISUI_VOLTORB ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.RAIKOU, Species.THUNDURUS, Species.XURKITREE, Species.ZERAORA, Species.REGIELEKI ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.RAICHU, Species.MANECTRIC, Species.LUXRAY, Species.MAGNEZONE, Species.ELECTIVIRE, Species.DEDENNE, Species.VIKAVOLT, Species.TOGEDEMARU, Species.PAWMOT, Species.BELLIBOLT ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.JOLTEON, Species.AMPHAROS, Species.HISUI_ELECTRODE ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ZAPDOS, Species.RAIKOU, Species.THUNDURUS, Species.XURKITREE, Species.ZERAORA, Species.REGIELEKI ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ZEKROM ] }
    },
    [Biome.VOLCANO]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                Species.VULPIX,
                Species.GROWLITHE,
                { 1: [ Species.PONYTA ], 40: [ Species.RAPIDASH ] },
                { 1: [ Species.SLUGMA ], 38: [ Species.MAGCARGO ] },
                { 1: [ Species.NUMEL ], 33: [ Species.CAMERUPT ] },
                { 1: [ Species.SALANDIT ], 33: [ Species.SALAZZLE ] },
                { 1: [ Species.ROLYCOLY ], 18: [ Species.CARKOL ], 34: [ Species.COALOSSAL ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MAGMAR, Species.TORKOAL, { 1: [ Species.PANSEAR ], 30: [ Species.SIMISEAR ] }, Species.HEATMOR, Species.TURTONATOR ] },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.CHARMANDER ], 16: [ Species.CHARMELEON ], 36: [ Species.CHARIZARD ] },
                { 1: [ Species.CYNDAQUIL ], 14: [ Species.QUILAVA ], 36: [ Species.TYPHLOSION ] },
                { 1: [ Species.CHIMCHAR ], 14: [ Species.MONFERNO ], 36: [ Species.INFERNAPE ] },
                { 1: [ Species.TEPIG ], 17: [ Species.PIGNITE ], 36: [ Species.EMBOAR ] },
                { 1: [ Species.FENNEKIN ], 16: [ Species.BRAIXEN ], 36: [ Species.DELPHOX ] },
                { 1: [ Species.LITTEN ], 17: [ Species.TORRACAT ], 34: [ Species.INCINEROAR ] },
                { 1: [ Species.SCORBUNNY ], 16: [ Species.RABOOT ], 35: [ Species.CINDERACE ] },
                { 1: [ Species.CHARCADET ], 30: [ Species.ARMAROUGE ] }
            ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.FLAREON, Species.ROTOM, { 1: [ Species.LARVESTA ], 59: [ Species.VOLCARONA ] }, Species.HISUI_GROWLITHE ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ENTEI, Species.HEATRAN, Species.VOLCANION, Species.CHI_YU ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.NINETALES, Species.ARCANINE, Species.RAPIDASH, Species.MAGCARGO, Species.CAMERUPT, Species.TORKOAL, Species.MAGMORTAR, Species.SIMISEAR, Species.HEATMOR, Species.SALAZZLE, Species.TURTONATOR, Species.COALOSSAL ]
        },
        [BiomePoolTier.BOSS_RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.CHARIZARD, Species.FLAREON, Species.TYPHLOSION, Species.INFERNAPE, Species.EMBOAR, Species.VOLCARONA, Species.DELPHOX, Species.INCINEROAR, Species.CINDERACE, Species.ARMAROUGE, Species.HISUI_ARCANINE ]
        },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MOLTRES, Species.ENTEI, Species.ROTOM, Species.HEATRAN, Species.VOLCANION, Species.CHI_YU ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.RESHIRAM ] }
    },
    [Biome.GRAVEYARD]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.GASTLY ], 25: [ Species.HAUNTER ] },
                { 1: [ Species.SHUPPET ], 37: [ Species.BANETTE ] },
                { 1: [ Species.DUSKULL ], 37: [ Species.DUSCLOPS ] },
                { 1: [ Species.DRIFLOON ], 28: [ Species.DRIFBLIM ] },
                { 1: [ Species.LITWICK ], 41: [ Species.LAMPENT ] },
                Species.PHANTUMP,
                Species.PUMPKABOO,
                { 1: [ Species.GREAVARD ], 60: [ Species.HOUNDSTONE ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.CUBONE ], 28: [ Species.MAROWAK ] }, { 1: [ Species.YAMASK ], 34: [ Species.COFAGRIGUS ] }, { 1: [ Species.SINISTEA ], 30: [ Species.POLTEAGEIST ] } ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MISDREAVUS, Species.MIMIKYU, { 1: [ Species.FUECOCO ], 16: [ Species.CROCALOR ], 36: [ Species.SKELEDIRGE ] }, Species.CERULEDGE ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SPIRITOMB ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MARSHADOW, Species.SPECTRIER ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.MAROWAK ],
            [TimeOfDay.DAY]: [ Species.MAROWAK ],
            [TimeOfDay.DUSK]: [ Species.MAROWAK ],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.GENGAR, Species.BANETTE, Species.DRIFBLIM, Species.MISMAGIUS, Species.DUSKNOIR, Species.CHANDELURE, Species.TREVENANT, Species.GOURGEIST, Species.MIMIKYU, Species.POLTEAGEIST, Species.HOUNDSTONE ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.SKELEDIRGE, Species.CERULEDGE, Species.HISUI_TYPHLOSION ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MARSHADOW, Species.SPECTRIER ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GIRATINA ] }
    },
    [Biome.DOJO]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.MANKEY ], 28: [ Species.PRIMEAPE ], 75: [ Species.ANNIHILAPE ] },
                { 1: [ Species.MAKUHITA ], 24: [ Species.HARIYAMA ] },
                { 1: [ Species.MEDITITE ], 37: [ Species.MEDICHAM ] },
                { 1: [ Species.STUFFUL ], 27: [ Species.BEWEAR ] },
                { 1: [ Species.CLOBBOPUS ], 55: [ Species.GRAPPLOCT ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.CROAGUNK ], 37: [ Species.TOXICROAK ] }, { 1: [ Species.SCRAGGY ], 39: [ Species.SCRAFTY ] }, { 1: [ Species.MIENFOO ], 50: [ Species.MIENSHAO ] } ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.HITMONLEE, Species.HITMONCHAN, Species.LUCARIO, Species.THROH, Species.SAWK, { 1: [ Species.PANCHAM ], 52: [ Species.PANGORO ] } ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.HITMONTOP, Species.GALLADE, Species.GALAR_FARFETCHD ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.TERRAKION, Species.KUBFU, Species.GALAR_ZAPDOS ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.HITMONLEE, Species.HITMONCHAN, Species.HARIYAMA, Species.MEDICHAM, Species.LUCARIO, Species.TOXICROAK, Species.THROH, Species.SAWK, Species.SCRAFTY, Species.MIENSHAO, Species.BEWEAR, Species.GRAPPLOCT, Species.ANNIHILAPE ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.HITMONTOP, Species.GALLADE, Species.PANGORO, Species.SIRFETCHD, Species.HISUI_DECIDUEYE ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.TERRAKION, Species.URSHIFU ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ZAMAZENTA, Species.GALAR_ZAPDOS ] }
    },
    [Biome.FACTORY]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.MACHOP ], 28: [ Species.MACHOKE ] },
                { 1: [ Species.MAGNEMITE ], 30: [ Species.MAGNETON ] },
                { 1: [ Species.VOLTORB ], 30: [ Species.ELECTRODE ] },
                { 1: [ Species.TIMBURR ], 25: [ Species.GURDURR ] },
                { 1: [ Species.KLINK ], 38: [ Species.KLANG ], 49: [ Species.KLINKLANG ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.BRONZOR ], 33: [ Species.BRONZONG ] }, Species.KLEFKI ] },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.PORYGON ], 30: [ Species.PORYGON2 ] } ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.BELDUM ], 20: [ Species.METANG ], 45: [ Species.METAGROSS ] } ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GENESECT, Species.MAGEARNA ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KLINKLANG, Species.KLEFKI ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GENESECT, Species.MAGEARNA ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.RUINS]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.DROWZEE ], 26: [ Species.HYPNO ] },
                { 1: [ Species.NATU ], 25: [ Species.XATU ] },
                Species.UNOWN,
                { 1: [ Species.SPOINK ], 32: [ Species.GRUMPIG ] },
                { 1: [ Species.BALTOY ], 36: [ Species.CLAYDOL ] },
                { 1: [ Species.ELGYEM ], 42: [ Species.BEHEEYEM ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.ABRA ], 16: [ Species.KADABRA ] }, Species.SIGILYPH, { 1: [ Species.TINKATINK ], 24: [ Species.TINKATUFF ], 38: [ Species.TINKATON ] } ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MR_MIME, Species.WOBBUFFET, { 1: [ Species.GOTHITA ], 32: [ Species.GOTHORITA ], 41: [ Species.GOTHITELLE ] }, Species.STONJOURNER ] },
        [BiomePoolTier.SUPER_RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [ Species.ESPEON ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.GALAR_YAMASK ], 34: [ Species.RUNERIGUS ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.GALAR_YAMASK ], 34: [ Species.RUNERIGUS ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.ARCHEN ], 37: [ Species.ARCHEOPS ] } ]
        },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.REGISTEEL, Species.FEZANDIPITI ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ALAKAZAM, Species.HYPNO, Species.XATU, Species.GRUMPIG, Species.CLAYDOL, Species.SIGILYPH, Species.GOTHITELLE, Species.BEHEEYEM, Species.TINKATON ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [ Species.ESPEON ], [TimeOfDay.DUSK]: [ Species.RUNERIGUS ], [TimeOfDay.NIGHT]: [ Species.RUNERIGUS ], [TimeOfDay.ALL]: [ Species.MR_MIME, Species.WOBBUFFET, Species.ARCHEOPS ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.REGISTEEL, Species.FEZANDIPITI ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KORAIDON ] }
    },
    [Biome.WASTELAND]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [
                { 1: [ Species.BAGON ], 30: [ Species.SHELGON ], 50: [ Species.SALAMENCE ] },
                { 1: [ Species.GOOMY ], 40: [ Species.SLIGGOO ], 80: [ Species.GOODRA ] },
                { 1: [ Species.JANGMO_O ], 35: [ Species.HAKAMO_O ], 45: [ Species.KOMMO_O ] }
            ],
            [TimeOfDay.DAY]: [
                { 1: [ Species.BAGON ], 30: [ Species.SHELGON ], 50: [ Species.SALAMENCE ] },
                { 1: [ Species.GOOMY ], 40: [ Species.SLIGGOO ], 80: [ Species.GOODRA ] },
                { 1: [ Species.JANGMO_O ], 35: [ Species.HAKAMO_O ], 45: [ Species.KOMMO_O ] }
            ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.LARVITAR ], 30: [ Species.PUPITAR ], 55: [ Species.TYRANITAR ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.LARVITAR ], 30: [ Species.PUPITAR ], 55: [ Species.TYRANITAR ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.VIBRAVA ], 45: [ Species.FLYGON ] },
                { 1: [ Species.GIBLE ], 24: [ Species.GABITE ], 48: [ Species.GARCHOMP ] },
                { 1: [ Species.AXEW ], 38: [ Species.FRAXURE ], 48: [ Species.HAXORUS ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ { 1: [ Species.DEINO ], 50: [ Species.ZWEILOUS ], 64: [ Species.HYDREIGON ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.DEINO ], 50: [ Species.ZWEILOUS ], 64: [ Species.HYDREIGON ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.SWABLU ], 35: [ Species.ALTARIA ] }, Species.DRAMPA, Species.CYCLIZAR ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ { 1: [ Species.DREEPY ], 50: [ Species.DRAKLOAK ], 60: [ Species.DRAGAPULT ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.DREEPY ], 50: [ Species.DRAKLOAK ], 60: [ Species.DRAGAPULT ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.DRATINI ], 30: [ Species.DRAGONAIR ], 55: [ Species.DRAGONITE ] }, { 1: [ Species.FRIGIBAX ], 35: [ Species.ARCTIBAX ], 54: [ Species.BAXCALIBUR ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.AERODACTYL, Species.DRUDDIGON, { 1: [ Species.TYRUNT ], 59: [ Species.TYRANTRUM ] }, Species.DRACOZOLT, Species.DRACOVISH ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.REGIDRAGO ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.SALAMENCE, Species.GOODRA, Species.KOMMO_O ],
            [TimeOfDay.DAY]: [ Species.SALAMENCE, Species.GOODRA, Species.KOMMO_O ],
            [TimeOfDay.DUSK]: [ Species.TYRANITAR, Species.DRAGAPULT ],
            [TimeOfDay.NIGHT]: [ Species.TYRANITAR, Species.DRAGAPULT ],
            [TimeOfDay.ALL]: [ Species.DRAGONITE, Species.FLYGON, Species.GARCHOMP, Species.HAXORUS, Species.DRAMPA, Species.BAXCALIBUR ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.AERODACTYL, Species.DRUDDIGON, Species.TYRANTRUM, Species.DRACOZOLT, Species.DRACOVISH ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.REGIDRAGO ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DIALGA ] }
    },
    [Biome.ABYSS]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                Species.MURKROW,
                { 1: [ Species.HOUNDOUR ], 24: [ Species.HOUNDOOM ] },
                Species.SABLEYE,
                { 1: [ Species.PURRLOIN ], 20: [ Species.LIEPARD ] },
                { 1: [ Species.PAWNIARD ], 52: [ Species.BISHARP ], 64: [ Species.KINGAMBIT ] },
                { 1: [ Species.NICKIT ], 18: [ Species.THIEVUL ] },
                { 1: [ Species.IMPIDIMP ], 32: [ Species.MORGREM ], 42: [ Species.GRIMMSNARL ] },
                { 1: [ Species.MASCHIFF ], 30: [ Species.MABOSSTIFF ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.ABSOL, Species.SPIRITOMB, { 1: [ Species.ZORUA ], 30: [ Species.ZOROARK ] }, { 1: [ Species.DEINO ], 50: [ Species.ZWEILOUS ], 64: [ Species.HYDREIGON ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.UMBREON ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DARKRAI, Species.GALAR_MOLTRES ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.HOUNDOOM, Species.SABLEYE, Species.ABSOL, Species.HONCHKROW, Species.SPIRITOMB, Species.LIEPARD, Species.ZOROARK, Species.HYDREIGON, Species.THIEVUL, Species.GRIMMSNARL, Species.MABOSSTIFF, Species.KINGAMBIT ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.UMBREON, Species.HISUI_SAMUROTT ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DARKRAI ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.PALKIA, Species.YVELTAL, Species.GALAR_MOLTRES ] }
    },
    [Biome.SPACE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [ Species.SOLROCK ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [ Species.LUNATONE ],
            [TimeOfDay.ALL]: [ Species.CLEFAIRY, { 1: [ Species.BRONZOR ], 33: [ Species.BRONZONG ] }, { 1: [ Species.MUNNA ], 30: [ Species.MUSHARNA ] }, Species.MINIOR ]
        },
        [BiomePoolTier.UNCOMMON]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.BALTOY ], 36: [ Species.CLAYDOL ] }, { 1: [ Species.ELGYEM ], 42: [ Species.BEHEEYEM ] } ] },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ { 1: [ Species.BELDUM ], 20: [ Species.METANG ], 45: [ Species.METAGROSS ] }, Species.SIGILYPH, { 1: [ Species.SOLOSIS ], 32: [ Species.DUOSION ], 41: [ Species.REUNICLUS ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.PORYGON ], 30: [ Species.PORYGON2 ] } ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.COSMOG ], 43: [ Species.COSMOEM ] }, Species.CELESTEELA ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [ Species.SOLROCK ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [ Species.LUNATONE ], [TimeOfDay.ALL]: [ Species.CLEFABLE, Species.BRONZONG, Species.MUSHARNA, Species.REUNICLUS, Species.MINIOR ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.METAGROSS, Species.PORYGON_Z ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CELESTEELA ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [ Species.SOLGALEO ], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [ Species.LUNALA ], [TimeOfDay.ALL]: [ Species.RAYQUAZA, Species.NECROZMA ] }
    },
    [Biome.CONSTRUCTION_SITE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.MACHOP ], 28: [ Species.MACHOKE ] },
                { 1: [ Species.MAGNEMITE ], 30: [ Species.MAGNETON ] },
                { 1: [ Species.DRILBUR ], 31: [ Species.EXCADRILL ] },
                { 1: [ Species.TIMBURR ], 25: [ Species.GURDURR ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.GRIMER ], 38: [ Species.MUK ] },
                { 1: [ Species.KOFFING ], 35: [ Species.WEEZING ] },
                { 1: [ Species.RHYHORN ], 42: [ Species.RHYDON ] },
                { 1: [ Species.SCRAGGY ], 39: [ Species.SCRAFTY ] }
            ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [ { 1: [ Species.GALAR_MEOWTH ], 28: [ Species.PERRSERKER ] } ], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ONIX, Species.HITMONLEE, Species.HITMONCHAN, Species.DURALUDON ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DITTO, Species.HITMONTOP ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.COBALION, Species.STAKATAKA ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MACHAMP, Species.CONKELDURR ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [ Species.PERRSERKER ], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ARCHALUDON ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.COBALION, Species.STAKATAKA ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.JUNGLE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [ Species.VESPIQUEN, { 1: [ Species.CHERUBI ], 25: [ Species.CHERRIM ] }, { 1: [ Species.SEWADDLE ], 20: [ Species.SWADLOON ], 30: [ Species.LEAVANNY ] } ],
            [TimeOfDay.DAY]: [ Species.VESPIQUEN, { 1: [ Species.CHERUBI ], 25: [ Species.CHERRIM ] }, { 1: [ Species.SEWADDLE ], 20: [ Species.SWADLOON ], 30: [ Species.LEAVANNY ] } ],
            [TimeOfDay.DUSK]: [ Species.SHROOMISH, { 1: [ Species.PURRLOIN ], 20: [ Species.LIEPARD ] }, { 1: [ Species.FOONGUS ], 39: [ Species.AMOONGUSS ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.SPINARAK ], 22: [ Species.ARIADOS ] }, Species.SHROOMISH, { 1: [ Species.PURRLOIN ], 20: [ Species.LIEPARD ] }, { 1: [ Species.FOONGUS ], 39: [ Species.AMOONGUSS ] } ],
            [TimeOfDay.ALL]: [ Species.AIPOM, { 1: [ Species.BLITZLE ], 27: [ Species.ZEBSTRIKA ] }, { 1: [ Species.PIKIPEK ], 14: [ Species.TRUMBEAK ], 28: [ Species.TOUCANNON ] } ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ Species.EXEGGCUTE, Species.TROPIUS, Species.COMBEE, Species.KOMALA ],
            [TimeOfDay.DAY]: [ Species.EXEGGCUTE, Species.TROPIUS, Species.COMBEE, Species.KOMALA ],
            [TimeOfDay.DUSK]: [ Species.TANGELA, { 1: [ Species.SPINARAK ], 22: [ Species.ARIADOS ] }, { 1: [ Species.PANCHAM ], 52: [ Species.PANGORO ] } ],
            [TimeOfDay.NIGHT]: [ Species.TANGELA, { 1: [ Species.PANCHAM ], 52: [ Species.PANGORO ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.PANSAGE ], 30: [ Species.SIMISAGE ] },
                { 1: [ Species.PANSEAR ], 30: [ Species.SIMISEAR ] },
                { 1: [ Species.PANPOUR ], 30: [ Species.SIMIPOUR ] },
                { 1: [ Species.JOLTIK ], 36: [ Species.GALVANTULA ] },
                { 1: [ Species.LITLEO ], 35: [ Species.PYROAR ] },
                { 1: [ Species.FOMANTIS ], 44: [ Species.LURANTIS ] },
                Species.FALINKS
            ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.FOONGUS ], 39: [ Species.AMOONGUSS ] }, Species.PASSIMIAN, { 1: [ Species.GALAR_PONYTA ], 40: [ Species.GALAR_RAPIDASH ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.FOONGUS ], 39: [ Species.AMOONGUSS ] }, Species.PASSIMIAN ],
            [TimeOfDay.DUSK]: [ Species.ORANGURU ],
            [TimeOfDay.NIGHT]: [ Species.ORANGURU ],
            [TimeOfDay.ALL]: [
                Species.SCYTHER,
                Species.YANMA,
                { 1: [ Species.SLAKOTH ], 18: [ Species.VIGOROTH ], 36: [ Species.SLAKING ] },
                Species.SEVIPER,
                Species.CARNIVINE,
                { 1: [ Species.SNIVY ], 17: [ Species.SERVINE ], 36: [ Species.SERPERIOR ] },
                { 1: [ Species.GROOKEY ], 16: [ Species.THWACKEY ], 35: [ Species.RILLABOOM ] }
            ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KANGASKHAN, Species.CHATOT, Species.KLEAVOR ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.TAPU_LELE, Species.BUZZWOLE, Species.ZARUDE, Species.MUNKIDORI ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.EXEGGUTOR, Species.TROPIUS, Species.CHERRIM, Species.LEAVANNY, Species.KOMALA ],
            [TimeOfDay.DAY]: [ Species.EXEGGUTOR, Species.TROPIUS, Species.CHERRIM, Species.LEAVANNY, Species.KOMALA ],
            [TimeOfDay.DUSK]: [ Species.BRELOOM, Species.TANGROWTH, Species.AMOONGUSS, Species.PANGORO ],
            [TimeOfDay.NIGHT]: [ Species.BRELOOM, Species.TANGROWTH, Species.AMOONGUSS, Species.PANGORO ],
            [TimeOfDay.ALL]: [ Species.SEVIPER, Species.AMBIPOM, Species.CARNIVINE, Species.YANMEGA, Species.GALVANTULA, Species.PYROAR, Species.TOUCANNON, Species.LURANTIS, Species.FALINKS ]
        },
        [BiomePoolTier.BOSS_RARE]: {
            [TimeOfDay.DAWN]: [ Species.AMOONGUSS, Species.GALAR_RAPIDASH ],
            [TimeOfDay.DAY]: [ Species.AMOONGUSS ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.KANGASKHAN, Species.SCIZOR, Species.SLAKING, Species.LEAFEON, Species.SERPERIOR, Species.RILLABOOM ]
        },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.TAPU_LELE, Species.BUZZWOLE, Species.ZARUDE, Species.MUNKIDORI ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.KLEAVOR ] }
    },
    [Biome.FAIRY_CAVE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.JIGGLYPUFF ], 30: [ Species.WIGGLYTUFF ] },
                { 1: [ Species.MARILL ], 18: [ Species.AZUMARILL ] },
                Species.MAWILE,
                { 1: [ Species.SPRITZEE ], 40: [ Species.AROMATISSE ] },
                { 1: [ Species.SWIRLIX ], 40: [ Species.SLURPUFF ] },
                { 1: [ Species.CUTIEFLY ], 25: [ Species.RIBOMBEE ] },
                { 1: [ Species.MORELULL ], 24: [ Species.SHIINOTIC ] },
                { 1: [ Species.MILCERY ], 30: [ Species.ALCREMIE ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                Species.CLEFAIRY,
                Species.TOGETIC,
                { 1: [ Species.RALTS ], 20: [ Species.KIRLIA ], 30: [ Species.GARDEVOIR ] },
                Species.CARBINK,
                Species.COMFEY,
                { 1: [ Species.HATENNA ], 32: [ Species.HATTREM ], 42: [ Species.HATTERENE ] }
            ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.AUDINO, Species.ETERNAL_FLOETTE ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DIANCIE, Species.ENAMORUS ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.WIGGLYTUFF, Species.MAWILE, Species.TOGEKISS, Species.AUDINO, Species.AROMATISSE, Species.SLURPUFF, Species.CARBINK, Species.RIBOMBEE, Species.SHIINOTIC, Species.COMFEY, Species.HATTERENE, Species.ALCREMIE ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ETERNAL_FLOETTE ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DIANCIE, Species.ENAMORUS ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.XERNEAS ] }
    },
    [Biome.TEMPLE]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.GASTLY ], 25: [ Species.HAUNTER ] },
                { 1: [ Species.NATU ], 25: [ Species.XATU ] },
                { 1: [ Species.DUSKULL ], 37: [ Species.DUSCLOPS ] },
                { 1: [ Species.YAMASK ], 34: [ Species.COFAGRIGUS ] },
                { 1: [ Species.GOLETT ], 43: [ Species.GOLURK ] },
                { 1: [ Species.HONEDGE ], 35: [ Species.DOUBLADE ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.CUBONE ], 28: [ Species.MAROWAK ] },
                { 1: [ Species.BALTOY ], 36: [ Species.CLAYDOL ] },
                { 1: [ Species.CHINGLING ], 20: [ Species.CHIMECHO ] },
                { 1: [ Species.SKORUPI ], 40: [ Species.DRAPION ] },
                { 1: [ Species.LITWICK ], 41: [ Species.LAMPENT ] }
            ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.GIMMIGHOUL ], 40: [ Species.GHOLDENGO ] } ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.HOOPA, Species.TAPU_KOKO ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.CHIMECHO, Species.COFAGRIGUS, Species.GOLURK, Species.AEGISLASH ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GHOLDENGO ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.HOOPA, Species.TAPU_KOKO ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.REGIGIGAS ] }
    },
    [Biome.SLUM]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ { 1: [ Species.PATRAT ], 20: [ Species.WATCHOG ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.PATRAT ], 20: [ Species.WATCHOG ] } ],
            [TimeOfDay.ALL]: [
                { 1: [ Species.RATTATA ], 20: [ Species.RATICATE ] },
                { 1: [ Species.GRIMER ], 38: [ Species.MUK ] },
                { 1: [ Species.KOFFING ], 35: [ Species.WEEZING ] },
                { 1: [ Species.TRUBBISH ], 36: [ Species.GARBODOR ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ { 1: [ Species.STUNKY ], 34: [ Species.SKUNTANK ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.STUNKY ], 34: [ Species.SKUNTANK ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.BURMY ], 20: [ Species.WORMADAM ] } ]
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ Species.TOXTRICITY, { 1: [ Species.GALAR_LINOONE ], 65: [ Species.OBSTAGOON ] }, Species.GALAR_ZIGZAGOON ],
            [TimeOfDay.NIGHT]: [ Species.TOXTRICITY, { 1: [ Species.GALAR_LINOONE ], 65: [ Species.OBSTAGOON ] }, Species.GALAR_ZIGZAGOON ],
            [TimeOfDay.ALL]: [ { 1: [ Species.VAROOM ], 40: [ Species.REVAVROOM ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GUZZLORD ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [ Species.SKUNTANK, Species.WATCHOG ], [TimeOfDay.NIGHT]: [ Species.SKUNTANK, Species.WATCHOG ], [TimeOfDay.ALL]: [ Species.MUK, Species.WEEZING, Species.WORMADAM, Species.GARBODOR ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [ Species.TOXTRICITY, Species.OBSTAGOON ], [TimeOfDay.NIGHT]: [ Species.TOXTRICITY, Species.OBSTAGOON ], [TimeOfDay.ALL]: [ Species.REVAVROOM, Species.GALAR_WEEZING ] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GUZZLORD ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.SNOWY_FOREST]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ Species.SNEASEL, { 1: [ Species.TEDDIURSA ], 30: [ Species.URSARING ] }, { 1: [ Species.SNOM ], 20: [ Species.FROSMOTH ] } ],
            [TimeOfDay.NIGHT]: [ Species.SNEASEL, { 1: [ Species.TEDDIURSA ], 30: [ Species.URSARING ] }, { 1: [ Species.SNOM ], 20: [ Species.FROSMOTH ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.SWINUB ], 33: [ Species.PILOSWINE ] }, { 1: [ Species.SNOVER ], 40: [ Species.ABOMASNOW ] }, Species.EISCUE ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ Species.SNEASEL, { 1: [ Species.TEDDIURSA ], 30: [ Species.URSARING ] }, Species.STANTLER ],
            [TimeOfDay.DAY]: [ Species.SNEASEL, { 1: [ Species.TEDDIURSA ], 30: [ Species.URSARING ] }, Species.STANTLER ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: []
        },
        [BiomePoolTier.RARE]: {
            [TimeOfDay.DAWN]: [ { 1: [ Species.GALAR_DARUMAKA ], 30: [ Species.GALAR_DARMANITAN ] } ],
            [TimeOfDay.DAY]: [ { 1: [ Species.GALAR_DARUMAKA ], 30: [ Species.GALAR_DARMANITAN ] } ],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [ Species.DELIBIRD, { 1: [ Species.ALOLA_SANDSHREW ], 30: [ Species.ALOLA_SANDSLASH ] }, { 1: [ Species.ALOLA_VULPIX ], 30: [ Species.ALOLA_NINETALES ] } ]
        },
        [BiomePoolTier.SUPER_RARE]: {
            [TimeOfDay.DAWN]: [ Species.HISUI_SNEASEL ],
            [TimeOfDay.DAY]: [ Species.HISUI_SNEASEL ],
            [TimeOfDay.DUSK]: [ { 1: [ Species.HISUI_ZORUA ], 30: [ Species.HISUI_ZOROARK ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.HISUI_ZORUA ], 30: [ Species.HISUI_ZOROARK ] } ],
            [TimeOfDay.ALL]: [ { 1: [ Species.GALAR_MR_MIME ], 42: [ Species.MR_RIME ] }, Species.ARCTOZOLT, Species.HISUI_AVALUGG ]
        },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GLASTRIER, Species.CHIEN_PAO, Species.GALAR_ARTICUNO ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [ Species.WYRDEER ], [TimeOfDay.DAY]: [ Species.WYRDEER ], [TimeOfDay.DUSK]: [ Species.FROSMOTH ], [TimeOfDay.NIGHT]: [ Species.FROSMOTH ], [TimeOfDay.ALL]: [ Species.ABOMASNOW, Species.URSALUNA ] },
        [BiomePoolTier.BOSS_RARE]: {
            [TimeOfDay.DAWN]: [ Species.SNEASLER, Species.GALAR_DARMANITAN ],
            [TimeOfDay.DAY]: [ Species.SNEASLER, Species.GALAR_DARMANITAN ],
            [TimeOfDay.DUSK]: [ Species.HISUI_ZOROARK ],
            [TimeOfDay.NIGHT]: [ Species.HISUI_ZOROARK ],
            [TimeOfDay.ALL]: [ Species.MR_RIME, Species.ARCTOZOLT, Species.ALOLA_SANDSLASH, Species.ALOLA_NINETALES ]
        },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.GLASTRIER, Species.CHIEN_PAO ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ZACIAN, Species.GALAR_ARTICUNO ] }
    },
    [Biome.ISLAND]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [ { 1: [ Species.ALOLA_RATTATA ], 30: [ Species.ALOLA_RATICATE ] }, { 1: [ Species.ALOLA_MEOWTH ], 30: [ Species.ALOLA_PERSIAN ] } ],
            [TimeOfDay.NIGHT]: [ { 1: [ Species.ALOLA_RATTATA ], 30: [ Species.ALOLA_RATICATE ] }, { 1: [ Species.ALOLA_MEOWTH ], 30: [ Species.ALOLA_PERSIAN ] } ],
            [TimeOfDay.ALL]: [
                Species.ORICORIO,
                { 1: [ Species.ALOLA_SANDSHREW ], 30: [ Species.ALOLA_SANDSLASH ] },
                { 1: [ Species.ALOLA_VULPIX ], 30: [ Species.ALOLA_NINETALES ] },
                { 1: [ Species.ALOLA_DIGLETT ], 26: [ Species.ALOLA_DUGTRIO ] },
                { 1: [ Species.ALOLA_GEODUDE ], 25: [ Species.ALOLA_GRAVELER ], 40: [ Species.ALOLA_GOLEM ] },
                { 1: [ Species.ALOLA_GRIMER ], 38: [ Species.ALOLA_MUK ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: {
            [TimeOfDay.DAWN]: [ Species.ALOLA_RAICHU, Species.ALOLA_EXEGGUTOR ],
            [TimeOfDay.DAY]: [ Species.ALOLA_RAICHU, Species.ALOLA_EXEGGUTOR ],
            [TimeOfDay.DUSK]: [ Species.ALOLA_MAROWAK ],
            [TimeOfDay.NIGHT]: [ Species.ALOLA_MAROWAK ],
            [TimeOfDay.ALL]: [ Species.BRUXISH ]
        },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.BLACEPHALON ] },
        [BiomePoolTier.BOSS]: {
            [TimeOfDay.DAWN]: [ Species.ALOLA_RAICHU, Species.ALOLA_EXEGGUTOR ],
            [TimeOfDay.DAY]: [ Species.ALOLA_RAICHU, Species.ALOLA_EXEGGUTOR ],
            [TimeOfDay.DUSK]: [ Species.ALOLA_RATICATE, Species.ALOLA_PERSIAN, Species.ALOLA_MAROWAK ],
            [TimeOfDay.NIGHT]: [ Species.ALOLA_RATICATE, Species.ALOLA_PERSIAN, Species.ALOLA_MAROWAK ],
            [TimeOfDay.ALL]: [ Species.ORICORIO, Species.BRUXISH, Species.ALOLA_SANDSLASH, Species.ALOLA_NINETALES, Species.ALOLA_DUGTRIO, Species.ALOLA_GOLEM, Species.ALOLA_MUK ]
        },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.BLACEPHALON ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    },
    [Biome.LABORATORY]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                { 1: [ Species.MAGNEMITE ], 30: [ Species.MAGNETON ] },
                { 1: [ Species.GRIMER ], 38: [ Species.MUK ] },
                { 1: [ Species.VOLTORB ], 30: [ Species.ELECTRODE ] },
                { 1: [ Species.BRONZOR ], 33: [ Species.BRONZONG ] },
                { 1: [ Species.KLINK ], 38: [ Species.KLANG ], 49: [ Species.KLINKLANG ] }
            ]
        },
        [BiomePoolTier.UNCOMMON]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ { 1: [ Species.SOLOSIS ], 32: [ Species.DUOSION ], 41: [ Species.REUNICLUS ] } ] },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.DITTO, { 1: [ Species.PORYGON ], 30: [ Species.PORYGON2 ] } ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ROTOM ] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.TYPE_NULL ] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MUK, Species.ELECTRODE, Species.BRONZONG, Species.MAGNEZONE, Species.PORYGON_Z, Species.REUNICLUS, Species.KLINKLANG ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ROTOM, Species.ZYGARDE, Species.SILVALLY ] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.MEWTWO, Species.MIRAIDON ] }
    },
    [Biome.END]: {
        [BiomePoolTier.COMMON]: {
            [TimeOfDay.DAWN]: [],
            [TimeOfDay.DAY]: [],
            [TimeOfDay.DUSK]: [],
            [TimeOfDay.NIGHT]: [],
            [TimeOfDay.ALL]: [
                Species.GREAT_TUSK,
                Species.SCREAM_TAIL,
                Species.BRUTE_BONNET,
                Species.FLUTTER_MANE,
                Species.SLITHER_WING,
                Species.SANDY_SHOCKS,
                Species.IRON_TREADS,
                Species.IRON_BUNDLE,
                Species.IRON_HANDS,
                Species.IRON_JUGULIS,
                Species.IRON_MOTH,
                Species.IRON_THORNS
            ]
        },
        [BiomePoolTier.UNCOMMON]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ROARING_MOON, Species.IRON_VALIANT ] },
        [BiomePoolTier.RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.WALKING_WAKE, Species.IRON_LEAVES, Species.GOUGING_FIRE, Species.RAGING_BOLT, Species.IRON_BOULDER, Species.IRON_CROWN ] },
        [BiomePoolTier.SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [ Species.ETERNATUS ] },
        [BiomePoolTier.BOSS_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_SUPER_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] },
        [BiomePoolTier.BOSS_ULTRA_RARE]: { [TimeOfDay.DAWN]: [], [TimeOfDay.DAY]: [], [TimeOfDay.DUSK]: [], [TimeOfDay.NIGHT]: [], [TimeOfDay.ALL]: [] }
    }
};
