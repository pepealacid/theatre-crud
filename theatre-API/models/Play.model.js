const { Schema, model } = require("mongoose");

const playSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://www.decoratel.com/wp-content/uploads/2022/03/vista-frontal-patio-de-butacas-teatro-eliseo-campos-de-bilbao-423689_1080x675.jpg",
    },
    director: {
      type: String,
      default: "Unknown",
    },
    theatre: {
      type: String,
    },
    opinion: {
      type: String
    }
  },
  { timestamps: true }
);

const Play = model("Play", playSchema);

module.exports = Play;
