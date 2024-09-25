const express = require('express');
const userRouter = express.Router();
const { PrismaClient } =require('@prisma/client');

userRouter.get('/', async(req, res) => {
    const prisma = new PrismaClient();
    await prisma.user.findMany().then((data) => {
        res.send(data);
    });

});

userRouter.get('/:id', async (req, res) => {
    const prisma = new PrismaClient();
    await prisma.user.findUnique({
        where: {
            id: req.params.id,
        },
    }).then((data) => {
        res.send(data);
    });
});

userRouter.post('/', async(req, res) => {
    const prisma = new PrismaClient();
    await prisma.user.create({
        data: {
            username: req.body.username,
            password: req.body.password,
        },
    }).then((data) => {
        res.send(data);
    });
});
userRouter.put('/:id', async(req, res) => {
    const prisma = new PrismaClient();
    await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            username: req.body.username,
            password: req.body.password,
        },
    }).then((data) => {
        res.send(data);
    });
});

module.exports = userRouter;