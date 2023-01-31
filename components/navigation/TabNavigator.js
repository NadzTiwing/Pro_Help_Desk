import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import Home from "../../pages/home";
import OpenTasks from "../../pages/tasks/OpenTasks";
import { color } from "../../const";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
        initialRouteName="OpenTasks"
        screenOptions={{
            tabBarActiveTintColor: color.navy,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: { backgroundColor: 'white' },
        }}
        style={styles.container}
        >
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }}/>
            <Tab.Screen name="OpenTasks" component={OpenTasks} options={{ tabBarLabel: 'Open Tasks' }}/>
            {/* <Tab.Screen name="MyTask" component={}/>
            <Tab.Screen name="AllTask" component={}/> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth : 1,
        borderColor: color.green,
        // borderTopLeftRadius: 45,
        // borderTopRightRadius: 45,
        borderRadius: 50,
        marginTop: -45,
        height: 10
    }
});

export default TabNavigator;