import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { reflectorTypeModel } from "../Model/ReflectorType.model.js";

const reflectorTypeController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;

  /**
   * Check if BeamAngleTitle is not Exist
   */
  if (!Title) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, `ReflectorType ${Title} is Missing `));
  }

  /**
   * todo : Check is reflectorType Title is  already exist
   * @method: mongoose.find({Title:Tile})
   */
  const isExistbeamAngleList = await reflectorTypeModel.find({ Title: Title });
  if (isExistbeamAngleList.length) {
    return res
      .status(400)
      .json(new ApiError(400, null, `${Title} Ip Title Is Already Exist`));
  }

  /**
   * todo : make a new beamAngleListModel
   * @instance new reflectorTypeModel
   */

  const reflectorType = await new reflectorTypeModel({
    Title,
  }).save();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        reflectorType,
        `${Title} Iplist Created Sucessfull is Ok`
      )
    );
});

const getreflectorTypeList = asyncHandler(async (req, res) => {
  const AllreflectorTypeList = await reflectorTypeModel.find({});
  return res.status(200).json(new ApiResponse(200, AllreflectorTypeList));
});

export { reflectorTypeController, getreflectorTypeList };
