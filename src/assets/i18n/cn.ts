export default {
  common: {
    loading: "加载中",
    login: {
      needLogin: "请先登录",
      roleNotMatch: "权限不正确。需要权限：{expected}，实际权限：{actual}.",
    },
  },
  quotation: {
    news: "新闻",
    stock: "股票市场",
    bond: "债券市场",
    goods: "商品市场",
  },
  help: {
    tos: "使用条款",
    privacyPolicy: "隐私条款",
  },
  notification: {
    panelTitle: "通知",
    refresh: "刷新",
    none: "没有通知",
    preferenceEvaluation: {
      title: "进行投资偏好测试",
      content: "为了便于您得到适合您的投资偏好，请进行投资偏好测试。",
      readMore: "进行投资偏好测试",
    },
    others: {
      title: "通知",
    },
  },
  footer: {
    productDescription: "多资产量化投资系统",
    help: {
      title: "帮助",
      about: "关于",
      usage: "使用帮助",
    },
    contact: "联系我们",
    copyright: "用❤制作。© 2018 FinBrain，保留所有权利。",
  },
  userCenter: {
    profile: {
      title: "个人信息",
      email: "邮箱",
      registerDate: "注册时间",
      citiAccount: {
        title: "绑定的花旗银行账户",
        none: "点击绑定",
      },
    },
    investmentPreference: {
      title: "理财偏好",
      edit: "编辑",
      submit: "提交",
      reset: "恢复",
      cancel: "取消",
      profit: "收益率",
      fluctuation: "波动率",
      evaluation: {
        help: "理财偏好问卷",
        title: "理财偏好问卷",
        submit: "提交",
      },
    },
  },
  loginModal: {
    title: "登录",
    username: "用户名",
    requireUsername: "请输入用户名",
    password: "密码",
    requirePassword: "请输入密码",
    login: "登录",
    forgetPassword: "忘记密码",
    remember: "记住我",
    cancel: "取消",
    register: "注册",
    error: {
      WrongCredential: "用户名或者密码错误",
      ServerError: "服务器出错，请稍候再试",
      NetworkError : "本地网络出错，请检查网络连接",
    },
  },
  emailValidationModal: {
    title: "验证电子邮箱",
    description: "要登录，您必须先验证您的电子邮箱。",
    inputCode: "请输入您的电子邮箱收到的验证码：",
    placeholder: "验证码",
    remember: "记住我",
    sendIndicator: {
      send: "发送验证邮件",
      sent: "邮件已经发送。需要重新发送请等待{seconds}秒。",
    },
    footer: {
      confirm: "确认并登录",
      cancel: "取消",
    },
    message: {
      success: "验证成功。",
      failure: "验证失败。",
    },
  },
  invreq: {
    list: {
      title: "资产账户列表",
      add: "新建",
      detail: "查看详情",
      invreq: "资产账户 {invreqId}",
      bought: {
        true: "已购买",
        false: "未购买",
      },
      recommended: "系统推荐",
    },
    detail: {
      bought: {
        [""]: "总体表现",
        position: {
          _root: "我的持仓",
          reallocation: "调仓记录",
          dailyPosition: "每日持仓",
        },
        transactions: "交易记录",
        setting: "账户设置",
        stock: {
          _root: "股票市场表现",
          perform: "业绩表现",
          attribute: "归因分析",
          scenario: "情景分析",
        },
        bond: {
          _root: "债券市场表现",
          credit: "信用债深度分析",
          rate: "利率债深度分析",
        },
        product: {
          _root: "商品市场表现",
          analysis: "商品市场深度分析",
        },
      },
    },
  },
  languageSelector: {
    loading: "加载中",
  },
  nav: {
    home: "主页",
    help: "帮助",
    invreq: "资产配置",
    login: "登录",
    logout: "登出",
    welcome: "{username}",
    selfCenter: "个人中心",
    navPoints: {
      "": "主页",
      "help": {
        _root: "帮助",
        about: "关于",
        tos: "使用条款",
        privacyPolicy: "隐私条款",
      },
      "portfolio": "资产配置",
      "register": "注册",
      "invreq": {
        _root: "资产配置需求",
        init: "初始化需求",
        account: "资产账户信息",
        bought: {
          overview: "总览",
          stock: {
            _root: "股票市场表现",
            perform: "业绩表现",
            attribute: "归因分析",
            scenario: "情景分析",
          },
          bond: {
            _root: "债券市场表现",
            credit: "信用债深度分析",
            rate: "利益债深度分析",
          },
          transaction: "交易记录",
          position: {
            _root: "我的持仓",
            reallocation: "调仓记录",
            dailyPosition: "每日持仓",
          },
          setting: "账户设置",
        },
      },
      "quotation": {
        _root: "市场行情查看",
        news: "新闻",
        stock: "股票",
        bond: "债券",
        goods: "商品",
      },
    },
    marketQuotation: "市场行情",
  },
  signIn: {
    title: "大类资产配置方案",
    feature1: "人工智能资产配置",
    feature2: "投资组合动态调整",
    feature3: "数据挖掘个性推荐",
    signPrompt: "注册新用户",
    username: "用户名",
    email: "邮箱",
    password: "密码",
    confirmPassword: "确认密码",
    protocolPrompt: "我已阅读并同意",
    protocol: "A+Quant用户服务协议",
    register: "注册",
    error: {
      check: "您未同意A+Quant服务协议",
      exists: {
        username: "您注册的用户名已存在",
        email: "您注册的Email已经存在",
      },
    },
  },
  invreqInit: {
    init: "初始化需求",
    mode: "模式",
    mode1: "自定义模式",
    mode2: "问卷模式",
    profit: "收益率（大于等于0且小于等于10%）",
    profitHint: "由于余额宝收益率3.439%左右。建议预期收益率不要超过8%。收益率过高会导致资金全部分配于股票市场，请谨慎考虑。",
    fluctuation: "波动率",
    amount: "金额",
    year: "年限",
    submit: "提交",
  },
  noInvreq: {
    predictProfit: "预期年化收益率",
    predictVar: "预期波动率",
    initTrans: "初始交易",
    backTestData: "回测数据",
  },
  accountSetting: {
    setting1: "计划交易时间",
    setting2: "在计划交易时间之前",
    setting2_2: "小时提醒我有交易",
    setting3_1: "交易额超过",
    setting3_2: "需要我手动确认",
    setting4_1: "若自消息发出超过",
    setting4_2: "小时未确认，自动",
    inputDefault: "一键输入默认值",
    cancel: "取消",
    complete: "完成",
  },
};
