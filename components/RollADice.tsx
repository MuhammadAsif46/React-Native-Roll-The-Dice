import React, { PropsWithChildren } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";


type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps) => {
    return (
        <View>
            <Image source={imageUrl} style={styles.diceImage } />
        </View>
    )
}

export default function RollADice() {
  return (
    <View>
      <Text>Roll A Dice</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF2F2",
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E5E0FF",
    fontSize: 16,
    color: "#8EA7E9",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
