import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  console.log("points", points.job.job_title);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "800", marginBottom: 12 }}>
              {" "}
              Title :
            </Text>
            <Text style={styles.pointText}>
              {points.job.job_title || "N/A"}
            </Text>
          </View>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "800", marginBottom: 12 }}>
              {" "}
              Publisher :
            </Text>
            <Text style={styles.pointText}>
              {points.job.job_publisher || "N/A"}
            </Text>
          </View>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "800", marginBottom: 12 }}>
              {" "}
              Required Skills :
            </Text>
            <Text style={styles.pointText}>
              {points.job.job_required_skills.length !== 0
                ? points.job.job_required_skills.map((item, index) => (
                    <View style={styles.pointWrapper} key={index}>
                      <View style={[styles.pointDot, { marginLeft: 8 }]} />
                      <Text style={styles.pointText}>{item}</Text>
                    </View>
                  ))
                : "N/A"}
            </Text>
          </View>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "800", marginBottom: 12 }}>
              {" "}
              Salary Currency :
            </Text>
            <Text style={styles.pointText}>
              {points.job.salary_currency || "N/A"}
            </Text>
          </View>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "800", marginBottom: 12 }}>
              {" "}
              Salary Period :
            </Text>
            <Text style={styles.pointText}>
              {points.job.job_salary_period || "N/A"}
            </Text>
          </View>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "800", marginBottom: 12 }}>
              {" "}
              State :
            </Text>
            <Text style={styles.pointText}>
              {points.job.job_state || "N/A"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Specifics;
