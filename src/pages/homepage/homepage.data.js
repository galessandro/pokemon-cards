const POKEMON_DATA = [
  {
    id: 1,
    name: "Colorless",
    items: [
      {
        id: "ex12-1",
        name: "Aerodactyl",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "70",
        types: ["Colorless"],
        evolvesFrom: "Mysterious Fossil",
        abilities: [
          {
            name: "Reactive Protection",
            text:
              "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Power Blow",
            cost: ["Colorless"],
            convertedEnergyCost: 1,
            damage: "10+",
            text:
              "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.",
          },
          {
            name: "Speed Stroke",
            cost: ["Colorless", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "40",
            text:
              "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
          },
        ],
        weaknesses: [
          {
            type: "Lightning",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Fighting",
            value: "-30",
          },
        ],
        set: {
          id: "ex12",
          name: "Legend Maker",
          series: "EX",
          printedTotal: 92,
          total: 93,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "LM",
          releaseDate: "2006/02/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex12/symbol.png",
            logo: "https://images.pokemontcg.io/ex12/logo.png",
          },
        },
        number: "1",
        artist: "Hajime Kusajima",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [142],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex12/1.png",
          large: "https://images.pokemontcg.io/ex12/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex12-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 10,
              mid: 14,
              high: 34.95,
              market: 16.73,
              directLow: null,
            },
            reverseHolofoil: {
              low: 13.5,
              mid: 29.25,
              high: 45,
              market: 3.84,
              directLow: null,
            },
          },
        },
      },
      {
        id: "hgss4-2",
        name: "Altaria",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "90",
        types: ["Colorless"],
        evolvesFrom: "Swablu",
        attacks: [
          {
            name: "Midnight Eyes",
            cost: ["Colorless"],
            convertedEnergyCost: 1,
            damage: "20",
            text: "The Defending Pokémon is now Asleep.",
          },
          {
            name: "Stadium Power",
            cost: ["Colorless", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "40+",
            text:
              "If there is any Stadium card in play, this attack does 40 damage plus 30 more damage.",
          },
        ],
        weaknesses: [
          {
            type: "Colorless",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Fighting",
            value: "-20",
          },
        ],
        set: {
          id: "hgss4",
          name: "HS—Triumphant",
          series: "HeartGold & SoulSilver",
          printedTotal: 102,
          total: 102,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "TM",
          releaseDate: "2010/11/03",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/hgss4/symbol.png",
            logo: "https://images.pokemontcg.io/hgss4/logo.png",
          },
        },
        number: "2",
        artist: "Ryo Ueda",
        rarity: "Rare Holo",
        flavorText:
          "It flies gracefully through the sky. Its melodic humming makes you feel like you're in a dream.",
        nationalPokedexNumbers: [334],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/hgss4/2.png",
          large: "https://images.pokemontcg.io/hgss4/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/hgss4-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 1,
              mid: 2.9,
              high: 3.99,
              market: 0.97,
              directLow: 3.99,
            },
            reverseHolofoil: {
              low: 0.81,
              mid: 1,
              high: 2.99,
              market: 0.7,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex3-2",
        name: "Altaria",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "80",
        types: ["Colorless"],
        evolvesFrom: "Swablu",
        attacks: [
          {
            name: "Dragon Dance",
            cost: ["Colorless"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, this attack does 40 more damage (before applying Weakness and Resistance).",
          },
          {
            name: "Dragon Song",
            cost: ["Water", "Lightning"],
            convertedEnergyCost: 2,
            damage: "30",
            text: "Each Defending Pokémon is now Asleep.",
          },
        ],
        weaknesses: [
          {
            type: "Colorless",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Grass",
            value: "-30",
          },
          {
            type: "Fighting",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "ex3",
          name: "Dragon",
          series: "EX",
          printedTotal: 97,
          total: 97,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "DR",
          releaseDate: "2003/09/18",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex3/symbol.png",
            logo: "https://images.pokemontcg.io/ex3/logo.png",
          },
        },
        number: "2",
        artist: "Atsuko Nishida",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [334],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex3/2.png",
          large: "https://images.pokemontcg.io/ex3/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex3-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 17.99,
              mid: 24.8,
              high: 29.99,
              market: 24.63,
              directLow: null,
            },
            reverseHolofoil: {
              low: 19.99,
              mid: 22.5,
              high: 25,
              market: 12.47,
              directLow: null,
            },
          },
        },
      },
      {
        id: "col1-1",
        name: "Clefable",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "80",
        types: ["Colorless"],
        evolvesFrom: "Clefairy",
        attacks: [
          {
            name: "Fairy Power",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "",
            text:
              "Return 1 of your Pokémon and all cards attached to it in your hand.",
          },
          {
            name: "Moon Impact",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "40",
            text: "",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "col1",
          name: "Call of Legends",
          series: "HeartGold & SoulSilver",
          printedTotal: 106,
          total: 106,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "CL",
          releaseDate: "2011/02/09",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/col1/symbol.png",
            logo: "https://images.pokemontcg.io/col1/logo.png",
          },
        },
        number: "1",
        artist: "sui",
        rarity: "Rare Holo",
        flavorText:
          "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
        nationalPokedexNumbers: [36],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/col1/1.png",
          large: "https://images.pokemontcg.io/col1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/col1-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 1.5,
              mid: 1.75,
              high: 2.49,
              market: 1.61,
              directLow: null,
            },
            reverseHolofoil: {
              low: 0.69,
              mid: 1.76,
              high: 4.45,
              market: 1.33,
              directLow: null,
            },
          },
        },
      },
      {
        id: "hgss1-3",
        name: "Clefable",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "80",
        types: ["Colorless"],
        evolvesFrom: "Clefairy",
        attacks: [
          {
            name: "Fairy Power",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "",
            text:
              "Return 1 of your Pokémon and all cards attached to it to your hand.",
          },
          {
            name: "Moon Impact",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "40",
            text: "",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "hgss1",
          name: "HeartGold & SoulSilver",
          series: "HeartGold & SoulSilver",
          printedTotal: 123,
          total: 123,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "HS",
          releaseDate: "2010/02/10",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/hgss1/symbol.png",
            logo: "https://images.pokemontcg.io/hgss1/logo.png",
          },
        },
        number: "3",
        artist: "Masakazu Fukuda",
        rarity: "Rare Holo",
        flavorText:
          "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
        nationalPokedexNumbers: [36],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/hgss1/3.png",
          large: "https://images.pokemontcg.io/hgss1/3_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/hgss1-3",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 1.5,
              mid: 2.16,
              high: 5,
              market: 1.75,
              directLow: null,
            },
            reverseHolofoil: {
              low: 0.74,
              mid: 0.77,
              high: 1.12,
              market: 1.01,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 2,
    name: "Darkness",
    items: [
      {
        id: "ex3-1",
        name: "Absol",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "70",
        types: ["Darkness"],
        attacks: [
          {
            name: "Bad News",
            cost: ["Darkness"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose.",
          },
          {
            name: "Prize Count",
            cost: ["Darkness", "Colorless"],
            convertedEnergyCost: 2,
            damage: "20+",
            text:
              "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Psychic",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "ex3",
          name: "Dragon",
          series: "EX",
          printedTotal: 97,
          total: 97,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "DR",
          releaseDate: "2003/09/18",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex3/symbol.png",
            logo: "https://images.pokemontcg.io/ex3/logo.png",
          },
        },
        number: "1",
        artist: "Naoyo Kimura",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [359],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex3/1.png",
          large: "https://images.pokemontcg.io/ex3/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex3-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 32,
              mid: 43.6,
              high: 55.99,
              market: 45.05,
              directLow: null,
            },
            reverseHolofoil: {
              low: 30,
              mid: 34.75,
              high: 39.5,
              market: 10.79,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pl3-1",
        name: "Absol G",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        level: "59",
        hp: "70",
        types: ["Darkness"],
        attacks: [
          {
            name: "Feint Attack",
            cost: ["Darkness"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
          },
          {
            name: "Doom News",
            cost: ["Darkness", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "",
            text:
              "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Psychic",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "pl3",
          name: "Supreme Victors",
          series: "Platinum",
          printedTotal: 147,
          total: 150,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "SV",
          releaseDate: "2009/08/19",
          updatedAt: "2018/03/07 22:40:00",
          images: {
            symbol: "https://images.pokemontcg.io/pl3/symbol.png",
            logo: "https://images.pokemontcg.io/pl3/logo.png",
          },
        },
        number: "1",
        artist: "Yusuke Ishikawa",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [359],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pl3/1.png",
          large: "https://images.pokemontcg.io/pl3/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pl3-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 1.56,
              mid: 2.42,
              high: 4.82,
              market: 4.21,
              directLow: null,
            },
            reverseHolofoil: {
              low: 1,
              mid: 3.32,
              high: 3.99,
              market: 3.39,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex7-2",
        name: "Dark Ampharos",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "120",
        types: ["Lightning", "Darkness"],
        evolvesFrom: "Dark Flaaffy",
        rules: ["This Pokémon is both Lightning Darkness type."],
        abilities: [
          {
            name: "Darkest Impulse",
            text:
              "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Ram",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30",
            text: "",
          },
          {
            name: "Shock Bolt",
            cost: ["Lightning", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "70",
            text: "Discard all Lightning Energy attached to Dark Ampharos.",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "ex7",
          name: "Team Rocket Returns",
          series: "EX",
          printedTotal: 109,
          total: 109,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "TRR",
          releaseDate: "2004/11/01",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex7/symbol.png",
            logo: "https://images.pokemontcg.io/ex7/logo.png",
          },
        },
        number: "2",
        artist: "Emi Miwa",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [181],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex7/2.png",
          large: "https://images.pokemontcg.io/ex7/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex7-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 41.99,
              mid: 45,
              high: 100,
              market: 67.95,
              directLow: null,
            },
            reverseHolofoil: {
              low: 52.99,
              mid: 55.19,
              high: 67.95,
              market: 67.95,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex7-3",
        name: "Dark Crobat",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "90",
        types: ["Grass", "Darkness"],
        evolvesFrom: "Dark Golbat",
        rules: ["This Pokémon is both Grass Darkness type."],
        abilities: [
          {
            name: "Black Beam",
            text:
              "Once during your turn (before your attack), if Dark Crobat is your Active Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Dark Crobat is affected by a Special Condition.",
            type: "Poké-Power",
          },
        ],
        attacks: [
          {
            name: "Dark Drain",
            cost: ["Grass", "Colorless"],
            convertedEnergyCost: 2,
            damage: "",
            text:
              "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove from Dark Crobat a number of damage counters equal to the number of your opponent's Pokémon in play.",
          },
          {
            name: "Skill Dive",
            cost: ["Grass", "Colorless"],
            convertedEnergyCost: 2,
            damage: "",
            text:
              "Does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        weaknesses: [
          {
            type: "Lightning",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Fighting",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "ex7",
          name: "Team Rocket Returns",
          series: "EX",
          printedTotal: 109,
          total: 109,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "TRR",
          releaseDate: "2004/11/01",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex7/symbol.png",
            logo: "https://images.pokemontcg.io/ex7/logo.png",
          },
        },
        number: "3",
        artist: "Kyoko Koizumi",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [169],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex7/3.png",
          large: "https://images.pokemontcg.io/ex7/3_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex7-3",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 8.66,
              mid: 23,
              high: 37.49,
              market: 18.17,
              directLow: null,
            },
            reverseHolofoil: {
              low: 6.47,
              mid: 42.47,
              high: 50,
              market: 9.99,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex13-2",
        name: "Cradily δ",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "100",
        types: ["Darkness", "Metal"],
        evolvesFrom: "Lileep",
        rules: ["This Pokémon is both Darkness Metal type."],
        attacks: [
          {
            name: "Harsh Fluid",
            cost: ["Darkness", "Colorless"],
            convertedEnergyCost: 2,
            damage: "20",
            text:
              "Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
          },
          {
            name: "Poison Tentacles",
            cost: ["Metal", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50",
            text: "The Defending Pokémon is now Poisoned.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "ex13",
          name: "Holon Phantoms",
          series: "EX",
          printedTotal: 110,
          total: 111,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "HP",
          releaseDate: "2006/05/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex13/symbol.png",
            logo: "https://images.pokemontcg.io/ex13/logo.png",
          },
        },
        number: "2",
        artist: "Kouki Saitou",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [346],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex13/2.png",
          large: "https://images.pokemontcg.io/ex13/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex13-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 5,
              mid: 8.76,
              high: 19.97,
              market: 7.75,
              directLow: null,
            },
            reverseHolofoil: {
              low: 4.99,
              mid: 5.23,
              high: 48.94,
              market: 8,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex4-1",
        name: "Team Aqua's Cacturne",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "80",
        types: ["Grass", "Darkness"],
        evolvesFrom: "Team Aqua's Cacnea",
        rules: ["This Pokémon is both Grass Darkness type."],
        attacks: [
          {
            name: "Dark Bind",
            cost: ["Darkness"],
            convertedEnergyCost: 1,
            damage: "10",
            text:
              "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed.",
          },
          {
            name: "Poison Barb",
            cost: ["Grass", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "40",
            text: "The Defending Pokémon is now Poisoned.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "ex4",
          name: "Team Magma vs Team Aqua",
          series: "EX",
          printedTotal: 95,
          total: 95,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "MA",
          releaseDate: "2004/03/01",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex4/symbol.png",
            logo: "https://images.pokemontcg.io/ex4/logo.png",
          },
        },
        number: "1",
        artist: "K. Utsunomiya",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [332],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex4/1.png",
          large: "https://images.pokemontcg.io/ex4/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex4-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 4.5,
              mid: 7.47,
              high: 13.45,
              market: 18.99,
              directLow: null,
            },
            reverseHolofoil: {
              low: 3,
              mid: 3.5,
              high: 3.99,
              market: 3.72,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 3,
    name: "Dragon",
    items: [
      {
        id: "dv1-1",
        name: "Dratini",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "40",
        types: ["Dragon"],
        evolvesTo: ["Dragonair"],
        attacks: [
          {
            name: "Wrap",
            cost: ["Grass", "Lightning"],
            convertedEnergyCost: 2,
            damage: "20",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
          },
        ],
        weaknesses: [
          {
            type: "Dragon",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "dv1",
          name: "Dragon Vault",
          series: "Black & White",
          printedTotal: 20,
          total: 20,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DRV",
          releaseDate: "2012/10/05",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/dv1/symbol.png",
            logo: "https://images.pokemontcg.io/dv1/logo.png",
          },
        },
        number: "1",
        artist: "Masakazu Fukuda",
        rarity: "Rare Holo",
        flavorText:
          'It is called the "Mirage Pokémon" because so few have seen it. Its shed skin has been found.',
        nationalPokedexNumbers: [147],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/dv1/1.png",
          large: "https://images.pokemontcg.io/dv1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/dv1-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 0.45,
              mid: 0.93,
              high: 2.63,
              market: 0.77,
              directLow: null,
            },
          },
        },
      },
      {
        id: "dv1-2",
        name: "Dratini",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "40",
        types: ["Dragon"],
        evolvesTo: ["Dragonair"],
        attacks: [
          {
            name: "Hypnotic Gaze",
            cost: ["Grass"],
            convertedEnergyCost: 1,
            damage: "",
            text: "The Defending Pokémon is now Asleep.",
          },
          {
            name: "Tail Whap",
            cost: ["Lightning"],
            convertedEnergyCost: 1,
            damage: "10",
            text: "",
          },
        ],
        weaknesses: [
          {
            type: "Dragon",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "dv1",
          name: "Dragon Vault",
          series: "Black & White",
          printedTotal: 20,
          total: 20,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DRV",
          releaseDate: "2012/10/05",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/dv1/symbol.png",
            logo: "https://images.pokemontcg.io/dv1/logo.png",
          },
        },
        number: "2",
        artist: "Naoki Saito",
        rarity: "Rare Holo",
        flavorText:
          'It is called the "Mirage Pokémon" because so few have seen it. Its shed skin has been found.',
        nationalPokedexNumbers: [147],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/dv1/2.png",
          large: "https://images.pokemontcg.io/dv1/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/dv1-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 9.99,
              mid: 17.09,
              high: 23,
              market: 1.78,
              directLow: 17.08,
            },
          },
        },
      },
      {
        id: "dv1-3",
        name: "Dragonair",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "70",
        types: ["Dragon"],
        evolvesFrom: "Dratini",
        evolvesTo: ["Dragonite"],
        attacks: [
          {
            name: "Tail Whap",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "20",
            text: "",
          },
          {
            name: "Dragon Pulse",
            cost: ["Grass", "Lightning", "Colorless"],
            convertedEnergyCost: 3,
            damage: "70",
            text: "Discard the top card of your deck.",
          },
        ],
        weaknesses: [
          {
            type: "Dragon",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "dv1",
          name: "Dragon Vault",
          series: "Black & White",
          printedTotal: 20,
          total: 20,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DRV",
          releaseDate: "2012/10/05",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/dv1/symbol.png",
            logo: "https://images.pokemontcg.io/dv1/logo.png",
          },
        },
        number: "3",
        artist: "Hajime Kusajima",
        rarity: "Rare Holo",
        flavorText:
          "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.",
        nationalPokedexNumbers: [148],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/dv1/3.png",
          large: "https://images.pokemontcg.io/dv1/3_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/dv1-3",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 0.68,
              mid: 1.1,
              high: 1.96,
              market: 1.24,
              directLow: null,
            },
          },
        },
      },
      {
        id: "dv1-4",
        name: "Dragonair",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "70",
        types: ["Dragon"],
        evolvesFrom: "Dratini",
        evolvesTo: ["Dragonite"],
        attacks: [
          {
            name: "Healing Melody",
            cost: ["Grass"],
            convertedEnergyCost: 1,
            damage: "",
            text: "Heal 10 damage from each of your Pokémon.",
          },
          {
            name: "Slam",
            cost: ["Lightning", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30×",
            text:
              "Flip 2 coins. This attack does 30 damage times the number of heads.",
          },
        ],
        weaknesses: [
          {
            type: "Dragon",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "dv1",
          name: "Dragon Vault",
          series: "Black & White",
          printedTotal: 20,
          total: 20,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DRV",
          releaseDate: "2012/10/05",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/dv1/symbol.png",
            logo: "https://images.pokemontcg.io/dv1/logo.png",
          },
        },
        number: "4",
        artist: "Kagemaru Himeno",
        rarity: "Rare Holo",
        flavorText:
          "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.",
        nationalPokedexNumbers: [148],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/dv1/4.png",
          large: "https://images.pokemontcg.io/dv1/4_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/dv1-4",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 6.5,
              mid: 7.94,
              high: 17.25,
              market: 3.41,
              directLow: null,
            },
          },
        },
      },
      {
        id: "dv1-5",
        name: "Dragonite",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "150",
        types: ["Dragon"],
        evolvesFrom: "Dragonair",
        attacks: [
          {
            name: "Hyper Beam",
            cost: ["Lightning", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50",
            text:
              "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
          },
          {
            name: "Hurricane Tail",
            cost: ["Grass", "Colorless", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "60×",
            text:
              "Flip 4 coins. This attack does 60 damage times the number of heads.",
          },
        ],
        weaknesses: [
          {
            type: "Dragon",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "dv1",
          name: "Dragon Vault",
          series: "Black & White",
          printedTotal: 20,
          total: 20,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DRV",
          releaseDate: "2012/10/05",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/dv1/symbol.png",
            logo: "https://images.pokemontcg.io/dv1/logo.png",
          },
        },
        number: "5",
        artist: "Mitsuhiro Arita",
        rarity: "Rare Holo",
        flavorText:
          "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
        nationalPokedexNumbers: [149],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/dv1/5.png",
          large: "https://images.pokemontcg.io/dv1/5_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/dv1-5",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 10.61,
              mid: 32.5,
              high: 94.99,
              market: 3.88,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 4,
    name: "Fairy",
    items: [
      {
        id: "xyp-XY04",
        name: "Sylveon",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "90",
        types: ["Fairy"],
        evolvesFrom: "Eevee",
        attacks: [
          {
            name: "Disarming Voice",
            cost: ["Fairy"],
            convertedEnergyCost: 1,
            damage: "20",
            text: "Your opponent's Active Pokémon is now Confused.",
          },
          {
            name: "Fairy Wind",
            cost: ["Fairy", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "60",
            text: "",
          },
        ],
        weaknesses: [
          {
            type: "Metal",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Darkness",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "xyp",
          name: "XY Black Star Promos",
          series: "XY",
          printedTotal: 183,
          total: 183,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "PR-XY",
          releaseDate: "2013/10/12",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/xyp/symbol.png",
            logo: "https://images.pokemontcg.io/xyp/logo.png",
          },
        },
        number: "XY04",
        artist: "5ban Graphics",
        rarity: "Promo",
        flavorText:
          "It sends a soothing aura from its ribbonlike feelers to calm fights.",
        nationalPokedexNumbers: [700],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/xyp/XY04.png",
          large: "https://images.pokemontcg.io/xyp/XY04_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/xyp-XY04",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 6.5,
              mid: 8.93,
              high: 42.45,
              market: 7.58,
              directLow: null,
            },
          },
        },
      },
      {
        id: "xyp-XY05",
        name: "Xerneas",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "130",
        types: ["Fairy"],
        attacks: [
          {
            name: "Geomancy",
            cost: ["Fairy"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
          },
          {
            name: "Rainbow Spear",
            cost: ["Fairy", "Fairy", "Colorless"],
            convertedEnergyCost: 3,
            damage: "100",
            text: "Discard an Energy attached to this Pokémon.",
          },
        ],
        weaknesses: [
          {
            type: "Metal",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Darkness",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "xyp",
          name: "XY Black Star Promos",
          series: "XY",
          printedTotal: 183,
          total: 183,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "PR-XY",
          releaseDate: "2013/10/12",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/xyp/symbol.png",
            logo: "https://images.pokemontcg.io/xyp/logo.png",
          },
        },
        number: "XY05",
        artist: "5ban Graphics",
        rarity: "Promo",
        flavorText:
          "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
        nationalPokedexNumbers: [716],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/xyp/XY05.png",
          large: "https://images.pokemontcg.io/xyp/XY05_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/xyp-XY05",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 3,
              mid: 4.11,
              high: 8.99,
              market: 4.58,
              directLow: null,
            },
          },
        },
      },
      {
        id: "det1-14",
        name: "Jigglypuff",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "60",
        types: ["Fairy"],
        evolvesTo: ["Wigglytuff"],
        attacks: [
          {
            name: "Healing Melody",
            cost: ["Fairy"],
            convertedEnergyCost: 1,
            damage: "",
            text: "Heal 10 damage from each of your Pokémon.",
          },
        ],
        weaknesses: [
          {
            type: "Metal",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Darkness",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "det1",
          name: "Detective Pikachu",
          series: "Sun & Moon",
          printedTotal: 18,
          total: 18,
          legalities: {
            unlimited: "Legal",
            standard: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DET",
          releaseDate: "2019/04/05",
          updatedAt: "2019/04/25 22:26:00",
          images: {
            symbol: "https://images.pokemontcg.io/det1/symbol.png",
            logo: "https://images.pokemontcg.io/det1/logo.png",
          },
        },
        number: "14",
        artist: "Framestore",
        rarity: "Common",
        flavorText:
          "Recordings of Jigglypuff's strange lullabies can be purchased from department stores. These CDs can be found near the bedding area.",
        nationalPokedexNumbers: [39],
        legalities: {
          unlimited: "Legal",
          standard: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/det1/14.png",
          large: "https://images.pokemontcg.io/det1/14_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/det1-14",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 0.06,
              mid: 0.26,
              high: 4.95,
              market: 0.25,
              directLow: 0.21,
            },
          },
        },
      },
      {
        id: "det1-15",
        name: "Snubbull",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "70",
        types: ["Fairy"],
        evolvesTo: ["Granbull"],
        attacks: [
          {
            name: "Play Rough",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "10+",
            text: "Flip a coin. If heads, this attack does 30 more damage.",
          },
        ],
        weaknesses: [
          {
            type: "Metal",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Darkness",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "det1",
          name: "Detective Pikachu",
          series: "Sun & Moon",
          printedTotal: 18,
          total: 18,
          legalities: {
            unlimited: "Legal",
            standard: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DET",
          releaseDate: "2019/04/05",
          updatedAt: "2019/04/25 22:26:00",
          images: {
            symbol: "https://images.pokemontcg.io/det1/symbol.png",
            logo: "https://images.pokemontcg.io/det1/logo.png",
          },
        },
        number: "15",
        artist: "Framestore",
        rarity: "Common",
        flavorText:
          "It grows close to others easily and is also easily spoiled. The disparity between its face and its actions makes many young people wild about it.",
        nationalPokedexNumbers: [209],
        legalities: {
          unlimited: "Legal",
          standard: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/det1/15.png",
          large: "https://images.pokemontcg.io/det1/15_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/det1-15",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 0.15,
              mid: 0.34,
              high: 4.95,
              market: 0.31,
              directLow: null,
            },
          },
        },
      },
      {
        id: "xyp-XY07",
        name: "Xerneas-EX",
        supertype: "Pokémon",
        subtypes: ["Basic", "EX"],
        hp: "170",
        types: ["Fairy"],
        rules: [
          "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.",
        ],
        attacks: [
          {
            name: "Break Through",
            cost: ["Fairy", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "60",
            text:
              "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
          {
            name: "X Blast",
            cost: ["Fairy", "Fairy", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "140",
            text: "This Pokémon can't use X Blast during your next turn.",
          },
        ],
        weaknesses: [
          {
            type: "Metal",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Darkness",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "xyp",
          name: "XY Black Star Promos",
          series: "XY",
          printedTotal: 183,
          total: 183,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "PR-XY",
          releaseDate: "2013/10/12",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/xyp/symbol.png",
            logo: "https://images.pokemontcg.io/xyp/logo.png",
          },
        },
        number: "XY07",
        artist: "5ban Graphics",
        rarity: "Promo",
        nationalPokedexNumbers: [716],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/xyp/XY07.png",
          large: "https://images.pokemontcg.io/xyp/XY07_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/xyp-XY07",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 1.24,
              mid: 2.5,
              high: 10,
              market: 1.98,
              directLow: 3.82,
            },
          },
        },
      },
    ],
  },
  {
    id: 5,
    name: "Fighting",
    items: [
      {
        id: "base3-1",
        name: "Aerodactyl",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        level: "28",
        hp: "60",
        types: ["Fighting"],
        evolvesFrom: "Mysterious Fossil",
        abilities: [
          {
            name: "Prehistoric Power",
            text:
              "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
            type: "Pokémon Power",
          },
        ],
        attacks: [
          {
            name: "Wing Attack",
            cost: ["Colorless", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "30",
            text: "",
          },
        ],
        weaknesses: [
          {
            type: "Grass",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Fighting",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "base3",
          name: "Fossil",
          series: "Base",
          printedTotal: 62,
          total: 62,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "FO",
          releaseDate: "1999/10/10",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/base3/symbol.png",
            logo: "https://images.pokemontcg.io/base3/logo.png",
          },
        },
        number: "1",
        artist: "Kagemaru Himeno",
        rarity: "Rare Holo",
        flavorText:
          "A ferocious prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.",
        nationalPokedexNumbers: [142],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/base3/1.png",
          large: "https://images.pokemontcg.io/base3/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/base3-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 15,
              mid: 23.99,
              high: 100,
              market: 25.48,
              directLow: null,
            },
            "1stEditionHolofoil": {
              low: 39.99,
              mid: 89.98,
              high: 140,
              market: 123.33,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pop6-2",
        name: "Lucario",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        level: "30",
        hp: "90",
        types: ["Fighting"],
        evolvesFrom: "Riolu",
        attacks: [
          {
            name: "Feint",
            cost: ["Colorless"],
            convertedEnergyCost: 1,
            damage: "30",
            text: "This attack's damage isn't affected by Resistance.",
          },
          {
            name: "Aura Sphere",
            cost: ["Fighting", "Fighting"],
            convertedEnergyCost: 2,
            damage: "40",
            text:
              "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        weaknesses: [
          {
            type: "Psychic",
            value: "+20",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "pop6",
          name: "POP Series 6",
          series: "POP",
          printedTotal: 17,
          total: 17,
          legalities: {
            unlimited: "Legal",
          },
          releaseDate: "2007/09/01",
          updatedAt: "2020/05/01 16:06:00",
          images: {
            symbol: "https://images.pokemontcg.io/pop6/symbol.png",
            logo: "https://images.pokemontcg.io/pop6/logo.png",
          },
        },
        number: "2",
        artist: "Kouki Saitou",
        rarity: "Rare",
        flavorText:
          "It has the ability to sense the auras of all things. It understands human speech.",
        nationalPokedexNumbers: [448],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pop6/2.png",
          large: "https://images.pokemontcg.io/pop6/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pop6-2",
          updatedAt: "2021/04/10",
          prices: {
            normal: {
              low: 1.99,
              mid: 2.59,
              high: 2.99,
              market: 1.91,
              directLow: null,
            },
          },
        },
      },
      {
        id: "gym1-2",
        name: "Brock's Rhydon",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        level: "38",
        hp: "80",
        types: ["Fighting"],
        evolvesFrom: "Brock's Rhyhorn",
        evolvesTo: ["Rhyperior"],
        abilities: [
          {
            name: "Bench Guard",
            text:
              "As long as Brock's Rhydon is Benched, whenever 1 of your Benched Pokémon is damaged, you may do 10 of that damage to Brock's Rhydon instead. (If more than 1 of your Benched Pokémon is damaged at the same time, you may use this power once for each of them.)",
            type: "Pokémon Power",
          },
        ],
        attacks: [
          {
            name: "Lariat",
            cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "70",
            text: "Flip a coin. If tails, this attack does nothing.",
          },
        ],
        weaknesses: [
          {
            type: "Grass",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Lightning",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "gym1",
          name: "Gym Heroes",
          series: "Gym",
          printedTotal: 132,
          total: 132,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "G1",
          releaseDate: "2000/08/14",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/gym1/symbol.png",
            logo: "https://images.pokemontcg.io/gym1/logo.png",
          },
        },
        number: "2",
        artist: "Ken Sugimori",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [112],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/gym1/2.png",
          large: "https://images.pokemontcg.io/gym1/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/gym1-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 8.99,
              mid: 18.59,
              high: 1009,
              market: 17.74,
              directLow: null,
            },
            "1stEditionHolofoil": {
              low: 44.23,
              mid: 103.06,
              high: 129.99,
              market: 98,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex13-1",
        name: "Armaldo δ",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "110",
        types: ["Fighting", "Metal"],
        evolvesFrom: "Anorith",
        rules: ["This Pokémon is both Fighting Metal type."],
        attacks: [
          {
            name: "Delta Edge",
            cost: ["Metal", "Colorless"],
            convertedEnergyCost: 2,
            damage: "70",
            text:
              "If you have any Supporter cards in play, this attack's base damage is 20 instead of 70.",
          },
          {
            name: "Fossil Charge",
            cost: ["Fighting", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50",
            text:
              "You may discard a Claw Fossil, Mysterious Fossil, Root Fossil, or Holon Fossil from your hand. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        weaknesses: [
          {
            type: "Grass",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "ex13",
          name: "Holon Phantoms",
          series: "EX",
          printedTotal: 110,
          total: 111,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "HP",
          releaseDate: "2006/05/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex13/symbol.png",
            logo: "https://images.pokemontcg.io/ex13/logo.png",
          },
        },
        number: "1",
        artist: "Masakazu Fukuda",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [348],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex13/1.png",
          large: "https://images.pokemontcg.io/ex13/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex13-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 5.5,
              mid: 9.99,
              high: 15.97,
              market: 9.61,
              directLow: null,
            },
            reverseHolofoil: {
              low: 14.24,
              mid: 14.99,
              high: 24.63,
              market: 11.33,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pop7-2",
        name: "Gallade",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "55",
        hp: "130",
        types: ["Fighting"],
        evolvesFrom: "Kirlia",
        attacks: [
          {
            name: "Sonic Blade",
            cost: ["Fighting", "Colorless"],
            convertedEnergyCost: 2,
            damage: "",
            text:
              "Put damage counters on the Defending Pokémon until it is 50 HP away from being Knocked Out. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
          },
          {
            name: "Psychic Cut",
            cost: ["Psychic", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "60+",
            text:
              "You may choose as many of your face-down Prize cards as you like and put them face up. If you do, this attack does 60 damage plus 20 more damage for each Prize card you chose. (These cards remain face up for the rest of the game.)",
          },
        ],
        weaknesses: [
          {
            type: "Psychic",
            value: "+30",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "pop7",
          name: "POP Series 7",
          series: "POP",
          printedTotal: 17,
          total: 17,
          legalities: {
            unlimited: "Legal",
          },
          releaseDate: "2008/03/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/pop7/symbol.png",
            logo: "https://images.pokemontcg.io/pop7/logo.png",
          },
        },
        number: "2",
        artist: "Daisuke Ito",
        rarity: "Rare",
        flavorText:
          "A master of courtesy and swordsmanship, it fights using extending swords on it elbows.",
        nationalPokedexNumbers: [475],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pop7/2.png",
          large: "https://images.pokemontcg.io/pop7/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pop7-2",
          updatedAt: "2021/04/10",
          prices: {
            normal: {
              low: 5,
              mid: 5.01,
              high: 10,
              market: 2.6,
              directLow: null,
            },
            holofoil: {
              low: 2.99,
              mid: 3.26,
              high: 3.48,
              market: 5.74,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 6,
    name: "Fire",
    items: [
      {
        id: "hgss1-1",
        name: "Arcanine",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "110",
        types: ["Fire"],
        evolvesFrom: "Growlithe",
        attacks: [
          {
            name: "Sharp Fang",
            cost: ["Fire", "Colorless"],
            convertedEnergyCost: 2,
            damage: "50",
            text: "",
          },
          {
            name: "Fire Mane",
            cost: ["Fire", "Colorless", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "90",
            text: "",
          },
        ],
        weaknesses: [
          {
            type: "Water",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "hgss1",
          name: "HeartGold & SoulSilver",
          series: "HeartGold & SoulSilver",
          printedTotal: 123,
          total: 123,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "HS",
          releaseDate: "2010/02/10",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/hgss1/symbol.png",
            logo: "https://images.pokemontcg.io/hgss1/logo.png",
          },
        },
        number: "1",
        artist: "Naoki Saito",
        rarity: "Rare Holo",
        flavorText:
          "This legendary Chinese Pokémon is considered magnificent. Many people are enchanted by its grand mane.",
        nationalPokedexNumbers: [59],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/hgss1/1.png",
          large: "https://images.pokemontcg.io/hgss1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/hgss1-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 26.01,
              mid: 32.45,
              high: 45.82,
              market: 26.06,
              directLow: null,
            },
            reverseHolofoil: {
              low: 26.85,
              mid: 53.42,
              high: 79.99,
              market: 4.16,
              directLow: null,
            },
          },
        },
      },
      {
        id: "gym1-1",
        name: "Blaine's Moltres",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        level: "44",
        hp: "90",
        types: ["Fire"],
        attacks: [
          {
            name: "Phoenix Flame",
            cost: ["Fire", "Fire", "Fire", "Fire", "Fire"],
            convertedEnergyCost: 5,
            damage: "90",
            text:
              "Flip a coin. If tails, shuffle Blaine's Moltres and all cards attached to it into your deck (after doing damage).",
          },
        ],
        resistances: [
          {
            type: "Fighting",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "gym1",
          name: "Gym Heroes",
          series: "Gym",
          printedTotal: 132,
          total: 132,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "G1",
          releaseDate: "2000/08/14",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/gym1/symbol.png",
            logo: "https://images.pokemontcg.io/gym1/logo.png",
          },
        },
        number: "1",
        artist: "Ken Sugimori",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [146],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/gym1/1.png",
          large: "https://images.pokemontcg.io/gym1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/gym1-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 49.99,
              mid: 71.99,
              high: 279,
              market: 71.88,
              directLow: null,
            },
            "1stEditionHolofoil": {
              low: 259.96,
              mid: 265,
              high: 400.99,
              market: 200,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ecard2-H2",
        name: "Arcanine",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "90",
        types: ["Fire"],
        evolvesFrom: "Growlithe",
        abilities: [
          {
            name: "Extreme Speed",
            text:
              "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Fire Blow",
            cost: ["Colorless", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "30+",
            text:
              "You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.",
          },
        ],
        weaknesses: [
          {
            type: "Water",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "ecard2",
          name: "Aquapolis",
          series: "E-Card",
          printedTotal: 186,
          total: 186,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "AQ",
          releaseDate: "2003/01/15",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/ecard2/symbol.png",
            logo: "https://images.pokemontcg.io/ecard2/logo.png",
          },
        },
        number: "H2",
        artist: "Kyoko Umemoto",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [59],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ecard2/H2.png",
          large: "https://images.pokemontcg.io/ecard2/H2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ecard2-H2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 114,
              mid: 116.98,
              high: 399.95,
              market: 200,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pl3-2",
        name: "Blaziken FB",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        level: "50",
        hp: "80",
        types: ["Fire"],
        attacks: [
          {
            name: "Luring Flame",
            cost: ["Fire"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned.",
          },
          {
            name: "Vapor Kick",
            cost: ["Fire", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30+",
            text:
              "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage.",
          },
        ],
        weaknesses: [
          {
            type: "Water",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "pl3",
          name: "Supreme Victors",
          series: "Platinum",
          printedTotal: 147,
          total: 150,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "SV",
          releaseDate: "2009/08/19",
          updatedAt: "2018/03/07 22:40:00",
          images: {
            symbol: "https://images.pokemontcg.io/pl3/symbol.png",
            logo: "https://images.pokemontcg.io/pl3/logo.png",
          },
        },
        number: "2",
        artist: "Motofumi Fujiwara",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [257],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pl3/2.png",
          large: "https://images.pokemontcg.io/pl3/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pl3-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 8.99,
              mid: 10.97,
              high: 13.81,
              market: 6.94,
              directLow: null,
            },
            reverseHolofoil: {
              low: 5,
              mid: 6,
              high: 7,
              market: 5.46,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex9-1",
        name: "Blaziken",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "110",
        types: ["Fire"],
        evolvesFrom: "Combusken",
        abilities: [
          {
            name: "Blaze",
            text:
              "As long as Blaziken's remaining HP is 40 or less, Blaziken does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Searing Flame",
            cost: ["Colorless"],
            convertedEnergyCost: 1,
            damage: "10",
            text: "The Defending Pokémon is now Burned.",
          },
          {
            name: "Damage Burn",
            cost: ["Fire", "Fire", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50+",
            text:
              "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
          },
        ],
        weaknesses: [
          {
            type: "Water",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "ex9",
          name: "Emerald",
          series: "EX",
          printedTotal: 106,
          total: 106,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "EM",
          releaseDate: "2005/05/01",
          updatedAt: "2020/02/08 09:00:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex9/symbol.png",
            logo: "https://images.pokemontcg.io/ex9/logo.png",
          },
        },
        number: "1",
        artist: "Midori Harada",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [257],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex9/1.png",
          large: "https://images.pokemontcg.io/ex9/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex9-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 17,
              mid: 22,
              high: 35,
              market: 18.51,
              directLow: null,
            },
            reverseHolofoil: {
              low: 19.99,
              mid: 28.34,
              high: 100,
              market: 35.14,
              directLow: null,
            },
          },
        },
      },
      {
        id: "gym2-1",
        name: "Blaine's Arcanine",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        level: "42",
        hp: "90",
        types: ["Fire"],
        evolvesFrom: "Blaine's Growlithe",
        attacks: [
          {
            name: "Heat Tackle",
            cost: ["Fire", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "40",
            text: "Blaine's Arcanine does 10 damage to itself.",
          },
          {
            name: "Firestorm",
            cost: ["Fire", "Fire", "Fire", "Fire"],
            convertedEnergyCost: 4,
            damage: "120",
            text:
              "Discard 3 Fire Energy cards attached to Blaine's Arcanine in order to use this attack.",
          },
        ],
        weaknesses: [
          {
            type: "Water",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "gym2",
          name: "Gym Challenge",
          series: "Gym",
          printedTotal: 132,
          total: 132,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "G2",
          releaseDate: "2000/10/16",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/gym2/symbol.png",
            logo: "https://images.pokemontcg.io/gym2/logo.png",
          },
        },
        number: "1",
        artist: "Ken Sugimori",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [59],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/gym2/1.png",
          large: "https://images.pokemontcg.io/gym2/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/gym2-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 38.96,
              mid: 61.47,
              high: 104.73,
              market: 54.5,
              directLow: null,
            },
            "1stEditionHolofoil": {
              low: 419.99,
              mid: 599.99,
              high: 600.29,
              market: 400,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 7,
    name: "Grass",
    items: [
      {
        id: "det1-1",
        name: "Bulbasaur",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "60",
        types: ["Grass"],
        evolvesTo: ["Ivysaur"],
        attacks: [
          {
            name: "Find a Friend",
            cost: ["Grass"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "det1",
          name: "Detective Pikachu",
          series: "Sun & Moon",
          printedTotal: 18,
          total: 18,
          legalities: {
            unlimited: "Legal",
            standard: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "DET",
          releaseDate: "2019/04/05",
          updatedAt: "2019/04/25 22:26:00",
          images: {
            symbol: "https://images.pokemontcg.io/det1/symbol.png",
            logo: "https://images.pokemontcg.io/det1/logo.png",
          },
        },
        number: "1",
        artist: "MPC Film",
        rarity: "Common",
        flavorText:
          "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
        nationalPokedexNumbers: [1],
        legalities: {
          unlimited: "Legal",
          standard: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/det1/1.png",
          large: "https://images.pokemontcg.io/det1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/det1-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 0.1,
              mid: 0.43,
              high: 9.95,
              market: 0.4,
              directLow: 0.35,
            },
          },
        },
      },
      {
        id: "mcd19-1",
        name: "Caterpie",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "50",
        types: ["Grass"],
        evolvesTo: ["Metapod"],
        attacks: [
          {
            cost: ["Grass"],
            name: "Surprise Attack",
            text: "Flip a coin. If tails, this attack does nothing.",
            damage: "20",
            convertedEnergyCost: 1,
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "mcd19",
          name: "McDonald's Collection 2019",
          series: "Other",
          printedTotal: 12,
          total: 12,
          legalities: {
            unlimited: "Legal",
          },
          releaseDate: "2019/10/15",
          updatedAt: "2020/11/11 13:00:00",
          images: {
            symbol: "https://images.pokemontcg.io/mcd19/symbol.png",
            logo: "https://images.pokemontcg.io/mcd19/logo.png",
          },
        },
        number: "1",
        artist: "Sekio",
        rarity: "Promo",
        nationalPokedexNumbers: [10],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/mcd19/1.png",
          large: "https://images.pokemontcg.io/mcd19/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/mcd19-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 12.75,
              mid: 13,
              high: 14.95,
              market: 6.4,
              directLow: null,
            },
          },
        },
      },
      {
        id: "xy5-1",
        name: "Weedle",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "50",
        types: ["Grass"],
        evolvesTo: ["Kakuna"],
        attacks: [
          {
            name: "Multiply",
            cost: ["Grass"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "xy5",
          name: "Primal Clash",
          series: "XY",
          printedTotal: 160,
          total: 160,
          legalities: {
            unlimited: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "PRC",
          releaseDate: "2015/02/04",
          updatedAt: "2020/05/01 16:06:00",
          images: {
            symbol: "https://images.pokemontcg.io/xy5/symbol.png",
            logo: "https://images.pokemontcg.io/xy5/logo.png",
          },
        },
        number: "1",
        artist: "Midori Harada",
        rarity: "Common",
        flavorText:
          "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
        nationalPokedexNumbers: [13],
        legalities: {
          unlimited: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/xy5/1.png",
          large: "https://images.pokemontcg.io/xy5/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/xy5-1",
          updatedAt: "2021/04/10",
          prices: {
            normal: {
              low: 0.04,
              mid: 0.25,
              high: 1,
              market: 0.1,
              directLow: 0.08,
            },
            reverseHolofoil: {
              low: 0.15,
              mid: 0.39,
              high: 1.95,
              market: 0.2,
              directLow: 0.25,
            },
          },
        },
      },
      {
        id: "ru1-1",
        name: "Venusaur",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "140",
        types: ["Grass"],
        evolvesFrom: "Ivysaur",
        attacks: [
          {
            name: "Giga Drain",
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "50",
            text:
              "Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 4,
        set: {
          id: "ru1",
          name: "Pokémon Rumble",
          series: "Other",
          printedTotal: 16,
          total: 16,
          legalities: {
            unlimited: "Legal",
          },
          releaseDate: "2009/12/02",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ru1/symbol.png",
            logo: "https://images.pokemontcg.io/ru1/logo.png",
          },
        },
        number: "1",
        artist: "Pokemon Rumble",
        nationalPokedexNumbers: [3],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ru1/1.png",
          large: "https://images.pokemontcg.io/ru1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ru1-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 38.01,
              mid: 49.01,
              high: 60,
              market: 39.99,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex11-1",
        name: "Beedrill δ",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "90",
        types: ["Grass", "Metal"],
        evolvesFrom: "Kakuna",
        rules: ["This Pokémon is both Grass Metal type."],
        abilities: [
          {
            name: "Final Sting",
            text:
              "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending Pokémon. That Pokémon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
            type: "Poké-Power",
          },
        ],
        attacks: [
          {
            name: "Super Slash",
            cost: ["Grass", "Metal", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50+",
            text:
              "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        set: {
          id: "ex11",
          name: "Delta Species",
          series: "EX",
          printedTotal: 113,
          total: 114,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "DS",
          releaseDate: "2005/10/31",
          updatedAt: "2020/05/01 16:06:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex11/symbol.png",
            logo: "https://images.pokemontcg.io/ex11/logo.png",
          },
        },
        number: "1",
        artist: "Masakazu Fukuda",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [15],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex11/1.png",
          large: "https://images.pokemontcg.io/ex11/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex11-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 6.72,
              mid: 8.89,
              high: 19.99,
              market: 10.82,
              directLow: null,
            },
            reverseHolofoil: {
              low: 79.99,
              mid: 94.99,
              high: 109.99,
              market: 15.38,
              directLow: null,
            },
          },
        },
      },
      {
        id: "sm9-1",
        name: "Celebi & Venusaur-GX",
        supertype: "Pokémon",
        subtypes: ["Basic", "TAG TEAM", "GX"],
        hp: "270",
        types: ["Grass"],
        rules: [
          "TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.",
        ],
        attacks: [
          {
            name: "Pollen Hazard",
            cost: ["Grass", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50",
            text:
              "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
          },
          {
            name: "Solar Beam",
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "150",
            text: "",
          },
          {
            name: "Evergreen-GX",
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "180",
            text:
              "Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack's cost), shuffle all cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 4,
        set: {
          id: "sm9",
          name: "Team Up",
          series: "Sun & Moon",
          printedTotal: 181,
          total: 196,
          legalities: {
            unlimited: "Legal",
            standard: "Legal",
            expanded: "Legal",
          },
          ptcgoCode: "TEU",
          releaseDate: "2019/02/01",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/sm9/symbol.png",
            logo: "https://images.pokemontcg.io/sm9/logo.png",
          },
        },
        number: "1",
        artist: "Mitsuhiro Arita",
        rarity: "Rare Holo GX",
        nationalPokedexNumbers: [3, 251],
        legalities: {
          unlimited: "Legal",
          standard: "Legal",
          expanded: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/sm9/1.png",
          large: "https://images.pokemontcg.io/sm9/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/sm9-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 4.97,
              mid: 6.01,
              high: 10,
              market: 6.39,
              directLow: 6.01,
            },
          },
        },
      },
    ],
  },
  {
    id: 8,
    name: "Lightning",
    items: [
      {
        id: "pl1-1",
        name: "Ampharos",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "57",
        hp: "130",
        types: ["Lightning"],
        evolvesFrom: "Flaaffy",
        abilities: [
          {
            name: "Damage Bind",
            text:
              "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Gigavolt",
            cost: ["Lightning", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30+",
            text:
              "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
          },
          {
            name: "Reflect Energy",
            cost: ["Lightning", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "70",
            text:
              "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "+30",
          },
        ],
        resistances: [
          {
            type: "Metal",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "pl1",
          name: "Platinum",
          series: "Platinum",
          printedTotal: 127,
          total: 130,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "PL",
          releaseDate: "2009/02/11",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/pl1/symbol.png",
            logo: "https://images.pokemontcg.io/pl1/logo.png",
          },
        },
        number: "1",
        artist: "Atsuko Nishida",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [181],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pl1/1.png",
          large: "https://images.pokemontcg.io/pl1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pl1-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 6.75,
              mid: 8.38,
              high: 14.98,
              market: 6.28,
              directLow: null,
            },
            reverseHolofoil: {
              low: 1.93,
              mid: 14,
              high: 14.99,
              market: 2.16,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ecard2-H1",
        name: "Ampharos",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "100",
        types: ["Lightning"],
        evolvesFrom: "Flaaffy",
        attacks: [
          {
            name: "Thundershock",
            cost: ["Lightning"],
            convertedEnergyCost: 1,
            damage: "20",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
          },
          {
            name: "Reflect Energy",
            cost: ["Lightning", "Lightning", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50",
            text:
              "If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "ecard2",
          name: "Aquapolis",
          series: "E-Card",
          printedTotal: 186,
          total: 186,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "AQ",
          releaseDate: "2003/01/15",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/ecard2/symbol.png",
            logo: "https://images.pokemontcg.io/ecard2/logo.png",
          },
        },
        number: "H1",
        artist: "Shin-ichi Yoshida",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [181],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ecard2/H1.png",
          large: "https://images.pokemontcg.io/ecard2/H1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ecard2-H1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 140,
              mid: 141.45,
              high: 142.49,
              market: 141.91,
              directLow: null,
            },
          },
        },
      },
      {
        id: "dp3-1",
        name: "Ampharos",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "52",
        hp: "130",
        types: ["Lightning"],
        evolvesFrom: "Flaaffy",
        abilities: [
          {
            name: "Jamming",
            text:
              "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Cluster Bolt",
            cost: ["Lightning", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "70",
            text:
              "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "+30",
          },
        ],
        resistances: [
          {
            type: "Metal",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "dp3",
          name: "Secret Wonders",
          series: "Diamond & Pearl",
          printedTotal: 132,
          total: 132,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "SW",
          releaseDate: "2007/11/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/dp3/symbol.png",
            logo: "https://images.pokemontcg.io/dp3/logo.png",
          },
        },
        number: "1",
        artist: "Kouki Saitou",
        rarity: "Rare Holo",
        flavorText:
          "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
        nationalPokedexNumbers: [181],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/dp3/1.png",
          large: "https://images.pokemontcg.io/dp3/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/dp3-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 4,
              mid: 8.2,
              high: 12.39,
              market: 5.96,
              directLow: null,
            },
            reverseHolofoil: {
              low: 7.5,
              mid: 7.98,
              high: 7.99,
              market: 5.46,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex7-2",
        name: "Dark Ampharos",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "120",
        types: ["Lightning", "Darkness"],
        evolvesFrom: "Dark Flaaffy",
        rules: ["This Pokémon is both Lightning Darkness type."],
        abilities: [
          {
            name: "Darkest Impulse",
            text:
              "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Ram",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30",
            text: "",
          },
          {
            name: "Shock Bolt",
            cost: ["Lightning", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "70",
            text: "Discard all Lightning Energy attached to Dark Ampharos.",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "ex7",
          name: "Team Rocket Returns",
          series: "EX",
          printedTotal: 109,
          total: 109,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "TRR",
          releaseDate: "2004/11/01",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex7/symbol.png",
            logo: "https://images.pokemontcg.io/ex7/logo.png",
          },
        },
        number: "2",
        artist: "Emi Miwa",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [181],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex7/2.png",
          large: "https://images.pokemontcg.io/ex7/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex7-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 41.99,
              mid: 45,
              high: 100,
              market: 67.95,
              directLow: null,
            },
            reverseHolofoil: {
              low: 52.99,
              mid: 55.19,
              high: 67.95,
              market: 67.95,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pop7-1",
        name: "Ampharos",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "52",
        hp: "130",
        types: ["Lightning"],
        evolvesFrom: "Flaaffy",
        abilities: [
          {
            name: "Jamming",
            text:
              "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Cluster Bolt",
            cost: ["Lightning", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "70",
            text:
              "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        weaknesses: [
          {
            type: "Fighting",
            value: "+30",
          },
        ],
        resistances: [
          {
            type: "Metal",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "pop7",
          name: "POP Series 7",
          series: "POP",
          printedTotal: 17,
          total: 17,
          legalities: {
            unlimited: "Legal",
          },
          releaseDate: "2008/03/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/pop7/symbol.png",
            logo: "https://images.pokemontcg.io/pop7/logo.png",
          },
        },
        number: "1",
        artist: "Kouki Saitou",
        rarity: "Rare",
        flavorText:
          "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
        nationalPokedexNumbers: [181],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pop7/1.png",
          large: "https://images.pokemontcg.io/pop7/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pop7-1",
          updatedAt: "2021/04/10",
          prices: {
            normal: {
              low: 5.25,
              mid: 5.58,
              high: 10.39,
              market: 1.65,
              directLow: null,
            },
            holofoil: {
              low: 6.5,
              mid: 7.38,
              high: 8.68,
              market: 5.2,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 9,
    name: "Metal",
    items: [
      {
        id: "hgss4-1",
        name: "Aggron",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "140",
        types: ["Metal"],
        evolvesFrom: "Lairon",
        attacks: [
          {
            name: "Second Strike",
            cost: ["Metal", "Metal", "Colorless"],
            convertedEnergyCost: 3,
            damage: "40",
            text:
              "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage.",
          },
          {
            name: "Guard Claw",
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "60",
            text:
              "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance).",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Psychic",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 4,
        set: {
          id: "hgss4",
          name: "HS—Triumphant",
          series: "HeartGold & SoulSilver",
          printedTotal: 102,
          total: 102,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "TM",
          releaseDate: "2010/11/03",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/hgss4/symbol.png",
            logo: "https://images.pokemontcg.io/hgss4/logo.png",
          },
        },
        number: "1",
        artist: "Kagemaru Himeno",
        rarity: "Rare Holo",
        flavorText:
          "You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.",
        nationalPokedexNumbers: [306],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/hgss4/1.png",
          large: "https://images.pokemontcg.io/hgss4/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/hgss4-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 2.99,
              mid: 3.99,
              high: 5.71,
              market: 1.74,
              directLow: null,
            },
            reverseHolofoil: {
              low: 1.99,
              mid: 4.6,
              high: 168.9,
              market: 2.36,
              directLow: 2.39,
            },
          },
        },
      },
      {
        id: "ex11-1",
        name: "Beedrill δ",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "90",
        types: ["Grass", "Metal"],
        evolvesFrom: "Kakuna",
        rules: ["This Pokémon is both Grass Metal type."],
        abilities: [
          {
            name: "Final Sting",
            text:
              "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending Pokémon. That Pokémon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
            type: "Poké-Power",
          },
        ],
        attacks: [
          {
            name: "Super Slash",
            cost: ["Grass", "Metal", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50+",
            text:
              "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        set: {
          id: "ex11",
          name: "Delta Species",
          series: "EX",
          printedTotal: 113,
          total: 114,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "DS",
          releaseDate: "2005/10/31",
          updatedAt: "2020/05/01 16:06:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex11/symbol.png",
            logo: "https://images.pokemontcg.io/ex11/logo.png",
          },
        },
        number: "1",
        artist: "Masakazu Fukuda",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [15],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex11/1.png",
          large: "https://images.pokemontcg.io/ex11/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex11-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 6.72,
              mid: 8.89,
              high: 19.99,
              market: 10.82,
              directLow: null,
            },
            reverseHolofoil: {
              low: 79.99,
              mid: 94.99,
              high: 109.99,
              market: 15.38,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pop6-1",
        name: "Bastiodon",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "51",
        hp: "130",
        types: ["Metal"],
        evolvesFrom: "Shieldon",
        abilities: [
          {
            name: "Protective Wall",
            text:
              "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Anger Revenge",
            cost: ["Metal", "Metal", "Colorless"],
            convertedEnergyCost: 3,
            damage: "60",
            text:
              "If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "+40",
          },
        ],
        resistances: [
          {
            type: "Psychic",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "pop6",
          name: "POP Series 6",
          series: "POP",
          printedTotal: 17,
          total: 17,
          legalities: {
            unlimited: "Legal",
          },
          releaseDate: "2007/09/01",
          updatedAt: "2020/05/01 16:06:00",
          images: {
            symbol: "https://images.pokemontcg.io/pop6/symbol.png",
            logo: "https://images.pokemontcg.io/pop6/logo.png",
          },
        },
        number: "1",
        artist: "Kazuyuki Kano",
        rarity: "Rare",
        flavorText:
          "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.",
        nationalPokedexNumbers: [411],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pop6/1.png",
          large: "https://images.pokemontcg.io/pop6/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pop6-1",
          updatedAt: "2021/04/10",
          prices: {
            normal: {
              low: 0.7,
              mid: 1.71,
              high: 3.5,
              market: 0.7,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex11-2",
        name: "Crobat δ",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "90",
        types: ["Grass", "Metal"],
        evolvesFrom: "Golbat",
        rules: ["This Pokémon is both Grass Metal type."],
        attacks: [
          {
            name: "Radar Jam",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30",
            text:
              "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
          },
          {
            name: "Target Attack",
            cost: ["Grass", "Metal", "Colorless"],
            convertedEnergyCost: 3,
            damage: "",
            text:
              "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. If that Pokémon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        weaknesses: [
          {
            type: "Psychic",
            value: "×2",
          },
        ],
        set: {
          id: "ex11",
          name: "Delta Species",
          series: "EX",
          printedTotal: 113,
          total: 114,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "DS",
          releaseDate: "2005/10/31",
          updatedAt: "2020/05/01 16:06:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex11/symbol.png",
            logo: "https://images.pokemontcg.io/ex11/logo.png",
          },
        },
        number: "2",
        artist: "Ryo Ueda",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [169],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex11/2.png",
          large: "https://images.pokemontcg.io/ex11/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex11-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 5.5,
              mid: 8.96,
              high: 14.99,
              market: 4.24,
              directLow: null,
            },
            reverseHolofoil: {
              low: 6.49,
              mid: 11.07,
              high: 16.95,
              market: 6.16,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex12-2",
        name: "Aggron",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        hp: "110",
        types: ["Metal"],
        evolvesFrom: "Lairon",
        attacks: [
          {
            name: "Heavy Blow",
            cost: ["Fighting", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "70-",
            text:
              "Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead.",
          },
          {
            name: "Bound Crush",
            cost: ["Fighting", "Metal", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "",
            text:
              "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Aggron can't use Bound Crush.",
          },
        ],
        weaknesses: [
          {
            type: "Fire",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Grass",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 4,
        set: {
          id: "ex12",
          name: "Legend Maker",
          series: "EX",
          printedTotal: 92,
          total: 93,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "LM",
          releaseDate: "2006/02/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex12/symbol.png",
            logo: "https://images.pokemontcg.io/ex12/logo.png",
          },
        },
        number: "2",
        artist: "Hisao Nakamura",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [306],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex12/2.png",
          large: "https://images.pokemontcg.io/ex12/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex12-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 15,
              mid: 16.51,
              high: 19.94,
              market: 10.77,
              directLow: null,
            },
            reverseHolofoil: {
              low: 10.42,
              mid: 12.29,
              high: 14.98,
              market: 6.47,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 10,
    name: "Psychic",
    items: [
      {
        id: "base4-1",
        name: "Alakazam",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "42",
        hp: "80",
        types: ["Psychic"],
        evolvesFrom: "Kadabra",
        abilities: [
          {
            name: "Damage Swap",
            text:
              "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
            type: "Pokémon Power",
          },
        ],
        attacks: [
          {
            name: "Confuse Ray",
            cost: ["Psychic", "Psychic", "Psychic"],
            convertedEnergyCost: 3,
            damage: "30",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Confused.",
          },
        ],
        weaknesses: [
          {
            type: "Psychic",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "base4",
          name: "Base Set 2",
          series: "Base",
          printedTotal: 130,
          total: 130,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "B2",
          releaseDate: "2000/02/24",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/base4/symbol.png",
            logo: "https://images.pokemontcg.io/base4/logo.png",
          },
        },
        number: "1",
        artist: "Ken Sugimori",
        rarity: "Rare Holo",
        flavorText:
          "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
        nationalPokedexNumbers: [65],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/base4/1.png",
          large: "https://images.pokemontcg.io/base4/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/base4-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 18,
              mid: 32.49,
              high: 159.99,
              market: 28.57,
              directLow: null,
            },
          },
        },
      },
      {
        id: "ex14-1",
        name: "Banette",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "70",
        types: ["Psychic"],
        evolvesFrom: "Shuppet",
        abilities: [
          {
            name: "Safeguard",
            text:
              "Prevent all effects of attacks, including damage, done to Banette by your opponent's Pokémon-ex.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Night Murmurs",
            cost: ["Psychic", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30",
            text:
              "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
          },
        ],
        weaknesses: [
          {
            type: "Darkness",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Fighting",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "ex14",
          name: "Crystal Guardians",
          series: "EX",
          printedTotal: 100,
          total: 100,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "CG",
          releaseDate: "2006/08/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex14/symbol.png",
            logo: "https://images.pokemontcg.io/ex14/logo.png",
          },
        },
        number: "1",
        artist: "Kyoko Umemoto",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [354],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex14/1.png",
          large: "https://images.pokemontcg.io/ex14/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex14-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 1.75,
              mid: 3.22,
              high: 11.69,
              market: 2.02,
              directLow: null,
            },
            reverseHolofoil: {
              low: 1.99,
              mid: 3.43,
              high: 19.99,
              market: 4.12,
              directLow: null,
            },
          },
        },
      },
      {
        id: "si1-1",
        name: "Mew",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "30",
        types: ["Psychic"],
        attacks: [
          {
            name: "Rainbow Wave",
            cost: ["Psychic"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "Choose a type of Energy other than Colorless attached to Mew. This attack does 20 damage to each of your opponent's Pokémon of that type (including Benched Pokémon). Don't apply Weakness and Resistance.",
          },
        ],
        weaknesses: [
          {
            type: "Psychic",
            value: "×2",
          },
        ],
        set: {
          id: "si1",
          name: "Southern Islands",
          series: "Other",
          printedTotal: 18,
          total: 18,
          legalities: {
            unlimited: "Legal",
          },
          releaseDate: "2001/07/31",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/si1/symbol.png",
            logo: "https://images.pokemontcg.io/si1/logo.png",
          },
        },
        number: "1",
        artist: "Keiko Fukuyama",
        flavorText:
          "This Pokémon's body is covered by fine hairs that can be seen only under a microscope.",
        nationalPokedexNumbers: [151],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/si1/1.png",
          large: "https://images.pokemontcg.io/si1/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/si1-1",
          updatedAt: "2021/04/10",
          prices: {
            reverseHolofoil: {
              low: 94.99,
              mid: 99.99,
              high: 199.99,
              market: 129.54,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pl3-3",
        name: "Drifblim FB",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        level: "50",
        hp: "80",
        types: ["Psychic"],
        abilities: [
          {
            name: "Pump Up",
            text:
              "If your opponent has 3 or less Prize cards left, Drifblim FB gets +40 HP.",
            type: "Poké-Body",
          },
        ],
        attacks: [
          {
            name: "Shadow Ball",
            cost: ["Psychic", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "",
            text:
              "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. Apply Weakness and Resistance.",
          },
        ],
        weaknesses: [
          {
            type: "Darkness",
            value: "×2",
          },
        ],
        resistances: [
          {
            type: "Colorless",
            value: "-20",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "pl3",
          name: "Supreme Victors",
          series: "Platinum",
          printedTotal: 147,
          total: 150,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "SV",
          releaseDate: "2009/08/19",
          updatedAt: "2018/03/07 22:40:00",
          images: {
            symbol: "https://images.pokemontcg.io/pl3/symbol.png",
            logo: "https://images.pokemontcg.io/pl3/logo.png",
          },
        },
        number: "3",
        artist: "Lee HyunJung",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [426],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pl3/3.png",
          large: "https://images.pokemontcg.io/pl3/3_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pl3-3",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 1.5,
              mid: 4.98,
              high: 10,
              market: 1.99,
              directLow: null,
            },
            reverseHolofoil: {
              low: 1,
              mid: 1,
              high: 1.22,
              market: 1.41,
              directLow: null,
            },
          },
        },
      },
      {
        id: "hgss4-3",
        name: "Celebi",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "70",
        types: ["Psychic"],
        attacks: [
          {
            name: "Future Sight",
            cost: ["Psychic"],
            convertedEnergyCost: 1,
            damage: "",
            text:
              "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
          },
          {
            name: "Leaf Bind",
            cost: ["Grass", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
          },
        ],
        weaknesses: [
          {
            type: "Psychic",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "hgss4",
          name: "HS—Triumphant",
          series: "HeartGold & SoulSilver",
          printedTotal: 102,
          total: 102,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "TM",
          releaseDate: "2010/11/03",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/hgss4/symbol.png",
            logo: "https://images.pokemontcg.io/hgss4/logo.png",
          },
        },
        number: "3",
        artist: "Shin Nagasawa",
        rarity: "Rare Holo",
        flavorText:
          "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
        nationalPokedexNumbers: [251],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/hgss4/3.png",
          large: "https://images.pokemontcg.io/hgss4/3_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/hgss4-3",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 6,
              mid: 15.99,
              high: 18.7,
              market: 5.34,
              directLow: null,
            },
            reverseHolofoil: {
              low: 1.74,
              mid: 2.65,
              high: 3.99,
              market: 3.32,
              directLow: 3.03,
            },
          },
        },
      },
      {
        id: "ex9-2",
        name: "Deoxys",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        hp: "70",
        types: ["Psychic"],
        abilities: [
          {
            name: "Form Change",
            text:
              "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
            type: "Poké-Power",
          },
        ],
        attacks: [
          {
            name: "Swift",
            cost: ["Colorless", "Colorless"],
            convertedEnergyCost: 2,
            damage: "30",
            text:
              "This attack's damage isn't affected by Weakness, Resistance, Poké-Power, Poké-Bodies, or any other effects on the Defending Pokémon.",
          },
        ],
        weaknesses: [
          {
            type: "Psychic",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "ex9",
          name: "Emerald",
          series: "EX",
          printedTotal: 106,
          total: 106,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "EM",
          releaseDate: "2005/05/01",
          updatedAt: "2020/02/08 09:00:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex9/symbol.png",
            logo: "https://images.pokemontcg.io/ex9/logo.png",
          },
        },
        number: "2",
        artist: "Hironobu Yoshida",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [386],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex9/2.png",
          large: "https://images.pokemontcg.io/ex9/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex9-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 14.99,
              mid: 25,
              high: 37,
              market: 11.33,
              directLow: null,
            },
            reverseHolofoil: {
              low: 15,
              mid: 21.68,
              high: 40,
              market: 22.93,
              directLow: null,
            },
          },
        },
      },
    ],
  },
  {
    id: 11,
    name: "Water",
    items: [
      {
        id: "ex7-1",
        name: "Azumarill",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "80",
        types: ["Water"],
        evolvesFrom: "Marill",
        abilities: [
          {
            name: "Froth",
            text:
              "Once during your turn, when you play Azumarill from your hand to evolve 1 of your Active Pokémon, you may use this power. Each Defending Pokémon is now Paralyzed.",
            type: "Poké-Power",
          },
        ],
        attacks: [
          {
            name: "Water Punch",
            cost: ["Water", "Colorless"],
            convertedEnergyCost: 2,
            damage: "20+",
            text:
              "Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads.",
          },
        ],
        weaknesses: [
          {
            type: "Lightning",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless"],
        convertedRetreatCost: 1,
        set: {
          id: "ex7",
          name: "Team Rocket Returns",
          series: "EX",
          printedTotal: 109,
          total: 109,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "TRR",
          releaseDate: "2004/11/01",
          updatedAt: "2019/01/28 16:44:00",
          images: {
            symbol: "https://images.pokemontcg.io/ex7/symbol.png",
            logo: "https://images.pokemontcg.io/ex7/logo.png",
          },
        },
        number: "1",
        artist: "Sumiyoshi Kizuki",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [184],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/ex7/1.png",
          large: "https://images.pokemontcg.io/ex7/1_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/ex7-1",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 8,
              mid: 24,
              high: 40,
              market: 9.49,
              directLow: null,
            },
            reverseHolofoil: {
              low: 7.19,
              mid: 8.99,
              high: 60,
              market: 8.88,
              directLow: null,
            },
          },
        },
      },
      {
        id: "pl1-2",
        name: "Blastoise",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "60",
        hp: "130",
        types: ["Water"],
        evolvesFrom: "Wartortle",
        abilities: [
          {
            name: "Dig Well",
            text:
              "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose as many Water Energy cards as you like, and attach them to your Pokémon in any way you like. Discard the other cards. This power can't be used if Blastoise is affected by a Special Condition.",
            type: "Poké-Power",
          },
        ],
        attacks: [
          {
            name: "Aqua Press",
            cost: ["Water", "Colorless"],
            convertedEnergyCost: 2,
            damage: "20+",
            text:
              "Does 20 damage plus 10 more damage for each Energy attached to all Pokémon (both yours and your opponent's).",
          },
          {
            name: "Double Launcher",
            cost: ["Water", "Water", "Colorless", "Colorless"],
            convertedEnergyCost: 4,
            damage: "",
            text:
              "Discard 2 Energy attached to Blastoise. Choose 2 of your opponent's Benched Pokémon. This attack does 60 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Blastoise can't use Double Launcher during your next turn.",
          },
        ],
        weaknesses: [
          {
            type: "Lightning",
            value: "+30",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "pl1",
          name: "Platinum",
          series: "Platinum",
          printedTotal: 127,
          total: 130,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "PL",
          releaseDate: "2009/02/11",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/pl1/symbol.png",
            logo: "https://images.pokemontcg.io/pl1/logo.png",
          },
        },
        number: "2",
        artist: "Kagemaru Himeno",
        rarity: "Rare Holo",
        nationalPokedexNumbers: [9],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/pl1/2.png",
          large: "https://images.pokemontcg.io/pl1/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/pl1-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 11.98,
              mid: 12.94,
              high: 19.99,
              market: 19.2,
              directLow: null,
            },
            reverseHolofoil: {
              low: 39.98,
              mid: 42.99,
              high: 49.98,
              market: 6.79,
              directLow: null,
            },
          },
        },
      },
      {
        id: "base4-2",
        name: "Blastoise",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "52",
        hp: "100",
        types: ["Water"],
        evolvesFrom: "Wartortle",
        abilities: [
          {
            name: "Rain Dance",
            text:
              "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
            type: "Pokémon Power",
          },
        ],
        attacks: [
          {
            name: "Hydro Pump",
            cost: ["Water", "Water", "Water"],
            convertedEnergyCost: 3,
            damage: "40+",
            text:
              "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
          },
        ],
        weaknesses: [
          {
            type: "Lightning",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless", "Colorless"],
        convertedRetreatCost: 3,
        set: {
          id: "base4",
          name: "Base Set 2",
          series: "Base",
          printedTotal: 130,
          total: 130,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "B2",
          releaseDate: "2000/02/24",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/base4/symbol.png",
            logo: "https://images.pokemontcg.io/base4/logo.png",
          },
        },
        number: "2",
        artist: "Ken Sugimori",
        rarity: "Rare Holo",
        flavorText:
          "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
        nationalPokedexNumbers: [9],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/base4/2.png",
          large: "https://images.pokemontcg.io/base4/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/base4-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 70,
              mid: 105,
              high: 224.99,
              market: 141.91,
              directLow: null,
            },
          },
        },
      },
      {
        id: "dp3-2",
        name: "Blastoise",
        supertype: "Pokémon",
        subtypes: ["Stage 2"],
        level: "52",
        hp: "120",
        types: ["Water"],
        evolvesFrom: "Wartortle",
        abilities: [
          {
            name: "Waterlog",
            text:
              "Once during your turn (before your attack), you may attach as many basic Water Energy cards from your hand to any of your Pokémon in any way you like. If you do, your turn ends. This power can't be used if Blastoise is affected by a Special Condition.",
            type: "Poké-Power",
          },
        ],
        attacks: [
          {
            name: "Hydro Pump",
            cost: ["Water", "Water", "Colorless"],
            convertedEnergyCost: 3,
            damage: "50+",
            text:
              "Does 50 damage plus 20 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
          },
        ],
        weaknesses: [
          {
            type: "Lightning",
            value: "+30",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "dp3",
          name: "Secret Wonders",
          series: "Diamond & Pearl",
          printedTotal: 132,
          total: 132,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "SW",
          releaseDate: "2007/11/01",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/dp3/symbol.png",
            logo: "https://images.pokemontcg.io/dp3/logo.png",
          },
        },
        number: "2",
        artist: "Daisuke Ito",
        rarity: "Rare Holo",
        flavorText:
          "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
        nationalPokedexNumbers: [9],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/dp3/2.png",
          large: "https://images.pokemontcg.io/dp3/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/dp3-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 27.37,
              mid: 49.66,
              high: 100,
              market: 23.26,
              directLow: null,
            },
            reverseHolofoil: {
              low: 15,
              mid: 24.63,
              high: 47.66,
              market: 19.3,
              directLow: null,
            },
          },
        },
      },
      {
        id: "base3-2",
        name: "Articuno",
        supertype: "Pokémon",
        subtypes: ["Basic"],
        level: "35",
        hp: "70",
        types: ["Water"],
        attacks: [
          {
            name: "Freeze Dry",
            cost: ["Water", "Water", "Water"],
            convertedEnergyCost: 3,
            damage: "30",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
          },
          {
            name: "Blizzard",
            cost: ["Water", "Water", "Water", "Water"],
            convertedEnergyCost: 4,
            damage: "50",
            text:
              "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          },
        ],
        resistances: [
          {
            type: "Fighting",
            value: "-30",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "base3",
          name: "Fossil",
          series: "Base",
          printedTotal: 62,
          total: 62,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "FO",
          releaseDate: "1999/10/10",
          updatedAt: "2020/08/14 09:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/base3/symbol.png",
            logo: "https://images.pokemontcg.io/base3/logo.png",
          },
        },
        number: "2",
        artist: "Mitsuhiro Arita",
        rarity: "Rare Holo",
        flavorText:
          "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
        nationalPokedexNumbers: [144],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/base3/2.png",
          large: "https://images.pokemontcg.io/base3/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/base3-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 30,
              mid: 48.99,
              high: 90,
              market: 45.75,
              directLow: 59.99,
            },
            "1stEditionHolofoil": {
              low: 91.89,
              mid: 120,
              high: 174.5,
              market: 210.48,
              directLow: null,
            },
          },
        },
      },
      {
        id: "hgss1-2",
        name: "Azumarill",
        supertype: "Pokémon",
        subtypes: ["Stage 1"],
        hp: "90",
        types: ["Water"],
        evolvesFrom: "Marill",
        attacks: [
          {
            name: "Waterfall",
            cost: ["Water", "Water"],
            convertedEnergyCost: 2,
            damage: "40",
            text: "",
          },
          {
            name: "Bubblebeam",
            cost: ["Water", "Colorless", "Colorless"],
            convertedEnergyCost: 3,
            damage: "60",
            text:
              "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
          },
        ],
        weaknesses: [
          {
            type: "Lightning",
            value: "×2",
          },
        ],
        retreatCost: ["Colorless", "Colorless"],
        convertedRetreatCost: 2,
        set: {
          id: "hgss1",
          name: "HeartGold & SoulSilver",
          series: "HeartGold & SoulSilver",
          printedTotal: 123,
          total: 123,
          legalities: {
            unlimited: "Legal",
          },
          ptcgoCode: "HS",
          releaseDate: "2010/02/10",
          updatedAt: "2018/03/04 10:35:00",
          images: {
            symbol: "https://images.pokemontcg.io/hgss1/symbol.png",
            logo: "https://images.pokemontcg.io/hgss1/logo.png",
          },
        },
        number: "2",
        artist: "Kouki Saitou",
        rarity: "Rare Holo",
        flavorText:
          "When it plays in water, it rolls up its elongated ears to prevent their insides from getting wet.",
        nationalPokedexNumbers: [184],
        legalities: {
          unlimited: "Legal",
        },
        images: {
          small: "https://images.pokemontcg.io/hgss1/2.png",
          large: "https://images.pokemontcg.io/hgss1/2_hires.png",
        },
        tcgplayer: {
          url: "https://prices.pokemontcg.io/tcgplayer/hgss1-2",
          updatedAt: "2021/04/10",
          prices: {
            holofoil: {
              low: 0.5,
              mid: 0.76,
              high: 7,
              market: 2.06,
              directLow: null,
            },
            reverseHolofoil: {
              low: 1.33,
              mid: 1.94,
              high: 2.75,
              market: 1.22,
              directLow: null,
            },
          },
        },
      },
    ],
  },
];

export default POKEMON_DATA;
