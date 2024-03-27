const axios = require('axios')

exports.getPetByDocumentInBlockchain = async (document) => {
  try {
    const url = process.env.URL_API_BLOCKCHAIN + '/pet';
    const params = { document: document};
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};