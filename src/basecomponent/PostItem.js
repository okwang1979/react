import React from 'react';

import like from '../image/note.png';

class PostItem extends React.Component{


    render(){
        const {title,autor,time,vote,postid} = this.props;
        return(
            <li><div>{title}</div>
                <div>{autor}</div>
                <div>{time}</div>
                <div><span><img src={like} onClick={()=>this.props.onClick(this.props.postid)}/></span><span>{vote}</span></div>
            </li>
        );
    }

 


}
export default PostItem;