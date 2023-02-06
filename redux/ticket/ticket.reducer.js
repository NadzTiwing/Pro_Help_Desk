import actionType from "./ticket.type";

const initialState = {
    error: null,
    isLoading: false,
    search: null,
    tickets: [],
    agents: []
};

const ticketReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.CREATE_TICKET:
            return {
                ...state, 
                isLoading: true
            };
        case actionType.CREATE_TICKET_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                tickets: action.data
            };
        case actionType.GET_ALL_TICKETS:
            return {
                ...state, 
                isLoading: true
            };
        case actionType.GET_ALL_TICKETS_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                tickets: action.data
            };
        case actionType.GET_OPEN_TICKETS:
            //condition here
            return {
                ...state, 
                isLoading: false
            };
        case actionType.GET_MY_TICKETS:
            //condition here
            return {
                ...state, 
                isLoading: false
            };
        case actionType.VIEW_TICKET:
            //condition here
            return {
                ...state, 
                isLoading: false
            };
        case actionType.VIEW_AGENTS:
            return {
                ...state, 
                isLoading: true,
            };
        case actionType.VIEW_AGENTS_SUCCESS:
            //condition here
            return {
                ...state, 
                agents: action.data,
            };            
        case actionType.ASSIGN_TICKET_SUCCESS:
            //condition here
            return {
                ...state, 
                isLoading: true,
            };
        case actionType.ASSIGN_TICKET_SUCCESS:
            //condition
            return {
                ...state,
                isLoading: false, 
                tickets: action.data,
            };       
        case actionType.SET_TICKET_STATUS_SUCCESS:
            //condition
            return {
                ...state, 
                tickets: action.data,
            };        
        case actionType.SEARCH:
            return {
                ...state, 
                isLoading: true
            };
        case actionType.SEARCH_SUCCESS:
            //condition
            return {
                ...state, 
                tickets: action.data,
            };
        case actionType.ACTION_FAIL:
            return {
                ...state,
                isLoading: false, 
                error: action.error
            };
        default: 
            return {
                ...state
            };
    }
}

export default ticketReducer;