 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/profile.png");
         document.title = '⚠️对方正在挖掘你的秘密🙈...';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/profile.png");
         document.title = '哈哈上当了吧( ๑•̀ㅂ•́) ✧';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
