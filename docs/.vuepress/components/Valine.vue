<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
    name: 'Valine',
    mounted: function(){
        // require window 
        const Valine = require('valine');
        if (typeof window !== 'undefined') {
            this.window = window
            window.AV = require('leancloud-storage')
        
        }
     
        new Valine({
            el: '#vcomments' ,
            appId: 'nKbBPn7copWpJhggo4BtA6XB-gzGzoHsz',// your appId
            appKey: 'eWUrGuebD7jNVljOxMwwTtUI', // your appKey
            notify: false, 
            verify: false, 
            avatar: 'mm', 
            placeholder: '请输入评论' 
        });
    },
}
</script>