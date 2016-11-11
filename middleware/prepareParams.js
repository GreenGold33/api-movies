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
	}

	req.limit = limit;
	req.skip = skip;

	next()
}

module.exports = prepareParams