const express = require('express');
const studentRouter = express.Router();
const { PrismaClient } =require('@prisma/client');

studentRouter.get('/', async(req, res) => {
    const prisma = new PrismaClient();
    await prisma.student.findMany().then((data) => {
        res.send(data);
    });
});

studentRouter.get('/:id', async(req, res) => {
    const prisma = new PrismaClient();
    await prisma.student.findUnique({
        where: {
            id: req.params.id,
        },
    }).then((data) => {
        res.send(data);
    });
}); 

studentRouter.post('/', async(req,res)=>{
    const prisma = new PrismaClient();
    await prisma.student.create({
        data: {
            name: req.body.name,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            mobile: req.body.mobile,
            parentMobile: req.body.parentMobile,
            address: req.body.address,
            rollNumber: req.body.rollNumber,
            regNumber: req.body.regNumber,
            category: req.body.category,
            scholarshipType: req.body.scholarshipType,
            adhaarNo: req.body.adhaarNo,
            course: req.body.course,
            batch: req.body.batch,
            leetStatus: req.body.leetStatus,
            statusNow: req.body.statusNow,
            bloodGroup: req.body.bloodGroup,
            email: req.body.email,
            familyIncome: req.body.familyIncome,
            familyOccupation: req.body.familyOccupation,
        },
    }).then((data) => {
        res.send(data);
    });
})

studentRouter.put('/:id',async(req,res)=>{
    const prisma = new PrismaClient();
    await prisma.student.update({
        where: {
            id: req.params.id,
        },
        data: {
            name: req.body.name,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            mobile: req.body.mobile,
            parentMobile: req.body.parentMobile,
            address: req.body.address,
            rollNumber: req.body.rollNumber,
            regNumber: req.body.regNumber,
            category: req.body.category,
            scholarshipType: req.body.scholarshipType,
            adhaarNo: req.body.adhaarNo,
            course: req.body.course,
            batch: req.body.batch,
            leetStatus: req.body.leetStatus,
            statusNow: req.body.statusNow,
            bloodGroup: req.body.bloodGroup,
            dataValidated: req.body.dataValidated,
            email: req.body.email,
            familyIncome: req.body.familyIncome,
            familyOccupation: req.body.familyOccupation,
        },
    }).then((data) => {
        res.send(data);
    });
});

module.exports = studentRouter;