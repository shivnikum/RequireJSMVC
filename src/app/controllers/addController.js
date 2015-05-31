define(['views/addView', 'common/storage', 'models/User','controllers/listController'], function(AddView, Storage,  User, ListController){
 
    function init(){
        AddView.render();
        bindEvents();
    }
 	
 	function bindEvents(){
        document.getElementById('add').addEventListener('click', function(){
            var users = Storage.loadList();

            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));    
            
            Storage.saveList(users);

            ListController.init();
        }, false);
    }

    return {
        init:init
    };
});