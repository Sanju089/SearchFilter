const payload = {
  data: [
    {
      link: "/game/slot-tiki-island/play",
      imageUrl:
        "https://cdn.ppc2.pgt01.gamesysgames.com/ucn/jackpotjoy/api/content/gametiles/tiki-island/scale-1/tiki-island-tile-25-972.jpg",
      gameTitle: "Tiki Island",
      type: "slot"
    },
    {
      link: "/game/slot-double-bubble-progressive/play",
      imageUrl:
        "https://cdn.ppc2.pgt01.gamesysgames.com/ucn/jackpotjoy/api/content/gametiles/double-bubble-jackpot/scale-1/double-bubble-jackpot-tile-25-972.jpg",
      gameTitle: "Double Bubble",
      type: "slot"
    },
    {
      link: "/game/bingo-sapphire/play",
      imageUrl:
        "https://cdn.ppc2.pgt01.gamesysgames.com/ucn/jackpotjoy/api/content/gametiles/bingo-tile-sapphire/scale-1/sapphire-bingo-tile-25-972.jpg",
      gameTitle: "Sapphire",
      type: "bingo"
    },
    {
      link: "/game/secrets-of-the-phoenix/play",
      imageUrl:
        "https://cdn.ppc2.pgt01.gamesysgames.com/ucn/virgingames/api/content/gametiles/secrets-of-the-phoenix/scale-1/secrets-of-the-phoenix-tile-25-972.jpg",
      gameTitle: "Secrets of the Phoenix",
      type: "slot"
    },
    {
      link: "/game/casino-blackjack-singlehand/play",
      imageUrl:
        "https://cdn.ppc2.pgt01.gamesysgames.com/ucn/virgingames/api/content/gametiles/single-deck-blackjack/scale-1/single-deck-blackjack-tile-25-972.jpg",
      gameTitle: "Single hand BlackJack",
      type: "casino"
    }
  ]
};

export const fetch = () => Promise.resolve(payload);

export const fetchReject = () => Promise.reject("This is some error");
