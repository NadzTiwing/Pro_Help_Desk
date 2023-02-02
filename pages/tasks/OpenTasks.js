import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    TouchableHighlight,
    Dimensions,
    Animated
} from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color, size } from "../../const";
import TaskHeader from "../../components/TaskHeader";
import { sortList } from "../../const";


const rowTranslateAnimatedValues = {};
Array(20)
    .fill('')
    .forEach((_, i) => {
        rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
    });

const OpenTasks = () => {
    const [listData, setListData] = useState(
        Array(20)
        .fill('')
        .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
        );
        
    const indicatorText = () => {
        return(
            <React.Fragment>
                <MaterialCommunityIcons name="chevron-triple-right" style={styles.swipeIcon} />
                <Text style={styles.swipeText}>Swipe to assign to self</Text>
            </React.Fragment>
        );    
    }

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
        <Animated.View
            style={[
                styles.rowFrontContainer,
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 50],
                    }),
                },
            ]}
        >
            <TouchableHighlight
                onPress={() => console.log('You touched me')}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>I am {data.item.text} in a SwipeListView</Text>
                </View>
            </TouchableHighlight>
        </Animated.View>
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

    const onSwipeValueChange = (swipeData) => {
        const { key, value } = swipeData;
        const isSureDelete = value+150 > Dimensions.get('window').width;
        if (
            isSureDelete 
            && !this.animationIsRunning
        ) {
           this.animationIsRunning = true; //for smooth transition
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            }).start(() => {
                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                setListData(newData);
                this.animationIsRunning = false; //for smooth transition
            });
        }
    };

    return(
        <View>
            <TaskHeader tabName="OpenTasks" sortList={sortList} indicator={indicatorText}/>
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
                onSwipeValueChange={onSwipeValueChange}
                useNativeDriver={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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