import axiosConfig from "./axiosConfig";

export const createTicketAPI = async (datetime, title, issue, status, assignTo) => {
    const ticket = {datetime, title, issue, assignTo};
    console.log("API" +JSON.stringify(ticket));
    return await axiosConfig({
        url: "/tickets",
        method: "POST",
        data: { datetime, title, issue, status, assignTo }
    });
}

export const getTicketsAPI = async () => {
    return await axiosConfig({
        url: "/tickets",
        method: "GET"
    });
}

export const assignTicketAPI = async (ticketId, agentId) => {
    console.log({ASSIGN_API: `Ticket ${ticketId} for agent ${agentId}`});
    const response = await axiosConfig({
        url: `/tickets/${ticketId}`,
        method: "GET"
    });
    const ticket = response.data;
    ticket.assignTo = agentId;
    return axiosConfig.patch(`/tickets/${ticketId}`, ticket);
}

export const setTicketStatusAPI = async (ticketId, status) => {
    const response = await axiosConfig({
        url: `/tickets/${ticketId}`,
        method: "GET"
    });
    const ticket = response.data;
    ticket.status = status;
    return axiosConfig.patch(`/tickets/${ticketId}`, ticket);
}