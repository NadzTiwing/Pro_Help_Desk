import * as React from "react";
import { Text, Pressable, View, StyleSheet } from 'react-native';
import {
    useNavigationBuilder, 
    createNavigatorFactory,
    TabRouter,
    TabActions 
} from '@react-navigation/native';
import { color, size } from "../../const";

import { Entypo, FontAwesome } from '@expo/vector-icons';



function TabNavigator({
    initialRouteName,
    children,
    screenOptions,
    tabBarStyle,
    contentStyle,
}) {
    const { state, navigation, descriptors, NavigationContent } =
        useNavigationBuilder(TabRouter, {
        children,
        screenOptions,
        initialRouteName,
    });

    const iconSize = size.medium;

    const vectorIcon = (type, name, routeName) => {
        const iconStyle = state.routeNames[state.index] === routeName ? styles.activeTabIcon : styles.inactiveTabIcon;
        if(type==="Entypo") {
            return <Entypo name={name} size={iconSize} style={iconStyle} />
        }
        else if(type==="FontAwesome") {
            return <FontAwesome name={name} size={iconSize} style={iconStyle} />
        }
    }
    return (
    <NavigationContent >
        <View style={[{ flexDirection: 'row' }, tabBarStyle]}>
            {state.routes.map((route) => (
            <Pressable
                key={route.key}
                onPress={() => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!event.defaultPrevented) {
                    navigation.dispatch({
                    ...TabActions.jumpTo(route.name),
                    target: state.key,
                    });
                }
                }}
                style={state.routeNames[state.index] === route.name ? styles.activeTab : styles.inactiveTab }
            >
                {vectorIcon(descriptors[route.key].options.iconType, descriptors[route.key].options.icon, route.name)}
                {state.routeNames[state.index] === route.name && <Text style={styles.tabName}>{descriptors[route.key].options.title || route.name}</Text>}
                
            </Pressable>
            ))}
        </View>
        <View style={[{ flex: 1 }, contentStyle]}>
            {state.routes.map((route, i) => {
            return (
                <View
                key={route.key}
                style={[
                    StyleSheet.absoluteFill,
                    { display: i === state.index ? 'flex' : 'none' },
                ]}
                >
                {descriptors[route.key].render()}
                </View>
            );
            })}
        </View>
    </NavigationContent>
    );
}

const styles = StyleSheet.create({
    temp: {
        flex: 1
    },
    activeTab: {
        width: "auto",
        flexDirection: "row",
        backgroundColor: color.navy,
        borderWidth: 1,
        borderRadius: 25,
    },
    inactiveTab: {
        width: "auto",
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 5,
    },
    activeTabIcon: {
        color: "white",
        padding: 12,
        // paddingLeft: 20
    },
    intactiveTabIcon: {
        color: color.blue,
        padding: 12
    },
    tabName: {
        color: "white",
        alignSelf: "center",
        paddingRight: 20,
        fontSize: 18,
        fontWeight: "bold"
    }
});


export const createMyNavigator = createNavigatorFactory(TabNavigator);