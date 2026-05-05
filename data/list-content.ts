import { Locale } from "./product-content";

export type ProductListContent = {
  title: string;
  categories: string[];
  allProductsLabel: (category: string) => string;
  sections: Array<{
    title: string;
    products: Array<{
      code: string;
      name: string;
      price: string;
      image: string;
    }>;
  }>;
};

const jaSections = [
  {
    title: "椀",
    products: [
      { code: "508", name: "飯椀（トチ）", price: "12,100円(税込)", image: "/products/related-4.png" },
      { code: "506", name: "5寸そば椀（トチ）", price: "16,500円(税込)", image: "/products/img_0020S.png" },
      { code: "503", name: "高台椀（トチ）", price: "11,000円(税込)", image: "/products/img_0024S.png" },
      { code: "501", name: "4.4寸羽反椀（トチ）", price: "12,100円(税込)", image: "/products/related-3.png" },
      { code: "172", name: "3.8寸汁椀（ミズメザクラ）", price: "9,900円(税込)", image: "/products/soup-bowl-hero-1.png" },
    ],
  },
  {
    title: "皿・プレート",
    products: [
      { code: "653", name: "まめ皿（トチ）", price: "6,820円(税込)", image: "/products/img_0011S.png" },
      { code: "623", name: "8寸菓子皿（トチ）", price: "19,800円(税込)", image: "/products/img_0015T.png" },
      { code: "579", name: "5寸椿皿（トチ）", price: "12,100円(税込)", image: "/products/related-3.png" },
    ],
  },
  {
    title: "鉢・ボウル",
    products: [
      { code: "685", name: "6寸平鉢（トチ）", price: "17,600円(税込)", image: "/products/img_0041S.png" },
      { code: "668", name: "ひめ小鉢（トチ）", price: "8,580円(税込)", image: "/products/related-1.png" },
      { code: "629", name: "ゆらぎ鉢（トチ）", price: "41,800円(税込)", image: "/products/related-4.png" },
    ],
  },
  {
    title: "重箱・弁当箱",
    products: [
      { code: "695", name: "二段姫重（トチ）", price: "35,200円(税込)", image: "/products/img_0031F.png" },
    ],
  },
  {
    title: "盆・トレイ",
    products: [
      { code: "731", name: "丸盆 尺", price: "11,000円(税込)", image: "/products/related-3.png" },
      { code: "727", name: "丸盆 8寸（セン）", price: "8,800円(税込)", image: "/products/related-2.png" },
    ],
  },
  {
    title: "箸・カトラリー",
    products: [
      { code: "554", name: "手塗箸（鉄木）", price: "4,950円(税込)", image: "/products/img_0050S.png" },
      { code: "537", name: "箸 各種", price: "価格はお問い合わせ", image: "/products/related-4.png" },
      { code: "507", name: "ひらりフォーク", price: "13,750円(税込)", image: "/products/related-1.png" },
      { code: "1218", name: "ひらりスプーン 小", price: "11,000円(税込)", image: "/products/related-2.png" },
    ],
  },
  {
    title: "酒器",
    products: [
      { code: "589", name: "片口 3.5寸（トチ）", price: "22,000円(税込)", image: "/products/related-3.png" },
    ],
  },
  {
    title: "その他",
    products: [
      { code: "363", name: "ペーパーウェイト 1個売り（石）", price: "4,070円(税込)", image: "/products/related-4.png" },
      { code: "337", name: "高台飾り皿（小）", price: "9,900円(税込)", image: "/products/related-5.png" },
    ],
  },
];

export const listContent = {
  ja: {
    title: "商品一覧",
    categories: ["椀", "皿・プレート", "鉢・ボウル", "重箱・弁当箱", "盆・トレイ", "箸・カトラリー", "酒器", "その他"],
    allProductsLabel: (category: string) => `${category}の全商品はこちら`,
    sections: jaSections,
  },
  en: {
    title: "Product List",
    categories: ["Bowls", "Plates", "Large Bowls", "Lunch Boxes", "Trays", "Cutlery", "Sakeware", "Other"],
    allProductsLabel: (category: string) => `View all ${category}`,
    sections: jaSections.map((section) => ({
      ...section,
      title:
        {
          椀: "Bowls",
          "皿・プレート": "Plates",
          "鉢・ボウル": "Large Bowls",
          "重箱・弁当箱": "Lunch Boxes",
          "盆・トレイ": "Trays",
          "箸・カトラリー": "Cutlery",
          酒器: "Sakeware",
          その他: "Other",
        }[section.title] ?? section.title,
    })),
  },
  my: {
    title: "ကုန်ပစ္စည်းစာရင်း",
    categories: ["ခွက်များ", "ပန်းကန်များ", "ဘောလ်ခွက်များ", "ဘန်တိုဘူး", "ထရေများ", "ဇွန်းတူ", "ဆာကေးပစ္စည်း", "အခြား"],
    allProductsLabel: (category: string) => `${category} အားလုံးကြည့်ရန်`,
    sections: jaSections.map((section) => ({
      ...section,
      title:
        {
          椀: "ခွက်များ",
          "皿・プレート": "ပန်းကန်များ",
          "鉢・ボウル": "ဘောလ်ခွက်များ",
          "重箱・弁当箱": "ဘန်တိုဘူး",
          "盆・トレイ": "ထရေများ",
          "箸・カトラリー": "ဇွန်းတူ",
          酒器: "ဆာကေးပစ္စည်း",
          その他: "အခြား",
        }[section.title] ?? section.title,
    })),
  },
} satisfies Record<Locale, ProductListContent>;
