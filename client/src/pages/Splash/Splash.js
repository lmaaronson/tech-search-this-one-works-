import React, { Component } from "react";

//import RemoveBtn from "../../Components/RemoveBtn";
import AddBtn from "../../Components/AddBtn";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem, SearchItem } from "../../Components/List";
import { Input, FormBtn } from "../../Components/Form";
import "./Splash.css";


class Splash extends Component {

    //     // <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>

    //         $("#login").on("click", function (event) {
    //             event.preventDefault()
    // obj = {
    //             email: $("#email").val(),
    //         password: $("#password").val()
    //     }
    // $.ajax({
    //             type: "POST",
    //         url: "/signin",
    //         data: obj
    // }).then(function(res){
    //             window.location.replace("/dashboard")
    //         })
    // })


    render() {
        return (
            <div className="container text-center">
                <h1> Bootcamp Booster</h1>
                <h3>[subject to change]</h3>


                {/* <h1>Log in</h1>
                <form>
                    Email:<br />
                    <input type="text" name="email" /><br />
                    Password:<br />
                    <input type="password" name="password"/><br />
                        <input type="submit" value="Log in" id="login"/>
    </form> */}

                <div className="row justify-content-center">

                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="button" className="btn btn-dark">Log In</button>
                    </div>
                </div>

                
            </div>
        );
    }
}


export default Splash;
