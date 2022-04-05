import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CARD_ID } from "../constants";
import { loadCardCommand, rentCardCommand } from "./commands";
import { ApplicationModel, ApplicationState, Command } from "./types";
import { noop } from "./utils";

const emptyState = {
  isLoading: false,
  cardId: "",
  cardData: undefined,
};

const emptyCommands = {
  loadCard: noop,
  rentCard: noop,
};

/**
 * Model context is a data model and controller of the entire application.
 */
 export const ModelContext = React.createContext<ApplicationModel>({
  ...emptyState,
  ...emptyCommands,
});

/**
 * Model context is used to share model data across different
 * components using React context flow. To provide model context to
 * children components ModelContextProvider is used.
 */
 export const ModelContextProvider: FC = ({ children }) => {
  const [appState, setAppState] = useState<ApplicationState>(emptyState);
  const ref = useRef(appState);

  const updateAppState = useCallback((newState: ApplicationState) => {
    ref.current = newState;
    setAppState(newState);
  }, []);

  const wrapCommand = useMemo(
    () =>
      (command: Command) =>
      (...args: any) => {
        command.apply(undefined, [
          ref.current,
          (stateUpdates: Partial<ApplicationState>) => {
            updateAppState({ ...ref.current, ...stateUpdates });
          },
          ...args,
        ]);
      },
    []
  );

  const appCommands = useMemo(
    () => ({
      loadCard: wrapCommand(loadCardCommand),
      rentCard: wrapCommand(rentCardCommand),
    }),
    []
  );

  useEffect(() => {
    updateAppState({
      isLoading: false,
      cardId: CARD_ID,
      cardData: undefined,
    });
  }, []);

  if (appState === emptyState) {
    return null;
  }

  return (
    <ModelContext.Provider value={{ ...appState, ...appCommands }}>
      {children}
    </ModelContext.Provider>
  );
};