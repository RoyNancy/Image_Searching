
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
class ImageResults extends Component{
    state={
        open:false,
        currentImg:''
    }
    handleOpen=img=>{
        this.setState({open:true,currentImg:img})
    }
    handleClose=()=>{
        this.setState({open:false});
    }
    render()
    {
        let imageList;
        const {images}=this.props

        if(images)
        {
            imageList=(
                // image in one row  by coloum
              <GridList cols={3}>
                {  images.map(img=>(
                        <GridTile
                        title={img.tags}
                        key={img.id}
                        actionIcon={
                            <IconButton onClick={()=>this.handleOpen(img.largeImageURL)}>
                            <ZoomIn color="white" />
                            </IconButton>
                        }
                        >
                        <img src={img.largeImageURL} alt="" />
                        </GridTile>
                    ))
                }
                </GridList>
            )
        }
        else{
            imageList=null;
        }
        const actions=[
            <FlatButton  label="Close" primary={true} onClick={this.handleClose}/>
        ]
        return(
            <div style={{marginLeft:50,marginRight:50,marginTop:30}}>
            {imageList}
            {/* modal after clicking on zoomOut */}
            <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            <img src={this.state.currentImg} alt="" style={{width:'100%'}} />
            </Dialog>
            </div>
        )
    }
}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults;