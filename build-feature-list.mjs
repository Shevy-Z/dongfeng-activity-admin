import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = fileURLToPath(new URL("./outputs/feature-list/", import.meta.url));
const workbook = Workbook.create();
const sheet = workbook.worksheets.add("功能清单");
sheet.showGridLines = false;
sheet.freezePanes.freezeRows(1);

const rows = [
  ["序号", "一级模块", "二级模块", "三级模块", "功能模块", "描述", "修订类型", "技术状态", "验收结果"],
  [1, "营销运营后台", "卡券管理", "卡券列表", "同步商城卡券入口", "在卡券列表操作区新增“同步商城卡券”按钮，点击后打开商城卡券选择弹窗。", "新增", "已完成", "通过"],
  [2, "营销运营后台", "卡券管理", "卡券列表", "商城卡券选择", "弹窗包含查询条件、卡券明细、分页展示，并在序号前增加单选及全选列。", "新增", "已完成", "通过"],
  [3, "营销运营后台", "卡券管理", "卡券列表", "重复卡券校验", "确认同步时校验已存在卡券；多个ID以顿号分隔，单个ID单独显示，并阻止重复同步。", "新增", "已完成", "通过"],
  [4, "营销运营后台", "卡券管理", "卡券列表", "同步结果反馈", "无重复卡券时批量加入卡券列表并提示“同步卡券成功”；未选择数据时给出选择提示。", "新增", "已完成", "通过"],
  [5, "营销运营后台", "活动管理", "新增活动", "卡券ID多选", "卡券ID由单选下拉改为多选下拉，选项保持“卡券名称 | 卡券ID”展示形式。", "修改", "已完成", "通过"],
  [6, "营销运营后台", "活动管理", "新增活动", "最多可选卡券张数", "新增非必填下拉字段；可选值范围为1至已选择的卡券数量，未选卡券时禁用。", "新增", "已完成", "通过"],
  [7, "营销运营后台", "活动管理", "新增活动", "页面是否要求登录", "新增非必填字段，提供“是”和“否”两个单选项。", "新增", "已完成", "通过"],
];

sheet.getRange("A1:I8").values = rows;
sheet.mergeCells("B2:B8");
sheet.mergeCells("C2:C5");
sheet.mergeCells("C6:C8");
sheet.mergeCells("D2:D5");
sheet.mergeCells("D6:D8");

const used = sheet.getRange("A1:I8");
used.format.font = { name: "Arial", size: 10, color: "#1F2937" };
used.format.verticalAlignment = "center";
used.format.borders = { preset: "all", style: "thin", color: "#2B2B2B" };
sheet.getRange("A1:I1").format = {
  fill: "#69D2EE",
  font: { name: "Arial", size: 10, bold: true, color: "#111827" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
  borders: { preset: "all", style: "thin", color: "#2B2B2B" },
};
sheet.getRange("A2:E8").format.horizontalAlignment = "center";
sheet.getRange("G2:I8").format.horizontalAlignment = "center";
sheet.getRange("F2:F8").format.wrapText = true;
sheet.getRange("A1:A8").format.columnWidth = 8;
sheet.getRange("B1:B8").format.columnWidth = 16;
sheet.getRange("C1:D8").format.columnWidth = 14;
sheet.getRange("E1:E8").format.columnWidth = 24;
sheet.getRange("F1:F8").format.columnWidth = 62;
sheet.getRange("G1:I8").format.columnWidth = 13;
sheet.getRange("A1:I1").format.rowHeight = 25;
sheet.getRange("A2:I8").format.rowHeight = 48;
sheet.getRange("B2:B8").format.fill = "#DFEAFB";
sheet.getRange("C2:D8").format.fill = "#F7FAFC";
sheet.getRange("H2:H8").format.fill = "#EAF7EF";
sheet.getRange("I2:I8").format.fill = "#EAF7EF";
sheet.getRange("H2:I8").format.font = { name: "Arial", size: 10, bold: true, color: "#15803D" };

workbook.recalculate();
const inspect = await workbook.inspect({ kind: "table", range: "功能清单!A1:I8", include: "values,formulas", tableMaxRows: 10, tableMaxCols: 10 });
console.log(inspect.ndjson);
const errors = await workbook.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!", options: { useRegex: true, maxResults: 100 }, summary: "final formula error scan" });
console.log(errors.ndjson);
await fs.mkdir(outputDir, { recursive: true });
const preview = await workbook.render({ sheetName: "功能清单", range: "A1:I8", scale: 1.5, format: "png" });
await fs.writeFile(`${outputDir}/功能清单预览.png`, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}/官网后台活动_功能清单.xlsx`);
