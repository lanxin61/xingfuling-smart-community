const services = [
  {
    id: "home-care",
    title: "上门医护",
    label: "Home Nursing",
    summary: "围绕居家长者的医护照护、就医陪诊、康复辅具、伤口护理和用药管理，提供可上门、可跟踪、可记录的专业服务。",
    scenario: "适用于高龄、术后、慢病、行动不便、独居空巢及需要长期照护支持的长者家庭。",
    image: "assets/home-care-detail.png",
    intro: "上门医护服务面向高龄、术后、慢病、行动不便及长期照护需求的长者家庭，将基础护理、健康监测、伤口换药、管路护理、陪诊协助和用药管理等服务前置到社区与家庭场景。通过专业人员上门评估、服务记录和持续跟踪，帮助家庭降低照护压力，也让长者在熟悉的居家环境中获得更安全、更稳定的照护支持。",
    values: [
      "降低家属长期照护压力，让专业服务进入家庭场景。",
      "帮助健康风险被更早发现、更及时处理。",
      "提升居家照护安全性，减少不必要的往返奔波。",
      "形成服务记录和持续跟踪，便于家属了解照护进展。"
    ],
    items: [
      {
        name: "养老护理服务",
        desc: "为高龄、行动不便或需要日常照护的长者提供基础生活照料、身体观察、照护提醒和服务记录，协助家庭建立稳定的居家照护秩序。"
      },
      {
        name: "压力性损伤预防和护理",
        desc: "针对长期卧床或活动受限长者，提供翻身减压指导、皮肤状态观察、压疮风险提醒和护理建议，降低居家照护中的皮肤损伤风险。"
      },
      {
        name: "康复辅具租赁",
        desc: "根据长者行动能力和家庭空间条件，协助选择轮椅、助行器、护理床等康复辅具，降低一次性购置成本，提高日常照护便利性。"
      },
      {
        name: "慢病管理知识",
        desc: "围绕高血压、糖尿病、心脑血管等常见慢病，提供日常监测、饮食运动、复诊提醒和风险识别知识，帮助家庭提升自我管理能力。"
      },
      {
        name: "伤口换药护理",
        desc: "针对术后切口、慢性伤口或日常皮肤破损，提供规范换药、伤口观察和异常情况提醒，减少感染和延迟愈合风险。"
      },
      {
        name: "全程就医陪诊",
        desc: "为不便独立就医的长者提供预约协助、陪同问诊、检查引导、取药缴费和结果整理等支持，缓解家属无法全程陪伴的压力。"
      },
      {
        name: "术后康复护理",
        desc: "根据术后恢复阶段，协助开展基础护理、活动指导、康复提醒和身体状态观察，帮助长者更安全地度过居家恢复期。"
      },
      {
        name: "管路专项护理",
        desc: "面向带管居家长者，提供管路观察、固定维护、风险提醒和家属照护指导，减少脱管、堵管、感染等居家护理风险。"
      },
      {
        name: "健康监测与用药管理",
        desc: "定期记录血压、血糖、心率等基础指标，协助整理用药时间和注意事项，及时提醒异常变化，帮助长者和家属掌握健康趋势。"
      }
    ]
  },
  {
    id: "health-management",
    title: "健康管理",
    label: "Health Management",
    summary: "为社区长者建立连续健康档案，围绕慢病跟踪、指标监测和异常提醒，形成日常健康管理闭环。",
    scenario: "适用于慢病老人、亚健康老人、需要家属远程关注健康状况的家庭。",
    image: "assets/health-management-detail.png",
    intro: "健康管理服务以家庭健康档案为基础，将长者的基础信息、慢病情况、日常指标和服务记录持续沉淀。通过定期跟踪、异常提醒和健康建议，让社区、家庭和服务人员能够更及时地了解长者身体变化，减少健康风险被忽视的情况。",
    values: [
      "帮助家庭建立连续、可追踪的健康记录。",
      "让慢病管理从偶发关注变成日常跟踪。",
      "在指标异常时及时提醒，便于早发现、早干预。",
      "为后续医护、康复和机构甄选提供基础参考。"
    ],
    items: [
      {
        name: "家庭健康档案",
        desc: "为家庭成员建立个人基础信息、既往病史、用药情况、体检记录和服务记录，形成家庭和社区都能理解的健康资料库。"
      },
      {
        name: "慢病跟踪",
        desc: "围绕高血压、糖尿病、心脑血管等常见慢病，持续记录身体指标、复诊情况和生活习惯变化，帮助长者保持稳定管理。"
      },
      {
        name: "生理指标异常提醒",
        desc: "对血压、血糖、心率等关键指标进行观察和提醒，发现异常趋势时及时提示家属或服务人员关注，降低延误风险。"
      }
    ]
  },
  {
    id: "rehab-therapy",
    title: "康复理疗",
    label: "Rehabilitation",
    summary: "融合中式理疗、术后复健、关节训练和慢病调理，帮助长者改善身体机能与生活质量。",
    scenario: "适用于术后恢复、关节活动受限、步态不稳、三高慢病调理及日常康养需求。",
    image: "assets/rehab-therapy-detail.png",
    intro: "康复理疗服务面向身体机能下降、术后恢复、慢病调理和日常养护需求，将中式理疗、功能训练和康养调理结合起来。服务重点不是单次放松，而是围绕长者身体状态，帮助改善活动能力、缓解不适、增强体质，提升居家生活质量。",
    values: [
      "帮助长者缓解身体不适，改善日常活动能力。",
      "为术后和慢病人群提供更连续的康复支持。",
      "结合中式理疗和功能训练，满足多层次康养需求。",
      "提升长者自理能力和生活舒适度。"
    ],
    items: [
      {
        name: "中式推拿理疗",
        desc: "通过规范推拿、经络放松和局部调理，缓解肩颈、腰背、关节等常见不适，适合作为日常康养服务。"
      },
      {
        name: "艾灸温养调理",
        desc: "围绕体寒、乏力、关节不适等需求，提供温和艾灸调理和养护建议，帮助长者改善身体舒适感。"
      },
      {
        name: "关节康复训练",
        desc: "针对膝、肩、髋等关节活动受限情况，设计适合长者的活动训练和保护指导，减少因不敢动或乱动带来的风险。"
      },
      {
        name: "术后机能复健",
        desc: "在术后恢复阶段协助进行基础活动、肌力恢复和生活功能训练，帮助长者逐步回到稳定生活状态。"
      },
      {
        name: "三高慢病调理",
        desc: "结合饮食、运动、作息和指标监测建议，为高血压、高血糖、高血脂人群提供日常调理支持。"
      },
      {
        name: "拔罐、刮痧养护",
        desc: "根据长者体质和身体状况，提供适度的传统养护服务，缓解局部疲劳和不适，避免过度刺激。"
      },
      {
        name: "平衡步态矫正",
        desc: "针对步态不稳、易跌倒或下肢力量不足的长者，开展平衡训练、行走指导和防跌倒建议。"
      },
      {
        name: "体质固本康养",
        desc: "从日常运动、饮食调理、睡眠节律和身心状态入手，帮助长者形成长期可坚持的康养习惯。"
      }
    ]
  },
  {
    id: "culture-club",
    title: "银龄俱乐部",
    label: "Silver Club",
    summary: "以银龄文社和银龄焕彩为双核心，链接文化学习、兴趣社交、沙龙讲师和银龄达人资源，激发长者持续参与社区生活。",
    scenario: "适用于希望参与社区学习、兴趣社交、文化活动、知识分享、技能展示和社区讲师培育的中老年群体。",
    image: null,
    intro: "银龄俱乐部以精神文化养老和银龄价值再发现为核心，一方面通过银龄文社提供稳定的学习、兴趣和社交活动，另一方面通过银龄焕彩挖掘社区长者的知识、经验、技能和生活美学能力，让长者从活动参与者进一步成为课程分享者、生活体验官和社区内容共创者。",
    values: [
      "丰富长者精神文化生活，减少孤独感。",
      "搭建社区熟人社交和兴趣共创场景，增强归属感。",
      "让长者通过课程分享、产品体验和内容创作实现自我价值。",
      "形成可持续的社区银龄文化和银龄达人生态。"
    ],
    groups: [
      {
        name: "银龄文社",
        image: "assets/culture-club-detail.png",
        items: [
          {
            name: "国学经典",
            desc: "围绕经典阅读、传统文化和修身养心内容开展课程，让长者在学习交流中获得精神滋养。"
          },
          {
            name: "美食养生",
            desc: "结合节气饮食、营养搭配和地方饮食文化，组织适合长者参与的养生美食课程和交流活动。"
          },
          {
            name: "非遗手工",
            desc: "引入剪纸、编织、香囊、手作等非遗体验，让长者通过动手创作提升参与感和成就感。"
          },
          {
            name: "非遗艺术",
            desc: "以地方文化和传统艺术为载体，开展欣赏、体验、展示等活动，延展社区文化养老内容。"
          },
          {
            name: "文体雅乐",
            desc: "组织音乐、朗诵、舞蹈、合唱、轻运动等文体活动，提升长者身心活力和社区互动频率。"
          },
          {
            name: "书画雅艺",
            desc: "开设书法、绘画、篆刻、作品展等课程和活动，让长者在稳定练习中获得审美表达空间。"
          },
          {
            name: "生活雅趣",
            desc: "围绕茶艺、园艺、摄影、智能手机、生活美学等主题，打造更贴近日常的兴趣社群。"
          }
        ]
      },
      {
        name: "银龄焕彩",
        image: "assets/culture-club-huancai-section.png",
        items: [
          {
            name: "智能生活讲师",
            desc: "围绕智能手机使用、线上挂号、网上缴费、短视频拍摄等内容，帮助长者掌握数字生活能力，也让有经验的长者成为同伴学习讲师。"
          },
          {
            name: "人文知识讲师",
            desc: "围绕历史人文、法律常识、旅游攻略、家庭教育等主题，组织长者分享人生经验、知识积累和实用见解。"
          },
          {
            name: "文体指导讲师",
            desc: "围绕唱歌、舞蹈、书画、瑜伽、健身、八段锦、太极等内容，挖掘社区文体达人，带动日常课程和社群活动。"
          },
          {
            name: "健康生活讲师",
            desc: "围绕合理三餐、科学运动、慢病管理、作息睡眠、心理情绪、体检早筛、季节养生和急救安全等内容，开展实用健康生活分享。"
          },
          {
            name: "适老化产品体验官",
            desc: "组织长者体验居家产品、智能适老产品和穿戴适老产品，以真实使用反馈帮助家庭和社区筛选更合适的产品。"
          },
          {
            name: "生活分享博主",
            desc: "鼓励长者围绕美食烹饪、养生食疗、茶艺、插花、服饰搭配、居家收纳等主题进行分享和内容创作。"
          },
          {
            name: "旅拍 / 跟拍摄影师",
            desc: "围绕旅游跟拍、短视频剪辑和回忆录制作，培育银龄影像记录能力，帮助长者记录旅居、家庭和社区生活。"
          }
        ]
      }
    ]
  },
  {
    id: "wellness-travel",
    title: "乐龄旅居",
    label: "Wellness Travel",
    summary: "打造适合银龄群体的文化旅居、疗愈旅居和康养旅居项目，让旅行兼具安全、陪伴与身心调养。",
    scenario: "适用于有社交、休闲、康养、文化体验需求，同时希望获得适老化出行支持的长者。",
    image: "assets/wellness-travel-detail.png",
    intro: "乐龄旅居不是普通旅游，而是围绕银龄群体身体状况、出行节奏、陪护需求和社交需求设计的康养型旅居服务。通过社区组织、专业陪护、健康监测和主题线路，让长者在安全可控的前提下参与文化体验、身心疗愈和社交活动。",
    values: [
      "降低长者独立出行的安全顾虑。",
      "让旅居兼具文化体验、身心调养和社交陪伴。",
      "通过社区组织提升信任度和参与意愿。",
      "形成具有社区特色的银发康养服务 IP。"
    ],
    items: [
      {
        name: "非遗文化旅居",
        desc: "围绕地方非遗、传统技艺和文化体验设计线路，让长者在旅行中参与学习和互动。"
      },
      {
        name: "节气美食旅居",
        desc: "结合二十四节气和地方饮食文化，设计适合长者体质的美食体验与养生行程。"
      },
      {
        name: "静心疗愈旅居",
        desc: "通过安静环境、轻活动、身心放松课程和社群陪伴，帮助长者缓解压力、调节情绪。"
      },
      {
        name: "温泉疗愈旅居",
        desc: "选择适合长者的温泉康养目的地，结合休闲、理疗和安全陪护，提升身体舒适度。"
      },
      {
        name: "睡眠疗愈旅居",
        desc: "围绕睡眠改善、作息调节、环境放松和轻运动安排，帮助长者建立更健康的休息节律。"
      },
      {
        name: "禅修疗愈旅居",
        desc: "结合静心、茶修、禅意文化和轻度活动，提供节奏舒缓的精神疗愈体验。"
      },
      {
        name: "森林氧吧旅居",
        desc: "选择生态环境良好的目的地，安排轻徒步、呼吸放松和自然体验，增强身心活力。"
      },
      {
        name: "中医药养生旅居",
        desc: "结合中医药文化、体质调理、药膳体验和健康讲座，为长者提供养生主题旅居。"
      },
      {
        name: "田园农耕旅居",
        desc: "通过田园体验、农耕互动和慢生活安排，让长者参与自然劳动和乡村社交。"
      },
      {
        name: "运动康养旅居",
        desc: "设计适合银龄群体的轻运动线路，如太极、健步、伸展和康复训练，兼顾安全与活力。"
      },
      {
        name: "书画艺术旅居",
        desc: "围绕写生、书画交流、艺术研学和作品展示，满足长者审美表达和兴趣社交需求。"
      },
      {
        name: "国学养心旅居",
        desc: "结合国学课堂、文化参访和养心活动，打造兼具学习、修养和旅居体验的主题线路。"
      }
    ]
  },
  {
    id: "housekeeping",
    title: "福龄家政",
    label: "Housekeeping",
    summary: "面向长者家庭与社区居民提供安全、可信、普惠的家政便民服务，兼顾居家清洁与康养身心需求。",
    scenario: "适用于高龄老人家庭、行动不便家庭、普通社区居民及有长期家政套餐需求的家庭。",
    image: "assets/housekeeping-detail.png",
    intro: "福龄家政依托社区熟人场景和本土服务团队，为老人家庭和社区居民提供更可信、更便捷、更适老的家政便民服务。服务不仅解决清洁、收纳、烹饪等日常刚需，也关注长者居家安全、生活便利和身心舒适。",
    values: [
      "解决社区居民高频刚需，提升日常生活便利度。",
      "通过社区自营或认证团队提升服务信任感。",
      "为高龄、行动不便家庭提供更适配的居家支持。",
      "带动本地就业培训和社区服务岗位孵化。"
    ],
    items: [
      {
        name: "家庭保洁",
        desc: "提供日常清洁、深度清扫、厨卫整理和居家消杀等服务，帮助长者保持安全、整洁的生活环境。"
      },
      {
        name: "软装清洗",
        desc: "针对窗帘、沙发、床品、地毯等软装进行清洗维护，减少积尘和过敏风险，提升居住舒适度。"
      },
      {
        name: "家电清洗",
        desc: "提供油烟机、空调、冰箱、洗衣机等常用家电清洗服务，降低老人自行清洁的安全风险。"
      },
      {
        name: "家庭收纳",
        desc: "帮助整理衣物、杂物、厨房和药品储物空间，减少绊倒风险，让长者取用物品更方便。"
      },
      {
        name: "餐食烹饪",
        desc: "根据长者口味、咀嚼能力和慢病饮食需求，提供家常餐、软烂餐和营养餐食支持。"
      },
      {
        name: "康养身心",
        desc: "在家政服务之外加入陪伴交流、生活提醒和基础康养建议，让服务更贴近长者实际生活。"
      }
    ]
  },
  {
    id: "smart-renovation",
    title: "适老智装",
    label: "Smart Aging Home",
    summary: "围绕居家安全、无障碍通行、智能监测与紧急呼叫，提供适老化居家改造和智能化改造方案。",
    scenario: "适用于有防跌倒、防走失、紧急呼叫、睡眠监测、厨卫安全和无障碍改造需求的家庭。",
    image: null,
    intro: "适老智装服务围绕长者居家安全和生活便利展开，通过空间改造与智能设备结合，降低跌倒、走失、燃气、水浸、火灾等居家风险。服务重点是让老人住得更安全、家属看护更安心、社区响应更及时。",
    values: [
      "提升长者居家安全，降低意外风险。",
      "让家庭照护从被动发现转向主动预警。",
      "改善厨卫、起居、通行等高风险空间。",
      "为社区智慧养老管理提供设备和数据基础。"
    ],
    groups: [
      {
        name: "适老化居家改造",
        image: "assets/smart-home-renovation-section.png",
        items: [
          {
            name: "无障碍通行",
            desc: "优化门槛、通道、转角和动线，减少轮椅、助行器通行障碍，让长者在家中行动更顺畅。"
          },
          {
            name: "防滑地板",
            desc: "针对卫生间、厨房、阳台等易滑区域进行防滑处理，降低跌倒风险。"
          },
          {
            name: "安全卫浴",
            desc: "改造洗浴、如厕、扶撑和防滑设施，提升长者独立使用卫浴空间的安全性。"
          },
          {
            name: "舒适起居",
            desc: "优化卧室、客厅和活动空间布局，让长者起身、坐卧、取物和休息更加便利。"
          },
          {
            name: "适老厨房",
            desc: "围绕操作台高度、照明、防滑、防烫和储物便利性进行改造，降低厨房使用风险。"
          },
          {
            name: "辅助扶手",
            desc: "在床边、卫生间、走廊、台阶等关键位置安装扶手，提供稳定支撑。"
          }
        ]
      },
      {
        name: "适老化智能改造",
        image: "assets/smart-home-devices-section.png",
        items: [
          {
            name: "睡眠监测仪",
            desc: "持续观察睡眠质量、夜间活动和异常变化，为健康管理和家属关注提供参考。"
          },
          {
            name: "智能床垫",
            desc: "通过非接触方式监测睡眠、离床和部分身体状态，适合独居或高龄长者。"
          },
          {
            name: "智能门磁传感器",
            desc: "监测开关门状态，辅助判断长者外出、夜间活动或异常离家情况。"
          },
          {
            name: "智能手环",
            desc: "提供基础健康监测、定位、提醒和呼叫等能力，便于长者随身使用。"
          },
          {
            name: "毫米波雷达跌倒监测",
            desc: "在不依赖摄像头的情况下识别跌倒和异常静止，兼顾隐私与安全预警。"
          },
          {
            name: "紧急呼叫设备",
            desc: "长者遇到身体不适或突发情况时，可快速发起求助，联动家属或社区响应。"
          },
          {
            name: "智能窗帘系统",
            desc: "减少长者弯腰、攀爬或频繁走动操作窗帘带来的风险，提升起居便利。"
          },
          {
            name: "智能药盒",
            desc: "提供分药、服药提醒和漏服提示，帮助慢病老人提升用药规律性。"
          },
          {
            name: "可燃气体探测器",
            desc: "监测燃气泄漏风险，及时提醒家庭和社区，降低厨房安全隐患。"
          },
          {
            name: "水浸探测器",
            desc: "在厨房、卫生间、阳台等区域监测漏水积水，减少滑倒和财产损失风险。"
          },
          {
            name: "光感烟火灾探测报警器",
            desc: "识别烟雾和火灾风险，及时报警提醒，适合独居和高龄老人家庭。"
          },
          {
            name: "智能照明系统",
            desc: "通过感应照明、夜间起夜灯和场景控制，减少黑暗环境下跌倒风险。"
          }
        ]
      }
    ]
  },
  {
    id: "talent",
    title: "乐龄人才",
    label: "Talent Development",
    summary: "建设社区养老服务人才培养和人才库体系，为社区运营、护理照护、健康管理和家政服务储备专业力量。",
    scenario: "适用于社区主理人、养老护理员、养老服务师、健康管理师等岗位培育和供需匹配。",
    image: null,
    intro: "乐龄人才体系服务于社区养老项目的长期运营，通过定制化培训、岗位实训、人才档案和需求匹配，把社区居民、灵活就业人员、院校学生和专业服务人员转化为可持续服务力量。人才体系越稳定，社区养老服务越能常态化运行。",
    values: [
      "解决社区养老服务无人运营、不会运营、难以持续的问题。",
      "为家政、护理、健康管理和社区运营储备本土人才。",
      "帮助失业及灵活就业人员获得可进入的服务岗位。",
      "支撑平台长期运营和服务标准化。"
    ],
    groups: [
      {
        name: "乐龄人才培育",
        image: "assets/talent-training-section.png",
        items: [
          {
            name: "社区主理人",
            desc: "面向社区运营骨干开展 AIGC 培训与线上线下运营能力训练，提升活动策划、社群维护、内容传播和服务组织能力。"
          },
          {
            name: "失业人群 / 45 岁以上人群",
            desc: "围绕可就业、可上岗、可服务的目标开展职业技能培训，帮助本地居民进入养老、家政、社区服务等岗位。"
          },
          {
            name: "专业人才",
            desc: "面向已有基础的养老、健康、家政和社区服务人员开展精英技能跃升培训，提升专业服务能力和综合服务价值。"
          }
        ]
      },
      {
        name: "乐龄人才库",
        image: "assets/talent-pool-section.png",
        items: [
          {
            name: "人才信息档案",
            desc: "记录人才基础信息、培训经历、技能证书、服务经验和可服务时间，便于统一管理。"
          },
          {
            name: "需求匹配系统",
            desc: "根据社区订单、老人需求和岗位缺口匹配合适人员，提高服务响应效率。"
          },
          {
            name: "社区主理人入库",
            desc: "将具备 AIGC 能力、社群运营能力和线下活动组织能力的人才纳入社区运营人才库。"
          },
          {
            name: "职业技能人才入库",
            desc: "将完成职业技能培训的失业人群和 45 岁以上人群纳入可调度服务人才库，支持就业转化。"
          },
          {
            name: "精英服务人才入库",
            desc: "将完成技能跃升的专业人才纳入重点人才储备，用于复杂服务、专业咨询和项目标准化输出。"
          }
        ]
      }
    ]
  },
  {
    id: "institution-selection",
    title: "百龄帮机构甄选",
    label: "Institution Selection",
    summary: "专注为长者对接光大百龄帮四川区域养老机构，提供筛选、评估、入住全流程支持。",
    scenario: "适用于高龄、失能、半失能、独居、无人照料或需要专业机构照护的老人及其家庭。",
    image: "assets/institution-selection-detail.png",
    intro: "光大百龄帮秉持央企初心，深耕四川养老服务。旗下 10 家机构配套完善、环境适老，配备专业照护团队，融合生活照料、健康管理、康复护理与文娱服务，全方位守护长者身心，让长者开心幸福每一天。",
    values: [
      "帮助家庭降低筛选养老机构的信息成本。",
      "通过社区可信入口提升机构对接安全感。",
      "根据身体状况、预算和护理等级匹配合适机构。",
      "提供考察、手续、档案和过渡适配等连续支持。"
    ],
    items: [
      {
        name: "光大百龄帮乐顺养老中心吉龙苑",
        desc: "纳入机构资源清单，便于为有入住需求的家庭进行机构了解、条件比对和对接咨询。"
      },
      {
        name: "光大百龄帮乐顺养老中心新川苑",
        desc: "作为合作备选机构之一，可根据老人护理等级、区位需求和预算情况进行匹配。"
      },
      {
        name: "光大百龄帮幸福龄雅安康养中心",
        desc: "面向有颐养、护理和生活照护需求的家庭，提供机构信息整理和考察支持。"
      },
      {
        name: "光大百龄帮都江堰颐养中心",
        desc: "可作为康养型机构选择之一，帮助家庭了解环境、服务能力和入住条件。"
      },
      {
        name: "光大百龄帮成都街子寿美康养中心",
        desc: "面向康养、长期照护和环境适配需求，提供机构甄选和对接参考。"
      },
      {
        name: "光大百龄帮广安万贯颐养中心",
        desc: "纳入跨区域康养机构资源，为有异地康养或家庭区位匹配需求的老人提供选择。"
      },
      {
        name: "光大百龄帮彩生活福邻颐养中心",
        desc: "作为康养护理机构资源，支持家庭进行服务项目、护理条件和费用结构了解。"
      },
      {
        name: "光大百龄帮德恩堂养老护理中心",
        desc: "面向需要护理支持的老人家庭，提供机构资质、护理能力和入住流程咨询。"
      },
      {
        name: "什邡宜康康养中心",
        desc: "作为机构甄选资源之一，根据老人身体状态和照护偏好进行匹配推荐。"
      },
      {
        name: "绵阳小枧宜康康养中心",
        desc: "纳入康养机构备选清单，便于家庭比较不同区域、环境和服务条件。"
      }
    ]
  }
];

function createServiceCards() {
  const grid = document.querySelector("#serviceGrid");
  if (!grid) return;

  grid.innerHTML = services
    .map((service, index) => {
      const count = service.items?.length || service.groups?.reduce((sum, group) => sum + group.items.length, 0) || 0;
      return `
        <a class="service-card" href="detail.html?service=${service.id}">
          <span class="service-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="service-label">${service.label}</span>
          <h3>${service.title}</h3>
          <p>${service.summary}</p>
          <span class="service-meta">${count} 项服务内容</span>
        </a>
      `;
    })
    .join("");
}

function renderDetailPage() {
  const title = document.querySelector("#detailTitle");
  if (!title) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("service") || services[0].id;
  const service = services.find((item) => item.id === id) || services[0];
  const currentIndex = services.findIndex((item) => item.id === service.id);
  const prevService = services[(currentIndex - 1 + services.length) % services.length];
  const nextService = services[(currentIndex + 1) % services.length];

  document.title = `${service.title} · 幸福龄智慧社区`;
  document.querySelector("#detailEyebrow").textContent = service.label;
  title.textContent = service.title;
  document.querySelector("#detailSummary").textContent = service.summary;
  document.querySelector("#detailScenario").textContent = service.scenario;
  document.querySelector("#detailIntro").textContent = service.intro || "围绕该服务方向，平台将具体项目、服务流程和适用人群进行整合，让用户能够快速理解服务内容，并根据家庭或社区需求选择合适的服务支持。";

  const image = document.querySelector("#detailImage");
  if (service.image === null) {
    image.hidden = true;
    image.style.backgroundImage = "";
  } else if (service.image) {
    image.style.backgroundImage = `url("${service.image}")`;
    image.hidden = false;
  } else {
    image.style.backgroundImage = "url(\"assets/services-community.png\")";
    image.hidden = false;
  }

  const values = document.querySelector("#detailValues");
  values.innerHTML = (service.values || [
    "帮助用户更快理解服务内容与适用边界。",
    "将分散服务整合为社区可触达的一站式入口。",
    "提升服务匹配效率，减少家庭自行筛选成本。"
  ]).map((value) => `<li>${value}</li>`).join("");

  renderDetailSwitch(prevService, nextService);

  const list = document.querySelector("#detailList");
  if (service.groups) {
    list.innerHTML = service.groups
      .map((group) => `
        <section class="detail-group">
          <h3>${group.name}</h3>
          ${group.image ? `<div class="group-image" style="background-image:url('${group.image}')" aria-hidden="true"></div>` : ""}
          ${group.items.some((item) => typeof item === "object")
            ? `<div class="explain-grid">${group.items.map((item) => `
                <article class="explain-card">
                  <h3>${item.name}</h3>
                  <p>${item.desc}</p>
                </article>
              `).join("")}</div>`
            : `<div class="tag-list">${group.items.map((item) => `<span>${item}</span>`).join("")}</div>`}
        </section>
      `)
      .join("");
    return;
  }

  if (service.items?.some((item) => typeof item === "object")) {
    list.innerHTML = `<div class="explain-grid">${service.items.map((item) => `
      <article class="explain-card">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </article>
    `).join("")}</div>`;
    return;
  }

  list.innerHTML = `<div class="tag-list">${service.items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function renderDetailSwitch(prevService, nextService) {
  const top = document.querySelector("#detailSwitchTop");
  const bottom = document.querySelector("#detailSwitchBottom");
  if (!top || !bottom) return;

  const prevHref = `detail.html?service=${prevService.id}`;
  const nextHref = `detail.html?service=${nextService.id}`;

  top.innerHTML = `
    <a href="${prevHref}">← 上一项：${prevService.title}</a>
    <a href="index.html#services">返回九大服务</a>
    <a href="${nextHref}">下一项：${nextService.title} →</a>
  `;

  bottom.innerHTML = `
    <div class="switch-card prev">
      <span>上一项</span>
      <a href="${prevHref}">← ${prevService.title}</a>
    </div>
    <a class="switch-home" href="index.html#services">返回九大服务</a>
    <div class="switch-card next">
      <span>下一项</span>
      <a href="${nextHref}">${nextService.title} →</a>
    </div>
  `;
}

createServiceCards();
renderDetailPage();
