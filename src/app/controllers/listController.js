define(['views/listView', 'common/storage', 'models/User'], function(ListView, Storage, User){
     
    function init(){
        var users = Storage.loadList();
        ListView.render({users:users});
        bindEvents();
        window.location.hash = '#list';
    }
    
    function bindEvents(){
        document.getElementById('listId').addEventListener('click', function(e){
        	//console.log(event.target);
           var user;
        	if(e.target && e.target.nodeName == "A") {
                console.log(e.target.text + " was clicked");
                user = new User(e.target.text);
                Storage.setCurrentItem(user);
	        }

        }, false);
    }

    return {
        init:init
    };
});