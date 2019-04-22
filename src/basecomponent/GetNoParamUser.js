import React from  'react' 

class GetNoParamUser extends React.Component{

//JSON.stringify(obj);

    constructor(props){
        super(props);
        this.state = {postUrl:"http://127.0.0.1:9001/getUser",user:"not query"}
        
        
    }



    handel(){

      
        const useUrl=this.state.postUrl;
      
 

        var component = this;

    fetch(useUrl,{
        mode:'cors',
        headers: {
            //"Content-Type": "application/json; charset=utf-8"
            'Accept': 'application/json'
        }

    }).then(
        (response)=> {
                 response.json().then((data)=>{
                     const user = data.name;
                     this.setState({user,user});
                     
                      
                 });
              }
          
    ).catch(function(e){
        console.log("error:"+e.toString());
    });
      


    }



   

    render(){
        return (
            <div>
                <div>{"request not params response json:"+this.state.postUrl}<button onClick={()=>this.handel()} >send</button></div>

                <div>{this.state.user}</div>
            </div>

        );
    }
}

export default GetNoParamUser;