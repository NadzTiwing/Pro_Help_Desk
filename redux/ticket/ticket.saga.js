import { takeLatest, call, put } from "redux-saga/effects";
import actionType from "./ticket.type";
import {
    createTicketSuccess,
    getAllTicketsSuccess,
    viewAgentsSuccess,
    assignTicketSuccess,
    setTicketStatusSuccess,
    actionFail
} from "./ticket.actions";
import { createTicketAPI, getTicketsAPI, assignTicketAPI, setTicketStatusAPI } from "../../api/ticket";
import { getAgentsAPI } from "./../../api/users";

function* createTicketSaga({datetime, title, issue, status, assignTo}) {
    try {
        const response = yield call(createTicketAPI, datetime, title, issue, status, assignTo); 
        yield put(createTicketSuccess(response));
    } catch(error) {
        yield put(actionFail(error));
    }
}

function* getTicketsSaga() {
    try {
        const tickets = yield call(getTicketsAPI); 
        yield put(getAllTicketsSuccess(tickets));
    } catch(error) {
        yield put(actionFail(error));
    }
}

function* assignTicketSaga({ticketId, agentId}) {
    try {
        const response = yield call(assignTicketAPI, ticketId, agentId); 
        yield put(assignTicketSuccess(response));
    } catch(error) {
        yield put(actionFail(error));
    }
}

function* setTicketStatusSaga({ticketId, status}) {
    try {
        const response = yield call(setTicketStatusAPI, ticketId, status); 
        yield put(setTicketStatusSuccess(response));
    } catch(error) {
        yield put(actionFail(error));
    }
}

function* getAgentsSaga() {
    try {
        const agents = yield call(getAgentsAPI); 
        yield put(viewAgentsSuccess(agents));
    } catch(error) {
        yield put(actionFail(error));
    }
}

export default function* watchTickets() {
    yield takeLatest(actionType.CREATE_TICKET, createTicketSaga);
    yield takeLatest(actionType.GET_ALL_TICKETS, getTicketsSaga);
    yield takeLatest(actionType.ASSIGN_TICKET, assignTicketSaga);
    yield takeLatest(actionType.SET_TICKET_STATUS, setTicketStatusSaga);
    yield takeLatest(actionType.VIEW_AGENTS, getAgentsSaga);
}