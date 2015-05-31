define(function(){
     
    function render(parameters){
        var appDiv = document.getElementById('app');
 
        var users = parameters.users;
         
        var html = '<ul id="listId">';
        for (var i = 0, len = users.length; i < len; i++){
            html += '<li><a href="#edit">' + users[i].name + '</a></li>';
        }
        html += '</ul>';
         
        appDiv.innerHTML = html;
    }
 
    return {
        render:render
    };
});