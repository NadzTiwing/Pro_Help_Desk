import store from "./redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./pages/main";
//import TabNavigator from "./components/navigation/TabNavigator";
import CustomNavigator from "./components/navigation/CustomNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main/>
        <CustomNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

