const axios = require('axios')
const Response = require('../models/responses/genericResponse');

exports.getPetByDocumentInBlockchain = async (document) => {
  try {
    let response = new Response();
    const url = process.env.URL_API_BLOCKCHAIN + '/pet';
    const params = { document: document};
    const responseAPI = await axios.get(url, { params });
    response.setData(responseAPI.data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};