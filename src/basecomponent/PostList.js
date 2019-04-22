import React from 'react'
import PostItem from './PostItem'


class PostList extends React.Component{

    constructor(props){
        super(props);
        this.state = {datas: [{id:1,vote:0, title:'react hellow world！',autor:'wzq',time:'2019-02-01'},{id:2,vote:1,title:'不要啊！',autor:'wzq',time:'2019-02-01'},]};
        this.openMenu = this.openMenu.bind(this);
    }

    componentDidMount(){
        document.addEventListener("click" ,this.openMenu);

    }
    componentWillUnmount(){
       // clearTimeout(this.timeoter)
       document.removeEventListener('click',this.openMenu);

    }
    openMenu(){
       // alert('click');
       
    }

    handVote(id){
        const datas =   this.state.datas.slice();
        for(let i=0;i<datas.length;i++){
            if(datas[i].id==id){
                datas[i].vote++;
                break;
            }
        }
        this.setState({datas:datas});
    }
    render(){
        
        return (
        <div>
            '列表！'
        <ul>
        {this.state.datas.map(item=><PostItem  vote={item.vote} postid={item.id} title={item.title} autor={item.autor} time={item.time} onClick={(i)=>{this.handVote(i)}}/>)}
        </ul>
        </div>);
    }

}

export default PostList;