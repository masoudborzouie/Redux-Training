const redux = require("redux");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

// console.log("First Redux exp");
const BUY_MOB = "BUY_MOB";
const BUY_TAB = "BUY_TAB";

function buyMob() {
  return {
    type: BUY_MOB,
    info: "First Action",
  };
}
function buyTab() {
  return {
    type: BUY_TAB,
    info: "Second Action",
  };
}
// const initialState = {
//   NumberOfMobs: 100,
//   NumberOfTabs: 50,
// };
const initialMobState = {
  numberOfMobs: 100,
};
const initialTabState = {
  numberOfTabs: 50,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_MOB:
//       return {
//         ...state,
//         NumberofMobs: state.NumberOfMobs - 1,
//       };
//     default:
//       return state;
//   }
// };
const MobReducer = (state = initialMobState, action) => {
  switch (action.type) {
    case BUY_MOB:
      return {
        ...state,
        numberOfMobs: state.numberOfMobs - 1,
      };
    default:
      return state;
  }
};
const TabReducer = (state = initialTabState, action) => {
  switch (action.type) {
    case BUY_TAB:
      return {
        ...state,
        numberOfTobs: state.numberOfTabs - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  mob: MobReducer,
  tab: TabReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger)); ///1
console.log("initial State is", store.getState()); ///2
const unSubscribe = store.subscribe(
  () => {}
  // console.log("Updated State is", store.getState())
); ///4
store.dispatch(buyMob()); ///3
store.dispatch(buyMob());
store.dispatch(buyMob());

store.dispatch(buyTab());
store.dispatch(buyTab());

unSubscribe();
