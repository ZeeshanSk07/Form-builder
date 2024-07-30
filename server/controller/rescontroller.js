const Response = require("../model/Response");
const PageView = require("../model/PageView");

const sendResponse = async (req, res) => {
  try {
    const typebotId = req.params.id;
    const { response } = req.body;

    if (!response || !typebotId) {
      return res
        .status(400)
        .json({ message: "response and typebot not found" });
    }

    const responseOne = new Response({
      response,
      typebotId,
    });
    await responseOne.save();
    res.status(201).json({
      message: "Response created successfully",
      responseid: responseOne._id,
    });
  } catch (err) {
    console.log(er);
    return res.status(500).json({ message: "Server error" });
  }
};

const getResponse = async (req, res) => {
  try {
    const typebotId = req.params.id;
    const response = await Response.find({ typebotId: typebotId });
    res.json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const setView = async (req, res) => {
  const { pageId } = req.body;

  try {
    const pageViews = await PageView.findOneAndUpdate(
      { pageId },
      { $inc: { views: 1 } },
      { new: true, upsert: true }
    );
    res.status(200).send({ views: pageViews.views });
  } catch (error) {
    console.error("Error updating view count:", error);
    res.status(500).send({ error: "Failed to record view" });
  }
};

const getViewCount = async(req, res) => {
  

  try {
    const pageId = req.params.id;
    console.log(pageId);
    const pageViews = await PageView.findOne({ pageId });
    res.status(200).send({ views: pageViews.views });
  } catch (error) {
    console.error("Error getting view count:", error);
    res.status(500).send({ error: "Failed to get view count" });
  }
};

module.exports = { sendResponse, getResponse, setView, getViewCount };
