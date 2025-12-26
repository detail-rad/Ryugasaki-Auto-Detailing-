import { Tier, ServiceItem } from './types';

export const WASH_MENU: ServiceItem[] = [
  {
    tier: Tier.UME,
    title: "Quick Wash",
    subtitle: "会員限定・維持メンテ",
    price: "¥4,000",
    description: "当店コーティング施工車専用の月1回メンテナンス洗車。純水と摩擦レスな手法で美観を維持します。",
    features: [
      "純水高圧洗浄",
      "中性泡プレウォッシュ",
      "優しく手洗い",
      "水垢除去トップコート仕上げ"
    ],
    recommendedFor: "日常的な汚れをリセットしたい会員様",
    colorClass: "border-pink-400/50 shadow-pink-900/20"
  },
  {
    tier: Tier.TAKE,
    title: "Standard Maintenance",
    subtitle: "極上の純水手洗い",
    price: "¥6,000",
    description: "2〜3ヶ月に1回の定期ケア。ガソリンスタンドの手洗いとは次元の違う「純水×細部洗浄」を提供。",
    features: [
      "鉄粉兼簡易スケール除去",
      "MTM濃厚泡プレウォッシュ",
      "純水手洗い & 細部洗浄（ブラシ）",
      "タイヤワックス"
    ],
    recommendedFor: "初めての方 / 定期的なケアを望む方",
    colorClass: "border-emerald-400/50 shadow-emerald-900/20"
  },
  {
    tier: Tier.MATSU,
    title: "Deep Cleansing",
    subtitle: "すっぴんリセット",
    price: "¥12,000〜",
    description: "撥水が弱まった、くすみが気になるお車に。徹底的なスケール除去で被膜をリセットします。",
    features: [
      "Standardの内容全て",
      "徹底スケール除去",
      "油分除去",
      "高耐久トップコート"
    ],
    recommendedFor: "半年〜1年に1回のリセット / 他店施工車のリカバリー",
    colorClass: "border-yellow-400/50 shadow-yellow-900/20"
  }
];

export const COATING_MENU: ServiceItem[] = [
  {
    tier: Tier.UME,
    title: "Ceramic Coat",
    subtitle: "コスパ抜群",
    price: "¥22,000",
    description: "圧倒的なコストパフォーマンス。研磨機を使わず、強力な犠牲被膜で塗装を守ります。",
    features: [
      "純水洗車",
      "鉄粉除去",
      "セラミックコート",
    ],
    recommendedFor: "安価にセラミックコーティングを試したい方",
    colorClass: "border-pink-400/50 shadow-pink-900/20"
  },
  {
    tier: Tier.TAKE,
    title: "Special Ceramic",
    subtitle: "当店メインコーティング",
    price: "¥45,000",
    description: "量販店では別料金の『研磨』を標準装備。塗装を整え、最新の充填技術で傷を埋めて護ります。",
    features: [
      "鉄粉除去",
      "Essenceによる軽研磨・プライマー処理",
      "セラミックコート",
    ],
    recommendedFor: "新車の輝きを取り戻したい方 / コスパ重視派",
    colorClass: "border-emerald-400/50 shadow-emerald-900/20"
  },
  {
    tier: Tier.MATSU,
    title: "Flagship Armor",
    subtitle: "最先端ナノカーボン",
    price: "¥60,000",
    description: "3年耐久。酸性雨や薬品から塗装を物理的にガードする最強の防汚性。",
    features: [
      "徹底下地処理",
      "Essence研磨",
      "ナノカーボンコーティング",
    ],
    recommendedFor: "愛車を長く大切に乗りたい方 / 究極の艶を求める方",
    colorClass: "border-yellow-400/50 shadow-yellow-900/20"
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "Ryugasaki Auto Detailing".
Your goal is to assist customers by explaining our unique philosophy and services.

**Our Philosophy (Paint Preservation):**
- We do NOT do heavy polishing that thins the clear coat.
- We use "Filling" technology (CarPro Essence) and chemical cleaning to fill scratches and protect the paint.
- We offer "Polishing included" in our standard coating prices, unlike mass-market chains (like KeePer) where it is an option.
- We aim for high cost-performance.

**Services:**
1. Wash:
   - Ume (Quick): ¥4,000 (Members only maintenance)
   - Take (Standard): ¥6,000 (Pure water, foam wash, detail brush)
   - Matsu (Deep): ¥12,000 (Scale removal, reset "suppin" state)
2. Coating:
   - Ume (Ceramic): ¥22,000 (No polish, strong sacrificial layer. Uses Gentle Tokyo Odecoat).
   - Take (Ceramic Enamel): ¥45,000 (Includes light polish/primer with Essence. Best seller).
   - Matsu (Flagship Armor): ¥60,000 (Nano Carbon N°999eF. 3 year durability. Acid rain resistant).

**Location & Business Hours:**
- Address: 〒301-0021 Ibaraki Prefecture, Ryugasaki City, Kitakatamachi 822-1
- Saturday: 11:00 - 18:00
- Sunday: 9:00 - 18:00
- Note: Appointment only (完全予約制).
- Instagram: https://www.instagram.com/ryugasaki_auto_detailing?igsh=ZndmeHBtOXhndGx4

**Tone:**
- Professional, knowledgeable, polite, and welcoming.
- Use Japanese language for responses.
- If asked about "KeePer", politely explain that we offer polishing as standard for the same price range, offering better value for paint preservation.
`;