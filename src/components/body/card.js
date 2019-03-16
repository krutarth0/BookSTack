import React, {Fragments} from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import Button from "../CustomButtons/Button.jsx";
import BookDetails from "../BookDetails"
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.jsx";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid"
import { cardTitle } from "../../assets/jss/material-kit-react.jsx";
import { unstable_Box as Box } from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import W from "./W.jpeg"

const style = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  },
  profileImgContainer: {
  marginLeft: 8,
  height: 82,
  width: 82,
  borderRadius: 40,
  borderWidth: 1
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    Shadow:20
  },
};

class Cards extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      showDetails:false,
      margin : 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  mouseHover = (event) => {
      return (
        console.log(this.props.id)
      )
  }

  handleClick = () => {
    return(
      this.setState({
        showDetails: true
      })
    )
  }

  detailsClose = () => {
    return(
      this.setState({
        showDetails: false
      })
    )
  }

  render() {
    const { classes } = this.props;
    var data = this.props;
    return (
      <div>
      <Card style={{width: "20rem" , position: "relative"}}>
        <CardHeader color="none" onMouseOver={
          (e) => {this.mouseHover()}}>
          <Grid container cols={2}>
          <Grid item>
          <Paper elevation={12} className={classes.profileImg}><img
          className={classes.profileImg}
          src={W}/></Paper>
          </Grid>
          <Grid item>
          <h3 style={{marginTop:"35px", marginLeft:"15px"}}>UserName</h3>
          </Grid>
          </Grid>
        </CardHeader>
        <Divider />
        <CardBody>
          <h4 className={classes.cardTitle}>{data.title}</h4>
          <p>
            {data.ts}
          </p>
          <Button
          color="primary"
          onClick={(e) => {this.handleClick(e, data)}}
          >See Full Post
          </Button>
        </CardBody>
      </Card>
      {
        this.state.showDetails === true ?
         <BookDetails open={true} book={data} close={this.detailsClose}/> :
         <Divider />
      }


      </div>
    );
  }
}


export default withStyles(style)(Cards);
