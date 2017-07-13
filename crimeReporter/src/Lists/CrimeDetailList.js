import React, { Component } from "react"
import { Button, Container,  Content, Form, Item, Input, Label } from "native-base"
import Midware from "../../src/Store/Mideware/Midware"
import { connect } from "react-redux"
import {ScrollView ,Text, View} from "react-native"

function mapStateToProps(state) {
    return {
        storeState: state,
        DataList: state.CrimeReducer.Data,
        loadState: state.CrimeReducer.getCrimeDetail,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getCrimeDataList: () => {
            dispatch(Midware.FetchCrimeData())
        }
    }
}

class CrimeList extends Component {

componentWillReceiveProps(prop){
    console.log(this.props)
}

    static navigationOptions={
        title:"Crime List"
    }

    getDetail() {
        this.props.getCrimeDataList()
    }

    render() {
        return (

            <Container>

                {this.getDetail()}

                {
                    this.props.DataList.map((m, v) => {
                        return (
                            <Content key={v}>
                                <Text></Text>
                                <Text></Text>
                                <Text>Name : {m.name}</Text>
                                <Text>Issue : {m.issue}</Text>
                                <Text>Email : {m.email}</Text>
                                <Text>Address : {m.address}</Text>
                                <Text></Text>
                                <Text></Text>
                            </Content>
                        )
                    })
                }

                
               
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CrimeList)


//  <Button onPress={this.getDetail.bind(this)} >
//                     <Text>click to get</Text>
//                 </Button>