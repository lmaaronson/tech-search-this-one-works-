


const dataObject = {
  id:           data.listings.listing[i].id,
  title:        data.listings.listing[0].title,
  description:  data.listings.listing[i].description,
  post_date:    data.listings.listing[i].post_date,
  company_name: data.listings.listing[i].company.name,
  city :        data.listings.listing[i].company.location.city,
  state :       data.listings.listing[i].company.location.state,    
  keywords :    data.listings.listing[i].keywords,
  apply_url :   data.listings.listing[i].apply_url,
  url :         data.listings.listing[i].url,
}