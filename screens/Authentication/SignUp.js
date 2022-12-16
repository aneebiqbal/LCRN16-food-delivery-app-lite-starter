import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import AuthLayout from './AuthLayout';
import {  FONTS, SIZES, COLORS, icons } from '../../constants';
import utils from '../../utils/Utils';
import { FormInput, TextButton, TextIconButtonLogin } from '../../components';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const [emailError, setEmailError ] = useState('')
    const [usernameError, setUsernameError ] = useState('')
    const [passwordError, setpasswordError ] = useState('')
    
    function isEnableSignUp() {
        return email != '' && username != '' && password != ''
        && usernameError == '' && passwordError == ''
    }
    return (
        <AuthLayout
            title={'Getting Started'}
            subtitle={'Create an account to Continue'}
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            {/* form input and signUp */}
            <View style={{
                flex: 1,
                marginTop: SIZES.radius
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

                <FormInput
                    label={'UserName'}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View style={{
                            justifyContent:'center',
                        }}>
                            <Image
                                source={username =='' ||
                                (username != '' && usernameError
                                =='') ? icons.correct : icons.cross
                                }
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == '' ?
                                    COLORS.gray : (username != '' &&
                                    usernameError =='') ? COLORS.green :
                                    COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    label={'Password'}
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validatePassword(value, setpasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity style={{
                            width:40,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={
                                    showPass ? icons.eye_close : icons.eye
                                }
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                    </TouchableOpacity>
                }
            />
            {/* signUP & SignIn */}
        {<TextButton
            label={'Sign Up'}
            disabled={isEnableSignUp() ? false : true}
            buttonContainerStyle={{
                height: 55,
                alignItems: 'center',
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: isEnableSignUp() ? COLORS.primary :
                COLORS.transparentPrimray
            }}
            onPress={() => navigation.navigate('Otp')}
        />}

            <View style={{
                flexDirection:'row',
                marginTop: SIZES.radius,
                justifyContent:'center'
            }}>
                <Text style={{
                    color: COLORS.darkGray, ...FONTS.body3
                }}>Already have an Account? </Text>
                <TextButton
                    label={'Sign IN'}
                    buttonContainerStyle={{
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.h3
                    }}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>


        <View style={{marginBottom: 30}}>
                {/* Facebook */}
                    <TextIconButtonLogin
                        containerStyle={{
                            height:50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.blue
                        }}
                        icon={icons.fb}
                        iconPosition={'LEFT'}
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                        label= {'Continue With Facebook'}
                        labelStyle={{
                            marginLeft: SIZES.radius,
                            color: COLORS.white

                        }}
                        onPress={console.log('Facebook ')}
                    />
                {/* Google */}
                <TextIconButtonLogin
                        containerStyle={{
                            height:50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            marginTop:SIZES.radius,
                            backgroundColor: COLORS.lightGray2
                        }}
                        icon={icons.google}
                        iconPosition={'LEFT'}
                        iconStyle={{
                            tintColor: null
                        }}
                        label= {'Continue With Google'}
                        labelStyle={{
                            marginLeft: SIZES.radius,

                        }}
                        onPress={console.log('google ')}
                    />
            </View>
        </AuthLayout>
    )
}

export default SignUp;