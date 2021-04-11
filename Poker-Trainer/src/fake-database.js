const database = [
  {
    title: "Sample Scenario 1",
    context: "Your opponent went all in! Will you call his bluff? ",
    pot: 55,
    numOfOpponents: 5,
    dealer: 5,
    callType: "Correct",
    callText:
      "Your opponent went all in and you had a Royal Flush, the best possible hand. The only correct decision in this situation is to go all in!",
    foldType: "Wrong",
    foldText:
      "Your opponent went all in and you had a Royal Flush, the best possible hand. The only correct decision in this situation is to go all in!",
    raiseType: "Invalid",
    raiseText: "Your opponent went all in, you cannot raise you can only call.",
    cardsOnTable: {
      firstCard: "cover",
      secondCard: "kh",
      thirdCard: "8s",
      fourthCard: "ah",
      fifthCard: "3d",
      sixthCard: "qh",
    },

    userParams: {
      name: "You",
      cardOne: "jh",
      cardTwo: "th",
      chipsBet: 5,
      chipsAvailable: 55,
    },
    opponentOneParams: {
      name: "Kylie",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 33,
    },
    opponentTwoParams: {
      name: "Jack",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 35,
    },
    opponentThreeParams: {
      name: "Daniel",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 49,
    },
    opponentFourParams: {
      name: "Alex",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 42,
    },
    opponentFiveParams: {
      name: "Kevin",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 47,
    },
  },
  {
    title: "Going All In",
    context: "Your opponent went all in! Will you call his bluff? ",
    pot: 55,
    numOfOpponents: 5,
    dealer: 5,
    callType: "Correct",
    callText:
      "Your opponent went all in and you had a Royal Flush, the best possible hand. The only correct decision in this situation is to go all in!",
    foldType: "Wrong",
    foldText:
      "Your opponent went all in and you had a Royal Flush, the best possible hand. The only correct decision in this situation is to go all in!",
    raiseType: "Invalid",
    raiseText: "Your opponent went all in, you cannot raise you can only call.",
    cardsOnTable: {
      firstCard: "cover",
      secondCard: "kh",
      thirdCard: "8s",
      fourthCard: "ah",
      fifthCard: "3d",
      sixthCard: "qh",
    },

    userParams: {
      name: "You",
      cardOne: "jh",
      cardTwo: "th",
      chipsBet: 5,
      chipsAvailable: 55,
    },
    opponentOneParams: {
      name: "Kylie",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 33,
    },
    opponentTwoParams: {
      name: "Jack",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 35,
    },
    opponentThreeParams: {
      name: "Daniel",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 49,
    },
    opponentFourParams: {
      name: "Alex",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 42,
    },
    opponentFiveParams: {
      name: "Kevin",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 47,
    },
  },
];

export default database;