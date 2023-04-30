const asyncHandler = require('express-async-handler')
const { Client, Environment, ApiError } = require("square");

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});


//  @desc   Get Catalog
//  @route  GET /api/quickStart
//  @access Public

const getCatalog = asyncHandler(async (req, res) => {
  const catalog = await client.catalogApi.searchCatalogObjects({});
  res.status(200).json(catalog.result)



  // } catch (error) {
  //   if (error instanceof ApiError) {
  //     error.result.errors.forEach(function (e) {
  //       console.log(e.category);
  //       console.log(e.code);
  //       console.log(e.detail);
  //     });
  //   } else {
  //     console.log("Unexpected error occurred: ", error);
  //   }
  // }
});


module.exports = {
  getCatalog,
}
