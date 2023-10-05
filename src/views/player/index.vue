<template>
  <div>
    <el-row>
      <el-col :span="12" style="background-color: pink; widows: 100%"></el-col>
      <el-col
        :span="12"
        style="background-color: aquamarine; widows: 100%"
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "PlayerView",
};
</script>

<style lang="less" scoped>
.div2 {
  background-color: #5ab875;
  height: 200px;
}
.el-col {
  background-color: #a62c2c;
  border-radius: 0px;
  border: 0px solid #dcdfe6;
  padding: 20px;
  height: auto;

  text-align: center;
}
</style>
