const config = require('config');
const mongoose = require('./libs/mongoose');

const Router = require('koa-router');
let router = module.exports = new Router();
router
    .param('mailID', function*(id, next) {
        if (!mongooseose.Types.ObjectId.isValid(id)) {
            this.throw(404);
        }

        this.mailID = yield Mail.findById(id);

        if (!this.mailID) {
            this.throw(404);
        }
        yield * next;
    })

router.post('/api/mail/create/', require('./mail/api').post);
router.get('/api/mail/show/', require('./mail/api').get);
router.delete('/api/mail/del/:id', require('./mail/api').delete);
router.getOne('/api/mail/:id', require('./mail/api').getOne)
