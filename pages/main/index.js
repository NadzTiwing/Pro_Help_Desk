import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import Header from "../../components/Header";

const Main = () => {
    return(
        <View>
            <StatusBar hidden={true} style="auto" />
            <Header/>
        </View>
    );
}

export default Main;