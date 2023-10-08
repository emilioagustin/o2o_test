export interface Method {
    temp: {
        value: number;
        unit: string;   
    };
    duration: number;
}

export interface Ingredient {
    name: string;
    amount: {
        value: number;
        unit: string;
    };
    add?: string;
    attribute?: string;
}

export interface Beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: Date;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: {
       value: number;
       unit: string; 
    };
     boil_volume: {
        value: number;
        unit: string; 
     };
     method: {
        [key: string]: Method[];
    };
    ingredients: {
        [key: string]: Ingredient[];
    }
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}