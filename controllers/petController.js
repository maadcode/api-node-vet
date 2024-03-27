const petService = require('../services/petService');

exports.getPet = async (req, res) => {
  try {
    const { document } = req.query;
    const result = await petService.getPetByDocumentInBlockchain(document);
    if(result.code === 200 || result.code === 201) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json(result.errors[0]);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};