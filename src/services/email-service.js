'use strict';
var config = require('../config');
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(config.sendgridKey);

exports.send = async (to, subject, body) => {
    const msg = {
        to: to,
        from: 'teste@teste.com',
        subject: subject,
        html: body,
    };
    sendgrid.send(msg);
}