
const guitarImages = require.context('../assets/images', true);

const guitars = [
  {
    id: 2914224576, 
    title: "PRO SERIES SIGNATURE MICK THOMSON SOLOIST™ SL2", 
    price: "$1.189.990", 
    pictureUrl: guitarImages(`./mickThompson-guitar-V.png`)
  },
  {
    id: 2919260568, 
    title: "X SERIES SOLOIST™ SLA6 DX BARITONE", 
    price: "$1.260.130", 
    pictureUrl: guitarImages(`./SLA6_DX_BARITONE.png`)
  },
  {
    id: 2803367880, 
    title: "USA SIGNATURE MISHA MANSOOR JUGGERNAUT HT7FM", 
    price: "$3.905.635", 
    pictureUrl: guitarImages('./MANSOOR_JUGGERNAUT_HT7FM.png')
  },
  {
    id: 2913335503, 
    title: "Pro Series Signature Chris Broderick Soloist™ 7", 
    price: "$1.050.000", 
    pictureUrl: guitarImages('./Signature_Chris_Broderick_Soloist™_7.png')
  }
]

export const getGuitars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(guitars);
    }, 2000)
  })
}