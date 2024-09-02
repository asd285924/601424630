// myLibrary.js
(function(global) {
    'use strict';

    // 定义一个功能方法
    function ShowFormalOffice(message) {
        alert(message);
    }

    // 将方法暴露给全局对象
    global.myLibrary = {
        showAlert: showAlert
    };

})(window);
