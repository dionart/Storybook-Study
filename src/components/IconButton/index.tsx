import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

export type IconButtonProps = TouchableOpacityProps;

export const IconButton: React.FC<IconButtonProps> = ({children, ...props}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inner} {...props}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: Number.MAX_SAFE_INTEGER,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inner: {
    borderRadius: Number.MAX_SAFE_INTEGER,
    padding: 8,
  },
});
