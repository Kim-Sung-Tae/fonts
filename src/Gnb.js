import React,{Component} from 'react'
import $ from 'jquery'

class Gnb extends Component {
 // super  더 확장 부모까지 가진 기능, 접근성 ?  
 // json 앞에서
//  오브젝트 : 변수들의 그룹 , 묶는것
// ,(쉼표) : and
    constructor(prop){
        super(prop);
            this.state ={
                bbylink : this.props.gnbtext,
                bbyNm : this.props.gnbtext,
                bbyW : this.props.gnbtarget,
            }    
    }
   //함수 선언한것 
    render(){
        return(
            <li><a href={this.state.bbylink}>{this.state.bbyNm}{this.state.bbyw}</a></li>
        )

    }
}





export default Gnb;
