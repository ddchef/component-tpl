<template>
  <div>
    <el-alert>这里是 example</el-alert>
    <topo-view></topo-view>
  </div>
</template>
<script>
import {Alert} from "element-ui";
import {TopoView} from "@adl/topo-view";
export default {
  components:{
    Alert,
    TopoView
  }
}
</script>