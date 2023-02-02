import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import TaskHeader from "../../components/TaskHeader";
import TaskList from "../../components/TaskList";
import { myTaskSortList } from "../../const";

const MyTask = () => {
    const indicatorText = () => {
        return(
            <View style={styles.indicator}>
                <Text style={styles.text}> You have </Text>
                <Text style={styles.highlight}> 6 </Text>
                <Text style={styles.text}> pending task/s </Text>
            </View>
        );
    }

    return(
        <View>
            <TaskHeader tabName="MyTask" sortList={myTaskSortList} indicator={indicatorText}/>
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

export default MyTask;