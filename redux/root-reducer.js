import { combineReducers } from "redux";
import ticketReducer from "./ticket/ticket.reducer";

export default combineReducers({
    tickets: ticketReducer
});