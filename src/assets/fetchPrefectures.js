const prefectures = [
  {
    code: 'P01',
    name: '北海道',
  },
  {
    code: 'P02',
    name: '青森県',
  },
  {
    code: 'P03',
    name: '岩手県',
  },
  {
    code: 'P04',
    name: '宮城県',
  },
  {
    code: 'P05',
    name: '秋田県',
  },
  {
    code: 'P06',
    name: '山形県',
  },
  {
    code: 'P07',
    name: '福島県',
  },
  {
    code: 'P08',
    name: '茨城県',
  },
  {
    code: 'P09',
    name: '栃木県',
  },
  {
    code: 'P10',
    name: '群馬県',
  },
  {
    code: 'P11',
    name: '埼玉県',
  },
  {
    code: 'P12',
    name: '千葉県',
  },
  {
    code: 'P13',
    name: '東京都',
  },
  {
    code: 'P14',
    name: '神奈川県',
  },
  {
    code: 'P15',
    name: '新潟県',
  },
  {
    code: 'P16',
    name: '富山県',
  },
  {
    code: 'P17',
    name: '石川県',
  },
  {
    code: 'P18',
    name: '福井県',
  },
  {
    code: 'P19',
    name: '山梨県',
  },
  {
    code: 'P20',
    name: '長野県',
  },
  {
    code: 'P21',
    name: '岐阜県',
  },
  {
    code: 'P22',
    name: '静岡県',
  },
  {
    code: 'P23',
    name: '愛知県',
  },
  {
    code: 'P24',
    name: '三重県',
  },
  {
    code: 'P25',
    name: '滋賀県',
  },
  {
    code: 'P26',
    name: '京都府',
  },
  {
    code: 'P27',
    name: '大阪府',
  },
  {
    code: 'P28',
    name: '兵庫県',
  },
  {
    code: 'P29',
    name: '奈良県',
  },
  {
    code: 'P30',
    name: '和歌山県',
  },
  {
    code: 'P31',
    name: '鳥取県',
  },
  {
    code: 'P32',
    name: '島根県',
  },
  {
    code: 'P33',
    name: '岡山県',
  },
  {
    code: 'P34',
    name: '広島県',
  },
  {
    code: 'P35',
    name: '山口県',
  },
  {
    code: 'P36',
    name: '徳島県',
  },
  {
    code: 'P37',
    name: '香川県',
  },
  {
    code: 'P38',
    name: '愛媛県',
  },
  {
    code: 'P39',
    name: '高知県',
  },
  {
    code: 'P40',
    name: '福岡県',
  },
  {
    code: 'P41',
    name: '佐賀県',
  },
  {
    code: 'P42',
    name: '長崎県',
  },
  {
    code: 'P43',
    name: '熊本県',
  },
  {
    code: 'P44',
    name: '大分県',
  },
  {
    code: 'P45',
    name: '宮崎県',
  },
  {
    code: 'P46',
    name: '鹿児島県',
  },
  {
    code: 'P47',
    name: '沖縄県',
  },
]

/**
 * 引数で受け取った文字列を含む都道府県の一覧を返す
 * @param {string} query
 * @returns
 */
export async function fetchPrefectures(query) {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return prefectures.filter((prefecture) => {
    return prefecture.code.startsWith(query)
  })
}
