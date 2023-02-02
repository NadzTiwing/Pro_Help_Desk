export const size = {
    small: 12,
    default: 14,
    xMedium: 16, 
    medium: 24,
    large: 36,
    xlarge: 48,
    xxlarge: 60,
    xxxlarge: 72   
}

export const layout = {
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
}

export const color = {
    navy: "#13005A",
    primary: "#00337C",
    secondary: "#E0E0E0",
    blue: "#1C82AD",
    green: "#03C988", 
    light: "#f2f2f2",
}

export const sortList = [
    {
        label: "Latest",
        value: "latest"
    },
    {
        label: "Priority",
        value: "priority"
    }
];

export const myTaskSortList = [
    {
        label: "New Activity",
        value: "new"
    },
    ...sortList
]

export const tasksSortList = [
    {
        label: "All",
        value: "all"
    },
    {
        label: "Open",
        value: "open"
    },    
    {
        label: "In Progress",
        value: "progress"
    },    
    {
        label: "Completed",
        value: "complete"
    },
    {
        label: "Paused/On Hold",
        value: "pause"
    },
    {
        label: "Cancelled",
        value: "cancel"
    }
]; 
