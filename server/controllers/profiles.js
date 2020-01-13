const express = require("express")
const router = new express.Router()
const database = require("../database")

router.get("/profiles", async (_, response) => {
    try {
        const query = await database.query(`
            SELECT *
            FROM public.profiles
            LIMIT 10;
        `)
        response.json(query.rows)
    }

    catch(error) {
        console.error(error)
    }
})

module.exports = router