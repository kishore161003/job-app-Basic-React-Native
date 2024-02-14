import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full Time", "Part Time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const [activeJobType, setActiveJobType] = useState("Full Time");

  return (
    <View>
      <View styles={styles.container}>
        <Text style={styles.userName}> Hello Kishore</Text>
        <Text style={styles.welcomeMessage}> Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for job"
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            router.push(`/search/${searchText}`);
          }}
        >
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  console.log("item", item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
