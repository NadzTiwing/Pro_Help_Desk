import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllTickets, assignTicket } from "../../redux/ticket/ticket.actions";
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    TouchableHighlight,
    Dimensions,
    Animated,
    ActivityIndicator
} from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { color, size } from "../../const";
import TaskHeader from "../../components/TaskHeader";
import { sortList } from "../../const";
import dayjs from "dayjs";
import AgentsModal from "../../components/AgentsModal";



const rowTranslateAnimatedValues = {};
// Array(20)
// .fill('')
// .forEach((_, i) => {
//     rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
// });

const OpenTasks = (props) => {
    const [tickets, setTickets] = useState();
    const [isLoading, setLoading] = useState(props.isLoading);
    const [dataLength, setDataLength] = useState(20);
    const [showModal, setShowModal] = useState(false);
    

    useEffect(()=>{
        setDataLength(dataLength);
        Array(dataLength)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

        props.getTickets();
        setLoading(props.isLoading);
        let data = props.data.tickets.data || [];
        let openTickets = [];
        data?.forEach(item => {
            if(item.status === "open" || item.status === "priority") {
                let desc = item.issue;
                let textCount = item.issue.length;
                if(textCount > 80) desc = item.issue.substring(0,80) + "...";

                let ticket = {
                    id: item.id,
                    title: item.title,
                    issue: desc,
                    status: item.status,
                    assignTo: item.assignTo 
                };

                openTickets.push(ticket);
            }
        })
        setTickets(openTickets);
       // console.log(JSON.stringify(items));
    },[props.isLoading, dataLength ]);

    // const [listData, setListData] = useState(
    //     Array(20)
    //     .fill('')
    //     .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    //     );
        
    const indicatorText = () => {
        return(
            <React.Fragment>
                <MaterialCommunityIcons name="chevron-triple-right" style={styles.swipeIcon} />
                <Text style={styles.swipeText}>Swipe to assign to self</Text>
            </React.Fragment>
        );    
    }

    const assignMember = (ticketId, agent) => {
        console.log({TICKET_ID_CLICKED: ticketId});
        setShowModal(!showModal);
        // if(agent === "me") {

        // } else if(agent === "others") {

        // } else { //re-assign to other members

        // }
    }

    const closeRow = (rowMap, rowId) => {
        if (rowMap[rowId]) {
            rowMap[rowId].closeRow();
        }
    };

    const deleteRow = (rowMap, rowId) => {
        closeRow(rowMap, rowId);
        const newData = [...tickets];
        const prevIndex = tickets.findIndex(item => item.id === rowId);
        newData.splice(prevIndex, 1);
        setTickets(newData);
    };

    const OpenTicket = (id) => {
        console.log("Ticket Opened:" +id);
    }

    const renderItem = data => (
        <Animated.View
            style={[
                styles.rowFrontContainer,
                {
                    height: "auto"
                    // height: rowTranslateAnimatedValues[
                    //     data.item.id
                    // ].interpolate({
                    //     inputRange: [0, 1],
                    //     outputRange: [0, 120],
                    // }),
                },
            ]}
        >
            {/* <TouchableHighlight
                onPress={() => console.log('You touched me')}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>{data.item.title}</Text>
                </View>
            </TouchableHighlight> */}
            <TouchableHighlight style={styles.rowFront} underlayColor={'#AAA'}>
                <View>
                    <View style={styles.secondaryDetails}>
                        <Text>{data.item.id} . {data.item.status}</Text>
                        <Text>{dayjs(data.item.datetime).toString()}</Text>
                    </View>
                    <Text style={styles.title}>{data.item.title}</Text>
                    <View style={styles.description}>
                        <FontAwesome name="sticky-note" size={size.xMedium}  style={styles.descIcon} />
                        <Text>{data.item.issue}</Text>
                    </View>
                    <View style={styles.userDetails}>
                        <View style={styles.user}>
                            <FontAwesome name="user" size={size.xMedium} style={styles.userIcon}/>
                            <View style={styles.name}>
                                <Text>{data.item.assignTo ? data.item.assignTo : "Unassigned"}</Text>
                            </View>
                        </View>
                        <Text style={styles.role}>Main Focal</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Animated.View>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={styles.backLeftBtn}
                onPress={() => closeRow(rowMap, data.item.id)}
            >
                <Text style={styles.assignSelfTxt}>Assign To Me</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => assignMember(data.item.id, "others")}
            >
                <Text style={styles.backRightBtnTxt}>Assign Member</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.id)}
            >
                <Text style={styles.backRightBtnTxt}>Re-assign Group</Text>
            </TouchableOpacity>
        </View>
    );

    const onSwipeValueChange = (swipeData) => {
        const { key, value } = swipeData;
        const isSureDelete = value+150 > Dimensions.get('window').width;
        // console.log({isSureDelete: JSON.stringify(swipeData)});
        if (
            isSureDelete 
            //!animationIsRunning.current
        ) {
            //animationIsRunning.current = true; //for smooth transition
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            }).start(() => {
                console.log("swiped to left");
                // const newData = [...tickets];
                // const prevIndex = tickets.findIndex(item => item.id === key);
                // newData.splice(prevIndex, 1);
                // setTickets(newData);
                //animationIsRunning.current = false; //for smooth transition
            });
        }
    };

    return(
        <View>
            <TaskHeader tabName="OpenTasks" sortList={sortList} indicator={indicatorText}/>
            <AgentsModal show={showModal}/>
            {isLoading ? 
            <ActivityIndicator size="large" />
            :
            <SwipeListView
                data={tickets}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={onSwipeValueChange}
                useNativeDriver={false}
            />
            }
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
    backRightBtnTxt: {
        color: 'brown',
    },
    // rowFrontContainer: {
    //     height: 1000
    // },
    rowFront: {
        // alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 3,
        borderTopColor: color.blue,
        // justifyContent: 'space-between',
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        height: 130,
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
        backgroundColor: "mediumseagreen"
    },
    assignSelfTxt: {
        fontWeight: "bold",
        color: "white"
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
        backgroundColor: 'orange',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'gold',
        right: 0,
    },
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
        fontSize: size.default,
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

const mapStateToProps = (state) => {
    return {
        data: state.tickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: () => dispatch(getAllTickets()),
        assign: (ticketId, agentId) => dispatch(assignTicket(ticketId, agentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenTasks);