<template>
  <div class="sj">
    <van-nav-bar :title="list.ypName" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="main">
      <img :src="list.imgSrc" alt />
      <ul style="margin-bottom:1rem">
        <li>
          <span>药品名称 :</span>
          {{list.ypName}}
        </li>
        <li>
          <span>性状 ：</span>
          {{list.xz}}
        </li>
        <li>
          <span>用法用量 ：</span>
          {{list.yf}}
        </li>
        <li>
          <span>成份 ：</span>
          {{list.cf}}
        </li>
        <li>
          <span>治疗疾病 ：</span>
          {{list.zljb}}
        </li>
        <li>
          <span>药物相互作用 ：</span>
          {{list.ywxhzy}}
        </li>
        <li>
          <span>注意事项 ：</span>
          {{list.zysx}}
        </li>
        <li>
          <p style="font-size:0.25rem;color:#aaa;text-align:center">本页面信息仅供参考，请以产品实际附带说明书为准。</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "sj",
  data() {
    return {
      sjlist: this.list,
      list: [
        {
          imgSrc: "static/img/yp1.jpg",
          ypName: "玉屏风颗粒",
          xz: "本品为棕褐色颗粒。味甜、微苦。",
          yf: "开水冲服，一次5克，一日3次。",
          cf: "黄芪、防风、白术(炒).辅料为甘露醇、糊精、甜菊素、枸 橼酸。",
          zljb: "过敏性鼻炎,感冒,慢性荨麻疹,流行性感冒,小儿感冒,慢性阻塞性肺病",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx:
            "1.忌油腻食物。2.本品宜饭前服用。3.按照用法用量服用，小儿、孕妇、高血压、糖尿病患者应在医师指导下服用。4.服药二周或服药期间症状无明显改善，或症状加重者，应立即停药并去医院就诊。5.对本品过敏者禁用，过敏体质者慎用。6.本品性状发生改变时禁止使用。7.儿童必须在成人监护下使用。8.请将本品放在儿童不能接触的地方。9.如正在使用其他药品，使用本品前请咨询医师或药师。"
        },
        {
          imgSrc: "static/img/yp2.jpg",
          ypName: "999感冒灵颗粒",
          xz: "本品为浅棕色至深棕色的颗粒，味甜、微苦",
          yf: "开水冲服，一次1袋，一日3次。小儿减量或遵医嘱。",
          cf:
            "三叉苦、岗梅、金盏银盘、薄荷油、野菊花、马来酸氯苯那敏、咖啡因、对乙酰氨基酚。辅料为蔗糖粉。",
          zljb:
            "解热镇痛功效，用于因感冒引起的头痛，发热，鼻塞，流涕，咽痛等症状",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx:
            "1.忌烟，酒及辛辣，生冷，油腻食物。2.不宜在服药期间同时服用滋补性中成药3. 高血压、心脏病、肝病、肾病等慢性病严重者应在医师指导下服用。4.本品含对乙氨基酚，马来酸氨苯那敏，咖啡因。服用本品期间不得饮酒或含有酒精的饮料；不能同时服用与本品成分相似的其它抗感冒药；肝，肾功能不全者慎用；膀胱颈梗阻，甲状腺功能亢进，青光眼，高血压和前列腺肥大者慎用；孕妇及哺乳期妇女慎用；服药期间不得驾驶机，车，船，从事高空作业，机械作业及操作精密仪器。5.脾胃虚寒，症见腹痛，喜暖，泄泻者慎用。6.糖尿病患者、消化道溃疡患者、膀胱颈梗阻、幽门十二指肠梗阻、甲状腺机能亢进、青光眼以及前列腺肥大等患者慎用。7.儿童，年老体弱者应在医师指导下使用。8.服药3天后症状无改善，或症状加重，或出现新的严重症状如胸闷，心悸等应立即停药，并去医院就诊。9.对本药过敏者禁用，过敏体质者慎用。10. 本品性状发生改变时禁止使用。11.儿童必须在成人监护下使用。12.请将本品放在儿童不能接触的地方。13.如正在使用其他药品，使用本品前请咨询医师或药师.14.三九感冒灵颗粒是复方药，里面含有中西药成分，不宜和西药感冒药同服。如果两种药中含有同一种成分，就只能选择服用其中一种，以免使摄入药量加倍，增加毒性，成为重复用药 [3]  。比如，三九感冒灵颗粒和西药泰诺，都含有解热镇痛效果的“扑热息痛”成分，若是两种药一起吃，过量的“扑热息痛”会对人体肝脏造成损害。"
        },
        {
          imgSrc: "static/img/yp3.jpg",
          ypName: "复方感冒灵片",
          xz: "本品为薄膜衣片，除去薄膜衣片后，显棕褐色至棕黑色；味苦。",
          yf: "口服，一次2片，一日3次，两天为一疗程。",
          cf:
            "本品为复方制剂，金银花、五指柑、野菊花、三叉苦、南板蓝根、岗梅、对乙酰氨基酚、马来酸氯苯那敏、咖啡因。辅料为：淀粉、糊精、甘露醇、羟丙纤维素、羧甲淀粉钠、硬脂酸镁、聚维酮K30、薄膜包衣预混剂。",
          zljb:
            "辛凉解表，清热解毒。用于风热感冒之发热，微恶风寒，头身痛，口干而渴，鼻塞涕浊，咽喉红肿疼痛，咳嗽，痰黄粘稠。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。2.不宜在服药期间同时服用滋补性中药。3.风寒感冒者不适用，其表现为恶寒重，发热轻，无汗，头痛，鼻塞，流清涕，喉痒咳嗽。4.本品含对乙酰氨基酚、马来酸氯苯那敏、咖啡因。服用本品期间不得饮酒或含有酒精的饮料；不能同时服用与本品成份相似的其他抗感冒药；肝、肾功能不全者慎用；膀胱颈梗阻、甲状腺功能亢进、青光眼、高血压和前列腺肥大者慎用；孕妇及哺乳期妇女慎用；服药期间不得驾驶机、车、船、从事高空作业、机械作业及操作精密仪器。5.心脏病、糖尿病等慢性病严重者应在医师指导下服用。6.严格按用法用量服用，儿童、年老体弱者应在医师指导下服用。7.服药2天症状无缓解，应去医院就诊。8.对本品过敏者禁用，过敏体质者慎用。9.本品性状发生改变时禁止使用。10.儿童必须在成人监护下使用。11.请将本品放在儿童不能接触的地方。12.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp4.jpg",
          ypName: "美林",
          xz: "本品为橙色混悬液，味甜，有调味剂的芳香。",
          yf: "口服。",
          cf:
            "本品每毫升含主要成份布洛芬20毫克。辅料为：预胶化淀粉、黄原胶、甘油、蔗糖、无水枸椽酸、苯甲酸钠、吐温80、食用色素、食用香精、纯水。",
          zljb:
            "用于儿童普通感冒或流感引起的发热、头痛，也用于缓解儿童轻至中度疼痛如头痛、关节痛、神经痛、偏头痛、牙痛、肌肉痛、神经痛。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品为对症治疗药，不宜长期或大量使用，用于止痛不得超过5天；用于解热不得超过3天，症状不缓解，请咨询医师或药师。
　　2.有下列情况患者慎用：支气管哮喘、肝肾功能不全、凝血机制或血小板功能障碍（如血友病）。
　　3.下列情况患者应在医师指导下使用：有消化性溃疡史、胃肠道出血、心功能不全、高血压。
　　4.1岁以下儿童应在医师指导下使用。
　　5.不能同时服用其他含有解热镇痛药的药品（如某些复方抗感冒药）。
　　6.如服用过量或出现严重不良反应，应立即就医。
　　7.对本品过敏者禁用，过敏体质者慎用。
　　8.本品性状发生改变时禁止使用。
　　9.请将本品放在儿童不能接触的地方。
　　10.儿童必须在成人监护下使用。
　　11.如正在使用其他药品，使用本品前请咨询医师或药师。
　　12.本品配有儿童安全盖，其打开方式见说明书所附图示。
　　13.如出现胃肠道出血或溃疡、胸痛、气短、无力、言语含糊等情况，应停药并咨询医师。
　　14.第一次使用本品如出现皮疹或过敏症状，应停药并咨询医师。`
        },
        {
          imgSrc: "static/img/yp5.jpg",
          ypName: "保济丸",
          xz: "本品为朱红色的水丸；气芳香，味微苦、辛。",
          yf: "口服，一次1.85～3.7克，一日3次。",
          cf:
            "钩藤，菊花，蒺藜，厚朴，木香，苍术，天花粉，广藿香，葛根，化橘红，白芷，薏苡仁，稻芽，薄荷，茯苓，广东神曲",
          zljb:
            "用于暑湿感冒，症见发热头痛、腹痛腹泻、恶心呕吐、肠胃不适；亦用于晕车晕船。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。
2.不宜在服药期间同时服用滋补性中药。
3.外感燥热者不宜服用。
4.有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
5.儿童、孕妇、哺乳期妇女、年老体弱者应在医师指导下服用。
6.发热体温超过38.5℃的患者，应去医院就诊。
7.吐泻严重者应及时去医院就诊。
8.服药3天症状无缓解，应去医院就诊。
9.对本品过敏者禁用，过敏体质者慎用。
10.本品性状发生改变时禁止使用。
11.儿童必须在成人监护下使用。
12.请将本品放在儿童不能接触的地方。
13.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp6.jpg",
          ypName: "清火栀麦片",
          xz: "本品为糖衣片，除去糖衣后显褐绿色或黄褐色至棕褐色，味极苦。",
          yf: "口服。一次2片，一日2次。",
          cf: "穿心莲，栀子，麦冬",
          zljb: "用于肺胃热盛所致的咽喉肿痛，发热，牙痛，目赤。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣食物。
2.不宜在服药期间同时服用滋补性中药。
3.有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
4.儿童、孕妇、哺乳期妇女、年老体弱及脾虚便溏者应在医师指导下服用。
5.发热体温超过38.5℃的患者，应去医院就诊。
6.服药3天症状无缓解，应去医院就诊。
7.对本品过敏者禁用，过敏体质者慎用。
8.本品性状发生改变时禁止使用。
9.儿童必须在成人监护下使用。
10.请将本品放在儿童不能接触的地方。
11.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp7.jpg",
          ypName: "清咽滴丸",
          xz: "本品为棕褐色至黑褐色的滴丸；味微苦涩，气辛凉。",
          yf: "含服，一次4～6粒，一日3次。",
          cf: "薄荷脑、青黛、冰片、诃子、甘草、人工牛黄，辅料为聚乙二醇6000.",
          zljb:
            "疏风清热，解毒利咽。用于风热喉痹，咽痛，咽干，口渴；或微恶风，发热，咽部红肿，急性咽炎见上述证候者。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌辛辣、鱼腥食物。
2.孕妇慎用。
3.不宜在服药期间同时服用温补性中成药。
4.服药三天后症状无改善，或出现其他症状，应去医院就诊。
5.按照用法用量服用，儿童应在医师指导下服用。
6.对本品过敏者禁用，过敏体质者慎用。
7.本品性状发生改变时禁止使用。
8.儿童必须在成人的监护下使用。
9.请将本品放在儿童不能接触的地方。
10.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp8.jpg",
          ypName: "鼻舒适片",
          xz: "本品为糖衣片，除去糖衣后显灰褐色；味微苦。",
          yf: "口服，一次4-5片，一日3次。",
          cf:
            "苍耳子、野菊花、鹅不食草、白芷、防风、墨旱莲、白芍、胆南星、蒺藜、甘草、扑尔敏。.",
          zljb:
            "清热消炎，通窍。用于治疗慢性鼻炎引起的喷嚏、流涕、鼻塞、头痛，过敏性鼻炎，慢性鼻窦炎。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `尚不明确。`
        },
        {
          imgSrc: "static/img/yp9.jpg",
          ypName: "痰热清注射液",
          xz: "本品为棕红色澄明液体。",
          yf:
            "常用量 成人一般一次20ml，重症患者一次可用40ml，加入5%葡萄糖注射液或0.9%氯化钠注射液250～500ml，静脉滴注，控制滴数每分钟不超过60滴，一日1次；儿童按体重0.3～0.5ml/kg，最高剂量不超过20ml，加入5%葡萄糖注射液或0.9%氯化钠注射液100～200ml，静脉滴注，控制滴数每分钟30～60滴，一日1次；或遵医嘱。",
          cf: "黄芩、熊胆粉、山羊角、金银花、连翘、辅料为丙二醇。",
          zljb:
            "清热、化痰、解毒。用于风温肺热病痰热阻肺证，症见：发热、咳嗽、咯痰不爽、咽喉肿痛、口渴、舌红、苔黄；肺炎早期、急性支气管炎、慢性支气管炎急性发作以及上呼吸道感染属上述证候者。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品不良反应包括极其罕见过敏性休克，用药过程中应密切观察用药反应，特别是开始5~30分钟； 一旦出现过敏反应或其他严重不良反应，应立即停药并及时救治；同时应妥善保留相关药品、患者使用后残存药液及输液用所有器具、采集患者血样并冷藏，以备追溯不良反应产生的原因。
2.本品用于风温肺热病属痰热阻肺证及风热感冒等，对寒痰阻肺和风寒感冒属不对症治疗范畴，故而在临床使用过程中要注意寒热辨证合理应用。
3.稀释溶媒的温度要适宜，确保在输液时药液为室温，—般在20℃~30℃之间为宜。
4.药液稀释倍数不低于1：10（药液：溶媒），稀释后药液必须在4小时内使用。
5.用药前应认真检查药品以及配制后的滴注液，发现药液出现浑浊、沉淀、变色、结晶等药物性状改变以及瓶盖气、瓶身细微破裂者，均不得使用。
6.不得和其它药物混合滴注。
7.如需联合用药，在换药时需先用5%葡萄糖注射液或0.9%氯化钠注射液（50mL以上）冲洗输液管或更换新的输液器，并应保持一定的时间间隔，以免药物相互作用产生不良反应。
8.该药在输液过程中，液体应经过过滤器，若发现有气泡，应减慢滴速。严格控制输液速度，儿童以30~40滴/分为宜，成年人以30~60滴/分为宜，滴速过快或有渗漏可引起头晕、胸闷或局部疼痛。
9.对老年人、肝肾功能异常患者等特殊人群应慎重使用，加强监测。`
        },
        {
          imgSrc: "static/img/yp10.jpg",
          ypName: "穿心莲片",
          xz: "本品为糖衣片或薄膜衣片，除去包衣后显灰褐色至棕褐色；味苦。",
          yf:
            " 口服。一次2～3片（小片），一日3～4次；或一次1～2片（大片），一日3次。",
          cf: "穿心莲",
          zljb:
            "用于邪毒内盛，感冒发烧，咽喉肿痛，口舌生疮，顿咳劳嗽，泄泻痢疾，热淋涩痛，痈肿疮疡，毒蛇咬伤。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟酒、辛辣、鱼腥食物。
2.不宜在服药期间同时服用滋补性中药。
3.有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
4.儿童、孕妇、哺乳期妇女、年老体弱、脾虚便溏者应在医师指导下服用。
5.服药3天症状无缓解，应去医院就诊。
6.对本品过敏者禁用，过敏体质者慎用。
7.本品性状发生改变时禁止使用。
8.儿童必须在成人监护下使用。
9.请将本品放在儿童不能接触的地方。
10.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp11.jpg",
          ypName: "藿香正气口服液",
          xz: "本品为棕色的澄清液体；味辛、微甜。",
          yf: " 口服。一日2次，用时摇匀。",
          cf:
            "苍术、陈皮、厚朴（姜制）、白芷、茯苓、大腹皮、生半夏、甘草浸膏、广藿香油、紫苏叶油。辅料为聚山梨酯-80、肉桂油。",
          zljb:
            "解表化湿，理气和中。用于外感风寒、内伤湿滞或夏伤暑湿所致的感冒，症见头痛昏重、胸膈痞闷、脘腹胀痛、呕吐泄泻；胃肠型感冒见上述证候者。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1、忌烟、酒及辛辣、生冷、油腻食物，饮食宜清淡。
2、不宜在服药期间同时服用滋补性中药。
3、有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
4、儿童、孕妇、哺乳期妇女、年老体弱者应在医师指导下服用。
5、吐泻严重者应及时去医院就诊。
6、严格按用法用量服用，本品不宜长期服用。
7、服药3天症状无缓解，应去医院就诊。
8、对本品过敏者禁用，过敏体质者慎用。
9、本品性状发生改变时禁止使用。
10、儿童必须在成人监护下使用。
11、请将本品放在儿童不能接触的地方。
12、如正在使用其他药品，使用本品前请咨询医师或药师。
13、在服药后20分钟内不得驾驶机动车、 船， 从事高空作业、 机械作业及操作精密仪器。`
        },
        {
          imgSrc: "static/img/yp12.jpg",
          ypName: "武力拔寒散",
          xz: "本品为棕褐色的粉末；气微香，味麻辣。",
          yf:
            " 外用。取药粉适量，用鸡蛋清略加温开水调成糊状，分摊于蜡纸上，贴于穴位或患处。",
          cf: "白花菜子、花椒（青椒去目）。",
          zljb:
            "祛风散寒，活血通络。用于感受风寒，筋骨麻木，肩背酸痛，腰痛寒腿，饮食失调，胃寒作痛，肾寒精冷，子宫寒冷，行经腹痛，寒湿带下。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `忌食生冷；肚脐及脚心部位不可贴用；周身感受风寒者，先贴较重处。每次贴2～3小时后揭去，如贴之痛甚者，可提前揭下（感到疼痛时，立即揭下）。`
        },
        {
          imgSrc: "static/img/yp13.jpg",
          ypName: "通天口服液",
          xz: "本品为棕色的液体：气香，味辛，微苦涩。",
          yf:
            " 口服。第1日：即刻、服药1小时后、2小时后、4小时后各服10毫升。以后每6小时服10毫升。第2日、3日服法：一次10毫升，一日3次，2天为一个疗程；或遵医嘱。",
          cf:
            "方中川芎、赤芍活血化瘀；羌活、白芷、细辛、防风、薄荷、菊花、茶叶祛风止痛；天麻平肝祛风通络；甘草调和诸药。诸药合用，共奏活血化瘀，祛风止痛之功。",
          zljb:
            "用于瘀血阻滞，风邪上扰所致的偏头痛，症见头部胀痛或刺痛，痛有定处，反复发作，头晕目眩，或恶心呕吐，恶风。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟，酒及辛辣食物。
2.高血压头痛及不明原因的头痛，应去医院就诊。
3.有心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
4.儿童、哺乳期妇女、年老体弱者应在医师指导下服用。
5.头晕目眩严重者，应及时去医院就诊。
6.严格按照用法用量服用，本品不宜长期服用。
7.服药3天症状无缓解，应去医院就诊。
8.对本品过敏者禁用，过敏体质者慎用。
9.本批性状发生改变时禁止使用。
10.儿童必须在成人监护下使用。
11.请将本品放在儿童不能接触的地方。
12.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp14.jpg",
          ypName: "新清宁片",
          xz: "本品为糖衣片，除去糖衣后显棕黑色；味微苦、涩。",
          yf:
            " 口服。一次3～5片，一日3次；必要时可适当增量；学龄前儿童酌减或遵医嘱；用于便秘，临睡前服5片。",
          cf:
            "方中熟大黄苦，寒。归脾、胃、大肠、肝、心包经。泻热通肠，凉血解毒，逐瘀通经。用于实热便秘，积滞腹痛，泻痢不爽，湿热黄疸，血热吐衄，目赤，咽肿，肠痈腹痛，痈肿疔疮；上消化道出血。熟大黄泻下力缓，泻火解毒之功。",
          zljb:
            "用于内结实热所致的喉肿、牙痛、目赤、便秘、下痢、发热；感染性炎症见上述证候者。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1、忌烟、酒及辛辣食物。
2、不宜在服药期间同时服用滋补性中药。
3、有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
4、服药后大便次数增多且不成形者，应酌情减量。
5、儿童、孕妇、哺乳期妇女、年老体弱及脾虚便溏者应在医师指导下服用。
6、发热体温超过38.5℃的患者，应去医院就诊。
7、严格按用法用量服用，本品不宜长期服用。
8、服药3天症状无缓解，应去医院就诊。
9、对本品过敏者禁用，过敏体质者慎用。
10、本品性状发生改变时禁止使用。
11、儿童必须在成人监护下使用。
12、请将本品放在儿童不能接触的地方。
13、如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp15.jpg",
          ypName: "清凉油",
          xz: "本品为类白色或淡黄色软膏，对皮肤表面有清凉刺激感。",
          yf: " 搽于头部太阳穴或患处，一日2～3次。",
          cf: "薄荷脑、薄荷素油、樟脑、桉油、丁香油、肉桂油、樟脑油。",
          zljb:
            "清凉散热，醒脑提神，止痒止痛。用于感冒头痛，中暑，晕车，蚊虫叮咬。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1．本品为外用药，禁止内服。
2．使用本品时切勿触及眼睛、口腔等黏膜，皮肤破损处忌用。
3．孕妇慎用。
4．涂布部位如有明显灼热感或瘙痒、局部红肿等情况，应停止用药，洗净，必要时向医师咨询。
5．对本品过敏者禁用，过敏体质者慎用。
6．本品性状发生改变时禁止使用。
7．儿童必须在成人监护下使用。
8．请将本品放在儿童不能接触的地方。`
        },
        {
          imgSrc: "static/img/yp16.jpg",
          ypName: "白花油",
          xz: "本品为无色或微黄色的透明液体；有较强烈的特异香气。",
          yf: " 外用，搽抹患处。",
          cf: "薄荷脑、樟脑、冰片、水杨酸甲酯、桉油、薰衣草油。辅料为液状石蜡",
          zljb:
            "疏风止痒，理气止痛，消疲提神。用于关节酸痛，伤风感冒，头痛鼻塞，扭伤。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品供外用涂擦。
2.涂布部位如有明显灼烧感或瘙痒、局部红肿等情况，应停止用药，洗净，必要时向医师咨询。
3.对本品过敏者禁用，过敏体质者慎用。
4.孕妇慎用。
5.药品性状发生改变时禁止使用。
6.儿童必须在成人的监护下使用。
7.请将此药品放在儿童不能接触的地方。
8.如正在服用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp17.jpg",
          ypName: "风油精",
          xz: "本品为淡绿色澄清油状液体；有特殊的香气，味凉而辣。",
          yf: " 外用，涂擦于患处。口服，一次4-6滴。",
          cf:
            "主要成份：薄荷脑、水杨酸甲酯、樟脑、桉油、丁香酚，辅料为：液状石蜡、叶绿素、香精。",
          zljb:
            "清凉，止痛，驱风，止痒。用于蚊虫叮咬及伤风感冒引起的头痛，头晕，晕车不适。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.孕妇和三岁以下儿童慎用。
2.皮肤有烫伤、损伤及溃疡者禁用。
3.涂药时注意不要将药误入眼内。
4.外搽后皮肤出现皮疹瘙痒者应停用。
5.瓶盖宜拧紧，以防止药物挥发。
6.对本品过敏者禁用，过敏体质者慎用。
7.本品性状发生改变时禁止使用。
8.儿童必须在成人监护下使用。
9.请将本品放在儿童不能接触的地方。
10.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp18.jpg",
          ypName: "足光散",
          xz: "本品为浅黄棕色至浅红棕色的粉末",
          yf:
            " 外用，取药粉40克加沸水1000～1500毫升，或取药粉20克加沸水500～750毫升，搅拌，溶解，放温，趁热浸泡患处20～30分钟，一日1次，连续三日为一疗程。",
          cf:
            "水杨酸、苯甲酸、硼酸、苦参。辅料为滑石粉成分组成的，为浅黄棕色至浅红棕色粉末",
          zljb: "清热燥湿，杀虫敛汗。用于湿热下注所致的角化型手足癣及臭汗症。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品为外用药，禁止内服。
2.忌食辛辣、刺激性食物。
3.切勿接触眼睛、口腔等黏膜处。皮肤破溃处禁用。
4.用药一次，观察3日，无不良反应，可连续使用3次；如症状无缓解，应去医院就诊。
5.对本品过敏者禁用，过敏体质者慎用。
6.本品性状发生改变时禁止使用。
7.请将本品放在儿童不能接触的地方。
8.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp19.jpg",
          ypName: "华佗膏",
          xz: "本品为淡黄色的软膏；气特异。",
          yf: " 外用;洗净后，涂搽患处。",
          cf: "蜡梅油、樟脑、苯甲酸、水杨酸、黄凡士林、石蜡。",
          zljb: "杀菌止痒。用于癣症湿气，脚趾痒，鹅掌风。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品为外用药，禁止内服。
2.忌食辛辣、刺激性食物。
3.切勿接触眼睛、口腔等黏膜处。
4.哺乳期妇女慎用。儿童、年老体弱者应在医师指导下使用。因糖尿病、肾病、肝病、肿瘤等疾病引起的皮肤瘙痒，不属本品适应范围。
5.糜烂型脚湿气及伴有继发感染（化脓）者应及时上医院就诊。
6.涂药部位如有烧灼感，瘙痒加重或红肿，应停止使用，洗净，必要时向医师咨询。
7.本品对皮肤有一定刺激性，用于股癣时应特别注意，不宜使药膏接触到阴囊、外阴等皮肤细薄处，本品不宜长期或大面积使用。
8.用药3天症状无缓解，应去医院就诊。
9.过敏体质者慎用。
10.本品性状发生改变时禁止使用。
11.儿童必须在成人监护下使用。
12.请将本品放在儿童不能接触的地方。
13.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp20.jpg",
          ypName: "虎标万金油",
          xz: "本品为乳白色软膏，气芳香。",
          yf: " 外用，涂擦患处。",
          cf: "樟脑、薄荷油、玉树油、薄荷脑、丁香油、石蜡、凡士林。",
          zljb:
            "芳香通窍，祛风止痒，清凉辟秽。用于蚊叮虫咬，皮肤发痒，头痛鼻塞。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品为外用药，禁止内服。
2.忌食辛辣刺激性食物。
3.切勿接触眼睛、口腔等黏膜处。皮肤破溃处禁用。
4.儿童、孕妇、哺乳期妇女及年老体弱者应在医师指导下使用。
5.因糖尿病、肾病、肝病、肿瘤等疾病引起的皮肤瘙痒，不属本品适应范围。
6.首次使用本品，需先擦微量于局部患处，如皮肤呈现刺激现象请即刻停止使用。
7.本品不宜长期或大面积使用，用药后皮肤过敏者应停止使用，症状严重者应去医院就诊。
8.用药7天症状无缓解应去医院就诊。
9.对本品过敏者禁用，过敏体质者慎用。
10.本品性状发生改变时禁止使用。
11.儿童必须在成人监护下使用。
12.请将本品放在儿童不能接触的地方。
13.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp21.jpg",
          ypName: "青鹏软膏",
          xz: "本品为浅黄色软膏，气微，味苦、甘。",
          yf: " 外用。取本品适量涂于患处，一日2次。",
          cf:
            "棘豆、亚大黄、铁棒锤、诃子(去核)、毛诃子、余甘子、安息香、宽筋藤、人工麝香。",
          zljb:
            "活血化瘀、消肿止痛。用于风湿性关节炎、类风湿性关节炎、骨关节炎、痛风、急慢性扭挫伤、肩周炎引起的关节、肌肉肿胀疼痛及皮肤瘙痒、湿疹。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `请勿口服，放在儿童触及不到之处；破损皮肤禁用；孕妇禁用。`
        },
        {
          imgSrc: "static/img/yp22.jpg",
          ypName: "新肤螨灵软膏",
          xz: "本品为类白色至淡黄色的软膏。",
          yf: " 外用，涂擦患处，一天2次;",
          cf:
            "大风子、蛇床子、百部、仙鹤草、白芷、甲硝唑、十八醇、液体石腊、甘油、三乙醇胺、羟苯乙酯、香精。",
          zljb: "杀螨止痒。用于治疗痤疮。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `（1）面部湿疹或过敏性皮炎者慎用；（2）少数患者用药时出现轻度潮红、灼热感，属治疗反应，一般不影响继续使用；严重者可请医生处置；（3）用药期间勿使用其他化妆品，不要饮酒和吃辛辣食物。`
        },
        {
          imgSrc: "static/img/yp23.jpg",
          ypName: "郁金银屑片",
          xz: "本品为糖衣片，除去包衣后显黄棕色至棕褐色；气香，味微苦、涩",
          yf: " 口服，一次3-6片，一日2-3次。",
          cf:
            "秦艽、郁金（醋制）、莪术（醋制）、当归、桃仁、红花、马钱子粉、土鳖虫、乳香（醋制）、香附（酒制）、大黄、木鳖子（去壳砸碎）、雄黄、石菖蒲、关黄柏、皂角刺、玄明粉、青黛",
          zljb:
            "疏通气血，软坚消积，清热解毒，燥湿杀虫。用于银屑病（牛皮鲜）。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.运动员慎用
2.在专科医生指导下应用。`
        },
        {
          imgSrc: "static/img/yp24.jpg",
          ypName: "荆肤止痒颗粒",
          xz: "本品为浅棕色至棕褐色颗粒；气香、味甜、微苦。",
          yf:
            " 开水冲服，6至14岁每次1袋，一日3次；3至5岁每次1袋，一日2次；1至2岁每次半袋，一日3次；一岁以下每次半袋，一日2次。",
          cf:
            "荆芥、地肤子、防风、野菊花、鱼腥草、茯苓、山楂（炒焦）。辅料为糊精、环拉酸钠。",
          zljb:
            "祛风、除湿，清热解毒、止痒。用于儿童风热型或湿热型丘疹性荨麻疹。症状可见脓疱疮、风团、水疱、瘙痒等。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.饮食宜清淡，忌食油腻鱼虾海鲜类及辛辣食物。
2.服用或注射某种药物而发生的荨麻疹为药物过敏（药疹）所致，应及时到医院就诊。
3.婴儿或患有其他疾病者应在医师指导下服用。
4.如出现脓疱疮，应在医师指导下服用。
5.因肾病、糖尿病、黄疸、肿瘤等疾病引起的皮肤瘙痒，应以治疗病因为主，若需用本品时，应在医师指导下服用。
6.服药3～6天症状无缓解，应去医院就诊。
7.对本品过敏者禁用，过敏体质者慎用。
8.本品性状发生改变时禁止使用。
9.儿童必须在成人监护下使用。
10.请将本品放在儿童不能接触的地方。
11.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp25.jpg",
          ypName: "老鹳草软膏",
          xz: "本品为棕黄色至棕褐色或褐紫色的软膏。",
          yf: " 外用，涂敷患处，一日1次。",
          cf: "老鹳草",
          zljb: "湿毒蕴结所致的湿疹、痈、疔、疮、疖及小面积水、火烫伤。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `尚不明确。`
        },
        {
          imgSrc: "static/img/yp26.jpg",
          ypName: "复方硫黄乳膏",
          xz: "本品为乳剂型基质的淡黄色软膏，气芳香。",
          yf:
            " 外用，取本品适量加热水溶化后，洗涤患处。洗澡时，可将本品直接搓于患处，数分钟后，用清水洗净即可。本品亦可用于洗澡、洗头。洗头时，可取本品7~10克，加适量热水溶化后淋于发上，揉搓数分钟后，用水洗净，但不应直接搓于发上，以免药物不能充分作用头皮而降低疗效。",
          cf: "硫磺、硼砂",
          zljb:
            "解毒、杀虫、疗疮、止痒。主用于疥癣、湿疹等皮肤病及脂溢性皮炎 。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `勿接触眼睛，以防刺激反应发生。避免与口及其他黏膜接触。洗头时应防止液体流入眼内，刺激眼部不适。`
        },
        {
          imgSrc: "static/img/yp27.jpg",
          ypName: "连花清瘟胶囊",
          xz:
            "本品为胶囊剂，内容物为棕黄色至黄褐色颗粒和粉末，气微香，味微苦。",
          yf: " 口服。一次4粒，一日3次。",
          cf:
            "连翘、金银花、炙麻黄、炒苦杏仁、石膏、板蓝根、绵马贯众、鱼腥草、广藿香、大黄、红景天、薄荷脑、甘草。辅料为：淀粉。",
          zljb:
            "清瘟解毒，宣肺泄热。用于治疗流行性感冒属热毒袭肺证，症见：发热或高热，恶寒，肌肉酸痛，鼻塞流涕，咳嗽，头痛，咽干咽痛，舌偏红，苔黄或黄腻等 。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。
　　2.不宜在服药期间同时服用滋补性中药。
　　3.风寒感冒者不适用。
　　4.高血压、心脏病患者慎用。有肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
　　5.儿童、孕妇、哺乳期妇女、年老体弱及脾虚便溏者应在医师指导下服用。
　　6.发热体温超过38.5℃的患者，应去医院就诊。
　　7.严格按用法用量服用，本品不宜长期服用。
　　8.服药3天症状无缓解，应去医院就诊。
　　9.对本品过敏者禁用，过敏体质者慎用。 
　　10.本品性状发生改变时禁止使用。
　　11.儿童必须在成人监护下使用。
　　12.请将本品放在儿童不能接触的地方。
　　13.如正在使用其他药品，使用本品前请咨询医师或药师。
　　14.运动员慎用。
　　15.打开防潮袋后，请注意防潮。`
        },
        {
          imgSrc: "static/img/yp28.jpg",
          ypName: "汉桃叶片",
          xz: "本品为糖衣片或薄膜衣片，除去包衣后显棕色至棕黑色；味苦。",
          yf: " 口服。一次3-5片，一日3次。",
          cf: "汉桃叶",
          zljb:
            "神经性头痛、，三叉神经痛、，坐骨神经痛、，风湿关节痛、，肿瘤及手术后疼痛、胃肠痉挛及胆绞痛等疾病的治疗。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `请遵医嘱。`
        },
        {
          imgSrc: "static/img/yp29.jpg",
          ypName: "通络开痹片",
          xz: "本品为糖衣片，除去糖衣后显黄棕色；气微香，味苦。",
          yf: "晚饭后服，一次3片，一日1次；60天为一疗程。",
          cf: "马钱子粉、川牛膝、当归、全蝎、红花 、木瓜、荆芥、防风。",
          zljb:
            "祛风通络，活血散结。用于寒热错杂瘀血阻络所致的关节疼痛、肿胀；类风湿性关节炎具上述证候者。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品含毒性药，需在医生指导下使用；不可超量服用；连续使用不得超过60天；发生不良反应立即停药。
2.服本品后若出现头晕、恶心、舌、唇麻，肌肉抽动，全身发紧时，立即停药；并多饮水或绿豆汤，如不缓解，立即就医。
3.运动员慎用。`
        },
        {
          imgSrc: "static/img/yp30.jpg",
          ypName: "清眩丸",
          xz: "本品为黑褐色的大蜜丸；气微香，味微甜而后辛、凉。",
          yf: "口服。一次1～2丸，一日2次。",
          cf: " 川芎，白芷，薄荷，荆芥穗，石膏",
          zljb:
            "用于风邪上扰所致的头痛头昏，恶心呕吐，视物不清，肢体麻木，耳鸣；血管神经性头痛、高血压、动脉硬化。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌生冷及油腻难消化的食物。
2.服药期间要保持情绪乐观，切忌生气恼怒。
3.有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
4.儿童、孕妇、哺乳期妇女、年老体弱者应在医师指导下服用。
5.服药3天症状无缓解，应去医院就诊。
6.对本品过敏者禁用，过敏体质者慎用。
7.本品性状发生改变时禁止使用。
8.儿童必须在成人监护下使用。
9.请将本品放在儿童不能接触的地方。
10.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp31.jpg",
          ypName: "重感灵片",
          xz: "本品为糖衣片，除去糖衣后显棕褐色；味苦。",
          yf: "口服，一次6～8片，一日3～4次。",
          cf:
            " 毛冬青、羌活、葛根、石膏、马鞭草、板蓝根、青蒿、马来酸氯苯那敏、安乃近。",
          zljb:
            "解表清热，疏风止痛。用于表邪未解、郁里化热引起的重症感冒，症见恶寒、高热、头痛、四肢酸痛、咽痛、鼻塞、咳嗽等。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `用药期间不宜驾驶车辆、管理机器及高空作业等。`
        },
        {
          imgSrc: "static/img/yp32.jpg",
          ypName: "流感丸",
          xz: "本品为棕色水丸；味辛、苦。",
          yf: "一次1～2克（5～10丸），一日2～3次。",
          cf:
            " 诃子、亚大黄、木香、獐牙菜、藏木香、垂头菊、丁香、镰形棘豆、酸藤果、角茴香、阿魏、榜嘎、大戟膏、草乌、安息香、藏菖蒲、龙骨、人工麝香、宽筋藤、人工牛黄、豆蔻。",
          zljb:
            "清热解毒。用于流行性感冒，流清鼻涕，头痛咳嗽，周身酸痈，炎症发烧等。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `运动员慎用。`
        },
        {
          imgSrc: "static/img/yp33.jpg",
          ypName: "复方芩兰口服液",
          xz: "本品为棕黄色的澄清液体；味甜。",
          yf: "口服，一次1～2支（10～20毫升），一日3次。",
          cf: " 金银花、黄芩、连翘、板蓝根。辅料为蔗糖。",
          zljb: "辛凉解表，清热解毒。用于外感风热引起的发热，咳嗽，咽痛。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1．忌烟、酒及辛辣、生冷、油腻食物。
2．不宜在服药期间同时服用滋补性中药。
3．风寒感冒者不适用，其表现为恶寒重，发热轻，无汗，头痛，鼻塞，流清涕，喉痒咳嗽。
4．高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
5．儿童、年老体弱者、孕妇应在医师指导下服用。
6．服药3天症状无缓解，应去医院就诊。
7．对本品过敏者禁用，过敏体质者慎用。
8．药品性状发生改变时禁止服用。
9．儿童必须在成人监护下使用。
10．请将此药品放在儿童不能接触的地方。
11．如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp34.jpg",
          ypName: "清开灵分散片",
          xz: "本品为淡黄色或棕黄色片；味甜，微苦。",
          yf:
            "本品可直接口服，也可将本品放入适量问开水中，待分散均匀后再口服。一次2-4片，一日3次，儿童酌减，或遵医嘱。",
          cf:
            " 胆酸、猪去氧胆酸、黄芩苷、珍珠母、栀子、水牛角、板蓝根、金银花。",
          zljb:
            "清热解毒，镇静安神。用于外感风热时毒，火毒内盛所致高热不退，烦躁不安，咽喉肿痛，舌质红绛，苔黄、脉数者；上呼吸道感染，病毒性感冒，急性化脓性扁桃体炎，急性咽炎，急性气管炎，高热等病症属上述证候者。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `久病体虚患者如出现腹泻时慎用。`
        },
        {
          imgSrc: "static/img/yp35.jpg",
          ypName: "双黄连粉针剂",
          xz: "本品为黄棕色粉末，有引湿性；味苦、涩。",
          yf:
            "静脉滴注。临用前，先以适量注射用水充分溶解，再用生理盐水或5%葡萄糖注射液500ml稀释。每次每公斤体重60mg，每日一次，或遵医嘱。",
          cf: " 连翘、金银花、黄芩。",
          zljb:
            "清热解毒，轻宣透邪。用于风温邪在肺卫或风热闭肺证，证见发热，微恶风寒或不恶寒，咳嗽气促，咳痰色黄，咽红肿痛等及急性上呼吸道感染、急性支气管炎、急性扁桃腙炎、轻型肺炎见上述证候折。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1．静脉滴注过程中偶见轻微血管疼痛，减慢滴速后可消失。
2．皮肤反应：以荨麻疹最多，少数出现花斑样血斑。
3．药物热：高热、寒战。
4．血管神经性水肿；眼睑开始充血、水肿，继而扩展至鼻梁、鼻眼、口唇、喉部，声嘶、喉喘鸣和呼吸困难。
5.过敏性休克：一般于注射后数秒至5分钟内发生，先是局部瘙痒、皮疹，继而心慌、胸闷、呼吸困难、血绀、血压下降，很快出现意识丧失和肢体抽搞，个别出现呼吸、心跳骤停。
6．消化系统：恶心、呕吐、胃肠不适、肠痉挛、腹泻、黄疸等，一般为一过性，停药或常规处理即可恢复。
7．循环系统：血管疼痛、血压升高、房颤、短暂心跳过速，停药后对症治疗均能恢复。
8．神经系统：神志不清、头晕、头痛。
9．呼吸系统：咳嗽、哮喘。`
        },
        {
          imgSrc: "static/img/yp36.jpg",
          ypName: "银翘解毒片",
          xz: "本品为浅棕色至棕褐色的片；气芳香，味苦、辛。",
          yf: "口服，一次1片，一日2～3次。",
          cf:
            " 金银花，连翘，薄荷，荆芥，淡豆豉，牛蒡子（炒），桔梗，淡竹叶，甘草",
          zljb: "用于风热感冒，症见发热头痛，咳嗽口干，咽喉疼痛。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。
2.不宜在服药期间同时服用滋补性中药。
3.风寒感冒者不适用。
4.糖尿病患者及有高血压、心脏病、肝病、肾病等慢性病严重者应在医师指导下服用。
5.儿童、孕妇、哺乳期妇女、年老体弱及脾虚便溏者应在医师指导下服用。
6.发热体温超过38.5℃的患者，应去医院就诊。
7.服药3天症状无缓解，应去医院就诊。
8.对本品过敏者禁用，过敏体质者慎用。
9.本品性状发生改变时禁止使用。
10.儿童必须在成人监护下使用。
11.请将本品放在儿童不能接触的地方。
12. 如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp37.jpg",
          ypName: "夏桑菊颗粒",
          xz: "本品为淡棕色至棕褐色的颗粒；味甜，微苦。",
          yf: "口服，一次5～10克，一日3次。",
          cf: " 夏枯草、野菊花、桑叶。辅料为蔗糖。",
          zljb:
            "清肝明目，疏风散热，除湿痹，解疮毒。用于风热感冒，目赤头痛，头晕耳鸣，咽喉肿痛，疔疮肿毒等症，并可作清凉饮料。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。
2.不宜在服药期间同时服用滋补性中成药。
3.风寒感冒者不适用，其表现为恶寒重，发热轻，无汗，头痛，鼻塞，流清涕，喉痒咳嗽。
4.高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
5.服药三天后症状无改善，或症状加重，或出现新的严重症状如胸闷、心悸等应立即停药，并去医院就诊。
6.小儿、年老体弱者、孕妇应在医师指导下服用。
7.脾胃虚寒，症见腹痛、喜暖、泄泻者慎用。
8.对本品过敏者禁用，过敏体质者慎用。
9.本品性状发生改变时禁止使用。
10.儿童必须在成人监护下使用。
11.请将本品放在儿童不能接触的地方。
12.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp38.jpg",
          ypName: "抗感颗粒",
          xz: "本品为黄棕色的颗粒；味甜，微苦",
          yf: "开水冲服。一次10克，一日3次；小儿酌减或遵医嘱。",
          cf: " 金银花、赤芍、绵马贯众",
          zljb:
            "清热解毒。用于外感风热引起的感冒，症见发热、头痛、鼻塞、喷嚏、咽痛、全身乏力、酸痛。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `孕妇慎用`
        },
        {
          imgSrc: "static/img/yp39.jpg",
          ypName: "双黄连胶囊",
          xz: "本品为胶囊剂，内容物为黄棕色至棕色的粉末；气微、味苦。",
          yf: "口服，一次4粒，一日3次。",
          cf: " 金银花、黄芩、连翘，辅料为淀粉。",
          zljb:
            "清热解毒。用于风热感冒发热，咳嗽，咽痛。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。
2.不宜在服药期间同时服用滋补性中成药。
3.风寒感冒者不适用，其表现为恶寒重，发热轻，无汗，鼻塞流清涕，口不渴，咳吐稀白痰。
4.有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者、孕妇或正在接受其它治疗的患者，均应在医师指导下服用。
5.服药三天后，症状无改善，或出现发热咳嗽加重，并有其他症状如胸闷、心悸等时应去医院就诊。
6.按照用法用量服用，小儿、年老体虚者应在医师指导下服用。
7.连续服用应向医师咨询。
8.对本品过敏者禁用，过敏体质者慎用。
9.本品性状发生改变时禁止服用。
10.儿童必须在成人的监护下使用。
11.请将此药品放在儿童不能接触的地方。
12.如正在服用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp40.jpg",
          ypName: "羚羊感冒胶囊",
          xz: "本品为胶囊剂，内容物为黄棕色粉末；气香，味凉、苦而后微甜。",
          yf: "口服，一次2粒，一日2～3次。",
          cf: " 羚羊角、牛蒡子、淡豆豉、金银花、荆芥、连翘、淡竹叶、桔梗、薄荷油（或薄荷脑0.75g）、甘草。辅料为淀粉。",
          zljb:
            "清热解表。用于流行性感冒，伤风咳嗽，头晕发热，咽喉肿痛。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.	忌烟、酒及辛辣、生冷、油腻食物。
2.	不宜在服药期间同时服用滋补性中药。
3.	发高烧体温超过38.5℃的患者，请上医院就诊。
4.	高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
5.	服药3天症状无缓解，应去医院就诊。
6.	儿童、年老体弱者应在医师指导下服用。
7.	对本品过敏者禁用，过敏体质者慎用。
8.	本品性状发生改变时禁止使用。
9.	儿童必须在成人监护下使用。
10.	请将本品放在儿童不能接触的地方。
11.	如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp41.jpg",
          ypName: "小儿金丹片",
          xz: "本品为暗红色的片；气辛，味苦。",
          yf: "口服，周岁一次2片，周岁以下酌减，一日3次。",
          cf: " 朱砂、橘红、川贝母、胆南星、前胡、玄参、清半夏、大青叶、关木通、桔梗、荆芥穗、羌活、西河柳、枳壳、地黄、赤芍、钩藤、葛根、牛蒡子、天麻、甘草、防风、冰片、水牛角浓缩粉、羚羊角粉、薄荷脑。",
          zljb:
            "感冒发热，头痛，咳嗽气喘，咽喉肿痛，呕吐，急热惊风。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1、本品为风热上攻肺火壅盛急喉痹所设，肺肾阴虚慢喉痹者不宜。
2、本品主治痰热急惊风，若脾虚肝旺慢脾风及阴虚风动者忌用。
3、本品含有清热镇静药，小儿脾胃虚弱者慎用；需要应用者，不可久用，中病即止。
4、本品含有朱砂，不宜久服、过量服用。
5、饮食宜清淡，忌食辛辣、油腻之品。
6、小儿高热惊厥抽搐不止，应及时送医院抢救。`
        },
        {
          imgSrc: "static/img/yp42.jpg",
          ypName: "午时茶颗粒",
          xz: "本品为棕色的颗粒；气微香，味甜，微苦。",
          yf: "开水冲服。一次6克，一日1-2次。",
          cf: " 苍术、柴胡、羌活、防风、白芷、川芎、广藿香、前胡、连翘、陈皮、山楂、枳实、麦芽(炒)、甘草、桔梗、六神曲(炒)、紫苏叶、厚朴、红茶",
          zljb:
            "外感风寒、内伤食积证，症见恶寒发热、头痛身楚、胸脘满闷、恶心呕吐、腹痛腹泻。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。
2.风热感冒者不适用。
3.糖尿病患者及有高血压、心脏病、肝病、肾病等慢性病严重者应在医师指导下服用。
4.儿童、孕妇、哺乳期妇女、年老体弱者应在医师指导下服用。
5.发热体温超过38.5℃的患者，应去医院就诊。
6.吐泻严重者应及时去医院就诊。
7.服药3天症状无缓解，应去医院就诊。
8.对本品过敏者禁用，过敏体质者慎用。
9.本品性状发生改变时禁止使用。
10.儿童必须在成人监护下使用。
11.请将本品放在儿童不能接触的地方。
12.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp43.jpg",
          ypName: "小儿热速清颗粒",
          xz: "本品为土黄色至棕褐色的颗粒；味微苦。",
          yf: "口服，一岁以内，一次1/4～半袋，一岁至三岁，一次半袋～1袋，三岁至七岁，一次1袋～1.5袋，七岁至十二岁，一次1.5袋～2袋，一3～4次。",
          cf: "柴胡、黄芩、板蓝根、葛根、金银花、水牛角、连翘、大黄。辅料为蔗糖、糊精。",
          zljb:
            "清热，解毒，利咽。本品用于风热感冒，发热头痛，咽喉红肿，鼻塞流黄涕，咳嗽，便秘。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌食生冷辛辣食物。 
2.按照用法用量服用，如病情较重或服药二天后疗效不明显者，应及时去医院就诊。 
3.对该药品过敏者禁用，过敏体质者慎用。 
4.该药品性状发生改变时禁止使用。
5.儿童必须在成人监护下使用。
6.请将该药品放在儿童不能接触的地方。 
7.如正在使用其他药品，使用该药品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp44.jpg",
          ypName: "逍遥颗粒",
          xz: "本品为浅黄色至棕黄色的颗粒；气微香，味甜或味淡。",
          yf: "开水冲服，一次1袋，一日2次。",
          cf: "柴胡，当归，白芍，白术（炒），茯苓，炙甘草，薄荷",
          zljb:
            "用于肝郁脾虚所致的郁闷不舒，胸肋胀痛，头晕目眩，食欲减退，月经不调。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1. 忌食寒凉、生冷食物。
2. 孕妇服用时请向医师咨询。
3. 感冒时不宜服用本药。
4. 平素月经正常，突然出现月经量少，或月经错后，或阴道不规则出血应去医院就诊。
5. 按照用法用量服用，长期服用应向医师咨询。
6. 服药3天症状无改善，应去医院就诊。
7. 对本品过敏者禁用，过敏体质者慎用。
8. 儿童必须在成人监护下使用。
9. 请将本品放在儿童不能接触的地方。
10. 如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp45.jpg",
          ypName: "调胃消滞丸",
          xz: "本品为黑色的包衣水丸，除去包衣后，显灰黄色；气香，味微苦、辛。",
          yf: "口服。一次1袋，一日2次。",
          cf: "姜厚朴，羌活，广东神曲，枳壳，香附（四制），姜半夏，防风，前胡，川芎（白酒蒸），白芷，薄荷，砂仁，草果，木香，豆蔻，茯苓，苍术（泡），广藿香，乌药（醋蒸），甘草，紫苏叶，陈皮（蒸）",
          zljb:
            "用于感冒风寒夹湿，内伤食滞证，症见恶寒发热，头痛身困，食少纳呆，嗳腐吞酸，腹痛泄泻。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.忌烟、酒及辛辣、生冷、油腻食物。。
2.不宜在服药期间同时服用滋补性中成药。
3.风热感冒者不适用，其表现为发热明显，微恶风，有汗，口渴，鼻流浊涕，咽喉肿痛，咳吐黄痰。
4.高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
5.服药三天后症状无改善，或症状加重，或出现新的严重症状如胸闷、心悸等应立即停药，并去医院就诊。
6.小儿、年老体弱者、孕妇应在医师指导下服用。
7.对该药品过敏者禁用，过敏体质者慎用。
8.本批性状发生改变时禁止使用。
9.儿童必须在成人监护下使用。
10.请将本品放在儿童不能接触的地方。
11.如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp46.jpg",
          ypName: "上清片",
          xz: "本品为糖衣片，除去糖衣显黄褐色，气香，味苦。",
          yf: "口服，一次5片，一日1-2次。",
          cf: "大黄（酒炒）、黄芩（酒炒）、连翘、菊花、白芷、黄柏（酒炒）、栀子、荆芥、防风、薄荷、川芎、桔梗。辅料硬脂酸镁、淀粉。",
          zljb:
            "清热散风，解毒通便。用于风热所致头晕耳鸣，目赤，鼻流黄涕，口舌生疮，牙龈肿痛，大便秘结。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1．忌烟、酒及辛辣食物。
2．不宜在服药期间同时服用滋补性中药。
3．有高血压、心脏病、糖尿病、肝病、肾病等慢性病严重者应在医师指导下服用。
4．本品不宜长期服用，服药3天症状无缓解，应去医院就诊。
5．严格按用法用量服用，儿童、年老体弱者应在医师指导下服。
6．对酒精及本品过敏者禁用，过敏体质者慎用。
7．本品性状发生改变时禁止使用。
8．儿童必须在成人监护下使用。
9．请将本品放在儿童不能接触的地方。
10．如正在使用其他药品，使用本品前请咨询医师或药师。`
        },
        {
          imgSrc: "static/img/yp47.jpg",
          ypName: "麝香痔疮栓",
          xz: "本品为灰黄色至棕褐色弹头头形或鱼雷形的栓剂；气清香。",
          yf: "早晚或大便后塞于肛门内，一次1粒，一日2次，或遵医嘱。",
          cf: "人工麝香、珍珠、冰片、炉甘石粉、三七、五倍子、人工牛黄、颠茄流浸膏",
          zljb:
            "大肠热盛导致的大便出血、血色鲜红、肛门灼热疼痛；各类痔疮和肛裂见上述证候者。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1.本品为直肠给药，禁止内服。
2.原因不明的便血应去医院就诊；内痔出血过多或内痔脱出不能自行还纳，亦应去医院就诊。
3.忌烟酒及辛辣、油腻、刺激性食物。
4.保持大便通畅。
5.高血压、青光眼、前列腺肥大等患者应在医师指导下使用。
6.孕妇慎用。儿童、年老体弱者应在医师指导下使用。
7.有严重肝肾疾患及糖尿病或血液病患者应在医师指导下使用。
8.放置时采取侧卧位，动作宜轻柔，避免出血。置入适当深度以防滑脱。
9.药品宜存放在阴凉干燥处，防止受热变形。如遇高温软化，可将栓头朝下放入冰箱冷藏或浸入冷水中，冷却凝固后再使用。
10.用药3天症状无缓解，应去医院就诊。本品不宜长期使用。
11.对本品过敏者禁用，过敏体质者慎用。
12.本品性状发生改变时禁止使用。
13.儿童必须在成人监护下使用。
14.请将本品放在儿童不能接触的地方。
15.如正在使用其他药品，使用本品前请咨询医师或药师。
16.运动员慎用。`
        },
        {
          imgSrc: "static/img/yp48.jpg",
          ypName: "人参健脾丸",
          xz: "本品为棕褐色至棕黑色的水蜜丸或大蜜丸；气香，味甜、微苦。",
          yf: "口服，一次2丸，一日2次。",
          cf: "人参、白术（麸炒）、茯苓、山药、陈皮、木香、砂仁、炙黄芪、当归、酸枣仁（炒）、远志（制）。",
          zljb:
            "脾胃虚弱所致的饮食不化、脘闷嘈杂、恶心呕吐、腹痛便溏、不思饮食、体弱倦怠。",
          ywxhzy:
            "如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。",
          zysx: `1、忌不易消化食物。
2、感冒发热病人不宜服用。
3、有高血压、心脏病、肝病、糖尿病、肾病等慢性病严重者应在医师指导下服用。
4、儿童、孕妇、哺乳期妇女应在医师指导下服用。
5、服药4周症状无缓解，应去医院就诊。
6、对本品过敏者禁用，过敏体质者慎用。
7、本品性状发生改变时禁止使用。
8、儿童必须在成人监护下使用。
9、请将本品放在儿童不能接触的地方。
10、如正在使用其他药品，使用本品前请咨询医师或药师。
11、服用前应除去蜡皮、塑料球壳；本品可嚼服，也可分份吞服。`
        }
      ]
    };
  },
  created() {
    console.log(this.$route.fullPath.split("?")[1]);
    this.list = this.list[this.$route.fullPath.split("?")[1]];
    console.log(this.list);
  },
  methods: {
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.sj {
  font-size: 0.3rem;
  .main {
    img {
      width: 100%;
      height: 5rem;
      display: block;
    }
    ul {
      li {
        padding: 0.2rem;
        span {
          color: red;
        }
      }
    }
  }
}
</style>