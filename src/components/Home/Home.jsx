import React,{ Component } from "react";
import styled,{withTheme} from 'styled-components';
import Intro from './Intro';
import ModeButton from '../utils/ModeButton';
import logo from '../../asset/logosh.png';
import { connect } from 'react-redux';
import { switchTheme } from '../../reducer';
import { Element } from 'react-scroll';
import routes from '../../static/routes';
import Menu from '..//utils/Menu';

const NIHAO = "你好!";
const INTRO = [
    'Welcome to my site',
    'My name is Salim Hartono'
];

class Home extends Component{
    render(){
        console.log(this.props);
        return(
            <Element name={routes.HOME.to}> 
                <Container themeMode={this.props.themeMode}>
                    <Wrapper>
                        <Image src={logo} alt="logo"/>
                        <ModeButton/>
                    </Wrapper>
                    <Greetings>{NIHAO}</Greetings>
                    <Intro strings={INTRO}/>
                    <Menu isHome={true} themeMode={this.props.themeMode}/>
                </Container>
            </Element>
        );
    }
}
const Container= styled.div`
    position: relative;
    color: ${props => props.themeMode.textColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    width: 100%;
`;
const Wrapper= styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-item: center;
`;
const Image= styled.img`
    max-width: 15%;
    object-fit: scale-down;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        max-width: 50%;    
    }
`;  
const Greetings = styled.div`
  text-align : center;
  color: #38c172;
  font-weigth: bold;
  font-size: ${props => props.theme.textSizes['4xl']};
  margin-top: ${props => props.theme.margin['2']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['2xl']};
  }
`;

export default connect(
    state =>({themeMode: state}),{ switchTheme }
)(withTheme(Home));