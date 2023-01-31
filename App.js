import { NavigationContainer } from "@react-navigation/native";
import Main from "./pages/main";
import TabNavigator from "./components/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Main/>
      <TabNavigator/>
    </NavigationContainer>
  );
}

