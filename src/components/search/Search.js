
import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'21468059-31758bad94811c7db912dbba4',
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <div>
            {/* header for search image */}
            <div style={{zIndex:'4',backgroundColor:'black',color:'white',textAlign:'center',padding:5,width:'100%',position:'fixed'}}>
            <h1>Search Photos</h1>
            <input type="text" 
            style=
            {{
                color:'black',
              justifyContent:'center',
              width:'50%',
              fontsize:30,
              borderColor:'blue',
              fontSize:20,
              textAlign:'center',
              padding:10,     
        }}
        placeholder="Search for images"
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
             /><span style={{margin:5}}><i class="fa fa-search" aria-hidden="true"></i></span></div>
<br />
{/* fetch image below the header */}
<div style={{position:'relative',zIndex:'3',marginTop:150}}>
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div></div>

        )
    }
}



export default Search;