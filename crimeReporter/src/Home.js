import React ,  {Component} from "react"
import { Button , Text , Container , Content } from "native-base"

class Home extends Component{
static navigationOptions ={
    title : 'Home'
}
    render(){
        const {navigate} = this.props.navigation
        return(
            <Container  >
<Container style={styles.container}>

<Content>

            <Button style={styles.button} onPress={()=>{
                navigate('LoginComponent')
            }}>
            <Text>Login</Text>
            </Button>

            <Button style={styles.button} onPress={()=>{
                navigate('RegisterComponent')
            }}>
            <Text>Register</Text>
            </Button>

</Content>
</Container>
            </Container>


        )
    }
}
export default Home



const styles={
    
    container:{
alignSelf : 'center',
        
    },


button:{

    marginTop : 100
}
}
