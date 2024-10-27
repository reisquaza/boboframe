export interface Mod {
    uniqueName: string;
    name: string;
    imageName: string;
    drops: ModDrop[];
    owned: boolean;
    levelStats: ModLevelStats[];
    type: ModType;
    tradable: boolean;
    transmutable: boolean;
    polarity: ModPolarity;
    fusionLimity: number;
    baseDrain: number;
    rarity: ModRarity;
    wikiUrl: string;
}

interface ModDrop {
    chance: number;
    location: string;
    rarity: string;
    type: string;
}

interface ModLevelStats {
    stats: string[];
}

// !! Definir os tipos
type ModRarity = "Common" | "Uncommon" | "Rare" | "Legendary";
type ModPolarity =
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik";
type ModType =
    | "Railjack"
    | "Necramech"
    | "Warframe"
    | "Secondary"
    | "Melee"
    | "Companion"
    | "Primary"
    | "K-Drive"
    | "Riven"
    | "Archwing"
    | "Arch-Melee"
    | "Arch-Gun"
    | "Shotgun"
    | "Creature"
    | "Stance"
    | "Parazon"
    | "Transmutation"
    | "Peculiar"
    | "Plexus"
    | "Posture";
