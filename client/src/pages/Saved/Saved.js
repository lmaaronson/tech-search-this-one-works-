import React, { Component } from "react";
//import RemoveBtn from "../../components/RemoveBtn";
//import AddBtn from "../../components/AddBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, SearchItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Saved.css";

export default class Saved extends Component {
    state = {
        savedJobs: []
    };

    componentDidMount() {
        API.getSavedJobs().then(res => {
            console.log('res', res);
            let savedJobs = res.data;
            this.setState({ savedJobs });
        });
    }

    render() {
        return (
            <div>
                <br />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    {
                                        this.state.savedJobs.map(job => {
                                            return (
                                                <Row>
                                                    <Col size="md-12">
                                                        <p>
                                                            <div class="card w-75">
                                                                <div class="card-body">
                                                                    <h5 className="card-title">{job.title}</h5>
                                                                    <p class="card-text">    </p>
                                                                    {/* <a href="#" class="btn btn-primary mr-3">Apply</a>
                                                                    <a href="#" class="btn btn-primary mr-3">Delete</a> */}
                                                                    
                                                                    
                                                                    <div class="form-group mt-3">
                                                                        {/* <label for="exampleFormControlTextarea1">Add a comment</label> */}
                                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="[profanities]"></textarea>
                                                                    </div>

                                                                </div>
                                                            </div>



                                                        </p>

                                                    </Col>
                                                </Row>
                                            );
                                        })
                                    }
                                </Container>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
