import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BetButton, GameResult } from "./components";
import GlobalStyles from "./styles/globalStyles";
import InfoHeader from "./components/InfoHeader";
import BetControls from "./components/BetControls";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div>
        <InfoHeader />
        <GameResult />
        <div style={{ display: 'flex', justifyContent: "center" }}>
          <BetButton bet="rock" />
          <BetButton bet="paper" />
          <BetButton bet="scissors" />
        </div>
        <BetControls />
      </div>
    </Provider>
  );
};

export default App;
