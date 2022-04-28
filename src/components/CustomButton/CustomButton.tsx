import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Colors from '../../styles/Colors';
import FontSizes from '../../styles/FontSizes';
import Icon from 'react-native-vector-icons/Feather';

type Props = TouchableOpacityProps & {
  text: string;
  onPress?: (arg?: any) => void;
  style?: ViewStyle;
  icon?: string;
  textStyle?: TextStyle;
  disabled?: boolean;
  colorModifier?:
    | 'confirm'
    | 'cancel'
    | 'complementary'
    | 'success'
    | 'error'
    | 'underlined';
};

export const CustomButton = React.memo((props: Props) => {
  const appliedStyles: ViewStyle[] = [styles.button];
  appliedStyles.push(styles.row);
  if (props.disabled) {
    appliedStyles.push(styles.disabled);
  }
  if (props.colorModifier) {
    appliedStyles.push(styles[props.colorModifier]);
  }
  if (props.style) {
    appliedStyles.push(props.style);
  }

  const textStyles: TextStyle[] = [styles.text];

  switch (props.colorModifier) {
    case 'cancel':
      textStyles.push(styles.textColorPrimary);
      break;
    case 'underlined':
      textStyles.push(styles.textColorPrimary);
      textStyles.push(styles.textStyleUnderlined);
      break;
  }
  if (props.textStyle) {
    textStyles.push(props.textStyle);
  }

  return (
    <>
      <TouchableOpacity
        style={appliedStyles}
        onPress={props.onPress}
        disabled={props.disabled}>
        {props.icon && (
          <Icon style={styles.icon} name={props.icon} size={20} color="#ffff" />
        )}
        <Text style={textStyles}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
});

const styles = StyleSheet.create({
  button: {
    minHeight: 40,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: FontSizes.default,
    color: 'white',
  },
  textColorPrimary: {
    color: Colors.primary,
  },
  textStyleUnderlined: {
    textDecorationLine: 'underline',
  },
  disabled: {
    opacity: 0.5,
  },
  confirm: {
    backgroundColor: Colors.primary,
  },
  error: {
    backgroundColor: Colors.error,
  },
  icon: {
    paddingRight: 10,
  },
  cancel: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  outline: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  complementary: {
    backgroundColor: Colors.complementary,
  },
  success: {
    backgroundColor: Colors.success,
  },
  underlined: {
    borderWidth: 0,
  },
  row: {
    flexDirection: 'row',
  },
});
