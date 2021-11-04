const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {    
    try {
        const sql = await pool.query('select * from users');
        if(sql.length > 0) {
            res.json(sql);
        } else {
            res.send('there are not results');
        }
    } catch(error) {
        console.log(error)
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const sql = await pool.query('select * from users where id = ?', [id]);
        if(sql.length === 0) {
            res.send('there is not result');
        } else {
            res.json(sql);
        }
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {    
    try {
        await pool.query('INSERT INTO users SET ?', [req.body]);
        res.send('user added');
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;    
    try {
        await pool.query('update users set ? where id = ?', [req.body, id]);
        res.send('The user has been updated');
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('delete from users where id = ?', [id]);
        res.send('the user has been deleted');
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;