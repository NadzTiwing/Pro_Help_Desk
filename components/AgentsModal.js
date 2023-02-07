import React, { useState, useEffect } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Button
} from "react-native";
import { size, color } from "../const";

const AgentItem = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity style={[styles.item, {backgroundColor}]} onPress={onPress}>
        <Text style={[styles.agentName, {color: textColor}]}>{item.name}</Text>
    </TouchableOpacity>
);

const AgentsModal = ({
    show, 
    setShow,
    agents, 
    selected, 
    setSelected, 
    delegate
}) => {
    // console.log({AGENTS: JSON.stringify(agents)})
    const renderItem = ({item}) => {
        const backgroundColor = item.id === selected ? "#1C82AD" : "white";
        const color = item.id === selected ? "white" : "black";
        return(
            <AgentItem 
                item={item}
                onPress={()=>setSelected(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    }

    // useEffect(() =>{
    //     console.log({SELECTED_IT: selected})
    // }, [selected])
    

    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={()=> setShow(!show)}
            >
                <View style={styles.modalView}>
                    <Text>Select an IT support: </Text>
                    <FlatList 
                        data={agents}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={selected}
                    />
                    <View style={styles.btnSection}>
                        <View style={styles.btn}>
                            <Button color={color.primary} style={styles.btn} title="Assign" onPress={()=>delegate()} disabled={selected ? false : true}/>
                        </View>
                        <View style={styles.btn}>
                            <Button color="gray" style={styles.btn} fontColor="black" title="Cancel" onPress={()=>setShow(!show)}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalView: {
        marginTop: "60%",
        margin: 20,
        backgroundColor: "white",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5 
    },
    btnSection: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    btn: {
        margin: 5
    },
    //item in IT List
    item: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    itemBox: {
        border: 2,
        borderColor:"gray"
        // borderBottom: 1,
        // borderBottomColor: "gray"
    },
    agentName: {
        padding: 8,
        fontWeight: "bold",
        fontSize: size.xMedium,
    }
});

export default AgentsModal;