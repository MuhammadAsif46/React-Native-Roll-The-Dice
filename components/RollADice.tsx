import React, { PropsWithChildren, useRef, useState } from "react";
import {
    Animated,
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import DiceFive from "../assets/images/Five.png";
import DiceFour from "../assets/images/Four.png";
import DiceOne from "../assets/images/One.png";
import DiceSix from "../assets/images/Six.png";
import DiceThree from "../assets/images/Three.png";
import DiceTwo from "../assets/images/Two.png";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
  animation: Animated.Value;
}>;

const Dice = ({ imageUrl, animation }: DiceProps) => {
  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1],
  });
  return (
    <Animated.View style={{ transform: [{ rotate: spin }, { scale }] }}>
      <Image source={imageUrl} style={styles.diceImage} />
    </Animated.View>
  );
};

export default function RollADice() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const animation = useRef(new Animated.Value(0)).current;

  const rollDice = () => {
    // Reset animation value
    animation.setValue(0);

    // Start animation
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} animation={animation}/>
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
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
