<template>
    <div class="w-full h-42 relative p-42">
        <x-gantt
        data-index="index" 
        :data="dataList"
        
        />
    </div>
</template>

<script setup>

import { ref } from 'vue';

const dataList = ref([
  {
    index: 1,
    startDate: '2020-06-05',
    endDate: '2020-08-20',
    ttt: {
      a: 'aaa',
      b: 'bbb'
    },
    name: 'mydata1',
    children: []
  },
  {
    index: 2,
    startDate: '2020-07-07',
    endDate: '2020-09-11',
    ttt: {},
    name: 'mydata2',
    children: [
      {
        index: 3,
        startDate: '2020-07-10',
        endDate: '2020-08-15',
        ttt: {
          a: 'aaa'
        },
        name: 'child1',
        children: [] 
      }
    ]
  }
]);


</script>