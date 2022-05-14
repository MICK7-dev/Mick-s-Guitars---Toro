
const guitarImages = require.context('../assets/images', true);

const guitars = [
  {
    id: 2914224576, 
    title: "PRO SERIES SIGNATURE MICK THOMSON SOLOIST™ SL2", 
    stock: 2,
    model: 'SOLOIST™',
    price: "$1.189.990", 
    category: "guitars",
    description: "Slipknot lead guitarist Mick Thomson is one of metal’s most successful and revered players. His game changing, take-no-prisoners approach to metal guitar has influenced countless musicians worldwide, while his black hole-heavy de-tuned guitar sound has been an integral part of Slipknot for more than two decades.",
    pictureUrl: guitarImages(`./mickThompson-guitar-V.png`)
  },
  {
    id: 2919260568, 
    title: "X SERIES SOLOIST™ SLA6 DX BARITONE", 
    stock: 15,
    model: 'X SERIES SOLOIST™',
    price: "$1.260.130", 
    category: "guitars",
    pictureUrl: guitarImages(`./SLA6_DX_BARITONE.png`)
  },
  {
    id: 2803367880, 
    title: "USA SIGNATURE MISHA MANSOOR JUGGERNAUT HT7FM", 
    stock: 9,
    model: 'JUGGERNAUT',
    price: "$3.905.635", 
    category: "guitars",
    pictureUrl: guitarImages('./MANSOOR_JUGGERNAUT_HT7FM.png')
  },
  {
    id: 2913335503, 
    title: "Pro Series Signature Chris Broderick Soloist™ 7", 
    stock: 2,
    model: 'SOLOIST™',
    price: "$1.050.000", 
    category: "basses",
    pictureUrl: guitarImages('./Signature_Chris_Broderick_Soloist™_7.png')
  }
]

const guitar = {
  id: 2914224576, 
  title: "PRO SERIES SIGNATURE MICK THOMSON SOLOIST™ SL2", 
  stock: 5,
  model: 'SOLOIST™',
  price: "$1.189.990", 
    category: "guitars ",
  description: "Slipknot lead guitarist Mick Thomson is one of metal’s most successful and revered players. His game changing, take-no-prisoners approach to metal guitar has influenced countless musicians worldwide, while his black hole-heavy de-tuned guitar sound has been an integral part of Slipknot for more than two decades. Designed to withstand his acclaimed aggressive technique and tone, the Pro Series Signature Mick Thomson Soloist™ SL2 is a sinister axe loaded with high-quality features including a bound mahogany body coupled with a graphite reinforced through-body three-piece maple neck—carved to a custom super-thin profile for maximum comfort and high-speed playability, and a 12”-16” compound radius ebony fingerboard with 24 frets and block side dots.",
  pictureUrl: guitarImages(`./mickThompson-guitar-V.png`)
}



export const getGuitars = (categoryID) => {
  return new Promise((resolve, reject) => {
    const productsFilter = guitars.filter((prod) => prod.category === categoryID)
    setTimeout(() => {
      if (categoryID === undefined) {
        resolve(guitars);
      } else {
        resolve(productsFilter);
      }
    }, 2000)
  })
}

export const getGuitar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(guitar);
    }, 2000)
  })
}