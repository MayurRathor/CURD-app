import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const UserDB = [
    {
        "fname": "2",
        "lname": "2",
        "age": "2",

    },
    {
        "fname": "1",
        "lname": "1",
        "age": "1",

    }
]; // Database

router.get('/', (req, res) => {
    res.send(UserDB)
})

router.post('/', (req, res) => {
    const UserData = req.body;
    UserDB.push({ ...UserData, "id": uuidv4() });
    res.send(`${UserData.fname} added`)
})

router.get('/:id', (req, res) => {
    const UserDI = req.params;
    console.log(UserDI.id)
    const userFind = UserDB.map((data) => console.log(data))
    res.send(userFind)
})

export default router;