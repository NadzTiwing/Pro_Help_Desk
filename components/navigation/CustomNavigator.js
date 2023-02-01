import * as React from "react";
import { StyleSheet } from "react-native";
import { createMyNavigator } from "./TabNavigator";
import { color } from "../../const";
import Home from '../../pages/home';
import OpenTasks from '../../pages/tasks/OpenTasks';
import MyTask from "../../pages/tasks/MyTask";
import AllTasks from "../../pages/tasks/AllTasks";


const CustomTabNav = createMyNavigator();

const menu = [
    {
        name: "home",
        title: "Home",
        component: Home,
        icon: {
            type: "Entypo",
            name: "home" 
        }
    },
    {
        name: "openTasks",
        title: "Open Tasks",
        component: OpenTasks,
        icon: {
            type: "FontAwesome",
            name: "circle-thin" 
        }
    },
    {
        name: "myTasks",
        title: "My Tasks",
        component: MyTask,
        icon: {
            type: "FontAwesome",
            name: "server"
        }
    },
    {
        name: "allTasks",
        title: "All Tasks",
        component: AllTasks,
        icon: {
            type: "FontAwesome",
            name: "list-ol"
        }
    }
];

const CustomNavigator = () => {
    return(
        <CustomTabNav.Navigator
        initialRouteName="Home"
        tabBarStyle={styles.container}
        contentStyle={styles.content}
        >
            {menu.map( item => (
                <CustomTabNav.Screen
                    key={item.name} 
                    name={item.name} 
                    component={item.component}
                    options={{ title: item.title, iconType: item.icon.type, icon: item.icon.name }}
                />
            ))}
        </CustomTabNav.Navigator>
    );  
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderTopColor: color.navy,
        borderBottomColor: color.green,
        borderRadius: 25,
        marginTop: -20,
        alignItems: "center",
        backgroundColor: "white",
        padding: 3,
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 10
    },
    content: {
        marginTop: 5  
    }
});

export default CustomNavigator;