import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import PrimaryButton from '../../common/PrimaryButton';
import useSignInGoogle from '../../hooks/useSignInGoogle'
import { mainTheme } from '../../themes/mainTheme';
import { AuthStackParamList } from '../../types/navigation';


type LoginScreenNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login'
>

const LoginScreen = ({ route, navigation }: LoginScreenNavigationProps) => {
  const [signInGoogle, loading] = useSignInGoogle()
  const handlePress = () => {
    navigation.navigate('Signup')
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroupContainer}>
        <View>
          <PrimaryButton
            text="Create an account"
            textColor={mainTheme.WHITE_COLOR}
            onPress={handlePress}
          />
        </View>
        <View style={styles.signInLabelContainer}>
          <Text style={styles.signInLabelItem}>Already have an account ?</Text>
          <TouchableHighlight
            onPress={signInGoogle}
            disabled={loading}
            style={styles.signInLabelItem}
          >
            <Text style={styles.signInButton}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  buttonGroupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  signInLabelItem: {
    margin: 5,
  },
  signInButton: {
    color: mainTheme.PRIMARY_COLOR,
  },
})