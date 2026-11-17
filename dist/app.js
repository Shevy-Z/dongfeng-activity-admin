const activitySeed = [
  { id: 34775, name: "东风日产NX7预约试驾", type: "热门推荐", terminal: "WAP", status: "enabled", url: "pages/ad-index/index?id=nx71", created: "2026-11-12", period: "2026-11-13 至 2026-12-15" },
  { id: 34653, name: "双11购车节·购车权益限时放送", type: "热门推荐", terminal: "PC / WAP", status: "expired", url: "sales-promotion-activity/CAP11thlingquan", created: "2026-11-10", period: "2026-11-11 至 2026-11-15" },
  { id: 34642, name: "东风日产全车系预约试驾", type: "热门推荐", terminal: "WAP", status: "enabled", url: "ext/node-activity/dyzb/xhsmthd1109", created: "2026-11-09", period: "2026-11-09 至 2026-12-31" },
  { id: 34350, name: "东风日产NX8焕新体验", type: "品牌活动", terminal: "WAP", status: "enabled", url: "pages/ad-index/index?id=nx810314", created: "2026-10-31", period: "2026-10-31 至 2026-12-05" },
  { id: 34349, name: "东风日产NX8城市品鉴", type: "品牌活动", terminal: "WAP", status: "enabled", url: "pages/ad-index/index?id=nx810313", created: "2026-10-31", period: "2026-10-31 至 2026-11-30" },
  { id: 34348, name: "东风日产NX8预约到店", type: "热门推荐", terminal: "WAP", status: "disabled", url: "pages/ad-index/index?id=nx810312", created: "2026-10-30", period: "2026-10-31 至 2026-11-28" },
  { id: 34347, name: "东风日产NX8探店季", type: "线下活动", terminal: "WAP", status: "enabled", url: "pages/ad-index/index?id=nx810311", created: "2026-10-29", period: "2026-10-31 至 2026-12-10" },
  { id: 34346, name: "东风日产新N7智能座舱体验", type: "品牌活动", terminal: "WAP", status: "enabled", url: "pages/ad-index/index?id=n71031", created: "2026-10-27", period: "2026-10-31 至 2026-11-30" },
  { id: 34332, name: "东风日产N6安心购", type: "购车权益", terminal: "PC / WAP", status: "expired", url: "pages/ad-index/index?id=n61030", created: "2026-10-26", period: "2026-10-30 至 2026-11-09" },
  { id: 34317, name: "新能源N序列解锁冬日限量好礼", type: "热门推荐", terminal: "WAP", status: "enabled", url: "sales-promotion-activity/NovCap1107", created: "2026-10-24", period: "2026-11-01 至 2026-11-30" }
];

const couponSeed = [
  { id: 1426246, title: "888元购车抵用券", desc: "凭券到店购车，享受相应购车优惠", brand: "东风日产-日产", scene: "节点营销", type: "厂家代金券", verify: "DNDC 核销", condition: "否", status: "active", published: "2026-11-14" },
  { id: 1426241, title: "至高1500元购车抵用券", desc: "凭券到店购车，享受相应购车优惠", brand: "东风日产-日产", scene: "节点营销", type: "厂家代金券", verify: "DNDC 核销", condition: "否", status: "expired", published: "2026-11-11" },
  { id: 1426232, title: "888元购车抵用券", desc: "凭券到店购车，享受相应购车优惠", brand: "东风日产-日产", scene: "节点营销", type: "厂家代金券", verify: "DNDC 核销", condition: "否", status: "active", published: "2026-11-10" },
  { id: 1426139, title: "2000元购车抵用券", desc: "购买轩逸、奇骏、探陆可享专属优惠", brand: "东风日产-日产", scene: "节点营销", type: "厂家代金券", verify: "DNDC 核销", condition: "核销店铺与意向店铺一致", status: "expired", published: "2026-11-08" },
  { id: 1426138, title: "价值2990元家用智能充电桩及安装服务", desc: "新能源车型购车专享权益", brand: "东风日产-日产", scene: "用户关怀", type: "厂家代金券", verify: "DNDC 核销", condition: "核销店铺与意向店铺一致", status: "expired", published: "2026-11-05" },
  { id: 1426134, title: "888元购车券", desc: "购买天籁、鸿蒙座舱、NX8可享", brand: "东风日产-日产", scene: "节点营销", type: "专营店代金券", verify: "DNDC 核销", condition: "核销店铺与意向店铺一致", status: "expired", published: "2026-11-03" },
  { id: 1426129, title: "888元购车抵用券", desc: "888元购车抵用券", brand: "东风日产-日产", scene: "节点营销", type: "厂家代金券", verify: "DNDC 核销", condition: "否", status: "expired", published: "2026-11-01" },
  { id: 1426112, title: "1500元购车抵用券", desc: "凭券到店购车，享受相应购车优惠", brand: "东风日产-日产", scene: "节点营销", type: "厂家代金券", verify: "DNDC 核销", condition: "否", status: "expired", published: "2026-10-29" },
  { id: 1426102, title: "新华网联名体验券", desc: "媒体合作活动体验券", brand: "东风日产-日产", scene: "品牌联动", type: "厂家代金券", verify: "DNDC 核销", condition: "核销店铺与意向店铺一致", status: "active", published: "2026-10-25" },
  { id: 1426050, title: "888元购车抵用券", desc: "凭券到店购车，享受相应购车优惠", brand: "东风日产-日产", scene: "节点营销", type: "厂家代金券", verify: "DNDC 核销", condition: "否", status: "expired", published: "2026-10-20" }
];

const mallCouponSeed = [
  { id: 1426272, title: "NX8城市车友群剃须刀兑换券", type: "满减券", amount: "满106元抵扣105.9元", brand: "东风日产-日产", scene: "新商城", verify: "线上核销", issued: 100, stock: 99, created: "2026-11-17 18:14:04" },
  { id: 1425117, title: "99元车品商城代金券", type: "代金券", amount: "99元", brand: "东风日产-日产", scene: "会员商城（新）", verify: "线上核销", issued: 99999999, stock: 99911898, created: "2026-02-28 15:30:19" },
  { id: 1426271, title: "NX8城市车友群云舒凝脂文件袋兑换券", type: "满减券", amount: "满89元抵扣88.9元", brand: "东风日产-日产", scene: "新商城", verify: "线上核销", issued: 100, stock: 98, created: "2026-11-17 17:34:53" },
  { id: 1426270, title: "NX8城市车友群云舒凝脂托特包兑换券", type: "满减券", amount: "满99元抵扣98.9元", brand: "东风日产-日产", scene: "新商城", verify: "线上核销", issued: 100, stock: 97, created: "2026-11-17 17:31:42" },
  { id: 1426269, title: "NX8城市车友群吸尘器兑换券", type: "满减券", amount: "满75元抵扣74.9元", brand: "东风日产-日产", scene: "新商城", verify: "线上核销", issued: 100, stock: 93, created: "2026-11-17 17:00:41" },
  { id: 1426185, title: "非启停蓄电池50元券", type: "代金券", amount: "50元", brand: "东风日产-日产", scene: "维修保养（新）", verify: "线下核销", issued: 99999999, stock: 99163046, created: "2026-10-30 09:32:51" },
  { id: 1426246, title: "888元购车抵用券", type: "代金券", amount: "888元", brand: "东风日产-日产", scene: "购车商城", verify: "DNDC核销", issued: 100000, stock: 86912, created: "2026-11-14 10:20:11" },
  { id: 1426102, title: "新华网联名体验券", type: "礼品券", amount: "联名体验权益", brand: "东风日产-日产", scene: "会员商城（新）", verify: "线上核销", issued: 5000, stock: 4286, created: "2026-10-25 14:08:39" },
  { id: 1568975, title: "商城会员专享养护券", type: "满减券", amount: "满500元抵扣100元", brand: "东风日产-日产", scene: "维修保养（新）", verify: "线下核销", issued: 20000, stock: 19321, created: "2026-11-16 09:12:20" },
  { id: 1425638, title: "商城精品加购权益券", type: "代金券", amount: "200元", brand: "东风日产-日产", scene: "新商城", verify: "线上核销", issued: 10000, stock: 9650, created: "2026-11-15 16:26:04" }
];

const state = {
  page: location.hash.replace("#", "") || "activities",
  activities: load("dfn-activities", activitySeed),
  coupons: load("dfn-coupons", couponSeed),
  activityFilters: { keyword: "", type: "" },
  couponFilters: { id: "", title: "", type: "", status: "" },
  editingCouponId: null
};

const pageMeta = {
  overview: ["营销", "概况"],
  activities: ["营销 / 活动管理", "活动列表"],
  "activity-create": ["营销 / 活动管理", "新增活动"],
  coupons: ["营销 / 卡券管理", "卡券列表"],
  "coupon-create": ["营销 / 卡券管理", "新增卡券"]
};

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function save() {
  localStorage.setItem("dfn-activities", JSON.stringify(state.activities));
  localStorage.setItem("dfn-coupons", JSON.stringify(state.coupons));
}
function esc(value = "") {
  return String(value).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
}
function toast(message, tone = "success") {
  const el = document.querySelector("#toast");
  el.textContent = message; el.className = `toast show ${tone}`;
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.className = "toast", 2400);
}
function confirmBox(title, message, onConfirm) {
  document.querySelector("#modalRoot").innerHTML = `<div class="modal-backdrop"><div class="modal"><h3>${esc(title)}</h3><p>${esc(message)}</p><div class="button-row"><button class="btn" data-modal="cancel">取消</button><button class="btn danger" data-modal="confirm">确认</button></div></div></div>`;
  const root = document.querySelector("#modalRoot");
  root.querySelector('[data-modal="cancel"]').onclick = () => root.innerHTML = "";
  root.querySelector('[data-modal="confirm"]').onclick = () => { root.innerHTML = ""; onConfirm(); };
}
function showMallCouponModal() {
  const root = document.querySelector("#modalRoot");
  root.innerHTML = `<div class="modal-backdrop"><div class="modal sync-modal"><div class="sync-modal-head"><div><h3>同步商城卡券</h3><p>选择商城卡券同步到官网后台卡券列表</p></div><button class="modal-close" aria-label="关闭">×</button></div>
    <div class="sync-filters"><div class="field"><label>卡券ID</label><input id="mallCouponId" class="control" placeholder="请输入"></div><div class="field"><label>卡券名称</label><input id="mallCouponName" class="control" placeholder="请输入"></div><div class="field"><label>品牌</label><select id="mallCouponBrand" class="control"><option value="">全部品牌</option><option>东风日产-日产</option></select></div><div class="field"><label>卡券类型</label><select id="mallCouponType" class="control"><option value="">全部类型</option><option>满减券</option><option>代金券</option><option>礼品券</option></select></div><div class="button-row"><button class="btn" id="resetMallCoupons">重置</button><button class="btn primary" id="queryMallCoupons">查询</button></div></div>
    <div class="sync-table-wrap"><table class="sync-table"><thead><tr><th class="select-cell"><input type="checkbox" id="selectAllMallCoupons" aria-label="全选商城卡券"></th><th>序号</th><th>卡券</th><th>适用范围</th><th>核销说明</th><th>统计</th><th>系统时间</th></tr></thead><tbody id="mallCouponRows"></tbody></table></div>
    <div class="sync-modal-footer"><span id="mallSelectedCount">已选择 0 张卡券</span><div class="button-row"><button class="btn" id="cancelMallSync">取消</button><button class="btn primary" id="confirmMallSync">确认同步</button></div></div></div></div>`;
  const selected = new Set();
  const renderRows = () => {
    const idValue = root.querySelector("#mallCouponId").value.trim();
    const nameValue = root.querySelector("#mallCouponName").value.trim().toLowerCase();
    const brandValue = root.querySelector("#mallCouponBrand").value;
    const typeValue = root.querySelector("#mallCouponType").value;
    const rows = mallCouponSeed.filter(x => (!idValue || String(x.id).includes(idValue)) && (!nameValue || x.title.toLowerCase().includes(nameValue)) && (!brandValue || x.brand === brandValue) && (!typeValue || x.type === typeValue));
    root.querySelector("#mallCouponRows").innerHTML = rows.map((x,i)=>`<tr><td class="select-cell"><input type="checkbox" class="mall-row-check" value="${x.id}" ${selected.has(x.id)?'checked':''} aria-label="选择卡券 ${x.id}"></td><td>${i+1}</td><td><div class="sync-coupon-info"><strong>${esc(x.title)}</strong><span>卡券ID：${x.id}</span><span>${esc(x.type)} · ${esc(x.amount)}</span></div></td><td><span>适用品牌：${esc(x.brand)}</span><span>适用场景：${esc(x.scene)}</span><span>适用门店：-</span></td><td><span>核销方式：${esc(x.verify)}</span><span>核销条件：否</span><span>卡券归属：厂家</span></td><td><span>发放数量：${x.issued}</span><span>库存数量：${x.stock}</span></td><td><span>创建时间：${esc(x.created)}</span><span>创券来源：卡券中心</span></td></tr>`).join('') || `<tr><td colspan="7"><div class="empty">暂无匹配的商城卡券</div></td></tr>`;
    root.querySelectorAll(".mall-row-check").forEach(check => check.onchange = () => { const id=Number(check.value); check.checked?selected.add(id):selected.delete(id); updateSelection(); });
    updateSelection();
  };
  const updateSelection = () => {
    root.querySelector("#mallSelectedCount").textContent = `已选择 ${selected.size} 张卡券`;
    const visibleChecks = [...root.querySelectorAll(".mall-row-check")];
    root.querySelector("#selectAllMallCoupons").checked = visibleChecks.length > 0 && visibleChecks.every(x=>x.checked);
  };
  root.querySelector(".modal-close").onclick = root.querySelector("#cancelMallSync").onclick = () => root.innerHTML = "";
  root.querySelector("#queryMallCoupons").onclick = renderRows;
  root.querySelector("#resetMallCoupons").onclick = () => { root.querySelector("#mallCouponId").value=""; root.querySelector("#mallCouponName").value=""; root.querySelector("#mallCouponBrand").value=""; root.querySelector("#mallCouponType").value=""; renderRows(); };
  root.querySelector("#selectAllMallCoupons").onchange = e => { root.querySelectorAll(".mall-row-check").forEach(check=>{ check.checked=e.target.checked; const id=Number(check.value); check.checked?selected.add(id):selected.delete(id); }); updateSelection(); };
  root.querySelector("#confirmMallSync").onclick = () => {
    if (!selected.size) { toast("请选择需要同步的卡券", "error"); return; }
    const duplicateIds = [...selected].filter(id=>state.coupons.some(x=>Number(x.id)===id));
    if (duplicateIds.length) { toast(`卡券（${duplicateIds.join('、')}）已存在，不可同步`, "error"); return; }
    const additions = mallCouponSeed.filter(x=>selected.has(x.id)).map(x=>({ id:x.id, title:x.title, desc:`${x.amount}，商城同步卡券`, brand:x.brand, scene:x.scene, type:x.type==='礼品券'?'礼品券':'厂家代金券', verify:x.verify, condition:"否", status:"active", published:new Date().toISOString().slice(0,10) }));
    state.coupons.unshift(...additions); save(); root.innerHTML=""; render(); toast("同步卡券成功");
  };
  renderRows();
}
function navigate(page) {
  state.page = page; location.hash = page; render();
}
function statusTag(status, kind = "activity") {
  const labels = kind === "coupon" ? { active: "已投放", paused: "已暂停", expired: "已过期" } : { enabled: "已启用", disabled: "已禁用", expired: "已过期" };
  return `<span class="tag ${status}">${labels[status] || status}</span>`;
}
function pageHead(title, desc, actions = "") {
  return `<div class="page-head"><div><h1>${title}</h1><p>${desc}</p></div><div class="button-row">${actions}</div></div>`;
}
function pagination(total) {
  return `<div class="pagination"><span>第 1-${Math.min(10,total)} 条 / 共 ${total} 条</span><button disabled>‹</button><button class="active">1</button><button>2</button><button>3</button><button>›</button></div>`;
}
function overviewView() {
  return `<section class="overview-hero"><div><h1>欢迎回来，周晓伟</h1><p>在统一工作台管理官网活动和营销卡券。当前数据保存在浏览器本地，可完整体验新增、筛选、编辑、启停和复制流程。</p></div><div class="quick-grid"><button data-page="activities"><strong>活动列表</strong><br><small>${state.activities.length} 个活动</small></button><button data-page="activity-create"><strong>新增活动</strong><br><small>创建营销专题</small></button><button data-page="coupons"><strong>卡券列表</strong><br><small>${state.coupons.length} 张卡券</small></button><button data-page="coupon-create"><strong>新增卡券</strong><br><small>配置权益规则</small></button></div></section>
    <div class="summary-strip" style="margin-top:20px"><div class="metric"><span>进行中活动</span><strong>${state.activities.filter(x=>x.status==='enabled').length}<small>个</small></strong></div><div class="metric" style="--metric:#20b26b"><span>有效卡券</span><strong>${state.coupons.filter(x=>x.status==='active').length}<small>张</small></strong></div><div class="metric" style="--metric:#f59e0b"><span>待配置</span><strong>3<small>项</small></strong></div><div class="metric" style="--metric:#8b5cf6"><span>今日访问</span><strong>12,680<small>次</small></strong></div></div>`;
}
function activityListView() {
  const f = state.activityFilters;
  const rows = state.activities.filter(x => (!f.keyword || x.name.toLowerCase().includes(f.keyword.toLowerCase()) || String(x.id).includes(f.keyword)) && (!f.type || x.type === f.type));
  const tableRows = rows.map((x,i) => `<tr><td>${i+1}</td><td><strong>${x.id}</strong></td><td><div class="row-title">${esc(x.name)}<div class="row-sub">活动周期：${esc(x.period)}</div></div></td><td>${esc(x.type)}</td><td>${esc(x.terminal)}</td><td>${statusTag(x.status)}</td><td><a class="link" href="#" data-preview="${x.id}">${esc(x.url)}</a></td><td><div>${esc(x.created)}</div><div class="row-sub">创建时间</div></td><td class="actions"><div class="button-row"><button class="btn small" data-activity-action="view" data-id="${x.id}">查看</button><button class="btn small" data-activity-action="toggle" data-id="${x.id}" ${x.status==='expired'?'disabled':''}>${x.status==='enabled'?'禁用':'启用'}</button><button class="btn small" data-activity-action="copy" data-id="${x.id}">复制</button><button class="btn small danger" data-activity-action="delete" data-id="${x.id}">删除</button></div></td></tr>`).join("");
  return `${pageHead("活动列表", "集中管理官网专题、试驾与品牌营销活动", '<button class="btn primary" data-page="activity-create">＋ 新增活动</button><button class="btn" id="exportActivities">导出</button>')}
    <div class="summary-strip"><div class="metric"><span>全部活动</span><strong>${state.activities.length}<small>个</small></strong></div><div class="metric" style="--metric:#20b26b"><span>已启用</span><strong>${state.activities.filter(x=>x.status==='enabled').length}</strong></div><div class="metric" style="--metric:#8b95a3"><span>已过期</span><strong>${state.activities.filter(x=>x.status==='expired').length}</strong></div><div class="metric" style="--metric:#f59e0b"><span>本月新增</span><strong>6</strong></div></div>
    <section class="card"><div class="card-body"><div class="filters"><div class="field"><label>活动名称 / ID</label><input id="activityKeyword" class="control" value="${esc(f.keyword)}" placeholder="请输入活动名称或ID"></div><div class="field"><label>活动类型</label><select id="activityType" class="control"><option value="">全部类型</option>${["热门推荐","品牌活动","线下活动","购车权益"].map(v=>`<option ${f.type===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label>活动时间</label><input class="control" type="date"></div><div></div><div class="button-row"><button class="btn" id="resetActivities">重置</button><button class="btn primary" id="queryActivities">查询</button></div></div></div></section>
    <section class="card"><div class="card-header"><h2>活动列表<span class="count">${rows.length} 条记录</span></h2><div class="button-row"><button class="btn icon-only" id="refreshActivities" title="刷新">↻</button><button class="btn icon-only" title="显示密度">↕</button><button class="btn icon-only" title="列设置">⚙</button></div></div><div class="table-wrap"><table><thead><tr><th>序号</th><th>活动ID</th><th>活动名称</th><th>活动类型</th><th>适用终端</th><th>状态</th><th>页面地址</th><th>时间</th><th>操作</th></tr></thead><tbody>${tableRows || `<tr><td colspan="9"><div class="empty">⌕<strong>没有匹配的活动</strong>请调整筛选条件后重试</div></td></tr>`}</tbody></table></div>${pagination(rows.length)}</section>`;
}

const vehicles = ["天籁·鸿蒙座舱","N6","新N7","2026款探陆","天籁真心版","NX7","十五代轩逸","十四代轩逸","NX8","奇骏·荣誉","ARIYA艾睿雅","逍客·荣誉","轩逸·经典","骐达"];
function activityCreateView() {
  return `${pageHead("新增活动", "创建官网专题活动并配置表单、分享和投放规则", '<button class="btn" data-page="activities">返回列表</button>')}
  <form id="activityForm" class="card form-card"><div class="card-body">
    <section class="form-section"><h2 class="section-title">基础信息</h2><div class="form-grid">
      <div class="field"><label class="required">前端展示</label><select name="display" class="control" required><option>官网</option><option>小程序</option><option>官网 + 小程序</option></select></div>
      <div class="field"><label class="required">落地频道</label><select name="channel" class="control" required><option value="">请选择</option><option>营销活动</option><option>品牌资讯</option><option>车型频道</option></select></div>
      <div class="field"><label class="required">活动类型</label><select name="type" class="control" required><option value="">请选择</option><option>热门推荐</option><option>品牌活动</option><option>线下活动</option><option>购车权益</option></select></div>
      <div class="field"><label class="required">是否线上漏出</label><div class="radio-row"><label><input type="radio" name="online" checked>是</label><label><input type="radio" name="online">否</label></div></div>
      <div class="field full"><label class="required">活动链接 / 路径</label><input name="url" class="control" required value="https://www.dongfeng-nissan.com.cn/sales-promotion-activity/" placeholder="请输入唯一活动路径"><p class="input-note">创建后将不可二次更改，请仔细核对后填入</p></div>
      <div class="field"><label class="required">大活动名称</label><input name="name" class="control" required placeholder="例如：冬日焕新购车季"></div>
      <div class="field"><label class="required">小活动名称</label><input name="subname" class="control" required placeholder="用于列表和分享展示"></div>
      <div class="field"><label class="required">开始日期</label><input name="start" type="date" class="control" required value="2026-11-18"></div>
      <div class="field"><label class="required">结束日期</label><input name="end" type="date" class="control" required value="2026-12-18"></div>
      <div class="field"><label>手机报名限制次数</label><input name="limit" type="number" min="0" class="control" value="1"></div>
      <div class="field coupon-stack"><label>卡券ID</label><div class="multi-select" id="activityCouponSelect"><button type="button" class="control multi-select-trigger"><span id="selectedCouponText">请选择卡券</span><span>⌄</span></button><div class="multi-select-menu">${state.coupons.map(x=>`<label><input type="checkbox" name="couponIds" value="${x.id}"><span>${esc(x.title)} | ${x.id}</span></label>`).join('')}</div></div><p class="input-note">支持多选，已选卡券将用于活动权益配置</p><div class="coupon-subfield"><label>最多可选卡券张数</label><select name="maxCouponCount" id="maxCouponCount" class="control" disabled><option value="">请先选择卡券ID</option></select><p class="input-note">选项范围根据已选卡券数量自动生成</p></div><div class="coupon-subfield"><label>页面是否要求登录</label><div class="radio-row"><label><input type="radio" name="loginRequired" value="yes">是</label><label><input type="radio" name="loginRequired" value="no">否</label></div></div></div>
      <div class="field"><label class="required">是否显示核销码</label><div class="radio-row"><label><input type="radio" name="code" checked>是</label><label><input type="radio" name="code">否</label></div></div>
      <div class="field"><label>支付金额（元）</label><input name="price" type="number" step="0.01" class="control" value="0.00"><p class="input-note">填 0 代表免费，金额保留两位小数</p></div>
      <div class="field full"><label class="required">关联车系</label><div class="check-grid">${vehicles.map((v,i)=>`<label><input type="checkbox" ${i<6?'checked':''}>${v}</label>`).join('')}</div></div>
    </div></section>
    <section class="form-section"><h2 class="section-title">门店与素材</h2><div class="form-grid"><div class="field"><label class="required">关联门店</label><select name="store" class="control" required><option>全国 823 家专营店</option><option>华南区域专营店</option><option>仅指定门店</option></select><p class="input-note">可通过模板批量导入门店</p></div><div class="field"><label>活动封面图</label><label class="upload-box"><input type="file" accept="image/*" hidden><span><strong>＋</strong>点击上传 200 × 200 图片</span></label></div><div class="field"><label>每日留资上限</label><input type="number" class="control" value="5000"></div><div class="field"><label>上限提示文案</label><input class="control" value="今日名额已满，请明日再试"></div></div></section>
    <section class="form-section"><h2 class="section-title">SEO 与微信分享</h2><div class="form-grid"><div class="field full"><label>SEO 标题</label><input name="seo" class="control" placeholder="建议 30 个汉字以内"></div><div class="field"><label>关键词</label><input class="control" placeholder="多个关键词用英文逗号分隔"></div><div class="field"><label>分享标题</label><input class="control" placeholder="填写微信分享标题"></div><div class="field full"><label>活动描述</label><textarea class="control" placeholder="请输入活动摘要"></textarea></div></div></section>
    <section class="form-section"><h2 class="section-title">专题页详情</h2><div class="field"><label>活动说明</label><div class="editor"><div class="editor-toolbar"><button type="button"><b>B</b></button><button type="button"><i>I</i></button><button type="button"><u>U</u></button><button type="button">≡</button><button type="button">☷</button><button type="button">🔗</button><button type="button">▣</button></div><textarea name="detail" class="control" placeholder="输入活动规则、权益说明或其他详情"></textarea></div></div></section>
    <section class="form-section"><h2 class="section-title">活动状态</h2><div class="form-grid"><div class="field"><label class="required">状态</label><div class="radio-row"><label><input type="radio" name="status" value="enabled" checked>启用</label><label><input type="radio" name="status" value="disabled">禁用</label></div></div><div class="field"><label>线索下发</label><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></div></div></section>
    <div class="form-actions"><button type="submit" class="btn primary">提交活动</button><button type="reset" class="btn">重置</button><button type="button" class="btn ghost" data-page="activities">取消</button></div>
  </div></form>`;
}

function couponListView() {
  const f = state.couponFilters;
  const rows = state.coupons.filter(x => (!f.id || String(x.id).includes(f.id)) && (!f.title || x.title.toLowerCase().includes(f.title.toLowerCase())) && (!f.type || x.type===f.type) && (!f.status || x.status===f.status));
  const tableRows = rows.map((x,i)=>`<tr><td>${i+1}</td><td><strong>${x.id}</strong></td><td><div class="row-title">${esc(x.title)}<div class="row-sub">${esc(x.desc)}</div></div></td><td>${esc(x.brand)}</td><td>${esc(x.scene)}</td><td>${esc(x.type)}</td><td>${esc(x.verify)}</td><td>${esc(x.condition)}</td><td>${statusTag(x.status,'coupon')}</td><td class="actions"><div class="button-row"><button class="btn small" data-coupon-action="view" data-id="${x.id}">查看</button><button class="btn small" data-coupon-action="edit" data-id="${x.id}" ${x.status==='active'?'disabled':''}>编辑</button><button class="btn small ${x.status==='active'?'danger':''}" data-coupon-action="toggle" data-id="${x.id}" ${x.status==='expired'?'disabled':''}>${x.status==='active'?'暂停':'投放'}</button></div></td></tr>`).join('');
  return `${pageHead("卡券列表", "管理购车抵用券、礼品券和门店营销权益", '<button class="btn primary" data-page="coupon-create">＋ 新增卡券</button><button class="btn" id="syncMallCoupons">同步商城卡券</button><button class="btn" id="exportCoupons">导出</button>')}
  <section class="card"><div class="card-body"><div class="filters"><div class="field"><label>券ID</label><input id="couponId" class="control" value="${esc(f.id)}" placeholder="请输入"></div><div class="field"><label>标题</label><input id="couponTitle" class="control" value="${esc(f.title)}" placeholder="请输入"></div><div class="field"><label>卡券类型</label><select id="couponType" class="control"><option value="">全部类型</option>${["厂家代金券","专营店代金券","礼品券"].map(v=>`<option ${f.type===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label>投放状态</label><select id="couponStatus" class="control"><option value="">全部状态</option><option value="active" ${f.status==='active'?'selected':''}>已投放</option><option value="paused" ${f.status==='paused'?'selected':''}>已暂停</option><option value="expired" ${f.status==='expired'?'selected':''}>已过期</option></select></div><div class="button-row"><button class="btn" id="resetCoupons">重置</button><button class="btn primary" id="queryCoupons">查询</button></div></div></div></section>
  <section class="card"><div class="card-header"><h2>卡券列表<span class="count">${rows.length} 条记录</span></h2><div class="button-row"><button class="btn icon-only" id="refreshCoupons">↻</button><button class="btn icon-only">↕</button><button class="btn icon-only">⚙</button></div></div><div class="table-wrap"><table><thead><tr><th>序号</th><th>券ID</th><th>卡券</th><th>品牌</th><th>业务场景</th><th>卡券类型</th><th>核销方式</th><th>核销条件</th><th>投放状态</th><th>操作</th></tr></thead><tbody>${tableRows || `<tr><td colspan="10"><div class="empty">⌕<strong>没有匹配的卡券</strong>请调整筛选条件后重试</div></td></tr>`}</tbody></table></div>${pagination(rows.length)}</section>`;
}

function couponCreateView() {
  const editing = state.coupons.find(x=>x.id===state.editingCouponId) || {};
  const isEdit = !!editing.id;
  return `${pageHead(isEdit?"编辑卡券":"新增卡券", isEdit?`正在编辑券 ID：${editing.id}`:"配置卡券基础信息、核销规则和适用范围", '<button class="btn" data-page="coupons">返回列表</button>')}
  <form id="couponForm" class="card form-card"><div class="card-body"><section class="form-section"><h2 class="section-title">卡券基础信息</h2><div class="form-grid">
    ${isEdit?`<div class="field full"><label>ID 主键</label><input class="control" value="${editing.id}" disabled></div>`:''}
    <div class="field"><label class="required">卡券类型</label><select name="type" class="control" required>${["厂家代金券","专营店代金券","礼品券"].map(v=>`<option ${editing.type===v?'selected':''}>${v}</option>`).join('')}</select></div>
    <div class="field"><label class="required">品牌</label><select name="brand" class="control" required><option>东风日产-日产</option><option>启辰</option><option>英菲尼迪</option></select></div>
    <div class="field"><label class="required">业务场景</label><select name="scene" class="control" required>${["节点营销","品牌联动","用户关怀","到店试驾"].map(v=>`<option ${editing.scene===v?'selected':''}>${v}</option>`).join('')}</select></div>
    <div class="field"><label class="required">核销方式</label><div class="radio-row"><label><input type="radio" name="verify" value="DNDC 核销" checked>DNDC 核销</label><label><input type="radio" name="verify" value="DMS 核销">DMS 核销</label><label><input type="radio" name="verify" value="无需核销">无需核销</label></div></div>
    <div class="field full"><label class="required">核销条件</label><div class="radio-row"><label><input type="radio" name="condition" value="核销店铺与意向店铺一致" ${editing.condition && editing.condition!=='否'?'checked':''}>核销店铺与意向店铺一致</label><label><input type="radio" name="condition" value="否" ${!editing.condition || editing.condition==='否'?'checked':''}>否</label></div></div>
    <div class="field"><label class="required">卡券标题</label><input name="title" class="control" required value="${esc(editing.title||'')}" placeholder="例如：至高1500元购车抵用券"></div>
    <div class="field"><label class="required">卡券描述</label><input name="desc" class="control" required value="${esc(editing.desc||'')}" placeholder="简要说明卡券权益"></div>
    <div class="field"><label>卡券面值（元）</label><input name="amount" type="number" min="1" max="9999" class="control" value="1500"></div>
    <div class="field"><label class="required">发布数量</label><input name="quantity" type="number" min="1" class="control" value="100000" required></div>
    <div class="field"><label class="required">领取限制</label><input name="limit" type="number" min="0" max="50" class="control" value="1" required><p class="input-note">单个手机号可领取数量，0 代表不限制</p></div>
    <div class="field"><label class="required">领取时间</label><input type="date" class="control" value="2026-11-18" required></div>
    <div class="field"><label class="required">核销开始时间</label><input type="date" class="control" value="2026-11-18" required></div>
    <div class="field"><label class="required">核销结束时间</label><input type="date" class="control" value="2026-12-18" required></div>
    <div class="field"><label class="required">短信模板</label><select class="control"><option>默认模板</option><option>MSG000101100834</option><option>不发送短信</option></select></div>
    <div class="field"><label class="required">来源渠道</label><select class="control"><option>日产品牌官网</option><option>日产智联</option><option>专营店</option></select></div>
  </div></section>
  <section class="form-section"><h2 class="section-title">卡券关联信息</h2><div class="form-grid"><div class="field full"><label>适用车系</label><div class="check-grid">${vehicles.map((v,i)=>`<label><input type="checkbox" ${i%2===0?'checked':''}>${v}</label>`).join('')}</div></div><div class="field"><label class="required">适用专营店</label><select class="control"><option>全国 795 家专营店</option><option>华东区域专营店</option><option>自定义门店</option></select></div><div class="field"><label>批量导入门店</label><label class="upload-box"><input type="file" hidden><span><strong>⇧</strong>选择上传文件</span></label></div><div class="field full"><label>卡券使用规则</label><div class="editor"><div class="editor-toolbar"><button type="button"><b>B</b></button><button type="button"><i>I</i></button><button type="button"><u>U</u></button><button type="button">≡</button><button type="button">☷</button><button type="button">🔗</button></div><textarea class="control">一、活动周期：2026年11月18日-12月18日\n二、本券仅可与购车订单同时使用，不可提现、买卖或转让。\n三、更多活动详情请咨询全国东风日产专营店。</textarea></div></div></div></section>
  <div class="form-actions"><button type="submit" class="btn primary">${isEdit?'保存修改':'提交卡券'}</button><button type="reset" class="btn">重置</button><button type="button" class="btn ghost" data-page="coupons">取消</button></div></div></form>`;
}

function render() {
  const valid = Object.keys(pageMeta).includes(state.page); if (!valid) state.page = "activities";
  const meta = pageMeta[state.page];
  document.querySelector("#crumbs").innerHTML = `${meta[0]} / <strong>${meta[1]}</strong>`;
  document.querySelectorAll("[data-page]").forEach(b=>b.classList.toggle("active", b.dataset.page===state.page));
  const views = { overview: overviewView, activities: activityListView, "activity-create": activityCreateView, coupons: couponListView, "coupon-create": couponCreateView };
  document.querySelector("#main").innerHTML = views[state.page]();
  bindPageEvents();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function downloadCSV(filename, rows) {
  const csv = rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n');
  const blob = new Blob(["\ufeff"+csv], {type:"text/csv;charset=utf-8"});
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename; a.click(); URL.revokeObjectURL(a.href); toast("导出文件已生成");
}

function bindPageEvents() {
  document.querySelectorAll("[data-page]").forEach(el=>el.addEventListener("click", e=>{ e.preventDefault(); if (el.dataset.page!=="coupon-create") state.editingCouponId=null; navigate(el.dataset.page); }));
  if (state.page === "activities") {
    document.querySelector("#queryActivities").onclick = () => { state.activityFilters = {keyword: document.querySelector('#activityKeyword').value.trim(), type: document.querySelector('#activityType').value}; render(); };
    document.querySelector("#resetActivities").onclick = () => { state.activityFilters={keyword:"",type:""}; render(); };
    document.querySelector("#refreshActivities").onclick = () => { render(); toast("活动列表已刷新"); };
    document.querySelector("#exportActivities").onclick = () => downloadCSV("活动列表.csv", [["活动ID","名称","类型","终端","状态"],...state.activities.map(x=>[x.id,x.name,x.type,x.terminal,x.status])]);
    document.querySelectorAll("[data-preview]").forEach(a=>a.onclick=e=>{e.preventDefault(); toast("这是演示环境中的活动路径预览");});
    document.querySelectorAll("[data-activity-action]").forEach(btn=>btn.onclick=()=>handleActivityAction(btn.dataset.activityAction, Number(btn.dataset.id)));
  }
  if (state.page === "activity-create") {
    const multiSelect = document.querySelector("#activityCouponSelect");
    const trigger = multiSelect.querySelector(".multi-select-trigger");
    const checks = [...multiSelect.querySelectorAll('input[name="couponIds"]')];
    const maxSelect = document.querySelector("#maxCouponCount");
    const updateCouponSelection = () => { const chosen=checks.filter(x=>x.checked); document.querySelector("#selectedCouponText").textContent=chosen.length?`已选择 ${chosen.length} 张卡券`:"请选择卡券"; maxSelect.disabled=!chosen.length; maxSelect.innerHTML=chosen.length?`<option value="">请选择</option>${chosen.map((_,i)=>`<option value="${i+1}">${i+1}</option>`).join('')}`:'<option value="">请先选择卡券ID</option>'; };
    trigger.onclick = e => { e.stopPropagation(); multiSelect.classList.toggle("open"); };
    checks.forEach(check=>check.onchange=updateCouponSelection);
    document.addEventListener("click", e=>{ if(!multiSelect.contains(e.target)) multiSelect.classList.remove("open"); }, {once:true});
    document.querySelector("#activityForm").onsubmit = e => { e.preventDefault(); const fd=new FormData(e.target); const id=Math.max(...state.activities.map(x=>x.id))+1; const couponIds=checks.filter(x=>x.checked).map(x=>Number(x.value)); state.activities.unshift({id,name:fd.get('subname'),type:fd.get('type'),terminal:'PC / WAP',status:fd.get('status')||'enabled',url:String(fd.get('url')).replace('https://www.dongfeng-nissan.com.cn/',''),created:new Date().toISOString().slice(0,10),period:`${fd.get('start')} 至 ${fd.get('end')}`,couponIds,maxCouponCount:fd.get('maxCouponCount')?Number(fd.get('maxCouponCount')):null,loginRequired:fd.get('loginRequired')||null}); save(); toast("活动已创建并加入列表"); setTimeout(()=>navigate('activities'),500); };
  }
  if (state.page === "coupons") {
    document.querySelector("#queryCoupons").onclick=()=>{state.couponFilters={id:document.querySelector('#couponId').value.trim(),title:document.querySelector('#couponTitle').value.trim(),type:document.querySelector('#couponType').value,status:document.querySelector('#couponStatus').value};render();};
    document.querySelector("#resetCoupons").onclick=()=>{state.couponFilters={id:"",title:"",type:"",status:""};render();};
    document.querySelector("#refreshCoupons").onclick=()=>{render();toast("卡券列表已刷新");};
    document.querySelector("#syncMallCoupons").onclick=showMallCouponModal;
    document.querySelector("#exportCoupons").onclick=()=>downloadCSV("卡券列表.csv",[["券ID","标题","类型","品牌","状态"],...state.coupons.map(x=>[x.id,x.title,x.type,x.brand,x.status])]);
    document.querySelectorAll("[data-coupon-action]").forEach(btn=>btn.onclick=()=>handleCouponAction(btn.dataset.couponAction,Number(btn.dataset.id)));
  }
  if (state.page === "coupon-create") {
    document.querySelector("#couponForm").onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target);const payload={title:fd.get('title'),desc:fd.get('desc'),type:fd.get('type'),brand:fd.get('brand'),scene:fd.get('scene'),verify:fd.get('verify'),condition:fd.get('condition'),status:'paused',published:new Date().toISOString().slice(0,10)};if(state.editingCouponId){const idx=state.coupons.findIndex(x=>x.id===state.editingCouponId);state.coupons[idx]={...state.coupons[idx],...payload};toast("卡券修改已保存");}else{payload.id=Math.max(...state.coupons.map(x=>x.id))+1;state.coupons.unshift(payload);toast("卡券已创建，当前为待投放状态");}save();state.editingCouponId=null;setTimeout(()=>navigate('coupons'),500);};
  }
}

function handleActivityAction(action,id){const item=state.activities.find(x=>x.id===id);if(!item)return;if(action==='view'){toast(`正在查看：${item.name}`);}if(action==='toggle'){item.status=item.status==='enabled'?'disabled':'enabled';save();render();toast(item.status==='enabled'?'活动已启用':'活动已禁用');}if(action==='copy'){const copy={...item,id:Math.max(...state.activities.map(x=>x.id))+1,name:`${item.name}（副本）`,status:'disabled',created:new Date().toISOString().slice(0,10)};state.activities.unshift(copy);save();render();toast('活动已复制');}if(action==='delete'){confirmBox('删除活动',`确认删除“${item.name}”吗？该操作仅影响当前演示数据。`,()=>{state.activities=state.activities.filter(x=>x.id!==id);save();render();toast('活动已删除');});}}
function handleCouponAction(action,id){const item=state.coupons.find(x=>x.id===id);if(!item)return;if(action==='view'){toast(`查看卡券：${item.title}`);}if(action==='edit'){state.editingCouponId=id;navigate('coupon-create');}if(action==='toggle'){item.status=item.status==='active'?'paused':'active';save();render();toast(item.status==='active'?'卡券已恢复投放':'卡券已暂停投放');}}

document.querySelector("#sidebarToggle").onclick=()=>document.querySelector("#sidebar").classList.toggle("collapsed");
document.querySelector(".topbar").addEventListener("click",e=>{if(innerWidth<=820 && e.target===document.querySelector('.topbar'))document.querySelector('#sidebar').classList.toggle('mobile-open');});
window.addEventListener("hashchange",()=>{state.page=location.hash.replace('#','')||'activities';render();});
render();
