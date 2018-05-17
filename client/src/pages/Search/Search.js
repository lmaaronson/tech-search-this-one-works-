import React, { Component } from "react";
//import RemoveBtn from "../../components/RemoveBtn";
//import AddBtn from "../../components/AddBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, SearchItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Search extends Component {
    state = {
        jobs: [],
        jobSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getJobs(this.state.jobSearch)
            .then(res => {
                var jobs = res.data.listing
                this.setState({ jobs: jobs });
            })
            .catch(err => console.log(err));
    };

    addJob = (obj) => {
        API.addJob(obj)
            .then(res => {
                //remove this listing? or update the list to remove all saved jobs?
            })
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
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="jobSearch"
                                                value={this.state.jobSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For a Job"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <FormBtn
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg">
                                                Search
                                            </FormBtn>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {!this.state.jobs ? (
                                <h1 className="text-center">No Jobs to Display</h1>
                            ) : (
                                    <List>
                                        {this.state.jobs.map(job => {
                                            return (
                                                <SearchItem
                                                    key={job.id}
                                                    title={job.title}
                                                    url={job.url}
                                                    keywords={job.keywords}
                                                    companyName={job.company.name}
                                                    add={() => this.addJob({
                                                        title: job.title,
                                                        description: job.description,
                                                        post_date: job.post_date,
                                                        company_name: job.company.name,
                                                        // company_city: job.company.city,
                                                        company_state: job.company.state,
                                                        keywords: job.keywords,
                                                        apply_url: job.url,
                                                        company_url: job.company.url
                                                    })}
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


export default Search;
