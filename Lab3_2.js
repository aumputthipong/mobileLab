import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Lab3_2() {
  const courses = [
    {
      id: 1,
      name: "Information Technology",
      image: require("../assets/course-bach-it.jpg"),
    },
    {
      id: 2,
      name: "Data Science and Business Analytics",
      image: require("../assets/course-bach-dsba.jpg"),
    },
    {
      id: 3,
      name: "Business Information Technology",
      image: require("../assets/course-bach-bit.jpg"),
      wongleb: "(International Program)",
    },
    {
      id: 4,
      name: "Articial Intelligence Technology",
      image: require("../assets/course-bach-ait.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headbar}>
        <Image
          style={styles.itlogo}
          source={require("../assets/IT_Logo.png")}
        />
        <Text style={styles.headertext}>Program</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.child}>
                <TouchableOpacity>
                  <Image style={styles.coursesimg} source={item.image} />
                  <Text style={styles.textdesc}>{item.name}</Text>
                  <Text style={styles.textdesc}>{item.wongleb}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  headbar: {
    paddingVertical: 20,
    flex: 1,
    width: "100%",
    backgroundColor: "skyblue",
    flexDirection: "row",
  },
  headertext: {
    flex: 5,
    fontSize: 50,
    color: "#010875",
    textAlign: "center",
    fontWeight: "bold",
  },
  itlogo: {
    marginHorizontal: 10,
    flex: 1,
    resizeMode: "stretch",
    width: 50,
    height: 50,
  },
  textdesc: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 10,
    width: "100%",
    backgroundColor: "#A8A9AA",
  },
  coursesimg: {
    marginVertical: 15,
  },
});
