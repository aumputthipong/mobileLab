import React from "react";

// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useDispatch } from "react-redux"
import {toggleFavorite} from "../store/actions/mealAction"
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
  const dispatch = useDispatch();
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };
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
          headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="MealDetail" iconName="ios-star" onPress={() => {toggleFavoriteHandler(route.params.id)}} />
          </HeaderButtons> ),   })}
      />
    </MealsNavigator.Navigator>
  );
}

// อาจกำหนด Navigator เพิ่มได้
function FavStack() {
  return (
    <FavNavigator.Navigator
    screenOptions={{        headerStyle: { backgroundColor: "#4a148c" },   headerTintColor: "white",}}>
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
            headerShown: false,
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
            headerShown: false,
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
          headerShown: false,
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      >
        <MainNavigator.Screen
          name="MealsFav"
          component={MealsFavNav}
          options={{
            drawerLabel: "Meals",

          }}
        />
        <MainNavigator.Screen name="Filters" component={FiltersNav} />
         
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
