const express = require('express');
const promoRouter = express.Router()
promoRouter.route('/')
    .get((req, res) => {
        res.send('Will send all the promotions to you!');
    })
    .post((req, res) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promo');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });

promoRouter.route('/:promoId')
    .get((req, res) => {
        res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/' + req.params.dishId);
    })
    .put((req, res) => {
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
        res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting promotion: ' + req.params.promoId);
    });

module.exports = promoRouter;
