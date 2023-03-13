const config = [
  {
    type:'output',
    label: '只允许输出',
    name:'输出',
    "data": {
      "name": '输出'
    },
    id:'1'
  },

  {
    type:'database',
    label: '数据库',
    name:'mySql',
    "data": {
      "name": 'mysql'
    },
    id:'2'
  },
  {
    type:'onlyIn',
    label: '只允许输入',
    name:'只允许输入',
    "data": {
      "name": '只允许输入'
    },
    id:'3'
  },
  {
    type:'condition',
    label: '条件',
    name:'条件',
    "data": {
      "name": 'condition',
      "t":'',
      "f":""
    },
    id:'4'
  }
]

export default config
