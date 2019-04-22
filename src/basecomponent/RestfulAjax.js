import React from  'react' 
import axios  from 'axios'
class RestfulAjax extends React.Component{

//JSON.stringify(obj);

    constructor(props){
        super(props);
        this.state = {postObj:{name:"dddd"},postUrl:"http://106.13.96.214:8080/hello",queryName:{name:""}}
        
        
    }

    handel(){

        const postObj =this.state.postObj;
        const postUrl = this.state.postUrl;
        const queryName=this.queryName;
        const value={name:"ddd"};
 

//         axios.get("http://127.0.0.1:9001/getUser",{

//         })
//         .then(function (response) {
//             console.log(response.json());
//         })
//   .catch(function (error) {
//     console.log(error);
//   });


//         axios.get("http://127.0.0.1:8080/hello3",{
//             method:"GET",
//             headers:{'Content-type':'application/json',},
           
     
//         })
//         .then(function (response) {
//             console.log(response);
//         })
//   .catch(function (error) {
//     console.log(error);
//   });


// fetch('http://api.map.baidu.com/geocoder/v2/callback=renderReverse&location=39.983424,116.322987&output=json&pois=1&ak=您的ak',{
//     // mode:'no-cors',
//     // credentials: 'include',
//     headers:{ Accept: 'application/json',},
   
//   })
//     .then( response => response.json() )
//     .then(data => console.log(data))



    // fetch("http://127.0.0.1:8080/hello3" ,{
    //     method:"POST",

      
        // fetch("http://127.0.0.1:8080/hello3",{
          
        //     headers:{'Content-type':'application/json',},
          
        // }).then(function(response) {
        //     return response.json();
        //   })
        //   .then(function(myJson) {
        //     console.log(myJson);
        //   });
        
    // })
    // .then(data =>{console.log(data)})

    //  fetch("http://127.0.0.1:8080/hello3" ,{
    //     headers:{'Content-type':'application/json',},

    //  })
    //       .then(data =>{console.log(data)})
    

        // fetch("http://127.0.0.1:8080/hello3" ,{
    //     method:"POST",

    fetch("http://127.0.0.1:9001/getUser").then(
        function(response) {
                return response.json();
              }
          
    );
        // fetch("http://127.0.0.1:8080/hello3",{
          
        //     headers:{'Content-type':'application/json',},
          
        // }).then(function(response) {
        //     return response.json();
        //   })
        //   .then(function(myJson) {
        //     console.log(myJson);
        //   });
        
    // })
    // .then(data =>{console.log(data)})


    }



   

    render(){
        return (
            <div>
                <div>{this.state.postUrl}<button onClick={()=>this.handel()} >send</button></div>

                <div>{this.state.queryName.name}</div>
            </div>

        );
    }
}

export default RestfulAjax;