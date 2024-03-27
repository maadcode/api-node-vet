const petService = require('../services/petService');

exports.getPet = async (req, res) => {
  try {
    const { document } = req.query;
    const petResult = await petService.getPetByDocumentInBlockchain(document);
    return res.status(200 ).json(petResult);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};