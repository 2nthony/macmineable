// https://api.unminable.com/v4/coin
// Use a js module instead ajax
// Updated on: 10/26/2021, 1:23:53 AM

export const apiv4coin = {
  "success": true,
  "msg": "Ok",
  "data": [
    {
      "symbol": "1INCH",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "1inch",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 1,
      "logo": "https://www.unmineable.com/img/logos/1INCH.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "CAKE",
      "network": "BSC",
      "token_standard": "BEP20",
      "name": "PancakeSwap",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 1,
      "logo": "https://www.unmineable.com/img/logos/CAKE.png",
      "chains": [
        {
          "name": "Binance Smart Chain",
          "network": "BSC",
          "token_standard": "BEP20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "CHZ",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Chiliz",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 1,
      "logo": "https://www.unmineable.com/img/logos/CHZ.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "HOT",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Holo",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 1,
      "logo": "https://www.unmineable.com/img/logos/HOT.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "MATIC",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "MATIC (Polygon)",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 1,
      "logo": "https://www.unmineable.com/img/logos/MATIC.png",
      "chains": [
        {
          "name": "Binance Smart Chain",
          "network": "BSC",
          "token_standard": "BEP20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        },
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        },
        {
          "name": "Polygon",
          "network": "MATIC",
          "token_standard": "Polygon",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        }
      ]
    },
    {
      "symbol": "SHIB",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "SHIBA INU",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 1,
      "logo": "https://www.unmineable.com/img/logos/SHIB.png",
      "chains": [
        {
          "name": "Binance Smart Chain",
          "network": "BSC",
          "token_standard": "BEP20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        },
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "SOL",
      "network": "SOL",
      "token_standard": "Solana",
      "name": "Solana",
      "regex": "^[0-9a-zA-Z]{32,44}$",
      "regex_memo": null,
      "top": 1,
      "logo": "https://www.unmineable.com/img/logos/SOL.png",
      "chains": [
        {
          "name": "Binance Smart Chain",
          "network": "BSC",
          "token_standard": "BEP20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        },
        {
          "name": "Solana",
          "network": "SOL",
          "token_standard": "Solana",
          "regex": "^[0-9a-zA-Z]{32,44}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "AAVE",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Aave",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/AAVE.png",
      "chains": [
        {
          "name": "Binance Smart Chain",
          "network": "BSC",
          "token_standard": "BEP20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        },
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ADA",
      "network": "ADA",
      "token_standard": null,
      "name": "Cardano",
      "regex": "^(([0-9A-Za-z]{57,59})|([0-9A-Za-z]{100,104}))$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ADA.png",
      "chains": [
        {
          "name": "Cardano",
          "network": "ADA",
          "token_standard": null,
          "regex": "^(([0-9A-Za-z]{57,59})|([0-9A-Za-z]{100,104}))$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ALGO",
      "network": "ALGO",
      "token_standard": null,
      "name": "Algorand",
      "regex": "^[A-Z0-9]{58,58}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ALGO.png",
      "chains": [
        {
          "name": "Algorand",
          "network": "ALGO",
          "token_standard": null,
          "regex": "^[A-Z0-9]{58,58}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ATOM",
      "network": "ATOM",
      "token_standard": null,
      "name": "Cosmos",
      "regex": "^(cosmos1)[0-9a-z]{38}$",
      "regex_memo": "^[0-9A-Za-z\\\\-_]{1,120}$",
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ATOM.png",
      "chains": [
        {
          "name": "Cosmos",
          "network": "ATOM",
          "token_standard": null,
          "regex": "^(cosmos1)[0-9a-z]{38}$",
          "regex_memo": "^[0-9A-Za-z\\\\-_]{1,120}$",
          "is_default": true
        }
      ]
    },
    {
      "symbol": "BAND",
      "network": "BAND",
      "token_standard": null,
      "name": "Band Protocol",
      "regex": "^(band1)[0-9a-z]{38}$",
      "regex_memo": "^[0-9A-Za-z\\\\-_]{1,120}$",
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/BAND.png",
      "chains": [
        {
          "name": "Band Protocol",
          "network": "BAND",
          "token_standard": null,
          "regex": "^(band1)[0-9a-z]{38}$",
          "regex_memo": "^[0-9A-Za-z\\\\-_]{1,120}$",
          "is_default": true
        }
      ]
    },
    {
      "symbol": "BAT",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Basic Attention Token",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/BAT.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "BCH",
      "network": "BCH",
      "token_standard": null,
      "name": "Bitcoin Cash",
      "regex": "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^[0-9A-Za-z]{42,42}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/BCH.png",
      "chains": [
        {
          "name": "Bitcoin Cash",
          "network": "BCH",
          "token_standard": null,
          "regex": "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^[0-9A-Za-z]{42,42}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "BNB",
      "network": "BNB",
      "token_standard": "BEP2",
      "name": "Binance Coin",
      "regex": "^(bnb1)[0-9a-z]{38}$",
      "regex_memo": "^[0-9A-Za-z\\\\-_]{1,120}$",
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/BNB.png",
      "chains": [
        {
          "name": "Binance Coin",
          "network": "BNB",
          "token_standard": "BEP2",
          "regex": "^(bnb1)[0-9a-z]{38}$",
          "regex_memo": "^[0-9A-Za-z\\\\-_]{1,120}$",
          "is_default": true
        },
        {
          "name": "Binance Smart Chain",
          "network": "BSC",
          "token_standard": "BEP20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        }
      ]
    },
    {
      "symbol": "BTC",
      "network": "BTC",
      "token_standard": null,
      "name": "Bitcoin",
      "regex": "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^(bc1)[0-9A-Za-z]{39,59}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/BTC.png",
      "chains": [
        {
          "name": "Bitcoin",
          "network": "BTC",
          "token_standard": null,
          "regex": "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^(bc1)[0-9A-Za-z]{39,59}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "BTG",
      "network": "BTG",
      "token_standard": null,
      "name": "Bitcoin Gold",
      "regex": "^[AG][a-km-zA-HJ-NP-Z1-9]{25,34}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/BTG.png",
      "chains": [
        {
          "name": "Bitcoin Gold",
          "network": "BTG",
          "token_standard": null,
          "regex": "^[AG][a-km-zA-HJ-NP-Z1-9]{25,34}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "BTT",
      "network": "TRX",
      "token_standard": "TRC10",
      "name": "BitTorrent",
      "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/BTT.png?v1",
      "chains": [
        {
          "name": "BitTorrent",
          "network": "TRX",
          "token_standard": "TRC10",
          "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "DASH",
      "network": "DASH",
      "token_standard": null,
      "name": "Dash",
      "regex": "^[X|7][0-9A-Za-z]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/DASH.png",
      "chains": [
        {
          "name": "Dash",
          "network": "DASH",
          "token_standard": null,
          "regex": "^[X|7][0-9A-Za-z]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "DGB",
      "network": "DGB",
      "token_standard": null,
      "name": "DigiByte",
      "regex": "^[DS][a-km-zA-HJ-NP-Z1-9]{25,34}$|^(dgb1)[0-9A-Za-z]{39,59}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/DGB.png",
      "chains": [
        {
          "name": "DigiByte",
          "network": "DGB",
          "token_standard": null,
          "regex": "^[DS][a-km-zA-HJ-NP-Z1-9]{25,34}$|^(dgb1)[0-9A-Za-z]{39,59}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "DOGE",
      "network": "DOGE",
      "token_standard": null,
      "name": "Dogecoin",
      "regex": "^(D|A|9)[a-km-zA-HJ-NP-Z1-9]{33,34}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/DOGE.png",
      "chains": [
        {
          "name": "Dogecoin",
          "network": "DOGE",
          "token_standard": null,
          "regex": "^(D|A|9)[a-km-zA-HJ-NP-Z1-9]{33,34}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ENJ",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Enjin Coin",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ENJ.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "EOS",
      "network": "EOS",
      "token_standard": null,
      "name": "EOS",
      "regex": "^[1-5a-z\\.]{1,12}$",
      "regex_memo": "^[0-9A-Za-z\\\\-_,]{1,120}$",
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/EOS.png",
      "chains": [
        {
          "name": "EOS",
          "network": "EOS",
          "token_standard": null,
          "regex": "^[1-5a-z\\.]{1,12}$",
          "regex_memo": "^[0-9A-Za-z\\\\-_,]{1,120}$",
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ETC",
      "network": "ETC",
      "token_standard": null,
      "name": "Ethereum Classic",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ETC.png",
      "chains": [
        {
          "name": "Ethereum Classic",
          "network": "ETC",
          "token_standard": null,
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ETH",
      "network": "ETH",
      "token_standard": null,
      "name": "Ethereum",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ETH.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": null,
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "FUN",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "FunFair",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/FUN.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "GAS",
      "network": "NEO",
      "token_standard": null,
      "name": "GAS",
      "regex": "^(A)[A-Za-z0-9]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/GAS.png",
      "chains": [
        {
          "name": "GAS",
          "network": "NEO",
          "token_standard": null,
          "regex": "^(A)[A-Za-z0-9]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ICX",
      "network": "ICX",
      "token_standard": null,
      "name": "ICON",
      "regex": "^(hx)[A-Za-z0-9]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ICX.png",
      "chains": [
        {
          "name": "ICON",
          "network": "ICX",
          "token_standard": null,
          "regex": "^(hx)[A-Za-z0-9]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "KLV",
      "network": "TRX",
      "token_standard": "TRC20",
      "name": "Klever",
      "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/KLV.png?20211001",
      "chains": [
        {
          "name": "Klever",
          "network": "TRX",
          "token_standard": "TRC20",
          "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "KNC",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "KyberNetwork",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/KNC.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "LINK",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "ChainLink",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/LINK.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "LSK",
      "network": "LSK",
      "token_standard": null,
      "name": "Lisk",
      "regex": "^[0-9]{12,22}[L]$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/LSK.png",
      "chains": [
        {
          "name": "Lisk",
          "network": "LSK",
          "token_standard": null,
          "regex": "^[0-9]{12,22}[L]$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "LTC",
      "network": "LTC",
      "token_standard": null,
      "name": "Litecoin",
      "regex": "^(L|M|3)[A-Za-z0-9]{33}$|^(ltc1)[0-9A-Za-z]{39}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/LTC.png",
      "chains": [
        {
          "name": "Litecoin",
          "network": "LTC",
          "token_standard": null,
          "regex": "^(L|M|3)[A-Za-z0-9]{33}$|^(ltc1)[0-9A-Za-z]{39}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "MANA",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Decentraland",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/MANA.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "MTL",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Metal",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/MTL.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "NANO",
      "network": "NANO",
      "token_standard": null,
      "name": "NANO",
      "regex": "^(xrb_|nano_)[13456789abcdefghijkmnopqrstuwxyz]{60}",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/NANO.png",
      "chains": [
        {
          "name": "NANO",
          "network": "NANO",
          "token_standard": null,
          "regex": "^(xrb_|nano_)[13456789abcdefghijkmnopqrstuwxyz]{60}",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "NEO",
      "network": "NEO",
      "token_standard": null,
      "name": "NEO",
      "regex": "^(A)[A-Za-z0-9]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/NEO.png",
      "chains": [
        {
          "name": "NEO",
          "network": "NEO",
          "token_standard": null,
          "regex": "^(A)[A-Za-z0-9]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "QTUM",
      "network": "QTUM",
      "token_standard": null,
      "name": "Qtum",
      "regex": "^[Q|M][A-Za-z0-9]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/QTUM.png",
      "chains": [
        {
          "name": "Qtum",
          "network": "QTUM",
          "token_standard": null,
          "regex": "^[Q|M][A-Za-z0-9]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "REP",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Augur",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/REP.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "RSR",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Reserve Rights",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/RSR.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "RVN",
      "network": "RVN",
      "token_standard": null,
      "name": "Ravencoin",
      "regex": "^[Rr]{1}[A-Za-z0-9]{33,34}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/RVN.png",
      "chains": [
        {
          "name": "Ravencoin",
          "network": "RVN",
          "token_standard": null,
          "regex": "^[Rr]{1}[A-Za-z0-9]{33,34}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "SC",
      "network": "SC",
      "token_standard": null,
      "name": "Siacoin",
      "regex": "^[A-Za-z0-9]{76}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/SC.png",
      "chains": [
        {
          "name": "Siacoin",
          "network": "SC",
          "token_standard": null,
          "regex": "^[A-Za-z0-9]{76}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "SKY",
      "network": "SKY",
      "token_standard": null,
      "name": "Skycoin",
      "regex": "^[0-9A-Za-z]{26,35}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/SKY.png",
      "chains": [
        {
          "name": "Skycoin",
          "network": "SKY",
          "token_standard": null,
          "regex": "^[0-9A-Za-z]{26,35}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "SUSHI",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Sushi",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/SUSHI.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "TRX",
      "network": "TRX",
      "token_standard": null,
      "name": "TRON",
      "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/TRX.png",
      "chains": [
        {
          "name": "TRON",
          "network": "TRX",
          "token_standard": null,
          "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "UNI",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Uniswap",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/UNI.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "USDT",
      "network": "TRX",
      "token_standard": "TRC20",
      "name": "TetherUS",
      "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/USDT.png",
      "chains": [
        {
          "name": "Binance Smart Chain",
          "network": "BSC",
          "token_standard": "BEP20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        },
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": false
        },
        {
          "name": "TRON",
          "network": "TRX",
          "token_standard": "TRC20",
          "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "VET",
      "network": "VET",
      "token_standard": null,
      "name": "VeChain",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/VET.png",
      "chains": [
        {
          "name": "VeChain",
          "network": "VET",
          "token_standard": null,
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "WAVES",
      "network": "WAVES",
      "token_standard": null,
      "name": "Waves",
      "regex": "^(3P)[0-9A-Za-z]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/WAVES.png",
      "chains": [
        {
          "name": "Waves",
          "network": "WAVES",
          "token_standard": null,
          "regex": "^(3P)[0-9A-Za-z]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "WBTC",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Wrapped Bitcoin",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/WBTC.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "WIN",
      "network": "TRX",
      "token_standard": "TRC20",
      "name": "WINk",
      "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/WIN.png?20210406",
      "chains": [
        {
          "name": "WINk",
          "network": "TRX",
          "token_standard": "TRC20",
          "regex": "^T[1-9A-HJ-NP-Za-km-z]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "XLM",
      "network": "XLM",
      "token_standard": null,
      "name": "Stellar Lumens",
      "regex": "^G[A-D]{1}[A-Z2-7]{54}$",
      "regex_memo": "^[0-9A-Za-z]{1,28}$",
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/XLM.png",
      "chains": [
        {
          "name": "Stellar Lumens",
          "network": "XLM",
          "token_standard": null,
          "regex": "^G[A-D]{1}[A-Z2-7]{54}$",
          "regex_memo": "^[0-9A-Za-z]{1,28}$",
          "is_default": true
        }
      ]
    },
    {
      "symbol": "XMR",
      "network": "XMR",
      "token_standard": null,
      "name": "Monero",
      "regex": "^[48][a-zA-Z|\\d]{94}([a-zA-Z|\\d]{11})?$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/XMR.png",
      "chains": [
        {
          "name": "Monero",
          "network": "XMR",
          "token_standard": null,
          "regex": "^[48][a-zA-Z|\\d]{94}([a-zA-Z|\\d]{11})?$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "XRP",
      "network": "XRP",
      "token_standard": null,
      "name": "Ripple",
      "regex": "^r[1-9A-HJ-NP-Za-km-z]{25,34}$",
      "regex_memo": "^((?!0)[0-9]{1,19})$",
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/XRP.png",
      "chains": [
        {
          "name": "Ripple",
          "network": "XRP",
          "token_standard": null,
          "regex": "^r[1-9A-HJ-NP-Za-km-z]{25,34}$",
          "regex_memo": "^((?!0)[0-9]{1,19})$",
          "is_default": true
        }
      ]
    },
    {
      "symbol": "XTZ",
      "network": "XTZ",
      "token_standard": null,
      "name": "Tezos",
      "regex": "^(tz[1,2,3]|KT1)[a-zA-Z0-9]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/XTZ.png",
      "chains": [
        {
          "name": "Tezos",
          "network": "XTZ",
          "token_standard": null,
          "regex": "^(tz[1,2,3]|KT1)[a-zA-Z0-9]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "XVG",
      "network": "XVG",
      "token_standard": null,
      "name": "Verge",
      "regex": "^(D)[A-Za-z0-9]{33}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/XVG.png",
      "chains": [
        {
          "name": "Verge",
          "network": "XVG",
          "token_standard": null,
          "regex": "^(D)[A-Za-z0-9]{33}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "YFI",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "Yearn.finance",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/YFI.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ZEC",
      "network": "ZEC",
      "token_standard": null,
      "name": "Zcash",
      "regex": "^(t)[A-Za-z0-9]{34}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ZEC.png",
      "chains": [
        {
          "name": "Zcash",
          "network": "ZEC",
          "token_standard": null,
          "regex": "^(t)[A-Za-z0-9]{34}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ZIL",
      "network": "ZIL",
      "token_standard": null,
      "name": "Zilliqa",
      "regex": "zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ZIL.png",
      "chains": [
        {
          "name": "Zilliqa",
          "network": "ZIL",
          "token_standard": null,
          "regex": "zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}",
          "regex_memo": null,
          "is_default": true
        }
      ]
    },
    {
      "symbol": "ZRX",
      "network": "ETH",
      "token_standard": "ERC20",
      "name": "0x",
      "regex": "^(0x)[0-9A-Fa-f]{40}$",
      "regex_memo": null,
      "top": 0,
      "logo": "https://www.unmineable.com/img/logos/ZRX.png",
      "chains": [
        {
          "name": "Ethereum",
          "network": "ETH",
          "token_standard": "ERC20",
          "regex": "^(0x)[0-9A-Fa-f]{40}$",
          "regex_memo": null,
          "is_default": true
        }
      ]
    }
  ]
}