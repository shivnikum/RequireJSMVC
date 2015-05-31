requirejs.config({
    /*baseUrl: '../app',*/
    deps:['main'],
    paths: {
       "app":"../app",
       "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
       'text':'//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
    }
});