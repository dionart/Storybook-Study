import React from 'react';
import styled from 'styled-components/native';
import {KeyboardAvoidingView, Modal, ModalProps, Platform} from 'react-native';

export type DialogProps = ModalProps;

export const Dialog: React.FC<DialogProps> = ({
  children,
  onRequestClose,
  ...props
}) => {
  return (
    <Modal
      {...props}
      onRequestClose={onRequestClose}
      animated
      transparent
      animationType="slide">
      <Container
        as={KeyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Overlay activeOpacity={1} onPress={onRequestClose} />
        {children}
      </Container>
    </Modal>
  );
};

export default Dialog;

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Overlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.1);
`;
