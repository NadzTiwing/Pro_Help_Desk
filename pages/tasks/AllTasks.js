import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import TaskHeader from "../../components/TaskHeader";
import { tasksSortList } from "../../const";
import TaskList from "../../components/TaskList";

const AllTasks = () => {
    const indicatorText = () => {
        return(
            <View style={styles.indicator}>
                <Text style={styles.text}>Showing</Text>                
                <Text style={styles.highlight}> 6 ticket records</Text>                
            </View>
        );
    }

    return(
        <View>
            <TaskHeader tabName="AllTasks" sortList={tasksSortList} indicator={indicatorText}/>
            <TaskList/>
        </View>
    );
}

const styles = StyleSheet.create({
    indicator: {
        flexDirection: "row"
    }, 
    text: {
        color: "gray",
        fontSize: 10
    },
    highlight: {
        fontWeight: "bold",
        color: "black",
        fontSize: 10
    }
});

export default AllTasks;