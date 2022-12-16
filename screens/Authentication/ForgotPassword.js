import React, { useState } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { FormInput, TextButton } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import utils from '../../utils/Utils';
import AuthLayout from './AuthLayout';

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('')

    const [emailError, setEmailError ] = useState('')

    function isEnableSendEmail() {
        return email != '' 
    }
    return (
        <AuthLayout
            title={'Forgot Password'}
            subtitle={'Enter your Email to recover your password'}
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View style={{
                flex: 1,
                marginTop: SIZES.padding * 2
            }}>
            <FormInput
                    label={'email'}
                    keyboardType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    //errorMsg={emailError}
                    appendComponent={
                        <View style={{
                            justifyContent:'center',
                        }}>
                            <Image
                                source={
                                        email == '' ||
                                        (email != '' &&
                                        emailError == '') ?
                                        icons.correct : icons.cross
                                    }
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == '' ? COLORS.gray :
                                    (email != '' && emailError == '' ) ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
            </View>
            {/* Button */}
            <TextButton
                label={'Send Email'}
                disabled= {isEnableSendEmail() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
                onPress={() => navigation.goBack()}
            />
        </AuthLayout>
    )
}

export default ForgotPassword;