import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    FlatList,
    Button
} from "react-native";

const AgentsModal = ({show}) => {
    const [visible, setVisible] = useState(show);
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={()=> setVisible(!visible)}
            >
                <Text> This is a list of IT pipz</Text>
                <Button style={styles.cancelBtn} title="Cancel" onPress={()=>setVisible(!visible)}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22
    },
    cancelBtn: {
        alignSelf: "flex-end",
    }
});

export default AgentsModal;