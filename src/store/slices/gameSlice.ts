import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Bet = "rock" | "paper" | "scissors";

interface GameState {
  balance: number;
  bets: Bet[];
  result: Bet | null;
  winner: Bet | null;
  won: number;
}

const initialState: GameState = {
  balance: 5000,
  bets: [],
  result: null,
  winner: null,
  won: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    placeBet(state, action: PayloadAction<Bet>) {
      if (state.result) return;

      const uniqueBets = [...new Set(state.bets)];
      if (
        (uniqueBets.length < 2 || uniqueBets.includes(action.payload)) &&
        state.balance >= 500
      ) {
        state.bets.push(action.payload);
        state.balance -= 500;
      }
    },
    clearBets(state) {
      state.bets = [];
      state.result = null;
      state.winner = null;
      state.won = 0;
    },
    setResult(state, action: PayloadAction<Bet>) {
      const result = action.payload;
      const previousBalance = state.balance;
      let winner: Bet;

      switch (result) {
        case "paper":
          winner = "scissors";
          break;
        case "rock":
          winner = "paper";
          break;
        case "scissors":
          winner = "rock";
          break;
      }

      const uniqueBets = [...new Set(state.bets)];
      const tiedBets = state.bets.filter((bet) => bet === result);
      const winnerBets = state.bets.filter((bet) => bet === winner);

      if (uniqueBets.includes(winner)) {
        const multiplier = uniqueBets.length === 1 ? 14 : 3;
        state.balance += 500 * winnerBets.length * multiplier;
      }

      if (uniqueBets.length === 1) {
        state.balance += 500 * tiedBets.length;
      }
      
      state.won = state.balance - previousBalance;
      state.result = result;
      state.winner = winner;
    },
  },
});

export const { placeBet, clearBets, setResult } = gameSlice.actions;
export default gameSlice.reducer;
