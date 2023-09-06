
interface State {
  count: number;
}

type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESTART" };

export function Reducer(state: State, action: Action): State {
    switch (action.type) {
      case "RESTART":
        return { count: state.count = 1 }
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        if (state.count >= 2) {
          return { count: state.count - 1 };
        }
        return state;
      default:
        return state;
    }
  }