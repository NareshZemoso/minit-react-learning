import bitcoin from '../../../../public/assets/bitcoin.png'
import binance from '../../../../public/assets/binance.png'
import cardano from '../../../../public/assets/cardano.png'
import dogecoin from '../../../../public/assets/dogecoin.png'
import etherium from '../../../../public/assets/etherium.png'
import tether from '../../../../public/assets/tether.png'
import xrp from '../../../../public/assets/xrp.png'
import palkadot from '../../../../public/assets/palkadot.png'
import fillstar from '../../../../public/assets/star-fill.png'
import emptystar from '../../../../public/assets/star-empty.png'
import web from '../../../../public/assets/web.png'
import paper from '../../../../public/assets/paperwork.png'
import cdetgraph from '../../../../public/assets/currencyDetgraph.png'
import arrow from '../../../../public/assets/arrow.png'



 const loadImage = (url: string) => {
    console.log('url  ' + url)
    switch (url) {
      case 'bitcoin':
        return bitcoin
      case 'cardano':
        return cardano
      case 'binance':
        return binance
      case 'dogecoin':
        return dogecoin
      case 'etherium':
        return etherium
      case 'xrp':
        return xrp
      case 'tether':
        return tether
      case 'palkadot':
        return palkadot
      case 'fillstar':
        return fillstar
      case 'emptystar':
        return emptystar
      case 'web':
        return web
      case 'paper':
        return paper 
      case 'cdetgraph':
        return cdetgraph
      case 'arrow':
          return arrow     
      default:        
        return ''
    }
  }

  export default loadImage;