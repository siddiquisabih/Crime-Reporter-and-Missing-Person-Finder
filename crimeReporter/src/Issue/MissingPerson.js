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

        sendMissingDetailToFirebase: (info) => {
            dispatch(Midware.SendMissingFormInfo(info))
        }
    }
}

class People extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            personName: '',
            address: '',
            lastSeen: '',
            number: '',
            height: '',

        }
    }

    sendCrimeData() {
        let crimeInfo = {
            email: this.state.email,
            address: this.state.address,
            lastSeen: this.state.lastSeen,
            number: this.state.number,
            personName: this.state.personName,
            height: this.state.height,
        }

        this.props.sendMissingDetailToFirebase(crimeInfo)
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Form >

                        <Item style={styles.marg}   >
                            <Label>Person's Name</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input multiline placeholder="Write person's Name Here "
                                onChangeText={personName => {
                                    this.setState({
                                        personName
                                    })
                                } }
                                />
                        </Item>

                        <Item style={styles.marg} >
                            <Label>Person's Height</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input multiline placeholder="Write His/Her Height"
                                onChangeText={height => {
                                    this.setState({
                                        height
                                    })
                                } }
                                />
                        </Item>

                        <Item style={styles.marg} >
                            <Label>where did you see him/her last time?</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input placeholder="Address"

                                onChangeText={address => {
                                    this.setState({
                                        address
                                    })
                                } }
                                />
                        </Item>

                        <Item style={styles.marg} >
                            <Label>Your Contact Number</Label>
                        </Item>

                        <Item style={styles.marg}>
                            <Input placeholder="0333-1234567"

                                onChangeText={number => {
                                    this.setState({
                                        number
                                    })
                                } }
                                />
                        </Item>




                        <Item style={styles.buttonStyle} >
                            <Button rounded
                                onPress={this.sendCrimeData.bind(this)}
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
export default connect(mapStateToProps, mapDispatchToProps)(People)

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
        marginTop: 20,
        marginBottom : 20,
    }
}