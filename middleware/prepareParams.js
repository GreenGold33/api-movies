function prepareParams(req, res, next) {

	let { size: limit=20, page=1, fields } = req.query;
	limit = +limit;

	const skip = ( limit * (page-1))+1;

	if (fields) {

		const projection = fields.split(',').reduce( (oProj, field) => {
			oProj[field] = 1;
			return oProj;
		}, {} )

		req.projection = projection;

		// const projectionObject = {};
		// const aFields = fields.split(','); // array w/ fields
		// for (let i=0; i<aFields.length; i++) {
		// 	let currentField = aFields[i]; // title | year ...
		// 	projectionObject[currentField] = 1
		// }

		// req.projection = projectionObject

	}

	req.limit = limit;
	req.skip = skip;

	next()
}

module.exports = prepareParams