import React, { createContext, useContext, useReducer } from "react";

export type FilterAction =
  | { type: "TOGGLE_BRAND"; payload: string }
  | { type: "TOGGLE_CATEGORY"; payload: string }
  | { type: "TOGGLE_PRICE_RANGE"; payload: string }
  | { type: "TOGGLE_YEAR"; payload: string }
  | { type: "TOGGLE_ORIGIN"; payload: string }
  | { type: "SET_SORT"; payload: string }
  | { type: "RESET_FILTERS" };

interface FilterState {
  selectedBrands: string[];
  selectedCategories: string[];
  selectedPriceRanges: string[];
  selectedYears: string[];
  selectedOrigins: string[];
  sortBy: string;
}

const initialFilterState: FilterState = {
  selectedBrands: [],
  selectedCategories: [],
  selectedPriceRanges: [],
  selectedYears: [],
  selectedOrigins: [],
  sortBy: "",
};

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  const toggleItem = (arr: string[], item: string) =>
    arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

  switch (action.type) {
    case "TOGGLE_BRAND":
      return {
        ...state,
        selectedBrands: toggleItem(state.selectedBrands, action.payload),
      };
    case "TOGGLE_CATEGORY":
      return {
        ...state,
        selectedCategories: toggleItem(
          state.selectedCategories,
          action.payload
        ),
      };
    case "TOGGLE_PRICE_RANGE":
      return {
        ...state,
        selectedPriceRanges: toggleItem(
          state.selectedPriceRanges,
          action.payload
        ),
      };
    case "TOGGLE_YEAR":
      return {
        ...state,
        selectedYears: toggleItem(state.selectedYears, action.payload),
      };
    case "TOGGLE_ORIGIN":
      return {
        ...state,
        selectedOrigins: toggleItem(state.selectedOrigins, action.payload),
      };
    case "SET_SORT":
      return { ...state, sortBy: action.payload };
    case "RESET_FILTERS":
      return initialFilterState;
    default:
      return state;
  }
}

// Tạo Context
const FilterContext = createContext<{
  state: FilterState;
  dispatch: React.Dispatch<FilterAction>;
}>({
  state: initialFilterState,
  dispatch: () => null,
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => useContext(FilterContext);
