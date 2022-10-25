const { database } = require("../models/connection");

exports.getTeams = async (req, res, next) => {
  try {
    const cursor = database.collection("teams").find().sort({ name: 1 });
    const teams = await cursor.toArray();

    res.status(200).json({
      status: "success",
      results: teams.length,
      data: {
        teams,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getFormations = async (req, res, next) => {
  try {
    const team = req.query.team;
    const cursor = database
      .collection("events")
      .aggregate([
        { $match: { "team._id": +team } },
        { $group: { _id: { formation: "$team.formation" } } },
      ])
      .sort({ "_id.formation": 1 });

    const formations = (await cursor.toArray()).map((el) => el._id.formation);

    res.status(200).json({
      status: "success",
      results: formations.length,
      data: {
        formations,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
