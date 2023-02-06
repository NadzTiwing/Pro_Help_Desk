import actionType from "./ticket.type";

export const createTicket = (datetime, title, issue, status, assignTo) => ({
    type: actionType.CREATE_TICKET,
    datetime, title, issue, status, assignTo
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

export const getMyTickets = () => ({
    type: actionType.GET_MY_TICKETS
});

export const viewTicket = (ticketId) => ({
    type: actionType.VIEW_TICKET,
    ticketId
});

export const viewAgents = () => ({
    type: actionType.VIEW_AGENTS
});

export const viewAgentsSuccess = (data) => ({
    type: actionType.VIEW_AGENTS_SUCCESS,
    data
});

export const assignTicket = (ticketId, agentId) => ({
    type: actionType.ASSIGN_TICKET,
    ticketId, agentId
}); 

export const assignTicketSuccess = (data) => ({
    type: actionType.ASSIGN_TICKET_SUCCESS,
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