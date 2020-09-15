import { createReducer, on, createAction } from "@ngrx/store";

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction("[Product] Toggle product code"), (state) => {
    console.log("Original state " + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
