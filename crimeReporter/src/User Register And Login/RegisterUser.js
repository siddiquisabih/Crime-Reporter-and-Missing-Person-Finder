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
        registerMethod: (idPass) => {
            dispatch(Midware.RegisterUser(idPass))
        }

    }
}

class Register extends Component {

componentWillReceiveProps(prop){
    if(prop.storeState.Reducer.register){
        prop.navigation.navigate('MenuComponent')
    }

// console.log(prop  , 'component will receive prop')
// console.log(prop.storeState  , 'stores from component will receive prop')

}


    static navigationOptions = {
        title: 'Registration'
    }


    constructor() {
        super()
        this.state = {
            email: '',
            pass: ''

        }
    }

    userSignup() {

        let userDetail = {
            email: this.state.email,
            pass: this.state.pass
        }

        this.props.registerMethod(userDetail)
// console.log(this.props.storeState.Reducer.register)
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                            <Label >Last Name</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={email => {
                                    this.setState({
                                        email
                                    })
                                } }
                                value={this.state.email} />
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
                            <Button rounded
                                onPress={this.userSignup.bind(this)}
                                >
                                <Text>
                                    Register
                           </Text>
                            </Button>
                        </Item>

                    </Form>
                </Content>
            </Container>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styles = {
    buttonStyle: {
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginTop: 30
    },
}