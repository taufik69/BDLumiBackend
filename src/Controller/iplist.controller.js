import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ipModel } from "../Model/Ip.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const ipListController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;
  /**
   * Check if ipListTile is not Exist
   */
  if (!Title) {
    return res
      .status(400)
      .json(new ApiError(400, null, "Iplist Title Is Missing"));
  }
  /**
   * todo : check already have a same units
   * @method: mongoose.find({Title:Tile})
   */
  const isExistIpList = await ipModel.find({ Title });

  if (isExistIpList.length) {
    return res
      .status(400)
      .json(new ApiError(400, null, `${Title} Ip Title Is Already Exist`));
  }

  /**
   * todo : make a new IpLIST
   * @instance new ipModel
   */

  const Iplist = await new ipModel({
    Title,
  }).save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, Iplist, `${Title} Iplist Created Sucessfull is Ok`)
    );
});

const getAllIpist = asyncHandler(async (req, res) => {
  const AlldiIpList = await ipModel.find({});
  return res.status(200).json(new ApiResponse(200, AlldiIpList));
});

export { ipListController, getAllIpist };
