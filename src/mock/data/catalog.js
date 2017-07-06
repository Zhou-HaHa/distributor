const catalog = {
  'first': [
    {
      'path': '/',
      'name': '客户管理',
      'second': [
        {'path': '/search', 'name': '客户查询'},
        {'path': '/permission', 'name': '经销商申请审核'},
        {'path': '/record', 'name': '系统归属变更审核'}
      ]
    }, {
      'path': '/',
      'name': '财务管理',
      'second': [
        {
          'path': '/search',
          'name': '经销商账户明细',
          'third': [
            {'path': '/search', 'name': '客户查询'},
            {'path': '/permission', 'name': '经销商申请审核'}
          ]
        },
        {'path': '/permission', 'name': '充值/提现申请审核'}
      ]
    }, {
      'path': '/',
      'name': '产品管理',
      'second': [
        {'path': '/search', 'name': '增加/删除产品'},
        {'path': '/permission', 'name': '产品销售记录'}
      ]
    }, {
      'path': '/',
      'name': '超级管理员',
      'second': [
        {'path': '/permission', 'name': '增加/删除管理员'}
      ]
    }
  ]
}

export { catalog }
