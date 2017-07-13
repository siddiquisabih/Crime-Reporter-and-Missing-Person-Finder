import React, { Component } from "react"
import { Button, Container, Text, Content, Form, Item, Input, Label } from "native-base"
import { connect } from "react-redux"
import Midware from "../../src/Store/Mideware/Midware"

function mapStateToProps(state) {
    return {
        storeState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {

        sendDataMethod: (data) => {
            dispatch(Midware.SendCrimeFormInfo(data))
        }
    }
}

class CrimeForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            issue: '',
            address: '',
            name : ''
        }
    }

    sendData() {
        let crimeInfo = {
            email: this.state.email,
            issue: this.state.issue,
            address: this.state.issue,
            name : this.state.name
        }

        this.props.sendDataMethod(crimeInfo)
        {console.log(this.props.storeState)}
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Form >

                        <Item style={styles.marg}   >
                            <Label>Name</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input multiline placeholder="Enter Your Name Here "
                                onChangeText={name => {
                                    this.setState({
                                        name
                                    })
                                } }
                                />
                        </Item>




                        <Item style={styles.marg}   >
                            <Label>What is Your Issue?</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input multiline placeholder="Write Your Issue Here "
                                onChangeText={issue => {
                                    this.setState({
                                        issue
                                    })
                                } }
                                />
                        </Item>

                        <Item style={styles.marg} >
                            <Label>Where It Happen?</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input multiline placeholder="Write Your Address Here"
                                onChangeText={address => {
                                    this.setState({
                                        address
                                    })
                                } }
                                />
                        </Item>

                        <Item style={styles.marg} >
                            <Label>Your Email</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input placeholder="abc@example.com"

                                onChangeText={email => {
                                    this.setState({
                                        email
                                    })
                                } }
                                />
                        </Item>

                        <Item style={styles.buttonStyle} >
                            <Button rounded
                                onPress={this.sendData.bind(this)}
                                >
                                <Text>
                                    Submit
                           </Text>
                            </Button>
                        </Item>

                    </Form>
                </Content>
            </Container>
        )
    }
}
export default connect(mapStateToProps , mapDispatchToProps) (CrimeForm)

const styles = {
    marg: {
        marginBottom: 20
    },
    container: {
        marginTop: 15
    },
    buttonStyle: {
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginTop: 30
    }
}