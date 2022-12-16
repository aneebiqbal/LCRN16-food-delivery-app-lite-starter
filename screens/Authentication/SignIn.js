import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import AuthLayout from './AuthLayout';
import {  FONTS, SIZES, COLORS, icons } from '../../constants';
import FormInput from '../../components/FormInput';
import utils from '../../utils/Utils';
import { CustomSwitch, TextButton, TextIconButtonLogin } from '../../components';


const SignIn = ({navigation}) => {
    const [email, setEmail ] = React.useState('')
    const [password, setPassword ] = React.useState('')
    const [emailError, setEmailError ] = React.useState('')

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != '' && password != ''
    }
    return (
       <AuthLayout
        title={'Lets Sign You In'}
        subtitle={'Welcome back our Food Partner'}
       >
        <View style ={{
            flex: 1,
            marginTop: SIZES.padding * 2
        }}>
            {/* form Input */}
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
                label={'Password'}
                secureTextEntry={!showPass}
                autoCompleteType="password"
                containerStyle={{
                    marginTop: SIZES.radius
                }}
                onChange={(value) => setPassword(value)}
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

            {/* save me and save password */}
            <View style={{
                flexDirection:'row',
                marginTop:SIZES.radius,
                justifyContent: 'space-between'
            }}>
                <CustomSwitch
                    value={saveMe}
                    onChange={(value) => setSaveMe(value)}
                />
                <TextButton
                    label={'Forgot Password'}
                    buttonContainerStyle={{
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                    onPress={() => navigation.navigate('ForgotPassword')}
                />
            </View>

            {/* sign in */}
            <TextButton
            label={'Sign In'}
            disabled={isEnableSignIn() ? false : true}
            buttonContainerStyle={{
                height: 55,
                marginTop: SIZES.padding,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                color: COLORS.primary,
                backgroundColor: isEnableSignIn() ? COLORS.primary :
                COLORS.transparentPrimray
            }}
            onPress={() => navigation.navigate('Home')}
            />

            {/* signup */}

            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: COLORS.darkGray,
                    ...FONTS.body3
                }}>
                    Don't have an account?
                </Text>
                <TextButton
                    label={'Sign Up'}
                    buttonContainerStyle={{
                        backgroundColor: null,
                        marginLeft: 3
                    }}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.h3
                    }}
                    onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </View>
            {/* Footer */}
            <View>
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
                        onPress={console.log('Facebook ')}
                    />
            </View>
       </AuthLayout>
    )
}

export default SignIn;