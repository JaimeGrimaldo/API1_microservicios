const {Router, query} = require("express");
const router = Router();
const _ = require("underscore")
const mysqlConnection = require("./database");
const cors = require("cors");

router.use(cors())

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

router.get("/usuarios",(req,res, next) => { 
    mysqlConnection.query("SELECT * FROM alumnos", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get("/:id",(req,res , next) => {
    const {id} = req.params;
    mysqlConnection.query("SELECT * FROM alumnos WHERE id = ?", [id],(err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.post("/registro/:nombre/:matricula",(req,res, next) => {
    const {id, nombre, matricula} = req.body;
    const query = "call AlumnosAddOrEdit2 (?)";
    mysqlConnection.query("insert into alumnos values (?,?,?)",[id,nombre,matricula]), (err,result,fields) => {
        console.log(result);
         if(!err) {
            res.json("Agregado")
         } else {
            console.log("Ha ocurrido un error:",err)
         }
    }
});


router.put("/:id",(req,res, next) => {
    const {nombre, matricula} = req.body;
    const {id} = req.params;
    const query = "call AlumnosAddOrEdit2 (?,?,?)"
    mysqlConnection.query(query,[id,nombre,matricula], (err,result,fields) => {
        if(!err) {
            res.json("Modificado")
        } else {
            console.log("Ha ocurrido un error:",err)
        }
    });
});

router.delete("/:id",(req,res, next) => {
    const {id} = req.params;
    mysqlConnection.query("delete from alumnos where id = ?",[id],(err,result,fields) => {
        if(!err) {
            res.json("Eliminado")
        } else {
            console.log("Ha ocurrido un error:",err)
        }
    })
});














// const datosAlumnos = require("./ejemplo.json");
// console.log(datosAlumnos)

// router.get("/",(req,res) =>{
//     res.json(datosAlumnos);
// });

// router.post("/",(req,res) =>{
//     const {nombre,cuatrimestre,matricula,materia_favorita} = req.body;
//     if (nombre && cuatrimestre && matricula && materia_favorita) {
//         const id = datosAlumnos.length + 1;
//         const nuevoAlumno = {...req.body,id};
//         console.log(nuevoAlumno)
//         res.json("Guardado.");
//         datosAlumnos.push(nuevoAlumno);
//         res.json(datosAlumnos);
//     } else {
//         res.send("No funcia.");
//     }
    
// });

// router.delete("/:id",(req,res) =>{
//     const {id} = req.params;
//     _.each(datosAlumnos,(alumno,i) => {
//         if (alumno.id == id) {
//             datosAlumnos.splice(i,1);
//         }
//     })
//     res.send(datosAlumnos);
// });

// router.put("/:id",(req,res) =>{
//     const {id} = req.params;
//     const {nombre,cuatrimestre,matricula,materia_favorita} = req.body;
//     if (nombre && cuatrimestre && matricula && materia_favorita) {
//         _.each(datosAlumnos,(alumno,i) => {
//             if (alumno.id == id) {
//                 alumno.nombre = nombre;
//                 alumno.cuatrimestre = cuatrimestre;
//                 alumno.matricula = matricula;
//                 alumno.materia_favorita = materia_favorita;
//             }
//         });
//         res.json(datosAlumnos)
//     } else {
//         res.json("Error de actualización")
//     }
// });
module.exports = router;