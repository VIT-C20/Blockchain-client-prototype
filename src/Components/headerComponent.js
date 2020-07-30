import React, { Component } from 'react';
import {Navbar,NavbarToggler,NavItem,Nav,Collapse,Form,FormGroup,Label,Input,Button,Modal,ModalHeader,ModalBody} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export default class Header extends Component{

    state = {
        isNavOpen:true,
        isModalOpen:false,

        //form details
        username:"",
        orgname:""
    }

    toggleNav = () => {
        this.setState({
            ...this.state,
            isNavOpen:!this.state.isNavOpen,
        });
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            isModalOpen:!this.state.isModalOpen,
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    handleLogin = (event) => {
        
        //form submission 
        axios.post("http://localhost:4000/users",{
            username:this.state.username,
            orgName:this.state.orgname,

        }).then((res) => {
            console.log(res.data);
            localStorage.setItem('FBIdToken',`Bearer ${res.data.token}`);
            
        }).catch(err => {
            console.log("post request failed !!");
        });
        
        this.setState({
            ...this.state,
            isModalOpen: !this.state.isModalOpen,
        });
        event.preventDefault();
    }

    render(){
        return(
            <>
            <Navbar  expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}><span><i className="fa fa-bars"></i></span></NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/allTenders">All Tenders</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/applyTender">Apply Tender</NavLink> 
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" onChange={this.handleChange} innerRef={(input)=>this.username=input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="orgname">Organization Name</Label>
                            <Input type="text" id="orgname" name="orgname" onChange={this.handleChange} innerRef={(input)=>this.password=input}></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}/>Remember me
                            </Label>                    
                        </FormGroup>
                        <Button type="submit" color="primary" value="submit" onClick={this.handleLogin}>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}
