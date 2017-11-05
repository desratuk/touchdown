const serve = require('koa-router-static');
const au = require('autoit');
au.Init();

const _sendKeys = (data) => (
    new Promise((resolve, reject) => {
        au.Send(data.keys);
        resolve({ 'message':'success' })
    })
);

module.exports = function (api) {
    /* eslint-disable no-invalid-this */

    api.post('/function/test', function * (next) {
        console.log(this.request.body);
        this.body = yield _sendKeys(this.request.body);
        yield next;
    });

    api.get('/*', serve('./www/'));

    /* eslint-enable no-invalid-this */
};
