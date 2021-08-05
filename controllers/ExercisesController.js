'use strict'
import db from '../config/database'

class ExercisesController {
	static index(req, res){
		var sql = "SELECT * FROM exercise";
		db.all(sql, (err, exercises) => {
			if (err) {
				res.status(500).json({'error': err.message});
				return;
			}
			res.json(exercises)
		});
	}

	static store(req, res){
		const { title, description, img, leftColor, rightColor } = req.body;
		const SQL = 'INSERT INTO exercise (title, description, img, leftColor, rightColor) VALUES (?,?,?,?,?)';
		const params = [title, description, img, leftColor, rightColor];

		let a = db.run(SQL, params, function (err) {
			if (err){
				res.status(500).json({'error': err.message});
				return;
			}
			res.req.body.id = this.lastID;
			res.json({
				'exercise': res.req.body
			});
		});
	}

	static details(req, res){
		var sql = "SELECT * FROM exercise WHERE id = ?"
		
		db.get(sql, req.params.id, (err, exercise) => {
			if (err) {
				res.status(500).json({'error': err.message});
				return;
			}
			res.json({
				exercise
			});
		});
	}

	static update(req, res){
    const { title, description, img, leftColor, rightColor, id } = req.body;
		const SQL = ` UPDATE exercise 
										SET title = ? ,
												description = ? ,
												img = ? ,
												leftColor = ?, 
												rightColor = ? 
                  WHERE id = ?`
    const params = [title, description, img, leftColor, rightColor, id];        
    db.run(SQL, params, (err) => {
      if (err){
          res.status(500).json({'error': err.message});
          return;
			}
      res.json({
        'exercise': res.req.body
      });
		});
  }

  static delete(req, res){
    const SQL = " DELETE FROM exercise WHERE id = ? "

    db.run(SQL, req.params.id, function (err) {
      if (err){
				res.status(500).json({'error': err.message});
				return;
			}
      res.json({
        'msg': 'deleted'
      });
    });
  }
}

export default ExercisesController;
