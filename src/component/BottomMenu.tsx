import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screen/DashboardScreen";
import Imaged from "../Image/images";
import styled from "../assets/styled";
const Tab = createBottomTabNavigator();


const BottomMenu = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{ tabBarShowLabel: false, tabBarStyle: { backgroundColor: styled.dark, height: 83, borderWidth: 0 } }}>

            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Imaged.icon1 color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Invite"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Imaged.icon4 color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Prayer"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Imaged.icon3 color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Prayer1"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Imaged.icprofile color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Prayer2"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Imaged.icon2 color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomMenu