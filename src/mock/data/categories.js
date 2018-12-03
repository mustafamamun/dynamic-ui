import { cloneDeep } from "lodash";

const categories = [
    {
        id : 1,
        name: "Tops",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    },
    {
        id : 2,
        name: "bottoms",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    },
    {
        id : 3,
        name: "bags",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    },
    {
        id : 4,
        name: "accessoris",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    },
    {
        id : 5,
        name: "Toys",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    },
    {
        id : 6,
        name: "foods",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    },
    {
        id : 7,
        name: "fruits",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    },
    {
        id : 8,
        name: "sweets",
        image: 'https://drive.google.com/uc?id=0B9vumSadYT8MSlJLWnVlT1M1aFk'
    }
];

export function getCategories(){
    return cloneDeep(categories);
}