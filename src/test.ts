import {BiomePoolTier, getBiomePokemonPoolList} from "./convmaps/biome-pokemon-pools";
import {Biome} from "./enums/biome";
import {TimeOfDay} from "./enums/time-of-day";
import {weightedBiomeLinks} from "./convmaps/weighted-biome-links";

console.log("### biome 에 등장하는 Pokemon Code");
console.log(getBiomePokemonPoolList(Biome.ABYSS, BiomePoolTier.RARE, TimeOfDay.ALL));

console.log("### biome 의 다음 바이옴이 될 수 있는 바이옴들");
console.log(weightedBiomeLinks.get(Biome.ABYSS));
