<template>
  <div>
    <div class="h-24 w-full bg-white p-3 mb-6">
      <div style="text-align: left">
        <span class="text-slate-400 pr-1">首页</span>/<span class="pl-1 font-bold">用户管理</span>
        <div class="pt-3 text-xl text-black font-bold">
          用户管理
        </div>
      </div>
    </div>
    <div class="content px-4">
      <div class="bg-white pt-4 pr-6">
        <n-form
            ref="formRef"
            inline
            :label-width="80"
            :model="formValue"
            :rules="rules"
            :size="size"
            label-placement="left"
        >
          <n-form-item label="商品名：" path="name">
            <n-input v-model:value="formSearch.title" placeholder="请输入" />
          </n-form-item>
          <n-form-item label="是否上架">
            <n-button type="info" v-model:value="data.in_on" size="small" class="mr-4" @click="sellSubmit(1)">
              出售中商品
            </n-button>
            <n-button type="info" size="small" @click="sellSubmit(0)">
              下架的商品
            </n-button>
          </n-form-item>

          <n-form-item label="是否推荐">
            <n-button type="info" size="small" class="mr-4" @click="recommendSubmit(1)">
              已推荐
            </n-button>
            <n-button type="info" size="small" @click="recommendSubmit(0)">
              未推荐
            </n-button>
          </n-form-item>

          <n-form-item class="ml-auto">
            <n-button class="mr-4" attr-type="button" @click="searchReload">
              重置
            </n-button>
            <n-button type="info" attr-type="button" @click="searchSubmit">
              搜索
            </n-button>
          </n-form-item>
        </n-form>
      </div>
      <div class="mt-4 bg-white">
        <div class="text-xl px-6 py-4 flex ">
          <span>商品列表</span>
          <span class="ml-auto"><NButton type="info">+新建</NButton></span>
        </div>
        <div>
          <n-data-table
              :columns="columns"
              :data="data"
              :pagination="pagination"
              :bordered="false"
              :loading = "loading"
          />
        </div>
      </div>
      <n-pagination v-model:page="page" @update:page="updatePage" :page-count="totalPages" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted,h} from "vue";
import {user} from "@/api/auth";
import {NImage} from "naive-ui";

const totalPages = ref(0)
const data = ref([])
const formSearch = ref({
  name:"",
  email:""
})
// 实现跳转页面
const updatePage = (pageNum) => {
  getUserList({
    current:pageNum,
    name:formSearch.value.name,
    email:formSearch.value.email
  });
};
const columns = [
  {
    title: '头像',
    key: 'avatar_url',
    align: 'center',
    render(row: any){
      return h(NImage,{round:true,src:row.avatar_url,width:'60'})
    }
  },
  {
    title: '用户',
    key: 'name',
    align: 'center',
  },
  {
    title: '邮箱',
    key: 'email',
    align: 'center'
  },
  {
    title: '是否禁用',
    key: 'is_locked',
    align: 'center',
  },
  {
    title: '创建时间',
    key: 'created_at',
    align: 'center'
  },
  {
    title: '操作',
    key: 'created_at',
    align: 'center'
  }
]
onMounted(()=>{
  getUserList({})
})
const getUserList = (params: any) => {
  user(params).then((res: any)=>{
    console.log(res)
    data.value = res.data
    totalPages.value = res.meta.pagination.total_pages
  })
}
</script>

<style lang="less" scoped>

</style>