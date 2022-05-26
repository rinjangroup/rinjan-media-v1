const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10

const jwt = require('jsonwebtoken')

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: "false",
    saveUninitialized: "false",
    cookie: {
        expires: new Date(Date.now() + (30 * 86400 * 1000))
    }
}))

const db = mysql.createConnection({
    // user: 'sistemin_user',
    // host: 'localhost',
    // password: 'r~S(l[h*AsX4',
    // database: 'sistemin_PemodalanPetani'

    user: 'crowde',
    host: 'localhost',
    password: 'Password123#@!',
    database: 'rinjan_media'
});

db.connect(function(err) {
    if (err) {
        console.log('ERRror', err)
    } else {
        console.log("Connected!");
    }
    
  });

// ==============> Login/Register System START <=============================

app.post("/register", (req, res) => {
    
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.first_name
    const lastName = req.body.last_name
    const phoneNumber = req.body.phone_number
    const address = req.body.address
    const username = req.body.username

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err) {
            console.log(err)
        }

        db.query(
            `INSERT INTO users (email, password, first_name, last_name, phone_number, address, username) VALUES (?,?,?,?,?,?,'${firstName}${lastName}')`,
            [email, hash, firstName, lastName, phoneNumber, address, username],
            (err, result) => {
                if(err) {
                    res.send({ err })
                } else {
                    res.send({ message: "Berhasil register" })
                }
            }
        )
    })
})

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send("Yo, we need a token, please give it to us next time!")
    } else {
        jwt.verify(token, 'jwtSecret', (err, decoded) => {
            if (err) {
                res.json({ auth: false, message:"U failed to authenticated" })
            } else {
                req.userId = decoded.id;
                next()
            }
        })
    }
}

app.get('/isUserAuth', verifyJWT , (req, res) => {
    res.send("Yo, u are authenticated Congrats!")
})

app.get("/login", (req, res) => {
    
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false})
    }
})

app.post("/login", (req, res) => {
    
    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE email = ? OR username = ?",
        [username, username] ,
        (err, result) => {
            if(err) {
                res.send({ err })
            }
            if(result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 3600000
                        })
                        req.session.user = result

                        res.json({ auth: true, token: token, result: result })
                    } else {
                        res.json({ auth: false, message: "Email/password tidak sesuai!" })
                    }
                })
            } else {
                res.json({ auth: false, message: "Pengguna belum terdaftar" })
            }
        }
    )
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Running server on ${port}`)
})