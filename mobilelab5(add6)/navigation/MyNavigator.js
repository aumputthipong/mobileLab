import React from "react";

// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Category from "../models/category";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
// สร้าง navigator ตามโจทย์กำหนด

const MealsNavigator = createNativeStackNavigator();
const FavNavigator = createNativeStackNavigator();
const MealsFavTabNavigator = createBottomTabNavigator();
const FiltersNavigator = createNativeStackNavigator();
const MainNavigator = createDrawerNavigator();
// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function MealStack() {
  return (
    <MealsNavigator.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <MealsNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: " Meal Categories",
        }}
      />
      <MealsNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.title,
          id: route.params.id,
        })}
      />
      <MealsNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </MealsNavigator.Navigator>
  );
}

// อาจกำหนด Navigator เพิ่มได้
function FavStack() {
  return (
    <FavNavigator.Navigator>
      <FavNavigator.Screen name="Favorites" component={FavoritesScreen} />
      <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </FavNavigator.Navigator>
  );
}
function FiltersNav() {
  return (
    <FiltersNavigator.Navigator>
      <FiltersNavigator.Screen name="Filters" component={FiltersScreen} />
    </FiltersNavigator.Navigator>
  );
}
function MealsFavNav() {
return(
  <MealsFavTabNavigator.Navigator
        screenOptions={{
          tabBarActiveTintColor: "salmon",
          tabBarStyle: { backgroundColor: "white" },
          tabBarLabelStyle: { fontSize: 15 },
        }}
      >
        <MealsFavTabNavigator.Screen
          name="Meals"
          component={MealStack}
          options={{
            tabBarIcon: ({ tintColor }) => {
              return (
                <Ionicons name="ios-restaurant" size={24} color={tintColor} />
              );
            },
            tabBarOptions: { tabBarActiveTintColor: "blue" },
          }}
        />
        <MealsFavTabNavigator.Screen
          name="Your Favorites"
          component={FavStack}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="ios-star" size={24} color="gray" />;
            },
          }}
        />
      </MealsFavTabNavigator.Navigator>
);
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      >
        <MainNavigator.Screen
          name="MealsFav"
          component={MealsFavNav}
          options={{
            drawerLabel: "Meals",
            drawerIcon: ({ color }) => {
              return <AntDesign name="tags" size={24} color={color} />;
            },
          }}
        />
        <MainNavigator.Screen name="Filters" component={FiltersNav} />
         
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
