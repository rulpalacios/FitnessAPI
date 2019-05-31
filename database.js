import sqlite from 'sqlite3'

const DBSOURCE = `db_${process.env.NODE_ENV}.sqlite`

let db = new sqlite.Database(DBSOURCE, (err) => {
    if(err) {
        console.log(err.message)
        throw err
    } else {
        console.log('Connected to SQLite')
        db.run(`CREATE TABLE exercise (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            description text, 
            img text, 
            leftColor text,
            rightColor text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO exercise (title, description, img, leftColor, rightColor) VALUES (?,?,?,?,?)'
                db.run(insert, ["Technique Guides","Learn amazing street workout and calisthenics","https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06","#A74CF2","#617BFB"])
                db.run(insert, ["Skills Training","Learn the secrets of bodyweight techniques","https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2","#17EAD9","#6078EA"])
                db.run(insert, ["Strength Training","Train anytime, everywere and become a superhero!","https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916","#FAD961","#F76B1C"])
            }
        });
    }
})

export default db