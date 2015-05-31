define(['views/editView', 'common/storage', 'models/User', 'controllers/listController'], function(EditView, Storage, User, ListController){
 
    function init(user){

        EditView.render();

        var user = JSON.parse(localStorage.currentItem);

        document.getElementById('user-name').value = user.name;

        bindEvents(user);
    }

 	function bindEvents(user){
        document.getElementById('update').addEventListener('click', function(){
            var users = Storage.loadList();
            var userName = document.getElementById('user-name').value;
             for (var i = 0, len = users.length; i < len; i++){
                if(users[i].name === user.name){
                    console.log(users[i].name);
                    users[i] = new User(userName);
                    
                    Storage.setCurrentItem(users[i]);
                    Storage.saveList(users);
                }
               
            }
            ListController.init();
        }, false);
    }

    return {
        init:init
    };
});