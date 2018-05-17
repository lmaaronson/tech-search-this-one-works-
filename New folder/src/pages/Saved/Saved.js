import React, { Component } from "react";

//import RemoveBtn from "../../Components/RemoveBtn";
import AddBtn from "../../Components/AddBtn";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem, SavedItem } from "../../Components/List";
import { Input, FormBtn } from "../../Components/Form";


class Saved extends Component {
    state = {
        savedJobs: [],
    };

    componentDidMount() {
        console.log("1!!!!!!!!!")
        API.getSavedJobs().then(res => {
            console.log('res', res.data);
            let savedJobs = res.data;
            this.setState({ savedJobs: savedJobs });            
        });
    }

    render() {
        return (
            <div>
                <br />
                <Container>
                    <Row>
                        <Col size="md-12">
                            {!this.state.savedJobs ? (
                                <h1 className="text-center">No Jobs to Display</h1>
                            ) : (
                                    <List>
                                        {this.state.savedJobs.map(job => {
                                            return (
                                                <SavedItem
                                                    key={job.id}
                                                    title={job.title}
                                                    url={job.url}
                                                    keywords={job.keywords}
                                                    companyName={job.company_name}
                                                    remove={() => this.removeJob(job.id)}
                                                    />
                                            );
                                        })}
                                    </List>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Saved;
