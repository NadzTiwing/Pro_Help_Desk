import { all, fork } from "redux-saga/effects";
import watchTickets from "./ticket/ticket.saga";

export default function* rootSaga() {
    yield all([
        fork(watchTickets)
    ]);
}