const { response } = require("express");
const csv = require('csv-parser');
const fs = require('fs');
const formidable = require("formidable");
const {campanaCRM1} = require("../models/index");
const createCompania = async (req, res = response) => {
    try {
		const form = new formidable.IncomingForm();
		form.uploadDir = './public/temp';
		form.keepExtensions = true;
		

		// form.on('fileBegin', function (name, file) {
		// 	//rename the incoming file to the file's name
		// 	file.filepath =
		// 		form.uploadDir +
		// 		'/' +
		// 		'-' +
		// 		Date.now() +
		// 		file.originalFilename;
		// 	console.log('----->>', file.originalFilename);
		// 	console.log('Cambiando nombre ', file.path);
		// });
		
		// let formfields = await new Promise(function (resolve, reject) {
		//   form.parse(req, function (err, fields, files) {
		// 	if (err) {
		// 	  reject(err);
		// 	  return;
		// 	}
		// 	resolve({
		// 	  fields,
		// 	  files,
		// 	});
		//   });
		// });
		
		// const filepath = formfields.files.file.path;
        
		const users = [];

		fs.createReadStream('./controllers/Excel.csv')
			.pipe(csv())
			.on('data', (data) => users.push(data))
			.on('end', async () => {

				let newUsers = [];

				for (const user of users) {

					const { 
						nombres, 
						apellidos, 
						telefonos,
						direcciones
					}= user;

					const newUser = await campanaCRM1.create({
						codigo:1,
						nombres, 
						apellidos, 
						telefonos,
						direcciones,
					})
							
					newUsers.push(newUser);
				}
			fs.unlinkSync(filepath)
			res.send({newUsers, message: 'Agregado con exito'});
			});
	} catch (error) {
		console.log(error);
		res.send('Error!');
	}
};

module.exports = {
  createCompania,
};