import React, { Component } from "react";
//import RemoveBtn from "../../components/RemoveBtn";
//import AddBtn from "../../components/AddBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, SearchItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

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
                                                        {job.title}  // task button here
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
