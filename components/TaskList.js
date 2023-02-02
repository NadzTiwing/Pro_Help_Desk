import React, { useState, useEffect } from "react";
import {
    FlatList,
    StatusBar, 
    ScrollView, 
    StyleSheet,
    Text,
    TouchableOpacity, 
    View, 
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { color, size } from "../const";

const data = [
    {
        id: 1,
        text: "test 123"
    },    
    {
        id: 2,
        text: "test 123"
    },
    {
        id: 3,
        text: "test 123"
    },
]; 

const TaskList = ({tabName}) => {
    const [selectedId, setSelectedId] = useState();
    const OpenTicket = (id) => {
        console.log("Ticket Opened:" +id);
    }

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity onPress={OpenTicket(item.id)} style={styles.item}>
                <View style={styles.secondaryDetails}>
                    <Text>Ticket number . Open</Text>
                    <Text>01/01/2023 10:10</Text>
                </View>
                <Text style={styles.title}>Ticket Title</Text>
                <View style={styles.description}>
                    <FontAwesome name="sticky-note" size={size.xMedium}  style={styles.descIcon} />
                    <Text>{item.text} This is a description of the ticket. This is a random string</Text>
                </View>
                <View style={styles.userDetails}>
                    <View style={styles.user}>
                        <FontAwesome name="user" size={size.xMedium} style={styles.userIcon}/>
                        <View style={styles.name}>
                            <Text>Username</Text>
                        </View>
                    </View>
                    <Text style={styles.role}>Main Focal</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        borderTopWidth: 3,
        borderTopColor: color.blue,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    secondaryDetails: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: size.medium,
        fontWeight: "bold",
        color: color.blue
    },
    description: {
        width: "80%",
        flexDirection: "row",
        marginBottom: 10
    },
    descIcon: {
        color: "gray",
        paddingRight: 10,
        alignSelf: "flex-start",
        marginTop: 5
    },
    userIcon: {
        color: "gray",
        paddingRight: 10,
        alignSelf: "center",
    },
    userDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    user: {
        flexDirection: "row"
    },
    name: {
        backgroundColor: color.secondary,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },
    role: {
        color: color.blue
    }
});

export default TaskList;