<template>
    <div>
    <!--顶部部分-->
        <div class="nav" id="nav" style="border-bottom: 1px solid rgb(238, 238, 238);">
            <div class="icon slide" data-ga="menu:open" id="slide" @click="ShowNav"></div>
            <div class="icon breadcrumb">
                <div class="logo-top"></div>
                <span v-text="this.title"></span><!--从vuex仓库中拿到title-->
            </div>
            <div class="icon searches search" @click="ShowSearch" v-show="!toShowSearch"></div>
            <div class="icon searches search-cancel " v-show="toShowSearch" id="searchCancel" @click="ShowSearch">取消</div>
        </div>
    <!--搜索隐藏部分-->
        <div class="search-box" id="searchBox" v-show="toShowSearch">
            <form action="/scientific/search">
                <input class="search-input" placeholder="搜索你感兴趣的内容" name="word">
                <input class="icon search" id="submitSearch" type="submit" value="">
            </form>
        </div>
    <!--搜索导航部分nav-->
        <div class="side animated " id="side" :class="{'fadeInLeft':toShowNav===true,'fadeOutLeft':toShowNav===false}" v-show="toShowNav">
            <div class="block logo">
                <a href="#/home" @click.stop="backHome"><img src="../img/logo-ed25de9c93.png"></a>
            </div>
            <div id="classified" class="classified" @click.stop="ShowUl($event)">
                <div class="classify"  ><a class="classify-title" :class="{active:nav <7}" data-item="0" href="javascript: void(0)"  data-expand="" v-bind:style="[toShowStyle?firstStyle:twoStyle]">专栏<div class="img menu-channel" v-bind:style="[toShowStyle?ImgStyle:imgStyle]"></div></a>
                    <ul v-show="toShowUl" >

                        <li  @click="SelectNav(index)" :key="index" v-for="(item,index) of navs"><i class="tag " :class="{active:nav === index}" data-key="hot">{{item.title}}<span>{{item.times}}</span></i></li>
                    </ul>
                </div>
                <div class="classify"  ><a data-item="1" class="classify-title" :class="{active:nav >9}" href="javascript: void(0)" data-expand="" v-bind:style="[toShowStyle?firstStyle:twoStyle]">学科<div class="img menu-subject" v-bind:style="[toShowStyle?ImgStyle:imgStyle]"></div></a>
                    <ul v-show="toShowUlTwo">
                    <li  @click="TwoSelectNav(index+10)" :key="index" v-for="(item,index) of navsTwo "><i class="tag " :class="{active:nav === (index+10)}" data-key="hot">{{item.title}}<span>{{item.times}}</span></i></li>   
                    </ul>
                </div>
                <div class="classify"><a class="classify-title " :class="{active:nav===7}" href="#/Video" data-expand="expand-none" v-bind:style="[toShowStyle?firstStyle:twoStyle]">果然知道<div class="img menu-grzd" v-bind:style="[toShowStyle?ImgStyle:imgStyle]"></div></a></div>
                <div class="classify"><a class="classify-title" v-bind:class="{active:nav===8}" href="#/Ask" data-expand="expand-none" v-bind:style="[toShowStyle?firstStyle:twoStyle]">问答<div class="img menu-ask" v-bind:style="[toShowStyle?ImgStyle:imgStyle]"></div></a></div>
            </div>
            <div class="bottom-part">
                <div class="user-message bottom-box">
                    <a href="#/login">登录</a>
                </div>
            </div>
        </div>
    <!--搜索导航部分遮罩层-->
        <div class="mask" id="mask" data-ga="menu:close" v-show="toShowNav" @click="HideNav"></div>
    <!--返回顶部-->
        <div class="tutu icon-fanhuidingbu" id="backTop" @click="backTop"  style="position:fixed;right:40px;bottom:45px;color:#ee9d14;z-index:1;font-size:45px;" v-show="top>100">
           
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            toShowSearch: false,//搜索栏
            toShowNav: false,//nav导航栏
            toShowStyle:true,//图片
            toShowUl:false,//ul是否显示
            toShowUlTwo:false,
            top:0,
            nav:0,//没有定义nav时警告：Property or method "nav" is not defined on the instance but referenced during render.属性或方法“nav”不是在实例上定义的，而是在呈现期间引用。
            firstStyle:{
                height:"75px",
                lineHeight:"75px",
                marginTop:"0px"
            },
            twoStyle:{
                height:"30px",
                lineHeight:"30px",
                marginTop:"20px"
            },
            ImgStyle:{
                height:"65px",
                width:"102px"
            },
            imgStyle:{
                width:"0px",
                height:"30px"
            },

            navs:[
                {
                    title:"热点",
                    times:"1961",
                    path:"hot",
                },
                {
                    title:"前沿",
                    times:"4259",
                    path:"frontier",
                },
                {
                    title:"观点",
                    times:"3821",
                    path:"viewpoint",
                },
                {
                    title:"视觉",
                    times:"787",
                    path:"visual",
                },
                {
                    title:"谣言粉碎机",
                    times:"613",
                    path:"fact",
                },
                {
                    title:"生活方式",
                    times:"217",
                    path:"lifestyle",
                },
                {
                    title:"十五言",
                    times:"2340",
                    path:"15yan",
                },

            ],

            navsTwo:[
                {
                    title:"生物",
                    times:"2691",
                    path:"biology",
                },
                {
                    title:"科幻",
                    times:"513",
                    path:"sci-fiction",
                },
                {
                    title:"传播",
                    times:"276",
                    path:"communication",
                },
                {
                    title:"数学",
                    times:"418",
                    path:"math",
                },
                {
                    title:"法证",
                    times:"422",
                    path:"forensic",
                },
                {
                    title:"DIY",
                    times:"540",
                    path:"DIY",
                },
                {
                    title:"环境",
                    times:"391",
                    path:"environment",
                },
                {
                    title:"化学",
                    times:"240",
                    path:"chemistry",
                },
                {
                    title:"教育",
                    times:"130",
                    path:"education",
                },
                {
                    title:"农学",
                    times:"79",
                    path:"agronomy",
                },
                {
                    title:"电子",
                    times:"786",
                    path:"electronics",
                },
                {
                    title:"地学",
                    times:"200",
                    path:"earth",
                },
                {
                    title:"心理",
                    times:"1354",
                    path:"psychology",
                },
                {
                    title:"食物",
                    times:"602",
                    path:"food",
                },
                {
                    title:"互联网",
                    times:"269",
                    path:"internet",
                },
                {
                    title:"大气",
                    times:"107",
                    path:"atmosphere",
                },
                {
                    title:"社会",
                    times:"384",
                    path:"society",
                },
                {
                    title:"物理",
                    times:"543",
                    path:"physics",
                },
                {
                    title:"工程",
                    times:"352",
                    path:"engineering",
                },
                {
                    title:"性情",
                    times:"450",
                    path:"sex",
                },
                {
                    title:"天文",
                    times:"494",
                    path:"astronomy",
                },
                {
                    title:"航空航天",
                    times:"277",
                    path:"aerospace",
                },
                {
                    title:"医学",
                    times:"1872",
                    path:"medicine",
                },
            ]
        }
    },
    methods: {
    //显示搜索框
        ShowSearch() {
            this.toShowSearch = !this.toShowSearch;
        },
    //显示nav栏
        ShowNav() {
            this.toShowNav = !this.toShowNav;

        },
    //隐藏nav栏
        HideNav() {
            this.toShowNav = !this.toShowNav;
            this.toshowStyle = true;
            this.toShowUl = false;
        },
    //显示列表导航栏
        ShowUl(e){
       this.toShowStyle = !this.toShowStyle;
        if(e.target.getAttribute("data-item")=="0"){
            this.toShowUl = !this.toShowUl;
            this.toShowUlTwo=false;
            
        }else if(e.target.getAttribute("data-item")=="1"){
            this.toShowUlTwo = !this.toShowUlTwo;
            this.toShowUl=false;
            }
        },
    //点击跳转路由，关闭nav栏
        SelectNav(nav){
                this.nav = nav;
                this.$router.push({ name: this.navs[nav].path});//拿到路由
                 //this.$router.push({ name: this.navsTwo[nav-10].path});//拿到路由
                this.toShowNav=false;//关闭nav导航栏
                this.toshowStyle = true;//开nav启图片
                this.toShowUl = false;//关闭ul
                localStorage.setItem("setTitle",this.navs[nav].title);//解决刷新页面销毁之前的资源，重新请求，因此写在生命周期里的vuex数据是重新初始化的问题。在仓库中设置的初始值为localStorage
                this.$store.dispatch("setTitle", this.navs[nav].title);
                //点击路由时改变title
                 localStorage.setItem("setTitle",this.navs[nav].title); 
            
            },
        TwoSelectNav(nav){
                //console.log(this.nav);
                //console.log(nav);
                this.nav = nav;
                this.$router.push({ name: this.navsTwo[nav-10].path});//拿到路由
                this.toShowNav=false;//关闭nav导航栏
                this.toshowStyle = true;//开nav启图片
                this.toShowUlTwo = false;//关闭ul
                localStorage.setItem("setTitle",this.navsTwo[nav-10].title); 
                this.$store.dispatch("setTitle", this.navsTwo[nav-10].title);

        },
    //返回首页改成精选头部
        backHome(){
        localStorage.setItem("setTitle","精选"); 
        this.$store.dispatch("setTitle", "精选");

        },
     //返回顶部函数
        backTop(){
             var backTop = document.getElementById("backTop");
          
                backTop.timer = setInterval(()=>{
                var currentTop = window.scrollY;
                var speed = 50;
                currentTop -=speed;
                if(currentTop<=100){
                    speed=-10;
                }
                if(currentTop <=0){
                    clearInterval(backTop.timer);
                }
                window.scrollTo(0,currentTop);

            },30)
        },
       
    //获取滚动条位置
        showTool(){
            this.top=document.documentElement.scrollTop || document.body.scrollTop;//谷歌不识别document.documentElement.scrollTop，必须要加上document.body.scrollTop；
        },
           setChannel() { //判断当前是什么路由
            var route = this.$router.history.current.path;
            switch (route) {
                case "/home":
                    this.nav="9";//解决一开始刷新nav为0的情况
                    break;
                case "/Video":
                    this.nav="7";//监听添加active
                    break;
                case "/Ask":
                    this.nav="8";//
                     break;
                case "/content/hot":
                    this.nav = 0;
                    break;
                case "/content/frontier":
                    this.nav = 1;
                    break;
                case "/content/viewpoint":
                    this.nav = 2;
                    break;
                case "/content/visual":
                    this.nav = 3;
                    break;
                case "/content/fact":
                    this.nav = 4;
                    break;
                case "/content/lifestyle":
                    this.nav = 5;
                    break;
                case "/content/15yan":
                    this.nav = 6;
                    break;
                case "/content/biology":
                    this.nav = 10;
                    break;
                case "/content/sci-fiction":
                    this.nav = 11;
                    break;
                case "/content/communication":
                    this.nav = 12;
                    break;
                case "/content/math":
                    this.nav = 13;
                    break;
                case "/content/forensic":
                    this.nav = 14;
                    break;
                case "/content/DIY":
                    this.nav = 15;
                    break;
                case "/content/environment":
                    this.nav = 16;
                    break;
                case "/content/chemistry":
                    this.nav = 17;
                    break;
                case "/content/education":
                    this.nav = 18;
                    break;
                case "/content/agronomy":
                    this.nav = 19;
                    break;   
                case "/content/electronics":
                    this.nav = 20;
                    break;
                case "/content/earth":
                    this.nav = 21;
                    break;
                case "/content/psychology":
                    this.nav = 23;
                    break;
                case "/content/food":
                    this.nav = 24;
                    break;   
                case "/content/internet":
                    this.nav = 25;
                    break;
                case "/content/atmosphere":
                    this.nav = 26;
                    break;
                case "/content/society":
                    this.nav = 27;
                    break;
                case "/content/physics":
                    this.nav = 28;
                    break;
                case "/content/engineering":
                    this.nav = 29;
                    break;
                case "/content/astronomy":
                    this.nav = 30;
                    break;   
                case "/content/aerospace":
                    this.nav = 31;
                    break;
                case "/content/medicine":
                    this.nav = 32;
                    break;       
                default:
                    this.nav = "null";
            }
             
        },

    },
     mounted(){
        window.onscroll = this.showTool;//监听滚动条
          this.setChannel();//监听路由
          
     },
      computed: {
            title() {
                return this.$store.getters.getTitle;
            },
        },
}
</script>
<style scoped>
@font-face {font-family: "tutu";
  src: url('../../../font/iconfont.eot?t=1541681274941'); /* IE9*/
  src: url('../../../font/iconfont.eot?t=1541681274941#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../../../font/iconfont.ttf?t=1541681274941') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../../../font/iconfont.svg?t=1541681274941#iconfont') format('svg'); /* iOS 4.1- */
}

.tutu {
  font-family:"tutu" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-zhiding:before { content: "\e63c"; }

.icon-weixin:before { content: "\e7e5"; }

.icon-qq:before { content: "\e63b"; }

.icon-sousuo:before { content: "\e613"; }

.icon-douban:before { content: "\e691"; }

.icon-weibo:before { content: "\e606"; }

.icon-bi1:before { content: "\e600"; }

.icon-fanhuidingbu:before { content: "\e601"; }

.icon-shuaxin:before { content: "\e758"; }

.icon-other:before { content: "\e7e3"; }

.icon-wode:before { content: "\e6ad"; }

@import url("../assets/index.css");
@import url("../assets/main.css");
</style>