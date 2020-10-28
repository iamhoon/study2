import React from "react"
import { View, Text, StyleSheet } from "react-native"

const SubTitle = () => (
    <View>
        <Text style={styles.subTitleText}>To-Do 입력</Text>
    </View>
)

const styles = StyleSheet.create({
    subTitleText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "600"
    }
})

export default SubTitle