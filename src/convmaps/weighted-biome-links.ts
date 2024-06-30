import {Biome} from "../enums/biome";

// weightedBiomeLinks 객체는 Map 으로,
// Biome 을 KEY 로 하여 해당 Biome 의 다음 Biome 이 될 수 있는 선택지들을
// WeightedBiome 형태의 VALUE 를 가진다.
export const weightedBiomeLinks: Map<Biome, WeightedBiome[]> = new Map<Biome, WeightedBiome[]>;
setWeightedBiome(weightedBiomeLinks);

interface WeightedBiome {
    key: number,
    weight: number,
    totalWeight: number,
}

function setWeightedBiome(weightedBiomeLinks: Map<Biome, WeightedBiome[]>) {
    weightedBiomeLinks.set(Biome.TOWN, [{
        key: Biome.PLAINS,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.PLAINS, [{
        key: Biome.GRASS,
        weight: 1,
        totalWeight: 3,
    }, {
        key: Biome.METROPOLIS,
        weight: 1,
        totalWeight: 3,
    }, {
        key: Biome.LAKE,
        weight: 1,
        totalWeight: 3,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.GRASS, [{
        key: Biome.TALL_GRASS,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.TALL_GRASS, [{
        key: Biome.FOREST,
        weight: 1,
        totalWeight: 2,
    }, {
        key: Biome.CAVE,
        weight: 1,
        totalWeight: 2,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.SLUM, [{
        key: Biome.CONSTRUCTION_SITE,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.FOREST, [{
        key: Biome.JUNGLE,
        weight: 1,
        totalWeight: 2,
    }, {
        key: Biome.MEADOW,
        weight: 1,
        totalWeight: 2,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.SEA, [{
        key: Biome.SEABED,
        weight: 1,
        totalWeight: 2,
    }, {
        key: Biome.ICE_CAVE,
        weight: 1,
        totalWeight: 2,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.SWAMP, [{
        key: Biome.GRAVEYARD,
        weight: 1,
        totalWeight: 2,
    }, {
        key: Biome.TALL_GRASS,
        weight: 1,
        totalWeight: 2,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.BEACH, [{
        key: Biome.SEA,
        weight: 1,
        totalWeight: 5,
    }, {
        key: Biome.ISLAND,
        weight: 4,
        totalWeight: 5,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.LAKE, [{
        key: Biome.BEACH,
        weight: 1,
        totalWeight: 3,
    }, {
        key: Biome.SWAMP,
        weight: 1,
        totalWeight: 3,
    }, {
        key: Biome.CONSTRUCTION_SITE,
        weight: 1,
        totalWeight: 3,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.SEABED, [{
        key: Biome.CAVE,
        weight: 1,
        totalWeight: 5,
    }, {
        key: Biome.VOLCANO,
        weight: 4,
        totalWeight: 5,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.MOUNTAIN, [{
        key: Biome.VOLCANO,
        weight: 1,
        totalWeight: 4,
    }, {
        key: Biome.WASTELAND,
        weight: 3,
        totalWeight: 4,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.BADLANDS, [{
        key: Biome.DESERT,
        weight: 1,
        totalWeight: 2,
    }, {
        key: Biome.MOUNTAIN,
        weight: 1,
        totalWeight: 2,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.CAVE, [{
        key: Biome.BADLANDS,
        weight: 1,
        totalWeight: 2,
    }, {
        key: Biome.LAKE,
        weight: 1,
        totalWeight: 2,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.DESERT, [{
        key: Biome.RUINS,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.ICE_CAVE, [{
        key: Biome.SNOWY_FOREST,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.MEADOW, [{
        key: Biome.PLAINS,
        weight: 1,
        totalWeight: 3,
    }, {
        key: Biome.FAIRY_CAVE,
        weight: 2,
        totalWeight: 3,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.POWER_PLANT, [{
        key: Biome.FACTORY,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.VOLCANO, [{
        key: Biome.BEACH,
        weight: 1,
        totalWeight: 5,
    }, {
        key: Biome.ICE_CAVE,
        weight: 4,
        totalWeight: 5,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.GRAVEYARD, [{
        key: Biome.ABYSS,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.DOJO, [{
        key: Biome.PLAINS,
        weight: 1,
        totalWeight: 4,
    }, {
        key: Biome.TEMPLE,
        weight: 3,
        totalWeight: 4,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.FACTORY, [{
        key: Biome.PLAINS,
        weight: 1,
        totalWeight: 5,
    }, {
        key: Biome.LABORATORY,
        weight: 4,
        totalWeight: 5,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.RUINS, [{
        key: Biome.FOREST,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.WASTELAND, [{
        key: Biome.BADLANDS,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.ABYSS, [{
        key: Biome.CAVE,
        weight: 1,
        totalWeight: 7,
    }, {
        key: Biome.SPACE,
        weight: 3,
        totalWeight: 7,
    }, {
        key: Biome.WASTELAND,
        weight: 3,
        totalWeight: 7,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.SPACE, [{
        key: Biome.RUINS,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.CONSTRUCTION_SITE, [{
        key: Biome.DOJO,
        weight: 1,
        totalWeight: 2,
    }, {
        key: Biome.POWER_PLANT,
        weight: 1,
        totalWeight: 2,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.JUNGLE, [{
        key: Biome.TEMPLE,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.FAIRY_CAVE, [{
        key: Biome.ICE_CAVE,
        weight: 1,
        totalWeight: 4,
    }, {
        key: Biome.SPACE,
        weight: 3,
        totalWeight: 4,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.TEMPLE, [{
        key: Biome.SWAMP,
        weight: 1,
        totalWeight: 4,
    }, {
        key: Biome.RUINS,
        weight: 3,
        totalWeight: 4,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.METROPOLIS, [{
        key: Biome.SLUM,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.SNOWY_FOREST, [{
        key: Biome.FOREST,
        weight: 1,
        totalWeight: 3,
    }, {
        key: Biome.LAKE,
        weight: 1,
        totalWeight: 3,
    }, {
        key: Biome.MOUNTAIN,
        weight: 1,
        totalWeight: 3,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.ISLAND, [{
        key: Biome.SEA,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);

    weightedBiomeLinks.set(Biome.LABORATORY, [{
        key: Biome.CONSTRUCTION_SITE,
        weight: 1,
        totalWeight: 1,
    } as WeightedBiome] as WeightedBiome[]);
}
