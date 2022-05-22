
const guitarImages = require.context('../assets/images', true);

const guitars = [
  {
    id: 2914224576 ,
    title: "PRO SERIES SIGNATURE MICK THOMSON SOLOIST™ SL2", 
    stock: 5,
    model: 'SOLOIST™',
    price: "$1.189.990", 
    category: "guitars",
    description: "Slipknot lead guitarist Mick Thomson is one of metal’s most successful and revered players. His game changing, take-no-prisoners approach to metal guitar has influenced countless musicians worldwide, while his black hole-heavy de-tuned guitar sound has been an integral part of Slipknot for more than two decades. Designed to withstand his acclaimed aggressive technique and tone, the Pro Series Signature Mick Thomson Soloist™ SL2 is a sinister axe loaded with high-quality features including a bound mahogany body coupled with a graphite reinforced through-body three-piece maple neck—carved to a custom super-thin profile for maximum comfort and high-speed playability, and a 12”-16” compound radius ebony fingerboard with 24 frets and block side dots.",
    pictureUrl: guitarImages(`./mickThompson-guitar-V.png`)
  },
  {
    id: 2919260568 ,
    title: "X SERIES SOLOIST™ SLA6 DX BARITONE", 
    stock: 15,
    model: 'X SERIES SOLOIST™',
    price: "$1.260.130", 
    category: "guitars",
    description: "Chug and then chug some more with the all-new Jackson Soloist™ SLA6 DX Arch Top Baritone. With an extended 26.5-scale length, this sleekly sculpted baritone six-string is designed for enhanced low-end response, and is an ideal match for metal-preferred dropped tunings and chunky rhythm riffs. Its arched nyatoh Soloist body is paired with a through-body maple neck with graphite reinforcement for superior stability, while the 12-16 compound radius bound laurel fingerboard with 24 jumbo frets and pearloid piranha tooth inlays is designed for comfortable, high-speed playing.",
    pictureUrl: guitarImages(`./SLA6_DX_BARITONE.png`)
  },
  {
    id: 2803367880, 
    title: "USA SIGNATURE MISHA MANSOOR JUGGERNAUT HT7FM", 
    stock: 9,
    model: 'JUGGERNAUT',
    price: "$3.905.635", 
    category: "guitars",
    description: "Misha Mansoor is acclaimed for his masterful guitar work in fashioning the progressive metal of Periphery, and Jackson is proud to have collaborated so closely with the esteemed Djent forefather and speed demon on the USA Signature Misha Mansoor Juggernaut HT7FM, a model sure to impress the most discerning guitarists. This unique instrument is sculpted with a distinctive Jackson body shape inspired by the Dinky,™ with sleekly scalloped horns and a comfortably contoured neck heel. Its caramelized mahogany body with flame maple top and masked-off natural binding is matched with a graphite-reinforced bolt-on caramelized quartersawn maple neck with a hand-rubbed urethane gel back finish. The 20”-radius caramelized flame maple fingerboard features comfortably rolled edges, 24 jumbo stainless steel frets and offset maple dot inlays. A heel-mount truss rod adjustment wheel allows for quick and easy neck tweaks, even between songs in a set.",
    pictureUrl: guitarImages('./MANSOOR_JUGGERNAUT_HT7FM.png')
  },
  {
    id: 2913335503,
    title: "Pro Series Signature Chris Broderick Soloist™ 7", 
    stock: 7,
    model: 'SOLOIST™',
    price: "$1.050.000", 
    category: "guitars",
    description: "With his dazzling thrash fretwork, former Megadeth and current Act of Defiance guitarist Chris Broderick is heralded as an exacting and modern metal master. When Broderick first came to Jackson to design his own signature model, he had very exacting demands in mind for his take on the venerable Soloist™. Finding a more-than-willing partner up for the challenge, Broderick coined the longstanding high-performance guitar giant as the company that could. The results of the collaboration are sophisticated riffing machines loaded with the premium features needed to keep up with the most demanding music produced today.",
    pictureUrl: guitarImages('./Signature_Chris_Broderick_Soloist™_7.png')
  },
  {
    id: 2919004503,
    title: "JS SERIES SPECTRA BASS JS2", 
    stock: 10,
    model: 'JS SERIES',
    price: "$379.990", 
    category: "basses",
    description: "Versatile style and enormous sound collide in the all-new JS Series Spectra Bass JS2. The brand-new offset body style was designed with the artist in mind. The poplar body with large upper horn evenly distributes weight throughout the instrument, providing perfect balance by reducing neck dive for hours of comfortable playing. A bolt-on maple neck with scarf joint design provides rock-solid reliability, while the speed neck contour and 12 radius laurel fingerboard with 24 frets make for lightning-fast playability.",
    pictureUrl: guitarImages('./JS_Series _Spectra_Bass_JS2.png')
  },
  {
    id: 2919704503,
    title: "X Series Spectra Bass SBX V", 
    stock: 7,
    model: 'X Series',
    price: "$636.490", 
    category: "basses", 
    description: "With modern style, flexible tone and incomparable value, the Jackson X Series Spectra Bass SBX V takes the adventurous player on a bold bass odyssey, launching a commanding all-new entry in Jackson’s formidable neck-through-body bass lineup. The offset Spectra Bass body style was innovatively designed with the gigging musician in mind. Its poplar body has a larger upper horn that evenly distributes weight throughout the instrument for perfect balance and playing comfort. The graphite-reinforced through-body maple neck with scarf joint creates formidable sustain, with a speed neck contour, 12-16 compound radius laurel fingerboard and 24 frets for superior playability.",
    pictureUrl: guitarImages('./X_Series_Spectra_Bass_SBX_V.png')
  },
  {
    id: 2919999368,
    title: "PRO SERIES SIGNATURE CHRIS BEATTIE CONCERT™ BASS", 
    stock: 12,
    model: 'PRO SERIES',
    price: "$694.768", 
    category: "basses", 
    description: "As longtime bassist for crushing Connecticut hardcore outfit Hatebreed, Chris Beattie specializes in the bludgeoning four-string onslaught you’d expect from a player of his caliber—and from the Jackson signature bass with his name on it. Listen to any Hatebreed album to truly discern what Beattie’s take-no-prisoners sound, style and talent is all about. The Pro Series SIgnature Chris Beattie Concert™ Bass features an alder body, through-body maple neck, 12-16 compound radius dark rosewood fingerboard with pearloid sharkfin inlays, blistering EMG HZ pickups with an active three-band EQ and a Jackson HiMass™ bridge.",
    pictureUrl: guitarImages('./Pro_Series_Signature_Chris_Beattie_Concert_Bass.png')
  },
  {
    id: 2919924557,
    title: "JS Series Spectra Bass JS3Q", 
    stock: 7,
    model: 'JS SERIES',
    price: "$499.990", 
    category: "basses", 
    description: "Versatile style and enormous sound collide in the all-new Jackson® JS Series Spectra Bass JS3Q. The brand-new offset body style was designed with the artist in mind. The poplar body with quilt maple top features a large upper horn that evenly distributes weight throughout the instrument, providing perfect balance by reducing neck dive for hours of comfortable playing. A ­bolt-on maple neck with scarf joint design provides rock-solid reliability, while the speed neck contour and 12-16 compound radius laurel fingerboard with 24 frets make for lightning-fast playability.",
    pictureUrl: guitarImages('./JS_Series_Spectra_Bass_JS3Q.png')
  }
]


export const getGuitars = (categoryID) => {
  return new Promise((resolve, reject) => {
    const productsFilter = guitars.filter((prod) => prod.category === categoryID)
    setTimeout(() => {
      if (categoryID === undefined) {
        resolve(guitars);
        console.log(guitars)
      } else {
        resolve(productsFilter);
        console.log(productsFilter)
      }
    }, 2000)
  })
}

export const getGuitar = (id) => {
  return new Promise((resolve, reject) => {
    const guitarIdFilter = guitars.find((prod) => prod.id == id)
    setTimeout(() => {
        // resolve(guitars);
      if (id === undefined) {
        resolve(guitars);
        console.log('no funciona')
      } else {
        // console.log('Funciona!')
        // console.log(guitarIdFilter)
        resolve(guitarIdFilter);
      }
    }, 2000)
  })
}