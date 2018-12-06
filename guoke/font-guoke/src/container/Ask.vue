<template>
    <div>
        <Xheader />
        <div style="margin-top: 50px;">
            <XmenuAsk />
        </div>
    </div>
</template>

<script>
import XmenuAsk from "../components/XmenuAsk";
import Xheader from "../components/Xheader";
    export default{
        components :{
            Xheader,
            XmenuAsk
         },
    }
</script>