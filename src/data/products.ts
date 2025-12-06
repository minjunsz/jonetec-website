interface Category {
    image: string;
    description: string;
}
export interface Categories {
    [key: string]: Category;
}
export const categories: Categories = {
    "Industrial": {
        image: "https://www.masteco.co.kr/assets/images/main/section_2_img_2.jpg",
        description: "Industrial pumps for heavy duty applications."
    },
    "Commercial": {
        image: "https://www.masteco.co.kr/assets/images/main/section_2_img_3.jpg",
        description: "Commercial pumps for office buildings."
    },
    "Others": {
        image: "https://www.masteco.co.kr/assets/images/main/section_2_img_3.jpg",
        description: "Commercial pumps for office buildings."
    }
};

export interface Product {
    id: string;
    category: string;
    name: string;
    summary: string;
    description: string;
    image: string;
    specs?: { label: string; value: string }[];
    additionalDescription?: string;
}

const products: Product[] = [
    {
        id: "series-a-100",
        category: "Industrial",
        name: "Industrial Pump A-100",
        summary: "High efficiency industrial pump tailored for heavy duty.",
        description: `This is the flagship product of Jonetec. 
It features high durability and easy maintenance.
Perfect for large scale factories.`,
        image: "https://www.masteco.co.kr/assets/images/main/section_2_img_2.jpg",
        specs: [
            { label: "Size", value: "500x500mm" },
            { label: "Power", value: "220V" },
        ],
        additionalDescription: `• Warranty: 2 years included
• Certification: ISO 9001, CE Certified
• Delivery: Ships within 5 business days
• Installation: Professional installation required`,
    },
    {
        id: "series-b-200",
        category: "Commercial",
        name: "Commercial Pump B-200",
        summary: "Compact and silent pump for commercial buildings.",
        description: `Designed for noise-sensitive environments using our proprietary silent technology.`,
        image: "",
        specs: [
            { label: "Size", value: "300x300mm" },
            { label: "Noise", value: "3dB" }
        ]
    }
];

export default products;
