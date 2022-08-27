import React from 'react'
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import useSignInGoogle from '../../../hooks/useSignInGoogle';
import { mainTheme } from '../../../themes/mainTheme';

function GoogleSignUpButton() {
    const [signInGoogle, loading] = useSignInGoogle();
    return (
        <TouchableHighlight
          onPress={signInGoogle}
          disabled={loading}
        >
          <Icon name="google" size={30} color={mainTheme.PRIMARY_COLOR} />
        </TouchableHighlight>
    )
}

export default GoogleSignUpButton