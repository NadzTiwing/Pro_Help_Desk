import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color, layout, size } from "./../const";

const Header = () => {
    return(
        <View>
            <Text style={styles.title}>PRO HELP DESK</Text>
            <View style={styles.userBox}>
                <LinearGradient colors={[color.navy, color.green]} style={styles.gradient}>
                    <View style={styles.texts}>
                        <Text style={styles.userText}>Hi, IT Support</Text>
                        <Text style={styles.quote}>"Action is the foundational key to all success."</Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: size.medium,
        color: color.navy,
        fontWeight: "bold",
        alignSelf: "center",
        padding: 3
    },
    userBox: {
        height: 150,
        borderTopWidth: 5,
        borderTopColor: color.green
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    texts: {
        padding: 20
    },
    quote: {
        color: "white",
        paddingBottom: 10
    },
    userText: {
        color: "white",
        fontWeight: "bold",
        fontSize: size.medium,
        paddingBottom: 10
    }
});

export default Header;