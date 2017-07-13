import React, { Component } from "react"
import { Button, Container, Text, Content, Form, Item, Input, Label } from "native-base"
import Midware from "../Store/Mideware/Midware"
import { connect } from "react-redux"



function mapStateToProps(state) {
    return {
        storeState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {

        loginMethod: (userDetail) => {
            dispatch(Midware.LoginUser(userDetail))
        }

    }
}

class Login extends Component {

    componentWillReceiveProps(prop) {
 
      if(prop.storeState.Reducer.adminLogin){
          prop.navigation.navigate('adminPanelComponent')
      }

        
      else if (prop.storeState.Reducer.isLoading) {
            prop.navigation.navigate('MenuComponent')
        }



    }



    static navigationOptions = {
        title: 'Login'

    }


    constructor() {
        super()
        this.state = {
            email: '',
            pass: ''
        }
    }




    userlogin() {

//isko key k through karna hai admin email ko

        // let adminId = "check1@gmail.com"
        let userIdPass = {
            email: this.state.email,
            pass: this.state.pass
        }
        // if(this.state.email === adminId)
        // {

        // }


        this.props.loginMethod(userIdPass)
        console.log(this.props.storeState)
    }


    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={email => {
                                    this.setState({
                                        email
                                    })
                                } }
                                value={this.state.email}
                                />
                        </Item>

                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry
                                onChangeText={pass => {
                                    this.setState({
                                        pass

                                    })
                                } }
                                value={this.state.pass}

                                />
                        </Item>
                        <Item style={styles.buttonStyle} >
                            <Button
                                onPress={this.userlogin.bind(this)}
                                rounded >
                                <Text>
                                    Login
                           </Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = {
    buttonStyle: {
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginTop: 30
    },
}