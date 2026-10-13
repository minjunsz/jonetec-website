// src/data/products.ts

interface Category {
    image: string;
    description: string;
}

export interface Categories {
    [key: string]: Category;
}

export const categories: Categories = {
    "소화 시스템": {
        image: "/images/products/firefighting-thumbnail.png",
        description: "화재 초기 진압 및 피해 최소화를 위한 첨단 소화 설비"
    },
    "폭발 방지 솔루션": {
        image: "/images/products/iep-thumbnail.png",
        description: "산업 현장의 분진 폭발을 예방하고 차단하는 안전 시스템"
    },
    "플랜트 제어 시스템": {
        image: "/images/products/yokogawa-thumbnail.png",
        description: "안전하고 효율적인 플랜트 운영을 위한 자동화 제어 솔루션"
    },
    "산업용 센서": {
        image: "/images/products/dts-thumbnail.png", 
        description: "정밀한 데이터 측정과 실시간 모니터링을 위한 특수 센서"
    },
};