import { Tier } from './types.js';

export const WASH_MENU = [
  {
    tier: Tier.UME,
    title: "Quick Wash",
    subtitle: "会員限定・維持メンテ",
    price: "¥4,000",
    description: "当店コーティング施工車専用の月1回メンテナンス洗車。純水と摩擦レスな手法で美観を維持します。",
    features: ["純水高圧洗浄", "中性泡プレウォッシュ", "優しく手洗い", "水垢除去トップコート仕上げ"],
    recommendedFor: "日常的な汚れをリセットしたい会員様",
    colorClass: "border-pink-400/50 shadow-pink-900/20"
  },
  {
    tier: Tier.TAKE,
    title: "Standard Maintenance",
    subtitle: "極上の純水手洗い",
    price: "¥6,000",
    description: "2〜3ヶ月に1回の定期ケア。ガソリンスタンドの手洗いとは次元の違う「純水×細部洗浄」を提供。",
    features: ["鉄粉兼簡易スケール除去", "MTM濃厚泡プレウォッシュ", "純水手洗い & 細部洗浄（ブラシ）", "タイヤワックス"],
    recommendedFor: "初めての方 / 定期的なケアを望む方",
    colorClass: "border-emerald-400/50 shadow-emerald-900/20"
  },
  {
    tier: Tier.MATSU,
    title: "Deep Cleansing",
    subtitle: "すっぴんリセット",
    price: "¥12,000〜",
    description: "撥水が弱まった、くすみが気になるお車に。徹底的なスケール除去で被膜をリセットします。",
    features: ["Standardの内容全て", "徹底スケール除去", "油分除去", "高耐久トップコート"],
    recommendedFor: "半年〜1年に1回のリセット / 他店施工車のリカバリー",
    colorClass: "border-yellow-400/50 shadow-yellow-900/20"
  }
];

export const COATING_MENU = [
  {
    tier: Tier.UME,
    title: "Ceramic Coat",
    subtitle: "コスパ抜群",
    price: "¥22,000",
    description: "圧倒的なコストパフォーマンス。研磨機を使わず、強力な犠牲被膜で塗装を守ります。",
    features: ["純水洗車", "鉄粉除去", "セラミックコート"],
    recommendedFor: "安価にセラミックコーティングを試したい方",
    colorClass: "border-pink-400/50 shadow-pink-900/20"
  },
  {
    tier: Tier.TAKE,
    title: "Special Ceramic",
    subtitle: "当店メインコーティング",
    price: "¥45,000",
    description: "量販店では別料金の『研磨』を標準装備。塗装を整え、最新の充填技術で傷を埋めて護ります。",
    features: ["鉄粉除去", "Essenceによる軽研磨・プライマー処理", "セラミックコート"],
    recommendedFor: "新車の輝きを取り戻したい方 / コスパ重視派",
    colorClass: "border-emerald-400/50 shadow-emerald-900/20"
  },
  {
    tier: Tier.MATSU,
    title: "Flagship Armor",
    subtitle: "最先端ナノカーボン",
    price: "¥60,000",
    description: "3年耐久。酸性雨や薬品から塗装を物理的にガードする最強の防汚性。",
    features: ["徹底下地処理", "Essence研磨", "ナノカーボンコーティング"],
    recommendedFor: "愛車を長く大切に乗りたい方 / 究極の艶を求める方",
    colorClass: "border-yellow-400/50 shadow-yellow-900/20"
  }
];

export const SYSTEM_INSTRUCTION = `... (省略) ...`;
