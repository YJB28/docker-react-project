import express from 'express';
import { createConnection } from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

const conn=createConnection({
    host: "localhost",
    user: "yjb",
    password: "yjb",
    database: "dockerproject"
});
conn.connect((error)=>{
    if (error) {
        console.log(error);
    }
    else{
        console.log("Database connected !");
    }
});

app.post('/registerUser',(request,response)=>{
    var insertQry=`INSERT INTO user VALUES(
        ${request.body.rollno},'${request.body.name}',
        '${request.body.email}',${request.body.phoneno})`
    conn.query(insertQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in inserting student'});
        }
        else{
            response.status(200).send({message:'Student registered successfully'});
        }
    });
});

app.get('/students',(request,response)=>{
    var selectQry="SELECT * FROM student";
    conn.query(selectQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in fetching students'});
        } else {
            response.status(200).send(result);
        }
    })
});
app.get('/students/:id',(request,response)=>{
    var selectQry="SELECT * FROM student WHERE id="+request.params.id;
    conn.query(selectQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in fetching students'});
        } else {
            response.status(200).send(result);
        }
    })
});

app.delete('/students/:id',(request,response)=>{
    var deleteQry="DELETE FROM student WHERE id="+request.params.id;
    conn.query(deleteQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in deleting students'});
        } else {
            response.status(200).send({message:'Successfully deleted student'});
        }
    })
});

app.get('/students/name/:pattern',(request,response)=>{
    var fetchQry=`SELECT * FROM student WHERE name like '${request.params.pattern}%'`;
    conn.query(fetchQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in fetching students'});
        } else {
            response.status(200).send(result);
        }
    });
});


// app.post('/registerUser',(request,response)=>{
//     var insertQry=`INSERT INTO User VALUES(
//         '${request.body.name}','${request.body.district}',
//         '${request.body.phone}','${request.body.email}','${request.body.password}')`
//     conn.query(insertQry,(error,result)=>{
//         if (error) {
//             response.status(500).send({message:'Error in inserting student'});
//         }
//         else{
//             response.status(200).send({message:'Student registered successfully'});
//         }
//     });
// });



app.listen(9800,()=>{
    console.log('listening on 9800');
});