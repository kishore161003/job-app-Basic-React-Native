import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    keyword: "python",
    page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity onPress={() => router.push("/popular")}>
          <Text style={styles.viewAll}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>SomeThing went Wrong</Text>
        ) : (
          data.jobs?.map((item) => (
            <NearbyJobCard job={item} key={`nearby-job-${item?.job_id}`} />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
