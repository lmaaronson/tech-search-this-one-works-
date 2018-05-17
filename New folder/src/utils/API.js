import axios from "axios";

// The getJobs method retrieves jobs from the server
// It accepts a "query" or term to search the jobs api for
export default {
  getJobs: function(query) {
    return axios.get("/api/searchJobs", { params: { q: query } });
  },
  getSavedJobs: function() {
    return axios.get("/api/savedJobs");
  },
  addJob: function(obj) {
    console.log('addJob obj', obj);
    return axios.post("/api/searchJobs/save", obj);
  }
};


// id,title,description,post_date,company_name,company_city,_company_state,keywords,apply_url,company_url