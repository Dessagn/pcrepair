$(function () {
        var captcha = new CAPTCHA({
            selector: '#captcha',
            width: 400,
            height: 200,
            onSuccess: function () { alert('Correct!'); }
        });
        captcha.generate();
    });