import React, { Component } from "react"
import { Button, Container, Text, Content, Form, Item, Input, Label } from "native-base"
import Midware from "../../src/Store/Mideware/Midware"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        storeState: state,
        DataList: state.PeopleReducer.Data


    }
}


function mapDispatchToProps(dispatch) {
    return {
        getMissingDataFromFirebase: () => {
     dispatch(Midware.FetchMissingPersonData())

        }
    }
}

class MissingList extends Component {
    static navigationOptions={
        title:"Missing Person List"
    }

    getDetail() {
        this.props.getMissingDataFromFirebase()
        // console.log(this.props.DataList, "missing data list")
    }

    render() {
        return (

            <Container>
                {
                    this.props.DataList.map((m, v) => {
                        return (
                            <Container key={v}>

                                <Text></Text>
                                <Text></Text>
                                <Text>Person's Name : {m.personName}</Text>
                                <Text>Person's Height : {m.height}</Text>
                                <Text>Last Seen : {m.lastSeen}</Text>
                                <Text>Number : {m.number}</Text>
                                <Text>Email : {m.email}</Text>
                                <Text>Address : {m.address}</Text>
                                <Text></Text>
                                <Text></Text>

                            </Container>
                        )
                    })
                }

                <Button onPress={this.getDetail.bind(this)} >
                    <Text>click to get</Text>
                </Button>
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MissingList)