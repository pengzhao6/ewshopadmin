<template>
  <div>
    <div class="h-24 w-full bg-white p-3 mb-6">
      <div style="text-align: left">
        <span class="text-slate-400 pr-1">首页</span>/<span class="pl-1 font-bold">商品管理</span>
        <div class="pt-3 text-xl text-black font-bold">
          商品管理
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
  import {ref,onMounted} from "vue";
  import {orders} from "@/api/order";

  const totalPages = ref(0)
  const formSearch = ref({
    order_no: '',
    trade_no: '',
    status: 0 | 1 | 2 | 3 | 4 | 5
  })
  const data = ref([])

  const columns: any = [
    {
      title: '单号',
      key: 'order_no',
      align: 'center'
    },
    {
      title: '用户',
      key: 'user.name',
      align: 'center'
    },
    {
      title: '金额',
      key: 'amount',
      align: 'center',
    },
    {
      title: '状态',
      key: 'status',
      align: 'center',
    },
    {
      title: '添加时间',
      key: 'created_at',
      align: 'center'
    },
    {
      title: '修改时间',
      key: 'updated_at',
      align: 'center',
    },
    {
      title: '操作',
      key: 'created_at',
      align: 'center',
    }
  ]

  const params={
    include:"goods,user,orderDetails" // 订单详情里包含商品信息
  };
  onMounted(()=>{
    getOrderList(params);
  })
  //获取订单数据

  const getOrderList = (params: any) => {
    orders(params).then((res: any)=> {
      console.log(res)
      data.value = res.data
      totalPages.value = res.meta.pagination.total_pages
    })
  }
  // 分页功能实现
  const updatePage = (pageNum: any) => {
    getOrderList({
      current: pageNum,
      oreder_on: formSearch.value.order_no,
      trade_no: formSearch.value.trade_no,
      include:params.include
    })
  }




</script>

<style lang="less" scoped>

</style>