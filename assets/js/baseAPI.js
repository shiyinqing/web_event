$.ajaxPrefilter(function(options) {
    //每次调用$.get() $.post() $.ajax()的时候会先调用ajaxPrefilter
    console.log(options.url);
    options.url = 'http://ajax.frontend.itheima.net' + options.url

})