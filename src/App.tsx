import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BetButton, GameResult } from "./components";
import GlobalStyles from "./styles/globalStyles";
import { InfoHeader, BetControls } from "./components";
import { BetButtonContainer } from "./styles/App.styles";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div>
        <InfoHeader />
        <GameResult />
        <BetButtonContainer>
          <BetButton bet="rock" />
          <BetButton bet="paper" />
          <BetButton bet="scissors" />
        </BetButtonContainer>
        <BetControls />
      </div>
    </Provider>
  );
};

export default App;
