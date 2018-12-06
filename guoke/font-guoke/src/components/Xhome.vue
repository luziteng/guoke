<template>
<div class="container" id="container">
    <div class="swiper-container swiper-container-horizontal swiper-container-ios" style="height:200px">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="nav of picture" style="height:200px">
                <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style="width: 375px;">
                    <a href="#" v-bind:style="{backgroundImage: 'url(' +nav.url+ ')' }">
                       
                            <div class="title">{{nav.title}}</div>
                            </a>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>


    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="30">
        <a class="list" href="#"  v-for="card of list">
                <!--图片加标题或标题-->
                    <div class="flex" v-if="card.flex">
                        <div class="list-middle">
                            <h3>{{card.title}}</h3>
                            <p class="clamp2">{{card.content}}</p>
                        </div>
                        <div class="list-right" v-if="card.ShowImg"><img :src="card.url"/></div>
                    </div>
                <!--视频视图-->
                    <div class="video" data-ga="videos:play_home:article_number" v-if="card.video">
                        <iframe frameborder="0" :src="card.url" allowfullscreen="true"></iframe>
                    </div>
                    <div class="list-middle list-middle-video" v-if="card.middleVideo">
                        <h3>{{card.title}}</h3>
                        <p>{{card.content}}</p>
                    </div>
                <!--数据信息-->
                    <div class="list-msg flex">
                                <div class="tag-classify">
                                    <strong>{{card.provenance}}</strong>
                                    <span class="list-tag">{{card.form}}</span>
                                </div>
                                <div class="support-count"><strong>{{card.num}}</strong>评论</div>
                    </div>
        </a>
    </div>

      

</div>

</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';//轮播图
import { InfiniteScroll } from 'mint-ui';//无限滚动
 import t1 from '../img/top1.png';
 import t2 from '../img/top2.jpg';
 import t3 from '../img/top3.png';
 import l1 from '../img/l1.jpg';
 import l2 from '../img/l2.png';
 import l3 from '../img/l3.jpg';
 import l4 from '../img/l4.png';
 import l5 from '../img/l5.jpg';
  export default{
        component:{
            Swipe,
            SwipeItem,
            InfiniteScroll
        },
        data(){
            return{
            loading: false, // 加载中转圈

    
                picture:[
                    {
                    id:"35108394",
                    title:"一接电话就手抖，社恐的我该去医院吗？",
                    url:t1
                    },
                    {
                     id:"445707",
                    title:"迁徙的动物们，竟然也有自己祖辈相传的“文化”？",
                    url:t2
                    },
                    {
                    id:"445662",
                    title:"镭药水、钍牙膏、氡桑拿？就算下巴掉了，也要赶上“放射性风潮”",
                    url:t3
                    },        
                ],
                list:[
                    {
                        id:"445663",
                        flex:false,//判断是否存在<div class="flex">
                        title:"你身体里的细胞都恋爱了，可你还是只单身汪",
                        content:"这怕不是一个凄美的爱情故事……" ,
                        ShowImg:false,//判断是否有<div class="list-right">
                        url:"https://v.qq.com/txp/iframe/player.html?vid=i0719btvhhd",
                        video:true,//判断是否有<div class="video"">
                        middleVideo:true,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"果壳视频",
                        form:"医学",
                        num:"4",
                    },
                    {
                        id:"445743",
                        flex:true,//判断是否存在<div class="flex">
                        title:"如何让双十一剁掉的手再长出来？这儿有个正确的示范",
                        content:"剁手这件事儿，谁也别拦我…" ,
                        ShowImg:true,//判断是否有<div class="list-right">
                        url:l1,
                        video:false,//判断是否有<div class="video"">
                        middleVideo:false,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"莘莘",
                        form:"生物",
                        num:"2",
                    },
                    {
                        id:"445709",
                        flex:true,//判断是否存在<div class="flex">
                        title:"大家都用压Kindle泡面，背后是电子书的溃败",
                        content:"扯开泡面盖，倒入调料，注够热水，拿来Kindle，压住泡面盖。 成了泡面神器，无论是大小、重量还是材质，都与泡面盖绝配的Kindle因而避免了躺在墙角积灰的命运..." ,
                        ShowImg:true,//判断是否有<div class="list-right">
                        url:l2,
                        video:false,//判断是否有<div class="video"">
                        middleVideo:false,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"雪竹_56375",
                        form:"互联网",
                        num:"7",
                    },
                       {
                        id:"443177",
                        flex:true,//判断是否存在<div class="flex">
                        title:"中国人打狂犬疫苗是不是真的太多了？",
                        content:"“10日观察法”有应用局限，疫苗接种仍然是预防传染病的有效方式。" ,
                        ShowImg:true,//判断是否有<div class="list-right">
                        url:l3,
                        video:false,//判断是否有<div class="video"">
                        middleVideo:false,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"李侗曾",
                        form:"医学",
                        num:"9",
                    },    
                     {
                        id:"445723",
                        flex:true,//判断是否存在<div class="flex">
                        title:"疯帽匠做的是什么帽？怎么好好的人就疯了",
                        content:"这种帽子的流行不仅造成了当地职业性汞中毒，也为大洋彼岸的皮毛产地带来灾难" ,
                        ShowImg:true,//判断是否有<div class="list-right">
                        url:l4,
                        video:false,//判断是否有<div class="video"">
                        middleVideo:false,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"vicko238",
                        form:"社会",
                        num:"1",
                    },
                     {
                        id:"445724",
                        flex:true,//判断是否存在<div class="flex">
                        title:"劳伦斯•克劳斯，第一个因为性骚扰指控而走下讲台的名人科学家",
                        content:"理论物理学家劳伦斯•克劳斯（Lawrence Krauss）受到了多个不正当性行为的指控，近日，他和亚利桑那州立大学达成协议，将于明年五月学年结束时退休。" ,
                        ShowImg:false,//判断是否有<div class="list-right">
                        url:"",
                        video:false,//判断是否有<div class="video"">
                        middleVideo:false,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"Marina",
                        form:"社会",
                        num:"4",
                    },
                    {
                        id:"445611",
                        flex:true,//判断是否存在<div class="flex">
                        title:"真的脑洞，究竟是什么样的？",
                        content:"脑洞不够大？给你看个视频补补" ,
                        ShowImg:false,//判断是否有<div class="list-right">
                        url:"https://v.qq.com/txp/iframe/player.html?vid=s0661rf7lbt",
                        video:true,//判断是否有<div class="video"">
                        middleVideo:true,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"果壳视频",
                        form:"医学",
                        num:"3",
                    },
                    {
                        id:"445732",
                        flex:true,//判断是否存在<div class="flex">
                        title:"养猫的人更健康，那是因为人家养得起猫",
                        content:"过去很多人都认为，养猫让人更健康。养猫真的就这么有效？很遗憾，有研究发现，养猫的人更健康，那是因为人家养得起猫。" ,
                        ShowImg:true,//判断是否有<div class="list-right">
                        url:l5,
                        video:false,//判断是否有<div class="video"">
                        middleVideo:false,//判断是否有 <div class="list-middle list-middle-video">
                        provenance:"Cloud_Haha_You",
                        form:"社会",
                        num:"3",
                    },
                ]
            }
        },
    methods:{
            loadMore(){
            console.log(this.list);
                this.loading = true;    //若为真，则无限滚动不会被触发
                setTimeout(()=>{
                    this.loading = false;
                     this.list=this.list.concat(this.list);//concat：连接两个数组，es6。这里使用push方法也可以this.list.push(...this.list);
                      
                },500);
               
                 
            },
        },

    }
</script>
<style scoped>
@import url("../assets/index.css");

</style>