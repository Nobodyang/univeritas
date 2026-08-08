/* UniVeritas v16 数据拆分 · data-stats.js · 自 index.html 抽离（纯搬迁，零改动） · 全局变量名保持不变 */
window.ROUND_MONTHS={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
window.DEADLINES=[
 {label:'牛津 / 剑桥（UCAS）', en:'Oxford / Cambridge (UCAS)', date:'-10-15', icon:'🏰'},
 {label:'美本 ED / EA 早申', en:'US ED / EA Early', date:'-11-01', icon:'⚡'},
 {label:'香港本科 首轮', en:'HK Early Round', date:'-11-16', icon:'🇭🇰'},
 {label:'UC 加州大学系统', en:'UC System', date:'-11-30', icon:'🐻'},
 {label:'美本 RD 常规批', en:'US Regular Decision', date:'-01-01', icon:'📮'},
 {label:'英本 UCAS 常规批', en:'UK UCAS Regular', date:'-01-14', icon:'🇬🇧'},
 {label:'加本 OUAC 截止', en:'Canada OUAC', date:'-01-15', icon:'🍁'},
 {label:'新二 本科截止', en:'Singapore (NUS/NTU)', date:'-02-28', icon:'🦁'},
];
window.ROI_DATA={"fx": {"us": 7.1, "uk": 9.1, "hk": 0.91, "sg": 5.3, "au": 4.7, "ca": 5.2}, "regions": {"us": {"unit": "USD/年", "majors": {"cs": {"v": 88907, "src": "https://www.naceweb.org/job-market/compensation/average-starting-salary-for-class-of-2024-shows-mild-gain"}, "ee": {"v": 80482, "src": "https://www.naceweb.org/job-market/compensation/average-starting-salary-for-class-of-2024-shows-mild-gain"}, "engineering": {"v": 80482, "src": "https://www.naceweb.org/job-market/compensation/average-starting-salary-for-class-of-2024-shows-mild-gain"}, "business_finance": {"v": 68644, "src": "https://www.naceweb.org/job-market/compensation/average-starting-salary-for-class-of-2024-shows-mild-gain"}, "science": {"v": 78543, "src": "https://www.naceweb.org/job-market/compensation/average-starting-salary-for-class-of-2024-shows-mild-gain"}, "social_science": {"v": 69802, "src": "https://www.lsuuniversityrec.com/average-salaries-for-four-year-college-graduates/"}, "humanities": {"v": 68227, "src": "https://www.lsuuniversityrec.com/average-salaries-for-four-year-college-graduates/"}}}, "uk": {"unit": "GBP/年", "majors": {"cs": {"v": 34000, "src": "https://www.prospects.ac.uk/jobs-and-work-experience/job-sectors/information-technology/overview-of-the-uks-it-industry/"}, "ee": {"v": 30900, "src": "https://digital.top100graduateemployers.com/view/844684358"}, "engineering": {"v": 30900, "src": "https://digital.top100graduateemployers.com/view/844684358"}, "business_finance": {"v": 37500, "src": "https://www.prospects.ac.uk/jobs-and-work-experience/job-sectors/accountancy-banking-and-finance/graduate-finance-jobs/"}, "science": {"v": 35000, "src": "https://www.bristol.ac.uk/news/2025/september/high-fliers-report-2025.html"}, "social_science": {"v": 35000, "src": "https://www.bristol.ac.uk/news/2025/september/high-fliers-report-2025.html"}, "humanities": {"v": 35000, "src": "https://www.bristol.ac.uk/news/2025/september/high-fliers-report-2025.html"}, "art_design": {"v": 35000, "src": "https://www.bristol.ac.uk/news/2025/september/high-fliers-report-2025.html"}}}, "hk": {"unit": "HKD", "majors": {"cs": {"v": 329000, "src": "https://www.cedars.hku.hk/ges"}, "ee": {"v": 283000, "src": "https://hkuwild.com/en/02-admissions/graduate-outcomes.html"}, "engineering": {"v": 283000, "src": "https://hkuwild.com/en/02-admissions/graduate-outcomes.html"}, "business_finance": {"v": 295000, "src": "https://hkuwild.com/en/02-admissions/graduate-outcomes.html"}, "science": {"v": 290000, "src": "https://hkuwild.com/en/02-admissions/graduate-outcomes.html"}, "social_science": {"v": 275000, "src": "https://hkuwild.com/en/02-admissions/graduate-outcomes.html"}, "humanities": {"v": 329000, "src": "https://www.cedars.hku.hk/ges"}, "art_design": {"v": 329000, "src": "https://www.cedars.hku.hk/ges"}}}, "sg": {"unit": "SGD/月", "majors": {"cs": {"v": 66000, "src": "https://www.academicjobs.com/higher-education-news/singapore-tech-graduates-highest-salaries-2025-ges-information-digital-technologies-s5500-8109"}, "ee": {"v": 55200, "src": "https://www.academicjobs.com/higher-education-news/singapore-tech-graduates-highest-salaries-2025-ges-information-digital-technologies-s5500-8109"}, "engineering": {"v": 55200, "src": "https://www.academicjobs.com/higher-education-news/singapore-tech-graduates-highest-salaries-2025-ges-information-digital-technologies-s5500-8109"}, "business_finance": {"v": 52800, "src": "https://www.academicjobs.com/higher-education-news/singapore-tech-graduates-highest-salaries-2025-ges-information-digital-technologies-s5500-8109"}, "science": {"v": 50400, "src": "https://www.academicjobs.com/higher-education-news/singapore-tech-graduates-highest-salaries-2025-ges-information-digital-technologies-s5500-8109"}, "social_science": {"v": 54000, "src": "https://www.academicjobs.com/higher-education-news/university-degree-employability-singapore-or-do-degrees-guarantee-jobs-12323"}, "humanities": {"v": 54000, "src": "https://www.academicjobs.com/higher-education-news/university-degree-employability-singapore-or-do-degrees-guarantee-jobs-12323"}, "art_design": {"v": 54000, "src": "https://www.academicjobs.com/higher-education-news/university-degree-employability-singapore-or-do-degrees-guarantee-jobs-12323"}}}, "au": {"unit": "AUD/年", "majors": {"cs": {"v": 75300, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}, "ee": {"v": 80000, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}, "engineering": {"v": 80000, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}, "business_finance": {"v": 72000, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}, "science": {"v": 72400, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}, "social_science": {"v": 75000, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}, "humanities": {"v": 75000, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}, "art_design": {"v": 62600, "src": "https://postgraduatefutures.com.au/postgraduate-salaries/"}}}, "ca": {"unit": "CAD/年", "majors": {"cs": {"v": 76600, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}, "ee": {"v": 75500, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}, "engineering": {"v": 75500, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}, "business_finance": {"v": 58600, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}, "science": {"v": 54100, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}, "social_science": {"v": 47000, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}, "humanities": {"v": 42900, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}, "art_design": {"v": 38500, "src": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710015801"}}}, "cn_returnee": {"v": 18.5, "note": "海归优先岗位挂牌均价 15,440元/月（智联《2024中国海归就业调查报告》）", "src": "https://finance.sina.com.cn/tech/roll/2025-03-10/doc-inepcwtn0769729.shtml", "majors": {"cs": {"v": 28.6, "note": "IT/互联网行业海归平均年薪 28.58 万（2025 留学归国人员综合分析）；AI 算法岗起薪约 2.5 万/月", "src": "http://mp.weixin.qq.com/s?__biz=MzU5ODkxMTk4Mw==&mid=2247488821&idx=1&sn=ff9561cba7cbdfcf411622bdc9936bf8"}, "ee": {"v": 19.5, "note": "电子/半导体/集成电路海归优先岗 16,263 元/月（智联《2025中国海归就业调查报告》）", "src": "https://www.sznews.com/news/content/2026-01/30/content_31922686.htm"}, "engineering": {"v": 19.1, "note": "新能源海归优先岗 15,933 元/月（智联《2025中国海归就业调查报告》）", "src": "https://www.sznews.com/news/content/2026-01/30/content_31922686.htm"}, "business_finance": {"v": 21.6, "note": "投资/融资海归优先岗月薪超 1.8 万（智联《2025中国海归就业调查报告》）", "src": "https://www.sznews.com/news/content/2026-01/30/content_31922686.htm"}, "science": {"v": 21.0, "note": "医药制造海归优先岗 17,493 元/月（智联《2025中国海归就业调查报告》）", "src": "https://www.sznews.com/news/content/2026-01/30/content_31922686.htm"}, "social_science": {"v": 16.8, "note": "咨询/教培/贸易海归优先岗 1.2-1.6 万/月（智联《2025中国海归就业调查报告》）", "src": "https://www.sznews.com/news/content/2026-01/30/content_31922686.htm"}, "humanities": {"v": 16.8, "note": "咨询/教培/贸易海归优先岗 1.2-1.6 万/月（智联《2025中国海归就业调查报告》）", "src": "https://www.sznews.com/news/content/2026-01/30/content_31922686.htm"}, "art_design": {"v": 18.5, "note": "海归优先岗位挂牌均价 15,440 元/月（智联《2024中国海归就业调查报告》）", "src": "https://finance.sina.com.cn/tech/roll/2025-03-10/doc-inepcwtn0769729.shtml"}}}, "cn": {"unit": "万元/年 (麦可思2024届)", "majors": {"cs": {"v": 8.5, "src": "https://news.china.com/socialgd/10000169/20250614/48468100_all.html"}, "ee": {"v": 8.7, "src": "https://news.china.com/socialgd/10000169/20250614/48468100_all.html"}, "engineering": {"v": 8.2, "src": "https://36kr.com/p/3346104888875653"}, "business_finance": {"v": 7.5, "src": "https://36kr.com/p/3346104888875653"}, "science": {"v": 7.3, "src": "https://qingtingxy.com/178139.html"}, "social_science": {"v": 6.7, "src": "https://qingtingxy.com/178139.html"}, "humanities": {"v": 6.9, "src": "https://qingtingxy.com/178139.html"}, "art_design": {"v": 6.9, "src": "https://qingtingxy.com/178139.html"}}}}, "sch": {"us": "美本merit常见档位: 私立大学部分学费奖约$5,000-$40,000/年(如WPI $10,000-$25,000/年; 多所私立$20,000-$40,000/年); 顶尖档位为quarter/half/full tuition(USC、Vanderbilt、WashU、U Miami等设半奖/全奖名额); 国…", "uk": "英授课型硕士: GREAT Scholarships £10,000学费减免(British Council+70余校,2025-26共200+名额,中国在18个资格国之内); 各校国际生奖学金常见£2,000-£10,000学费减免; Chevening全奖(学费+生活+机票); 本科国际生奖学金较少,多为£2,00…", "hk": "港校本科入学奖(非本地生): HKUST最高全额学费+HK$60,000/年(可续,IB45分档;工程学院官方页确认上限); HKU入学奖最高全额学费+住宿+生活津贴; CityU入学奖最高全额学费; 授课型硕士奖学金少,如HKBU International Postgraduate Scholarship全学费+H…", "sg": "新加坡: MOE Tuition Grant学费减免(国际生签3年工作bond,非奖学金但为主要减负); NUS Science & Technology本科奖: 全补贴学费+S$6,000/年生活+S$1,750电脑+住宿补贴(亚洲国际生); NUS International Undergraduate Schol…"}};
window.ROUNDS={
  princeton:   {ed1:null, ed2:null, ea:null, rea:'Nov 1', rd:'Jan 1', note:'SCEA/REA 非绑定但限制性（不可同时申请其他私立早轮）', src:'https://admission.princeton.edu/apply/application-deadlines'},
  harvard:     {ed1:null, ed2:null, ea:null, rea:'Nov 1', rd:'Jan 1', note:'REA 非绑定但限制性', src:'https://college.harvard.edu/admissions/apply'},
  yale:        {ed1:null, ed2:null, ea:null, rea:'Nov 1', rd:'Jan 2', note:'SCEA 非绑定但限制性', src:'https://admissions.yale.edu/deadlines'},
  columbia:    {ed1:'Nov 1', ed2:null, ea:null, rea:null, rd:'Jan 1', note:'ED binding', src:'https://undergrad.admissions.columbia.edu/apply/first-year'},
  upenn:       {ed1:'Nov 1', ed2:null, ea:null, rea:null, rd:'Jan 5', note:'ED binding', src:'https://admissions.upenn.edu/'},
  dartmouth:   {ed1:'Nov 1', ed2:null, ea:null, rea:null, rd:'Jan 2', note:'ED binding', src:'https://admissions.dartmouth.edu/apply/first-year-applicants'},
  brown:       {ed1:'Nov 1', ed2:null, ea:null, rea:null, rd:'Jan 5', note:'ED binding；RD Jan 5 经官网确认', src:'https://admission.brown.edu/first-year/application-checklist'},
  cornell:     {ed1:'Nov 1', ed2:null, ea:null, rea:null, rd:'Jan 2', note:'ED binding', src:'https://admissions.cornell.edu/apply'},
  stanford:    {ed1:null, ed2:null, ea:null, rea:'Nov 1', rd:'Jan 5', note:'REA 非绑定但限制性', src:'https://admission.stanford.edu/apply/'},
  mit:         {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:'Jan 5', note:'EA 非限制（可与任何他校早申并用，官网明确 no limits）；RA 截止日待核实', src:'https://mitadmissions.org/apply/prepare/deadlines/'},
  caltech:     {ed1:null, ed2:null, ea:null, rea:'Nov 1', rd:'Jan 3', note:'REA 非绑定但限制性', src:'https://www.admissions.caltech.edu/apply'},
  uchicago:    {ed1:'Nov 3', ed2:'Jan 5', ea:'Nov 3', rea:null, rd:'Jan 5', note:'ED1/ED2 binding；EA 非绑定；2025-26 季日期经官网确认（Nov 3 / Jan 5）', src:'https://collegeadmissions.uchicago.edu/apply/application/'},
  duke:        {ed1:'Nov 3', ed2:null, ea:null, rea:null, rd:'Jan 5', note:'ED binding；2025-26 季为 Nov 3/Jan 5；官网当前 2026-27 季已更新为 Nov 2/Jan 4', src:'https://admissions.duke.edu/apply/important-dates/'},
  northwestern:{ed1:'Nov 1', ed2:null, ea:null, rea:null, rd:'Jan 2', note:'ED binding', src:'https://admissions.northwestern.edu/apply/'},
  jhu:         {ed1:'Nov 1', ed2:'Jan 2', ea:null, rea:null, rd:'Jan 2', note:'ED1/ED2 binding；经官网确认', src:'https://apply.jhu.edu/undergraduate-admissions/deadlines/'},
  vanderbilt:  {ed1:'Nov 1', ed2:'Jan 1', ea:null, rea:null, rd:'Jan 1', note:'ED1/ED2 binding', src:'https://www.vanderbilt.edu/undergraduateadmissions/'},
  rice:        {ed1:'Nov 1', ed2:'Jan 4', ea:null, rea:null, rd:'Jan 4', note:'ED1/ED2 binding', src:'https://admission.rice.edu/'},
  notredame:   {ed1:null, ed2:null, ea:null, rea:'Nov 1', rd:'Jan 2', note:'REA 非绑定但限制性；RD Jan 2（Class of 2030 确认）', src:'https://admissions.nd.edu/apply/'},
  emory:       {ed1:'Nov 1', ed2:'Jan 1', ea:null, rea:null, rd:'Jan 1', note:'ED1/ED2 binding', src:'https://apply.emory.edu/'},
  georgetown:  {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:'Jan 1', note:'EA 非绑定（不可同时 ED 他校）；RD Jan 1（2026-08 官网招生页确认）', src:'https://uadmissions.georgetown.edu/first-year/'},
  uva:         {ed1:'Nov 1', ed2:null, ea:'Nov 1', rea:null, rd:'Jan 5', note:'ED binding；EA 非绑定', src:'https://admission.virginia.edu/'},
  unc:         {ed1:null, ed2:null, ea:'Oct 15', rea:null, rd:'Jan 15', note:'EA 非绑定；RD Jan 15（2026 确认）', src:'https://admissions.unc.edu/'},
  umich:       {ed1:'Nov 1', ed2:null, ea:'Nov 1', rea:null, rd:'Feb 1', note:'ED binding（2025-26 季新增）；EA 非绑定；RD Feb 1', src:'https://admissions.umich.edu/apply/first-year-applicants/deadlines'},
  nyu:         {ed1:'Nov 1', ed2:'Jan 1', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding', src:'https://www.nyu.edu/admissions/undergraduate-admissions.html'},
  bu:          {ed1:'Nov 1', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；2025-26 季 ED2/RD 为 Jan 5（往年曾为 Jan 6）', src:'https://www.bu.edu/admissions/apply/first-year/deadlines/'},
  neu:         {ed1:'Nov 1', ed2:'Jan 1', ea:'Nov 1', rea:null, rd:'Jan 1', note:'ED1/ED2 binding；EA 非绑定', src:'https://admissions.northeastern.edu/application-information/application-deadlines/'},
  tufts:       {ed1:'Nov 3', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；2025-26 季为 Nov 3/Jan 5（往年曾为 Nov 1/Jan 4），待核实', src:'https://admissions.tufts.edu/'},
  wakeforest:  {ed1:'Nov 15', ed2:'Jan 1', ea:'Nov 15', rea:null, rd:'Jan 1', note:'ED1/ED2 binding；EA 非绑定（仅限第一代大学生申请者）', src:'https://admissions.wfu.edu/apply/'},
  rochester:   {ed1:'Nov 1', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；经官网确认', src:'https://admissions.rochester.edu/apply/'},
  cwru:        {ed1:'Nov 1', ed2:'Jan 15', ea:'Nov 1', rea:null, rd:'Jan 15', note:'ED1/ED2 binding；EA 非绑定', src:'https://case.edu/admission/apply'},
  tulane:      {ed1:'Nov 1', ed2:'Jan 15', ea:'Nov 15', rea:null, rd:'Jan 15', note:'ED1/ED2 binding；EA 非绑定；2025-26 季 EA 为 Nov 15，官网当前 2026-27 季已改为 Nov 10', src:'https://admission.tulane.edu/'},
  gwu:         {ed1:'Nov 1', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；经官网确认', src:'https://undergraduate.admissions.gwu.edu/'},
  fordham:     {ed1:'Nov 1', ed2:'Jan 10', ea:'Nov 1', rea:null, rd:'Jan 10', note:'ED1/ED2 binding；EA 非绑定；ED2/RD 另有来源显示 Jan 3，待核实', src:'https://www.fordham.edu/undergraduate-admission/apply/'},
  syracuse:    {ed1:'Nov 15', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；2025-26 季无 EA（EA 自 2027 秋入学起新增，Nov 1）', src:'https://www.syracuse.edu/admissions/undergraduate/'},
  pitt:        {ed1:null, ed2:null, ea:null, rea:null, rd:null, note:'滚动录取（rolling），无固定截止日；建议尽早申请', src:'https://admissions.pitt.edu/first-year-student/'},
  psu:         {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:null, note:'EA 非绑定；EA 之后为滚动录取，无固定 RD 截止日', src:'https://admissions.psu.edu/'},
  rutgers:     {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:'Dec 1', note:'EA 非绑定；RD Dec 1（经官网确认）', src:'https://admissions.rutgers.edu/apply/dates-and-deadlines'},
  uconn:       {ed1:'Nov 1', ed2:null, ea:'Nov 1', rea:null, rd:'Jan 15', note:'ED binding（2026 秋入学新增）；EA 非绑定；merit priority Dec 1；RD Jan 15 待核实', src:'https://admissions.uconn.edu/apply/first-year/'},
  umn:         {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:'Jan 1', note:'EA I Nov 1、EA II Dec 1 均非绑定；RD Jan 1', src:'https://admissions.tc.umn.edu/'},
  uwmadison:   {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:'Jan 15', note:'EA 非绑定', src:'https://admissions.wisc.edu/deadlines-and-decisions/'},
  uiuc:        {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:'Jan 5', note:'EA（priority）非绑定；RD Jan 5', src:'https://www.admissions.illinois.edu/apply/freshman'},
  gatech:      {ed1:null, ed2:null, ea:'Oct 15', rea:null, rd:'Jan 5', note:'EA1 Oct 15 仅限佐治亚州居民；EA2 Nov 3 面向非本州/国际生；RD Jan 5（2025-26 季）', src:'https://admission.gatech.edu/'},
  purdue:      {ed1:null, ed2:null, ea:'Nov 1', rea:null, rd:'Jan 15', note:'EA 非绑定', src:'https://www.admissions.purdue.edu/apply/'},
  tamu:        {ed1:null, ed2:null, ea:null, rea:null, rd:'Dec 1', note:'官网秋季仅列 Dec 1 申请截止（College Station）；部分第三方称有 Oct 15 EA，待核实', src:'https://admissions.tamu.edu/apply'},
  utaustin:    {ed1:null, ed2:null, ea:'Oct 15', rea:null, rd:'Dec 1', note:'EA 非绑定', src:'https://admissions.utexas.edu/apply/'},
  ucla:        {ed1:null, ed2:null, ea:null, rea:null, rd:'Nov 30', note:'UC 系统统一：2025-26 季提交窗口 Oct 1–Nov 30（该季官方延期至 Dec 1, 2025）；无早轮', src:'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/'},
  berkeley:    {ed1:null, ed2:null, ea:null, rea:null, rd:'Nov 30', note:'UC 系统统一：Oct 1–Nov 30（2025-26 季延至 Dec 1, 2025）；无早轮', src:'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/'},
  ucsd:        {ed1:null, ed2:null, ea:null, rea:null, rd:'Nov 30', note:'UC 系统统一：Oct 1–Nov 30（2025-26 季延至 Dec 1, 2025）；无早轮', src:'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/'},
  ucdavis:     {ed1:null, ed2:null, ea:null, rea:null, rd:'Nov 30', note:'UC 系统统一：Oct 1–Nov 30（2025-26 季延至 Dec 1, 2025）；无早轮', src:'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/'},
  uci:         {ed1:null, ed2:null, ea:null, rea:null, rd:'Nov 30', note:'UC 系统统一：Oct 1–Nov 30（2025-26 季延至 Dec 1, 2025）；无早轮', src:'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/'},
  ucsb:        {ed1:null, ed2:null, ea:null, rea:null, rd:'Nov 30', note:'UC 系统统一：Oct 1–Nov 30（2025-26 季延至 Dec 1, 2025）；无早轮', src:'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/'},
  uwseattle:   {ed1:null, ed2:null, ea:null, rea:null, rd:'Nov 15', note:'单一申请截止日 Nov 15，无早轮', src:'https://admission.washington.edu/apply/freshman/'},
  usc:         {ed1:'Nov 1', ed2:null, ea:'Nov 1', rea:null, rd:'Jan 15', note:'ED binding（2025-26 季新增，表演艺术类专业除外，其 RD 为 Dec 1）；EA 非绑定；2025-26 季 RD 为 Jan 15，官网当前 2026-27 季已改为 Jan 10', src:'https://admission.usc.edu/apply/dates-deadlines/'},
  cmu:         {ed1:'Nov 3', ed2:null, ea:null, rea:null, rd:'Jan 5', note:'ED binding（戏剧/音乐等专业不适用）；2025-26 季为 Nov 3/Jan 5（官方课程目录确认）；官网当前 2026-27 季为 Nov 2/Jan 4', src:'https://www.cmu.edu/admission'},
  williams:    {ed1:'Nov 15', ed2:null, ea:null, rea:null, rd:'Jan 5', note:'ED binding', src:'https://www.williams.edu/admission/'},
  amherst:     {ed1:'Nov 7', ed2:null, ea:null, rea:null, rd:'Jan 5', note:'ED binding；2025-26 季 ED 为 Nov 7（官网当前 2026-27 季已更新为 Nov 9）', src:'https://www.amherst.edu/admission/apply'},
  swarthmore:  {ed1:'Nov 15', ed2:'Jan 4', ea:null, rea:null, rd:'Jan 4', note:'ED1/ED2 binding；经官网确认', src:'https://www.swarthmore.edu/admissions-aid/apply'},
  pomona:      {ed1:'Nov 8', ed2:'Jan 8', ea:null, rea:null, rd:'Jan 8', note:'ED1/ED2 binding；经官网确认', src:'https://www.pomona.edu/admissions/apply'},
  bowdoin:     {ed1:'Nov 15', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；经官网确认', src:'https://www.bowdoin.edu/admissions/apply/'},
  carleton:    {ed1:'Nov 15', ed2:'Jan 15', ea:null, rea:null, rd:'Jan 15', note:'ED1/ED2 binding；经官网确认', src:'https://www.carleton.edu/admissions/apply/'},
  middlebury:  {ed1:'Nov 3', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；2025-26 季为 Nov 3/Jan 5；官网当前 2026-27 季已更新为 Nov 2/Jan 4', src:'https://www.middlebury.edu/admissions/apply/'},
  davidson:    {ed1:'Nov 15', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 12', note:'ED1/ED2 binding；2025-26 季 ED2 Jan 5 / RD Jan 12；官网当前 2026-27 季为 ED2 Jan 4 / RD Jan 11', src:'https://www.davidson.edu/admission-and-financial-aid/how-to-apply'},
  vassar:      {ed1:'Nov 15', ed2:'Jan 1', ea:null, rea:null, rd:'Jan 1', note:'ED1/ED2 binding；经官网确认', src:'https://www.vassar.edu/admission/apply'},
  grinnell:    {ed1:'Nov 15', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 15', note:'ED1/ED2 binding', src:'https://www.grinnell.edu/admission/apply'},
  harveymudd:  {ed1:'Nov 15', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding', src:'https://www.hmc.edu/admission/apply/'},
  wustl:       {ed1:'Nov 1', ed2:'Jan 2', ea:null, rea:null, rd:'Jan 2', note:'ED1/ED2 binding；2025-26 季 ED2/RD 日期来源冲突（Jan 2 vs Jan 4），待核实；官网当前 2026-27 季已改为 ED1/EA Nov 2、ED2/RD Jan 4 并新增非绑定 EA', src:'https://admissions.washu.edu/how-to-apply/application-dates-deadlines/'},
  bc:          {ed1:'Nov 1', ed2:'Jan 2', ea:null, rea:null, rd:'Jan 2', note:'ED1/ED2 binding', src:'https://www.bc.edu/bc-web/admission/apply.html'},
  brandeis:    {ed1:'Nov 3', ed2:'Jan 15', ea:'Nov 3', rea:null, rd:'Jan 15', note:'ED1/ED2 binding；EA 非绑定（2025-26 季新增）；2025-26 季日期经官网经济援助截止页确认', src:'https://www.brandeis.edu/admissions/apply/application-process/early-decision.html'},
  urichmond:   {ed1:'Nov 1', ed2:'Jan 1', ea:'Nov 1', rea:null, rd:'Jan 1', note:'ED1/ED2 binding；EA 非绑定；经官网确认', src:'https://admissions.richmond.edu/process/index.html'},
  lafayette:   {ed1:'Nov 1', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 5', note:'ED1/ED2 binding；经官网确认', src:'https://admissions.lafayette.edu/apply/'},
  colby:       {ed1:'Nov 15', ed2:'Jan 1', ea:null, rea:null, rd:'Jan 1', note:'ED1/ED2 binding；ED2/RD 日期待核实（2024-25 季曾为 Jan 3）', src:'https://www.colby.edu/admission/apply/'},
  haverford:   {ed1:'Nov 15', ed2:'Jan 5', ea:null, rea:null, rd:'Jan 10', note:'ED1/ED2 binding；经官网确认', src:'https://www.haverford.edu/admission/apply'},
  claremontmckenna: {ed1:'Nov 1', ed2:'Jan 10', ea:null, rea:null, rd:'Jan 10', note:'ED1/ED2 binding；2025-26 季日期确认', src:'https://www.cmc.edu/admission/apply'},
  babson:      {ed1:'Nov 1', ed2:'Jan 4', ea:'Nov 1', rea:null, rd:'Jan 4', note:'ED1/ED2 binding；EA 非绑定；ED2/RD 官网当前显示 Jan 4（2024-25 季曾为 Jan 2），2025-26 季具体日期待核实', src:'https://www.babson.edu/undergraduate/how-to-apply/'},
  bentley:     {ed1:'Nov 15', ed2:'Jan 15', ea:null, rea:null, rd:'Jan 15', note:'ED1/ED2 binding；无 EA（经官网确认）', src:'https://www.bentley.edu/undergraduate/apply/first-year-applicant'},
  rpi:         {ed1:'Nov 1', ed2:'Jan 5', ea:'Dec 1', rea:null, rd:'Jan 21', note:'ED1/ED2 binding；EA 非绑定；RD Jan 21 为官网 Fall 2026 FAQ 所列（另有来源显示 Jan 15），待核实', src:'https://undergrad.admissions.rpi.edu/'},
  wurster:     {ed1:'Nov 1', ed2:'Jan 5', ea:'Nov 1', rea:null, rd:'Feb 1', note:'即 WPI（Worcester Polytechnic Institute）；ED1/ED2 binding；EA I Nov 1、EA II Jan 5 非绑定；2026 秋起 ED 录取者保证每年 $25k merit 奖学金', src:'https://www.wpi.edu/admissions/undergraduate/apply'},
};
window.ADMIT_STATS={
  harvard: {rate:3.6, sat25:1510, sat75:1580, act25:34, act75:36, gpa:null, toefl:null,
    src:'https://oir.harvard.edu/common-data-set',
    note:'Class of 2028: 54,008申请/1,970录取 (3.6%)。SAT/ACT为CDS 2024-25提交者中段。CDS不公布GPA。本科无TOEFL硬性最低分（建议100+）。'},

  stanford: {rate:3.6, sat25:1510, sat75:1570, act25:34, act75:35, gpa:null, toefl:null,
    src:'https://irds.stanford.edu/data-findings/common-data-set',
    note:'Class of 2028: 3.61% (CDS 2024-25)。分数为提交者中段。不公布平均GPA。本科不要求英语考试，无TOEFL最低分。'},

  mit: {rate:4.5, sat25:1520, sat75:1570, act25:34, act75:36, gpa:null, toefl:90,
    src:'https://ir.mit.edu/projects/2024-25-common-data-set/',
    note:'Class of 2028: 4.55% (28,232申请)。SAT/ACT为MIT官方CDS 2024-25（test-required）。MIT不收集/报告高中GPA。TOEFL最低90（建议100）。'},

  yale: {rate:3.9, sat25:1470, sat75:1560, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://oir.yale.edu/data-reports/common-data-set',
    note:'Class of 2028: 57,517申请/2,227录取 (3.87%)。分数为CDS 2024-25（test-flexible年份，提交者中段）。GPA未公布。TOEFL最低100（本科）。'},

  princeton: {rate:4.6, sat25:1500, sat75:1560, act25:34, act75:35, gpa:3.95, toefl:null,
    src:'https://oira.princeton.edu',
    note:'Class of 2028: 4.62% (约40,000申请)。SAT 1500-1560、平均GPA 3.95 为CDS 2024-25。本科无TOEFL官方最低分。'},

  columbia: {rate:3.9, sat25:1510, sat75:1560, act25:34, act75:36, gpa:null, toefl:105,
    src:'https://undergrad.admissions.columbia.edu',
    note:'Class of 2028: 60,248申请/2,327录取 (3.86%)。分数为CDS 2024-25提交者中段。GPA未公布。本科TOEFL最低105。'},

  upenn: {rate:5.4, sat25:1510, sat75:1570, act25:34, act75:36, gpa:null, toefl:100,
    src:'https://ira.upenn.edu/penn-facts',
    note:'Class of 2028: 65,236申请 (5.4%, CDS 2024-25)。分数为CDS中段。GPA未公布。TOEFL无硬性最低分，官网建议100+。'},

  dartmouth: {rate:5.3, sat25:1440, sat75:1550, act25:32, act75:35, gpa:null, toefl:100,
    src:'https://www.dartmouth.edu/oir/',
    note:'Class of 2028: 31,657申请/约1,685录取 (~5.3%)。SAT/ACT为CDS提交者中段（test-optional年份，25分位偏低）。GPA未公布。TOEFL建议100+，无硬性最低分。'},

  brown: {rate:5.2, sat25:1470, sat75:1550, act25:33, act75:35, gpa:null, toefl:105,
    src:'https://oir.brown.edu',
    note:'Class of 2028: 48,881申请/2,521录取 (5.16%)。分数为CDS 2024-25提交者中段。GPA未公布。本科TOEFL最低105（官网英语要求页）。'},

  cornell: {rate:8.4, sat25:1510, sat75:1560, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://irp.dpb.cornell.edu/university-factbook/common-data-set',
    note:'Class of 2028: 8.41%。SAT 1510-1560 / ACT 33-35 为CDS 2024-25入学新生中段。GPA未公布。本科TOEFL最低100。'},

  caltech: {rate:2.3, sat25:null, sat75:null, act25:null, act75:null, gpa:null, toefl:100,
    src:'https://www.admissions.caltech.edu',
    note:'Class of 2028: 315录取/13,863申请 (2.27%)，全美最低。该届为test-blind（不考虑SAT/ACT），无官方分数段；2029届起恢复test-required（恢复后中段约SAT 1530-1580/ACT 35-36）。TOEFL最低100（或IELTS 7.0）。'},

  uchicago: {rate:4.5, sat25:1510, sat75:1560, act25:34, act75:35, gpa:null, toefl:100,
    src:'https://collegeadmissions.uchicago.edu',
    note:'Class of 2028: 43,612申请/1,955录取 (4.48%, CDS 2024-25)。分数为提交者中段（test-optional）。GPA未公布。TOEFL最低100（mag/官网英语要求）。'},

  duke: {rate:5.4, sat25:1510, sat75:1560, act25:34, act75:35, gpa:null, toefl:100,
    src:'https://oira.duke.edu',
    note:'Class of 2028: 54,194申请/2,950录取 (5.44%)。SAT 1510-1560 / ACT 34-35（Class of 2028）。GPA未公布。TOEFL最低100。'},

  northwestern: {rate:7.7, sat25:1500, sat75:1570, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://www.northwestern.edu/ir/',
    note:'Class of 2028: 49,474申请/3,806录取 (7.69%, CDS 2024-25)。分数为提交者中段（test-optional）。GPA未公布。TOEFL最低100。'},

  jhu: {rate:6.4, sat25:1530, sat75:1570, act25:34, act75:36, gpa:3.95, toefl:100,
    src:'https://apply.jhu.edu/fast-facts/',
    note:'官方Fast Facts：SAT中段1530-1570、ACT中位35、平均未加权GPA 3.95。Class of 2028总录取率约6.4%（ED 13.6%/RD 5.5%）；另一口径(45,134申请)为5.7%，见src。TOEFL最低100。'},

  vanderbilt: {rate:5.1, sat25:1500, sat75:1570, act25:34, act75:35, gpa:3.89, toefl:100,
    src:'https://www.vanderbilt.edu/dsa/common-data-set/',
    note:'Class of 2028: 总录取率5.1%（RD极低、ED约15%）。SAT/ACT为CDS 2024-25/IPEDS入学新生中段（仅约27%提交SAT）。入学平均GPA 3.89。TOEFL最低100。'},

  rice: {rate:8.0, sat25:1510, sat75:1560, act25:34, act75:36, gpa:null, toefl:100,
    src:'https://ir.rice.edu',
    note:'Class of 2028: 8.0%（ED约15.3%）。SAT 1510-1560 / ACT 34-36（CDS 2024-25）。GPA未公布。TOEFL最低100。'},

  notredame: {rate:11.3, sat25:1470, sat75:1540, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://oira.nd.edu',
    note:'Class of 2028: 29,943申请/3,324录取 (11.27%)。分数为CDS 2024-25提交者中段（约60%提交）。GPA未公布。TOEFL建议/最低100。'},

  wustl: {rate:12.0, sat25:1500, sat75:1570, act25:33, act75:35, gpa:3.92, toefl:null,
    src:'https://admissions.wustl.edu',
    note:'Class of 2028: 约33,000申请，~12%。分数为CDS提交者中段。CDS平均GPA 3.92（未加权）。TOEFL无官方硬性最低分（建议提交有竞争力分数）。'},

  emory: {rate:14.5, sat25:1480, sat75:1540, act25:32, act75:35, gpa:3.89, toefl:100,
    src:'https://apply.emory.edu',
    note:'Class of 2028: 34,914申请/5,058录取 (14.5%，含Emory+Oxford两学院)。分数为中段（提交者）。Emory College平均未加权GPA 3.89（Class of 2028, apply.emory.edu）。TOEFL最低100。'},

  georgetown: {rate:12.9, sat25:1400, sat75:1540, act25:31, act75:35, gpa:null, toefl:null,
    src:'https://uadmissions.georgetown.edu',
    note:'Class of 2028: 总录取率12.9%（EA 10.3%/RD 14.2%，CDS 2024-25）。SAT 1400-1540 / ACT 31-35（Class of 2028入学；Georgetown为test-required）。GPA未公布。TOEFL无官方最低分（接受TOEFL/IELTS/Duolingo，建议高分）。'},

  uva: {rate:16.5, sat25:1410, sat75:1520, act25:32, act75:35, gpa:null, toefl:null,
    src:'https://ira.virginia.edu',
    note:'Class of 2028: 约58,995申请/约9,726录取 (~16.5%；州内25.5%/州外13%)。SAT 1410-1520 / ACT 32-35（CDS 2024-25，test-optional提交者）。GPA未公布（90%入学新生高中GPA 4.0）。TOEFL无官方最低分。'},

  unc: {rate:15.3, sat25:1400, sat75:1530, act25:28, act75:34, gpa:null, toefl:100,
    src:'https://finance.unc.edu/wp-content/uploads/sites/298/2025/12/2025-annual-comprehensive-financial-report.pdf',
    note:'Class of 2028 (2024秋入学): 66,535申请/10,209录取 (15.3%，官方年报；州内38%/州外6.6%)。SAT 1400-1530 / ACT 28-34。官方公布平均GPA为加权4.49（非4.0制，故gpa=null）。国际生TOEFL最低100。'},

  umich: {rate:15.6, sat25:1360, sat75:1530, act25:31, act75:34, gpa:3.9, toefl:100,
    src:'https://obp.umich.edu',
    note:'Class of 2028: 98,310申请/15,373录取 (15.6%；州内约39%/州外约18%)。SAT/ACT为中段（test-optional提交者）。录取生GPA普遍3.9-4.0未加权（>38%为4.0）。TOEFL最低100（另有单项要求）。'},

  nyu: {rate:8.0, sat25:1470, sat75:1570, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://www.nyu.edu/admissions/undergraduate-admissions.html',
    note:'Class of 2028: 118,000申请/9,440录取 (8.0%)。SAT 1470-1570 / ACT 33-35（CDS 2024-25，test-recommended提交者）。GPA未在CDS公布均值（约3.8未加权，未核实故null）。TOEFL最低100。'},

  usc: {rate:9.8, sat25:1450, sat75:1550, act25:32, act75:35, gpa:3.8, toefl:100,
    src:'https://oir.usc.edu/common-data-set-archive/',
    note:'Class of 2028: 82,027申请/8,050录取 (9.8%)。SAT/ACT为CDS 2024-25提交者中段（仅30%交SAT/12%交ACT）。CDS入学平均GPA 3.80。TOEFL最低100（单项≥20）。'},

  cmu: {rate:11.7, sat25:1510, sat75:1560, act25:34, act75:35, gpa:3.89, toefl:102,
    src:'https://www.cmu.edu/ira/CDS/index.html',
    note:'Class of 2028: 约34,000申请/约3,324录取 (11.66%；SCS计算机学院<5%)。SAT 1510-1560 / ACT 34-35、平均GPA 3.89（Class of 2028入学，CDS）。TOEFL最低102（单项≥25）。'},

  bu: {rate:11.1, sat25:1430, sat75:1510, act25:32, act75:34, gpa:3.87, toefl:90,
    src:'https://www.bu.edu/asir/bu-facts/common-data-set/',
    note:'Class of 2028: 78,769申请/8,749录取 (11.1%)。分数为CDS提交者中段（约45%提交）。平均GPA 3.87（最近CDS）。国际生TOEFL最低90（单项20；90-100+有竞争力）。'},

  tufts: {rate:11.5, sat25:1430, sat75:1540, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://admissions.tufts.edu',
    note:'Class of 2028: 34,432申请/3,957录取 (11.49%，CDS)。SAT 1430-1540 / ACT 33-35（CDS 2024-25提交者）。GPA未公布。TOEFL最低100（本科）。'},

  rochester: {rate:40.1, sat25:1420, sat75:1500, act25:32, act75:34, gpa:null, toefl:100,
    src:'https://www.collegedata.fyi/schools/university-of-rochester/2024-25',
    note:'Class of 2028 (CDS 2024-25): 21,384申请/8,570录取 (40.1%)。SAT 1420-1500 / ACT 32-34（官方CDS C9；仅19%交SAT/6%交ACT，test-optional）。GPA仅公布分布（55% ≥3.75），无均值。TOEFL建议/最低100（有单项要求）。'},

  gatech: {rate:13.8, sat25:1370, sat75:1530, act25:30, act75:34, gpa:null, toefl:90,
    src:'https://irp.gatech.edu',
    note:'Class of 2028: 59,432申请/8,205录取 (13.8%；州内约30%/州外约9%)。SAT 1370-1530 / ACT 30-34（Class of 2028，test-required）。官方公布平均GPA为加权约4.1（非4.0制，故null）。TOEFL最低90（单项19；建议100）。'},

  uiuc: {rate:42.4, sat25:1350, sat75:1510, act25:29, act75:34, gpa:null, toefl:103,
    src:'https://www.dmi.illinois.edu/stuenr/',
    note:'Class of 2028: 73,742申请/31,247录取 (42.4%；CS第一志愿约7%)。SAT/ACT为中段（约55%提交，test-optional年份）。UIUC不报告GPA。TOEFL最低103（79-102为有条件/limited status）。'},

  ucla: {rate:9.0, sat25:null, sat75:null, act25:null, act75:null, gpa:3.95, toefl:100,
    src:'https://admission.ucla.edu/apply/freshman/freshman-profile',
    note:'Class of 2028: 146,250申请/约13,100录取 (8.96%)。UC系统test-blind，SAT/ACT不用于录取（故null）。入学新生平均未加权GPA约3.95-3.96（CDS）。国际生TOEFL最低100（单项≥22）。'},

  berkeley: {rate:11.0, sat25:null, sat75:null, act25:null, act75:null, gpa:3.9, toefl:80,
    src:'https://admissions.berkeley.edu',
    note:'Class of 2028: 124,242申请/13,639-13,701录取 (11.0%)。UC系统test-blind（SAT/ACT=null）。入学平均未加权GPA约3.9+。UC系统TOEFL最低80（Berkeley建议100）。'},

  utaustin: {rate:26.6, sat25:1230, sat75:1480, act25:26, act75:33, gpa:null, toefl:79,
    src:'https://www.ivycoach.com/the-ivy-coach-blog/college-admissions/ut-austin-admissions-statistics/',
    note:'Class of 2028: 72,885申请/19,417录取 (26.64%，自动录取Top 5-6%德州生占大头)。SAT/ACT为CDS入学新生中段（test-optional年份，约56%提交SAT）。GPA未官方公布。本科TOEFL最低79。'},

  williams: {rate:8.3, sat25:1480, sat75:1550, act25:33, act75:35, gpa:null, toefl:null,
    src:'https://www.williams.edu/admission-aid/',
    note:'Class of 2028: 15,758申请/1,300录取 (8.25%)。SAT/ACT为提交者中段（约50%提交，test-optional延续中）。GPA未公布。TOEFL无官方最低分。'},

  amherst: {rate:9.0, sat25:1500, sat75:1560, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://www.amherst.edu/admission',
    note:'Class of 2028: 13,743申请/1,238录取 (9.0%；ED 29%)。SAT 1500-1560 / ACT 33-35（Class of 2028入学，约半数提交）。GPA未公布。TOEFL最低100（本科国际生）。'},

  swarthmore: {rate:7.5, sat25:1400, sat75:1550, act25:33, act75:35, gpa:null, toefl:null,
    src:'https://www.swarthmore.edu/admissions-aid',
    note:'Class of 2028: 13,065申请/975录取 (7.5%)。SAT 1400-1550 / ACT 33-35（Class of 2028入学，test-optional提交者）。GPA未公布。TOEFL无官方最低分。'},

  pomona: {rate:7.1, sat25:1480, sat75:1550, act25:33, act75:35, gpa:null, toefl:100,
    src:'https://www.pomona.edu/admissions',
    note:'Class of 2028: 12,249申请/868录取 (7.09%，CDS)。SAT约1480-1550 / ACT 33-35（提交者中段，约半数提交）。GPA未官方公布（普遍>3.9未加权）。TOEFL最低100。'},

  /* ---- 第二批扩校（31 所，研究文件 admit_stats_v2.md 逐字收录；TOEFL 本轮未逐校核实，统一 null） ---- */
  uwseattle: {rate:41.7, sat25:1320, sat75:1502, act25:30, act75:34, gpa:3.84, toefl:null,
    src:'https://www.washington.edu/opb/uw-data/external-reporting/common-data-set/',
    note:'CDS 2025-26 (Fall 2025, Seattle): 72,933申请/30,446录取 (41.7%)。UW为test-free（SAT/ACT不用于审核），分数仅为入学者中提交者中段，平均GPA 3.84。'},

  ucsd: {rate:26.8, sat25:null, sat75:null, act25:null, act75:null, gpa:null, toefl:null,
    src:'https://ir.ucsd.edu/stats/undergrad/CDS_UCSD_2024-20253.pdf',
    note:'CDS 2024-25 (Fall 2024): 134,455申请/35,989录取 (26.8%)。UC系统test-free，不考虑SAT/ACT。GPA以CDS公布分布为准。'},

  ucsb: {rate:33.0, sat25:null, sat75:null, act25:null, act75:null, gpa:null, toefl:null,
    src:'https://bap.ucsb.edu/institutional-research',
    note:'Fall 2024 (官方freshman profile/CDS): 110,266申请/36,347录取 (33.0%)，平均高中GPA 4.30（UC加权）。UC系统test-free，无SAT/ACT数据。'},

  ucdavis: {rate:44.3, sat25:null, sat75:null, act25:null, act75:null, gpa:null, toefl:null,
    src:'https://www.ucdavis.edu/admissions',
    note:'官方admissions页 (Fall 2025): 102,988申请/45,673录取 (约44-45%)，录取者UC加权GPA中段4.00-4.26。UC系统test-free，不考虑SAT/ACT。'},

  psu: {rate:55.3, sat25:1280, sat75:1410, act25:null, act75:null, gpa:null, toefl:null,
    src:'https://opair.psu.edu/institutional-research/projects/cds/',
    note:'CDS 2025-26 (Fall 2025, University Park): 106,547申请/58,952录取 (55.3%)，入学9,148人。SAT中段1280-1410（提交者，test-optional）。'},

  purdue: {rate:49.9, sat25:1210, sat75:1470, act25:27, act75:34, gpa:3.76, toefl:null,
    src:'https://www.purdue.edu/idata/products-services/common-data-set/',
    note:'CDS 2024-25 (Fall 2024): 78,745申请/39,272录取 (49.9%)。SAT 1210-1470 / ACT 27-34，入学新生平均GPA 3.76。'},

  uwmadison: {rate:40.8, sat25:1370, sat75:1490, act25:29, act75:33, gpa:null, toefl:null,
    src:'https://www.wisc.edu/about/facts/',
    note:'官方facts页 (Fall 2025): 73,912申请/30,167录取 (40.8%)。SAT 1370-1490 / ACT 29-33为CDS 2024-25入学者中段；53%新生高中GPA为4.0（test-optional至2027春）。'},

  michiganstate: {rate:83.2, sat25:1100, sat75:1310, act25:25, act75:31, gpa:null, toefl:null,
    src:'https://ir.msu.edu/cds',
    note:'CDS 2025-26 (Fall 2025): 62,965申请/52,411录取 (83.2%)。SAT 1100-1310 / ACT 25-31为入学者提交者中段。'},

  asu: {rate:89.9, sat25:null, sat75:null, act25:null, act75:null, gpa:3.54, toefl:null,
    src:'https://uoia.asu.edu/common-data-set',
    note:'CDS 2024-25 (Fall 2024, Campus Immersion): 70,928申请/63,756录取 (89.9%)，入学14,099人。test-optional，CDS 2023-24入学新生平均GPA 3.54。'},

  umn: {rate:79.7, sat25:1350, sat75:1490, act25:27, act75:33, gpa:null, toefl:null,
    src:'https://idr.umn.edu/sites/idr.umn.edu/files/cds_2024_2025_tc_1.pdf',
    note:'CDS 2024-25 (Fall 2024, Twin Cities): 41,496申请/33,091录取 (79.7%)。官方admissions profile (Fall 2025录取者中段): SAT 1350-1490 / ACT 27-33，非加权GPA 3.50-3.95。'},

  ohiostate: {rate:60.6, sat25:1260, sat75:1450, act25:26, act75:32, gpa:null, toefl:null,
    src:'https://irp.osu.edu/sites/default/files/documents/2025/11/CDS-2024-2025-The-Ohio-State-University-Columbus.pdf',
    note:'CDS 2024-25 (Fall 2024, Columbus): 72,829申请/44,116录取 (60.6%)。SAT EBRW 620-710 + Math 640-740（合成1260-1450）/ ACT 26-32，为入学者提交者中段（24%交SAT、40%交ACT）。'},

  uf: {rate:24.2, sat25:1330, sat75:1470, act25:29, act75:33, gpa:null, toefl:null,
    src:'https://data-apps.ir.aa.ufl.edu/public/cds/CDS_2024-2025_UFMAIN_Post_v1.pdf',
    note:'CDS 2024-25 (Fall 2024): 73,557申请/17,804录取 (24.2%)，入学7,513人。SAT 1330-1470 / ACT 29-33（提交者中段）；53%新生高中GPA为4.0。'},

  umd: {rate:45.0, sat25:1410, sat75:1520, act25:32, act75:35, gpa:null, toefl:null,
    src:'https://irpa.umd.edu/InstitutionalData/cds.html',
    note:'CDS 2025-26 (Fall 2025, College Park): 67,101申请/30,218录取 (45.0%)。SAT 1410-1520 / ACT 32-35（入学者提交者中段）；官方CampusCounts显示录取新生平均加权GPA约4.4-4.5。'},

  tamu: {rate:51.7, sat25:1160, sat75:1390, act25:24, act75:32, gpa:null, toefl:null,
    src:'https://abpa.tamu.edu/accountability-rankings/common-data-set.html',
    note:'CDS 2025-26 (Fall 2025): 62,967申请/32,531录取 (51.7%)。SAT EBRW 580-690 + Math 570-710（合成1160-1390）/ ACT 24-32。'},

  umass: {rate:59.7, sat25:1310, sat75:1460, act25:29, act75:33, gpa:4.07, toefl:null,
    src:'https://www.umass.edu/provost/media/487/download',
    note:'官方新生profile (Fall 2024): 50,207申请/29,969录取 (59.7%)。SAT 1310-1460 / ACT 29-33（CDS提交者中段），平均加权GPA约4.07。'},

  bostoncollege: {rate:16.2, sat25:1460, sat75:1520, act25:33, act75:35, gpa:null, toefl:null,
    src:'https://www.bc.edu/bc-web/offices/office-of-institutional-research.html',
    note:'CDS 2024-25 (Fall 2024): 34,779申请/5,632录取 (16.2%)。SAT 1460-1520 / ACT 33-35（入学者中段，平均SAT 1484/ACT 34）；90%新生为高中前10%。test-optional。'},

  pitt: {rate:58.1, sat25:1280, sat75:1460, act25:29, act75:33, gpa:4.08, toefl:null,
    src:'https://ir.pitt.edu/sites/default/files/assets/2024-2025%20CDS%20Pittsburgh_2.pdf',
    note:'CDS 2024-25 (Fall 2024, Pittsburgh): 60,898申请/35,372录取 (58.1%)。SAT EBRW 640-720 + Math 640-740（合成1280-1460）/ ACT 29-33；平均加权GPA 4.08（test-optional）。'},

  cwru: {rate:35.3, sat25:1440, sat75:1540, act25:32, act75:34, gpa:null, toefl:null,
    src:'https://case.edu/ir/sites/default/files/2026-02/CDS%202025-26%20Adjusted%20Final.pdf',
    note:'CDS 2025-26 (Fall 2025): 39,332申请/13,890录取 (35.3%)。SAT EBRW 710-760 + Math 730-780（合成1440-1540）/ ACT 32-34（入学者提交者中段）。'},

  miami: {rate:22.0, sat25:1350, sat75:1480, act25:28, act75:33, gpa:3.81, toefl:null,
    src:'https://admissions.miami.edu/undergraduate/about/class-profile/index.html',
    note:'官方class profile (Fall 2026申请季): 54,218申请/11,961录取 (22%)。录取者SAT中段1350-1480 / ACT 28-33（提交者superscore），平均非加权GPA 3.81。'},

  iu: {rate:78.2, sat25:1250, sat75:1450, act25:29, act75:33, gpa:null, toefl:null,
    src:'https://iuapps.iu.edu/cds/',
    note:'CDS 2024-25 (Fall 2024, Bloomington): 67,658申请/52,918录取 (78.2%)。官方class profile (Fall 2025录取者中段): SAT 1250-1450 / ACT 29-33，GPA 3.73-4.00（test-optional）。'},

  rutgers: {rate:58.2, sat25:1310, sat75:1500, act25:28, act75:33, gpa:null, toefl:null,
    src:'https://oirap.rutgers.edu/',
    note:'Rutgers-New Brunswick最新CDS数据 (Fall 2024): 68,614申请/39,899录取 (58.2%)，入学8,191人。录取提交者中段SAT 1310-1500 / ACT 28-33（接入Common App后申请量大增）。'},

  gwu: {rate:47.1, sat25:1360, sat75:1490, act25:31, act75:34, gpa:null, toefl:null,
    src:'https://irp.gwu.edu/sites/g/files/zaxdzs6056/files/2026-04/CDS-PDF-2025-2026.pdf',
    note:'CDS 2025-26 (Fall 2025): 27,034申请/12,741录取 (47.1%)。SAT EBRW 690-750 + Math 670-740（合成1360-1490）/ ACT 31-34（入学者提交者中段，test-optional）。'},

  neu: {rate:5.2, sat25:1450, sat75:1550, act25:33, act75:35, gpa:null, toefl:null,
    src:'https://uds.northeastern.edu/university-facts/common-data-set/',
    note:'CDS 2024-25 (Fall 2024, 全校口径): 98,425申请/5,133录取 (5.2%)。录取者中段SAT 1450-1550 / ACT 33-35（test-optional）。'},

  vt: {rate:54.6, sat25:1280, sat75:1450, act25:28, act75:32, gpa:4.06, toefl:null,
    src:'https://aie.vt.edu/analytics-and-ai/common-data-set.html',
    note:'CDS 2025-26 (Fall 2025): 57,755申请/31,515录取 (54.6%)，入学7,133人。SAT EBRW 640-720 + Math 640-730（合成1280-1450）/ ACT 28-32；平均加权GPA 4.06。'},

  uconn: {rate:52.4, sat25:1220, sat75:1420, act25:28, act75:33, gpa:null, toefl:null,
    src:'https://bpir.media.uconn.edu/wp-content/uploads/sites/3452/2025/07/UConn_CDS_2024_2025.pdf',
    note:'CDS 2024-25 (Fall 2024): 55,479申请/29,065录取 (52.4%)。SAT 1220-1420 (EBRW 610-710/Math 600-730) / ACT 28-33（入学者提交者中段）；47%新生为高中前10%。'},

  tulane: {rate:14.5, sat25:1430, sat75:1500, act25:32, act75:34, gpa:3.77, toefl:null,
    src:'https://admission.tulane.edu/apply/getting-into-tulane/new-class-profile',
    note:'官方class profile (Class of 2029, CDS 2025-26): 32,942申请/4,763录取 (14.5%)。录取者平均非加权GPA 3.77；入学者SAT中段1430-1500 / ACT 32-34（约40%提交分数，test-optional）。'},

  brandeis: {rate:40.5, sat25:1390, sat75:1520, act25:31, act75:34, gpa:null, toefl:null,
    src:'https://www.brandeis.edu/institutional-research/docs/cds-2024-25.pdf',
    note:'CDS 2024-25 (Fall 2024): 10,462申请/4,234录取 (40.5%)。SAT EBRW 690-750 + Math 700-770（合成1390-1520）/ ACT 31-34。'},

  fordham: {rate:54.0, sat25:1340, sat75:1470, act25:30, act75:33, gpa:null, toefl:null,
    src:'https://www.fordham.edu/about/leadership-and-administration/administrative-offices/office-of-the-provost/provost-office-units/institutional-research-and-assessment/',
    note:'Class of 2029 (Fall 2025): 44,376申请/23,963录取 (54.0%)。SAT 1340-1470 / ACT 30-33（CDS提交者中段）；官方Fordham Now：录取者平均GPA约3.78（test-optional）。'},

  smudallas: {rate:47.6, sat25:1320, sat75:1480, act25:30, act75:34, gpa:null, toefl:null,
    src:'https://www.smu.edu/provost/assessment/university-decision-support/statistics/commondatasets/2025',
    note:'Class of 2029 (Fall 2025, CDS 2025-26): 24,053申请/11,459录取 (47.6%)。SAT EBRW 660-730 + Math 660-750（合成1320-1480）/ ACT 30-34（IPEDS/CDS 2024-25提交者中段）。'},

  babson: {rate:17.1, sat25:1410, sat75:1500, act25:30, act75:33, gpa:null, toefl:null,
    src:'https://www.babson.edu/media/babson/assets/rankings/babson-college-common-data-set.pdf',
    note:'CDS 2024-25 (Fall 2024): 9,381申请/1,603录取 (17.1%)。SAT 1410-1500（中位1460）/ ACT 30-33（入学者提交者中段，test-optional）。'},

  bentley: {rate:45.1, sat25:1230, sat75:1410, act25:27, act75:31, gpa:null, toefl:null,
    src:'https://www.bentley.edu/academics/offices/provost/ie-data',
    note:'CDS 2024-25 (Fall 2024): 11,012申请/4,961录取 (45.1%)。SAT 1230-1410 / ACT 27-31（提交者中段，test-optional）。'},
};
window.QS_TRENDS_REAL={
  mit:[1,1,1,1,1], stanford:[3,5,3,6,6], oxford:[3,4,2,3,3], harvard:[4,4,5,4,4],
  cambridge:[5,2,3,2,5], caltech:[6,6,6,6,6], eth:[7,7,9,7,7], ucl:[9,9,8,9,9],
  nus:[8,11,11,8,8], hku:[11,21,22,17,11], ntu:[15,19,12,15,12], pku:[14,12,18,14,14],
  tsinghua:[20,14,17,20,20], upenn:[12,13,13,12,12], cornell:[13,20,21,16,13],
  yale:[16,18,15,23,16], cuhk:[36,38,39,36,32], unsw:[19,45,43,19,19], jhu:[24,24,25,32,24],
  berkeley:[17,27,32,17,17], epfl:[26,16,14,26,26], melbourne:[13,33,37,13,13], uchicago:[11,10,10,11,11], tum:[28,37,49,50,37],
};
window.QS_TREND_SOURCE='维基百科 QS World University Rankings 条目 · 2022-2026';
window.DEEP_DATA={
  stanford: {
    rankings: {
      qs: QS_TRENDS_REAL.stanford, the:[3,2,3,2,4], usnews:[3,3,4,3,3], arwu:[2,2,2,2,2],
      trend: '稳步上升', source: QS_TREND_SOURCE
    },
    admission: {
      difficulty: 9.6, acceptRateUg: 3.9, acceptRateGr: 5.2,
      preferences: ['偏好"改变世界"的野心——不是绩点高就行,要有改变某个领域的vision。例:Sundar Pichai(谷歌CEO)不是最高GPA的,但有把Android做到全球第一的格局','偏好创业经历而非纯实习——有startup经历(哪怕失败了)比在大公司打杂更吃香。例:DoorDash创始人Stanley Tang在校期间就开始创业','偏好非传统的课外活动——不是模联+辩论+志愿者三件套,而是独特且有深度的投入。例:有人花两年研究加州水资源政策并推动了实际立法','偏好学术深度——不是AP越多越好,而是在某个领域有超出课堂的研究。例:有学生在高中发了CS顶会论文','偏好领导力+影响力——不是当主席就行,而是真正改变了组织或社区。例:有人创建了覆盖全州的心理健康热线'],
      sat: 1545, act: 35, toefl: 105, ielts: 7.5, gre: 330, gpa: 3.96,
      essay: 'Common App主文书 + Stanford 3篇短问答(What matters most to you and why / Why Stanford / roommate letter等)', interview: '可选,校友面试(1对1,30-45分钟,重点考察intellectual vitality)', earlyAction: 'REA 11/1截止,录取率约8%(远高于常规3.9%)。REA绑定:只能申Stanford一所早申',
      transfer: '录取率约1%', intlPct: 14, chinaPct: 4
    },
    strengths: {
      topMajors: [['计算机科学',1],['工商管理(MBA)',1],['工程学',2],['心理学',1],['生物科学',2]],
      breadth: { ug:65, gr:90, inter:35 },
      fields: { STEM:5, 商科:5, 人文:4, 艺术:4, 医学:5, 法学:4 },
      transferFlex: 65, coreCurriculum: '分布要求,非强制核心课程', seminarRatio: 40, researchParticipation: 85, facultyRatio: '1:5'
    },
    city: {
      name:'斯坦福(湾区)', climate:'地中海气候', avgTemp:'15°C', rain:'500mm',
      rentSingle: 2800, rentShared: 1500, food: 600, transport: 120, costRating: 2,
      safety: 4, airport: 25, transit: 'Caltrain+VTA', chineseCommunity: 4, tourism: 5, vitality: 5, nature: 5,
      painPoint: '湾区生活成本极高,房租动辄$2500+/月;加州干旱季节山火时有发生'
    },
    studentProfile: {
      intlPct: 14, chinaNum: 680, genderM: 51, inState: 42,
      traits: ['硅谷在逃码农的聚集地','不是在创业就是在去创业的路上','CS课永远在打仗'],
      social: '派对文化适中,希腊生活约30%', mentalHealth: '压力较大,心理健康资源充足',
      politics: '自由派为主,多元包容', competition: '竞争激烈,GPA通胀不存在,curve残酷'
    },
    chinaRec: {
      overall: 5, soe: ['国家电网(认可)','中石油(认可)'], civilService: ['北京','上海','广东'],
      internet: ['阿里✓','腾讯✓','字节✓','美团✓','百度✓'], finance: ['中金✓','高盛✓','摩根士丹利✓'],
      big4: ['普华✓','德勤✓','安永✓','毕马威✓'], fmcg: ['宝洁✓','联合利华✓'],
      alumniDist: '北上广深为主,杭州次之', credential: '教育部认证'
    },
    localCareer: {
      employRate: 94, avgSalaryUg: 95000, avgSalaryGr: 120000, timeToJob: 2.5,
      employers: ['Google','Apple','Meta','McKinsey','Goldman Sachs','Tesla','Amazon','Microsoft','Deloitte','Boeing'],
      visa: 'OPT 12个月(STEM 36个月) → H1B抽签(中签率约30%)', visaDifficulty: 3, immigrationScore: 35,
      stayEasy: 2, alumniLocal: 5, startup: 'StartX孵化器,校友创业率全美第一'
    },
    dims: [5,5,5,2,5,5,2,4,5,5,5,5, 5,5,5,5,4,5,5,4,4,5,4,5,4,3, 4,5,5,4,4,5,4,3,4,4,3,4,4,4,4,3,5,4,5,5,5, 4,3,5,5,3,5,5,5,5,5,5],
    reviews: [
      { type:'在校生', degree:'本科', major:'计算机科学', enrollYear:'2022 Fall', gradYear:'2026(预计)', year:'2024', source:'知乎', author:'@硅谷在逃码农', url:'zhihu.com', helpful:2300,
        title:'CS课不是听课,是打仗', text:'在斯坦福的CS课不是听课,是打仗。CS106A一个班400人,TA office hour排队两小时起步。但当你终于debug完那个折磨你三天的递归题,走出Gates Building看到加州的夕阳时,你会觉得这一切都值得。',
        pros:['教授都是领域内大神(Manning/Andrew Ng)','CS224N等课可课后直接问问题'], cons:['竞争太激烈','身边IOI金牌和startup founder遍地','GPA通胀不存在,curve残酷'],
        tips:['一定要抢早课,下午的课根本抢不到好TA','别选超过3门CS课,你会死的'] },
      { type:'毕业生', degree:'硕士', major:'工程', enrollYear:'2021 Fall', gradYear:'2023', year:'2023', source:'一亩三分地', author:'@Stanford_MS', url:'1point3acres.com', helpful:1245,
        title:'Quarter制是地狱也是天堂', text:'Quarter制就是地狱。10周一学期,第三周midterm,第六周midterm,第十周final。你刚缓过神来,下学期开始了。但节奏快意味着一年能学更多东西,毕业也更快。硅谷就在隔壁,实习机会多到爆炸。',
        pros:['节奏快效率高','硅谷实习机会多','校友创业氛围浓'], cons:['Quarter制压力巨大','几乎没有喘息时间','学费昂贵'],
        tips:['选课不要贪多','尽早开始找实习'] },
      { type:'毕业生', degree:'本科', major:'产品设计', enrollYear:'2015 Fall', gradYear:'2019', year:'2023', source:'College Confidential', author:'@designer_at_heart', url:'talk.collegeconfidential.com', helpful:876,
        title:'d.school改变了我的人生', text:'Stanford的d.school(设计学院)是改变我人生的地方。Design Thinking不只是方法论,是一种看世界的方式。在这里我遇到了一生的伙伴,一起创办了自己的公司。',
        pros:['跨学科创新氛围','设计思维教育','创业孵化支持'], cons:['文科资源相对较弱'],
        tips:['多去d.school蹭课'] },
      { type:'在校生', degree:'硕士', major:'学习设计与技术(LDT)', enrollYear:'2023 Fall', gradYear:'2025(预计)', year:'2024', source:'启德教育', author:'Grace同学', url:'eic.org.cn/blog/detail/220808', helpful:2100,
        title:'斯坦福我替大家试过了,快节奏、无娱乐但安全', text:'初入Stanford,快节奏可能会手忙脚乱。每个季度只有10周,第三周就要交第一个项目或做第一个presentation。斯坦福其实不太有什么休闲娱乐,Palo Alto本身比较安静,吃喝玩乐基本集中在University Ave。食堂整体就是标准的白人饭,Wilbur主要供应偏亚洲菜系,在中国学生里面名声还不错。GSE的教授和助教都很友好和supportive。',
        pros:['LDT跨学科创新','教授supportive','校园安全'], cons:['Palo Alto无娱乐','食堂白人饭','quarter制节奏太快'],
        tips:['适应quarter制的快节奏','多探索University Ave的餐厅'] },
      { type:'毕业生', degree:'本科', major:'管理科学与工程', enrollYear:'2020 Fall', gradYear:'2024', year:'2024', source:'Shiksha(已验证)', author:'Nirali Parekh', url:'shiksha.com/usa/universities/stanford-university/reviews', helpful:560,
        title:'Stanford: 高度回报,极度竞争,全面成长', text:'Stanford attracts the best talent from all around the world. At times, it can get super competitive and lead to anxiety, so be prepared to be challenged intellectually and socially. Cost is expensive - both tuition and living expenses. Stanford和加州以laid-back文化著称,但竞争压力确实很大,需要做好心理准备。',
        pros:['全球顶尖人才聚集','创业氛围浓厚','加州阳光'], cons:['学费和生活费极贵','竞争导致焦虑','公共交通不便'],
        tips:['提前了解financial aid','做好竞争心理准备'] },
      { type:'在校生', degree:'本科', major:'未注明', enrollYear:'2024 Fall', gradYear:'2028(预计)', year:'2024', source:'Niche', author:'Freshman', url:'niche.com/colleges/stanford-university/reviews', helpful:120,
        title:'我和奥运选手、竞赛金牌住在一个宿舍', text:'As a freshman, my experience is limited. However, even in my brief time here, I am astounded by the classes and my classmates alike. I live in a dorm with olympians, olympiad winners, chess masters, and people of incredible level in every field imaginable. My classes are pushing me in a way that I have never experienced.',
        pros:['同学质量极高','课程有挑战性','校园多元'], cons:['压力来自同辈'],
        tips:['找到自己的节奏,不要盲目比较'] },
    ],
    complaints: [
      { text:'交朋友真的很难,每个人都是假的/自命不凡的。但没有人因为抑郁症寻求帮助,因为学校根本不关心学生的心理健康……并不是所有闪闪发光的东西都是金子。', source:'网易新闻(转载Reddit)', author:'斯坦福大学国际生', url:'c.m.163.com/news/a/JID2MJAK0516FCBU.html', year:'2024' },
      { text:'斯坦福一年有3-4个quarter,学生的学习任务是其他大学的两倍。斯坦福学生常说,我们就是以学习闻名,学习即是生活,生活即是学习。', source:'新东方前途出国', author:'学生压力榜单', url:'liuxue.xdf.cn/blog/lizi6/blog/5268687.shtml', year:'2024' },
      { text:'24 hours feels too short to enjoy it all, but that is truly a spoiled problem to have. Despite academics being rigorous and challenging, I feel that there is ample support although, you need to be proactive about it.', source:'Niche', author:'Junior', url:'niche.com/colleges/stanford-university/reviews', year:'2024' },
    ]
  },
  uchicago: {
    rankings: { qs:QS_TRENDS_REAL.uchicago, the:[14,10,10,13,14], usnews:[12,12,12,12,12], arwu:[10,10,10,10,10], trend:'基本持平', source:QS_TREND_SOURCE },
    admission: { difficulty:9.4, acceptRateUg:5.4, acceptRateGr:8.1, preferences:['偏好"Uncommon"思维——文书题目本身就是筛选器。例:往年题目"Find X"、"你最喜欢的词是什么"、"火鸡为什么不感恩节"——招的是能从荒诞问题中展现智识的人','偏好学术思辨——不是考分高就行,而是能从"这是什么"追问到"为什么是这个而不是别的"。例:Core Curriculum的SOSC课就是教授不停追问式的教学','偏好知识广度——喜欢读柏拉图、读《国富论》、读《利维坦》的人。例:有录取者在文书里讨论了亚当·斯密和马克思的异同','偏好"不走寻常路"——选一个冷门但深度的课外活动比十个常规活动更吃香。例:有人花三年翻译了一本冷门哲学著作','偏好独立研究能力——有论文/研究经历(哪怕未发表)比AP满分更有说服力。例:有录取者提交了关于芝加哥学派经济学的独立研究'], sat:1535, act:35, toefl:104, ielts:7.5, gre:328, gpa:3.92, essay:'Common App主文书 + UChicago Uncommon Essay(每年题目不同,偏奇思妙想,如"Find X""你最想拥有的超能力是什么"),附加Why UChicago', interview:'可选,校友面试(考察intellectual curiosity)', earlyAction:'ED I 11/1(录取率约18%), ED II 1/2(录取率约10%), 常规RD 1/3(录取率约3%)。ED有绑定', transfer:'录取率约5%,每年约40个名额,偏好有强学术背景的转学生', intlPct:16, chinaPct:6 },
    strengths: { topMajors:[['经济学',1],['法学',3],['物理学',5],['社会学',1],['数学',5]], breadth:{ug:50,gr:70,inter:30}, fields:{STEM:4,商科:4,人文:5,艺术:3,医学:4,法学:5}, transferFlex:40, coreCurriculum:'核心课程(Core)强度全美顶级', seminarRatio:60, researchParticipation:75, facultyRatio:'1:5' },
    city: { name:'芝加哥', climate:'温带大陆', avgTemp:'10°C', rain:'940mm', rentSingle:1800, rentShared:900, food:400, transport:100, costRating:3, safety:3, airport:30, transit:'CTA地铁公交', chineseCommunity:4, tourism:4, vitality:4, nature:3, painPoint:'冬天零下二十度,风从密歇根湖吹来,会教你什么叫绝望' },
    studentProfile: { intlPct:16, chinaNum:760, genderM:51, inState:25, traits:['芝大学生普遍爱辩论','学术氛围浓厚,派对几乎为零','"where fun comes to die"是自嘲梗'], social:'派对文化几乎为零,希腊生活约20%', mentalHealth:'学业压力大,冬天抑郁频发', politics:'自由派为主,思想多元', competition:'GPA全美最低之一,curve残酷' },
    chinaRec: { overall:5, soe:['中投(认可)'], civilService:['北京','上海'], internet:['阿里✓','腾讯✓','字节✓'], finance:['中金✓','中信✓','高盛✓','摩根士丹利✓','麦肯锡✓'], big4:['普华✓','德勤✓','安永✓','毕马威✓'], fmcg:['宝洁✓'], alumniDist:'北上广深为主,香港次之', credential:'教育部认证' },
    localCareer: { employRate:91, avgSalaryUg:78000, avgSalaryGr:95000, timeToJob:3, employers:['McKinsey','Goldman Sachs','Boston Consulting','Citadel','Boeing','Google','UBS','Deloitte','Federal Reserve','University of Chicago'], visa:'OPT 12个月(STEM 36个月) → H1B', visaDifficulty:3, immigrationScore:30, stayEasy:2, alumniLocal:4, startup:'Polsky Center创业孵化器' },
    dims: [4,5,5,1,4,5,3,3,4,5,4,4, 5,4,3,5,4,4,5,4,3,2,4,4,2,2, 4,4,5,4,4,3,3,3,4,4,1,4,3,4,4,3,3,3,4,4,5, 5,5,5,5,3,5,5,4,4,5,5],
    reviews: [
      { type:'毕业生', degree:'硕士', major:'经济学', enrollYear:'2021 Fall', gradYear:'2022', year:'2023', source:'一亩三分地', author:'@芝大经济狗', url:'1point3acres.com', helpful:1800,
        title:'毕业三年了,回头看像一场高烧', text:'毕业三年了,回头看芝大的一年,像一场高烧。冬天零下二十度,风从密歇根湖吹来,吹得你怀疑人生。但Harper Library的暖炉、Booth商学院的咖啡、还有那些深夜在Regenstein里和陌生人一起赶due的日子,是我这辈子最珍贵的记忆。芝大给我的不是技能,是思维方式。Core Curriculum逼你读柏拉图、读《国富论》、读《利维坦》,一开始你觉得这有什么用,直到你在投行面试里被问到"你怎么看理性人假设",你才感谢芝大。',
        pros:['学术训练极其rigorous','芝加哥学派思维方式受益终身','校友网络极强,纽约/伦敦/香港校友都愿意帮忙'], cons:['冬天真的会把人逼疯','社交氛围偏学术,party culture几乎为零','GPA给得低,回国容易被质疑'],
        tips:['一定要利用好芝加哥的地理位置,暑假去纽约实习','买一件Canada Goose,这不是建议,是生存必需品'] },
      { type:'在校生', degree:'本科', major:'经济', enrollYear:'2021 Fall', gradYear:'2025(预计)', year:'2024', source:'Reddit', author:'@maroons_2025', url:'reddit.com/r/uchicago', helpful:920,
        title:'最艰难也最宝贵的经历', text:'在芝大的第一年,我每天都在想转学。冬天太冷,课业太重,GPA太低。但第二年,我遇到了一群志同道合的朋友。回头看,芝大是我人生中最艰难但也最宝贵的经历。Core Curriculum重塑了我的思维方式。',
        pros:['Core课程改变思维','同学质量极高','学术声誉卓著'], cons:['课业压力全美顶级','社交生活较少','气候恶劣'],
        tips:['提前准备好冬装','多参加Reading Week活动'] },
      { type:'在校生', degree:'本科', major:'经济&计算机科学', enrollYear:'2023 Fall', gradYear:'2027(预计)', year:'2024', source:'今日头条', author:'张同学(大二)', url:'toutiao.com/article/7645525016011866633', helpful:1500,
        title:'Quarter制十周一学期,赶due不是随便说说', text:'一门课每周作业就要花掉我20多个小时。大一下学了四门课,几乎每周就是图书馆、食堂、床三点一线,刚到芝加哥时一度怀疑自己是不是来错了地方。但熬过了第一个学期后,芝大那些口碑极好的社科课(SOSC跨学科社科课)彻底改变了我看问题的方式。教授像Socrates一样不停追问,逼你从"这是什么"想到"为什么是这个而不是别的"。千万提前排课!选课难度为"地狱"。',
        pros:['SOSC社科课改变思维方式','教授追问式教学'], cons:['每周作业20+小时','选课难度地狱级','三点一线生活'],
        tips:['千万提前排课','熬过第一学期就好了'] },
      { type:'在校生', degree:'硕士', major:'公共政策(Harris)', enrollYear:'2023 Fall', gradYear:'2025(预计)', year:'2024', source:'今日头条', author:'陈同学', url:'toutiao.com/article/7645525016011866633', helpful:890,
        title:'芝加哥冬天的湖风是检验人肉抗压能力的终极考验', text:'Harris的地理位置极度爆炸——离Downtown Loop仅10多分钟车程。几乎每门课的final project都要接入真实产业需求,我这学期做就业分析报告的数据就是芝加哥市政府给的。城市的工作机会铺天盖地,但竞争也异常激烈。最大缺点:芝加哥冬天的湖风是检验人肉抗压能力的终极考验。',
        pros:['final project接入真实产业','离Downtown近','工作机会多'], cons:['冬天湖风致命','竞争激烈'],
        tips:['买好御寒装备','利用政策实验室积攒经验'] },
      { type:'毕业生', degree:'博士', major:'未注明', enrollYear:'2019 Fall', gradYear:'2023', year:'2024', source:'今日头条', author:'陈博士', url:'toutiao.com/article/7645525016011866633', helpful:760,
        title:'半夜的瑞根斯坦图书馆总是游荡着咖啡因过量的幽灵', text:'来芝大的第一感觉不是"膜拜",而是怀疑自己"到底怎么混进来的"。每周两千多页的阅读量,每学期12篇的批判性论文——半夜的瑞根斯坦图书馆总是游荡着咖啡因过量的幽灵。但转折发生在第二年冬季的"观念考古学"研讨课上,来自印度、欧洲、亚洲的同学围坐讨论,德里达与朱熹、梵语经典在深夜学术沙龙激烈碰撞。正是这样的交锋,让我学到最珍贵的东西不是知识本身,而是思想的韧性。',
        pros:['思想韧性训练','多元文化学术碰撞'], cons:['每周2000+页阅读','每学期12篇论文','咖啡因依赖'],
        tips:['学会快速阅读','找到学术伙伴'] },
    ],
    complaints: [
      { text:'第一年的时候在这里极其不快乐,多次在洗澡的时候坐在地上大哭,对着图书馆的人偷偷翻白眼,常常逃到另一个城市逍遥,不止一回考虑转学。后来我和一个当时的大三学长聊,他说,me too,我也不快乐啊。', source:'搜狐', author:'芝大学生(匿名)', url:'sohu.com/a/760944327_99910296', year:'2024' },
      { text:'芝大素有"Where fun comes to die(快乐消亡地)"盛名。在GPA普遍"通胀"的今天,芝大仍然保持着严格的评分制度。卡分严格,GPA巨低,学业累到爆,无时无刻不在学习,做作业,但是考试还是考不出来。', source:'搜狐', author:'留子吐槽合集', url:'sohu.com/a/797990219_122009610', year:'2024' },
      { text:'芝加哥大学所在的地区是全美犯罪率最高的大学之一,时不时会出现校园附近的枪杀案的新闻让人提心吊胆。芝大毕业生经常调侃自己"活着走出芝大了"。', source:'搜狐', author:'学生评价', url:'sohu.com/a/760944327_99910296', year:'2024' },
      { text:'走在路上遇到的學生都是一張苦瓜脸。学业难度大的学校不止这一间,但是怎么努力还是很难出成绩的感觉有多绝望你懂吗?', source:'台湾新闻网', author:'学生吐槽', url:'ttnews.tw/jiaoyu/1734093834236476.html', year:'2024' },
    ]
  },
  tsinghua: {
    rankings: { qs:QS_TRENDS_REAL.tsinghua, the:[12,16,15,13,12], usnews:[16,16,23,26,16], arwu:[1,1,1,1,1], trend:'波动', source:QS_TREND_SOURCE },
    admission: { difficulty:9.8, acceptRateUg:0.6, acceptRateGr:8.0, preferences:['偏好高考顶尖','偏好竞赛金牌','偏好学术潜力','偏好综合素质'], sat:0, act:0, toefl:100, ielts:7, gre:325, gpa:3.9, essay:'无Common App,高考/竞赛为主', interview:'部分院系复试', earlyAction:'无,统一高考录取', transfer:'校内转专业为主', intlPct:9, chinaPct:91 },
    strengths: { topMajors:[['计算机科学',1],['电子工程',1],['建筑学',1],['经济管理',1],['材料科学',1]], breadth:{ug:80,gr:120,inter:40}, fields:{STEM:5,商科:5,人文:3,艺术:3,医学:4,法学:4}, transferFlex:30, coreCurriculum:'通识教育+专业基础', seminarRatio:30, researchParticipation:80, facultyRatio:'1:6' },
    city: { name:'北京', climate:'温带季风', avgTemp:'13°C', rain:'600mm', rentSingle:4000, rentShared:2000, food:1500, transport:300, costRating:3, safety:5, airport:35, transit:'地铁公交发达', chineseCommunity:5, tourism:5, vitality:5, nature:4, painPoint:'课业压力极大,内卷严重;冬天干燥寒冷,雾霾偶有' },
    studentProfile: { intlPct:9, chinaNum:48000, genderM:60, inState:0, traits:['清华学生普遍卷','"自强不息"是底色','图书馆通宵是常态'], social:'社团活跃,无希腊生活', mentalHealth:'压力极大,心理咨询服务完善', politics:'多元', competition:'内卷严重,GPA竞争惨烈' },
    chinaRec: { overall:5, soe:['国家电网✓','中石油✓','中粮✓','中国移动✓'], civilService:['北京','上海','广东','江苏','浙江','山东等全国'], internet:['阿里✓','腾讯✓','字节✓','美团✓','百度✓','华为✓'], finance:['中金✓','中信✓','高盛✓','摩根士丹利✓'], big4:['普华✓','德勤✓','安永✓','毕马威✓'], fmcg:['宝洁✓','联合利华✓','玛氏✓'], alumniDist:'北上广深为主,全国分布', credential:'国内高校,无需认证' },
    localCareer: { employRate:99, avgSalaryUg:200000, avgSalaryGr:280000, timeToJob:1, employers:['华为','腾讯','字节跳动','阿里巴巴','百度','美团','中金公司','国家电网','中国航天','清华大学'], visa:'N/A(本国)', visaDifficulty:0, immigrationScore:100, stayEasy:5, alumniLocal:5, startup:'x-lab创业孵化器,校友创业率高' },
    dims: [5,5,5,2,5,5,3,5,5,5,5,5, 5,5,5,5,4,4,5,4,4,4,5,5,5,3, 4,5,5,5,5,4,3,5,4,4,2,4,4,4,4,3,5,5,4,3,5, 5,5,5,5,3,5,5,5,5,4,5],
    reviews: [
      { type:'毕业生', degree:'本科', major:'计算机', enrollYear:'2016 Fall', gradYear:'2020', year:'2023', source:'知乎', author:'匿名用户', url:'zhihu.com', helpful:1284,
        title:'自强不息的精神烙印', text:'清华的课业压力是真的大。我大一的时候,一周有三天通宵在图书馆。但清华给我的不仅仅是知识,还有一种"自强不息"的精神。毕业多年,这种精神已经成为我的底色。',
        pros:['学术资源顶尖','校友网络强大','品牌认可度极高'], cons:['课业压力极大','内卷严重','行政效率一般'],
        tips:['学会时间管理','多参加社团平衡压力'] },
    ]
  },
  hku: {
    rankings: { qs:QS_TRENDS_REAL.hku, the:[35,31,30,40,35], usnews:[26,26,23,22,26], arwu:[101,101,96,87,101], trend:'稳步上升', source:QS_TREND_SOURCE },
    admission: { difficulty:8.5, acceptRateUg:35, acceptRateGr:25, preferences:['偏好多元背景','偏好英语能力','偏好综合素质'], sat:0, act:0, toefl:93, ielts:6.5, gre:320, gpa:3.7, essay:'个人陈述+推荐信', interview:'部分专业面试', earlyAction:'提前批11月', transfer:'录取率约15%', intlPct:40, chinaPct:18 },
    strengths: { topMajors:[['金融学',1],['医学',1],['法学',2],['建筑学',3],['牙医学',1]], breadth:{ug:60,gr:80,inter:25}, fields:{STEM:4,商科:5,人文:4,艺术:3,医学:5,法学:5}, transferFlex:55, coreCurriculum:'通识教育要求', seminarRatio:35, researchParticipation:65, facultyRatio:'1:8' },
    city: { name:'香港', climate:'亚热带季风', avgTemp:'23°C', rain:'2400mm', rentSingle:9000, rentShared:4500, food:2500, transport:500, costRating:2, safety:5, airport:35, transit:'港铁MTR', chineseCommunity:5, tourism:4, vitality:5, nature:3, painPoint:'生活成本极高,房租动辄HK$8000+/月;夏天湿热闷热' },
    studentProfile: { intlPct:40, chinaNum:5400, genderM:48, inState:0, traits:['港大学生普遍务实','金融求职氛围浓','图书馆顶楼看维港夜景'], social:'社团活跃,无希腊生活', mentalHealth:'压力中等,资源充足', politics:'多元', competition:'中等偏上,金融求职竞争激烈' },
    chinaRec: { overall:5, soe:['中投(认可)'], civilService:['广东'], internet:['腾讯✓','字节✓','阿里✓'], finance:['中金✓','高盛✓','摩根士丹利✓','瑞银✓'], big4:['普华✓','德勤✓','安永✓','毕马威✓'], fmcg:['宝洁✓'], alumniDist:'粤港澳大湾区为主,北京上海次之', credential:'教育部认证' },
    localCareer: { employRate:95, avgSalaryUg:35000, avgSalaryGr:45000, timeToJob:2, employers:['Goldman Sachs','JPMorgan','HSBC','PwC','Deloitte','BlackRock','UBS','腾讯','字节跳动','Citi'], visa:'IANG签证2年(无条件留港)', visaDifficulty:5, immigrationScore:90, stayEasy:5, alumniLocal:5, startup:'HKU iDendron孵化器' },
    dims: [4,5,4,3,5,5,2,5,5,4,4,4, 4,5,4,4,4,4,4,3,3,3,5,5,4,4, 3,4,4,5,5,4,4,4,4,4,3,3,4,4,3,3,5,4,4,4,3, 4,4,5,5,5,5,4,4,4,4,5],
    reviews: [
      { type:'在校生', degree:'本科', major:'金融', enrollYear:'2022 Fall', gradYear:'2026(预计)', year:'2024', source:'小红书', author:'@港大金融学姐', url:'xiaohongshu.com', helpful:1023,
        title:'图书馆顶楼的维港夜景', text:'港大的宿舍在山上,每天上课像登山。但当你站在图书馆顶楼看到维多利亚港的夜景时,你会原谅一切。金融专业在香港就业无敌,毕业后进投行的同学一大把。',
        pros:['香港金融就业无敌','国际化程度高','地理位置优越'], cons:['生活成本极高','宿舍难申请','课业压力不小'],
        tips:['尽早找实习','学好粤语'] },
    ]
  },
};
window.ADMIT_REAL={"princeton":[9.9,4,6],"mit":[9.9,4,7],"harvard":[9.9,3,5],"stanford":[9.8,4,6],"yale":[9.8,4,7],"caltech":[9.8,3,6],"duke":[9.5,6,10],"jhu":[9.3,7,12],"northwestern":[9.4,7,10],"upenn":[9.5,6,9],"cornell":[9.0,8,15],"uchicago":[9.4,5,9],"brown":[9.4,5,9],"columbia":[9.6,4,7],"dartmouth":[9.3,6,10],"berkeley":[9.0,11,15],"ucla":[9.2,9,14],"rice":[9.2,8,12],"vanderbilt":[9.1,6,10],"notredame":[9.0,12,15],"umich":[8.6,18,25],"georgetown":[9.0,12,15],"unc":[8.4,17,25],"cmu":[9.0,11,15],"emory":[8.6,13,20],"uva":[8.6,19,25],"wustl":[8.8,11,15],"ucdavis":[6.8,37,45],"ucsd":[7.6,24,35],"uf":[7.4,23,35],"usc":[8.4,12,18],"utaustin":[8.2,29,35],"gatech":[8.6,17,25],"uci":[7.2,21,35],"nyu":[8.0,12,18],"ucsb":[7.2,26,35],"uwmadison":[7.4,43,50],"uiuc":[7.6,44,50],"bostoncollege":[8.4,16,20],"rutgers":[6.0,66,60],"tufts":[9.0,10,15],"ohiostate":[6.2,53,60],"purdue":[6.8,53,60],"umd":[7.2,45,50],"uwseattle":[7.4,48,55],"umn":[6.0,75,70],"uconn":[6.2,55,55],"iu":[6.2,82,70],"umass":[6.4,64,60],"vt":[6.0,57,55],"tamu":[6.2,63,60],"williams":[9.5,8,10],"amherst":[9.5,7,10],"swarthmore":[9.4,7,10],"pomona":[9.4,7,10],"wellesley":[9.2,13,15],"bowdoin":[9.3,8,10],"carleton":[9.0,18,20],"cmc":[9.2,10,12],"harveymudd":[9.2,13,15],"middlebury":[9.0,13,15],"wlu":[8.8,17,20],"haverford":[9.0,14,15],"colgate":[8.8,12,15],"smith":[8.2,20,25],"vassar":[8.8,19,22],"davidson":[8.8,17,20],"bates":[8.8,13,15],"colby":[8.2,8,10],"grinnell":[8.4,11,15],"macalester":[8.2,28,30],"oxford":[9.7,17,25],"cambridge":[9.7,18,28],"imperial":[9.0,14,20],"lse":[8.8,16,25],"ucl":[8.2,33,40],"kcl":[7.0,40,45],"manchester":[6.6,56,60],"edinburgh":[7.4,40,45],"warwick":[7.2,45,50],"bristol":[6.8,50,55],"glasgow":[6.2,55,60],"southampton":[6.0,60,65],"birmingham":[6.0,60,65],"leeds":[6.0,60,65],"sheffield":[5.8,65,70],"nottingham":[5.8,60,65],"newcastle":[5.6,65,70],"durham":[7.2,40,45],"lancaster":[5.2,70,75],"exeter":[5.6,65,70],"york":[5.2,65,70],"cardiff":[5.2,65,70],"liverpool":[5.0,70,75],"qub":[4.8,70,75],"reading":[4.8,70,75],"hku":[8.2,20,25],"cuhk":[7.6,25,30],"hkust":[7.8,25,30],"cityu":[6.6,35,40],"polyu":[6.6,35,40],"nus":[8.4,10,15],"ntu":[8.2,15,20],"smu":[6.5,30,35],"sutd":[6.2,35,40],"sit":[4.0,60,60],"sim":[2.8,90,90],"psb":[2.5,90,90],"kaplan":[2.5,90,90],"curtinsg":[2.8,85,85],"jcu":[2.8,85,85],"melbourne":[5.8,55,60],"anu":[4.8,70,75],"sydney":[5.6,60,65],"unsw":[5.6,60,65],"uq":[5.2,65,70],"monash":[5.0,65,70],"uwa":[4.6,70,75],"adelaide":[4.6,70,75],"uts":[4.4,70,75],"rmit":[4.0,75,80],"mq":[4.2,70,75],"qut":[4.0,75,80],"uow":[3.8,75,80],"curtin":[3.6,75,80],"deakin":[3.6,75,80],"utoronto":[7.2,38,45],"mcgill":[7.6,35,40],"ubc":[7.6,40,45],"waterloo":[7.8,35,40],"ualberta":[6.2,60,65],"mcmaster":[6.6,55,60],"uwo":[6.4,55,60],"queens":[6.8,45,50],"sfu":[5.6,65,70],"ucalgary":[5.8,60,65],"uottawa":[5.6,65,70],"udem":[6.2,50,55],"tsinghua":[9.9,0.5,5],"pku":[9.9,0.5,5],"fudan":[9.6,1.2,8],"sjtu":[9.6,1.2,8],"zju":[9.5,1.5,8],"nju":[9.4,1.5,8],"ustc":[9.5,1.5,8],"hit":[9.2,2,8],"xjtu":[9.2,2,8],"ruc":[9.4,1.5,8],"ucas":[9.3,1.2,8],"buaa":[9.3,2,8],"tongji":[9.2,2.5,8],"bnu":[9.1,2.5,8],"bit":[9.0,3,10],"xmu":[8.9,3,10],"hust":[9.1,2.5,8],"whu":[9.1,2.5,8],"sysu":[9.0,3,10],"scu":[8.9,3,10],"ecnu":[8.8,3,10],"sufe":[9.0,3,10],"cufe":[8.9,3,10],"uibe":[8.9,3,10],"cupl":[8.7,4,10],"bfsu":[8.7,4,10],"sisu":[8.2,5,12],"todai":[8.8,20,30],"kyoto":[8.4,25,35],"waseda":[7.0,35,45],"keio":[7.2,35,45],"osaka":[7.6,30,40],"tohoku":[7.2,35,45],"nagoya":[7.0,35,45],"kyushu":[6.8,40,50],"hokudai":[6.8,40,50],"hit-u":[7.4,25,35],"snu":[8.0,15,25],"korea":[7.0,20,30],"yonsei":[7.2,20,30],"kaist":[7.4,20,30],"postech":[7.2,20,30],"skku":[6.2,30,40],"hanyang":[6.4,30,40],"cau":[5.8,35,45],"khu":[5.8,35,45],"ewha":[5.6,35,45],"eth":[9.0,15,25],"epfl":[8.5,20,30],"tum":[7.6,30,40],"lmu":[7.0,35,45],"heidelberg":[7.4,30,40],"fu-berlin":[6.8,35,45],"rwth":[7.0,35,45],"tudelft":[7.4,30,40],"uvanl":[6.8,35,45],"psl":[8.2,25,35],"polytechnique":[8.4,20,30],"sorbonne":[6.8,35,45],"sciencespo":[7.6,20,30],"kth":[6.8,35,45],"lund":[6.6,40,50],"copenhagen":[6.6,40,50],"tcd":[6.4,40,50],"polimi":[6.8,35,45],"unibo":[5.8,50,55],"ub":[5.6,50,55],"um":[5.0,40,50],"ukm":[4.2,55,65],"usm":[4.2,55,65],"upm":[4.2,55,65],"utm":[4.0,60,70],"taylor":[3.2,80,85],"ucsi":[3.2,80,85],"sunway":[3.2,80,85],"inti":[2.8,85,90],"apu":[2.8,85,90],"auckland":[5.2,55,60],"otago":[4.4,65,70],"canterbury":[4.2,65,70],"vuw":[4.2,65,70],"must":[4.8,60,65],"must2":[4.6,60,65],"chula":[5.8,30,40],"mahidol":[5.4,35,45],"msu":[5.8,35,45],"nyuad":[9.2,4,6]};
window.FEE_REAL={
'princeton':{tu:'$62,400/年',tg:'$60,000/年',liv:'$1,800-2,400',tot:'$85,000-95,000/年',note:'全美最慷慨助学金，家庭收入<$16万全免'},
'mit':{tu:'$62,000/年',tg:'$60,000/年',liv:'$2,000-2,600',tot:'$85,000-95,000/年',note:'Need-Blind，家庭收入<$14万免学费(2025新政)'},
'harvard':{tu:'$59,000/年',tg:'$55,000/年(各学院不同)',liv:'$2,000-2,600',tot:'$85,000-95,000/年',note:'Need-Blind助学金，家庭收入<$10万全免'},
'stanford':{tu:'$65,000/年',tg:'$60,000/年',liv:'$2,200-2,800',tot:'$90,000-100,000/年',note:'Need-Blind，家庭收入<$15万免学费'},
'yale':{tu:'$67,250/年',tg:'$52,000/年',liv:'$1,800-2,400',tot:'$88,000-98,000/年',note:'Need-Blind助学金'},
'caltech':{tu:'$63,400/年',tg:'$60,000/年',liv:'$2,000-2,500',tot:'$88,000-95,000/年',note:''},
'duke':{tu:'$66,300/年',tg:'$62,000/年',liv:'$1,500-2,000',tot:'$88,000-95,000/年',note:''},
'jhu':{tu:'$64,700/年',tg:'$62,000/年',liv:'$1,600-2,200',tot:'$85,000-92,000/年',note:''},
'northwestern':{tu:'$67,200/年',tg:'$60,000/年',liv:'$1,800-2,400',tot:'$90,000-98,000/年',note:''},
'upenn':{tu:'$60,900/年',tg:'$58,000/年(沃顿另计)',liv:'$1,800-2,400',tot:'$85,000-95,000/年',note:'沃顿MBA约$120,000/年'},
'cornell':{tu:'$68,400/年',tg:'$62,000/年',liv:'$1,400-1,900',tot:'$90,000-98,000/年',note:''},
'uchicago':{tu:'$67,400/年',tg:'$62,000/年',liv:'$1,900-2,500',tot:'$92,000-100,000/年',note:''},
'brown':{tu:'$68,600/年',tg:'$62,000/年',liv:'$1,700-2,200',tot:'$90,000-98,000/年',note:''},
'columbia':{tu:'$71,200/年',tg:'$65,000/年',liv:'$2,400-3,200',tot:'$95,000-105,000/年',note:'纽约生活成本全美最高档'},
'dartmouth':{tu:'$66,100/年',tg:'$60,000/年',liv:'$1,600-2,100',tot:'$88,000-95,000/年',note:''},
'berkeley':{tu:'$52,000/年(非居民)',tg:'$35,000/年(非居民)',liv:'$2,000-2,800',tot:'$75,000-85,000/年',note:'公立旗舰，州外含补充学费'},
'ucla':{tu:'$49,000/年(非居民)',tg:'$33,000/年(非居民)',liv:'$2,000-2,700',tot:'$72,000-82,000/年',note:''},
'rice':{tu:'$62,000/年',tg:'$55,000/年',liv:'$1,400-1,900',tot:'$80,000-88,000/年',note:'家庭收入<$14万免学费(Rice Investment)'},
'vanderbilt':{tu:'$65,000/年',tg:'$58,000/年',liv:'$1,500-2,000',tot:'$85,000-92,000/年',note:''},
'notredame':{tu:'$65,000/年',tg:'$58,000/年',liv:'$1,400-1,800',tot:'$82,000-90,000/年',note:''},
'umich':{tu:'$60,900/年(非居民)',tg:'$55,000/年',liv:'$1,400-1,900',tot:'$75,000-85,000/年',note:''},
'georgetown':{tu:'$68,000/年',tg:'$60,000/年',liv:'$2,000-2,600',tot:'$90,000-100,000/年',note:''},
'unc':{tu:'$40,000/年(非居民)',tg:'$35,000/年',liv:'$1,300-1,700',tot:'$55,000-63,000/年',note:'公立常春藤，性价比好'},
'cmu':{tu:'$65,600/年',tg:'$60,000-78,000/年(CS硕士偏高)',liv:'$1,500-2,000',tot:'$85,000-95,000/年',note:'MSCS/MSDS等项目学费顶尖'},
'emory':{tu:'$64,300/年',tg:'$55,000/年',liv:'$1,500-2,000',tot:'$82,000-90,000/年',note:''},
'uva':{tu:'€12,000-18,000/年(非EU)',tg:'€15,000-25,000/年(非EU)',liv:'€1,200-1,600',tot:'€26,000-38,000/年',note:''},
'wustl':{tu:'$64,600/年',tg:'$58,000/年',liv:'$1,400-1,900',tot:'$80,000-90,000/年',note:''},
'ucdavis':{tu:'$48,000/年(非居民)',tg:'$33,000/年',liv:'$1,500-2,100',tot:'$64,000-72,000/年',note:''},
'ucsd':{tu:'$51,000/年(非居民)',tg:'$34,000/年',liv:'$1,800-2,400',tot:'$70,000-80,000/年',note:''},
'uf':{tu:'$28,700/年(非居民)',tg:'$30,000/年',liv:'$1,100-1,500',tot:'$42,000-50,000/年',note:'公立性价比极高'},
'usc':{tu:'$70,000/年',tg:'$55,000-65,000/年',liv:'$2,200-3,000',tot:'$92,000-105,000/年',note:'Merit奖学金覆盖较广，可申半奖/全奖'},
'utaustin':{tu:'$42,000/年(非居民)',tg:'$25,000/年',liv:'$1,400-1,900',tot:'$55,000-65,000/年',note:''},
'gatech':{tu:'$33,000/年(非居民)',tg:'$32,000/年',liv:'$1,300-1,800',tot:'$50,000-60,000/年',note:'公立理工性价比之王；OMSCS在线硕士全程仅~$11,000'},
'uci':{tu:'$49,000/年(非居民)',tg:'$33,000/年',liv:'$1,800-2,400',tot:'$68,000-78,000/年',note:''},
'nyu':{tu:'$63,000-67,000/年',tg:'$55,000-70,000/年',liv:'$2,500-3,500',tot:'$90,000-110,000/年',note:'Stern/Tandon学费更高；助学金有限，国际生慎申FA'},
'ucsb':{tu:'$48,000/年(非居民)',tg:'$33,000/年',liv:'$1,700-2,300',tot:'$66,000-76,000/年',note:''},
'uwmadison':{tu:'$42,000/年(非居民)',tg:'$28,000/年',liv:'$1,200-1,600',tot:'$55,000-62,000/年',note:''},
'uiuc':{tu:'$40,000-50,000/年(工程偏高)',tg:'$38,000-45,000/年',liv:'$1,200-1,600',tot:'$55,000-65,000/年',note:'玉米地生活成本低，性价比极高'},
'bostoncollege':{tu:'$69,000/年',tg:'$50,000/年',liv:'$1,900-2,500',tot:'$88,000-96,000/年',note:''},
'rutgers':{tu:'$36,000/年(非居民)',tg:'$33,000/年',liv:'$1,400-1,900',tot:'$50,000-58,000/年',note:''},
'tufts':{tu:'$68,000/年',tg:'$58,000/年',liv:'$1,800-2,400',tot:'$88,000-95,000/年',note:''},
'ohiostate':{tu:'$42,000/年(非居民)',tg:'$42,000/年',liv:'$1,200-1,600',tot:'$55,000-62,000/年',note:''},
'purdue':{tu:'$31,000/年(国际生)',tg:'$30,000/年',liv:'$1,000-1,400',tot:'$45,000-55,000/年',note:'连续14年学费冻结，性价比标杆'},
'umd':{tu:'$40,000/年(非居民)',tg:'$35,000/年',liv:'$1,400-1,900',tot:'$55,000-65,000/年',note:''},
'uwseattle':{tu:'$43,000/年(非居民)',tg:'$35,000/年',liv:'$1,800-2,400',tot:'$60,000-70,000/年',note:'CS硕士基本只录本博；西雅图生活费不低'},
'umn':{tu:'$38,000/年(非居民)',tg:'$30,000/年',liv:'$1,200-1,600',tot:'$50,000-58,000/年',note:''},
'uconn':{tu:'$42,000/年(非居民)',tg:'$38,000/年',liv:'$1,400-1,800',tot:'$55,000-62,000/年',note:''},
'iu':{tu:'$41,000/年(非居民)',tg:'$33,000/年',liv:'$1,100-1,500',tot:'$52,000-60,000/年',note:'Kelley商学院口碑好'},
'umass':{tu:'$40,000/年(非居民)',tg:'$35,000/年',liv:'$1,300-1,700',tot:'$52,000-60,000/年',note:''},
'vt':{tu:'$36,000/年(非居民)',tg:'$33,000/年',liv:'$1,100-1,500',tot:'$48,000-55,000/年',note:''},
'tamu':{tu:'$40,000/年(非居民)',tg:'$22,000/年',liv:'$1,100-1,500',tot:'$50,000-58,000/年',note:''},
'williams':{tu:'$68,000/年',tg:'—',liv:'$1,400-1,800',tot:'$85,000-92,000/年',note:'Need-Blind国际生'},
'amherst':{tu:'$69,000/年',tg:'—',liv:'$1,400-1,800',tot:'$86,000-93,000/年',note:'Need-Blind国际生'},
'swarthmore':{tu:'$66,000/年',tg:'—',liv:'$1,500-2,000',tot:'$84,000-90,000/年',note:''},
'pomona':{tu:'$65,000/年',tg:'—',liv:'$1,800-2,400',tot:'$84,000-90,000/年',note:'Need-Blind国际生'},
'wellesley':{tu:'$66,000/年',tg:'—',liv:'$1,700-2,300',tot:'$84,000-90,000/年',note:'女校，Need-Blind国际生'},
'bowdoin':{tu:'$67,000/年',tg:'—',liv:'$1,400-1,800',tot:'$84,000-90,000/年',note:'Need-Blind国际生'},
'carleton':{tu:'$68,000/年',tg:'—',liv:'$1,300-1,700',tot:'$84,000-90,000/年',note:''},
'cmc':{tu:'$68,000/年',tg:'—',liv:'$1,800-2,400',tot:'$86,000-92,000/年',note:'克莱蒙特联盟'},
'harveymudd':{tu:'$68,000/年',tg:'—',liv:'$1,800-2,400',tot:'$86,000-92,000/年',note:'理工文理学院，起薪全美前列'},
'middlebury':{tu:'$67,000/年',tg:'—',liv:'$1,400-1,800',tot:'$84,000-90,000/年',note:''},
'wlu':{tu:'$68,000/年',tg:'—',liv:'$1,300-1,700',tot:'$84,000-90,000/年',note:''},
'haverford':{tu:'$69,000/年',tg:'—',liv:'$1,500-2,000',tot:'$85,000-91,000/年',note:''},
'colgate':{tu:'$69,000/年',tg:'—',liv:'$1,400-1,800',tot:'$85,000-91,000/年',note:''},
'smith':{tu:'$64,000/年',tg:'—',liv:'$1,400-1,800',tot:'$80,000-87,000/年',note:'女校'},
'vassar':{tu:'$70,000/年',tg:'—',liv:'$1,600-2,100',tot:'$86,000-93,000/年',note:''},
'davidson':{tu:'$63,000/年',tg:'—',liv:'$1,300-1,700',tot:'$80,000-86,000/年',note:''},
'bates':{tu:'$70,000/年',tg:'—',liv:'$1,300-1,700',tot:'$85,000-92,000/年',note:''},
'colby':{tu:'$68,000/年',tg:'—',liv:'$1,300-1,700',tot:'$84,000-90,000/年',note:''},
'grinnell':{tu:'$67,000/年',tg:'—',liv:'$1,200-1,600',tot:'$82,000-88,000/年',note:''},
'macalester':{tu:'$68,000/年',tg:'—',liv:'$1,300-1,700',tot:'$83,000-89,000/年',note:'国际生助学金慷慨'},
'oxford':{tu:'£39,000-48,000/年',tg:'£32,000-55,000/年',liv:'£1,300-1,800',tot:'£55,000-70,000/年',note:'学院制；医学/MBA最高'},
'cambridge':{tu:'£39,000-51,000/年',tg:'£32,000-60,000/年',liv:'£1,300-1,800',tot:'£55,000-72,000/年',note:'学院制；另收学院费£10,000左右'},
'imperial':{tu:'£40,000-44,000/年',tg:'£38,000-48,000/年',liv:'£1,600-2,200',tot:'£60,000-72,000/年',note:'伦敦高生活费'},
'lse':{tu:'£28,000-31,000/年',tg:'£30,000-45,000/年',liv:'£1,600-2,200',tot:'£48,000-62,000/年',note:'金融硕士£45,000+'},
'ucl':{tu:'£31,000-40,000/年',tg:'£28,000-45,000/年',liv:'£1,600-2,200',tot:'£50,000-65,000/年',note:''},
'manchester':{tu:'£26,000-34,000/年',tg:'£26,000-38,000/年',liv:'£1,000-1,400',tot:'£38,000-50,000/年',note:''},
'edinburgh':{tu:'£28,000-37,000/年',tg:'£27,000-40,000/年',liv:'£1,100-1,500',tot:'£42,000-55,000/年',note:''},
'warwick':{tu:'£26,000-33,000/年',tg:'£25,000-40,000/年',liv:'£1,000-1,400',tot:'£38,000-50,000/年',note:'WBS商科偏高'},
'bristol':{tu:'£26,000-32,000/年',tg:'£25,000-36,000/年',liv:'£1,100-1,500',tot:'£38,000-48,000/年',note:''},
'glasgow':{tu:'£24,000-31,000/年',tg:'£24,000-35,000/年',liv:'£1,000-1,400',tot:'£35,000-45,000/年',note:''},
'southampton':{tu:'£23,000-29,000/年',tg:'£23,000-32,000/年',liv:'£1,000-1,300',tot:'£34,000-43,000/年',note:''},
'birmingham':{tu:'£24,000-30,000/年',tg:'£24,000-34,000/年',liv:'£1,000-1,400',tot:'£35,000-45,000/年',note:''},
'leeds':{tu:'£23,000-29,000/年',tg:'£23,000-32,000/年',liv:'£1,000-1,300',tot:'£34,000-43,000/年',note:''},
'sheffield':{tu:'£23,000-29,000/年',tg:'£23,000-31,000/年',liv:'£950-1,300',tot:'£33,000-42,000/年',note:''},
'nottingham':{tu:'£23,000-30,000/年',tg:'£23,000-33,000/年',liv:'£950-1,300',tot:'£33,000-42,000/年',note:''},
'newcastle':{tu:'£23,000-29,000/年',tg:'£23,000-31,000/年',liv:'£950-1,300',tot:'£33,000-42,000/年',note:''},
'durham':{tu:'£25,000-32,000/年',tg:'£24,000-36,000/年',liv:'£1,000-1,400',tot:'£36,000-46,000/年',note:''},
'lancaster':{tu:'£22,000-27,000/年',tg:'£22,000-30,000/年',liv:'£950-1,300',tot:'£32,000-40,000/年',note:''},
'exeter':{tu:'£23,000-29,000/年',tg:'£23,000-31,000/年',liv:'£1,000-1,300',tot:'£33,000-42,000/年',note:''},
'york':{tu:'£22,000-28,000/年',tg:'£22,000-30,000/年',liv:'£950-1,300',tot:'£32,000-40,000/年',note:''},
'cardiff':{tu:'£22,000-28,000/年',tg:'£22,000-30,000/年',liv:'£950-1,300',tot:'£32,000-40,000/年',note:''},
'liverpool':{tu:'£22,000-28,000/年',tg:'£22,000-30,000/年',liv:'£950-1,300',tot:'£32,000-40,000/年',note:''},
'reading':{tu:'£22,000-27,000/年',tg:'£22,000-29,000/年',liv:'£1,000-1,300',tot:'£32,000-40,000/年',note:''},
'hku':{tu:'HK$198,000/年',tg:'HK$190,000-420,000/年',liv:'HK$7,000-10,000',tot:'HK$300,000-400,000/年',note:'商科硕士可达HK$42万+'},
'cuhk':{tu:'HK$178,000/年',tg:'HK$170,000-400,000/年',liv:'HK$6,500-9,000',tot:'HK$280,000-380,000/年',note:''},
'hkust':{tu:'HK$185,000/年',tg:'HK$180,000-400,000/年',liv:'HK$6,500-9,000',tot:'HK$290,000-390,000/年',note:''},
'cityu':{tu:'HK$160,000/年',tg:'HK$160,000-350,000/年',liv:'HK$6,000-9,000',tot:'HK$260,000-350,000/年',note:''},
'polyu':{tu:'HK$160,000/年',tg:'HK$160,000-330,000/年',liv:'HK$6,000-9,000',tot:'HK$260,000-350,000/年',note:''},
'nus':{tu:'S$39,000-42,000/年(国际生无津贴)',tg:'S$40,000-55,000/年',liv:'S$1,200-1,800',tot:'S$55,000-65,000/年',note:'签Tuition Grant协议(留新工作3年)可降至~S$20,000/年'},
'ntu':{tu:'S$39,000/年(国际生无津贴)',tg:'S$38,000-52,000/年',liv:'S$1,100-1,600',tot:'S$52,000-62,000/年',note:'Tuition Grant同上'},
'smu':{tu:'S$49,000/年(无津贴)',tg:'S$50,000-75,000/年',liv:'S$1,300-1,800',tot:'S$62,000-72,000/年',note:'商科定位'},
'sutd':{tu:'S$39,000/年(国际生)',tg:'S$40,000-50,000/年',liv:'S$1,200-1,700',tot:'S$52,000-60,000/年',note:'MIT合作设计科技校'},
'sit':{tu:'S$35,000/年(国际生)',tg:'—',liv:'S$1,100-1,600',tot:'S$45,000-55,000/年',note:'应用型理工'},
'sim':{tu:'S$25,000-40,000(整个学位)',tg:'S$30,000-45,000(整个学位)',liv:'S$1,200-1,700',tot:'S$20,000-28,000/年',note:'私立，合作学位(UOL/RMIT等)，门槛低'},
'psb':{tu:'S$22,000-35,000(整个学位)',tg:'S$28,000-40,000(整个学位)',liv:'S$1,200-1,700',tot:'S$18,000-25,000/年',note:'私立，合作学位'},
'kaplan':{tu:'S$25,000-38,000(整个学位)',tg:'S$30,000-42,000(整个学位)',liv:'S$1,200-1,700',tot:'S$18,000-26,000/年',note:'私立，合作学位(Murdoch等)'},
'curtinsg':{tu:'S$30,000-45,000(整个学位)',tg:'S$35,000-50,000(整个学位)',liv:'S$1,200-1,700',tot:'S$20,000-28,000/年',note:'澳洲科廷分校'},
'jcu':{tu:'S$35,000-50,000(整个学位)',tg:'S$40,000-55,000(整个学位)',liv:'S$1,200-1,700',tot:'S$22,000-30,000/年',note:'澳洲JCU新加坡校区'},
'melbourne':{tu:'A$48,000-56,000/年',tg:'A$48,000-58,000/年',liv:'A$2,000-2,600',tot:'A$70,000-85,000/年',note:''},
'anu':{tu:'A$45,000-50,000/年',tg:'A$46,000-52,000/年',liv:'A$1,800-2,400',tot:'A$65,000-78,000/年',note:''},
'sydney':{tu:'A$50,000-56,000/年',tg:'A$50,000-58,000/年',liv:'A$2,200-2,800',tot:'A$72,000-88,000/年',note:'悉尼生活成本全澳最高'},
'unsw':{tu:'A$48,000-54,000/年',tg:'A$48,000-56,000/年',liv:'A$2,200-2,800',tot:'A$70,000-85,000/年',note:''},
'uq':{tu:'A$44,000-52,000/年',tg:'A$44,000-52,000/年',liv:'A$1,800-2,300',tot:'A$62,000-75,000/年',note:''},
'monash':{tu:'A$45,000-52,000/年',tg:'A$45,000-53,000/年',liv:'A$2,000-2,500',tot:'A$66,000-80,000/年',note:''},
'uwa':{tu:'A$40,000-46,000/年',tg:'A$40,000-47,000/年',liv:'A$1,600-2,100',tot:'A$56,000-68,000/年',note:'移民加分地区'},
'adelaide':{tu:'A$42,000-48,000/年',tg:'A$42,000-49,000/年',liv:'A$1,600-2,100',tot:'A$58,000-70,000/年',note:'移民加分地区'},
'uts':{tu:'A$42,000-48,000/年',tg:'A$42,000-48,000/年',liv:'A$2,000-2,600',tot:'A$60,000-72,000/年',note:''},
'rmit':{tu:'A$38,000-44,000/年',tg:'A$38,000-45,000/年',liv:'A$1,900-2,400',tot:'A$55,000-65,000/年',note:''},
'mq':{tu:'A$40,000-46,000/年',tg:'A$40,000-46,000/年',liv:'A$2,000-2,500',tot:'A$58,000-68,000/年',note:''},
'qut':{tu:'A$36,000-42,000/年',tg:'A$36,000-43,000/年',liv:'A$1,700-2,200',tot:'A$52,000-62,000/年',note:''},
'uow':{tu:'A$34,000-40,000/年',tg:'A$34,000-40,000/年',liv:'A$1,700-2,200',tot:'A$50,000-58,000/年',note:''},
'curtin':{tu:'A$34,000-40,000/年',tg:'A$34,000-40,000/年',liv:'A$1,600-2,100',tot:'A$48,000-57,000/年',note:'珀斯，移民加分地区'},
'deakin':{tu:'A$34,000-40,000/年',tg:'A$34,000-40,000/年',liv:'A$1,800-2,300',tot:'A$50,000-60,000/年',note:''},
'utoronto':{tu:'C$61,000-68,000/年',tg:'C$30,000-65,000/年',liv:'C$1,800-2,500',tot:'C$75,000-90,000/年',note:'国际生学费高；研究型硕士有资助'},
'mcgill':{tu:'C$28,000-58,000/年(按专业)',tg:'C$20,000-45,000/年',liv:'C$1,400-2,000',tot:'C$45,000-70,000/年',note:'文科便宜工程商科贵'},
'ubc':{tu:'C$50,000-60,000/年',tg:'C$20,000-50,000/年',liv:'C$1,800-2,400',tot:'C$65,000-80,000/年',note:''},
'waterloo':{tu:'C$50,000-63,000/年(CS/工程偏高)',tg:'C$25,000-45,000/年',liv:'C$1,400-1,900',tot:'C$65,000-78,000/年',note:'Co-op带薪实习可回血C$40,000+'},
'ualberta':{tu:'C$33,000-40,000/年',tg:'C$12,000-25,000/年',liv:'C$1,200-1,700',tot:'C$45,000-58,000/年',note:''},
'mcmaster':{tu:'C$38,000-48,000/年',tg:'C$20,000-40,000/年',liv:'C$1,300-1,800',tot:'C$52,000-65,000/年',note:''},
'uwo':{tu:'C$42,000-50,000/年',tg:'C$20,000-38,000/年',liv:'C$1,300-1,800',tot:'C$55,000-68,000/年',note:'Ivey商科AEO另计'},
'sfu':{tu:'C$33,000-38,000/年',tg:'C$12,000-25,000/年',liv:'C$1,500-2,100',tot:'C$45,000-58,000/年',note:''},
'ucalgary':{tu:'C$30,000-38,000/年',tg:'C$15,000-28,000/年',liv:'C$1,200-1,700',tot:'C$42,000-55,000/年',note:''},
'uottawa':{tu:'C$32,000-42,000/年',tg:'C$18,000-30,000/年',liv:'C$1,300-1,800',tot:'C$45,000-58,000/年',note:''},
'udem':{tu:'C$25,000-35,000/年',tg:'C$18,000-30,000/年',liv:'C$1,200-1,700',tot:'C$40,000-52,000/年',note:'法语授课为主'},
'tsinghua':{tu:'¥5,000/年',tg:'¥8,000/年(学硕)',liv:'¥1,500-2,500',tot:'¥25,000-35,000/年',note:'国际生学费¥26,000-40,000/年'},
'pku':{tu:'¥5,300/年',tg:'¥8,000/年(学硕)',liv:'¥1,500-2,500',tot:'¥25,000-35,000/年',note:'国际生学费¥26,000-40,000/年'},
'fudan':{tu:'¥6,500/年',tg:'¥8,000/年(学硕)',liv:'¥2,000-3,000',tot:'¥30,000-40,000/年',note:'上海生活费略高'},
'sjtu':{tu:'¥6,500/年',tg:'¥8,000/年(学硕)',liv:'¥2,000-3,000',tot:'¥30,000-40,000/年',note:''},
'zju':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'nju':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'ustc':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'hit':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'ruc':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'ucas':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'buaa':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'tongji':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'bnu':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'bit':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'xmu':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'hust':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'whu':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'sysu':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'scu':{tu:'$62,000/年',tg:'$50,000/年',liv:'$2,000-2,600',tot:'$80,000-90,000/年',note:'硅谷就业近水楼台'},
'ecnu':{tu:'¥6,500/年',tg:'¥8,000/年(学硕)',liv:'¥2,000-3,000',tot:'¥30,000-40,000/年',note:''},
'sufe':{tu:'¥6,500/年',tg:'¥8,000/年(学硕)',liv:'¥2,000-3,000',tot:'¥30,000-40,000/年',note:''},
'cufe':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'uibe':{tu:'¥6,000/年',tg:'¥8,000/年(学硕)',liv:'¥1,800-2,800',tot:'¥28,000-38,000/年',note:''},
'cupl':{tu:'¥5,000-6,500/年',tg:'¥8,000-10,000/年(专硕更高)',liv:'¥1,500-2,500',tot:'¥25,000-40,000/年',note:'公办统招价；MBA/专硕另计'},
'bfsu':{tu:'¥6,000/年',tg:'¥8,000/年(学硕)',liv:'¥1,800-2,800',tot:'¥28,000-38,000/年',note:''},
'sisu':{tu:'¥6,500/年',tg:'¥8,000/年(学硕)',liv:'¥2,000-3,000',tot:'¥30,000-40,000/年',note:''},
'todai':{tu:'¥535,800/年(国立统一)',tg:'¥535,800/年',liv:'¥100,000-150,000',tot:'¥2,000,000-2,500,000/年',note:'国立大学学费统一；入学金¥282,000'},
'kyoto':{tu:'¥535,800/年(国立统一)',tg:'¥535,800/年',liv:'¥100,000-150,000',tot:'¥2,000,000-2,500,000/年',note:'国立大学学费统一；入学金¥282,000'},
'waseda':{tu:'¥1,000,000-1,600,000/年',tg:'¥900,000-1,500,000/年',liv:'¥120,000-160,000',tot:'¥2,500,000-3,200,000/年',note:'私立，按学部差异大'},
'keio':{tu:'¥1,000,000-1,500,000/年',tg:'¥900,000-1,400,000/年',liv:'¥120,000-160,000',tot:'¥2,500,000-3,100,000/年',note:'私立'},
'osaka':{tu:'¥535,800/年(国立统一)',tg:'¥535,800/年',liv:'¥100,000-150,000',tot:'¥2,000,000-2,500,000/年',note:'国立大学学费统一；入学金¥282,000'},
'tohoku':{tu:'¥535,800/年(国立统一)',tg:'¥535,800/年',liv:'¥100,000-150,000',tot:'¥2,000,000-2,500,000/年',note:'国立大学学费统一；入学金¥282,000'},
'nagoya':{tu:'¥535,800/年(国立统一)',tg:'¥535,800/年',liv:'¥100,000-150,000',tot:'¥2,000,000-2,500,000/年',note:'国立大学学费统一；入学金¥282,000'},
'kyushu':{tu:'¥535,800/年(国立统一)',tg:'¥535,800/年',liv:'¥100,000-150,000',tot:'¥2,000,000-2,500,000/年',note:'国立大学学费统一；入学金¥282,000'},
'hokudai':{tu:'¥535,800/年(国立统一)',tg:'¥535,800/年',liv:'¥90,000-120,000',tot:'¥1,800,000-2,200,000/年',note:'札幌生活费低'},
'snu':{tu:'₩5,000,000-7,000,000/年',tg:'₩5,000,000-7,000,000/年',liv:'₩1,000,000-1,400,000',tot:'₩18,000,000-25,000,000/年',note:'国立，学费低廉'},
'korea':{tu:'₩8,000,000-11,000,000/年',tg:'₩8,000,000-11,000,000/年',liv:'₩1,000,000-1,400,000',tot:'₩20,000,000-27,000,000/年',note:'私立'},
'yonsei':{tu:'₩8,000,000-11,000,000/年',tg:'₩8,000,000-11,000,000/年',liv:'₩1,000,000-1,400,000',tot:'₩20,000,000-27,000,000/年',note:'私立'},
'kaist':{tu:'₩7,000,000-9,000,000/年',tg:'₩7,000,000-9,000,000/年',liv:'₩900,000-1,200,000',tot:'₩18,000,000-24,000,000/年',note:'国际生多获全额奖学金(学费+生活津贴)'},
'postech':{tu:'₩7,000,000-9,000,000/年',tg:'₩7,000,000-9,000,000/年',liv:'₩800,000-1,100,000',tot:'₩17,000,000-23,000,000/年',note:'国际生奖学金覆盖率高'},
'skku':{tu:'₩8,000,000-10,000,000/年',tg:'₩8,000,000-10,000,000/年',liv:'₩1,000,000-1,300,000',tot:'₩19,000,000-25,000,000/年',note:''},
'hanyang':{tu:'₩8,000,000-10,000,000/年',tg:'₩8,000,000-10,000,000/年',liv:'₩1,000,000-1,300,000',tot:'₩19,000,000-25,000,000/年',note:''},
'cau':{tu:'₩7,000,000-9,000,000/年',tg:'₩7,000,000-9,000,000/年',liv:'₩1,000,000-1,300,000',tot:'₩18,000,000-24,000,000/年',note:''},
'khu':{tu:'₩7,000,000-9,000,000/年',tg:'₩7,000,000-9,000,000/年',liv:'₩1,000,000-1,300,000',tot:'₩18,000,000-24,000,000/年',note:''},
'ewha':{tu:'₩7,000,000-9,000,000/年',tg:'₩7,000,000-9,000,000/年',liv:'₩1,000,000-1,300,000',tot:'₩18,000,000-24,000,000/年',note:'女校'},
'eth':{tu:'CHF 2,190/学期(非瑞士)',tg:'CHF 2,190/学期',liv:'CHF 1,800-2,500',tot:'CHF 25,000-35,000/年',note:'学费极低，苏黎世生活费极高'},
'epfl':{tu:'CHF 1,460/学期',tg:'CHF 1,460/学期',liv:'CHF 1,500-2,200',tot:'CHF 20,000-30,000/年',note:''},
'tum':{tu:'€4,000-6,000/学期(非EU本科)',tg:'€4,000-6,000/学期(部分硕士)',liv:'€1,200-1,600',tot:'€18,000-26,000/年',note:'2024起对非EU收学费；慕尼黑房租贵'},
'lmu':{tu:'免学费(仅学期费€150)',tg:'免学费',liv:'€1,200-1,600',tot:'€14,000-18,000/年',note:''},
'heidelberg':{tu:'€1,500/学期(非EU)',tg:'€1,500/学期(非EU)',liv:'€900-1,200',tot:'€13,000-17,000/年',note:'巴符州对非EU收费'},
'rwth':{tu:'免学费(仅学期费€300)',tg:'免学费(仅学期费€300)',liv:'€900-1,200',tot:'€12,000-15,000/年',note:'德国公立免学费'},
'tudelft':{tu:'€17,000-22,000/年(非EU)',tg:'€19,000-24,000/年(非EU)',liv:'€1,000-1,400',tot:'€30,000-40,000/年',note:''},
'uvanl':{tu:'€12,000-18,000/年(非EU)',tg:'€15,000-25,000/年(非EU)',liv:'€1,200-1,600',tot:'€26,000-38,000/年',note:''},
'psl':{tu:'€3,900/年(非EU)',tg:'€3,900/年',liv:'€1,200-1,600',tot:'€17,000-23,000/年',note:''},
'polytechnique':{tu:'€19,000/年(国际项目)',tg:'€15,000-19,000/年',liv:'€1,000-1,400',tot:'€30,000-36,000/年',note:'法国精英校，英语项目'},
'sorbonne':{tu:'€3,900/年(非EU)',tg:'€3,900/年(非EU)',liv:'€1,200-1,600',tot:'€17,000-23,000/年',note:''},
'sciencespo':{tu:'€15,000/年(非EU)',tg:'€19,000/年(非EU)',liv:'€1,200-1,600',tot:'€28,000-35,000/年',note:''},
'kth':{tu:'SEK 155,000/年(非EU)',tg:'SEK 155,000/年(非EU)',liv:'SEK 9,000-12,000',tot:'SEK 260,000-300,000/年',note:''},
'lund':{tu:'SEK 140,000/年(非EU)',tg:'SEK 140,000/年(非EU)',liv:'SEK 8,000-11,000',tot:'SEK 235,000-275,000/年',note:''},
'copenhagen':{tu:'DKK 60,000-100,000/年(非EU)',tg:'DKK 60,000-100,000/年',liv:'DKK 7,000-9,000',tot:'DKK 140,000-200,000/年',note:''},
'tcd':{tu:'€20,000-28,000/年(非EU)',tg:'€18,000-30,000/年(非EU)',liv:'€1,300-1,700',tot:'€34,000-46,000/年',note:'爱尔兰'},
'polimi':{tu:'€3,900/年(非EU上限)',tg:'€3,900/年(非EU上限)',liv:'€900-1,300',tot:'€14,000-20,000/年',note:'按收入可减免，性价比极高'},
'unibo':{tu:'€3,000-4,500/年(非EU)',tg:'€3,000-4,500/年',liv:'€800-1,100',tot:'€12,000-17,000/年',note:'按收入分档，极便宜'},
'ub':{tu:'€4,000-6,000/年(非EU)',tg:'€4,000-6,000/年',liv:'€900-1,300',tot:'€14,000-20,000/年',note:'西班牙公立'},
'um':{tu:'RM 30,000-50,000/年',tg:'RM 25,000-45,000/年',liv:'RM 2,000-3,000',tot:'RM 55,000-80,000/年',note:'公立旗舰'},
'ukm':{tu:'RM 25,000-40,000/年',tg:'RM 20,000-35,000/年',liv:'RM 1,800-2,600',tot:'RM 45,000-65,000/年',note:'公立'},
'usm':{tu:'RM 25,000-40,000/年',tg:'RM 20,000-35,000/年',liv:'RM 1,800-2,600',tot:'RM 45,000-65,000/年',note:'公立'},
'upm':{tu:'RM 25,000-40,000/年',tg:'RM 20,000-35,000/年',liv:'RM 1,800-2,600',tot:'RM 45,000-65,000/年',note:'公立'},
'utm':{tu:'RM 25,000-40,000/年',tg:'RM 20,000-35,000/年',liv:'RM 1,800-2,600',tot:'RM 45,000-65,000/年',note:'公立'},
'ucsi':{tu:'RM 45,000-70,000(整个学位)',tg:'RM 40,000-55,000(整个学位)',liv:'RM 2,000-3,000',tot:'RM 28,000-42,000/年',note:'私立'},
'sunway':{tu:'RM 55,000-85,000(整个学位)',tg:'RM 45,000-65,000(整个学位)',liv:'RM 2,200-3,200',tot:'RM 33,000-48,000/年',note:'私立'},
'inti':{tu:'RM 40,000-65,000(整个学位)',tg:'RM 35,000-50,000(整个学位)',liv:'RM 1,800-2,600',tot:'RM 25,000-38,000/年',note:'私立'},
'apu':{tu:'RM 45,000-70,000(整个学位)',tg:'RM 40,000-55,000(整个学位)',liv:'RM 2,000-3,000',tot:'RM 28,000-42,000/年',note:'私立，IT见长'},
'auckland':{tu:'NZ$38,000-45,000/年',tg:'NZ$40,000-48,000/年',liv:'NZ$1,600-2,200',tot:'NZ$58,000-70,000/年',note:''},
'otago':{tu:'NZ$33,000-40,000/年',tg:'NZ$35,000-42,000/年',liv:'NZ$1,300-1,800',tot:'NZ$50,000-60,000/年',note:''},
'canterbury':{tu:'NZ$32,000-38,000/年',tg:'NZ$34,000-40,000/年',liv:'NZ$1,300-1,800',tot:'NZ$46,000-56,000/年',note:'基督城'},
'vuw':{tu:'NZ$32,000-38,000/年',tg:'NZ$34,000-40,000/年',liv:'NZ$1,400-1,900',tot:'NZ$48,000-58,000/年',note:''},
'must':{tu:'MOP 110,000-130,000/年',tg:'MOP 90,000-150,000/年',liv:'MOP 3,500-5,500',tot:'MOP 160,000-200,000/年',note:'澳门'},
'must2':{tu:'MOP 100,000-140,000/年',tg:'MOP 90,000-160,000/年',liv:'MOP 3,500-5,500',tot:'MOP 150,000-200,000/年',note:'澳门'},
'chula':{tu:'฿150,000-300,000/年(国际项目)',tg:'฿180,000-350,000/年',liv:'฿15,000-25,000',tot:'฿330,000-600,000/年',note:'泰国第一学府'},
'mahidol':{tu:'฿120,000-200,000/年(国际项目)',tg:'฿150,000-250,000/年',liv:'฿15,000-25,000',tot:'฿300,000-500,000/年',note:''},
'msu':{tu:'$44,000/年(非居民)',tg:'$38,000/年',liv:'$1,100-1,500',tot:'$55,000-62,000/年',note:''},
'nyuad':{tu:'$62,000/年',tg:'—',liv:'$1,500-2,000',tot:'$80,000-90,000/年',note:'国际生几乎全员高额助学金，实缴极低'},
  // ===== v11.8 新增41校费用（2025-26/2026-27官方或US News，来源见newschools_wave7各JSON sources） =====
'aalto':{tu:'€12,000-15,000/年',tg:'€15,000-20,000/年',liv:'€900-1,300/月（估算）',tot:'€23,000-32,000/年',note:'非EU/EEA本科€12,000（商科/理工）至€15,000（艺术建筑）；EU/EEA免学费，国际生可申25%首年减免及全额奖学金'},
'asu':{tu:'$35,167/年',tg:'$40,452/年',liv:'$1,300-1,800',tot:'$55,000-68,500/年',note:'国际本科生学费基准$37,202；US News非居民总成本$55,091，含食宿保险后国际生约$66,397-68,527；性价比突出'},
'bath':{tu:'£24,200-30,500/年（人文£24,200、管理/经济£27,300、理工£30,500）',tg:'£23,000-28,000/年',liv:'£1,100-1,400',tot:'约£38,000-45,000/年',note:'提供总额£920万国际生奖学金，本科国际卓越奖学金每年£8,000'},
'brandeis':{tu:'$73,080/年',tg:'$68,663/年',liv:'$1,800-2,400',tot:'$88,000-98,000/年',note:'82%全日制新生获得奖助学金；Brandeis Commitment对中低收入美国家庭减免学费'},
'bu':{tu:'$73,024/年',tg:'$73,024/年',liv:'$1,800-2,400',tot:'$90,000-98,000/年',note:'本科对美国公民/绿卡新生100%满足经济需求，国际生以merit奖学金为主'},
'buffalo':{tu:'$32,366/年',tg:'$24,990/年',liv:'$1,000-1,500',tot:'$48,000-54,000/年',note:'SUNY旗舰统一费率，AAU研究型大学中学费最低之一'},
'cuboulder':{tu:'$44,748/年',tg:'$35,000/年（估算：非居民研究生按学分收费）',liv:'$1,600-2,200',tot:'$64,000-70,000/年',note:'非居民总成本约$65,728；四年学费保证（Tuition Guarantee）锁定入学费率'},
'cwru':{tu:'$71,410/年',tg:'$55,548/年',liv:'$1,200-1,700',tot:'$86,000-96,000/年',note:'merit奖学金较慷慨，国际生可申请；学费按学院封顶计费'},
'dalhousie':{tu:'C$30,906-48,594/年',tg:'C$20,000-30,000/年（估算）',liv:'C$1,300-1,800/月',tot:'C$50,000-70,000/年',note:'国际本科实行学费保证制，入学后学费锁定不涨价；农学院最低、工程最高（2026-27官方费率）'},
'eduhk':{tu:'HK$167,000/年',tg:'HK$140,000-160,000/年（估算）',liv:'HK$4,500-5,500',tot:'约HK$231,000/年',note:'教育学科US News教育与教育研究排名全球第3；非本地生可申政府奖学基金每年HK$80,000'},
'fordham':{tu:'$67,452/年',tg:'$35,000/年（估算：研究生按学分/项目收费）',liv:'$2,000-2,800',tot:'$90,000-95,000/年',note:'总成本约$93,168（含纽约市食宿$25,200）；QS 2026排名为1001-1200区间'},
'gwu':{tu:'$70,170/年',tg:'$38,000/年（估算：研究生按学分收费，各学院差异大）',liv:'$2,000-2,700',tot:'$88,000-93,000/年',note:'2026-27学费将涨至$72,000；强制费仅$770含无限次地铁公交卡，华府生活成本偏高'},
'hkbu':{tu:'HK$175,000/年',tg:'HK$150,000/年（估算，授课型硕士因课程差异大）',liv:'HK$4,500-6,000',tot:'约HK$252,000/年（学费+住宿+生活）',note:'设全额奖学金最高每年约HK$227,500覆盖学费及生活；本地生学费HK$44,500'},
'kobe':{tu:'¥535,800/年（另入学金¥282,000）',tg:'¥535,800/年（国立统一标准）',liv:'¥80,000-120,000',tot:'约¥1,500,000-1,900,000/年',note:'国立统一学费，生活成本低于东京；设有学费减免与多种奖学金'},
'kuleuven':{tu:'€9,493.90/年',tg:'€9,493.90/年',liv:'€800-1,100/月',tot:'€20,000-25,000/年',note:'非EU/EEA学生标准费率€9,493.90/年（60学分，2026-27）；EU/EEA学生仅€1,181.40，部分专业另有费率'},
'lingnan':{tu:'HK$160,000/年（2025/26；2026/27起HK$175,000）',tg:'HK$150,000-230,000/课程（估算，商学院硕士较高）',liv:'HK$4,000-5,500',tot:'约HK$210,000-230,000/年',note:'非本地生可获四年校内宿舍保证，宿费仅约HK$12,000-16,000/年，为港八大最低之一'},
'miami':{tu:'$66,312/年',tg:'$46,000/年（估算：研究生按学分约$2,530/学分）',liv:'$2,000-2,700',tot:'$94,700-104,000/年',note:'2026-27学费$66,312+杂费$2,030；国际生强制健康保险$4,483，总COA达$104,091'},
'michiganstate':{tu:'$46,094/年',tg:'$33,600/年（估算，$1,868.5/学分×18学分）',liv:'$1,000-1,500',tot:'$57,000-64,000/年',note:'州外学费按年级专业分档；国际生可申请merit奖学金'},
'monashmy':{tu:'RM 49,920-64,800/年',tg:'RM 37,080-46,240/年',liv:'RM 1,500-2,500/月',tot:'RM 70,000-95,000/年',note:'与澳洲本校同文凭但学费仅约一半；本科商科约RM5.2万/年、工程约RM6.5万/年，医学(MBBS)最贵'},
'neu':{tu:'$69,289/年',tg:'$50,000-60,000/年（估算，按学分计费因学院而异）',liv:'$1,800-2,400',tot:'$85,000-94,000/年',note:'Co-op带薪实习可补贴开支；国际生另有一次性$450国际生费'},
'pitt':{tu:'$43,432/年',tg:'$43,000/年（估算，参考州外本科费率，因学院而异）',liv:'$1,200-1,700',tot:'$55,000-62,000/年',note:'州外学费按学院分档；医学院与商科研究生项目显著更高'},
'psu':{tu:'$43,490/年',tg:'$46,796-48,662/年',liv:'$1,200-1,700',tot:'$55,000-63,000/年',note:'州外学费按专业分档，商科工程更高；助研助教岗位可减免研究生学费'},
'qmul':{tu:'£24,950-30,950/年（文科£24,950-26,350、理工£30,950；医科£49,950）',tg:'£21,000-29,000/年',liv:'£1,400-1,800',tot:'约£42,000-50,000/年',note:'QS2026一年跃升10位至110，三年升35位为罗素集团上升最快；国际生年涨幅上限10%'},
'ritsumeikan':{tu:'¥1,118,200-1,771,600/年（学部而异，法/经营最低、理工最高；另入学金¥200,000）',tg:'¥811,600/年（文系研究科）-¥1,230,600（情报理工）',liv:'¥80,000-120,000',tot:'约¥2,300,000-3,000,000/年',note:'私立学费因学部差异大；设学费减免制度及多种私费留学生奖学金'},
'rochester':{tu:'$71,750/年',tg:'$60,000-70,000/年（估算，因学院而异）',liv:'$1,200-1,700',tot:'$87,000-96,000/年',note:'本科100%满足经济需求并设merit奖学金；UR Essentials计划已含教材费'},
'rpi':{tu:'$66,024/年',tg:'$66,300/年',liv:'$1,200-1,700',tot:'$78,000-86,000/年',note:'约89%学生获得奖助学金，平均额度约$39,546'},
'smudallas':{tu:'$69,722/年',tg:'$40,000/年（估算：研究生按项目收费）',liv:'$1,600-2,200',tot:'$88,000-92,000/年',note:'总成本约$89,600；QS 2026排名为1001-1200区间；毕业6年中位薪资$65,556回报率较高'},
'standrews':{tu:'£33,250/年（文/理/神学院，2026/27；医学£39,620）',tg:'£25,000-30,000/年（估算）',liv:'£1,200-1,500',tot:'约£49,600/年（校方Cost of Attendance估算£49,626）',note:'国际本科生可申请International Excellence奖学金等；苏格兰小城生活成本低于伦敦'},
'stonybrook':{tu:'$34,911/年',tg:'$26,330/年',liv:'$1,500-2,000',tot:'$50,000-55,000/年',note:'SUNY旗舰费率，研究型名校中性价比突出'},
'syracuse':{tu:'$68,429/年',tg:'$50,000/年（估算：研究生按学分收费，约$1,800+/学分）',liv:'$1,600-2,200',tot:'$88,000-92,000/年',note:'承诺满足100%录取学生财务需求；2025-26年投入超$3.91亿用于助学金'},
'taylors':{tu:'RM 32,000-45,000/年',tg:'RM 28,000-45,000/年',liv:'RM 1,500-2,600/月',tot:'RM 55,000-75,000/年',note:'本科全程学费RM95,066起（商科/酒店管理约RM12万/3年），医学(MBBS)最贵；校色盾形为近黑深藏青、配标志红（logo实测）'},
'titech':{tu:'¥535,800/年（另入学金¥282,000）',tg:'¥535,800/年（国立统一标准）',liv:'¥100,000-150,000',tot:'约¥1,800,000-2,200,000/年',note:'国立大学学费统一，可申请全额/半额学费减免及MEXT奖学金'},
'tsukuba':{tu:'¥535,800/年（另入学金¥282,000）',tg:'¥535,800/年（法科大学院¥804,000）',liv:'¥80,000-120,000',tot:'约¥1,500,000-1,900,000/年',note:'多数留学生可申请1/3以上学费减免，宿舍价格低'},
'tulane':{tu:'$71,997/年',tg:'$45,000/年（估算：研究生按项目收费）',liv:'$1,500-2,100',tot:'$90,000-94,000/年',note:'总成本约$91,508；QS 2026排名为并列=597；对国际生提供merit奖学金'},
'uarizona':{tu:'$39,903/年',tg:'$35,012/年',liv:'$1,300-1,800',tot:'$58,000-62,000/年',note:'AY26官方非居民学费$41,330+杂费$1,738；非居民研究生学费$35,012（bursar官方）；四年学费保证计划'},
'ucr':{tu:'$52,703/年',tg:'$33,000/年（估算：UC研究生学费约$17-18K+非居民附加学费$15K）',liv:'$1,600-2,100',tot:'$77,000-82,000/年',note:'UCR官方2025-26非居民新生总预算$82,441；UC学费稳定计划锁定入学费率，US News社会流动性排名第1'},
'ucsc':{tu:'$54,105/年',tg:'$33,000/年（估算：UC研究生学费约$17-18K+非居民附加学费$15K）',liv:'$1,800-2,400',tot:'$74,000-80,000/年',note:'UC学费稳定计划（入学后学费锁定最长6年），国际生无联邦助学金，校外总成本约$74,553'},
'udel':{tu:'$43,220/年',tg:'$33,480/年（估算，$1,116/学分×30学分）',liv:'$1,200-1,700',tot:'$55,000-61,000/年',note:'研究生实行统一费率不分州内外，部分学院另有资助'},
'uiowa':{tu:'$33,710/年',tg:'$32,776/年',liv:'$1,000-1,400',tot:'$46,000-51,000/年',note:'公立旗舰中学费较低；国际本科生自动审核优秀奖学金'},
'uoregon':{tu:'$43,919/年',tg:'$33,000/年（估算：非居民研究生学费）',liv:'$1,500-2,100',tot:'$63,000-71,000/年',note:'校方官方非居民学杂费$47,466、含食宿总成本$71,256；国际生可申请Summit等merit奖学金'},
'utah':{tu:'$35,198/年',tg:'$28,000/年（估算：非居民研究生学费）',liv:'$1,300-1,900',tot:'$56,000-62,000/年',note:'官方非居民学杂费$32,932、住校总预算$56,932；学生数为约3.5万（估算，官方未在本轮检索确认）；WUE西部学生可享优惠'}

};
window.SPECIAL_HERO={
  stanford: {
    nick: 'The Farm · 硅谷心脏',
    nickEn: 'The Farm · Heart of Silicon Valley',
    chips: ['🌴 棕榈大道 Palm Drive','🗼 胡佛塔 Hoover Tower','🐦 吉祥物 Cardinal（树）','🏛️ 纪念教堂','🚀 校友创立 Google/Yahoo/Nike'],
    chipsEn: ['🌴 Palm Drive','🗼 Hoover Tower','🐦 Mascot: the Cardinal (Tree)','🏛️ Memorial Church','🚀 Alumni founded Google/Yahoo/Nike'],
    svg: `<svg viewBox="0 0 460 220" width="520" height="250" style="position:absolute;right:-20px;bottom:0;opacity:0.2;pointer-events:none;z-index:1" fill="#fff">
      <!-- 胡佛塔 -->
      <path d="M300,220 L300,96 Q300,88 307,88 L341,88 Q348,88 348,96 L348,220 Z"/>
      <path d="M308,88 L308,66 L340,66 L340,88 Z"/>
      <path d="M308,66 Q324,42 340,66 Z"/>
      <rect x="296" y="150" width="56" height="8" rx="2" opacity="0.85"/>
      <rect x="318" y="102" width="12" height="40" rx="6" opacity="0.55"/>
      <!-- 拱廊 -->
      <g opacity="0.9"><path d="M180,220 L180,196 Q192,182 204,196 L204,220 Z"/><path d="M210,220 L210,196 Q222,182 234,196 L234,220 Z"/><path d="M240,220 L240,196 Q252,182 264,196 L264,220 Z"/><path d="M168,198 L276,198 L276,188 L168,188 Z"/></g>
      <!-- 棕榈树 x2 -->
      <g stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round">
        <path d="M84,220 C80,180 78,140 88,104"/>
        <path d="M88,104 C70,92 52,92 38,100 M88,104 C78,86 64,76 46,74 M88,104 C88,84 96,68 112,60 M88,104 C100,90 116,84 132,86 M88,104 C106,100 122,104 134,114"/>
        <path d="M132,220 C130,190 130,162 138,136"/>
        <path d="M138,136 C126,126 112,124 100,128 M138,136 C134,120 124,110 110,106 M138,136 C142,120 152,110 166,106 M138,136 C150,128 164,126 176,130"/>
      </g>
      <ellipse cx="380" cy="120" rx="70" ry="34" opacity="0.35"/>
    </svg>`
  },
  uchicago: {
    nick: '哥特学术圣殿 · 诺奖摇篮',
    nickEn: 'Gothic Academic Citadel · Cradle of Nobel Laureates',
    chips: ['🏰 哥特复兴建筑群','⛪ 洛克菲勒教堂','📚 Core 核心课程','🔥 凤凰校徽','🏆 100+ 诺贝尔奖'],
    chipsEn: ['🏰 Gothic Revival Architecture','⛪ Rockefeller Chapel','📚 The Core Curriculum','🔥 Phoenix Crest','🏆 100+ Nobel Prizes'],
    svg: `<svg viewBox="0 0 460 220" width="520" height="250" style="position:absolute;right:-20px;bottom:0;opacity:0.2;pointer-events:none;z-index:1" fill="#fff">
      <!-- 主塔楼（洛克菲勒教堂式） -->
      <path d="M250,220 L250,88 L266,88 L266,58 L274,58 L274,88 L290,88 L290,220 Z"/>
      <path d="M262,58 L270,34 L278,58 Z"/>
      <!-- 尖顶群 -->
      <path d="M196,220 L196,120 L210,120 L210,96 L216,96 L216,120 L230,120 L230,220 Z"/>
      <path d="M204,96 L210,76 L216,96 Z"/>
      <path d="M304,220 L304,112 L318,112 L318,88 L324,88 L324,112 L338,112 L338,220 Z"/>
      <path d="M312,88 L318,68 L324,88 Z"/>
      <!-- 尖拱窗 -->
      <path d="M262,150 L262,120 Q270,106 278,120 L278,150 Z" opacity="0.55"/>
      <path d="M205,180 L205,158 Q210,148 215,158 L215,180 Z" opacity="0.55"/>
      <path d="M313,172 L313,150 Q318,140 323,150 L323,172 Z" opacity="0.55"/>
      <!-- 连廊尖拱 -->
      <g opacity="0.9"><path d="M120,220 L120,186 Q134,168 148,186 L148,220 Z"/><path d="M154,220 L154,186 Q168,168 182,186 L182,220 Z"/><path d="M344,220 L344,186 Q358,168 372,186 L372,220 Z"/><path d="M378,220 L378,186 Q392,168 406,186 L406,220 Z"/></g>
      <path d="M112,190 L416,190 L416,180 L112,180 Z" opacity="0.9"/>
      <!-- 雉堞 -->
      <g opacity="0.9"><rect x="250" y="80" width="8" height="8"/><rect x="262" y="80" width="8" height="8"/><rect x="274" y="80" width="8" height="8"/><rect x="286" y="80" width="4" height="8"/></g>
    </svg>`
  },
  tsinghua: {
    nick: '水木清华 · 中国工程师摇篮',
    nickEn: 'Shuimu Tsinghua · Cradle of China\u2019s Engineers',
    chips: ['🏛️ 二校门','🕌 清华大礼堂','🌸 紫荆校花','⚙️ 工科全球顶尖','🎓 1911 清华学堂'],
    chipsEn: ['🏛️ The Second Gate','🕌 Grand Auditorium','🌸 Cercis (school flower)','⚙️ World-Class Engineering','🎓 1911 Tsinghua School'],
    svg: `<svg viewBox="0 0 460 220" width="520" height="250" style="position:absolute;right:-20px;bottom:0;opacity:0.2;pointer-events:none;z-index:1" fill="#fff">
      <!-- 大礼堂穹顶 -->
      <path d="M300,150 Q340,80 380,150 Z" opacity="0.85"/>
      <rect x="296" y="148" width="88" height="72" opacity="0.85"/>
      <path d="M334,92 L340,70 L346,92 Z" opacity="0.85"/>
      <rect x="312" y="168" width="12" height="52" rx="6" opacity="0.5"/><rect x="332" y="168" width="12" height="52" rx="6" opacity="0.5"/><rect x="352" y="168" width="12" height="52" rx="6" opacity="0.5"/>
      <!-- 二校门：三拱白石门（evenodd 挖出拱门） -->
      <path fill-rule="evenodd" d="M90,220 L90,110 L96,110 L96,102 L260,102 L260,110 L266,110 L266,220 Z
        M120,220 L120,160 Q132,138 144,160 L144,220 Z
        M163,220 L163,152 Q178,124 193,152 L193,220 Z
        M212,220 L212,160 Q224,138 236,160 L236,220 Z"/>
      <!-- 门楣装饰 -->
      <rect x="90" y="94" width="176" height="10" rx="2"/>
      <rect x="104" y="80" width="10" height="14"/><rect x="248" y="80" width="10" height="14"/>
      <path d="M160,102 Q178,72 196,102 Z"/>
      <circle cx="178" cy="88" r="5" opacity="0.9"/>
    </svg>`
  }
};
window.COUNTRY_TEMPLATES={
  us:{ visa:'OPT 12个月(STEM 36个月) → H1B抽签(中签率约30%)', visaDiff:3, stayEasy:2, employers:['Google','Apple','Amazon','Microsoft','Deloitte','PwC','Goldman Sachs','McKinsey'], intlPct:15, chinaPct:5, civilService:['北京','上海'], soe:['国家电网(认可)'], salaryUg:65000, salaryGr:85000, rentSingle:1800, rentShared:900, food:500, transport:120, safety:4, chineseCommunity:4, transit:'公交+地铁', airport:30, pain:'美国签证政策多变;部分城市生活成本高' },
  uk:{ visa:'Graduate Route 2年(博士3年) → Skilled Worker签证', visaDiff:4, stayEasy:3, employers:['Deloitte','PwC','HSBC','Barclays','Google','Amazon','Accenture','KPMG'], intlPct:25, chinaPct:8, civilService:['北京','上海'], soe:['中投(认可)'], salaryUg:30000, salaryGr:38000, rentSingle:1200, rentShared:600, food:350, transport:100, safety:4, chineseCommunity:4, transit:'地铁+公交', airport:25, pain:'英国阴雨连绵,冬天日照短;PSW签证政策曾变动' },
  hk:{ visa:'IANG签证2年(无条件留港) → 工作签证续期', visaDiff:5, stayEasy:5, employers:['HSBC','Goldman Sachs','JPMorgan','PwC','Deloitte','腾讯','字节跳动','BlackRock','Citi','UBS'], intlPct:40, chinaPct:18, civilService:['广东'], soe:['中投(认可)'], salaryUg:35000, salaryGr:45000, rentSingle:9000, rentShared:4500, food:2500, transport:500, safety:5, chineseCommunity:5, transit:'港铁MTR', airport:35, pain:'生活成本极高,房租动辄HK$8000+/月;夏天湿热闷热' },
  sg:{ visa:'Employment Pass(EP) → PR申请', visaDiff:3, stayEasy:4, employers:['Google','Shopee','DBS','GIC','Temasek','PwC','Deloitte','Amazon'], intlPct:30, chinaPct:12, civilService:['广东'], soe:['中投(认可)'], salaryUg:45000, salaryGr:55000, rentSingle:2500, rentShared:1200, food:600, transport:150, safety:5, chineseCommunity:5, transit:'MRT地铁', airport:20, pain:'气候常年炎热潮湿;文化相对保守' },
  au:{ visa:'485毕业生工签2-4年 → PR技术移民', visaDiff:4, stayEasy:4, employers:['Deloitte','PwC','Google','Commonwealth Bank','ANZ','BHP','Telstra','KPMG'], intlPct:30, chinaPct:10, civilService:['北京','上海'], soe:['中投(认可)'], salaryUg:60000, salaryGr:75000, rentSingle:1800, rentShared:900, food:450, transport:130, safety:5, chineseCommunity:4, transit:'公交+火车', airport:20, pain:'远离中国,回国机票贵;部分城市夏天酷热' },
  ca:{ visa:'PGWP毕业工签1-3年 → EE快速通道PR', visaDiff:5, stayEasy:5, employers:['Google','RBC','TD Bank','Shopify','Deloitte','PwC','IBM','Amazon'], intlPct:25, chinaPct:10, civilService:['北京','上海','广东'], soe:['国家电网(认可)'], salaryUg:55000, salaryGr:70000, rentSingle:1500, rentShared:800, food:400, transport:120, safety:5, chineseCommunity:5, transit:'地铁+公交', airport:25, pain:'冬天寒冷漫长(部分城市);移民政策偶有调整' },
  cn:{ visa:'N/A(本国)', visaDiff:0, stayEasy:5, employers:['华为','腾讯','字节跳动','阿里巴巴','百度','美团','中金公司','国家电网'], intlPct:9, chinaPct:91, civilService:['全国各省'], soe:['国家电网✓','中石油✓','中国移动✓'], salaryUg:200000, salaryGr:280000, rentSingle:4000, rentShared:2000, food:1500, transport:300, safety:5, chineseCommunity:5, transit:'地铁+公交发达', airport:35, pain:'课业压力大,内卷严重;部分城市冬天干燥寒冷' },
  jp:{ visa:'就劳签证 → PR申请(需居住10年)', visaDiff:3, stayEasy:3, employers:['Toyota','Sony','Hitachi','Mitsubishi','SoftBank','Google','Amazon','Accenture'], intlPct:15, chinaPct:6, civilService:['北京'], soe:['中投(认可)'], salaryUg:30000, salaryGr:40000, rentSingle:900, rentShared:500, food:400, transport:100, safety:5, chineseCommunity:4, transit:'JR+地铁', airport:30, pain:'语言 barrier(日语);企业文化等级森严' },
  kr:{ visa:'E-7工作签证 → PR申请(F-5)', visaDiff:3, stayEasy:3, employers:['Samsung','LG','Hyundai','Google','Deloitte','PwC','Kakao','Naver'], intlPct:12, chinaPct:5, civilService:['北京'], soe:['中投(认可)'], salaryUg:35000, salaryGr:45000, rentSingle:700, rentShared:400, food:350, transport:80, safety:5, chineseCommunity:4, transit:'地铁+公交', airport:25, pain:'韩语 barrier;职场竞争激烈' },
  eu:{ visa:'EU Blue Card → 各国PR(通常2-5年)', visaDiff:4, stayEasy:4, employers:['Siemens','Bosch','SAP','Nestlé','Novartis','Google','Amazon','Deloitte'], intlPct:20, chinaPct:4, civilService:['北京','上海'], soe:['中投(认可)'], salaryUg:50000, salaryGr:65000, rentSingle:1000, rentShared:600, food:350, transport:90, safety:5, chineseCommunity:3, transit:'公交+火车', airport:20, pain:'小语种 barrier(德/法/荷等);部分国家天气阴冷' },
  my:{ visa:'Employment Pass → PR申请(难度较大)', visaDiff:3, stayEasy:3, employers:['Petronas','Google','Maybank','Deloitte','PwC','Shell'], intlPct:20, chinaPct:8, civilService:['北京'], soe:['中投(认可)'], salaryUg:30000, salaryGr:40000, rentSingle:800, rentShared:400, food:300, transport:80, safety:4, chineseCommunity:5, transit:'公交+轻轨', airport:30, pain:'热带气候常年炎热;PR难度较大' },
  nz:{ visa:'Post-Study Work Visa 1-3年 → PR技术移民', visaDiff:4, stayEasy:4, employers:['Google','Fisher & Paykel','ANZ','Deloitte','PwC','Air NZ'], intlPct:25, chinaPct:8, civilService:['北京','上海'], soe:['中投(认可)'], salaryUg:50000, salaryGr:60000, rentSingle:1200, rentShared:600, food:400, transport:100, safety:5, chineseCommunity:4, transit:'公交+火车', airport:20, pain:'远离中国;部分城市工作机会有限' },
  other:{ visa:'各国工签政策不同,详见学校详情', visaDiff:3, stayEasy:3, employers:['Google','Deloitte','PwC','当地企业'], intlPct:20, chinaPct:5, civilService:['北京'], soe:['中投(认可)'], salaryUg:45000, salaryGr:60000, rentSingle:1200, rentShared:600, food:400, transport:100, safety:4, chineseCommunity:3, transit:'公交', airport:25, pain:'详见各校情况' },
};
window.RANK_NOW={
 "berkeley": [
  9,
  7,
  5
 ],
 "brown": [
  65,
  144,
  "101-150"
 ],
 "bu": [
  76,
  96,
  "101-150"
 ],
 "caltech": [
  7,
  23,
  9
 ],
 "cambridge": [
  3,
  5,
  4
 ],
 "cmu": [
  24,
  112,
  "101-150"
 ],
 "columbia": [
  20,
  10,
  8
 ],
 "cornell": [
  18,
  13,
  12
 ],
 "cuhk": [
  41,
  28,
  "101-150"
 ],
 "dartmouth": [
  180,
  331,
  "301-400"
 ],
 "duke": [
  28,
  30,
  46
 ],
 "edinburgh": [
  29,
  41,
  37
 ],
 "fudan": [
  36,
  49,
  41
 ],
 "gatech": [
  41,
  94,
  "151-200"
 ],
 "harvard": [
  5,
  1,
  1
 ],
 "hku": [
  33,
  40,
  67
 ],
 "hkust": [
  58,
  82,
  "201-300"
 ],
 "imperial": [
  8,
  14,
  26
 ],
 "jhu": [
  16,
  17,
  19
 ],
 "lse": [
  52,
  223,
  "151-200"
 ],
 "manchester": [
  56,
  68,
  46
 ],
 "melbourne": [
  37,
  28,
  38
 ],
 "mit": [
  2,
  2,
  3
 ],
 "neu": [
  "201-250",
  232,
  "201-300"
 ],
 "northwestern": [
  30,
  26,
  31
 ],
 "ntu": [
  31,
  27,
  88
 ],
 "nus": [
  17,
  16,
  56
 ],
 "nyu": [
  31,
  36,
  28
 ],
 "oxford": [
  1,
  4,
  6
 ],
 "pku": [
  13,
  19,
  23
 ],
 "princeton": [
  3,
  14,
  7
 ],
 "purdue": [
  85,
  152,
  "101-150"
 ],
 "rice": [
  103,
  201,
  "101-150"
 ],
 "sjtu": [
  40,
  37,
  30
 ],
 "stanford": [
  5,
  3,
  2
 ],
 "sydney": [
  53,
  31,
  72
 ],
 "todai": [
  26,
  72,
  31
 ],
 "tsinghua": [
  12,
  6,
  18
 ],
 "ubc": [
  45,
  42,
  53
 ],
 "uchicago": [
  15,
  25,
  10
 ],
 "ucl": [
  22,
  9,
  14
 ],
 "ucla": [
  18,
  11,
  16
 ],
 "ucsd": [
  47,
  23,
  20
 ],
 "uiuc": [
  41,
  98,
  53
 ],
 "umich": [
  23,
  21,
  33
 ],
 "upenn": [
  14,
  17,
  14
 ],
 "usc": [
  73,
  74,
  68
 ],
 "utaustin": [
  50,
  56,
  49
 ],
 "utoronto": [
  21,
  20,
  25
 ],
 "uwseattle": [
  25,
  12,
  17
 ],
 "vanderbilt": [
  92,
  68,
  62
 ],
 "waterloo": [
  162,
  199,
  "151-200"
 ],
 "wustl": [
  67,
  32,
  26
 ],
 "yale": [
  10,
  8,
  11
 ]
};
