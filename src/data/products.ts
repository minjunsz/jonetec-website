interface Category {
    image: string;
    description: string;
}
export interface Categories {
    [key: string]: Category;
}
export const categories: Categories = {
    "소방 제품": {
        image: "/images/products/firefighting-thumbnail.png",
        description: "Commercial pumps for office buildings."
    },
    "분진폭발 방지 시스템": {
        image: "/images/products/iep-thumbnail.png",
        description: "Commercial pumps for office buildings."
    },
    "플랜트 제어 시스템": {
        image: "/images/products/yokogawa-thumbnail.png",
        description: "Commercial pumps for office buildings."
    },
};
