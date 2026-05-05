export type Locale = "ja" | "en" | "my";

export const locales: Array<{
  code: Locale;
  shortLabel: string;
  label: string;
}> = [
    { code: "ja", shortLabel: "日", label: "日本語" },
    { code: "en", shortLabel: "En", label: "English" },
    { code: "my", shortLabel: "မြန်", label: "မြန်မာ" },
  ];

export const productImages = [
  {
    src: "/products/img_0011S.png",
    alt: "Red and black lacquer soup bowls",
  },
  {
    src: "/products/soup-bowl-hero-1.png",
    alt: "Close view of a red lacquer soup bowl",
  },
  {
    src: "/products/img_0024S.png",
    alt: "Black lacquer soup bowl with red rim",
  },
];

export const productContent = {
  ja: {
    brand: "安比塗漆器工房",
    nav: ["TOP", "商品一覧", "使う", "伝える", "絵付け体験", "お問い合わせ"],
    breadcrumb: ["TOP", "商品一覧", "汁椀3.8寸（ミズメザクラ）"],
    back: "一覧へ戻る",
    relatedTitle: "関連商品",
    title: "汁椀3.8寸（ミズメザクラ）",
    description:
      "使って納得の使いやすさ、丈夫さ。人気の定番商品です。小さなお子様から大人の方まで、使う方を選ばない器です。日常使いはもちろん、ハレの日や来客時にもお使い頂けます。",
    makerName: "稲垣 元洋",
    makerBio:
      "神奈川県出身。安代漆工技術研究センターを2009年に卒業。以来、暮らしの漆器や浄法寺漆を使用したグラファイトフライロッド（釣具）などを制作し、非常に人気を博している。安比塗漆器工房では食器のみを取り扱っています。",
    detailRows: [
      ["商品コード", "3"],
      ["商品名", "汁椀 3.8寸（本朱）ミズメザクラ"],
      ["サイズ", "φ114×h72mm"],
    ],
    price: "6,480円",
    tax: "（税込）送料別",
    cta: "商品購入のお問い合わせはこちら",
    cart: {
      add: "カートに追加",
      label: "カート",
      empty: "カートに商品がありません",
      quantity: "数量",
      remove: "削除",
    },
    related: [
      { name: "汁椀 3.8寸（ミズメザクラ）", price: "6,480円（税込）" },
      { name: "汁椀 4寸（ミズメザクラ）", price: "7,020円（税込）" },
      { name: "4寸羽反椀（トチ）", price: "7,020円（税込）" },
      { name: "飯椀（トチ）", price: "8,100円（税込）" },
      { name: "茶漬け椀（トチ）", price: "12,528円（税込）" },
    ],
    footer: {
      address: "岩手県八幡平市叺田230-1",
      tel: "TEL:0195-63-1065　FAX:0195-63-1066",
      holiday: "月曜定休",
      copyright: "(c) 安比塗漆器工房 All Rights Reserved.",
    },
  },
  en: {
    brand: "Appi Lacquerware Studio",
    nav: ["TOP", "Products", "Use", "Stories", "Painting Experience", "Contact"],
    breadcrumb: ["TOP", "Products", "Soup bowl 3.8 sun (Mizumezakura)"],
    back: "Back to list",
    relatedTitle: "Related Products",
    title: "Soup bowl 3.8 sun (Mizumezakura)",
    description:
      "A standard favorite, loved for how easy and durable it feels in everyday use. This bowl suits everyone from small children to adults, and works beautifully for daily meals, special occasions, and when guests visit.",
    makerName: "Motohiro Inagaki",
    makerBio:
      "Born in Kanagawa Prefecture. Graduated from the Ashiro Lacquer Craft Technical Research Center in 2009. Since then, he has created lacquerware for daily living and graphite fly rods made with Joboji lacquer. At Appi Lacquerware Studio, only tableware by the maker is handled.",
    detailRows: [
      ["Product code", "3"],
      ["Product name", "Soup bowl 3.8 sun, vermilion, Mizumezakura"],
      ["Size", "φ114×h72mm"],
    ],
    price: "¥6,480",
    tax: "tax included, shipping separate",
    cta: "Contact us about purchasing",
    cart: {
      add: "Add to cart",
      label: "Cart",
      empty: "Your cart is empty",
      quantity: "Qty",
      remove: "Remove",
    },
    related: [
      { name: "Soup bowl 3.8 sun (Mizumezakura)", price: "¥6,480 tax included" },
      { name: "Soup bowl 4 sun (Mizumezakura)", price: "¥7,020 tax included" },
      { name: "4 sun flared bowl (Tochi)", price: "¥7,020 tax included" },
      { name: "Rice bowl (Tochi)", price: "¥8,100 tax included" },
      { name: "Ochazuke bowl (Tochi)", price: "¥12,528 tax included" },
    ],
    footer: {
      address: "230-1 Kamasuda, Hachimantai, Iwate",
      tel: "TEL:0195-63-1065  FAX:0195-63-1066",
      holiday: "Closed Mondays",
      copyright: "(c) Appi Lacquerware Studio All Rights Reserved.",
    },
  },
  my: {
    brand: "အပ်ပိ ယွန်းထည် အလုပ်ရုံ",
    nav: ["TOP", "ကုန်ပစ္စည်းများ", "အသုံးပြုရန်", "ပြောပြရန်", "ပန်းချီအတွေ့အကြုံ", "ဆက်သွယ်ရန်"],
    breadcrumb: ["TOP", "ကုန်ပစ္စည်းများ", "ဟင်းချိုခွက် ၃.၈ ဆွန် (မီဇုမဲဇာကူရာ)"],
    back: "စာရင်းသို့ ပြန်သွားရန်",
    relatedTitle: "ဆက်စပ်ကုန်ပစ္စည်းများ",
    title: "ဟင်းချိုခွက် ၃.၈ ဆွန် (မီဇုမဲဇာကူရာ)",
    description:
      "အသုံးပြုရလွယ်ကူပြီး ခိုင်ခံ့သောကြောင့် လူကြိုက်များသည့် စံပြကုန်ပစ္စည်းဖြစ်သည်။ ကလေးငယ်များမှ လူကြီးများအထိ သုံးနိုင်ပြီး နေ့စဉ်စားသုံးချိန်၊ အထူးနေ့များနှင့် ဧည့်သည်လာချိန်များတွင်လည်း သင့်တော်သည်။",
    makerName: "မိုတိုဟီရို အီနာဂါကီ",
    makerBio:
      "ကနာဂါဝါခရိုင်မှ ဖြစ်သည်။ ၂၀၀၉ ခုနှစ်တွင် Ashiro Lacquer Craft Technical Research Center မှ ဘွဲ့ရခဲ့သည်။ ထိုအချိန်မှစ၍ နေ့စဉ်အသုံးပြုရန် ယွန်းထည်များနှင့် Joboji ယွန်းဖြင့် ပြုလုပ်ထားသော graphite fly rod များကို ဖန်တီးခဲ့သည်။ အပ်ပိ ယွန်းထည် အလုပ်ရုံတွင် စားပွဲသုံးပစ္စည်းများကိုသာ ရောင်းချသည်။",
    detailRows: [
      ["ကုန်ပစ္စည်းကုဒ်", "3"],
      ["ကုန်ပစ္စည်းအမည်", "ဟင်းချိုခွက် ၃.၈ ဆွန်၊ အနီရောင်၊ မီဇုမဲဇာကူရာ"],
      ["အရွယ်အစား", "φ114×h72mm"],
    ],
    price: "¥6,480",
    tax: "အခွန်ပါပြီး၊ ပို့ခ သီးခြား",
    cta: "ဝယ်ယူရန် စုံစမ်းမေးမြန်းမည်",
    cart: {
      add: "စျေးခြင်းထဲ ထည့်ရန်",
      label: "စျေးခြင်း",
      empty: "စျေးခြင်းထဲတွင် ပစ္စည်းမရှိသေးပါ",
      quantity: "အရေအတွက်",
      remove: "ဖယ်ရှားရန်",
    },
    related: [
      { name: "ဟင်းချိုခွက် ၃.၈ ဆွန်", price: "¥6,480 အခွန်ပါ" },
      { name: "ဟင်းချိုခွက် ၄ ဆွန်", price: "¥7,020 အခွန်ပါ" },
      { name: "၄ ဆွန် အနားကွေးခွက်", price: "¥7,020 အခွန်ပါ" },
      { name: "ထမင်းခွက်", price: "¥8,100 အခွန်ပါ" },
      { name: "လက်ဖက်ရည်ထမင်းခွက်", price: "¥12,528 အခွန်ပါ" },
    ],
    footer: {
      address: "230-1 Kamasuda, Hachimantai, Iwate",
      tel: "TEL:0195-63-1065  FAX:0195-63-1066",
      holiday: "တနင်္လာနေ့ ပိတ်သည်",
      copyright: "(c) အပ်ပိ ယွန်းထည် အလုပ်ရုံ All Rights Reserved.",
    },
  },
} satisfies Record<Locale, ProductLocaleContent>;

export type ProductLocaleContent = {
  brand: string;
  nav: string[];
  breadcrumb: string[];
  back: string;
  relatedTitle: string;
  title: string;
  description: string;
  makerName: string;
  makerBio: string;
  detailRows: Array<[string, string]>;
  price: string;
  tax: string;
  cta: string;
  cart: {
    add: string;
    label: string;
    empty: string;
    quantity: string;
    remove: string;
  };
  related: Array<{ name: string; price: string }>;
  footer: {
    address: string;
    tel: string;
    holiday: string;
    copyright: string;
  };
};
