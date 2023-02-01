import React, { useState, useRef } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    ScrollView, 
    TouchableOpacity, 
    TouchableHighlight
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { color, size } from "../../const";

const OpenTasks = () => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("latest");
    const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
    ]);

    const [listData, setListData] = useState(
        Array(20)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
            <View>
                <Text>I am {data.item.text} in a SwipeListView</Text>
            </View>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={styles.backLeftBtn}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text>Assign To Me</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Assign Member</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Re-assign Group</Text>
            </TouchableOpacity>
        </View>
    );

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
                    <MaterialCommunityIcons name="chevron-triple-right" style={styles.swipeIcon} />
                    <Text style={styles.swipeText}>Swipe to assign to self</Text>
                </View>
                <View style={styles.sorter}>
                    <Text style={styles.sortBy}>Sort by:</Text>
                    <View style={styles.selection}>
                        <Text style={styles.sortText}>{sort}</Text>
                        <Picker selectedValue={sort} style={styles.sortSelection} onValueChange={(value, index) => setSort(value)}>
                            <Picker.Item label="Latest" value="latest"/>
                            <Picker.Item label="Priority" value="priority"/>
                            {/* <Picker.Item label="Create Date" value="c"/> */}
                        </Picker>
                    </View>
                </View>
            </View>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: "row",
        padding: 5,
        // width: "100%",
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
        paddingLeft: 10,
        paddingRight: 10,
    },
    indicator: {
        flexDirection: "row",
    },
    swipeIcon: {
        color: "gray",
        fontSize: size.medium
    },
    swipeText: {
        fontSize: 10,
        alignSelf: "center",
        paddingLeft: 3,
        color: "gray"
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
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderTopWidth: 3,
        borderTopColor: color.blue,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backLeftBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 100,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});

export default OpenTasks;