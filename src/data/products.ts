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
        description: "화재 조기 감지 및 신속한 대응을 위한 첨단 소방 솔루션"
    },
    "분진폭발 방지 시스템": {
        image: "/images/products/iep-thumbnail.png",
        description: "산업 현장의 분진폭발 위험을 차단하는 안전 시스템"
    },
    "플랜트 제어 시스템": {
        image: "/images/products/yokogawa-thumbnail.png",
        description: "플랜트 운영 효율을 극대화하는 통합 제어 솔루션"
    },
};

