import axiosConfig from "./axiosConfig";

export const createTicketAPI = (datetime, title, issue, status, assignTo) => {
    const ticket = {datetime, title, issue, assignTo};
    console.log("API" +JSON.stringify(ticket));
    return axiosConfig({
        url: "/tickets",
        method: "POST",
        data: { datetime, title, issue, status, assignTo }
    });
}

export const getTicketsAPI = () => {
    return axiosConfig({
        url: "/tickets",
        method: "GET"
    });
}

export const assignTicketAPI = (ticketId, agentId) => {
    const response = axiosConfig({
        url: `/tickets/${ticketId}`,
        method: "GET"
    });
    const ticket = response.data;
    ticket.assignedTo = agentId;
    return axiosConfig.patch(`/tickets/${ticketId}`, ticket);
}

export const setTicketStatusAPI = (ticketId, status) => {
    const response = axiosConfig({
        url: `/tickets/${ticketId}`,
        method: "GET"
    });
    const ticket = response.data;
    ticket.status = status;
    return axiosConfig.patch(`/tickets/${ticketId}`, ticket);
}