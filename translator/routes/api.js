var express = require('express');
var router = express.Router();

const translate = require('google-translate-api');

//clear data
router.get('/v1/translate', function(req, res, next) {

	var returnVal = { status: 0  , error : 'Soemthing with unset variables'};

	languageFrom = 'ru';
	languageTo = 'en';

	if (req.query.language_from){
		languageFrom = req.query.language_from;
	}

	if (req.query.language_to){
		languageTo = req.query.language_to;
	}

	if (req.query.translate_text){
		translate(req.query.translate_text, {from: languageFrom, to: languageTo}).then(resolved => {
		   
			console.log(resolved);
		    //=> Ik spea Nederlands!
		    console.log(resolved.from.text.autoCorrected);
		    //=> false
		    console.log(resolved.from.text.value);
		    //=> I [speak] Dutch!
		    console.log(resolved.from.text.didYouMean);

			returnVal['status'] = 1;
			returnVal['translated_text'] = resolved.from.text.value;
			returnVal['error'] = 'none';
			if (resolved.from.text.autoCorrected){
				returnVal['did_you_mean'] = resolved.from.text.didYouMean;
			}
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(returnVal));

		    //=> true
		}).catch(err => {
			returnVal['error'] = err;
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(returnVal));
		});
	}else{
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(returnVal));
	}
});

module.exports = router;
