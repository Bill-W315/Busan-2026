// Trip data for index.html. Edit names, blurbs, notes, costs and coordinates freely.
// Keep it valid JSON between the outer braces (scripts/import_media.py reads it too).
// stop.transit: true  -> drawn on the route, but gets no slide (hotel returns, cable-car ends)
// stop.tag: "added" (unplanned) or "moved" (with movedFrom: <day number>)
// stop.quiz: true     -> adds a "Guess where?" slide before the stop, if it has photos
// stop.history        -> shown as a "History" box on the place slide
// stop.cost           -> shown as a cost chip on the place slide (free text)
// stop.tip            -> shown as a 小提醒 box on the place slide
// stop.photoQuery     -> search words for scripts/fetch_stock.py when the place has no photos of ours
// history            -> the Busan background slides in Part 1 (lead, facts, timeline, bullets, box, pins)
// history[].timeline[].front -> front line (west→east, [lat,lng]); the map shades north of it as NK-held
// sections            -> extra parts after the 4 days (fun finds, places for next time); same stop format
window.TRIP = {
  "title": "釜山 4 日遊",
  "titleZh": "Busan in 4 Days",
  "dates": "2026/10/07 – 10/10",
  "travelers": ["Bill Wu"],
  "plannedStops": 48,
  "krwPerTwd": 45,
  "cash": "韓國當地花費用 US$200 換的韓元現金支付",
  "flights": [
    {"date": "10/07", "from": "台北 TPE", "to": "釜山 PUS", "dep": "02:40", "arr": "06:10"},
    {"date": "10/10", "from": "釜山 PUS", "to": "台北 TPE T1", "dep": "22:20", "arr": "00:20 +1"}
  ],
  "misc": {
    "twd": 5000,
    "items": "便利商店早餐、Having moment 咖啡廳、e-SIM、海女海鮮等現金或沒記帳的花費"
  },
  "flightCostTwd": 4048,
  "flightBookedVia": "Trip.com",
  "hotel": {
    "name": "Elmomento Songdo",
    "area": "西區 松島海水浴場",
    "nights": 3,
    "costTwd": 6797.5
  },
  "expenses": [
    {"date": "10/07", "item": "機場到飯店計程車", "cat": "taxi", "krw": 9950},
    {"date": "10/07", "item": "鱈魚湯", "cat": "food", "krw": 5000},
    {"date": "10/07", "item": "SPA到BIFF計程車", "cat": "taxi", "krw": 2700},
    {"date": "10/07", "item": "奶油紅豆年糕 (BIFF)", "cat": "food", "krw": 3000},
    {"date": "10/07", "item": "年糕", "cat": "food", "krw": 3000},
    {"date": "10/07", "item": "南海盲鰻", "cat": "food", "krw": 17500},
    {"date": "10/07", "item": "回飯店計程車", "cat": "taxi", "krw": 3100, "derived": true},
    {"date": "10/08", "item": "白淺灘計程車", "cat": "taxi", "krw": 3350},
    {"date": "10/08", "item": "荒嶺山去程計程車", "cat": "taxi", "krw": 4350},
    {"date": "10/08", "item": "荒嶺山回程計程車", "cat": "taxi", "krw": 9450},
    {"date": "10/08", "item": "83烤肉", "cat": "food", "krw": 47500},
    {"date": "10/09", "item": "豬排", "cat": "food", "krw": 13250},
    {"date": "10/09", "item": "豬排計程車", "cat": "taxi", "krw": 2500},
    {"date": "10/08", "item": "美術館計程車", "cat": "taxi", "krw": 6350},
    {"date": "10/09", "item": "多大浦海水浴場計程車", "cat": "taxi", "krw": 4750},
    {"date": "10/09", "item": "西面回家計程車", "cat": "taxi", "krw": 7400},
    {"date": "10/09", "item": "松亭三代豬肉湯飯", "cat": "food", "krw": 4750},
    {"date": "10/10", "item": "離開飯店計程車", "cat": "taxi", "krw": 3150},
    {"date": "10/10", "item": "Spaland計程車", "cat": "taxi", "krw": 3050},
    {"date": "10/10", "item": "Burger", "cat": "food", "krw": 13950},
    {"date": "10/10", "item": "新世界可頌", "cat": "food", "krw": 11250},
    {"date": "10/10", "item": "機場計程車", "cat": "taxi", "krw": 5400},
    {"date": "10/11", "item": "桃園機場回家", "cat": "taxi", "twd": 675}
  ],
  "sharing": {
    "topMoments": [],
    "bestFood": "",
    "tips": []
  },
  "days": [
    {
      "n": 1,
      "date": "2026-10-07",
      "weekday": "Wed",
      "color": "#e6457a",
      "title": "南浦洞・市場巡禮",
      "titleZh": "Nampo old town & markets",
      "stops": [
        {"id": "d1-tpe", "name": "桃園機場第一航廈", "sub": "Taoyuan Airport", "lat": 25.0777, "lng": 121.2328, "kind": "flight", "blurb": "凌晨 02:40 的紅眼班機，飛約 2.5 小時就到釜山。", "note": "", "photoQuery": "Taoyuan International Airport Terminal 1"},
        {"id": "d1-pus", "name": "金海國際機場", "sub": "Gimhae International Airport", "lat": 35.1731, "lng": 128.9464, "kind": "airport", "blurb": "06:10 落地，城市還沒醒來。從機場搭計程車到松島約 20–30 分鐘。", "cost": "計程車到飯店 ₩9,950", "note": "", "history": "金海機場是釜山的主要國際機場，名字來自旁邊的金海市。", "tip": "機場到市區也可以搭輕軌轉地鐵，不過行李多的話搭計程車最方便。"},
        {"id": "d1-hotel", "name": "Elmomento Songdo", "sub": "我們的據點・住 3 晚", "lat": 35.0766, "lng": 129.0243, "kind": "hotel", "blurb": "這次旅程的家，就在松島海水浴場旁，房間看得到松島灣和海上纜車。", "cost": "每人 NT$6,797.5（3 晚）", "note": ""},
        {"id": "d1-cod", "name": "海雲台舒暢鱈魚湯 松島店", "sub": "해운대 속씨원한대구탕・鱈魚湯", "lat": 35.0762, "lng": 129.0172, "kind": "food", "tag": "moved", "movedFrom": 3, "blurb": "第一餐早餐：清爽的鱈魚湯（대구탕），用鱈魚、白蘿蔔和豆芽熬成，暖胃又解酒。", "history": "鱈魚湯是釜山經典的解酒早餐。附近的巨濟一帶自古以鱈魚聞名。", "cost": "₩5,000", "note": ""},
        {"id": "d1-spa", "name": "SPA HAESURANG", "sub": "스파해수랑・海水汗蒸幕", "lat": 35.0824, "lng": 129.0256, "kind": "sight", "blurb": "海水 SPA 加汗蒸幕，搭完紅眼班機最適合來泡湯補眠。", "cost": "計程車到 BIFF ₩2,700", "note": "", "history": "汗蒸幕（찜질방）是韓國人的生活日常：泡湯、烤箱、吃烤雞蛋喝甜米釀，還能過夜。", "tip": "汗蒸幕會提供衣服和毛巾，記得帶換洗的內衣褲就好。"},
        {"id": "d1-biff", "name": "BIFF 廣場", "sub": "BIFF Square", "lat": 35.0984, "lng": 129.0278, "kind": "sight", "star": true, "blurb": "南浦洞的電影街，滿滿的路邊小吃攤，最有名的是加了堅果的糖餅（씨앗호떡），地上還有電影明星的手印。", "history": "1996 年釜山國際電影節就是從這裡開始，當時南浦洞是釜山的電影院聚集地。現在主場館已經搬到 Centum City。", "note": "", "photoQuery": "BIFF Square Busan", "tip": "糖餅攤常常要排隊，買了邊走邊吃最對味。"},
        {"id": "d1-bupyeong", "name": "富平罐頭市場", "sub": "부평깡통시장", "lat": 35.1013, "lng": 129.0262, "kind": "sight", "blurb": "從早到晚都熱鬧的市場，魚板、辣炒年糕和各種小吃一攤接一攤。", "history": "1910 年開市，是韓國最早的公設市場之一。韓戰後大量販售美軍基地流出的罐頭，因此被叫作「깡통（罐頭）市場」。2013 年起開設夜市。", "note": "", "tip": "晚上有夜市，攤位比白天更多。"},
        {"id": "d1-mochi", "name": "紅豆奶油艾草麻吉", "sub": "MILGOT BAKERY 밀곳・艾草麻吉", "lat": 35.101, "lng": 129.027, "kind": "food", "blurb": "市場裡的 MILGOT BAKERY：艾草麻吉包紅豆和奶油，外面裹滿黃豆粉，鹹甜剛好，好吃到買了兩個。", "cost": "₩3,000 × 2", "note": "", "photoQuery": "Injeolmi"},
        {"id": "d1-bosu", "name": "寶水洞書店街", "sub": "보수동 책방골목", "lat": 35.1026, "lng": 129.0275, "kind": "sight", "blurb": "窄窄的巷子裡二手書店林立，書從地上一路堆到天花板，還有很多舊雜誌和漫畫。", "history": "韓戰時期難民聚集在國際市場旁，有人擺箱子賣舊書和美軍流出的雜誌維生，慢慢形成書店街。全盛時期書店多達數十家。", "note": "", "photoQuery": "Bosu-dong Book Street Busan"},
        {"id": "d1-gukje", "name": "國際市場", "sub": "국제시장", "lat": 35.1003, "lng": 129.0287, "kind": "sight", "blurb": "釜山最大的傳統市場之一，從衣服、廚具到美軍用品什麼都買得到。", "history": "光復後，日本人撤離時留下的物資在這裡交易；韓戰時難民湧入而興盛。2014 年電影《國際市場》就是以這裡為背景，講一位韓戰難民的一生。", "note": "", "photoQuery": "Gukje Market Busan", "tip": "很多小店只收現金，記得帶韓元。"},
        {"id": "d1-hagfish", "name": "南海烤盲鰻", "sub": "곰장어・烤盲鰻", "lat": 35.0963, "lng": 129.026, "kind": "food", "blurb": "南浦洞名物：炭烤盲鰻（곰장어），口感Q彈，配燒酒最對味。", "history": "據說韓戰後盲鰻皮被拿去做「鰻魚皮」皮件，剩下的肉就拿來烤著吃。", "cost": "₩17,500", "note": "", "tip": "盲鰻有鹽烤和辣醬兩種，第一次吃可以先試鹽烤。"},
        {"id": "d1-gwangbok", "name": "光復路時尚街", "sub": "광복로", "lat": 35.099, "lng": 129.033, "kind": "sight", "blurb": "釜山經典的購物街，從南浦洞一路延伸到龍頭山公園下方，冬天還有聖誕樹文化節。", "history": "「광복」就是「光復」，街名來自 1945 年韓國光復。旁邊的龍頭山一帶，朝鮮時代是日本人居住的「草梁倭館」。附近的影島大橋（1934 年）是韓國第一座開合橋，韓戰時失散的家人常約好「在影島大橋見」。", "cost": "計程車回飯店 ₩3,100", "note": "", "photoQuery": "Gwangbok-ro"},
        {"id": "d1-hotel2", "name": "Elmomento Songdo", "sub": "回飯店", "lat": 35.0766, "lng": 129.0243, "kind": "hotel", "transit": true}
      ],
      "dropped": [
        {"name": "札嘎其市場", "sub": "자갈치시장", "lat": 35.0967, "lng": 129.0305},
        {"name": "樂天超市 光復店", "sub": "Lotte Mart", "lat": 35.0975, "lng": 129.0365}
      ],
      "movedOut": []
    },
    {
      "n": 2,
      "date": "2026-10-08",
      "weekday": "Thu",
      "color": "#14a3b8",
      "title": "松島纜車・影島海岸・荒嶺山夜景",
      "titleZh": "Songdo, Yeongdo & city lights",
      "stops": [
        {"id": "d2-hotel", "name": "Elmomento Songdo", "sub": "出發", "lat": 35.0766, "lng": 129.0243, "kind": "hotel", "transit": true},
        {"id": "d2-cablecar", "name": "松島海上纜車", "sub": "Songdo Marine Cable Car", "lat": 35.0763, "lng": 129.023, "kind": "sight", "blurb": "從松島海水浴場跨海到岩南公園，全長約 1.6 公里，有些車廂是透明玻璃地板。", "history": "韓國第一條海上纜車 1964 年在這裡啟用，1988 年停駛，2017 年以「Busan Air Cruise」重新開放。", "note": "", "tip": "透明地板的 Crystal 車廂比一般車廂貴一點，但很值得。"},
        {"id": "d2-skypark", "name": "松島 Sky Park", "sub": "纜車上站", "lat": 35.0697, "lng": 129.0167, "kind": "sight", "transit": true},
        {"id": "d2-yonggung", "name": "松島龍宮空中步道", "sub": "Yonggung Cloud Bridge", "lat": 35.0619, "lng": 129.0214, "kind": "sight", "blurb": "從岩南公園延伸到小島的吊橋，長約 127 公尺，走在上面四面都是海。", "history": "「龍宮」是韓國神話中龍王的海底宮殿。", "note": "", "tip": "從纜車 Sky Park 站出來沿步道走過去；下雨或強風時可能會關閉。"},
        {"id": "d2-amnam", "name": "岩南公園", "sub": "Amnam Park", "lat": 35.0612, "lng": 129.0192, "kind": "sight", "blurb": "松島半島尖端的海岸公園，有松林步道、海崖和觀景台，天氣好時看得到影島。", "note": "", "history": "這一帶曾長期是軍事管制區，所以海岸景觀保留得很原始。"},
        {"id": "d2-skypark2", "name": "松島 Sky Park", "sub": "搭纜車回程", "lat": 35.0697, "lng": 129.0167, "kind": "sight", "transit": true},
        {"id": "d2-baystation2", "name": "Songdo Bay Station", "sub": "搭纜車回程", "lat": 35.0763, "lng": 129.023, "kind": "sight", "transit": true},
        {"id": "d2-huinnyeoul", "name": "白淺灘文化村", "sub": "흰여울문화마을", "lat": 35.0779, "lng": 129.0459, "kind": "sight", "star": true, "blurb": "海崖上的白色和藍色小屋，被稱為「釜山的聖托里尼」。沿著絕影海岸散步路走，一邊是小巷，一邊是停滿貨船的外海。", "history": "韓戰難民在海崖上搭屋定居而成。「흰여울」意思是「白色急流」，指下方翻白的浪花。村裡的小展覽館展示了當年的老照片，電影《辯護人》（2013）也在這裡取景。", "cost": "計程車 ₩3,350", "note": "", "tip": "村子裡還住著居民，拍照時記得放低音量。"},
        {"id": "d2-having", "name": "Having moment", "sub": "咖啡廳", "lat": 35.0798, "lng": 129.0437, "kind": "food", "blurb": "白淺灘旁的海景咖啡廳，點了咖啡和甜點，看著海休息一下。", "note": ""},
        {"id": "d2-haenyeo", "name": "影島海女村", "sub": "영도 해녀촌", "lat": 35.0669, "lng": 129.0658, "kind": "food", "blurb": "影島海邊的海女小屋，現撈的海鮮切盤直接在岩岸上吃。我們還剛好看到海女下水作業！", "history": "海女不背氧氣筒，徒手潛水採集海產。海女文化在 2016 年列入聯合國教科文組織非物質文化遺產。影島的海女很多原本來自濟州島。", "note": "", "tip": "海女村大多只收現金，海鮮按盤計價。"},
        {"id": "d2-arte", "name": "ARTE MUSEUM Busan", "sub": "沉浸式媒體藝術館", "lat": 35.0855, "lng": 129.0766, "kind": "sight", "star": true, "blurb": "黑暗的展間裡投影著海浪、花朵、瀑布和光影，還有韓國傳統畫作變成動畫的展區。", "history": "由 d'strict 打造，就是做出首爾巨型海浪螢幕「WAVE」的韓國團隊。ARTE MUSEUM 在濟州、江陵、麗水等地也有分館。", "cost": "計程車 ₩6,350", "note": "", "tip": "展間很暗，拍照要調高感光度；建議留 1 到 1.5 小時。"},
        {"id": "d2-seomyeon", "name": "西面站", "sub": "서면", "lat": 35.1578, "lng": 129.0592, "kind": "sight", "blurb": "釜山的市中心，地下街、百貨公司、餐廳和夜生活都集中在這裡。", "history": "釜山最熱鬧的商圈，地鐵 1、2 號線在這裡交會，也是豬肉湯飯和烤肉店最密集的地方之一。", "note": "", "photoQuery": "Seomyeon Busan"},
        {"id": "d2-83", "name": "83 獬豸", "sub": "83해치・熟成豬肉燒肉", "lat": 35.1578, "lng": 129.061, "kind": "food", "blurb": "西面站旁的人氣燒肉店，門口有獬豸石像。厚切五花肉、豬頸肉配上蛋捲和起司玉米，這趟最貴的一餐。", "cost": "₩47,500", "note": "", "history": "獬豸（해치）是傳說中能分辨善惡的神獸，也是首爾的城市象徵。", "tip": "尖峰時段常要排隊，平日下午比較好進去；店家有點餐低消。"},
        {"id": "d2-hwangnyeongsan", "name": "荒嶺山 夜景", "sub": "황령산 야경・대연3동", "lat": 35.1579, "lng": 129.0828, "kind": "sight", "tag": "added", "blurb": "計畫外的行程：搭計程車上山，整個釜山市區和廣安大橋的夜景就在腳下。", "history": "荒嶺山（約 427 公尺）山上有朝鮮時代的烽火台，現在是釜山最有名的夜景景點。", "cost": "計程車 上山 ₩4,350 + 下山 ₩9,450", "note": "", "tip": "山上大眾運輸不方便，搭計程車上下山最快；晚上風大，記得帶外套。"},
        {"id": "d2-hotel2", "name": "Elmomento Songdo", "sub": "回飯店", "lat": 35.0766, "lng": 129.0243, "kind": "hotel", "transit": true}
      ],
      "dropped": [
        {"name": "松島天空步道", "sub": "Songdo Skywalk", "lat": 35.0745, "lng": 129.0185},
        {"name": "에그2000 커피&토스트", "sub": "吐司早餐", "lat": 35.0768, "lng": 129.0178},
        {"name": "Footbath Cafe View 2", "sub": "咖啡廳", "lat": 35.0789, "lng": 129.0446},
        {"name": "Jeonpo Cafe Street", "sub": "田浦咖啡街", "lat": 35.1552, "lng": 129.0655}
      ],
      "movedOut": [
        {"name": "송도해수욕장 松島海水浴場", "to": 3}
      ]
    },
    {
      "n": 3,
      "date": "2026-10-09",
      "weekday": "Fri",
      "color": "#2f9e44",
      "title": "松島海灘・乙淑島・多大浦夕陽",
      "titleZh": "Songdo Beach to the Dadaepo sunset",
      "stops": [
        {"id": "d3-beach", "name": "송도해수욕장", "sub": "Songdo Beach", "lat": 35.077, "lng": 129.0204, "kind": "sight", "tag": "moved", "movedFrom": 2, "blurb": "飯店前的松島海水浴場，沙灘乾淨、水很清，十月還有人在玩水。", "history": "1913 年開放，是韓國第一個公共海水浴場。海上纜車和天空步道就在海灘兩側。", "note": "", "tip": "海灘兩頭就是纜車站和天空步道，可以排在一起。"},
        {"id": "d3-hotel", "name": "Elmomento Songdo", "sub": "飯店", "lat": 35.0766, "lng": 129.0243, "kind": "hotel", "transit": true},
        {"id": "d3-eulsukdo", "name": "을숙도 공원", "sub": "Eulsukdo Park・洛東江口", "lat": 35.106, "lng": 128.9445, "kind": "sight", "blurb": "洛東江出海口的小島，有濕地公園和釜山現代美術館（MoCA），我們還看到成群的候鳥和白鷺。", "history": "洛東江口是東亞候鳥遷徙的重要中繼站，被列為天然紀念物保護。", "note": "還有候鳥群！", "tip": "秋冬是候鳥季，帶望遠鏡會更好看。"},
        {"id": "d3-dadaepo", "name": "多大浦海水浴場", "sub": "Dadaepo Beach", "lat": 35.0477, "lng": 128.9598, "kind": "sight", "blurb": "寬廣的沙灘和潮間帶，傍晚的夕陽把整片沙灘染成金色。", "history": "河口的淺灘沙地會倒映天空，所以夕陽特別有名。多大浦也是地鐵 1 號線的終點站。", "cost": "計程車 ₩4,750", "note": "", "tip": "日落前 30 分鐘到最好；退潮時可以沿著沙灘走得很遠。"},
        {"id": "d3-fountain", "name": "다대포 꿈의 낙조분수", "sub": "多大浦夢幻落日噴泉", "lat": 35.0495, "lng": 128.964, "kind": "sight", "blurb": "天黑後的音樂燈光噴泉秀。", "note": "", "photoQuery": "Dadaepo fountain"},
        {"id": "d3-gukbap", "name": "松亭三代豬肉湯飯", "sub": "송정3대국밥・西面豬肉湯飯", "lat": 35.1563, "lng": 129.058, "kind": "food", "tag": "added", "blurb": "回到西面吃晚餐：一大碗豬肉湯飯，湯頭濃郁，配上韭菜和蝦醬自己調味，再搭計程車回飯店。", "history": "豬肉湯飯是釜山代表性的庶民美食，據說是韓戰難民用便宜的豬骨熬湯而流行起來。", "cost": "₩4,750", "note": "", "tip": "西面有一整條豬肉湯飯街，選擇很多。"},
        {"id": "d3-hotel2", "name": "Elmomento Songdo", "sub": "回飯店", "lat": 35.0766, "lng": 129.0243, "kind": "hotel", "transit": true}
      ],
      "dropped": [
        {"name": "甘川文化村", "sub": "감천문화마을", "lat": 35.0975, "lng": 129.0106}
      ],
      "movedOut": [
        {"name": "海雲台舒暢鱈魚湯", "to": 1}
      ]
    },
    {
      "n": 4,
      "date": "2026-10-10",
      "weekday": "Sat",
      "color": "#8b5cf6",
      "title": "新世界 Spaland・廣安里無人機秀・回家",
      "titleZh": "Spaland, Gwangalli & home",
      "stops": [
        {"id": "d4-hotel", "name": "Elmomento Songdo", "sub": "退房", "lat": 35.0766, "lng": 129.0243, "kind": "hotel", "transit": true},
        {"id": "d4-brunch", "name": "南浦洞早午餐", "sub": "Nampo-dong brunch", "lat": 35.0982, "lng": 129.034, "kind": "food", "tag": "added", "blurb": "退房後先到南浦洞吃早午餐：薯餅、香腸、炒蛋和沙拉。", "note": ""},
        {"id": "d4-milmyeon", "name": "Dongmyeonsik Milmyeon", "sub": "밀면・小麥冷麵", "lat": 35.1552, "lng": 129.1214, "kind": "food", "blurb": "在廣安里吃遲來的午餐：酸甜冰涼的小麥冷麵，配上手工餃子。", "history": "冷麵原本就是北韓平壤、咸興的鄉土料理。韓戰時逃到釜山的北韓難民想念家鄉味，但南方很難買到蕎麥，就改用美援的麵粉，做出了釜山的小麥冷麵（밀면）。", "note": "", "tip": "有湯的（물밀면）和拌的（비빔밀면）兩種，天氣熱時湯的最消暑。"},
        {"id": "d4-spaland", "name": "新世界 Spaland", "sub": "新世界 Centum City・Spaland", "lat": 35.168, "lng": 129.1304, "kind": "sight", "tag": "added", "blurb": "搭機前到 Spaland 泡湯放鬆，再吃個漢堡和新世界可頌。", "history": "新世界 Centum City 在 2009 年被金氏世界紀錄認證為全世界最大的百貨公司。Spaland 的溫泉水是從地下約 1,000 公尺抽上來的天然溫泉。", "cost": "計程車 ₩3,050・漢堡 ₩13,950・可頌 ₩11,250", "note": "", "tip": "新世界百貨地下的美食街很好逛，可頌就是在這裡買的。"},
        {"id": "d4-gwangan", "name": "廣安里", "sub": "Gwangalli Beach", "lat": 35.1572, "lng": 129.1131, "kind": "sight", "star": true, "blurb": "廣安里海水浴場就在廣安大橋正前方，沿岸都是咖啡廳和餐廳，晚上看大橋點燈。", "history": "廣安大橋 2003 年通車，全長約 7.4 公里，是韓國最長的跨海大橋之一，每晚都會點燈。", "note": "", "tip": "沿岸咖啡廳的高樓層看大橋最漂亮。"},
        {"id": "d4-drone", "name": "廣安里 M 無人機燈光秀", "sub": "Gwangalli M Drone Show", "lat": 35.1532, "lng": 129.1186, "kind": "sight", "star": true, "quiz": true, "blurb": "上百台無人機在大橋上空拼出文字和圖案，這次的主題是「FALL IN GWANGALLI」。", "history": "每週六晚上在廣安大橋上空固定演出，被稱為韓國第一個常設的無人機燈光秀。", "note": "", "tip": "每週六晚上演出，時間會依季節調整，最好提早到海灘找位子。"},
        {"id": "d4-pus", "name": "金海國際機場", "sub": "Gimhae International Airport", "lat": 35.1731, "lng": 128.9464, "kind": "airport", "blurb": "22:20 的班機回家。", "cost": "計程車 ₩5,400", "note": "", "photoQuery": "Gimhae International Airport"},
        {"id": "d4-tpe", "name": "桃園機場第一航廈", "sub": "Taoyuan Airport T1", "lat": 25.0777, "lng": 121.2328, "kind": "flight", "blurb": "00:20 回到台灣。", "cost": "回家車資 NT$675", "note": "", "photoQuery": "Taoyuan International Airport Terminal 1"}
      ],
      "dropped": [
        {"name": "韓國麗芬聚國際皮膚科", "sub": "皮膚科", "lat": 35.1565, "lng": 129.06}
      ],
      "movedOut": []
    }
  ],
  "sections": [
    {
      "key": "fun",
      "label": "第三部分・旅途趣事",
      "nav": "趣事",
      "color": "#f08c00",
      "title": "旅途中的趣事",
      "titleZh": "Fun finds",
      "stops": [
        {"id": "x-gogoro", "name": "在釜山遇到 Gogoro！", "sub": "西面・南浦洞", "lat": 35.1544, "lng": 129.062, "kind": "fun", "blurb": "在西面和南浦洞的街頭，看到好幾台 Gogoro 外送車。", "note": ""},
        {"id": "x-ramyun", "name": "辛拉麵彩繪車", "sub": "Spicy Happiness in Noodles", "lat": 35.1553, "lng": 129.0593, "kind": "fun", "blurb": "西面街頭的辛拉麵廣告車。", "note": ""},
        {"id": "x-taxi", "name": "釜山計程車飆速", "sub": "往金海機場的路上", "lat": 35.1634, "lng": 128.9762, "kind": "fun", "blurb": "趕飛機的計程車司機，看看儀表板的速度……", "note": ""}
      ]
    },
    {
      "key": "next",
      "label": "第四部分・下次再來",
      "nav": "下次再來",
      "color": "#1971c2",
      "title": "這次沒去，下次想去",
      "titleZh": "Worth a visit next time",
      "stops": [
        {"id": "x-gamcheon", "name": "甘川文化村", "sub": "감천문화마을", "lat": 35.0975, "lng": 129.0106, "kind": "next", "photoQuery": "Gamcheon Culture Village", "blurb": "原本排在第 3 天，這次沒去成。粉彩小屋沿著山坡層層堆疊。沿著巷子可以找到「小王子與沙漠狐狸」雕像，是村子最熱門的拍照點。", "history": "1950 年代由韓戰難民和太極道信徒建立。2009 年的藝術計畫把這裡彩繪成今天的「釜山馬丘比丘」。"},
        {"id": "x-luge", "name": "Skyline Luge 釜山", "sub": "스카이라인 루지 부산・機張", "lat": 35.1956, "lng": 129.2155, "kind": "next", "photoQuery": "Skyline Luge Busan", "blurb": "坐上沒有動力的小滑車，沿著山坡上的賽道一路滑下來，還能看到機張的海景。共有 4 條賽道，最長約 965 公尺。", "history": "Skyline Luge 源自紐西蘭羅托魯瓦，釜山館在 2021 年 7 月開幕，是 Osiria 觀光園區的一部分。"},
        {"id": "x-lotteworld", "name": "樂天世界冒險樂園 釜山", "sub": "롯데월드 어드벤처 부산・機張", "lat": 35.196, "lng": 129.2125, "kind": "next", "photoQuery": "Lotte World Adventure Busan", "blurb": "2022 年開幕的大型遊樂園，有 6 個主題區、17 項設施。招牌是有 3 個 360 度大迴環的雲霄飛車 Giant Digger，和落差 44.6 公尺的水上雲霄飛車 Giant Splash。", "history": "就在東海線 Osiria 站旁，和 Skyline Luge 都在 Osiria 觀光園區，可以排在同一天。"},
        {"id": "x-haeundae", "name": "海雲台海水浴場", "sub": "해운대해수욕장", "lat": 35.1587, "lng": 129.1604, "kind": "next", "photoQuery": "Haeundae Beach", "blurb": "釜山最有名的海灘，旁邊的 LCT 大樓有 X the SKY 觀景台。", "history": "LCT 大樓高 411 公尺，是韓國第二高的大樓。"},
        {"id": "x-jagalchi", "name": "札嘎其市場", "sub": "자갈치시장", "lat": 35.0967, "lng": 129.0305, "kind": "next", "photoQuery": "Jagalchi Market", "blurb": "韓國最大的海鮮市場。原本在計畫裡，這次沒去成。", "history": "名字來自當地的小碎石（자갈）海灘。"},
        {"id": "x-oryukdo", "name": "五六島天空步道", "sub": "오륙도 스카이워크", "lat": 35.1006, "lng": 129.1245, "kind": "next", "photoQuery": "Oryukdo Skywalk", "blurb": "懸在海崖上的玻璃步道，可以眺望五六島。"}
      ]
    }
  ],
  "history": [
    {
      "eyebrow": "第一部分・認識釜山",
      "title": "부산・釜山",
      "lead": "韓國第二大城市、最大的港口，也是韓國的海洋與電影之都。",
      "facts": [
        {"b": "約 330 萬", "span": "人口，韓國第二大城市"},
        {"b": "前十大", "span": "全球貨櫃港之一，韓國最大港口"},
        {"b": "「釜」＝鍋", "span": "據說城後的山形狀像一口鍋，因此得名"},
        {"b": "1966", "span": "和高雄結為姊妹市"}
      ]
    },
    {
      "eyebrow": "第一部分・韓戰",
      "title": "韓戰：1950–1953",
      "lead": "按 → 逐一看每個事件，地圖會畫出當時的戰線。",
      "legend": true,
      "timeline": [
        {
          "year": "1950/06",
          "text": "北韓南侵，三天後首爾淪陷",
          "detail": "6 月 25 日清晨，北韓軍隊越過 38 度線全面南侵。6 月 28 日首爾淪陷，南韓政府一路往南撤到大田、大邱。",
          "front": [[37.35, 124.0], [37.45, 126.6], [37.5, 127.1], [37.7, 127.8], [37.85, 128.6], [38.0, 129.0]]
        },
        {
          "year": "1950/08",
          "text": "退守釜山防禦圈，釜山成為臨時首都",
          "detail": "8 月 18 日政府遷到釜山。韓軍和聯合國軍退守東南角、以洛東江為界的「釜山防禦圈」，全長約 230 公里，防禦圈以外全落入北韓手中。8 月 11 日浦項失守，馬山一帶激戰到 9 月中。釜山就是當時南韓最後的一塊土地。",
          "front": [[35.0, 128.3], [35.2, 128.35], [35.45, 128.45], [35.75, 128.42], [36.0, 128.38], [36.15, 128.6], [36.2, 128.95], [36.25, 129.2], [36.35, 129.38]]
        },
        {
          "year": "1950/09",
          "text": "仁川登陸，收復首爾",
          "detail": "9 月 15 日聯合國軍在仁川登陸，切斷北韓的補給線。被困在防禦圈裡的部隊同時反攻，9 月 28 日收復首爾，戰線推回 38 度線附近。",
          "front": [[37.9, 124.0], [38.0, 126.5], [38.0, 128.0], [38.1, 129.0]]
        },
        {
          "year": "1950/11",
          "text": "北上逼近鴨綠江，中國參戰",
          "detail": "10 月聯合國軍越過 38 度線往北打，10 月 26 日韓軍抵達鴨綠江，政府一度遷回首爾。但中國軍隊在 10 月 19 日已秘密渡過鴨綠江，11 月底發動大規模反攻，聯合國軍被迫全面撤退。",
          "front": [[39.6, 124.0], [39.7, 125.3], [40.0, 126.3], [40.6, 127.2], [41.4, 128.2], [41.9, 129.5], [42.2, 130.5]]
        },
        {
          "year": "1950/12",
          "text": "興南撤退，北韓難民搭船南下",
          "detail": "東北部的聯合國軍被包圍，只能從興南港走海路撤離。12 月中到 24 日，約 10 萬名害怕共產政權的北韓平民跟著擠上船逃往南方。他們不是從北韓直接走過來，而是在聯合國軍一度控制北韓時，跟著撤退的船南下。地圖上北邊那一小塊藍色，就是興南港的撤退據點。",
          "box": "梅瑞迪斯勝利號：只設計載 12 名乘客的貨輪，載了 14,000 多名難民，全程沒有護航。釜山港已經擠滿難民不能靠岸，最後在聖誕節抵達巨濟島長承浦，途中沒有人死亡，還有 5 個嬰兒出生。這批北韓難民，後來做出了釜山的小麥冷麵。",
          "front": [[37.9, 124.0], [38.0, 126.5], [38.1, 127.5], [38.3, 128.4]],
          "pocket": [[40.05, 127.35], [40.05, 127.85], [39.7, 127.85], [39.7, 127.35]], "pocketLabel": "興南港：最後的撤退據點"
        },
        {
          "year": "1951/01",
          "text": "一・四後退，首爾再度失守",
          "detail": "1951 年 1 月 4 日首爾再度失守，戰線退到平澤、原州一帶，政府第二次遷到釜山。之後戰線拉鋸，1951 年春天大致穩定在 38 度線附近。",
          "front": [[36.95, 124.0], [37.0, 126.9], [37.15, 127.5], [37.3, 128.0], [37.35, 128.7], [37.45, 129.2]]
        },
        {
          "year": "1953/07",
          "text": "簽署停戰協定，政府遷回首爾",
          "detail": "1953 年 7 月 27 日簽署停戰協定，以當時的戰線劃出軍事分界線和非軍事區（DMZ），至今仍是南北韓的界線。8 月政府遷回首爾，釜山前後當了 1,023 天的臨時首都。",
          "front": [[37.65, 124.0], [37.72, 126.3], [37.85, 126.65], [38.0, 126.9], [38.25, 127.2], [38.3, 127.6], [38.25, 128.0], [38.4, 128.2], [38.6, 128.37]]
        }
      ]
    },
    {
      "eyebrow": "第一部分・避難首都",
      "title": "臨時首都的 1,023 天",
      "lead": "釜山是韓戰中唯一沒有被北韓攻下的大城市。政府、學校、報社都搬來這裡，全國的難民也湧進這座港口城市。",
      "facts": [
        {"b": "1,023 天", "span": "釜山前後當臨時首都的時間"},
        {"b": "約 84 萬", "span": "1951 年人口，比戰前多了將近一倍"}
      ],
      "bullets": ["「在影島大橋見」：失散的家人約在 1934 年蓋好的影島大橋重逢", "40 階梯：難民聚集擺攤、等待家人消息的地方", "山坡和海崖上搭起的木板屋村落，就是今天甘川、白淺灘文化村的由來", "美軍物資和罐頭流進市場，撐起了國際市場和富平罐頭市場"]
    },
    {
      "eyebrow": "第一部分・戰爭留下的痕跡",
      "title": "我們這次看到的",
      "bullets": ["白淺灘文化村：難民在海崖上搭起的村落，村裡還有老照片展", "國際市場、富平罐頭市場：難民做生意、買賣美軍物資的地方", "寶水洞書店街：難民擺箱子賣舊書維生", "小麥冷麵：北韓難民用美援麵粉做出的家鄉味", "豬肉湯飯：據說是難民用便宜豬骨熬出來的"],
      "box": {"title": "下次可以去", "text": "釜山臨時首都紀念館、聯合國紀念公園，還有這次沒去成的甘川文化村。地圖上亮起來的是這次去過、和韓戰有關的景點。"},
      "pins": ["d2-huinnyeoul", "d1-gukje", "d1-bupyeong", "d1-bosu", "d4-milmyeon", "d3-gukbap"]
    }
  ]
};
