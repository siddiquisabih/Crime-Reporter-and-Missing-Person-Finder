import React, { Component } from "react"
import { Container, Content, Text, Button } from "native-base"




class AdminMenu extends Component {
    render() {
        return (
            <Container>

                <Content>

                    <Button rounded style={style.comnButton} onPress={() => {
                        this.props.navigation.navigate('CrimeListComponent')
                    } }>
                        <Text>Crime List</Text>
                    </Button>

                    <Button rounded style={style.comnButton} onPress={() => {
                        this.props.navigation.navigate('CrimeFormComponent')
                    } }>
                        <Text>Report For Crime</Text>
                    </Button>

                    <Button rounded style={style.comnButton} onPress={() => {
                        this.props.navigation.navigate('MissingListComponent')
                    } }>
                        <Text>Missing Person List</Text>
                    </Button>

                    <Button rounded style={style.comnButton} onPress={() => {
                        this.props.navigation.navigate('PeopleComponent')
                    } }>
                        <Text>Report For Find Person </Text>
                    </Button>


                    <Button rounded style={style.comnButton} onPress={() => {
                        this.props.navigation.navigate('PeopleComponent')
                    } }>
                        <Text>Admin Panel</Text>
                    </Button>

                </Content>

            </Container>
        )
    }
}
export default AdminMenu

const style = {
    comnButton: {
        marginTop: 50,
        alignSelf: "center"
    }
}