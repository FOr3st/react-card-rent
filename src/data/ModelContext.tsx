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
import { ApplicationState, Command } from "./types";
import { noop } from "./utils";

const emptyState = {
  isLoading: false,
  cardId: "",
  cardData: undefined,
  loadCard: noop,
  rentCard: noop,
};

/**
 * Model context is a data model and controller of the entire application.
 */
export const ModelContext = React.createContext<ApplicationState>(emptyState);

/**
 * Model context is used to share model data across different
 * components using React context flow. To provide model context to
 * children components ModelContextProvider is used.
 */
export const ModelContextProvider: FC = ({ children }) => {
  const [context, setContext] = useState<ApplicationState>(emptyState);
  const ref = useRef(context);

  const updateState = useCallback((newState: ApplicationState) => {
    ref.current = newState;
    setContext(newState);
  }, []);

  const wrapCommand = useMemo(
    () => (command: Command) => (args?: any) => {
      command(
        ref.current,
        (stateUpdates: Partial<ApplicationState>) => {
          updateState({ ...ref.current, ...stateUpdates });
        },
        args
      );
    },
    []
  );

  useEffect(() => {
    updateState({
      isLoading: false,
      cardId: CARD_ID,
      cardData: undefined,
      loadCard: wrapCommand(loadCardCommand),
      rentCard: wrapCommand(rentCardCommand),
    });
  }, []);

  if (context === emptyState) {
    return null;
  }

  return (
    <ModelContext.Provider value={context}>{children}</ModelContext.Provider>
  );
};
