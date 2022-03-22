import React, { FC, ReactNode } from "react";
import { CARD_ID } from "../constants";
import { loadCardCommand, rentCardCommand } from "./commands";
import { ApplicationState, Command } from "./types";
import { noop } from './utils';

/**
 * Model context is a data model and controller of the entire application.
 */
export const ModelContext = React.createContext<ApplicationState>({
  isLoading: false,
  cardId: '',
  cardData: undefined,
  loadCard: noop,
  rentCard: noop,
});

interface ModelContextProviderState {
  context: ApplicationState;
}

/**
 * Model context is used to share model data across different
 * components using React context flow. To provide model context to
 * children components ModelContextProvider is used.
 */
export class ModelContextProvider extends React.Component<
  {},
  ModelContextProviderState
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      context: {
        isLoading: false,
        cardId: CARD_ID,
        cardData: undefined,
        loadCard: this.wrapAction(loadCardCommand),
        rentCard: this.wrapAction(rentCardCommand),
      },
    };
  }

  private wrapAction = (action: Command) => (args?: any) => {
    action(this.state.context, (state: ApplicationState) => this.setState({ context: { ...state } }), args);
  }

  render() {
    const { children } = this.props;
    const { context } = this.state;

    return (
      <ModelContext.Provider value={context}>{children}</ModelContext.Provider>
    );
  }
}

/**
 * ModelContextConsumer used to consume model context. Component should reside
 * in ModelContextProvider hierarchy.
 */
export const ModelContextConsumer: FC<{
  children: (value: ApplicationState) => ReactNode;
}> = ({ children }) => {
  return <ModelContext.Consumer>{children}</ModelContext.Consumer>;
};
