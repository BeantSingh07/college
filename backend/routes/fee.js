const express = require('express');
const feeRouter = express.Router();
const { PrismaClient } =require('@prisma/client');

feeRouter.get('/', async(req, res) => {
    const prisma = new PrismaClient();
  await prisma.fee.findMany().then((data) => {
    res.send(data);
  });
}); 

feeRouter.get('/:id', async(req, res) => {
    const prisma = new PrismaClient();
    await prisma.fee.findUnique({
        where: {
            id: req.params.id,
        },
    }).then((data) => {
        res.send(data);
    });
});

feeRouter.post('/', async(req, res) => {
   const prisma = new PrismaClient();
   await prisma.fee.create({
        data: {
            feeSemester: req.body.feeSemester,
            feeAmount: req.body.feeAmount,
        },
}).then((data) => {
    res.send(data);
});
});

feeRouter.put('/:id', async(req, res) => {    
    const prisma = new PrismaClient();
   await prisma.fee.update({
        where: {
            id: req.params.id,
        },
        data: {
            feeSemester: req.body.feeSemester,
            feeAmount: req.body.feeAmount,
        },
    }).then((data) => {
        res.send(data);
    });
}); 

module.exports = feeRouter;