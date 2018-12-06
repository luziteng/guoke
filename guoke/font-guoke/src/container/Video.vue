<template>
    <div>
        <Xheader />
        <div style="margin-top: 50px;">
            <XvideoList />
        </div>
    </div>
</template>

<script>
import XvideoList from "../components/XvideoList";
import Xheader from "../components/Xheader";
    export default{
        components :{
            Xheader,
            XvideoList
         },
    }
</script>