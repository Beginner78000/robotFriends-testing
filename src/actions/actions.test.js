import * as actions from "./actions";
import * as types from "./types/constants";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

// Create a fake store
export const mockStore = configureMockStore([thunkMiddleware]);

describe("actions", () => {
  it("should create an action to search", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("Fetch robots action PENDING", () => {
  it("should creat a Pending action on request Robots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    // On attend récupérer la 1ere action qu'on dispatch
    expect(action[0]).toEqual({ type: "REQUEST_ROBOTS_PENDING" });
  });
});
