import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../../common/PrimaryButton';
import { mainTheme } from '../../themes/mainTheme';
import { AuthStackParamList } from '../../types/navigation';
import GoogleSignUpButton from './components/GoogleSignUpButton';

type SignupScreenNavigationProps = NativeStackScreenProps<AuthStackParamList, "Signup">;

const SignupScreen = ({ route, navigation }: SignupScreenNavigationProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.blankSpace}></View>
            <View style={styles.normalSignInContainer}>
                <Text style={styles.normalSignInItem}>
                    Sign up to continue
                </Text>

            </View>
            <View style={styles.thirdPartySignInContainer}>
                <View style={styles.thirdPartySignInItem}>
                    <View style={styles.separatorContainer}>
                        <Text style={styles.separatorItem}>-------------</Text>
                        <Text style={styles.separatorItem}>
                            Or sign up with
                        </Text>
                        <Text style={styles.separatorItem}>-------------</Text>
                    </View>
                </View>
                <View style={styles.thirdPartySignInItem}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoItem}>
                            <GoogleSignUpButton />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blankSpace: {
        flex: 2,
    },
    normalSignInContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    normalSignInItem: {
        margin: 15,
    },
    thirdPartySignInContainer: {
        flex: 3,
        alignItems: 'center',
        margin: 5,
    },
    thirdPartySignInItem: {
        padding: 5,
    },
    separatorContainer: {
        margin: 5,
        flexDirection: 'row',
    },
    separatorItem: {
        padding: 5,
    },
    logoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5,
    },
    logoItem: {
        padding: 20,
    }
});