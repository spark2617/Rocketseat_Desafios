export function Reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'INCREMENT':
        return { quantCoffe: state.quantCoffe + 1 };
      case 'DECREMENT':
        if (state.quantCoffe >= 2) {
          return { quantCoffe: state.quantCoffe - 1 };
        }
        return state;
      default:
        return state;
    }
  }