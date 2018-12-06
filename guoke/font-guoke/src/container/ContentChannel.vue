<template>
    <div style="margin-top: 50px;">
            <Xlist />
    </div>
</template>

<script>
    import Xlist from "../components/Xlist.vue";
    export default {
            data(){
             return {
                 channel:0
             }
            },
        components:{
            Xlist
        },
        methods :{
        setChannel(){//判断当前是什么路由
            var route = this.$router.history.current.path;
        switch (route){
            case "/home/hot":
            this.channel = 0;
            break;
            case "/home/frontier":
            this.channel = 1;
            break;
            case "/home/viewpoint":
            this.channel = 2;
            break;
            case "/home/visual":
            this.channel = 3;
            break;
            case "/home/fact":
            this.channel = 4;
            break;
            case "/home/lifestyle":
            this.channel = 5;
            break;
            case "/home/15yan":
            this.channel = 6;
            break;
           
           
      }
    }
  },
     mounted(){
         this.setChannel();
        
     },
     watch:{
        $route(){
        this.setChannel();
      }
    }
    }
        
</script>