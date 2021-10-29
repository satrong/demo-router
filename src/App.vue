<template>
  <div id="app">
    <div>当前使用的api端口： <b>{{ port }}</b></div>
    <div style="font-size:12px;color:#999">你可以修改 .env 文件，将端口改成 3000 或 3001 试试</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      port: ''
    }
  },
  created () {
    fetch('/api').then(res => res.json()).then(res => {
      this.port  = res.port
      console.log(JSON.stringify(res))
    })
  }
}
</script>
