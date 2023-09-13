<template>
  <div>
    <h1>hello topo-view</h1>
    <p><slot>欢迎使用组建模板1 </slot></p>
    <el-button>hello</el-button>
  </div>
</template>
<script>
import {Button} from "element-ui"
export default {
  name: "topo-view",
  components:{
    Button
  }
}
</script>