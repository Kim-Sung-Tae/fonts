import React, {Component} from 'react';
import { Button,Badge , Card, CardImg, CardText, CardBody,
CardTitle,CardSubtitle} from 'reactstrap';
import './ContentStrap.css';

   // <></> : 부모를 만들어 주어야 함

class ContentStrap extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            naviDb : [
                {
                    src : "https://th.wallhaven.cc/small/e7/e7ek7k.jpg",
                    tilte : '환환',
                },
                {
                    src : "https://th.wallhaven.cc/small/8o/8ok7vk.jpg",
                    tilte : "계단",
                },
                {
                    src : "https://th.wallhaven.cc/small/g7/g75r7d.jpg",
                    tilte : "하늘",
                },
            
            ],
        }
    }


    

    render(){
        return(
            <div className="container">
                <div className="container">
                
            
                </div>
                <div id='gallery' className='row'>
                    <Card className="col-4 border-1">
                        <CardImg top width="100%" src={this.state.naviDb[0].src} alt="Card image cap" className="m-auto"></CardImg>
                        <CardBody>
                            <CardTitle>{this.state.naviDb[0].title}</CardTitle>
                            <CardSubtitle>Card CardSubtitle</CardSubtitle>
                            <CardText className="text-truncate">Some CardText</CardText>
                            <Button class='onebutton' href="https://www.naver.com">매거진 보기</Button>
                        </CardBody>    
                    </Card>
                    <Card className="col-4 border-1">
                    <CardImg top width="100%" src={this.state.naviDb[1].src} alt="Card image cap" className="m-auto"></CardImg>
                        <CardBody>
                            <CardTitle>{this.state.naviDb[0].title}</CardTitle>
                            <CardSubtitle>Card CardSubtitle</CardSubtitle>
                            <CardText className="text-truncate">Some CardText</CardText>
                            <Button className="btn-float-right">매거진 보기</Button>
                        </CardBody>    
                    </Card>
                    
                    <Card className="col-4 border-1">
                    <CardImg top width="100%" src={this.state.naviDb[2].src} alt="Card image cap" className="m-auto"></CardImg>
                        <CardBody>
                            <CardTitle>{this.state.naviDb[0].title}</CardTitle>
                            <CardSubtitle>Card CardSubtitle</CardSubtitle>
                            <CardText className="text-truncate">Some CardText</CardText>                    
                            <Button className="btn-primary">매거진 보기</Button>

                            
                            

                           
                        </CardBody>    
                        
                    </Card>


                </div>
                



                
                

              
                
            </div>  

            
              
          
        );
    }


}







export default ContentStrap;