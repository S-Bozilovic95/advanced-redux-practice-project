import API from "../api/api";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

// action creator za async funkcije u redux-u
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    await API.put("/cart.json", {
      items: cart.items,
      totalQuantity: cart.totalQuantity,
    });

    try {
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const response = await API.get("/cart.json");

    try {
      dispatch(
        cartActions.replaceCart({
          items: response.data.items || [],
          totalQuantity: response.data.totalQuantity,
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
