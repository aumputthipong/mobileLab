import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/mealsReducer";
import { Provider } from "react-redux";


import MyNavigator from "./navigation/MyNavigator";
// import คอมโพเนนต์ที่จำเป็น


const rootReducer = combineReducers({
  meals: mealsReducer
  })
  
const store = createStore(rootReducer);
  
export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <Provider store={store}><MyNavigator/></Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
