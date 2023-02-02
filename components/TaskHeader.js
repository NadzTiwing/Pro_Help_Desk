import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput 
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { color, size } from "../const";

const TaskHeader = ({ tabName, sortList, indicator }) => {
    const [search, setSearch] = useState("");
    const defaultValue = sortList[0]?.value || "";
    const [sort, setSort] = useState(defaultValue);

    return(
        <View>
            <View style={styles.searchSection}>
                <FontAwesome name="search" style={styles.searchIcon} />
                <TextInput 
                    placeholder="Search..."
                    value={search}
                    onChange={(value)=>setSearch(value)}
                />
            </View>
            <View style={styles.header}>
                <View style={styles.indicator}>
                    {indicator()}
                </View>
                <View style={styles.sorter}>
                    <Text style={styles.sortBy}>Sort by:</Text>
                    <View style={styles.selection}>
                        <Text style={styles.sortText}>{sort}</Text>
                        <Picker 
                        selectedValue={sort} 
                        style={styles.sortSelection} 
                        onValueChange={(value, index) => setSort(value)}>
                            {sortList.map( item => (
                                <Picker.Item
                                    key={`${item.value}-option`}
                                    label={item.label}
                                    value={item.value}
                                />
                            ))}
                            {/* <Picker.Item label="Latest" value="latest"/>
                            <Picker.Item label="Priority" value="priority"/> */}
                        </Picker>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    searchSection: {
        flexDirection: "row",
        padding: 5,
        backgroundColor: color.secondary
    },
    searchIcon: {
        alignSelf: "center",
        padding: 5,
        color: "gray",
        size: size.small
    },
    header: {
        backgroundColor: color.light,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8
    },
    indicator: {
        flexDirection: "row",
    },
    sorter: {
        flexDirection: "row",
    },
    selection: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: 20,
        paddingLeft: 20,
        marginLeft: 5,
        borderRadius: 25 
    },
    sortBy: {
        alignSelf: "center"
    },
    sortSelection: {
        // height: 50,
        alignSelf:"center",
        width: 35,
    }
});

export default TaskHeader;