


const dataObject = {
  id:           data[i].PositionID,
  title:        data[i].PositionTitle,
  description:  data[i].QualificationSummary,
  post_date:    data[i].publication,
  company_name: data[i].OrganizationName,
  city :        data[i].PositionLocation.CityName,
  state :       data[i].PublicationLocation.LocationName,    
  keywords :    data[i].keywords,
  apply_url :   data[i].ApplyURI,
  url :         data[i].URI,
}