interface Category {
    image: string;
    description: string;
}
export interface Categories {
    [key: string]: Category;
}
export const categories: Categories = {
    "소방 제품": {
        image: "https://www.masteco.co.kr/assets/images/main/section_2_img_3.jpg",
        description: "Commercial pumps for office buildings."
    },
    "분진폭발 방지 시스템": {
        image: "https://www.masteco.co.kr/assets/images/main/section_2_img_3.jpg",
        description: "Commercial pumps for office buildings."
    },
    "플랜트 제어 시스템": {
        image: "https://www.masteco.co.kr/assets/images/main/section_2_img_3.jpg",
        description: "Commercial pumps for office buildings."
    },
};
