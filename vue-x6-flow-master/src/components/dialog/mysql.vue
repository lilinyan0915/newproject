<template>
    <!--visible	是否显示 Dialog，支持 .sync 修饰符（.sync修饰符可以实现子组件与父组件的双向绑定，并且可以实现子组件同步修改父组件的值。） -->
    <el-dialog :title="node.item ? node.item.data.label :''" :visible.sync="visible" width="600px">
      <!-- 当垂直方向空间受限且表单较简单时，可以在一行内放置表单。
          通过设置 inline 属性为 true 可以让表单域变为行内的表单域。 -->
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="名字">
                <el-input v-model="label" placeholder="修改名字"></el-input>
            </el-form-item>
        </el-form>
        <footer class="footer">
            <el-button type="primary" @click="submit">确定</el-button>
        </footer>
    </el-dialog>
</template>

<script>

  export default {
    name: 'dialogMysql',

    data() {
      return {
        visible: false,
        bool: true,
        node: {},
        label: ''
      }
    },
    methods: {
      init(item) {
        // 此时的item为{type: 'node', item: node}
        this.node = item
        this.label = item.item.data.label
      },
      submit() {
        // 使用$parent可以让组件访问父组件的实例（访问的是上一级父组件的属性和方法）
        var node = this.$parent.getNodeById(this.node.item.id)
        // 将输入框中获取的lable赋值给节点的标签
        node.setData(Object.assign({}, this.node.item.data, {label: this.label}))
        this.visible = false
      }
    }
  }
</script>
<style scoped>
    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
