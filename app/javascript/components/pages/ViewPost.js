import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Badge,
  Row,
  Col,
  Button,
  Container
} from "reactstrap";
import { FaTrashAlt } from 'react-icons/fa'
import { Redirect } from "react-router-dom"

class ViewPost extends React.Component {
  constructor(props){
    super(props)
    this.state={
      success:false
    }
  }
  
  handleDelete = () => {
    this.props.deletePost()
    this.setState({success: true})
  }
  
  render () {
      let trash = false
      let prof = ""
      this.props.profiles.forEach((profile,index) => {
        if(profile.user_id === this.props.post.user_id){
          prof = profile
        }
      })
      if(this.props.current_user.id === this.props.post.user_id){
        trash = true
      }
      return (
          <div>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Card style={{ width: "60vh", boxShadow:"0px 0px 10px", marginTop:"3vh" }}>
                  <CardImg src={prof.image}/>
                  <CardBody>
                    <CardTitle>
                    {prof.name} , {this.props.post.location}
                    </CardTitle>
                    <CardText>
                    </CardText>
                    <CardText>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row style={{display:'flex', justifyContent:"center"}}>
            {trash?<FaTrashAlt style={{fontSize:"100px", color:"black"}} onClick={()=> this.handleDelete()}/>:<p> </p>}
            </Row>
            {this.state.success===true && <Redirect to="/"/>}
          </div>
      );
  }
}

export default ViewPost
