const { database } = require("../models/connection");

exports.getCrossesStats = async (req, res, next) => {
  try {
    const team = req.query.team;
    const formation = req.query.formation;
    const direction = req.query.direction;

    const matchObj = {
      "team._id": +team,
      event_type: "pass",
      "pass.subtypes": { $in: ["cross"] },
      coordinate_x: direction === "left" ? { $lte: 50 } : { $gt: 50 },
    };

    if (formation !== "all") matchObj["team.formation"] = formation;

    const cursor = database
      .collection("events")
      .aggregate([
        {
          $match: matchObj,
        },
      ])
      .project({
        _id: 0,
        player: "$player",
        receiver: "$pass.receiving_player",
        start_coordinate_x: "$coordinate_x",
        start_coordinate_y: "$coordinate_y",
        end_coordinate_x: "$pass.end_coordinate_x",
        end_coordinate_y: "$pass.end_coordinate_y",
        result: "$pass.result",
        match: {
          id: "$match._id",
          date: "$match.date",
        },
        types: "$pass.subtypes",
        opponent_team: "$opponent_team",
      });

    const crosses = await cursor.toArray();

    res.status(200).json({
      status: "success",
      results: crosses.length,
      data: {
        crosses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
