define([], function () {
    'use strict';

    function saveList(list) {
        localStorage.users = JSON.stringify(list);
    }    

    function loadList() {
        if(localStorage.users != undefined){
            return JSON.parse(localStorage.users);
        }else{
            return [];
        }       
    }

    function getItem(itemName) {
        if(localStorage.users != undefined){
            var x,
                list = JSON.parse(localStorage.users),
                length = list.length;

            for (x = 0; x < length; x += 1) {
                if(list[x].name === itemName){
                    return list[x]; 
                }
            }
        }
    }

    function getCurrentItem() {
        return localStorage.currentItem;
    }

    function setCurrentItem(item) {
         localStorage.currentItem = JSON.stringify(item);
    }


    return {
        saveList: saveList,
        loadList: loadList,
        getItem: getItem,
        setCurrentItem: setCurrentItem,
        getCurrentItem: getCurrentItem
    };
    
});