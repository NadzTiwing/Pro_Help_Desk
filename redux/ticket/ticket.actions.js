import actionType from "./ticket.type";

export const createTicket = (datetime, title, issue, status) => ({
    type: actionType.CREATE_TICKET,
    datetime, title, issue, status  
});

export const createTicketSuccess = (data) => ({
    type: actionType.CREATE_TICKET_SUCCESS,
    data
});

export const getAllTickets = () => ({
    type: actionType.GET_ALL_TICKETS
});

export const getAllTicketsSuccess = (data) => ({
    type: actionType.GET_ALL_TICKETS_SUCCESS,
    data
});

export const getOpenTickets = () => ({
    type: actionType.GET_OPEN_TICKETS
});

export const getOpenTicketsSuccess = (data) => ({
    type: actionType.GET_OPEN_TICKETS_SUCCESS,
    data
});

export const getMyTickets = () => ({
    type: actionType.GET_MY_TICKETS
});

export const getMyTicketsSuccess = (data) => ({
    type: actionType.GET_MY_TICKETS_SUCCESS,
    data
});

export const viewTicket = (ticketId) => ({
    type: actionType.VIEW_TICKET,
    ticketId
});

export const viewTicketSuccess = (data) => ({
    type: actionType.VIEW_TICKET_SUCCESS,
    data
});

export const assignToMe = (ticketId) => ({
    type: actionType.ASSIGN_TO_ME,
    ticketId
});

export const assignToMeSuccess = (data) => ({
    type: actionType.ASSIGN_TO_ME,
    data
});

export const assignToSomeone = (ticketId, userId) => ({
    type: actionType.ASSIGN_TO_SOMEONE,
    ticketId, userId
});

export const assignToSomeoneSuccess = (data) => ({
    type: actionType.ASSIGN_TO_SOMEONE_SUCCESS,
    data
});

export const reassignTicket = (ticketId, userId) => ({
    type: actionType.REASSIGN_TICKET,
    ticketId, userId
});

export const reassignTicketSuccess = (data) => ({
    type: actionType.REASSIGN_TICKET_SUCCESS,
    data
});

export const setTicketStatus = (ticketId, status) => ({
    type: actionType.SET_TICKET_STATUS,
    ticketId, status
});

export const setTicketStatusSuccess = (data) => ({
    type: actionType.SET_TICKET_STATUS_SUCCESS,
    data
});

export const search = (keyword) => ({
    type: actionType.SEARCH,
    keyword
});

export const searchSuccess = (data) => ({
    type: actionType.SEARCH_SUCCESS,
    data
});

export const actionFail = (error) => ({
    type: actionType.ACTION_FAIL,
    error
});